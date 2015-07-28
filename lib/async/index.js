const Promise = require("bluebird");

/**
 * Runs asynchronous 'thread' (go-routine).
 *
 * @example
 * go(function* {
 *     const a = yield asyncFunction1();
 *     const b = yield asyncFunction2();
 *     return a + b;
 * })
 *
 * @param gen Generator function
 * @returns {Promise} Promise of the result of the go-routine.
 */
function go(gen) {
    return Promise.coroutine(gen)();
}

module.exports = {
    go,
    AsyncQueue: require("./queue")
};
