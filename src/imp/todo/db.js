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
     * Starts a new database. If databaseDir is empty, and empty database is
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
                const obj = decode(record);
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
        const user = this._getUserByLogin(login);
        if (!user) {
            return Promise.reject(new Error("No such user: " + login));
        }

        const self = this;
        return go(function* () {
            const textId = yield self._persistObject(text);
            const todos = user.todo
                  ? (yield self._getObject(user.todo))
                  : [];

            todos.push(textId);
            user.todo = yield self._persistObject(todos);
            return (yield self._persistDB());
        });
    }

    removeTodo(login, position) {
        const user = this._getUserByLogin(login);
        if (!user) {
            return Promise.reject(new Error("No such user: " + login));
        }

        if (user.todo === null) {
            return Promise.reject(new Error("No such todo: " + position));
        }

        const self = this;
        return go(function* () {
            const todos = yield self._getObject(user.todo);
            if (!(position < todos.length)) {
                throw new Error("No such todo: " + position);
            }
            todos.splice(position, 1);
            user.todo = yield self._persistObject(todos);
            return (yield self._persistDB());
        });
    }

    listTodos(login) {
        const user = this._getUserByLogin(login);
        if (!user) {
            return Promise.reject(new Error("No such user: " + login));
        }

        if (user.todo === null) {
            return Promise.resolve([]);
        }

        const self = this;
        return go(function*() {
            const textIds = yield self._getObject(user.todo);
            const texts = yield Promise.all(textIds.map((id) => self._getObject(id)));
            return texts.map((text, position) => ({text, position}));
        });
    }

    constructor(log, users) {
        this._log = log;
        this._users = users;
        this._todos = {};
    }

    _getUserByLogin(login) {
        return _.find(this._users, (u) => u.login === login);
    }

    _getObject(offset) {
        return this._log.fetchRecord(offset).then(decode);
    }

    _persistObject(obj) {
        return this._log.addRecord(encode(obj));
    }

    _persistDB() {
        return this._persistObject({users: this._users});
    }
};

function decode(data) {
    return sign.removeChecksum(JSON.parse(data.toString()));
}

function encode(obj) {
    return new Buffer(JSON.stringify(sign.addChecksum(obj)));
}
