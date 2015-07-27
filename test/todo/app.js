const assert = require("assert");
const Promise = require("bluebird");
const {TodoApp} = require("imp/todo");


describe("TodoApp", ()=> {
    it("should allow to create user and add several todo items", () => {
        const app = TodoApp.new();
        app.new();
        Promise.coroutine(function* () {
            yield app.start();
            const aliceId = yield app.createUser("Alice");
            yield app.addTodo(aliceId, "Feed the cat");
            yield app.addTodo(aliceId, "Wash the dog");
            const todos = app.listTodos(aliceId);
            assert.equal(todos.length, 2);
        })();
    });

});
