should = require 'should'
fs = require 'fs'


randomDelay = (maxDelay) ->
  Math.random() * maxDelay

originalReadFile = fs.readFile
mockReadFile = (name, cb) ->
  setTimeout((-> cb(null, name)), randomDelay(30))

describe "Summator", ->
  beforeEach ->
    fs.readFile = mockReadFile
  afterEach ->
    fs.readFile = originalReadFile
  it "should sum to 92", (done)->
    summator = require '../src/js_callback.coffee'
    summator(['1', '2', '89'], (err, data) ->
      data.should.equal(92)
      done()
    )


