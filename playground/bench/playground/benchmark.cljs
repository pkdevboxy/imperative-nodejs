(ns playground.benchmark
  (:require-macros [playground.node-lib.macros :refer [node-require do->]]
                   [cljs.core.async.macros :refer [go]])
  (:require [cljs.core.async :as async :refer [<! >!]]
            [playground.node-lib.utils :refer [<<<]]
            [playground.node-api.fs :as fs]))

(node-require benchmark)

(defn time-it-sync! [f]
  (println (.run (benchmark f))))

(defn time-it! [f & {:keys [name] :or {:name "cljs"}}]
  (println "Start async benchmark...")
  (doto (.Suite benchmark)
    (.add (str name) (clj->js {:defer true
                               :fn (fn [deferred] (f #(.resolve deferred)))}))
    (.on "cycle" (fn [event]
                   (println "...done!")
                   (println (js/String (.-target event)))))
    (.run)))


(defn time-several! [benchmarks]
  (let [suite (.Suite benchmark)]
    (doseq [[name f] benchmarks]
      (.add suite (str name) (clj->js {:defer true
                                       :fn (fn [deferred] (f #(.resolve deferred)))})))

    (println "Start async benchmarks...")
    (doto suite
      (.on "cycle" (fn [event]
                     (println "...done!")
                     (println (js/String (.-target event)))))
      (.run (clj->js {:async true})))))
