(ns playground.node-lib.utils
  (:require [cljs.core.async :as async]
            [playground.node-lib.result :as result]))


(defn <<<
  "Calls a CPS-style function f with args and returns a channel with result"
  [f & args]
  (let [result (async/chan)]
    (apply f (concat args [(fn [err data]
                             (async/put! result (if err
                                                  (result/failure err)
                                                  (result/ok data)))
                             (async/close! result))]))
    result))


(defn str->int
  "Parses integer."
  [s]
  {:pre (string? s)}
  (let [i (js/parseInt s 10)]
    (if (js/isNaN i)
      (result/failure (js/Error (str "str->int: " s " is not an integer!")))
      (result/ok i))))
