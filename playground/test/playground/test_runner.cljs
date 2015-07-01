(ns playground.test-runner
  (:require-macros [cljs.test :refer [run-all-tests]])
  (:require [cljs.nodejs :as nodejs]
            [cljs.test :as t]
            [playground.node-api.process :as process]

            playground.task1.core-test

            playground.task2.cljs-async-test
            playground.task2.cljs-promise-test
            playground.task2.cljs-callback-test
            playground.task2.js-callback-test
            playground.task2.js-promise-test

            playground.task3.cljs-async-test
            playground.task3.js-callback-test
            playground.task3.cljs-promise-test

            playground.task4.cljs-callback-test
            playground.task4.cljs-async-test
            playground.task4.cljs-promise-test

            playground.task5-async.buffer-test
            playground.task5-async.log-impl-test
            playground.task5-async.log-test

            playground.node-lib.utils-test
            playground.async-utils-test))

(nodejs/enable-util-print!)

(defn- test-task1 []
  (run-all-tests #"playground.task1.*-test"))

(defn- test-task2 []
  (run-all-tests #"playground.task2.*-test"))

(defn- test-task3 []
  (run-all-tests #"playground.task3.*-test"))

(defn- test-task4 []
  (run-all-tests #"playground.task4.*-test"))

(defn- test-task5 []
  (run-all-tests #"playground.task5.*-test"))

(defn- test-all []
  (run-all-tests #"playground.*-test"))

(defn -main []
  (case process/argv
    ["task1"] (test-task1)
    ["task2"] (test-task2)
    ["task3"] (test-task3)
    ["task4"] (test-task4)
    ["task5"] (test-task5)
    (test-all)))

(set! *main-cli-fn* -main)
