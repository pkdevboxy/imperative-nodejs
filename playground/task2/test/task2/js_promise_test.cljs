(ns task2.js-promise-test
  (:require-macros [task2.test-macros :refer [async-with-fixture]])
  (:require  [cljs.test :as t :refer-macros [deftest is]]
             [task2.test-utils  :refer [mock-readFile]]))

(def ^:private traverse (js/require "../coffee/js_promise"))

(deftest js-promise-traverse
  (async-with-fixture
   (mock-readFile {"1" "2"
                   "2" "3"
                   "3" "4"
                   "4" "0"})
   done
   (-> (traverse 1)
       (.then
        (fn [path]
          (is (= (js->clj path)) [1 2 3 4])
          (done))))))
