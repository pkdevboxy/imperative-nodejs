const hash = require("object-hash");

/**
 * Adds checksum to object.
 *
 * @param obj
 * @returns {{data: *, checksum: *}}
 */
function addChecksum(obj) {
    return {
        data: obj,
        checksum: hash(obj)
    };
}

/**
 * Checks that this object has correct checksum and returns an object without checksum.
 * Throws if object is invalid.
 *
 * @param {{data: *, checksum: *}} obj
 * @returns obj
 */
function removeChecksum(obj) {
    if (hash(obj.data) !== obj.checksum) {
        throw new Error("Invalid checksum");
    }

    return obj.data;
}

module.exports = {removeChecksum, addChecksum};
