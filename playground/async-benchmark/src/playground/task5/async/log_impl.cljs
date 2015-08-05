(ns playground.task5.async.log-impl
  (:require-macros [cljs.core.async.macros :refer [go go-loop]])
  (:require [cljs.core.async :as async :refer [<! >!]]
            [schema.core :as s]
            [playground.async-utils :refer [Chan-of Chan]]
            [playground.schemas :refer [Atom-of]]
            [playground.node-lib.utils :refer [<<<]]
            [playground.node-lib.result :as result :refer [Result Result-of]]
            [playground.task5.async.file-storage :as storage]
            [playground.task5.buffer :as buffer]))

(def RecordOffset s/Int)
(def NullTerminatedBuffer (s/both js/Buffer
                                  (s/pred #(zero? (aget % (dec (.-length %)))))))


(s/defrecord Log
    [storage        :- storage/FileStorage
     log-file-size  :- s/Int
     current-offset :- (s/maybe (Atom-of RecordOffset))
     <requests      :- (s/maybe
                        (Chan-of [(s/one s/Keyword "command")
                                  (s/one Chan "reply-to")
                                  (s/one (s/either js/Buffer RecordOffset) "arg")]))])


(declare <add-file <write-record! <read-record!)


(s/defn ^:private is-valid-offset :- s/Bool
  [x :- s/Int]
  (<= 0 x (.-MAX_SAFE_INTEGER js/Number)))


(s/defn <start :- (Chan-of (Result-of Log))
  [log :- Log]

  (let [rt-config {:current-offset (atom 0 :validator is-valid-offset)
                   :<requests (async/chan)}]
    (<add-file (into log rt-config) 0)))


(s/defn start-processing!
  [log :- Log]

  (go-loop []
    (when-let [[cmd >reply-to arg] (<! (:<requests log))]
      (condp = cmd
        :write (>! >reply-to (<! (<write-record! log arg)))
        :read  (go
                 (>! >reply-to (<! (<read-record! log arg)))))
      (recur))))



(s/defn ^:private file-id-for-offset :- s/Int
  [log    :- Log
   offset :- s/Int]
  {:pre (<= 0 offset @(:current-offset log))}

  (quot offset (:log-file-size log)))


(s/defn ^:private current-file-id :- s/Int
  [log :- Log]
  (file-id-for-offset log @(:current-offset log)))


(s/defn ^:private in-file-offset :- s/Int
  [log    :- Log
   offset :- s/Int]

  (mod offset (:log-file-size log)))


(s/defn ^:private current-in-file-offset :- s/Int
  [log :- Log]

  (in-file-offset log @(:current-offset log)))


(s/defn ^:private free-space-in-file :- s/Int
  [log :- Log]

  (- (:log-file-size log)
     (current-in-file-offset log)))


(s/defn ^:private <add-file :- (Chan-of (Result-of Log))
  [log :- Log
   file-id :- s/Int]

  (go
    (result/forward-error (<! (storage/<add-file
                               (:storage log)
                               (str file-id)
                               (:log-file-size log)))
      _ (result/ok log))))


(s/defn ^:private <increase-offset :- (Chan-of Result)
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


(s/defn ^:private <fill-current-file-if-neccessary :- (Chan-of Result)
  [log    :- Log
   record :- NullTerminatedBuffer]

  (if (< (.-length record) (free-space-in-file log))
    (async/to-chan [(result/ok)])
    (<increase-offset log (free-space-in-file log))))


(s/defn ^:private <write-record! :- (Chan-of (Result-of RecordOffset))
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


(s/defn ^:private <read-record! :- (Chan-of (Result-of js/Buffer))
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
