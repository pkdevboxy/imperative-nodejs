const _ = require("lodash");
const Promise = require("bluebird");
const {go} = require("imp/async");
const sign = require("./sign");
const Log = require("./log");

/**
 * A todo database.
 *
 * @type {DB}
 */
module.exports = class DB {
    /**
     * Starts a new databse. If databseDir is empty, and empty database is
     * created, else a database is read from the directory.
     *
     * @param options.logFileSize size of the single log file
     * @param options.databaseDir location of the database
     * @returns {Promise.<DB>}
     */
    static start(options) {
        return go(function* () {
            const log = yield Log.start(options);
            let users = [];
            const record = yield log.fetchLastRecord();
            if (record) {
                const obj = JSON.parse(record.toString(obj));
                sign.check(obj);
                if (!("users" in obj)) {
                    throw new Error("Invalid log");
                }
                users = obj.users;
            }
            return new DB(log, users);
        });
    }

    /**
     * Stops the database and ensures that all changes are persisted.
     * @returns {Promise}
     */
    stop() {
        return this._persistDB()
            .then(() => this._log.flush());
    }

    /**
     * Creates new user.
     *
     * @param {string} login
     * @returns {Promise.<int>} user id
     */
    createUser(login) {
        const user = {login, todo: null};

        this._users.push(user);
        return this._persistDB().return(login);
    }

    /**
     * Gets all users.
     *
     * @returns {Promise.<[Object]>} array of users
     */
    listUsers() {
        return Promise.resolve(this._users.map(u => _.pick(u, ["login"])));
    }

    addTodo(login, text) {
        const user = _.find(this._users, (u) => u.login === login);
        if (!user) {
            return Promise.reject(new Error("No such user: " + login));
        }

        const self = this;
        return go(function* () {
            const todos = user.todo
                  ? (yield self._getObject(user.todo))
                  : {todos: []};

            todos.todos.push(text);
            const id = yield self._persistObject(todos);
            user.todo = id;
            return (yield self._persistDB());
        });
    }

    listTodos(login) {
        const user = _.find(this._users, (u) => u.login === login);
        if (!user) {
            return Promise.reject(new Error("No such user: " + login));
        }

        if (user.todo === null) {
            return Promise.resolve([]);
        }

        return this._getObject(user.todo).then(todos => todos.todos);
    }

    constructor(log, users) {
        this._log = log;
        this._users = users;
        this._todos = {};
    }

    _getObject(offset) {
        return this._log.fetchRecord(offset).then(record => {
            const obj = JSON.parse(record.toString());
            sign.check(obj);
            return obj;
        });
    }

    _persistObject(obj) {
        sign.addChecksum(obj);
        return this._log.addRecord(new Buffer(JSON.stringify(obj)));
    }

    _persistDB() {
        return this._persistObject({users: this._users});
    }
};
