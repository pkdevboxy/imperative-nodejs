(ns task1-cljs.test
  (:require-macros [cljs.test :refer [is deftest run-tests testing]]
                   [task1-cljs.macros :refer [node-require]]
                   [cljs.core.async.macros :refer [go]])

  (:require [cljs.nodejs :as node]
            [cljs.core.async :as async :refer [<! chan take!]]
            [cljs.test :as t]
            [task1-cljs.cljs-callbacks :as cb]
            [task1-cljs.cljs-promise :as pr]
            [task1-cljs.cljs-async :as as]))

(node-require [fs])

(def original-readFile (.-readFile fs))


(node/enable-util-print!)


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
           (test-implementation done (js/require "../coffee/js_callback"))))


(deftest sum-numbers-from-files-js-promises
  (t/async done
           (test-implementation done (js/require "../coffee/js_promise"))))


(defn -main []
  (run-tests 'task1-cljs.test))

(set! *main-cli-fn* -main)
