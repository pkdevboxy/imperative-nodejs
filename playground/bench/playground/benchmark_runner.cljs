(ns playground.benchmark-runner
  (:require [cljs.nodejs :as nodejs]
            [schema.core :as s]
            [playground.benchmark :refer [time-it-sync!]]
            [playground.task5.benchmark-fixtures :refer [random-buffers megabytes]]))


(nodejs/enable-util-print!)
(s/set-fn-validation! true)




(defn -main []
  (let [f (fn []
            (random-buffers 1000 (megabytes 100)))]
    (time-it-sync! f)))

(set! *main-cli-fn* -main)
