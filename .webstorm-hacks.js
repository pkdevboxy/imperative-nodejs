const Promise = require("bluebird");
const fs = Promise.promisifyAll(require("fs"));

function provideUnresolvedVariables() {
    fs.readdirAsync = (path) => {
    };
    fs.writeFileAsync = (path, buffer) => {
    };
    fs.readFileAsync = (path) => {
    };
    const app = {};
    app.post = (path, cb)=> {

    };

    Joi.string = Joi.boolean = {};
}


