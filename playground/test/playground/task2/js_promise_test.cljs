(ns playground.task2.js-promise-test
  (:require  [cljs.test :as t :refer-macros [deftest is]]
             [playground.task2.test-utils  :refer [mock-readFile-fixture]]))

(def ^:private traverse (js/require "./coffee/js_promise"))

(t/use-fixtures :each mock-readFile-fixture)

(deftest traverse-ok
  (t/async done
           (-> (traverse 1)
               (.then
                (fn [path]
                  (is (= (js->clj path)) [1 2 3 4])
                  (done))))))

(deftest traverse-no-file
  (t/async done
           (-> (traverse 92)
               (.catch
                (fn [err]
                  (is err)
                  (done))))))
