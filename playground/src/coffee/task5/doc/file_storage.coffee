path = require 'path'
fs = require 'fs'

class FileStorage
  constructor: (@path)->
    @bytesWritten = 0
    @bytesRead = 0
    @fileCache = {}

  printStats: ->
    mb = 1024 * 1024
    console.log("MB written", @bytesWritten / mb)
    console.log("MB read", @bytesRead / mb)

  append: (name, string, callback) ->
#    clear cache here
    @bytesWritten += string.length
    fs.appendFile(@_fileName(name), string + "\n", {encoding: 'utf8'}, (err)=>
      callback(err))

  readNth: (name, n, callback) ->

    if @fileCache[name]
      result = @fileCache[name][n]
      @bytesRead += result.length
      process.nextTick(=> callback(null, result))
    else

      @_readToCache(name, (err) =>
        return callback(err) if err
        result = @fileCache[name][n]
        @bytesRead += result.length
        callback(null, result)
      )

  _readToCache: (name, callback) ->
    fs.readFile(@_fileName(name), {encoding: 'utf8'}, (err, data) =>
      return callback(err) if err
      @fileCache[name] = data.split("\n")
      callback()
    )


  _fileName: (name) ->
    path.join(@path, name)

module.exports = FileStorage
