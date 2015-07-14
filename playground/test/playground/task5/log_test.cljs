(ns playground.task5.log-test
  (:require-macros [cljs.core.async.macros :refer [go]])
  (:require [cljs.test :as t :refer-macros [deftest is]]
            [cljs.core.async :as async :refer [<! >!]]
            [playground.test-fixtures :refer [<random-delay]]
            [playground.task5.fixtures :refer [dir-fixture *tmp-dir*]]
            [playground.node-lib.result :as result]
            [playground.task5.implementations :as implementations]))

(t/use-fixtures :each dir-fixture)


(defn test-log [{:keys [<start <add-record <fetch-record]} done]
  (go
    (let [l (result/unwrap! (<! (<start *tmp-dir* 10)))
          messages (mapv #(js/Buffer. %) ["Hello" "123456789" "a" "c"
                                          "de" "abacaba" "World" "aba" ""])
          <respones (async/chan 10)]

      (doseq [m messages]
        (go
          (<! (<random-delay))
          (>! <respones [m (result/unwrap! (<! (<add-record l m)))])))


      (dotimes [_ (count messages)]
        (let [[m off] (<! <respones)
              fetched-m (result/unwrap! (<! (<fetch-record l off)))]
          (is (.equals m fetched-m))))

      (done))))


(deftest test-async-log
  (t/async
   done
   (test-log implementations/async-log done)))


(deftest test-callback-log
  (t/async
   done
   (test-log implementations/callback-log done)))


(deftest test-callback-cljs-log
  (t/async
   done
   (test-log implementations/callback-cljs-log done)))

(deftest test-iced-callback-log
  (t/async
   done
   (test-log implementations/iced-log done)))
