module.exports = {
    contract(message, test) {
        console.assert(test, message);
    },

    assert(test) {
        console.assert(test);
    }
};
