async = require "async"

implementations = ['./js_callback.js', './js_promise.js']
[_node, _main, files...] = process.argv


implementations.forEach((impl) ->
  cb = (err, sum) ->
    console.log(impl)
    throw err if err
    console.log(sum)

  f = require(impl)
  f(files, cb)
)
