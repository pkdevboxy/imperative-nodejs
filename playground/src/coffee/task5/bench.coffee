Promise = require 'bluebird'
FileStorage = require './file_storage'
{run, curry} = require './gen_utils'

require('source-map-support').install()

randomBuffer = (maxLenght) ->
  length = Math.floor(Math.random() * maxLenght)
  buffer = new Buffer(length)
  for i in [0..buffer.length - 1]
    if buffer[i] == 0
      buffer[i] = 1
  buffer

megabytes = (n) -> n * 1024 * 1024


randomBuffers = (totalSize, maxLenght=1000) ->
  result = []
  currentSize = 0
  while currentSize + maxLenght < totalSize
    buffer = randomBuffer(maxLenght)
    result.push(buffer)
    currentSize += buffer.length

  result

buffersToStrings = (buffers)->
  chars = 'abcdefghijklmnopqrstuvwxyz'
  chars += chars.toUpperCase()
  chars += '0123456789'
  result = []
  for bf in buffers
    temp = []
    for i in [0...bf.length]
      index = bf.readUInt8(i) % chars.length
      temp.push(chars.charAt(index))
    result.push(temp.join(''))
  return result

writeRecordsToLog = (log, records, callback) ->
  i = 0
  f = ->
    if i == records.length
      log.flush()
      log.printStats()
      callback()
      return
    log.writeRecord records[i], (err, offset) ->
      throw err if err
      i += 1
      f()
  log.start(f)

writeReadRecordsGen = (log, records, reads, callback) ->
  start = curry(log.start.bind(log))
  writeRecord = curry(log.writeRecord.bind(log))
  readRecord = curry(log.readRecord.bind(log))

  run ->
    yield start()
    recordMap = []
    for record, index in records
      offset = yield writeRecord(record)
      recordMap[index] = offset

    for i in reads
      buffer = yield readRecord(recordMap[i])
      unless buffer.equals(records[i])
        throw new Error("Log is broken")
    callback()


writeReadRecords = (log, records, reads, callback) ->
  recordMap = []
  w = 0
  writeLoop = ->
    if w == records.length
      log.flush()
      return readLoop()

    log.writeRecord records[w], (error, offset) ->
      throw error if error
      recordMap[w] = offset
      w += 1
      writeLoop()

  r = 0
  readLoop = ->
    if r == reads.length
      # log.printStats()
      callback()
      return
    i = reads[r]
    log.readRecord recordMap[i], (error, buffer) ->
      throw error if error

      unless buffer.equals(records[i])
        throw new Error("Log is broken")

      r += 1
      readLoop()

  log.start(writeLoop)


writeReadRecordsSync = (log, records, reads, callback) ->
  recordMap = []
  log.start()
  records.forEach (record, i)->
    recordMap[i] = log.writeRecord(record)

  reads.forEach (i)->
    buffer = log.readRecord(recordMap[i])
    unless buffer.equals(records[i])
      throw new Error("Log is broken")

  log.printStats()
  callback()


implementations = [{
  description: "Baseline: coffescript callback based log",
  newLog: (dir, logFileSize) ->
    Log = require './log'
    fs = new FileStorage(dir)
    new Log(fs, logFileSize)
  },
  {
  description: "Generators: coffescript callback log + ES6 generators
    for writes coordination",
  newLog: (dir, logFileSize) ->
    Log = require './generator_log'
    fs = new FileStorage(dir)
    new Log(fs, logFileSize)
  },
  {
  description: "Iced: async/await rewriting by IcedCoffescript",
  newLog: (dir, logFileSize) ->
    Log = require './iced/log'
    fs = new FileStorage(dir)
    new Log(fs, logFileSize)
  }
  ]


runBenchmarks = ->
  logSize = 10
  readRatio = 10
  logFileSize = 5
  console.log("\nGenerating #{logSize} megabytes of records to write.")
  writes = randomBuffers(megabytes(10), 1000)
  console.log("Generating reading requests for
    #{logSize * readRatio} megabytes.")
  randomRead =  -> Math.floor(Math.random() * writes.length)
  reads = (randomRead() for _ in [0..writes.length * readRatio])
  nRequests = writes.length + reads.length
  console.log("There will be #{nRequests}
    read/write requests.")
  console.log("\nStart Benchmarks")
  baseline = null

  writeReadRecords = Promise.promisify(writeReadRecords)
  Promise.coroutine(->
    for impl in implementations
      console.log()
      console.log(impl.description)

      start = process.hrtime()
      log = impl.newLog("/tmp", megabytes(logFileSize))
      yield writeReadRecords(log, writes, reads)
      stop = process.hrtime(start)

      millis = Math.floor(stop[0] * 1000 + stop[1] / 1000000)
      if baseline == null
        baseline = millis
      ratio = (millis / baseline).toFixed(2)

      console.log("time:  #{millis} ms")
      console.log("ratio: #{ratio} X" )
      console.log()
  )()

module.exports =
  implementations: implementations
  runBenchmarks: runBenchmarks
