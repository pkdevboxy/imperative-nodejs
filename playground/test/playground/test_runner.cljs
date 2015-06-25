(ns playground.test-runner
  (:require-macros [cljs.test :refer [run-all-tests]])
  (:require [cljs.nodejs :as nodejs]
            [cljs.test :as t]
            [playground.node-lib.process :as process]

            playground.task1.core-test
            playground.task2.cljs-async-test
            playground.task2.cljs-promise-test
            playground.task2.cljs-callback-test
            playground.task2.js-callback-test
            playground.task2.js-promise-test
            playground.node-lib.utils-test))

(nodejs/enable-util-print!)

(defn- test-task1 []
  (run-all-tests #"playground.task1.*-test"))

(defn- test-task2 []
  (run-all-tests #"playground.task2.*-test"))

(defn- test-all []
  (run-all-tests #"playground.*-test"))

(defn -main []
  (case (process/argv)
    ["task1"] (test-task1)
    ["task2"] (test-task2)
    (test-all)))

(set! *main-cli-fn* -main)
