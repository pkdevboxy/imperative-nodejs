const _ = require("lodash");
const Promise = require("bluebird");
const uuid = require("node-uuid");
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
     * Starts a new database. If databaseDir is empty, an empty database is
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
     * Flushes db on disk.
     *
     * @returns {Promise}
     */
    flush() {
        return this._log.flush();
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

    /**
     * Appends new item to user's todo list
     *
     * @param {string} login user login
     * @param {string} text todo text
     * @returns {Promise}
     */
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

            const newTodo = {id: uuid.v4(), text: textId, isDone: false};
            todos.push(newTodo);
            user.todo = yield self._persistObject(todos);
            yield self._persistDB();
            return newTodo.id;
        });
    }

    /**
     * Updates  isDone status
     * @param {string} login user login
     * @param {uuid} id todo id
     * @param {boolean} isDone
     * @returns {Promise}
     */
    updateTodo(login, id, {isDone}) {
        return this._getUserTodos(login).then(({todos, user}) => {
            const todo = todos.find(t => t.id === id);
            if (todo === undefined) {
                throw new Error("No such todo: " + id);
            }
            todo.isDone = isDone;
            return this._persistObject(todos).then(id => {
                user.todo = id;
                return this._persistDB();
            });
        });
    }

    /**
     * Removes specified todo from user's todo list.
     *
     * @param {string} login user login.
     * @param {uuid} id todo id.
     * @returns {Promise}
     */
    removeTodo(login, id) {
        return this._getUserTodos(login).then(({todos, user}) => {
            const position = todos.findIndex(t => t.id === id);
            if (position === -1) {
                throw new Error("No such todo: " + id);
            }
            todos.splice(position, 1);
            return this._persistObject(todos).then(id => {
                user.todo = id;
                return this._persistDB();
            });
        });
    }

    /**
     * Returns all user's todos.
     *
     * @param {string} login user login.
     * @returns {Promise.<[Object]>}
     */
    listTodos(login) {
        const fetchTodo = (todo) => this._getObject(todo.text).then(text => ({
            text,
            id: todo.id,
            isDone: todo.isDone
        }));

        return this._getUserTodos(login).then(({todos}) =>
                Promise.all(todos.map(fetchTodo))
        );
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

    _getUserTodos(login) {
        const user = this._getUserByLogin(login);
        if (!user) {
            return Promise.reject(new Error("No such user: " + login));
        }

        return user.todo === null
            ? Promise.resolve({user, todos: []})
            : this._getObject(user.todo).then(todos => ({user, todos}));
    }
};

function decode(data) {
    return sign.removeChecksum(JSON.parse(data.toString()));
}

function encode(obj) {
    return new Buffer(JSON.stringify(sign.addChecksum(obj)));
}
