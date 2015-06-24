Promise = require 'bluebird'
fs = Promise.promisifyAll(require 'fs')
utils = require './utils'


sumFiles = (files, callback) ->
  reads = files.map((x) -> fs.readFileAsync(x))

  Promise.all(reads)
  .then (data) ->
    utils.sumStringsAsNumbers(data)
  .then(
    ((data) -> callback(null, data)),
    ((err) -> callback(err))
  )


module.exports = sumFiles
