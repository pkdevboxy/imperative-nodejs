(ns playground.benchmark-runner
  (:require [cljs.nodejs :as nodejs]
            [schema.core :as s]))


(nodejs/enable-util-print!)
(s/set-fn-validation! true)


(defn -main []
  (println "Yay benchmarks"))

(set! *main-cli-fn* -main)
