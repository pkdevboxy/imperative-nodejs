(ns playground.task2.js-promise-test
  (:require  [cljs.test :as t :refer-macros [deftest is]]
             [playground.test-fixtures  :refer [mock-readFile-fixture]]
             [playground.node-lib.utils :refer [require-main]]))

(def ^:private traverse (require-main "./playground/task2/js_promise"))

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
