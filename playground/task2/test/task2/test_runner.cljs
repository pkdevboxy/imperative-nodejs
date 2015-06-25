(ns task2.test-runner
  (:require-macros [cljs.test :refer [run-all-tests]])
  (:require [cljs.nodejs :as nodejs]
            [cljs.test :as t]

            task2.core-test
            task2.node-lib.utils-test))

(nodejs/enable-util-print!)

(defn -main []
  (run-all-tests #"task2.*-test$"))

(set! *main-cli-fn* -main)
