Log = require './log'
FileStorage = require './file_storage'
Benchmark = require 'benchmark'

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


writeRecordsToLog = (log, records, callback) ->
  i = 0
  f = ->
    if i == records.length
      log.printStats()
      callback()
      return
    log.writeRecord records[i], (err, offset) ->
      throw err if err
      i += 1
      f()
  log.start(f)


writeReadRecords = (log, records, reads, callback) ->
  recordMap = []
  w = 0
  writeLoop = ->
    if w == records.length
      return readLoop()

    log.writeRecord records[w], (error, offset) ->
      throw error if error
      recordMap[w] = offset
      w += 1
      writeLoop()

  r = 0
  readLoop = ->
    if r == reads.length
      log.printStats()
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


data = randomBuffers(megabytes(10), 1000)
reads = (Math.floor(Math.random() * data.length) for _ in [0..data.length*10])

fn = ->
  fs = new FileStorage("/tmp/bench")
  log = new Log(fs, (megabytes 5))
  writeReadRecords(log, data, reads, ->console.timeEnd("read-write"))

# suite = Benchmark.Suite()

# suite
#   .add('test', {defer: true, fn})
#   .on('cycle', (event)->
#     console.log("Done!")
#     console.log(event.target.toString()))


# suite.run(async: true)
console.log("Start")
console.time("read-write")
fn()
