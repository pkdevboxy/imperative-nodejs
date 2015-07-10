(ns playground.benchmark-runner
  (:require-macros [playground.node-lib.macros :refer [node-require]])
  (:require [cljs.nodejs :as nodejs]
            [schema.core :as s]
            [playground.node-api.process :as process]
            [playground.task5.benchmark :refer [async-log-bench
                                                async-log-bench-hack-goog
                                                callback-callback-log-bench
                                                callback-log-bench
                                                callback-log-shared-chan
                                                callback-log-bench-hack-goog
                                                callback-log-bench-hack-goog-shared-chan
                                                callback-cljs-log-bench]]))


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


(defn add-to-suite! [suite bench]
  (let [{:keys [name env f]} (bench params)
        params {:defer true
                :fn (fn [defered]
                      (f #(.resolve defered) env))}]
    (.add suite name (clj->js params))))


(defn- now []
  (.now js/Date))


(def benchmarks
  [
   ;; async-log-bench
   ;; async-log-bench-hack-goog
   callback-callback-log-bench
   callback-cljs-log-bench
   ;; callback-log-bench
   ;; callback-log-shared-chan
   ;; callback-log-bench-hack-goog
   ;; callback-log-bench-hack-goog-shared-chan
   ])


(defn- run-once []
  (letfn [(loop-fn [[b & rest]]
            (when b
              (let [{:keys [name env f]} (b params)
                    start (now)]
                (println "start" name)
                (f (fn []
                     (println "done" (/ (- (now) start) 1000) "seconds\n")
                     (loop-fn rest))
                   env))))]
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
  (if (:once params)
    (run-once)
    (run-suite)))

(set! *main-cli-fn* -main)
