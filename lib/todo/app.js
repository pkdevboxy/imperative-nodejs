const Promise = require("bluebird");

module.exports = class TodoApp {
    static new(options) {
        return new TodoApp();
    }

    start() {
        return Promise.resolve();
    }

    createUser(login) {
        this._db[login] = [];
        return Promise.resolve(login);
    }

    addTodo(login, text) {
        this._db[login].push(text);
        return Promise.resolve();
    }

    listTodos(login) {
        return Promise.resolve(this._db[login]);
    }

    constructor() {
        this._db = {};
    }
};
