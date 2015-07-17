(ns playground.task5.callback.log
  (:require-macros [playground.task5.callback.macros :refer [try->]])
  (:require [cljs.core.async :as async]
            [schema.core :as s]
            [playground.task5.buffer :as buffer]
            [playground.task5.callback.log-impl :as impl :refer [Log RecordOffset]]
            [playground.task5.callback.file-storage :refer [FileStorage]]
            [playground.node-lib.result :as result :refer [Result-of]]))


(s/defn new-log :- Log
  "Creates a new log. This is a pure function."
  [storage       :- FileStorage
   log-file-size :- s/Int]

  (impl/->Log storage log-file-size nil nil))


(s/defn start
  "Starts a log. Returns a chanel with either log or error."
  [log :- Log
   callback]
  (try-> [log (impl/start log)]
    (catch-> callback)

    (impl/start-processing! log)
    (callback nil log)))


(s/defn add-record
  "Writes a record to the log. Returns a chanel with either message id or error."
  [log    :- Log
   record :- js/Buffer
   callback]
  {:pre (< (.-length record) (:log-file-size log))}

  (async/put! (:<writes log) [(buffer/null-terminated record) callback]))


(s/defn fetch-record
  "Reads a record from log. Returns a chanel with either record or error."
  [log    :- Log
   offset :- RecordOffset
   callback]
  {:pre (<= 0 offset @(:current-offset log))}

  (impl/read-record! log offset callback))


(s/defn flush! [log :- Log]
  (impl/flush! log))
