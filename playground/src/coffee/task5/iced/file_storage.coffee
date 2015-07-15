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

  addFile: (name, size, callback) ->
    await @_openNew name, defer err, fd
    unless err
      await @_writeToFd fd, zeroBuffer(size), 0, defer(err)

    callback(err)

  writeToFile: (name, buffer, offset, callback) ->
    @bytesWritten += buffer.length
    await @_openForWritting name, defer(err, fd)
    unless err
      await @_writeToFd fd, buffer, offset, defer(err)

    callback(err)

  readCStringFromFile: (name, offset, callback) ->
    await @_openForReading name, defer(err, fd)
    unless err
      await @_readRecordFromFd fd, offset, defer(err, buffer)

    callback(err, buffer)

  _pathToFile: (name) ->
    path.join(@path, name)

  _openNew: (name, callback) ->
    fs.open(@_pathToFile(name), "w", callback)

  _openForWritting: (name, callback) ->
    fs.open(@_pathToFile(name), "r+", callback)

  _openForReading: (name, callback) ->
    fs.open(@_pathToFile(name), "r", callback)

  _writeToFd: (fd, buffer, offset, callback) ->
    stream = fs.createWriteStream(null, {fd, start: offset})
    stream.on('error', (error) ->
      # empty
    )

    stream.write(buffer, (error)->
      closeIgnoreError(fd)
      callback(error))

  _readRecordFromFd: (fd, start, callback) ->
    chunks = []
    stream = fs.createReadStream(null, {fd, start, autoClose: false})

    onError = (error) ->
      return if chunks == null
      chunks = null
      stream.pause()
      closeIgnoreError(fd)
      callback(error)

    onDone = ->
      return if chunks == null
      result = Buffer.concat(chunks)
      chunks = null
      stream.pause()
      closeIgnoreError(fd)
      @bytesRead += result.length
      callback(null, result)

    onData = (chunk) ->
      return if chunks == null
      cstr = readCString(chunk)
      chunks.push(cstr)
      if cstr.length != chunk.length
        onDone()

    stream.on('error', onError)
    stream.on('end', onDone)
    stream.on('data', onData)



module.exports = FileStorage
