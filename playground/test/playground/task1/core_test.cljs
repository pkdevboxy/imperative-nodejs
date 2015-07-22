(ns playground.task1.core-test
  (:require-macros [cljs.test :refer [is deftest run-tests testing]]
                   [playground.task1.macros :refer [node-require]]
                   [cljs.core.async.macros :refer [go]])

  (:require [cljs.nodejs :as node]
            [cljs.core.async :as async :refer [<! chan take!]]
            [cljs.test :as t]
            [playground.node-lib.utils :refer [require-local]]
            [playground.task1.cljs-callbacks :as cb]
            [playground.task1.cljs-promise :as pr]
            [playground.task1.cljs-async :as as]))

(node-require [fs])

(def original-readFile (.-readFile fs))


(defn- readFile-mock [name callback]
  (go
    (<! (async/timeout 30))
    (callback nil name)))


(t/use-fixtures :each
  {:before #(set! (.-readFile fs) readFile-mock)
   :after  #(set! (.-readFile fs) original-readFile)})


(defn- test-implementation [done f-to-test]
  (let [callback (fn [err data]
                   (is (nil? err))
                   (is (= 6 data))
                   (done))]

    (f-to-test (clj->js ["1" "2" "3"]) callback)))


(deftest sum-numbers-from-files-cljs-callback
  (t/async done
           (test-implementation done cb/sum-from-files)))


(deftest sum-numbers-from-files-cljs-promises
  (t/async done
           (test-implementation done pr/sum-from-files)))


(deftest sum-numbers-from-files-cljs-async
  (t/async done
           (test-implementation done as/sum-from-files)))


(deftest sum-numbers-from-files-js-callbacks
  (t/async done
           (test-implementation done (require-local "playground/task1/js_callback"))))


(deftest sum-numbers-from-files-js-promises
  (t/async done
           (test-implementation done (require-local "playground/task1/js_promise"))))
