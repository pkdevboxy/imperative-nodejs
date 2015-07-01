(ns playground.task5-async.log-test
  (:require-macros [cljs.core.async.macros :refer [go]])
  (:require [cljs.test :as t :refer-macros [deftest is]]
            [cljs.core.async :as async :refer [<! >!]]
            [playground.test-fixtures :refer [<random-delay]]
            [playground.task5-async.fixtures :refer [log-fixture *file-storage*]]
            [playground.node-api.path :as path]
            [playground.node-lib.result :as result]
            [playground.task5-async.log :as log]))

(t/use-fixtures :each log-fixture)


(deftest test-log
  (t/async
   done
   (go
     (let [[_ l] (<! (log/<start (log/new-log *file-storage* 10)))
           messages (mapv #(js/Buffer. %) ["Hello" "123456789" "a" "c"
                                           "de" "abacaba" "World" "aba" ""])
           <respones (async/chan 10)]

       (doseq [m messages]
         (go
           (<! (<random-delay))
           (>! <respones [m (result/unwrap! (<! (log/<add-record l m)))])))


       (dotimes [_ (count messages)]
         (let [[m off] (<! <respones)
               fetched-m (result/unwrap! (<! (log/<fetch-record l off)))]
           (is (.equals m fetched-m))))

       (done)))))
