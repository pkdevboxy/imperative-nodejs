const express = require("express");
const morgan = require("morgan");
const bodyParser = require("body-parser");
const {TodoApp} = require("imp/todo");

const port = process.argv[1] || 8080;
const databaseDir = process.argv[2] || "/tmp/todo";

TodoApp.start({databaseDir}).then(todo => {
    const app = express();
    app.use(bodyParser.json());
    app.use(morgan("dev"));
    app.set("json spaces", 2);

    app.get("/", (req, res) => {
        const baseUrl = req.protocol + "://" + req.get("host") + "/";
        res.json({
            methods: [
                {
                    url: baseUrl + "create-user",
                    parameters: {login: "string"},
                    method: "POST"
                },
                {
                    url: baseUrl + "list-users",
                    parameters: {},
                    method: "GET"
                },
                {
                    url: baseUrl + "add-todo",
                    parameters: {login: "string", text: "string"},
                    method: "POST"
                },
                {
                    url: baseUrl + "update-todo",
                    parameters: {
                        login: "string",
                        id: "string",
                        isDone: "boolean"
                    },
                    method: "POST"
                },
                {
                    url: baseUrl + "delete-todo",
                    parameters: {login: "string", id: "string"},
                    method: "POST"
                },
                {
                    url: baseUrl + "list-todos",
                    parameters: {login: "string"},
                    method: "POST"
                },
                {
                    url: baseUrl + "search-todos",
                    parameters: {login: "string", query: "string"},
                    method: "POST"
                }
            ]
        });
    });

    app.post("/create-user", (req, res) => {
        const {login} = req.body;
        todo.createUser(login)
            .then(() => res.status(201).json({login}))
            .catch((error) => res.status(400).json({error: error.toString()}));
    });

    app.get("/list-users", (req, res) => {
        todo.listUsers()
            .then(users => res.json({users}))
            .catch((error) => res.status(400).json({error: error.toString()}));
    });

    app.post("/add-todo", (req, res) => {
        const {login, text} = req.body;
        todo.addTodo(login, text)
            .then((id) => res.status(201).json({id, text}))
            .catch((error) => res.status(400).json({error: error.toString()}));
    });

    app.post("/update-todo", (req, res) => {
        const {login, id, isDone} = req.body;
        todo.updateTodo(login, id, {isDone})
            .then(() => res.json({id, isDone}))
            .catch((error) => res.status(400).json({error: error.toString()}));
    });

    app.post("/delete-todo", (req, res) => {
        const {login, id} = req.body;
        todo.removeTodo(login, id)
            .then(() => res.sendStatus(200))
            .catch((error) => res.status(400).json({error: error.toString()}));
    });

    app.post("/list-todos", (req, res) => {
        const {login} = req.body;
        todo.listTodos(login)
            .then(todos => res.json({todos}))
            .catch((error) => res.status(400).json({error: error.toString()}));
    });

    app.post("/search-todos", (req, res) => {
        const {login, query} = req.body;
        todo.search(login, query)
            .then(todos => res.json({todos}))
            .catch((error) => res.status(400).json({error: error.toString()}));
    });

    const server = app.listen(port, () => {
        const host = server.address().address;
        const port = server.address().port;

        console.log("TODO API listening at http://%s:%s", host, port);
    });

    process.on("SIGINT", () => {
            console.log("SIGINT");
            server.close(() => {
                console.log("closed server");
                todo.stop().finally(() => {
                    process.exit();
                });
            });
        }
    );
});
