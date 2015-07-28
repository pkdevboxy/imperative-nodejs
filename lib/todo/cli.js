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
    const hits = completions.filter(c => c.indexOf(line) === 0 );
    return [hits.length ? hits : completions, line];
}


function prompt(message) {
    return new Promise((resolve) => rl.question(message, resolve));
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
                console.log(`Hello, ${user}!`);
                return Promise.resolve();
            },
            add(...words) {
                if (user === null) {
                    console.log("Do userset first!");
                    return Promise.resolve();
                }
                return app.addTodo(user, words.join(" "));
            },
            list() {
                if (user === null) {
                    console.log("Do userset first!");
                    return Promise.resolve();
                }

                return app.listTodos(user).then(todos => {
                    console.log(`${user} TODOs:`);
                    console.log(todos.join("\n"));
                });
            }
        };

        while (true) {
            const input = yield prompt(">>> ");
            const [cmd, ...args] = input.split(" ");

            if (cmd in commands) {
                yield commands[cmd](...args);
            } else {
                console.log("Unknown command", cmd);
                console.log(help);
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
