appendZeroByte = (buffer)->
  zero = new Buffer([0])
  return Buffer.concat([buffer, zero])

class Log
  constructor: (@storage, @logFileSize)->
    @currentOffset = 0
    @pendingWrites = []
    @writeInFlight = false

  writeRecord: (record, callback) ->
    record = appendZeroByte(record)
    @_enqueueWrite([record, callback])

  readRecord

  _enqueueWrite: (cmd) ->
    @pendingWrites.push(cmd)
    _writeNext()

  _writeNext: ->
    if @pendingWrites.size == 0 or @writeInFlight
      return

    @writeInFlight = true
    [record, callback] = @pendingWrites.pop()

    exit = (args...) =>
      @writeInFlight = false
      process.nextTick => @_writeNext()
      callback(args...)

    @_ensureHasSpace record, (err) ->
      return exit(err) if err
      @storage.writeToFile(@_currentFile(), record, @_currentInFileOffset,
        (error) ->
          return exit(error) if error
          recordOffset = @currentOffset
          @_increaseOffset record.length, (error) ->
            return exit(error) if error
            exit(null, recordOffset))

  _ensureHasSpace: (record, callback) ->
    if record.length < @_currentFreeSpace()
      process.nextTick -> callback(null)
    else
      @_increaseOffset @currentFreeSpace, callback

  _increaseOffset: (amount, callback) ->
    newOffset = @currentOffset + amount
    if (@_fileIdForOffset(newOffset) == @_fileIdForOffset(@currentOffset))
      @currentOffset += amount
      process.nextTick -> callback(null)
    else
      @storage.addFile @_fileIdForOffset(newOffset), (error)->
        return callback(error) if error
        @currentOffset += amount
        callback(null)

    _currentFile: -> @_fileIdForOffset(@currentOffset)

    _fileIdForOffset: (offset) ->
      Math.floor(offset / @logFileSize)

    _currentInFileOffset: -> @currentOffset % @logFileSize
