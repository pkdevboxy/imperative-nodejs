(ns playground.task2.cljs-async-test
  (:require-macros [playground.node-lib.macros :refer [<?]]
                   [cljs.core.async.macros :refer [go]])
  (:require [cljs.test :as t :refer-macros [deftest is]]
            [playground.test-fixtures :refer [mock-readFile-fixture]]
            [playground.task2.cljs-async :refer [traverse]]))


(t/use-fixtures :each mock-readFile-fixture)


(deftest traverse-ok
  (t/async done
           (go
             (let [path (<? (traverse 1))]
               (is (= path [1 2 3 4]))
               (done)))))


(deftest traverse-no-file
  (t/async done
           (go
             (is (thrown? js/Error (<? (traverse 92))))
             (done))))
