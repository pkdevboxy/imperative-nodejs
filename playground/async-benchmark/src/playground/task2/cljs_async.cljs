(ns playground.task2.cljs-async
  (:require-macros [cljs.core.async.macros :refer [go go-loop]])
  (:require [cljs.core.async :as async]
            [playground.node-lib.result :as result]
            [playground.node-lib.utils :refer [<<<]]
            [playground.node-api.fs :as fs]))


(defn- <next-number [x]
  {:pre (integer? x)}
  (go
    (result/match (<! (<<< fs/read-file (str x)))
      error (result/failure error)
      s (result/ok (int s)))))


(defn traverse [k]
  {:pre (integer? k)}
  (go-loop [i k path []]
    (result/match (<! (<next-number i))
      error (result/failure error)

      j (let [new-path (conj path i)]
          (if (pos? j)
            (recur j new-path)
            (result/ok new-path))))))
