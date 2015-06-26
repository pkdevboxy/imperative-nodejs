fs = require 'fs'


DONE = {}

reader = (onReadDone) ->
  done = false
  in_flight = 0

  notifyIfDone = ->
    if done and in_flight == 0
      onReadDone(null, DONE)

  request = (fileName) ->
    if done
      throw new Error("Reader is closed")

    in_flight += 1

    fs.readFile(fileName, (err, data) ->
      in_flight -= 1
      if err
        onReadDone([fileName, err])
      else
        onReadDone(null, [fileName, data])

      notifyIfDone()
    )

  finish = () ->
    done = true
    notifyIfDone()


  return {request, finish}

module.exports = {reader, DONE}
