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

(defn- with-fixtures [before f after]
  (fn [config]
    (before)
    (f (update-in config [:done]
                  (fn [done]
                    (fn []
                      (after)
                      (done)))))))


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


(def cljs-callback-impl
  {:start (fn [dir size callback]
            (let [log (playground.task5.callback.log/new-log
                       (playground.task5.callback.file-storage/new-file-storage dir)
                       size)]
              (playground.task5.callback.log/start log callback)))
   :add-record playground.task5.callback.log/add-record})


(def coffee-callback-impl
  {:start (fn [dir size callbck]
            (let [FileStorage (require-main "./playground/task5/file_storage")
                  Log (require-main "./playground/task5/log")
                  log (Log. (FileStorage. dir) size)]
              (.start log callbck)))
   :add-record (fn [log record callback]
                 (.writeRecord log record callback))})


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
