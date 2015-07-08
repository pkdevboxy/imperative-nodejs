(ns playground.benchmark-runner
  (:require [cljs.nodejs :as nodejs]
            [schema.core :as s]
            [playground.benchmark :refer [time-several!]]
            [playground.node-api.process :as process]
            [playground.task5.benchmark :refer [write-records-to-log
                                                write-records-to-log-cb]]
            [playground.task5.implementations :as implementations]
            [playground.task5.benchmark-fixtures :refer [random-buffers megabytes]]
            [playground.task6.benchmark :refer [callback-benchmark async-benchmark]]))


(nodejs/enable-util-print!)



(defn -main []
  (s/set-fn-validation! false)
  (let [records (random-buffers 10000 (megabytes 50))
        f-cb-async (fn [done]
                     (write-records-to-log implementations/callback-log records done))
        f-cb (fn [done]
               (write-records-to-log-cb records done))]

    (time-several!
     {:async f-cb-async
      :callback f-cb})))

(set! *main-cli-fn* -main)
