const Promise = require("bluebird");
const DB = require("./db");

module.exports = class TodoApp {
    static new(options) {
        return new TodoApp(options);
    }

    start() {
        return this._db.start();
    }

    stop() {
        return this._db.stop();
    }

    createUser(login) {
        return this._db.createUser(login);
    }

    listUsers() {
        return this._db.listUsers();
    }

    addTodo(login, text) {
        this._db[login].push(text);
        return Promise.resolve();
    }

    listTodos(login) {
        return Promise.resolve(this._db[login]);
    }

    constructor(options) {
        this._db = DB.new(options);
    }
};
