(ns playground.task4.cljs-async-test
  (:require-macros [cljs.core.async.macros :refer [go]])
  (:require [cljs.test :as t :refer-macros [deftest is]]
            [cljs.core.async :as async :refer [<!]]
            [playground.task4.cljs-async :refer [write-two-files]]
            [playground.test-fixtures :refer [mock-writeFile-fixture]]))


(t/use-fixtures :each mock-writeFile-fixture)

(deftest writes-two-files
  (t/async
   done
   (let [<result (write-two-files "1" "hello" "92" "world")]
     (go
       (let [r1 (<! <result)
             r2 (<! <result)]
         (is (nil? (first r1)))
         (is (instance? js/Error (first r2)))
         (done))))))
