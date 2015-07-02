(ns playground.task5-async.log-impl
  (:require-macros [cljs.core.async.macros :refer [go go-loop]])
  (:require [cljs.core.async :as async :refer [<! >!]]
            [schema.core :as s]
            [playground.node-api.fs :as fs]
            [playground.node-api.path :as path]
            [playground.node-lib.utils :refer [<<<]]
            [playground.node-lib.result :as result]
            [playground.task5-async.file-storage :as storage]
            [playground.task5-async.buffer :as buffer]))

(s/defrecord Log
    [storage       :- storage/FileStorage
     log-file-size :- s/Int
     current-offset
     <requests])

(declare <add-file <write-record! <read-record!)


(s/defn ^:private is-valid-offset :- s/Bool
  [x :- s/Int]
  (<= 0 x (.-MAX_SAFE_INTEGER js/Number)))


(s/defn <start [log :- Log]
  (let [rt-config {:current-offset (atom 0 :validator is-valid-offset)
                   :<requests (async/chan)}]
    (<add-file (into log rt-config) 0)))


(s/defn start-processing! [log :- Log]
  (go-loop []
    (when-let [[cmd >response arg] (<! (:<requests log))]
      (condp = cmd
        :write (>! >response (<! (<write-record! log arg)))
        :read  (go
                 (>! >response (<! (<read-record! log arg)))))
      (recur))))

(def NullTerminatedBuffer (s/both js/Buffer
                                  (s/pred #(zero? (aget % (dec (.-length %)))))))

(s/defn ^:private file-id-for-offset
  [log    :- Log
   offset :- s/Int]
  {:pre (<= 0 offset @(:current-offset log))}

  (quot offset (:log-file-size log)))


(s/defn ^:private current-file-id [log :- Log]
  (file-id-for-offset log @(:current-offset log)))


(s/defn ^:private in-file-offset
  [log    :- Log
   offset :- s/Int]

  (mod offset (:log-file-size log)))


(s/defn ^:private current-in-file-offset
  [log :- Log]

  (in-file-offset log @(:current-offset log)))


(s/defn ^:private free-space-in-file
  [log :- Log]

  (- (:log-file-size log)
     (current-in-file-offset log)))


(s/defn ^:private <add-file
  [log :- Log
   file-id :- s/Int]

  (go
    (result/forward-error (<! (storage/<add-file
                               (:storage log)
                               (str file-id)
                               (:log-file-size log)))
      _ (result/ok log))))


(s/defn ^:private <increase-offset
  [log :- Log
   off :- s/Int]

  (let [new-file-id (file-id-for-offset log (+ @(:current-offset log) off))
        commit! #(swap! (:current-offset log) + off)]
    (if (= (current-file-id log) new-file-id)
      (do
        (commit!)
        (async/to-chan [(result/ok)]))

      (go
        (result/forward-error (<! (<add-file log new-file-id))
          _ (do
              (commit!)
              (result/ok)))))))


(s/defn ^:private <fill-current-file-if-neccessary
  [log    :- Log
   record :- NullTerminatedBuffer]

  (if (< (.-length record) (free-space-in-file log))
    (async/to-chan [(result/ok)])
    (<increase-offset log (free-space-in-file log))))


(s/defn ^:private <write-record!
  [log    :- Log
   record :- NullTerminatedBuffer]

  (go
    (result/forward-error (<! (<fill-current-file-if-neccessary log record))
      _ (result/forward-error (<! (storage/<write-to-file
                                   (:storage log)
                                   (str (current-file-id log))
                                   record
                                   (current-in-file-offset log)))

          _ (let [old-offset @(:current-offset log)]
              (result/forward-error (<! (<increase-offset log (.-length record)))
                _ (result/ok old-offset)))))))


(s/defn ^:private <read-record!
  [log           :- Log
   global-offset :- s/Int]
  {:pre (<= 0 global-offset @(:current-offset log))}

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
