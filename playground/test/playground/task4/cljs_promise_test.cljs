(ns playground.task4.cljs-promise-test
  (:require [cljs.test :as t :refer-macros [deftest is]]
            [promesa.core :as p]
            [playground.test-fixtures :refer [mock-writeFile-fixture]]
            [playground.task4.cljs-promise :refer [write-two-files]]))


(t/use-fixtures :each mock-writeFile-fixture)

(deftest writes-two-files
  (t/async
   done
   (p/then (write-two-files "1" "hello" "92" "world")
           (fn [[err1 err2]]
             (is (nil? err1))
             (is (instance? js/Error err2))
             (done)))))
