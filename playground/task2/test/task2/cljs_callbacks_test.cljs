(ns task2.cljs-callback-test
  (:require-macros [task2.test-macros :refer [async-with-fixture]])
  (:require [cljs.test :as t :refer-macros [deftest is]]
            [task2.test-utils :refer [mock-readFile]]
            [task2.cljs-callbacks :refer [traverse]]))


(deftest cljs-callback-traverse
  (async-with-fixture
   (mock-readFile {"1" "2"
                   "2" "3"
                   "3" "4"
                   "4" "0"})
   done
   (traverse 1 (fn [err data]
                 (is (nil? err))
                 (is (= data [1 2 3 4]))
                 (done)))))
