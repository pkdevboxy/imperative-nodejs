const Promise = require("bluebird");
const fs = Promise.promisifyAll(require("fs"));

function provideUnresolvedVariables() {
    //noinspection JSUnusedLocalSymbols
    fs.readdirAsync = (path) => {
    };
    //noinspection JSUnusedLocalSymbols
    fs.writeFileAsync = (path, buffer) => {
    };
    //noinspection JSUnusedLocalSymbols
    fs.readFileAsync = (path) => {
    };
}


