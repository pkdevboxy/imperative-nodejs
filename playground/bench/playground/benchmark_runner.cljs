(ns playground.benchmark-runner
  (:require [cljs.nodejs :as nodejs]
            [schema.core :as s]
            [playground.benchmark :refer [time-it!]]
            [playground.task5.benchmark-fixtures :refer [random-buffers megabytes]]
            [playground.task5.benchmark :refer [write-records-to-log]]
            [playground.task5.implementations :as implementations]))


(nodejs/enable-util-print!)
(s/set-fn-validation! false)


(defn -main []
  (let [records (random-buffers 1000 (megabytes 0.1))
        f (fn [done]
            (write-records-to-log implementations/callback-log records done))]
    (time-it! f)))

(set! *main-cli-fn* -main)
