(ns playground.task5.benchmark
  (:require-macros [cljs.core.async.macros :refer [go]])
  (:require [cljs.core.async :as async :refer [<! >!]]
            [playground.node-lib.result :as result]
            [playground.node-lib.utils :refer [require-main]]
            [playground.task5.benchmark-fixtures :refer [megabytes random-buffers]]
            [playground.task5.implementations :as implementations]
            [playground.task5.callback.file-storage]
            [playground.task5.callback.log]

            goog.async.nextTick))


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


(defn async-log-bench [{:keys [record-size log-file-size log-size
                               dir report-write-time]
                        :or {record-size 1000
                             log-file-size 5
                             log-size 100
                             dir "/tmp/bench"
                             report-write-time false}}]
  {:name "async log"
   :env {:records (random-buffers record-size (megabytes log-size))}

   :f (fn [done {:keys [records]}]
        (write-records-to-log implementations/async-log dir
                              log-file-size records report-write-time done))})


(defn callback-log-shared-chan [{:keys [record-size log-file-size log-size
                                        dir report-write-time]
                                 :or {record-size 1000
                                      log-file-size 5
                                      log-size 100
                                      dir "/tmp/bench"
                                      report-write-time false}}]
  {:name "callback log shared chan"
   :env {:records (random-buffers record-size (megabytes log-size))}

   :f (fn [done {:keys [records]}]
        (write-records-to-log implementations/callback-log-shared-chan dir
                              log-file-size records report-write-time done))})


(defn callback-cljs-log-bench [{:keys [record-size log-file-size log-size
                                       dir report-write-time]
                                :or {record-size 1000
                                     log-file-size 5
                                     log-size 100
                                     dir "/tmp/bench"
                                     report-write-time false}}]
  {:name "callback cljs log"
   :env {:records (random-buffers record-size (megabytes log-size))}

   :f (fn [done {:keys [records]}]
        (let [log (playground.task5.callback.log/new-log
                   (playground.task5.callback.file-storage/new-file-storage dir)
                   (megabytes log-file-size))
              i (atom 0)]

          (letfn [(callback [error log]
                    (if (= @i (count records))
                      (do
                        (done))
                      (playground.task5.callback.log/add-record
                       log
                       (nth records @i)
                       (fn [err offset]
                         (when err (throw err))
                         (swap! i inc)
                         (callback nil log)))))]

            (playground.task5.callback.log/start log callback))))})



(defn callback-log-bench-hack-goog [{:keys [record-size log-file-size log-size
                                            dir report-write-time]
                                     :or {record-size 1000
                                          log-file-size 5
                                          log-size 100
                                          dir "/tmp/bench"
                                          report-write-time false}}]
  (let [original (.. js/goog -async -nextTick)
        set-nextTick (fn [f]
                       (-> js/goog
                           .-async
                           .-nextTick
                           (set! f)))
        hack! #(set-nextTick (.-nextTick js/process))
        restore! #(set-nextTick original)]

    {:name "callback log use process.nextTick"
     :env {:records (random-buffers record-size (megabytes log-size))}

     :f (fn [done {:keys [records]}]
          (hack!)
          (write-records-to-log implementations/callback-log dir
                                log-file-size records report-write-time
                                (fn []
                                  (restore!)
                                  (done))))}))

(defn async-log-bench-hack-goog [{:keys [record-size log-file-size log-size
                                            dir report-write-time]
                                     :or {record-size 1000
                                          log-file-size 5
                                          log-size 100
                                          dir "/tmp/bench"
                                          report-write-time false}}]
  (let [original (.. js/goog -async -nextTick)
        set-nextTick (fn [f]
                       (-> js/goog
                           .-async
                           .-nextTick
                           (set! f)))
        hack! #(set-nextTick (.-nextTick js/process))
        restore! #(set-nextTick original)]

    {:name "async log use process.nextTick"
     :env {:records (random-buffers record-size (megabytes log-size))}

     :f (fn [done {:keys [records]}]
          (hack!)
          (write-records-to-log implementations/async-log dir
                                log-file-size records report-write-time
                                (fn []
                                  (restore!)
                                  (done))))}))


(defn callback-log-bench-hack-goog-shared-chan [{:keys [record-size log-file-size log-size
                                                        dir report-write-time]
                                                 :or {record-size 1000
                                                      log-file-size 5
                                                      log-size 100
                                                      dir "/tmp/bench"
                                                      report-write-time false}}]
  (let [original (.. js/goog -async -nextTick)
        set-nextTick (fn [f]
                       (-> js/goog
                           .-async
                           .-nextTick
                           (set! f)))
        hack! #(set-nextTick (.-nextTick js/process))
        restore! #(set-nextTick original)]

    {:name "callback log use process.nextTick and shared channel"
     :env {:records (random-buffers record-size (megabytes log-size))}

     :f (fn [done {:keys [records]}]
          (hack!)
          (write-records-to-log implementations/callback-log-shared-chan dir
                                log-file-size records report-write-time
                                (fn []
                                  (restore!)
                                  (done))))}))


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
