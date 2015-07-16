(ns playground.task5.sequential-write
  (:require-macros [cljs.core.async.macros :refer [go]])
  (:require [cljs.core.async :as async :refer [<! >!]]
            [playground.node-lib.result :as result]
            [playground.task5.implementations :as implementations]
            [playground.task5.benchmark-fixtures
             :refer [hack! restore! with-fixtures megabytes random-buffers
                     cljs-callback-impl coffee-callback-impl default-config]]))


(defn- make-env [config]
  (let [{:keys [record-size log-size]
         :as config} (merge default-config config)]
    (merge config
           {:records (random-buffers (int record-size) (megabytes (int log-size)))})))


(defn- <write-records-to-log
  [{{:keys [<start <add-record]} :impl
    :keys [done dir log-file-size report-write-time records]}]

  (go
    (let [l (result/unwrap! (<! (<start dir (megabytes log-file-size))))]
      (doseq [r records]
        (result/unwrap! (<! (<add-record l r))))
      (when report-write-time
        (.avgTime l))
      (done))))


(defn- write-records-to-log
  [{{:keys [start add-record]} :impl
    :keys [done records dir log-file-size report-write-time]}]

  (let [i (atom 0)]

    (letfn [(callback [error log]
              (if (= @i (count records))
                (done)
                (add-record
                 log
                 (nth records @i)
                 (fn [err offset]
                   (when err (throw err))
                   (swap! i inc)
                   (callback nil log)))))]

      (start dir (megabytes log-file-size) callback))))


(def callback-log-bench
  {:name "callback log"
   :env (comp
         #(merge % {:impl implementations/callback-log})
         make-env)

   :f <write-records-to-log})


(def async-log-bench
  {:name "async log"
   :env (comp
         #(merge % {:impl implementations/async-log})
         make-env)

   :f <write-records-to-log})


(def callback-log-shared-chan
  {:name "callback log shared chan"
   :env (comp
         #(merge % {:impl implementations/callback-log-shared-chan})
         make-env)

   :f <write-records-to-log})


(def callback-cljs-log-bench
  {:name "callback cljs log"
   :env (comp
         #(merge % {:impl cljs-callback-impl})
         make-env)

   :f write-records-to-log})



(def callback-log-bench-hack-goog
  {:name "callback log use process.nextTick"
   :env (comp
         #(merge % {:impl implementations/callback-log})
         make-env)

   :f (with-fixtures
        hack!
        <write-records-to-log
        restore!)})

(def async-log-bench-hack-goog
  {:name "async log use process.nextTick"
   :env (comp
         #(merge % {:impl implementations/async-log})
         make-env)

   :f (with-fixtures
        hack!
        <write-records-to-log
        restore!)})


(def callback-log-bench-hack-goog-shared-chan
  {:name "callback log use process.nextTick and shared channel"
   :env (comp
         #(merge % {:impl implementations/callback-log-shared-chan})
         make-env)

   :f (with-fixtures
        hack!
        <write-records-to-log
        restore!)})


(def callback-callback-log-bench

  {:name "callback callback log"
   :env (comp
         #(merge % {:impl coffee-callback-impl})
         make-env)

   :f write-records-to-log})
