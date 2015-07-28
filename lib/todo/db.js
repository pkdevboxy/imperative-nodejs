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
                if (!("users" in obj && sign.check(obj))) {
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
        return this._log.flush();
    }

    /**
     * Creates new user.
     *
     * @param {string} login
     * @returns {Promise.<int>} user id
     */
    createUser(login) {
        const id = this._nextUserId();
        const user = {id, login};

        this._users.push(user);
        return this._persist().return(id);
    }

    /**
     * Gets all users.
     *
     * @returns {Promise.<[Object]>} array of users
     */
    listUsers() {
        return Promise.resolve(this._users);
    }

    constructor(log, users) {
        this._log = log;
        this._users = users;
    }

    _nextUserId() {
        return Math.max(0, ...this._users.map(u => u.id)) + 1;
    }

    _persist() {
        const data = {users: this._users};
        sign.addChecksum(data);
        return this._log.addRecord(new Buffer(JSON.stringify(data)));
    }
};
