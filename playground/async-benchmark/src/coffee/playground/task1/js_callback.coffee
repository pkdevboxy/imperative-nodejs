fs = require 'fs'
async = require 'async'
utils = require './utils'


sumFiles = (fileNames, callback) ->
  async.map(fileNames, fs.readFile, (err, result) ->
    if err
      callback(err)
    else
      callback(null, utils.sumStringsAsNumbers(result))
  )


module.exports = sumFiles
