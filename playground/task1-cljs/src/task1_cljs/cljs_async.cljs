(ns task1-cljs.cljs-async
  (:require-macros [cljs.core.async.macros :refer [go]]
                   [task1-cljs.macros :refer [node-require <?]])

  (:require [cljs.core.async :as async]
            [task1-cljs.err :as err]))


(node-require [fs])

(defn read-file [f]
  (let [result (async/chan)]
    (.readFile fs f (fn [err data]
                      (async/put! result (or err data))
                      (async/close! result)))
    result))

(defn sum-from-files [files c]
  (go
    (try
      (->> (<? (->> files
                    (map read-file)
                    async/merge
                    (#(async/map (err/lift int) [%]))
                    (async/reduce (err/lift +) 0)))
           (c nil))

      (catch js/Error e
        (c e)))))
