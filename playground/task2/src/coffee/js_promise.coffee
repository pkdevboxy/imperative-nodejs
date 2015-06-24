Promise = require 'bluebird'
fs = Promise.promisifyAll(require 'fs')


traverse = (k) ->
  result = []
  go = (i) ->
    result.push(i)
    fs.readFileAsync(i.toString())
      .then (s)->
        j = parseInt(s, 10)
        if j > 0
          go(j)
        else
          result

  go(k)


module.exports = traverse
