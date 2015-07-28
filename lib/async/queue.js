const Promise = require("bluebird");

module.exports = class AsyncQueue {
    constructor() {
        this._pendingTasks = [];
        this._pendingDeferals = [];
    }

    push(task) {
        this._pendingTasks.push(task);
        this._tryAdvance();
    }

    pop() {
        const d = Promise.pending();
        this._pendingDeferals.push(d);
        this._tryAdvance();
        return d.promise;
    }

    _tryAdvance() {
        if (this._pendingTasks.length > 0 && this._pendingDeferals.length > 0) {
            this._pendingDeferals.pop()
                .fulfill(this._pendingTasks.pop());
        }
    }
};
