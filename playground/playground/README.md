Environment:
`nvm use && lein npm install`

Compilation: `lein compile`

Running: no running, only tests

Testing: `lein test`

Auto rebuilds and tests:

  - `lein cljsbuild` for '.cljs' and auto testing
  - `lein auto coffeescript` for '.coffee'


Note:
`lein compile` will throw error for the first time, because tests are setup to
run after every `cljsbuild` and `cljsbuild` happens before `coffeescript`.
