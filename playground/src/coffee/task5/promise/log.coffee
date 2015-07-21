Promise = require "bluebird"


appendZeroByte = (buffer) ->
  zero = new Buffer([0])
  return Buffer.concat([buffer, zero])


class Log
  constructor: (@storage, @logFileSize)->
    @currentOffset = 0
    @pendingWrites = []
    @writeInFlight = false

    pending_tasks = []
    pending_promises = []
    @tasks = {
      push: (task) ->
        pending_tasks.push(task)
        if pending_promises.length > 0
          pending_promises.pop().fulfill(pending_tasks.pop())

      pop: () ->
        p = Promise.pending()
        pending_promises.push(p)
        if pending_tasks.length > 0
          pending_promises.pop().fulfill(pending_tasks.pop())
        p.promise
    }

    worker = Promise.coroutine =>
      loop
        task = yield @tasks.pop()
        return if not task
        [record, p] = task

        try
          yield @_ensureHasSpace(record)

          fileName = @_currentFile().toString()
          fileOffset = @_currentInFileOffset()
          yield @storage.writeToFileAsync(fileName, record, fileOffset)

          recordOffset = @currentOffset
          yield @_increaseOffset(record.length)
          p.fulfill(recordOffset)
        catch error
          p.reject(error)

    worker()

  printStats: ->
    micros = (@times.reduce(((a, b) -> a + b), 0) / @times.length) / 1000
    console.log("avg writeRecord", micros, "microseconds")
    @storage.printStats()

  start: (callback) ->
    @startAsync().nodeify(callback)

  startAsync: ->
    @storage.addFileAsync("0", @logFileSize)

  writeRecord: (record, callback) ->
    @writeRecordAsync(record).nodeify(callback)

  writeRecordAsync: (record) ->
    record = appendZeroByte(record)
    p = Promise.pending()
    @tasks.push([record, p])
    p.promise

  readRecord: (offset, callback) ->
    @readRecordAsync(offset).nodeify(callback)

  readRecordAsync: (offset) ->
    fileId = @_fileIdForOffset(offset)
    fileOffset = @_inFileOffset(offset)
    name = fileId.toString()
    @storage.readCStringFromFileAync(name, fileOffset)

  flush: ->
    @storage.flush()

  _ensureHasSpace: (record) ->
    if record.length < @_currentFreeSpace()
      Promise.resolve()
    else
      @_increaseOffset(@_currentFreeSpace())

  _increaseOffset: (amount) ->
    newOffset = @currentOffset + amount
    if @_fileIdForOffset(newOffset) == @_fileIdForOffset(@currentOffset)
      @currentOffset += amount
      Promise.resolve()
    else
      @flush()
      fileName = @_fileIdForOffset(newOffset).toString()
      @storage.addFileAsync(fileName, @logFileSize)
        .then( => @currentOffset += amount)

  _currentFile: -> @_fileIdForOffset(@currentOffset)

  _fileIdForOffset: (offset) -> Math.floor(offset / @logFileSize)

  _inFileOffset: (offset) -> offset % @logFileSize

  _currentInFileOffset: -> @_inFileOffset(@currentOffset)

  _currentFreeSpace: -> @logFileSize - @_currentInFileOffset()

module.exports = Log
