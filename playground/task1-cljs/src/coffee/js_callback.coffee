fs = require 'fs'
async = require 'async'
utils = require './utils'


sumFiles = (fileNames, f) ->
  async.map(fileNames, fs.readFile, (err, result) ->
    if err
      f(err)
    else
      f(null, utils.sumStringsAsNumbers(result))
  )


module.exports = sumFiles
