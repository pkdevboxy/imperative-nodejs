(ns playground.task5.log-failure-test
  (:require-macros [cljs.core.async.macros :refer [go]])
  (:require [cljs.test :as t :refer-macros [deftest is]]
            [cljs.core.async :as async :refer [<! >!]]
            [playground.test-fixtures :refer [<random-delay evil-monkey]]
            [playground.test-utils :refer [<retry]]
            [playground.task5.fixtures :refer [log-fixture *file-storage*]]
            [playground.node-api.path :as path]
            [playground.node-lib.result :as result]
            [playground.task5-async.log :as log]))

(t/use-fixtures :each
  (let [em (evil-monkey 'fs 0.2 'open 'write 'read)]
    {:before (fn []
               ((:before log-fixture))
               ((:before em)))

     :after (fn []
              ((:after em))
              ((:after log-fixture)))}))


(defn random-buffer []
  (let [length (rand-nth [0 1 (rand-int 10) (rand-int 50) (rand-int 100)])]
    (js/Buffer. (clj->js (repeatedly length #(inc (rand-int 255)))))))


(defn random-buffers [n]
  (repeatedly n random-buffer))


(defn ^:private <do-add-record [l record]
  (<retry (fn []
            (go
              (<! (<random-delay))
              (<! (log/<add-record l record))))))


(defn ^:private <do-fetch-record [l offset]
  (<retry (fn []
            (go
              (<! (<random-delay))
              (<! (log/<fetch-record l offset))))))


(deftest log-reads-all-that-is-written
  (t/async
   done

   (let [records (random-buffers 100)
         <results (async/chan 100)
         left (atom (count records))]
     (go
       (let [l (<! (<retry #(log/<start (log/new-log *file-storage* 100))))]
         (doseq [r records]
           (go
             (>! <results [r (<! (<do-add-record l r))])))

         (dotimes [_ (count records)]
           (go
             (let [[r off] (<! <results)
                   r-fetched (<! (<do-fetch-record l off))]

               (is (.equals r r-fetched))
               (if (zero? (swap! left dec))
                 (done))))))))))
