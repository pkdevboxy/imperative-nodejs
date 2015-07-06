(ns playground.task5.log-failure-test
  (:require-macros [cljs.core.async.macros :refer [go]])
  (:require [cljs.test :as t :refer-macros [deftest is]]
            [cljs.core.async :as async :refer [<! >!]]
            [playground.test-fixtures :refer [evil-monkey]]
            [playground.test-utils :refer [<retry]]
            [playground.task5.fixtures :refer [dir-fixture *tmp-dir*]]
            [playground.node-lib.result :as result]
            [playground.task5.implementations :as implementations]))

(t/use-fixtures :each
  (let [em (evil-monkey 'fs 0.2 'open 'write 'read)]
    {:before (fn []
               ((:before dir-fixture))
               ((:before em)))

     :after (fn []
              ((:after em))
              ((:after dir-fixture)))}))


(defn random-buffer []
  (let [length (rand-nth [0 1 (rand-int 10) (rand-int 50) (rand-int 100)])]
    (js/Buffer. (clj->js (repeatedly length #(inc (rand-int 255)))))))


(defn random-buffers [n]
  (repeatedly n random-buffer))


(defn ^:private test-log [{:keys [<start <add-record <fetch-record]} done]
  (let [records (random-buffers 100)
         <results (async/chan 100)
         left (atom (count records))]
     (go
       (let [l (<! (<retry #(<start *tmp-dir* 100)))]
         (doseq [r records]
           (go
             (>! <results [r (<! (<retry #(<add-record l r)))])))

         (dotimes [_ (count records)]
           (go
             (let [[r off] (<! <results)
                   r-fetched (<! (<retry #(<fetch-record l off)))]

               (is (.equals r r-fetched))
               (if (zero? (swap! left dec))
                 (done)))))))))


(deftest async-log-reads-all-that-is-written
  (t/async
   done
   (test-log implementations/async-log done)))
