path = require "path"
fs = require "fs"


zeroBuffer = (size) ->
  buf = new Buffer(size)
  buf.fill(0)
  buf


readCString = (buffer) ->
  for i in [0..buffer.length - 1]
    if buffer[i] == 0
      return buffer.slice(0, i)

  return buffer


closeIgnoreerroror = (fd) -> fs.close(fd, ->)


class CachingFileStorage
  constructor: (@path) ->
    @bytesWritten = 0
    @bytesRead = 0
    @cache = new Map()
    @dirty = new Set()

  printStats: ->
    mb = 1024 * 1024
    console.log("MB written", @bytesWritten / mb)
    console.log("MB read", @bytesRead / mb)

  addFile: (name, size, callback) ->
    @cache.set(name, zeroBuffer(size))
    @dirty.add(name)
    process.nextTick(callback)

  writeToFile: (name, buffer, offset, callback) ->
    target = @cache.get(name)
    unless target
      throw new Error("Not supported yet")
    @dirty.add(name)
    buffer.copy(target, offset)
    @bytesWritten += buffer.length
    process.nextTick(callback)

  readCStringFromFile: (name, offset, callback) ->
    @_readToCache(name, (error, buffer) =>
      return callback(error) if error
      result = readCString(buffer.slice(offset))
      @bytesRead += result.length
      callback(null, result)
    )

  flush: ->
    @dirty.forEach (name) =>
      fs.writeFile(@_pathToFile(name), @cache.get(name), (error) =>
        if not error
          @dirty.delete(name))

  _readToCache: (name, callback) ->
    result = @cache.get(name)
    if result
      return process.nextTick(-> callback(null, result))

    fs.readFile(@_pathToFile(name), (error, buffer) =>
      return callback(error) if error
      @cache.set(name, buffer)
      callback(null, buffer)
    )

  _pathToFile: (name) ->
    path.join(@path, name)


module.exports = CachingFileStorage
