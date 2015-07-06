(ns playground.benchmark-runner
  (:require [cljs.nodejs :as nodejs]
            [schema.core :as s]
            [playground.benchmark :refer [time-it-sync!]]))


(nodejs/enable-util-print!)
(s/set-fn-validation! true)


(defn sum [xs]
  (reduce + xs))

(defn -main []
  (time-it-sync! #(sum (range 1000000))))

(set! *main-cli-fn* -main)
