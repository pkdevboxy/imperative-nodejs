const assert = require("assert");
const todo = require("imp/todo");

describe("TODO app", () => {
    it("should be able to add numbers for some reason", () => {
        assert.equal(todo.add(2, 2), 4);
    });
});
