(ns task1-cljs.cljs-async
  (:require-macros [cljs.core.async.macros :refer [go]]
                   [task1-cljs.macros :refer [node-require  <?]])

  (:require [cljs.core.async  :as async :refer [<! >!]]))


(node-require [fs])

(defn read-file [f]
  (let [result (async/chan)]
    (.readFile fs f (fn [err data]
                      (async/put! result (or err data))
                      (async/close! result)))
    result))

(defn sum-from-files [files c]
  (go
    (let [numbers (async/merge (map read-file files) (count files))]

      (try
        (loop [sum 0]
          (if-let [n (<? numbers)]
            (recur (+ sum (int n)))
            (c nil sum)))

        (catch js/Error e
          (c e))))))
