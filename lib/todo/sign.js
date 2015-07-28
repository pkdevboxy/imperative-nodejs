const hash = require("object-hash");

const checksumField = "__checksum__";

function check(obj) {
    const checksum = obj[checksumField];
    delete obj[checksumField];
    if (hash(obj) !== checksum) {
        throw new Error("Invalid checksum");
    }
}

function addChecksum(obj) {
    obj[checksumField] = hash(obj);
}

module.exports = {check, addChecksum};
