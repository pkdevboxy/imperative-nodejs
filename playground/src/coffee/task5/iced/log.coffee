appendZeroByte = (buffer) ->
  zero = new Buffer([0])
  return Buffer.concat([buffer, zero])



class Log
  constructor: (@storage, @logFileSize)->
    @currentOffset = 0
    @pendingWrites = []
    @writeInFlight = false
    @times = []

  printStats: ->
    micros = (@times.reduce(((a, b) -> a + b), 0) / @times.length) / 1000
    console.log("avg writeRecord", micros, "microseconds")
    @storage.printStats()

  start: (callback) ->
    await @storage.addFile "0", @logFileSize, defer(error)
    return callback(error) if error
    callback(null, @)

  writeRecord: (record, callback) ->
    record = appendZeroByte(record)
    start = process.hrtime()
    @_enqueueWrite([record, (args...)=>
      @times.push(process.hrtime(start)[1])
      callback(args...)])


  readRecord: (offset, callback) ->
    fileId = @_fileIdForOffset(offset)
    fileOffset = @_inFileOffset(offset)
    name = fileId.toString()
    await @storage.readCStringFromFile name, fileOffset, defer(error, buffer)
    return callback(error) if error
    callback(null, buffer)

  _enqueueWrite: (cmd) ->
    @pendingWrites.push(cmd)
    @_writeNext()

  _writeNext: ->
    return if @writeInFlight

    @writeInFlight = true

    while @pendingWrites.length > 0
      [record, callback] = @pendingWrites.pop()
      await @_ensureHasSpace record, defer(error)
      if error
        callback(error)
        continue

      fileName = @_currentFile().toString()
      fileOffset = @_currentInFileOffset()
      await @storage.writeToFile fileName, record, fileOffset, defer(error)
      if error
        callback(error)
        continue

      recordOffset = @currentOffset
      await @_increaseOffset record.length, defer(error)
      if error
        callback(error)
      else
        callback(null, recordOffset)

    @writeInFlight = false

  _ensureHasSpace: (record, callback) ->
    if record.length < @_currentFreeSpace()
      process.nextTick -> callback(null)
    else
      @_increaseOffset(@_currentFreeSpace(), callback)

  _increaseOffset: (amount, callback) ->
    newOffset = @currentOffset + amount
    if @_fileIdForOffset(newOffset) == @_fileIdForOffset(@currentOffset)
      @currentOffset += amount
      process.nextTick -> callback(null)
    else
      fileName = @_fileIdForOffset(newOffset).toString()
      await @storage.addFile fileName, @logFileSize, defer(error)
      return callback(error) if error
      @currentOffset += amount
      callback(null)

  _currentFile: -> @_fileIdForOffset(@currentOffset)

  _fileIdForOffset: (offset) -> Math.floor(offset / @logFileSize)

  _inFileOffset: (offset) -> offset % @logFileSize

  _currentInFileOffset: -> @_inFileOffset(@currentOffset)

  _currentFreeSpace: -> @logFileSize - @_currentInFileOffset()

module.exports = Log
