(ns task2.js-callback-test
  (:require  [cljs.test :as t :refer-macros [deftest is]]
             [task2.test-utils  :refer [mock-readFile-fixture]]))

(def ^:private traverse (js/require "../coffee/js_callbacks"))

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
