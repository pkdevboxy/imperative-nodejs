const hash = require("object-hash");

/**
 * Adds checksum to object.
 *
 * @param obj
 * @returns obj
 */
function addChecksum(obj) {
    return {
        data: obj,
        checksum: hash(obj)
    };
}

/**
 * Checks that this object has correct checksum.
 * Throws if object is invalid.
 *
 * @param obj
 * @returns obj
 */
function check(obj) {
    if (hash(obj.data) !== obj.checksum) {
        throw new Error("Invalid checksum");
    }

    return obj.data;
}

module.exports = {check, addChecksum};
