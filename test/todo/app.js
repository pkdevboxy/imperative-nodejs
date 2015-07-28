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
        return go(function* () {
            const app = yield TodoApp.start({databaseDir: tmp.dirSync().name});
            yield app.createUser("Alice");
        });
    });

    it("should be able to read existing db", () => {
        const dir = tmp.dirSync().name;
        return go(function* () {
            let app = yield TodoApp.start({databaseDir: dir});
            yield app.createUser("Alice");
            yield app.stop();

            app = yield TodoApp.start({databaseDir: dir});
            const users = yield app.listUsers();
            yield app.stop();

            assert.equal(users.length, 1);
            assert.equal(users[0].login, "Alice");
        });
    });
});
