(ns task2.cljs-promise-test
  (:require-macros [task2.test-macros :refer [async-with-fixture]])
  (:require [cljs.test :as t :refer-macros [deftest is]]
            [promesa.core :as p]
            [task2.test-utils :refer [mock-readFile]]
            [task2.cljs-promise :refer [traverse]]))


(deftest cljs-promise-traverse
  (async-with-fixture
   (mock-readFile {"1" "2"
                   "2" "3"
                   "3" "4"
                   "4" "0"})
   done
   (-> (traverse 1)
       (p/then (fn [path]
                 (is (= path [1 2 3 4]))
                 (done))))))
