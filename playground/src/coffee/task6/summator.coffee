summator = (delay)->
  sum = 0
  f = (amount, callback) ->
    afterDelay = ->
      sum += amount
      callback(null, sum)

    if delay == 0
      process.nextTick(afterDelay)
    else
      setTimeout(afterDelay, delay)


module.exports = summator
