(ns playground.node-lib.utils
  (:require [cljs.core.async :as async]
            [schema.core :as s]
            [playground.node-lib.result :as result :refer [Result-of]]))


(defn <<<
  "Calls a CPS-style function f with args and returns a channel with result"
  [f & args]
  (let [result (async/chan)]
    (apply f (concat args [(fn [err & args]
                             (async/put! result (if err
                                                  (result/failure err)
                                                  (result/ok (condp = (count args)
                                                               0 nil
                                                               1 (first args)
                                                               args))))
                             (async/close! result))]))
    result))


(s/defn str->int :- (Result-of s/Int)
  "Parses integer."
  [s :- s/Str]

  (let [i (js/parseInt s 10)]
    (if (js/isNaN i)
      (result/failure (js/Error (str "str->int: " s " is not an integer!")))
      (result/ok i))))
