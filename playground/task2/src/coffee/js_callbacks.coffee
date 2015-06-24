fs = require 'fs'

traverse = (k, callback) ->
  path = []

  onReadFile = (err, data) ->
    return callback(err) if err

    j = parseInt(data, 10)
    if j > 0
      go(j)
    else
      callback(null, path)

  go = (i) ->
    path.push(i)
    fs.readFile(i.toString(), onReadFile)

  go(k)

module.exports = traverse
