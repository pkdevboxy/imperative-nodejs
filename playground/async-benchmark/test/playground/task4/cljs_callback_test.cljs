(ns playground.task4.cljs-callback-test
  (:require [playground.task4.cljs-callback :refer [write-two-files]]
            [playground.test-fixtures :refer [mock-writeFile-fixture]]
            [cljs.test :as t :refer-macros [deftest is]]))


(t/use-fixtures :each mock-writeFile-fixture)

(deftest writes-two-files
  (t/async
   done
   (write-two-files "1" "hello" "92" "world"
                    (fn [err1 err2]
                      (is (nil? err1))
                      (is (instance? js/Error err2))
                      (done)))))
