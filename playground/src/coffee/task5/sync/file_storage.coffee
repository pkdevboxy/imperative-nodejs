path = require("path")
fs = require("fs")


zeroBuffer = (size) ->
  buf = new Buffer(size)
  buf.fill(0)
  buf


readCString = (buffer) ->
  for i in [0..buffer.length - 1]
    if buffer[i] == 0
      return buffer.slice(0, i)

  return buffer


closeIgnoreError = (fd) -> fs.close(fd, ->)


class FileStorage
  constructor: (@path) ->
    @bytesWritten = 0
    @bytesRead = 0

  printStats: ->
    mb = 1024 * 1024
    console.log("MB written", @bytesWritten / mb)
    console.log("MB read", @bytesRead / mb)

  addFile: (name, size) ->
    fd = @_openNew name
    @_writeToFd(fd, zeroBuffer(size), 0)

  writeToFile: (name, buffer, offset) ->
    @bytesWritten += buffer.length
    fd = @_openForWritting name
    @_writeToFd(fd, buffer, offset)

  readCStringFromFile: (name, offset) ->
    fd = @_openForReading name
    result = @_readRecordFromFd(fd, offset)
    @bytesRead += result.length
    result

  _pathToFile: (name) ->
    path.join(@path, name)

  _openNew: (name) ->
    fs.openSync(@_pathToFile(name), "w")

  _openForWritting: (name) ->
    fs.openSync(@_pathToFile(name), "r+")

  _openForReading: (name) ->
    fs.openSync(@_pathToFile(name), "r")

  _writeToFd: (fd, buffer, offset) ->
    fs.writeSync(fd, buffer, 0, buffer.length, offset)
    fs.closeSync(fd)

  _readRecordFromFd: (fd, start) ->
    buff = zeroBuffer(2 * 1024)
    result = []
    loop
      written = fs.readSync(fd, buff, 0, buff.length, start)
      if written == 0
        break
      c = readCString(buff.slice(0, written))
      result.push(c)
      if c.length != written
        break

    fs.closeSync(fd)
    return Buffer.concat(result)


module.exports = FileStorage
