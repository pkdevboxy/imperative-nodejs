const _ = require("lodash");
const assert = require("assert");
const tmp = require("tmp");
const {TodoApp} = require("../../todo");
const {go} = require("imp/async");


describe("TodoApp", ()=> {
    it("should allow to create user", () => {
        return go(function* () {
            const app = yield TodoApp.start({databaseDir: tmp.dirSync().name});
            yield app.createUser("Alice");
        });
    });

    it("should not allow to create same user twice", () => {
        const config = {databaseDir: tmp.dirSync().name};
        return go(function* () {
            const app = yield TodoApp.start(config);
            yield app.createUser("Alice");
            yield app.createUser("Alice");
        })
            .then(()=> assert(false))
            .catch((error) => {
                assert(error.message.includes("exists"));
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

    it("should gracefully fail when the database size is large than file ", () => {
        const config = {
            databaseDir: tmp.dirSync().name,
            logFileSize: 300
        };
        const todos = [];
        for (let i = 0; i < 10; i++) {
            todos.push("Do thing number " + (i + 1));
        }
        return go(function* () {
            let app = yield TodoApp.start(config);
            yield app.createUser("Alice");
            let processedTodos = 0;
            let thrown = false;
            try {
                for (const todo of todos) {
                    yield app.addTodo("Alice", todo);
                    processedTodos += 1;
                }
            } catch (ignored) {
                thrown = true;
            }
            assert(thrown);
            assert(processedTodos > 0);
            yield app.stop();
            app = yield TodoApp.start(config);
            const savedTodos = yield app.listTodos("Alice");
            assert.equal(savedTodos.length, processedTodos);
            for (let i = 0; i < processedTodos; i++) {
                assert.equal(todos[i], savedTodos[i].text);
            }
        });
    });
});
