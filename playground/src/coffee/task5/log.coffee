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
    @storage.addFile "0", @logFileSize, (error) =>
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
    @storage.readCStringFromFile name, fileOffset, (error, buffer) ->
      return callback(error) if error
      callback(null, buffer)

  _enqueueWrite: (cmd) ->
    @pendingWrites.push(cmd)
    @_writeNext()

  _writeNext: ->
    if @pendingWrites.length == 0 or @writeInFlight
      return

    @writeInFlight = true
    [record, callback] = @pendingWrites.pop()

    exit = (args...) =>
      @writeInFlight = false
      process.nextTick => @_writeNext()
      callback(args...)

    @_ensureHasSpace record, (err) =>
      return exit(err) if err

      fileName = @_currentFile().toString()
      fileOffset = @_currentInFileOffset()
      @storage.writeToFile(fileName, record, fileOffset, (error) =>
        return exit(error) if error
        recordOffset = @currentOffset
        @_increaseOffset record.length, (error) ->
          return exit(error) if error
          exit(null, recordOffset))

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
