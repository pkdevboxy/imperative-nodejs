(ns playground.task5-async.log-impl
  (:require-macros [cljs.core.async.macros :refer [go go-loop]])
  (:require [cljs.core.async :as async :refer [<! >!]]
            [playground.node-api.fs :as fs]
            [playground.node-api.path :as path]
            [playground.node-lib.utils :refer [<<<]]
            [playground.node-lib.result :as result]
            [playground.task5-async.file-storage :as storage]
            [playground.task5-async.buffer :as buffer]))

(defrecord Log [storage log-file-size current-offset <requests])
(defn- log? [log] (instance? Log log))


(declare <ensure-has-file <write-record! <read-record!)


(defn- is-valid-offset [x]
  (<= 0 x (.-MAX_SAFE_INTEGER js/Number)))


(defn <start [log]
  {:pre (log? log)}
  (let [rt-config {:current-offset (atom 0 :validator is-valid-offset)
                   :<requests (async/chan)}]
    (<ensure-has-file (into log rt-config))))


(defn start-processing! [log]
  {:pre (log? log)}
  (go-loop []
    (when-let [[cmd >response arg] (<! (:<requests log))]
      (condp = cmd
        :write (>! >response (<! (<write-record! log arg)))
        :read  (>! >response (<! (<read-record! log arg))))
      (recur))))


(defn- file-id-for-offset [log offset]
  {:pre [(log? log)
         (<= 0 offset @(:current-offset log))]}

  (quot offset (:log-file-size log)))


(defn- current-file-id [log]
  {:pre (log? log)}
  (file-id-for-offset log @(:current-offset log)))


(defn- in-file-offset [log offset]
  (mod offset (:log-file-size log)))


(defn- current-in-file-offset [log]
  (in-file-offset log @(:current-offset log)))


(defn- free-space-in-file [log]
  (- (:log-file-size log)
     (current-in-file-offset log)))


(defn- <add-file [log file-id]
  {:pre [(log? log)
         (number? file-id)]}
  (go
    (result/forward-error (<! (storage/<add-file
                               (:storage log)
                               (str file-id)
                               (:log-file-size log)))
      _ (result/ok log))))


(defn- <add-new-file [log]
  {:pre (log? log)}
  (swap! (:current-offset log) + (free-space-in-file log))
  (<add-file log (current-file-id log)))


(defn- <add-file-if-neccessary [log record]
  (if (< (.-length record) (free-space-in-file log))
    (async/to-chan [(result/ok :ok)])
    (<add-new-file log)))


(defn- <ensure-has-file [log]
  (if (zero? (current-in-file-offset log))
    (<add-file log (current-file-id log))
    (async/to-chan [(result/ok :ok)])))


(defn- <write-record! [log record]
  {:pre [(instance? js/Buffer record)
         (zero? (aget record (dec (.-length record))))]}
  (go
    (result/forward-error (<! (<add-file-if-neccessary log record))
      _ (result/forward-error (<! (storage/<write-to-file
                                   (:storage log)
                                   (str (current-file-id log))
                                   record
                                   (current-in-file-offset log)))

          _ (let [old-offset @(:current-offset log)]
              (swap! (:current-offset log) + (.-length record))
              (result/forward-error (<! (<ensure-has-file log))
                _ (result/ok old-offset)))))))


(defn- <read-record! [log global-offset]
  {:pre [(log? log)
         (<= 0 global-offset @(:current-offset log))]}

  (let [file-id (file-id-for-offset log global-offset)
        offset (in-file-offset log global-offset)
        max-len (- (:log-file-size log) offset)
        buf (js/Buffer. max-len)]

    (go
      (result/forward-error (<! (storage/<read-from-file
                                 (:storage log)
                                 (str file-id)
                                 buf
                                 offset))
        _ (result/ok (buffer/extract-c-str buf))))))
