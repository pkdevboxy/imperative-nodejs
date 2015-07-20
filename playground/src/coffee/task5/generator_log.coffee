{run, curry} = require './gen_utils'

appendZeroByte = (buffer) ->
  zero = new Buffer([0])
  return Buffer.concat([buffer, zero])



class Log
  constructor: (@storage, @logFileSize)->
    @currentOffset = 0
    @pendingWrites = []
    @writeInFlight = false
    @times = []

    ensureHasSpace = curry(@_ensureHasSpace.bind(@))
    writeToFile = curry(@storage.writeToFile.bind(@storage))
    increaseOffset = curry(@_increaseOffset.bind(@))

    pending_tasks = []
    pending_callbacks = []
    @tasks = {
      push: (task) ->
        pending_tasks.push(task)
        if pending_callbacks.length > 0
          pending_callbacks.pop()(null, pending_tasks.pop())

      pop: -> (callback) ->
        pending_callbacks.push(callback)
        if pending_tasks.length > 0
          pending_callbacks.pop()(pending_tasks.pop())
    }

    run =>
      loop
        task = yield @tasks.pop()
        return if not task

        [record, callback] = task
        try
          yield ensureHasSpace(record)

          fileName = @_currentFile().toString()
          fileOffset = @_currentInFileOffset()
          yield writeToFile(fileName, record, fileOffset)

          recordOffset = @currentOffset

          yield increaseOffset(record.length)
        catch error
          callback(error)

        callback(null, recordOffset)

  printStats: ->
    micros = (@times.reduce(((a, b) -> a + b), 0) / @times.length) / 1000
    console.log("avg writeRecord", micros, "microseconds")
    @storage.printStats()

  start: (callback) ->
    @storage.addFile "0", @logFileSize, (error) =>
      return callback(error) if error
      callback(null, @)

  writeRecord: (record, callback) ->
    record = appendZeroByte(record)
    start = process.hrtime()
    @tasks.push([record, (args...)=>
      @times.push(process.hrtime(start)[1])
      process.nextTick(-> callback(args...))
    ])

  readRecord: (offset, callback) ->
    fileId = @_fileIdForOffset(offset)
    fileOffset = @_inFileOffset(offset)
    name = fileId.toString()
    @storage.readCStringFromFile name, fileOffset, (error, buffer) ->
      return callback(error) if error
      callback(null, buffer)

  flush: ->
    @storage.flush()

  _ensureHasSpace: (record, callback) ->
    if record.length < @_currentFreeSpace()
      process.nextTick (-> callback(null))
    else
      @_increaseOffset(@_currentFreeSpace(), callback)

  _increaseOffset: (amount, callback) ->
    newOffset = @currentOffset + amount
    if @_fileIdForOffset(newOffset) == @_fileIdForOffset(@currentOffset)
      @currentOffset += amount
      process.nextTick -> callback(null)
    else
      @flush()
      @storage.addFile @_fileIdForOffset(newOffset).toString(), @logFileSize,
        (error) =>
          return callback(error) if error
          @currentOffset += amount
          callback(null)

  _currentFile: -> @_fileIdForOffset(@currentOffset)

  _fileIdForOffset: (offset) -> Math.floor(offset / @logFileSize)

  _inFileOffset: (offset) -> offset % @logFileSize

  _currentInFileOffset: -> @_inFileOffset(@currentOffset)

  _currentFreeSpace: -> @logFileSize - @_currentInFileOffset()

module.exports = Log
