(ns playground.task1.cljs-async
  (:require-macros [cljs.core.async.macros :refer [go]]
                   [playground.task1.macros :refer [node-require <?]])

  (:require [cljs.core.async :as async]
            [playground.task1.err :as err]))


(node-require [fs])


(defn chan->callback [channel callback]
  (go
    (try
      (callback nil (<? channel))
      (catch js/Error e
        (callback e)))))


(defn read-file [f]
  (let [result (async/chan)]
    (.readFile fs f (fn [err data]
                      (async/put! result (or err data))
                      (async/close! result)))
    result))


(defn- sum-files [files]
  (->> files
       (map read-file)
       async/merge
       (#(async/map (err/lift int) [%]))
       (async/reduce (err/lift +) 0)))


(defn sum-from-files [files callback]
  (chan->callback (sum-files files) callback))
