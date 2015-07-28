const hash = require("object-hash");

const checksumField = "__checksum__";

function check(obj) {
    const checksum = obj[checksumField];
    delete obj[checksumField];
    return hash(obj) === checksum;
}

function addChecksum(obj) {
    obj[checksumField] = hash(obj);
}

module.exports = {check, addChecksum};
