Promise = require "bluebird"
path = require "path"
fs = Promise.promisifyAll(require "fs")


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

  addFileAsync: (name, size) ->
    @cache.set(name, zeroBuffer(size))
    @dirty.add(name)
    Promise.resolve()

  writeToFileAsync: (name, buffer, offset) ->
    target = @cache.get(name)
    unless target
      throw new Error("Not supported yet")
    @dirty.add(name)
    buffer.copy(target, offset)
    @bytesWritten += buffer.length
    Promise.resolve()

  readCStringFromFileAync: (name, offset) ->
    @_readToCacheAsync(name)
      .then((buffer) -> readCString(buffer.slice(offset)))

  flush: ->
    @dirty.forEach (name) =>
      fs.writeFileAsync(@_pathToFile(name), @cache.get(name))
        .then( => @dirty.delete(name))
        .catch(-> "ignore")

  _readToCacheAsync: (name) ->
    result = @cache.get(name)
    if result
      return Promise.resolve(result)

    fs.readFileAsync(@_pathToFile(name))
      .then((buffer)=>
        @cache.set(name, buffer)
        buffer)

  _pathToFile: (name) ->
    path.join(@path, name)


module.exports = CachingFileStorage
