(ns playground.benchmark
  (:require-macros [playground.node-lib.macros :refer [node-require do->]]
                   [cljs.core.async.macros :refer [go]])
  (:require [cljs.core.async :as async :refer [<! >!]]
            [playground.node-lib.utils :refer [<<<]]
            [playground.node-api.fs :as fs]))

(node-require benchmark)

(defn time-it-sync! [f]
  (println (.run (benchmark f))))

(defn time-it! [f]
  (println "Start async benchmark...")
  (doto (.Suite benchmark)
    (.add "test" (clj->js {:defer true
                           :fn (fn [deferred] (f #(.resolve deferred)))}))
    (.on "cycle" (fn [event]
                   (println "...done!")
                   (println (js/String (.-target event)))))
    (.run {:async true})))
