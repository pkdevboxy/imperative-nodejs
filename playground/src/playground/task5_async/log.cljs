(ns playground.task5-async.log
  (:require-macros [cljs.core.async.macros :refer [go]])
  (:require [cljs.core.async :as async :refer [<! >!]]
            [schema.core :as s]
            [playground.task5-async.log-impl :as impl :refer [Log]]
            [playground.task5-async.buffer :as buffer]
            [playground.task5-async.file-storage :refer [FileStorage]]
            [playground.node-lib.result :as result]))


(s/defn new-log :- Log
  [storage       :- FileStorage
   log-file-size :- s/Int]

  (impl/->Log storage log-file-size nil nil))


(s/defn <start [log :- Log]
  (go
    (result/forward-error (<! (impl/<start log))
      started-log (do
                    (impl/start-processing! started-log)
                    (result/ok started-log)))))


(s/defn stop! [log :- Log]
  (async/close! (:<requests log)))


(s/defn <add-record [log    :- Log
                     record :- js/Buffer]
  {:pre (< (.-length record) (:log-file-size log))}

  (let [<result (async/chan)]
    (go
      (>! (:<requests log) [:write <result (buffer/null-terminated record)])
      (<! <result))))


(s/defn <fetch-record [log    :- Log
                       offset :- s/Int]
  {:pre (<= 0 offset @(:current-offset log))}

  (let [<result (async/chan)]
    (go
      (>! (:<requests log) [:read <result offset])
      (<! <result))))
