(ns playground.benchmark-runner
  (:require-macros [playground.node-lib.macros :refer [node-require]])
  (:require [cljs.nodejs :as nodejs]
            [schema.core :as s]
            [playground.node-api.process :as process]
            [playground.node-lib.utils :refer [require-local]]
            [playground.task5.sequential-write
             :refer [async-log-bench async-log-bench-hack-goog
                     callback-callback-log-bench callback-log-bench
                     callback-log-shared-chan callback-log-bench-hack-goog
                     callback-log-bench-hack-goog-shared-chan
                     callback-cljs-log-bench]]
            [playground.task5.read-write :refer [callback-read-write-bench
                                                 callback-cljs-read-write-bench]]
            [playground.task5.callback.file-storage]
            [playground.task5.callback.log]))


(nodejs/enable-util-print!)

(def params
  (->>  process/argv
        (drop 2)
        (partition 2)
        (map (fn [[arg val]] [(keyword arg) val]))
        (into {})))


(defn- now []
  (.now js/Date))


(def benchmarks
  [
   callback-cljs-read-write-bench
   callback-read-write-bench
   ])


(defn- run []
  (letfn [(loop-fn [[b & rest]]
            (when-let [{:keys [name env f]} b]
              (let [e (env params)
                    start (now)]
                (println "start" name)
                (f (conj e
                         [:done (fn []
                                  (println "done" (/ (- (now) start) 1000) "seconds\n")
                                  (loop-fn rest))])))))]
    (loop-fn benchmarks)))


(defn -main []
  (s/set-fn-validation! false)
  (let [benchmark (require-local "playground/task5/bench")
        impl #js
        {:description "Core.async: Clojurescript callback log with core.async for synchronization"
         :newLog
         (fn [dir, log-file-size]
           (let [log (atom
                      (playground.task5.callback.log/new-log
                       (playground.task5.callback.file-storage/new-file-storage dir)
                       log-file-size))]
             (reify
               Object
               (start [this callback]
                 (playground.task5.callback.log/start @log
                                                      (fn [err started-log]
                                                        (reset! log started-log)
                                                        (callback nil this))))
               (flush [this] (playground.task5.callback.log/flush! @log))
               (writeRecord [this record callback]
                 (playground.task5.callback.log/add-record @log record callback))
               (readRecord [this offset callback]
                 (playground.task5.callback.log/fetch-record @log offset callback)))))}]

    (.push (.-implementations benchmark) impl)
    (.runBenchmarks benchmark)))

(set! *main-cli-fn* -main)
