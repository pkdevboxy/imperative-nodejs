(ns playground.node-lib.utils
  (:require [cljs.core.async :as async]))


(defn <<<
  "Calls a CPS-style function f with args and returns a channel with result"
  [f & args]
  (let [result (async/chan)]
    (apply f (concat args [(fn [err data]
                             (async/put! result (or err data))
                             (async/close! result))]))
    result))

(defn callback->chan
  "Turns a CPS-style function f into a channel returning function"
  [f]
  (fn [& args] (apply <<< f args)))


(defn str->int
  "Parses integer. Throws if not an integer."
  [s]
  {:pre (string? s)}
  (let [result (js/parseInt s 10)]
    (when (js/isNaN result)
      (throw (js/Error (str "str->int: " s " is not an integer!"))))
    result))
