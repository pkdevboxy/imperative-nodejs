async = require 'async'

class Log
  constructor: (@storage, @recordsPerFile, @currentId)->
    @currentId = 0
    @writeQueue = async.queue((task, callback) =>
      @storage.append(@_currentFile(), task.record, (err) =>
        if err
          task.callback(err)
        else
          id = @currentId
          @currentId += 1
          task.callback(null, id)

        callback()
      )
    )

  printStats: ->
    @storage.printStats()

  start: (callback) ->
    process.nextTick(=> callback(@))

  writeRecord: (record, callback)->
    @writeQueue.push({record, callback})

  readRecord: (id, callback)->
    @storage.readNth(@_fileForId(id), @_inFileId(id), callback)

  _fileForId: (id) ->
    Math.floor(id / @recordsPerFile).toString()

  _inFileId: (id) ->
    id % @recordsPerFile

  _currentFile: ->
    @_fileForId(@currentId)


module.exports = Log