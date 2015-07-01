(ns playground.task5-async.log
  (:require-macros [cljs.core.async.macros :refer [go]])
  (:require [cljs.core.async :as async :refer [<! >!]]
            [playground.task5-async.log-impl :as impl]
            [playground.task5-async.buffer :as buffer]
            [playground.node-lib.result :as result]))

(defn new-log [path log-file-size]
  {:pre [(string? path)
         (number? log-file-size)]}

  (impl/->Log path log-file-size nil nil))


(defn <start [log]
  {:pre (instance? impl/Log log)}
  (go
    (result/forward-error (<! (impl/<start log))
      started-log (do
                    (impl/start-processing! started-log)
                    (result/ok started-log)))))

(defn stop! [log]
  {:pre (instance? impl/Log log)}
  (async/close! (:<requests log)))


(defn <add-record [log record]
  {:pre [(instance? impl/Log log)
         (instance? js/Buffer record)
         (< (.-length record) (:log-file-size log))]}

  (let [<result (async/chan)]
    (go
      (>! (:<requests log) [:write <result (buffer/null-terminated record)])
      (<! <result))))


(defn <fetch-record [log offset]
  {:pre [(instance? impl/Log log)
         (<= 0 offset @(:current-offset log))]}

  (let [<result (async/chan)]
    (go
      (>! (:<requests log) [:read <result offset])
      (<! <result))))
