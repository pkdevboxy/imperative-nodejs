const _ = require("lodash");
const fs = require("fs");
const os = require("os");
const path = require("path");
const readline = require("readline");
const {go} = require("imp/async");
const {TodoApp} = require("imp/todo");


const help = `Commands:
          quit
          useradd <login>
          userlist
          userset <login>

          add <todo>
          search <query>
          list

          remove <idx>
          check <idx>
          uncheck <idx>
          `;

function printTodos({todos}) {
    todos.forEach(({text, isDone}, idx) => {
        const mark = isDone ? "✓" : " ";
        console.log(`${idx + 1}. ${mark} ${text}`);
    });
}

const todoListCommands = {
    add(state, ...words) {
        return state.app.addTodo(state.user, words.join(" ")).then(() =>
                todoListCommands.list(state)
        );
    },
    list(state) {
        return state.app.listTodos(state.user).then(todos => {
            _.assign(state.commands, singleTodoCommands);
            state.todos = todos;
            printTodos(state);
        });
    },
    search(state, query) {
        return state.app.search(state.user, query).then(todos => {
            _.assign(state.commands, singleTodoCommands);
            state.todos = todos;
            printTodos(state);
        });
    }
};

const singleTodoCommands = {
    remove(state, position) {
        const id = state.todos[position - 1].id;
        return state.app.removeTodo(state.user, id).then(() =>
            todoListCommands.list(state));
    },
    check(state, position) {
        const id = state.todos[position - 1].id;
        return state.app.updateTodo(state.user, id, {isDone: true}).then(() =>
            todoListCommands.list(state));
    },
    uncheck(state, position) {
        const id = state.todos[position - 1].id;
        return state.app.updateTodo(state.user, id, {isDone: false}).then(() =>
            todoListCommands.list(state));
    }
};

const defaultCommands = {
    quit({app}) {
        return app.stop();
    },
    useradd(state, name) {
        return state.app.createUser(name).then(() =>
            defaultCommands.userset(state, name));
    },
    userlist({app}) {
        return app.listUsers().then(users => {
            console.log(_.pluck(users, "login").join(", "));
        });
    },
    userset(state, login) {
        state.user = login;
        _.assign(state.commands, todoListCommands);
        console.log(`Hello, ${login}!`);
        return Promise.resolve();
    }
};

function ui(directory) {
    const state = {
        app: null,
        commands: defaultCommands,
        user: null,
        todos: null
    };


    function completer(line) {
        const completions = Object.keys(state.commands);
        const hits = completions.filter(c => c.indexOf(line) === 0);
        return [hits.length ? hits : completions, line];
    }

    const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout,
        completer
    });
    rl.on("close", () => state.app.stop());

    function prompt() {
        const message = state.user
            ? state.user + " > "
            : ">>> ";
        return new Promise((resolve) => rl.question(message, resolve));
    }


    go(function* () {
        state.app = yield TodoApp.start({databaseDir: directory});


        while (true) {
            const input = yield prompt();
            const [cmd, ...args] = input.split(" ");

            if (cmd in state.commands) {
                yield state.commands[cmd](state, ...args);
            } else {
                if (cmd in todoListCommands) {
                    console.log("Activate user with `userset` first");
                } else if (cmd in singleTodoCommands) {
                    console.log("List todos with `list` first");
                } else {
                    console.log("Unknown command", cmd);
                    console.log("Available commands:",
                        Object.keys(state.commands).join(", "));
                }
            }
            if (cmd === "quit") {
                console.log("Goodbye!");
                rl.close();
                break;
            }
        }
    });

}

function main() {
    console.log("* TODO *");
    const directory = path.join(os.tmpdir(), "todo");

    try {
        fs.mkdirSync(directory);
        console.log("Created new log at", directory);
    } catch (ignored) {
        console.log("Using existing log at", directory);
    }

    console.log(help);
    ui(directory);
}


main();
