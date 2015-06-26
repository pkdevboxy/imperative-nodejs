(ns playground.task3.cljs-async
  (:require-macros [cljs.core.async.macros :refer [go-loop]])
  (:require [cljs.core.async :as async]
            [playground.async-utils :as autils]
            [playground.node-lib.fs :as fs]))


(defn process-requests
  [<requests]
  (let [buffer-size 10
        <responses (async/chan buffer-size)
        responses-mix (autils/closable-mix <responses)]

    (go-loop []
      (when-let [request (<! <requests)]
        (autils/add-closable-mix
         responses-mix
         (async/map (fn [x] [request x]) [(fs/<read-file request)]))
        (recur))

      (autils/close-mix responses-mix))

    <responses))
