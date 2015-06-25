(ns task2.cljs-callback-test
  (:require [cljs.test :as t :refer-macros [deftest is]]
            [task2.test-utils :refer [mock-readFile]]
            [task2.cljs-callbacks :refer [traverse]]))

(t/use-fixtures :each (mock-readFile))


(deftest cljs-callback-traverse
  (t/async done
           (traverse 1 (fn [err data]
                         (is (nil? err))
                         (is (= data [1 2 3 4]))
                         (done)))))
