(ns task2.node-lib.utils
  (:require [cljs.core.async :as async]))


(defn callback->chan
  "Turns a CPS-style function f into a channel returning function"
  [f]
  (fn [& args]
    (let [result (async/chan)
          callback (fn [err data]
                     (async/put! result (or err data))
                     (async/close! result))
          args-with-cb (conj (vec args) callback)]

      (apply f args-with-cb)

      result)))
