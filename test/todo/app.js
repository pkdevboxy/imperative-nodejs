const _ = require("lodash");
const assert = require("assert");
const tmp = require("tmp");
const {TodoApp} = require("imp/todo");
const {go} = require("imp/async");


describe("TodoApp", ()=> {
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

    it("should allow to create user and add several todo items", () => {
        const config = {databaseDir: tmp.dirSync().name};
        return go(function* () {
            let app = yield TodoApp.start(config);
            yield app.createUser("Alice");
            yield app.addTodo("Alice", "Feed the cat");
            yield app.addTodo("Alice", "Wash the dog");
            yield app.stop();

            app = yield TodoApp.start(config);
            const todos = yield app.listTodos("Alice");
            yield app.stop();
            assert.deepEqual(todos.map(t => _.pick(t, "text")), [
                {text: "Feed the cat"},
                {text: "Wash the dog"}]);
        });
    });

    it("should allow to remove an item", () => {
        const config = {databaseDir: tmp.dirSync().name};
        return go(function* () {
            let app = yield TodoApp.start(config);
            yield app.createUser("Alice");
            const {id: todoId} = yield app.addTodo("Alice", "Feed the cat");
            yield app.addTodo("Alice", "Wash the dog");
            yield app.stop();

            app = yield TodoApp.start(config);
            yield app.removeTodo("Alice", todoId);
            yield app.stop();

            app = yield TodoApp.start(config);
            const todos = yield app.listTodos("Alice");
            yield app.stop();
            assert.deepEqual(todos.map(t => _.pick(t, "text")),
                [{text: "Wash the dog"}]);
        });
    });

    it("should allow to check an item", () => {
        const config = {databaseDir: tmp.dirSync().name};
        return go(function* () {
            const app = yield TodoApp.start(config);
            yield app.createUser("Alice");
            const {id: todoId} = yield app.addTodo("Alice", "Feed the cat");
            yield app.addTodo("Alice", "Wash the dog");
            let todos = yield app.listTodos("Alice");
            assert.strictEqual(todos[0].isDone, false);

            yield app.updateTodo("Alice", todoId, {isDone: true});

            todos = yield app.listTodos("Alice");
            assert.strictEqual(todos[0].isDone, true);
        });
    });
});
