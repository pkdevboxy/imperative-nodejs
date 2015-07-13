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


(def ^:private original-nextTick (.. js/goog -async -nextTick))
(defn- set-nextTick [f]
  (-> js/goog
      .-async
      .-nextTick
      (set! f)))

(defn- hack! []
  (set-nextTick (.-nextTick js/process)))

(defn- restore! []
  (set-nextTick original-nextTick))


(def ^:private default-config
  {:record-size 1000
   :log-file-size 5
   :log-size 100
   :dir "/tmp/bench"
   :report-write-time false})

(defn- make-env [config]
  (let [{:keys [record-size log-size]
         :as config} (merge default-config config)]

    (merge config
           {:records (random-buffers record-size (megabytes log-size))})))


(defn- write-records-to-log [{:keys [<start <add-record]}
                            path size records report done]
  (go
    (let [l (result/unwrap! (<! (<start path (megabytes size))))]
      (doseq [r records]
        (result/unwrap! (<! (<add-record l r))))
      (when report
        (.avgTime l))
      (done))))


(def callback-log-bench
  {:name "callback log"
   :env make-env

   :f (fn [done {:keys [records dir log-file-size report-write-time]}]
        (write-records-to-log implementations/callback-log dir
                              log-file-size records report-write-time done))})


(def async-log-bench
  {:name "async log"
   :env make-env

   :f (fn [done {:keys [records dir log-file-size report-write-time]}]
        (write-records-to-log implementations/async-log dir
                              log-file-size records report-write-time done))})


(def callback-log-shared-chan
  {:name "callback log shared chan"
   :env make-env

   :f (fn [done {:keys [records dir log-file-size report-write-time]}]
        (write-records-to-log implementations/callback-log-shared-chan dir
                              log-file-size records report-write-time done))})


(def callback-cljs-log-bench
  {:name "callback cljs log"
   :env make-env

   :f (fn [done {:keys [records dir log-file-size report-write-time]}]
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



(def callback-log-bench-hack-goog
  {:name "callback log use process.nextTick"
   :env make-env

   :f (fn [done {:keys [records dir log-file-size report-write-time]}]
        (hack!)
        (write-records-to-log implementations/callback-log dir
                              log-file-size records report-write-time
                              (fn []
                                (restore!)
                                (done))))})

(def async-log-bench-hack-goog
  {:name "async log use process.nextTick"
   :env make-env

   :f (fn [done {:keys [records dir log-file-size report-write-time]}]
        (hack!)
        (write-records-to-log implementations/async-log dir
                              log-file-size records report-write-time
                              (fn []
                                (restore!)
                                (done))))})


(def callback-log-bench-hack-goog-shared-chan
  {:name "callback log use process.nextTick and shared channel"
   :env make-env

   :f (fn [done {:keys [records dir log-file-size report-write-time]}]
        (hack!)
        (write-records-to-log implementations/callback-log-shared-chan dir
                              log-file-size records report-write-time
                              (fn []
                                (restore!)
                                (done))))})


(def callback-callback-log-bench

  {:name "callback callback log"
   :env (comp
         #(merge %
                 {:FileStorage (require-main "./playground/task5/file_storage")
                  :Log (require-main "./playground/task5/log")})
         make-env)

   :f (fn [done {:keys [records dir log-file-size report-write-time
                        FileStorage Log]}]

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
