const Promise = require("bluebird");

/**
 * Unbounded task queue.
 *
 * @type {AsyncQueue}
 */
module.exports = class AsyncQueue {
    constructor() {
        this._pendingTasks = [];
        this._pendingDeferals = [];
    }

    /**
     * Synchronously add task to this queue
     *
     * @param task
     */
    push(task) {
        this._pendingTasks.push(task);
        this._tryAdvance();
    }

    /**
     * Asynchronously fetch some item from the queue.
     *
     * @returns {Promise} Promise which will be resolved with task when it is available.
     */
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
