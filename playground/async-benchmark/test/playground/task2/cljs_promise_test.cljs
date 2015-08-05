(ns playground.task2.cljs-promise-test
  (:require [cljs.test :as t :refer-macros [deftest is]]
            [promesa.core :as p]
            [playground.test-fixtures :refer [mock-readFile-fixture]]
            [playground.task2.cljs-promise :refer [traverse]]))


(t/use-fixtures :each mock-readFile-fixture)

(deftest traverse-ok
  (t/async done
           (-> (traverse 1)
               (p/then (fn [path]
                         (is (= path [1 2 3 4]))
                         (done))))))


(deftest traverse-no-file
  (t/async done
           (-> (traverse 92)
               (p/catch (fn [err]
                          (is err)
                          (done))))))
