(ns playground.task3.cljs-async
  (:require-macros [cljs.core.async.macros :refer [go-loop]])
  (:require [cljs.core.async :as async]
            [playground.node-lib.fs :as fs]))


(defn process-requests
  [<requests]
  (let [buffer-size 10
        <should-stop (async/chan)
        <responses (async/chan buffer-size)
        responses-mix (async/mix <responses)
        <result (async/chan buffer-size)]
    (go-loop [in-flight 0]
      (if-let [request (<! <requests)]
        (let [<response (async/map (fn [x] [request x])
                                   [(fs/<read-file request)])]
          (async/admix responses-mix <response)
          (recur (inc in-flight)))

        (>! <should-stop in-flight)))

    (go-loop [n-processed 0]
      (let [[val ch] (alts! [<responses <should-stop])]
        (condp = ch
          <responses (do
                       (>! <result val)
                       (recur (inc n-processed)))

          <should-stop (loop [pending (- val n-processed)]
                         (if (zero? pending)

                           (async/close! <result)
                           (do
                             (>! <result (<! <responses))
                             (recur (dec pending))))))))

    <result))
