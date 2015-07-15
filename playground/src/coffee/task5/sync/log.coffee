appendZeroByte = (buffer) ->
  zero = new Buffer([0])
  return Buffer.concat([buffer, zero])



class Log
  constructor: (@storage, @logFileSize)->
    @currentOffset = 0
    @pendingWrites = []
    @times = []

  printStats: ->
    micros = (@times.reduce(((a, b) -> a + b), 0) / @times.length) / 1000
    console.log("avg writeRecord", micros, "microseconds")
    @storage.printStats()

  start: ->
    @storage.addFile "0", @logFileSize
    return @

  writeRecord: (record) ->
    start = process.hrtime()
    record = appendZeroByte(record)
    @_ensureHasSpace(record)
    fileName = @_currentFile().toString()
    fileOffset = @_currentInFileOffset()
    @storage.writeToFile(fileName, record, fileOffset)
    recordOffset = @currentOffset
    @_increaseOffset record.length
    @times.push(process.hrtime(start)[1])
    recordOffset

  readRecord: (offset) ->
    fileId = @_fileIdForOffset(offset)
    fileOffset = @_inFileOffset(offset)
    name = fileId.toString()
    @storage.readCStringFromFile name, fileOffset

  _ensureHasSpace: (record) ->
    if record.length >= @_currentFreeSpace()
      @_increaseOffset(@_currentFreeSpace())

  _increaseOffset: (amount) ->
    newOffset = @currentOffset + amount
    if @_fileIdForOffset(newOffset) == @_fileIdForOffset(@currentOffset)
      @currentOffset += amount
    else
      @storage.addFile @_fileIdForOffset(newOffset).toString(), @logFileSize,
      @currentOffset += amount

  _currentFile: -> @_fileIdForOffset(@currentOffset)

  _fileIdForOffset: (offset) -> Math.floor(offset / @logFileSize)

  _inFileOffset: (offset) -> offset % @logFileSize

  _currentInFileOffset: -> @_inFileOffset(@currentOffset)

  _currentFreeSpace: -> @logFileSize - @_currentInFileOffset()

module.exports = Log
