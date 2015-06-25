(ns task2.cljs-promise-test
  (:require [cljs.test :as t :refer-macros [deftest is]]
            [promesa.core :as p]
            [task2.test-utils :refer [mock-readFile-fixture]]
            [task2.cljs-promise :refer [traverse]]))


(t/use-fixtures :each mock-readFile-fixture)

(deftest cljs-promise-traverse
  (t/async done
           (-> (traverse 1)
               (p/then (fn [path]
                         (is (= path [1 2 3 4]))
                         (done))))))
