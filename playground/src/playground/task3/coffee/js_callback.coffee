fs = require 'fs'


DONE = {}

# Creates a reader object.
#
# The reader object has two methods:
#
#  * request --- requests reading of a file
#  * done    --- notifies the reader that there will be no futher requests
#
# onReadDone(err, data) is a callback function taking two arguments.
#
# It is called as
#  * onReadDone([fileName, error]) when fileName can not be read
#  * onReadDone(null, [fileName, data]) when data was read from fileName
#  * onReadDone(null, DONE) when all pending requests have finished
reader = (onReadDone) ->
  done = false
  inFlight = 0

  _notifyIfDone = ->
    if done and inFlight == 0
      onReadDone(null, DONE)

  request = (fileName) ->
    if done
      throw new Error("Reader is closed")

    inFlight += 1

    fs.readFile(fileName, (err, data) ->
      inFlight -= 1
      if err
        onReadDone([fileName, err])
      else
        onReadDone(null, [fileName, data])

      _notifyIfDone()
    )

  finish = () ->
    done = true
    _notifyIfDone()


  return {request, finish}

module.exports = {reader, DONE}
