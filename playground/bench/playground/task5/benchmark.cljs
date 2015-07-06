(ns playground.task5.benchmark
  (:require-macros [cljs.core.async.macros :refer [go]])
  (:require [cljs.core.async :as async :refer [<! >!]]
            [playground.node-lib.result :as result]
            [playground.task5.benchmark-fixtures :refer [megabytes]]))


(defn write-records-to-log [{:keys [<start <add-record]} records done]
  (go
    (let [l (result/unwrap! (<! (<start "/tmp/bench" (megabytes 0.5))))]
      (doseq [r records]
        (result/unwrap! (<! (<add-record l r))))
      (done))))
