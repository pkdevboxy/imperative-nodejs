(ns playground.task5.benchmark
  (:require-macros [cljs.core.async.macros :refer [go]])
  (:require [cljs.core.async :as async :refer [<! >!]]
            [playground.node-lib.result :as result]
            [playground.node-lib.utils :refer [require-main]]
            [playground.task5.benchmark-fixtures :refer [megabytes random-buffers]]
            [playground.task5.implementations :as implementations]))


(defn write-records-to-log [{:keys [<start <add-record]}
                            path size records report done]
  (go
    (let [l (result/unwrap! (<! (<start path (megabytes size))))]
      (doseq [r records]
        (result/unwrap! (<! (<add-record l r))))
      (when report
        (.avgTime l))
      (done))))


(defn callback-log-bench [{:keys [record-size log-file-size log-size
                                  dir report-write-time]
                           :or {record-size 1000
                                log-file-size 5
                                log-size 100
                                dir "/tmp/bench"
                                report-write-time false}}]
  {:name "callback log"
   :env {:records (random-buffers record-size (megabytes log-size))}

   :f (fn [done {:keys [records]}]
        (write-records-to-log implementations/callback-log dir
                              log-file-size records report-write-time done))})


(defn callback-callback-log-bench [{:keys [record-size log-file-size log-size
                                           dir report-write-time]
                                    :or {record-size 1000
                                         log-file-size 5
                                         log-size 100
                                         dir "/tmp/bench"
                                         report-write-time false}}]

  {:name "callback callback log"
   :env {:records (random-buffers record-size (megabytes log-size))
         :FileStorage (require-main "./playground/task5/file_storage")
         :Log (require-main "./playground/task5/log")}

   :f (fn [done {:keys [records FileStorage Log]}]
        (let [log (Log. (FileStorage. dir) (megabytes log-file-size))
              i (atom 0)]

          (letfn [(callback []
                    (if (= @i (count records))
                      (do
                        (when report-write-time
                          (.avgTime log))
                        (done))
                      (.writeRecord log (nth records @i)
                                    (fn [err offset]
                                      (when err (throw err))
                                      (swap! i inc)
                                      (callback)))))]

            (.start log callback))))})
