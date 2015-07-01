(ns playground.node-lib.result
  (:require-macros [playground.node-lib.result :refer [match]])
  (:require [schema.core :as s]))


(defn Result-of [a]
  (s/if (comp nil? first)
    [(s/one (s/pred nil?) "error") (s/one a "value")]
    [(s/one js/Error "error") (s/one (s/pred nil?) "value")]))


(def Result (Result-of s/Any))


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
