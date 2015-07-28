const hash = require("object-hash");

const checksumField = "__checksum__";

/**
 * Adds checksum field to object.
 *
 * @param obj
 */
function addChecksum(obj) {
    obj[checksumField] = hash(obj);
}

/**
 * Checks that this object has correct checksum and drops checksum field.
 * Throws if object is invalid.
 *
 * @param obj
 */
function check(obj) {
    const checksum = obj[checksumField];
    delete obj[checksumField];
    if (hash(obj) !== checksum) {
        throw new Error("Invalid checksum");
    }
}

module.exports = {check, addChecksum};
