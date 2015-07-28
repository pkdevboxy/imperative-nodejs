const Promise = require("bluebird");
const {go} = require("imp/async");
const sign = require("./sign");
const Log = require("./log");

module.exports = class DB {
    static new(options) {
        return new DB(options);
    }

    start() {
        return this._log.start()
            .then(() => this._log.fetchLastRecord())
            .then(record => {
                if (record) {
                    const obj = JSON.parse(record.toString());
                    if ("users" in obj && sign.check(obj)) {
                        this._users = obj.users;
                    } else {
                        throw new Error("Invalid log");
                    }
                } else {
                    this._users = [];
                }
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

    constructor(options) {
        this._log = Log.new(options);
        this._users = [];
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
