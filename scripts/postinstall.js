var fs = require("fs");

try {
    fs.unlinkSync("./node_modules/imp");
} catch(error) {
    // ignore
}

fs.symlinkSync("../src/imp", "./node_modules/imp", "dir");
console.log("Symlinked ./node_modules/imp to ./src/imp");
