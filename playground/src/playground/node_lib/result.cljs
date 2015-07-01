(ns playground.node-lib.result
  (:require-macros [playground.node-lib.result :refer [match]]))


(defn ok [value]
  [nil value])

(defn failure [error]
  [error nil])


(defn unwrap! [r]
  (match r
    err (throw err)
    val val))
