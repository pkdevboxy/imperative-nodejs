const _ = require("lodash");
const Hapi = require("hapi");
const Joi = require("joi");
const {TodoApp} = require("../../todo");

const port = process.argv[1] || 8080;
const databaseDir = process.argv[2] || "/tmp/todo";

TodoApp.start({databaseDir}).then(todo => {
    const server = new Hapi.Server();
    server.connection({port, routes: {cors: true}});
    server.register({register: require("lout")}, (_err) => "ignore");

    const api = [
        {
            method: "POST",
            path: "/create-user",
            handler: ({payload: {login}}, reply) =>
                reply(todo.createUser(login)),

            payload: {
                login: Joi.string()
            }
        },
        {
            method: "GET",
            path: "/list-users",
            handler: (request, reply) =>
                reply(todo.listUsers())
        },
        {
            method: "POST",
            path: "/add-todo",
            handler: ({payload: {login, text}}, reply) =>
                reply(todo.addTodo(login, text)),

            payload: {
                login: Joi.string(),
                text: Joi.string()
            }
        },
        {
            method: "POST",
            path: "/update-todo",
            handler: ({payload: {login, id, isDone}}, reply) =>
                reply(todo.updateTodo(login, id, {isDone})),

            payload: {
                login: Joi.string(),
                id: Joi.string().guid(),
                isDone: Joi.boolean()
            }
        },
        {
            method: "POST",
            path: "/delete-todo",
            handler: ({payload: {login, id}}, reply) =>
                reply(todo.removeTodo(login, id)),

            payload: {
                login: Joi.string(),
                id: Joi.string().guid()
            }
        },
        {
            method: "POST",
            path: "/list-todos",
            handler: ({payload: {login}}, reply) =>
                reply(todo.listTodos(login)),
            payload: {
                login: Joi.string()
            }
        },
        {
            method: "POST",
            path: "/search-todos",
            handler: ({payload: {login, query}}, reply) =>
                reply(todo.search(login, query)),
            payload: {
                login: Joi.string(),
                query: Joi.string()
            }
        }
    ];

    function wrapPayload(endpointConfig) {
        return _.merge(
            _.omit(endpointConfig, "payload"),
            {config: {validate: {payload: endpointConfig.payload}}});
    }

    for (const endpointConfig of api) {
        const endpoint = endpointConfig.payload
            ? wrapPayload(endpointConfig)
            : endpointConfig;
        server.route(endpoint);
    }


    server.start(() => {
        console.log("Server running at", server.info.uri);
    });

    process.on("SIGINT", () => {
            setTimeout(() => {
                console.log("timeout exit!");
                process.exit();
            }, 10000);

            console.log("SIGINT");
            server.stop(() => {
                console.log("closed server");
                todo.stop()
                    .finally(() => {
                        console.log("exit process");
                        process.exit();
                    });
            });
        }
    );
})
;
