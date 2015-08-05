module.exports =
  sumStringsAsNumbers: (xs)->
    plus = (x, y) -> x + y
    xs.map((x)-> parseInt(x, 10))
    .reduce(plus, 0)