(ns playground.task2.js-callback-test
  (:require  [cljs.test :as t :refer-macros [deftest is]]
             [playground.node-lib.utils :refer [require-local]]
             [playground.test-fixtures  :refer [mock-readFile-fixture]]))

(def ^:private traverse (require-local "playground/task2/js_callbacks"))

(t/use-fixtures :each mock-readFile-fixture)


(deftest traverse-ok
  (t/async done
           (let [callback (fn [err data]
                            (is (nil? err))
                            (is (= (js->clj data) [1 2 3 4]))
                            (done))]

             (traverse 1 callback))))

(deftest traverse-no-file
  (t/async done
           (let [callback (fn [err data]
                            (is err)
                            (done))]

             (traverse 92 callback))))
