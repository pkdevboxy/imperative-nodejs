(ns playground.task5.benchmark
  (:require-macros [cljs.core.async.macros :refer [go]])
  (:require [cljs.core.async :as async :refer [<! >!]]
            [playground.node-lib.result :as result]
            [playground.node-lib.utils :refer [require-main]]
            [playground.task5.benchmark-fixtures :refer [megabytes]]))


(defn write-records-to-log [{:keys [<start <add-record]} records done]
  (go
    (let [l (result/unwrap! (<! (<start "/tmp/bench" (megabytes 5))))]
      (doseq [r records]
        (result/unwrap! (<! (<add-record l r))))
      (.avgTime l)
      (done))))


(defn write-records-to-log-cb [records done]
  (let [FileStorage (require-main "./playground/task5/file_storage")
        Log (require-main "./playground/task5/log")
        log (Log. (FileStorage. "/tmp/bench") (megabytes 5))
        i (atom 0)]
    (letfn [(callback []
              (if (= @i (count records))
                (do
                  (.avgTime log)
                  (done))
                (.writeRecord log (nth records @i)
                              (fn [err offset]
                                (when err (throw err))
                                (swap! i inc)
                                (callback)))))]

      (.start log callback))))
