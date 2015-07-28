const Promise = require("bluebird");
const {go} = require("imp/async");
const sign = require("./sign");
const Log = require("./log");

module.exports = class DB {
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

    stop() {
        return this._log.flush();
    }

    createUser(login) {
        const id = this._nextUserId();
        const user = {id, login};

        this._users.push(user);
        return this._persist().return(id);
    }

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
