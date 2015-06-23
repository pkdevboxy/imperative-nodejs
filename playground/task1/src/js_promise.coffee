Promise = require "bluebird"
fs = Promise.promisifyAll(require "fs")


sumFiles = (files, cb) ->
  reads = files.map((x) -> fs.readFileAsync(x))

  Promise.all(reads)
  .then (data) ->
    data.map((x) -> parseInt(x, 10)).reduce((x, y) -> x + y)
  .then(
    ((data) -> cb(null, data)),
    ((err) -> cb(err))
  )


module.exports = sumFiles