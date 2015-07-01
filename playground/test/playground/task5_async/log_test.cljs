(ns playground.task5-async.log-test
  (:require-macros [cljs.core.async.macros :refer [go]])
  (:require [cljs.test :as t :refer-macros [deftest is]]
            [cljs.core.async :as async :refer [<! >!]]
            [playground.test-fixtures :refer [random-delay]]
            [playground.node-api.path :as path]
            [playground.task5-async.fixtures :refer [log-fixture *log-dir*]]
            [playground.task5-async.log :as log]))

(t/use-fixtures :each log-fixture)

(deftest test-log
  (t/async
   done
   (go
     (let [[_ l] (<! (log/<start (log/new-log *log-dir* 10)))
           messages (mapv #(js/Buffer. %) ["Hello"  "World"  "aba" "a"
                                           "" "abacaba" "123456789"])

           <respones (async/chan 10)]
       (doseq [m messages]
         (go
           (<! (async/timeout (random-delay)))
           (>! <respones [m (second (<! (log/<add-record l m)))])))


       (dotimes [_ (count messages)]
         (let [[m off] (<! <respones)
               [_ fetched-m] (<! (log/<fetch-record l off))]
           (is (.equals m fetched-m))))

       (done)))))
