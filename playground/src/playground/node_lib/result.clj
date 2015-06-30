(ns playground.node-lib.result)


(defmacro match
  "Evaluates expr returning [error result] pair and takes appropriate action
  based on the presense of an error"

  #_(result/match (divide 92 0)
      error (print "Panic: " error)
      quotient (frobincate quotient))

  [expr err-symbol err-expr val-symbol val-expr]

  `(let [[~err-symbol ~val-symbol] ~expr]
     (if (some? ~err-symbol)
       ~err-expr
       ~val-expr)))
