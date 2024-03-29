os = require 'os'
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


writeReadRecords = ({log, records, reads}, callback) ->
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
      # if log.printStats
      #   log.printStats()
      callback()
      return
    i = reads[r]
    log.readRecord recordMap[i], (error, buffer) ->
      throw error if error

      unless buffer.equals(records[i])
        throw new Error("Log is broken")

      r += 1
      readLoop()

  writeLoop()

multyReadWrite = (config, callback) ->
  rw = Promise.promisify(writeReadRecords)
  config.log.start ->
    Promise.all(rw(config) for _ in [0...config.nThreads])
      .then(-> callback())


benchmarks = {
  readWrite: {
    description: "Single threaded read-write" ,
    fn: (config, callback) ->
      config.log.start(-> writeReadRecords(config, callback))
  },

  multyReadWrite: {
    description: "Multy thread read-write",
    fn: multyReadWrite,
    threaded: true,
  }
}


implementations = [
  {
  description: "Baseline: coffescript callback based log",
  newLog: (dir, logFileSize) ->
    Log = require './log'
    fs = new FileStorage(dir)
    new Log(fs, logFileSize)
  },
  {
  description: "Promise: ES6 + bluebird"
  newLog: (dir, logFileSize) ->
    FS = require './es6/file_storage'
    Log = require './es6/log'
    fs = new FS(dir)
    new Log(fs, logFileSize)
  },
  {
  description: "Async/await: ES7 + bluebird"
  newLog: (dir, logFileSize) ->
    FS = require './es7/file_storage'
    Log = require './es7/log'
    fs = new FS(dir)
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
  description: "Promise: coffescript + bluebird + ES6 generators"
  newLog: (dir, logFileSize) ->
    FS = require './promise/file_storage'
    Log = require './promise/log'
    fs = new FS(dir)
    new Log(fs, logFileSize)
  },
  ]


runBenchmarks = ->
  benchmark = benchmarks.multyReadWrite
  for k, v of benchmarks
    if k == process.argv[2]
      benchmark = v

  fn = Promise.promisify(benchmark.fn)
  logSize = 10
  readRatio = 10
  logFileSize = 5
  nThreads = if benchmark.threaded then 5 else 1

  console.log()
  console.log("Node version: ", process.version)
  console.log(benchmark.description)
  console.log()
  console.log("Generating #{logSize} megabytes of records to write.")
  records = randomBuffers(megabytes(logSize), 1000)

  console.log("Generating reading requests for
    #{logSize * readRatio} megabytes.")
  randomRead =  -> Math.floor(Math.random() * records.length)
  reads = (randomRead() for _ in [0..records.length * readRatio])
  nRequests = records.length + reads.length

  console.log("\nThere will be #{nRequests}
    read/write requests per thread.\n#{nThreads} threads will concurently
    write #{logSize * nThreads} mb and
    read #{logSize * readRatio * nThreads} mb")

  console.log("\nStart benchmarks")

  baseline = null
  Promise.coroutine(->
    for impl in implementations
      console.log()
      console.log(impl.description)
      log = impl.newLog(os.tmpdir(), megabytes(logFileSize))
      config = {log, records, reads, nThreads}
      start = process.hrtime()
      yield fn(config)
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
