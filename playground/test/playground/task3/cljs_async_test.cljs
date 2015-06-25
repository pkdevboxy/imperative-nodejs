(ns playground.task3.cljs-async-test
  (:require-macros [cljs.core.async.macros :refer [go]]
                   [playground.node-lib.macros :refer [node-require]])
  (:require [cljs.test :as t :refer-macros [deftest is]]
            [cljs.core.async :as async :refer [<! >!]]
            [playground.task3.cljs-async :refer [process-requests]]))

(node-require fs)

(def ^:private files
  {"1" "a"
   "2" "b"
   "3" "c"
   "4" "d"})


(defn- mock-readFile [name callback]
  (go
    (<! (async/timeout (rand-int 100)))
    (if-let [next (files name)]
      (callback nil next)
      (callback (js/Error "No such file")))))

(def ^:private original-readFile (.-readFile fs))


(def mock-readFile-fixture
  "A mocking fixture for `fs.readFile`."
  {:before #(set! (.-readFile fs) mock-readFile)
   :after  #(set! (.-readFile fs) original-readFile)})

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
           (is (= files (into {} results)))
           (done))))))
