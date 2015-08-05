## Source

Adapted from https://github.com/adzerk-oss/boot-cljs-example

## Build

[Install boot][installboot].  Then, in a terminal:

```bash
boot -u
```

```bash
boot serve -d target/ cljs -sO none wait
```

You can view the generated content by opening
[http://localhost:3000/index.html](http://localhost:3000/index.html)
in your browser.

Calls to the TODO API will be directed to localhost:8000 by default. To override
this, use `TODO_SERVER_URL` environmental variable, like this:

`env TODO_SERVER_URL="http://some.domain:8001/" boot serve -d target/ -p 8001 cljs -sO none wait `


[installboot]:      https://github.com/boot-clj/boot#install
