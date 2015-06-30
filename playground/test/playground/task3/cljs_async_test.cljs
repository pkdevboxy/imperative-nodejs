(ns playground.task3.cljs-async-test
  (:require-macros [cljs.core.async.macros :refer [go]]
                   [playground.node-lib.macros :refer [node-require]])
  (:require [cljs.test :as t :refer-macros [deftest is]]
            [cljs.core.async :as async :refer [<! >!]]
            [playground.test-fixtures :refer [mock-readFile-fixture mock-fs]]
            [playground.task3.cljs-async :refer [process-requests]]))

(t/use-fixtures :each mock-readFile-fixture)

(deftest process-requests-test
  (t/async
   done
   (let [<requests (async/chan 10)]
     (go (doseq [i ["1" "2" "3" "4"]]
           (<! (async/timeout (rand-int 30)))
           (>! <requests i))
         (async/close! <requests)

         (let [results (<! (async/into [] (process-requests <requests)))]
           (is (= mock-fs (into {} (for [[req [_ resp]] results]
                                     [req resp]))))
           (done))))))
