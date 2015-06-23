Promise = require 'bluebird'
fs = Promise.promisifyAll(require 'fs')
utils = require './utils'


sumFiles = (files, cb) ->
  reads = files.map((x) -> fs.readFileAsync(x))

  Promise.all(reads)
  .then (data) ->
    utils.sumStringsAsNumbers(data)
  .then(
    ((data) -> cb(null, data)),
    ((err) -> cb(err))
  )


module.exports = sumFiles
