(ns task1-cljs.test
  (:require-macros [cljs.test :refer (is deftest run-tests)])
  (:require [cljs.nodejs :as node]
            [cljs.test :as t]))


(node/enable-util-print!)


(deftest arithmetics
  (is (= (* 2 2) 5)))


(defn -main []
  (run-tests 'task1-cljs.test))

(set! *main-cli-fn* -main)
