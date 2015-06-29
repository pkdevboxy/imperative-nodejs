(ns playground.task3.cljs-promise-test
  (:require-macros [cljs.core.async.macros :refer [go]])
  (:require [cljs.core.async :as async :refer [<!]]
            [cljs.test :as t :refer-macros [deftest is]]
            [promesa.core :as p]
            [playground.test-fixtures :refer [mock-fs  mock-readFile-fixture]]
            [playground.task3.cljs-promise :refer [reader request! close!]]))


(t/use-fixtures :each mock-readFile-fixture)


(deftest reader_test
  (t/async
   done
   (let [result (volatile! {})
         r (reader)]
     (go (doseq [i ["1" "2" "3" "4"]]
           (<! (async/timeout (rand-int 30)))
           (p/then (request! r i) #(vswap! result conj [i %])))

         (p/then (close! r)
                 (fn []
                   (is (= mock-fs @result))
                   (done)))))))
