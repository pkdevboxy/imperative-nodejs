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
      # callback()
      log.avgTime()
      console.log("done", process.hrtime(start)[0], "seconds")
      return
    log.writeRecord records[i], (err, offset) ->
      throw err if err
      i += 1
      f()
  log.start(f)


data = randomBuffers(megabytes(100), 1000)


fn = (d) ->
  fs = new FileStorage("/tmp/bench")
  log = new Log(fs, (megabytes 5))
  writeRecordsToLog(log, data, ->d.resolve())

# suite = Benchmark.Suite()

# suite
#   .add('test', {defer: true, fn})
#   .on('cycle', (event)->
#     console.log("Done!")
#     console.log(event.target.toString()))


# suite.run(async: true)
console.log("Start")
start = process.hrtime()
fn()
