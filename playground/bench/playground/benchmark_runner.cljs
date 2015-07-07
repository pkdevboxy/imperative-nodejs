(ns playground.benchmark-runner
  (:require [cljs.nodejs :as nodejs]
            [schema.core :as s]
            [playground.benchmark :refer [time-several!]]
            [playground.node-api.process :as process]
            [playground.task6.benchmark :refer [callback-benchmark async-benchmark]]))


(nodejs/enable-util-print!)



(defn -main []
  (s/set-fn-validation! false)
  (let [[count-to delay] (map #(js/parseInt % 10) (drop 2 process/argv))
        callback-fn (callback-benchmark :count-to count-to :delay delay)
        async-fn (async-benchmark :count-to count-to :delay delay)]

    (time-several!
     {:callback callback-fn
      :async async-fn})))

(set! *main-cli-fn* -main)
