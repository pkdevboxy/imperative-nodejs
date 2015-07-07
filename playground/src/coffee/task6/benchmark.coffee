summator = require './summator'
Benchmark = require 'benchmark'

benchmark = (countTo, delay) ->
  (done) ->
    s = summator(delay)
    i = 0
    callback = (err, sum) ->
      throw err if err

      if i < countTo
        s(i, (err, data) ->
          i += 1
          callback(err, data)
        )
      else
        done(sum)

    callback()


suite = Benchmark.Suite()

[_, _, countTo, delay] = process.argv.map((s)-> parseInt(s, 10))

f = benchmark(countTo, delay)

fn = (d) ->
  f ->
    d.resolve()


suite
  .add('pure CoffeeScript', {defer: true, fn})
  .on('cycle', (event)->
    console.log("Done!")
    console.log(event.target.toString()))


suite.run(async: true)
