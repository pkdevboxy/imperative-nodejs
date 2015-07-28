const Promise = require("bluebird");

function go(gen) {
    return Promise.coroutine(gen)();
}

module.exports = {go};
