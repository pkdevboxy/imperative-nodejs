(ns playground.test-utils
  (:require-macros [cljs.core.async.macros :refer [go go-loop]])
  (:require [playground.node-lib.result :as result]))


(defn <retry [thunk]
  (go-loop [i 100]
    (result/match (<! (thunk))
      err (if (zero? i)
            (throw err)
            (recur (dec i)))
      value value)))
