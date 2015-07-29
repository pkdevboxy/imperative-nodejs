const _ = require("lodash");
const fs = require("fs");
const os = require("os");
const path = require("path");
const readline = require("readline");
const {go} = require("imp/async");
const {TodoApp} = require("imp/todo");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
    completer
});

let commands;

function completer(line) {
    const completions = Object.keys(commands);
    const hits = completions.filter(c => c.indexOf(line) === 0);
    return [hits.length ? hits : completions, line];
}


function prompt(message) {
    return new Promise((resolve) => rl.question(message, resolve));
}

function printTodos(list) {
    for (const {text, position} of list) {
        console.log(`${position + 1}. ${text}`);
    }
}


function main() {
    console.log("* TODO *");
    const directory = path.join(os.tmpdir(), "todo");
    try {
        fs.mkdirSync(directory);
        console.log("Created new log at", directory);
    } catch (e) {
        console.log("Using existing log at", directory);
    }

    const help = `Commands:
          quit
          useradd <login>
          userlist
          userset <login>
          add <todo>
          remove <idx>
          search <query>
          list
          `;

    console.log(help);

    go(function* () {
        const app = yield TodoApp.start({databaseDir: directory});
        rl.on("close", () => app.stop());
        let user = null;
        commands = {
            quit() {
                return app.stop();
            },
            useradd(name) {
                return app.createUser(name).then(() => user = name);
            },
            userlist() {
                return app.listUsers().then(users => {
                    console.log(_.pluck(users, "login").join(", "));
                });
            },
            userset(login) {
                user = login;
                _.assign(commands, userCommands);
                console.log(`Hello, ${user}!`);
                return Promise.resolve();
            }
        };

        const userCommands = {
            add(...words) {
                return app.addTodo(user, words.join(" "));
            },
            list() {
                return app.listTodos(user).then(todos => {
                    console.log(`${user} TODOs:`);
                    printTodos(todos);
                });
            },
            remove(idx) {
                return app.removeTodo(user, parseInt(idx, 10) - 1);
            },
            search(query) {
                return app.search(user, query).then(printTodos);
            }
        };

        while (true) {
            const input = yield prompt(">>> ");
            const [cmd, ...args] = input.split(" ");

            if (cmd in commands) {
                yield commands[cmd](...args);
            } else {
                if (cmd in userCommands) {
                    console.log("Activate user with userset first");
                } else {
                    console.log("Unknown command", cmd);
                    console.log("Available commands:", Object.keys(commands).join(", "));
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


main();
