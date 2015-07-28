const assert = require("assert");
const tmp = require( "tmp");
const {TodoApp} = require("imp/todo");
const {go} = require("imp/async");


describe("TodoApp", ()=> {
    // it("should allow to create user and add several todo items", () => {
    //     const app = TodoApp.new();
    //     Promise.coroutine(function* () {
    //         yield app.start();
    //         const aliceId = yield app.createUser("Alice");
    //         yield app.addTodo(aliceId, "Feed the cat");
    //         yield app.addTodo(aliceId, "Wash the dog");
    //         const todos = yield app.listTodos(aliceId);
    //         assert.equal(todos.length, 2);
    //     })();
    // });

    it("should allow to create user", () => {
        const app = TodoApp.new({databaseDir: tmp.dirSync().name});
        return go(function* () {
            yield app.start();
            yield app.createUser("Alice");
        });
    });

    it("should be able to read existing db", () => {
        const dir = tmp.dirSync().name;
        let app = TodoApp.new({databaseDir: dir});
        return go(function* () {
            yield app.start();
            yield app.createUser("Alice");
            yield app.stop();
            app = TodoApp.new({databaseDir: dir});
            yield app.start();
            const users = yield app.listUsers();
            yield app.stop();
            assert.equal(users.length, 1);
            assert.equal(users[0].login, "Alice");
        });
    });
});
