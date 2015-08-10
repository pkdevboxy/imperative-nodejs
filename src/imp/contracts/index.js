module.exports = {
    /**
     * Raises assertion error with message if test is false.
     *
     * @param {string} message
     * @param {boolean} test
     */
    contract(message, test) {
        console.assert(test, message);
    },

    assert(test, message) {
        console.assert(test, message);
    }
};
