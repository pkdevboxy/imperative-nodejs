#https://strongloop.com/strongblog/how-to-generators-node-js-yield-use-cases/

module.exports.curry = (nodefn) ->
  (args...) ->
    (cb) ->
      nodefn(args..., cb)

module.exports.run = (genFn) ->
  g = genFn()

  next = (error, value) ->
    return g.throw(error) if error
    cont = g.next(value)
    return if cont.done
    cont.value(next)

  next()
