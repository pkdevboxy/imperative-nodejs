(ns playground.task3.cljs-async
  (:require-macros [cljs.core.async.macros :refer [go-loop]])
  (:require [cljs.core.async :as async]
            [playground.async-utils :as autils]
            [playground.node-lib.fs :as fs]))


(defn process-requests
  [<requests]
  (let [process-request
        (fn [request] (async/map (fn [response] [request response])
                                 [(fs/<read-file request)]))]

    (autils/flatmap process-request <requests)))
