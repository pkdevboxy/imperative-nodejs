path = require("path")
fs = require("fs")


zeroBuffer = (size) ->
  buf = new Buffer(size)
  buf.fill(0)
  buf

class FileStorage
  constructor: (@path) ->

  addFile: (name, size, callback) ->
    @_openNew name, (err, fd) ->
      return callback(err) if err
      fs.write fd, zeroBuffer(size), 0, size, 0, (err) ->
        fs.close(fd, ->)
        callback(err)

  writeToFile: (name, buffer, offset, callback) ->
    @_openForWritting name, (err, fd) ->
      return callback(err) if err
      fs.write fd, buffer, 0, buffer.length, offset, (err) ->
        fs.close(fd, ->)
        callback(err)

  readFromFile: (name, buffer, offset, callback) ->
    @_openForReading name, (err, fd) ->
      return callback(err) if err

      fs.read fd, buffer, 0, buffer.length, offset, (err) ->
        fs.close(fd, ->)
        callback(err)

  _pathToFile: (name) ->
    path.join(@path, name)

  _openNew: (name, callback) ->
    fs.open(@_pathToFile(name), "w", callback)

  _openForWritting: (name, callback) ->
    fs.open(@_pathToFile(name), "r+", callback)

  _openForReading: (name, callback) ->
    fs.open(@_pathToFile(name), "r", callback)


module.exports = FileStorage
