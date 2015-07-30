const Promise = require("bluebird");
const DB = require("./db");

/**
 * Todo application instance, which uses one database and serves many users.
 * @type {TodoApp}
 */
module.exports = class TodoApp {
    /**
     * Creates and starts a TodoApp.
     *
     * @param {number} options.logFileSize size of a single log file
     * @param {string} options.databaseDir database location
     * @param {number} options.flushInterval flush interval in milliseconds
     * @returns {Promise.<TodoApp>}
     */
    static start(options) {
        options.flushInterval = options.flushInterval || 1000;
        return DB.start(options)
            .then(db => new TodoApp(db, options.flushInterval));
    }

    /**
     * Stops TodoApp
     *
     * @returns {Promise}
     */
    stop() {
        clearInterval(this._flushInterval);
        return this._db.stop();
    }

    /**
     * Creates a new user.
     *
     * @param {String} login
     * @returns {Promise.<int>} user id.
     */
    createUser(login) {
        return this._db.createUser(login);
    }

    /**
     * Returns all users.
     *
     * @returns {Promise.<[Object]>} array of users.
     */
    listUsers() {
        return this._db.listUsers();
    }

    /**
     * Add a todo item.
     *
     * @param {string} login user login
     * @param {string} text todo text
     * @returns {Promise.<int>} todo id.
     */
    addTodo(login, text) {
        return this._db.addTodo(login, text);
    }

    /**
     * Updates todo status.
     *
     * @param {string} login user login
     * @param {uuid} id todo id.
     * @param {boolean} isDone new status
     * @returns {Promise}
     */
    updateTodo(login, id, {isDone}) {
        return this._db.updateTodo(login, id, {isDone});
    }

    /**
     * Removes a todo item by index.
     *
     * @param {string} login user login.
     * @param {uuid} id todo id.
     * @returns {Promise}
     */
    removeTodo(login, id) {
        return this._db.removeTodo(login, id);
    }

    /**
     * Returns todos of the user.
     *
     * @param {string} login user login
     * @returns {Promise.<[Object]>} array of todos.
     */
    listTodos(login) {
        return Promise.resolve(this._db.listTodos(login));
    }

    /**
     * Returns a list of todos with text including query.
     *
     * @param {string} login user login.
     * @param {string} query substring to search for.
     * @returns {Promise.<[Object]>} array of todos.
     */
    search(login, query) {
        return this.listTodos(login).then(todos =>
                todos.filter(s => s.text.includes(query))
        );
    }

    constructor(db, flushInterval) {
        this._db = db;
        this._flushInterval = setInterval(() => db.flush(), flushInterval);
    }
};
