(ns task2.js-promise-test
  (:require  [cljs.test :as t :refer-macros [deftest is]]
             [task2.test-utils  :refer [mock-readFile-fixture]]))

(def ^:private traverse (js/require "../coffee/js_promise"))

(t/use-fixtures :each mock-readFile-fixture)

(deftest js-promise-traverse
  (t/async done
           (-> (traverse 1)
               (.then
                (fn [path]
                  (is (= (js->clj path)) [1 2 3 4])
                  (done))))))
