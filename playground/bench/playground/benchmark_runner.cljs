(ns playground.benchmark-runner
  (:require-macros [playground.node-lib.macros :refer [node-require]])
  (:require [cljs.nodejs :as nodejs]
            [schema.core :as s]
            [playground.node-api.process :as process]
            [playground.node-lib.utils :refer [require-main]]
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

(node-require benchmark)

(defn- time-it-sync! [f]
  (println (.run (benchmark f))))

(def params
  (->>  process/argv
        (drop 2)
        (partition 2)
        (map (fn [[arg val]] [(keyword arg) val]))
        (into {})))


(defn- report [event]
  (println "...done!")
  (println (js/String (.-target event))))

(defn time-it! [f & {:keys [name] :or {:name "cljs"}}]
  (println "Start async benchmark...")
  (doto (.Suite benchmark)
    (.add (str name) (clj->js {:defer true
                               :fn (fn [deferred] (f #(.resolve deferred)))}))
    (.on "cycle" report)
    (.run)))


(defn add-to-suite! [suite {:keys [name env f]}]
  (let [e (env params)
        options #js {:defer true
                     :fn (fn [defered]
                           (f (conj e [:done #(.resolve defered)])))}]
    (.add suite name (clj->js options))))


(defn- now []
  (.now js/Date))


(def benchmarks
  [
   callback-cljs-read-write-bench
   callback-read-write-bench
   ])


(defn- run-once []
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


(defn- run-suite []
  (let [suite (.Suite benchmark)]
    (doseq [b benchmarks]
      (add-to-suite! suite b))
    (doto suite
      (.on  "cycle" report)
      (.run))))


(defn -main []
  (s/set-fn-validation! false)
  (let [benchmark (require-main "./playground/task5/bench")
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
    (.runBenchmarks benchmark))

  #_(if (:once params)
    (run-once)
    (run-suite)))

(set! *main-cli-fn* -main)
