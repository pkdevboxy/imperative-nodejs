(ns playground.task2.cljs-callback-test
  (:require [cljs.test :as t :refer-macros [deftest is]]
            [playground.test-fixtures :refer [mock-readFile-fixture]]
            [playground.task2.cljs-callbacks :refer [traverse]]))

(t/use-fixtures :each mock-readFile-fixture)


(deftest traverse-ok
  (t/async done
           (traverse 1 (fn [err data]
                         (is (nil? err))
                         (is (= data [1 2 3 4]))
                         (done)))))

(deftest traverse-no-file
  (t/async done
           (traverse 92 (fn [err data]
                          (is err)
                          (done)))))
