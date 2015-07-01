(ns playground.node-lib.result
  (:require-macros [playground.node-lib.result :refer [match]])
  (:require [schema.core :as s :include-macros true]))


(def Result [(s/one (s/maybe js/Error) "error")
             (s/one s/Any "value")])


(s/defn ok :- Result
  [value :- s/Any]

  [nil value])


(s/defn failure :- Result
  [error :- js/Error]

  [error nil])


(s/defn unwrap!
  [r :- Result]

  (match r
    err (throw err)
    val val))
