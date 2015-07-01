(ns playground.task5-async.log-impl
  (:require-macros [cljs.core.async.macros :refer [go go-loop]])
  (:require [cljs.core.async :as async :refer [<! >!]]
            [playground.node-api.fs :as fs]
            [playground.node-api.path :as path]
            [playground.node-lib.utils :refer [<<<]]
            [playground.node-lib.result :as result]
            [playground.task5-async.buffer :as buffer]))

(defrecord Log [path log-file-size current-offset <requests])
(defn- log? [log] (instance? Log log))

(declare <add-first-file
         write-record!
         read-record!)

(defn <start [log]
  {:pre (log? log)}
  (<add-first-file (assoc log
                          :current-offset (atom 0)
                          :<requests (async/chan))))

(defn start-processing! [log]
  {:pre (log? log)}
  (go-loop []
    (when-let [[cmd >response arg] (<! (:<requests log))]
      (condp = cmd
        :write (>! >response (<! (write-record! log arg)))
        :read  (>! >response (<! (read-record! log arg))))
      (recur))))


(defn- path-to-log-file [log log-file-id]
  {:pre [(log? log)
         (number? log-file-id)]}
  (path/join (:path log) (str log-file-id)))


(defn- <open-log-file [log log-file-id]
  {:pre [(log? log)
         (number? log-file-id)]}
  (go
    (result/match (<! (<<< fs/open (path-to-log-file log log-file-id) "r+"))
      error (<! (<<< fs/open (path-to-log-file log log-file-id) "w+"))
      fd (result/ok fd))))


(defn- new-buffer [log]
  (let [buf (js/Buffer. (:log-file-size log))]
    (.fill buf 0)
    buf))


(defn- file-for-offset [log offset]
  {:pre [(log? log)
         (<= 0 offset @(:current-offset log))]}

  (quot offset (:log-file-size log)))


(defn- current-file [log]
  {:pre (log? log)}
  (file-for-offset log @(:current-offset log)))


(defn- <zero-file [log fd]
  {:pre [(log? log)
         (number? fd)]}

  (<<< fs/write fd (new-buffer log) 0 (:log-file-size log) 0))


(defn- <add-file [log file-id]
  {:pre [(log? log)
         (number? file-id)]}
  (go
    (result/forward-error (<! (<open-log-file log file-id))
      fd (result/forward-error (<! (<zero-file log fd))
           _ (result/ok log)))))


(defn- <add-first-file [log]
  {:pre (log? log)}
  (<add-file log 0))


(defn- in-file-offset [log offset]
  (mod offset (:log-file-size log)))


(defn- current-in-file-offset [log]
  (in-file-offset log @(:current-offset log)))


(defn- free-space-in-file [log]
  (- (:log-file-size log)
     (current-in-file-offset log)))


(defn- <add-new-file [log]
  {:pre (log? log)}
  (swap! (:current-offset log) + (free-space-in-file log))
  (<add-file log (current-file log)))


(defn- <write-record-to-file [log record]
  (go
    (result/forward-error (<! (<open-log-file log (current-file log)))
      fd (result/forward-error (<! (<<< fs/write fd
                                        record 0 (.-length record)
                                        (current-in-file-offset log)))
           _ nil))))


(defn- write-record! [log record]
  {:pre [(instance? js/Buffer record)
         (zero? (aget record (dec (.-length record))))]}
  (go
    (when-not (< (.-length record) (free-space-in-file log))
      (result/match (<! (<add-new-file log))
        error (result/failure error)
        _ nil))

    (result/forward-error (<! (<write-record-to-file log record))
      _ (let [old-offset @(:current-offset log)]
          (swap! (:current-offset log) + (.-length record))
          (result/ok old-offset)))))


(defn <read-c-str [fd off max-len]
  (let [buf (js/Buffer. max-len)]
    (go
      (result/forward-error (<! (<<< fs/read fd
                                     buf 0 max-len
                                     off))
        _ (result/ok (playground.task5-async.buffer/extract-c-str buf))))))


(defn- read-record! [log offset]
  {:pre [(log? log)
         (<= 0 offset @(:current-offset log))]}

  (let [f (file-for-offset log offset)
        off (in-file-offset log offset)
        max-len (- (:log-file-size log) off)]

    (go
      (result/forward-error (<! (<open-log-file log f))
        fd (result/forward-error (<! (<read-c-str fd off max-len))
             buf (result/ok buf))))))
