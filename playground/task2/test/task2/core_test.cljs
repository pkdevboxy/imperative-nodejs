(ns task2.core-test
  (:require-macros [cljs.core.async.macros :refer [go]]
                   [cljs.test :refer [deftest is]]
                   [task2.node-lib.macros :refer [node-require <?]])

  (:require [cljs.core.async :refer [<! timeout]]
            [cljs.test :as t]
            [promesa.core :as p]
            [task2.cljs-async :as as]
            [task2.cljs-promise :as pr]))

(node-require fs)


(def original-readFile (.-readFile fs))


(def hops-map
  {"1" "2"
   "2" "3"
   "3" "4"
   "4" "0"})


(defn- mock-readFile [name callback]
  (go
    (<! (timeout (rand-int 30)))
    (if-let [next (hops-map name)]
      (callback nil next)
      (callback (js/Error "No such file")))))


(t/use-fixtures :each
  {:before #(set! (.-readFile fs) mock-readFile)
   :after  #(set! (.-readFile fs) original-readFile)})


(deftest js-callback-traverse
  (t/async done
           (let [traverse (js/require "../coffee/js_callbacks")
                 callback (fn [err data]
                            (is (nil? err))
                            (is (= (js->clj data) [1 2 3 4]))
                            (done))]

             (traverse 1 callback))))


(deftest js-promise-traverse
  (t/async done
           (let [traverse (js/require "../coffee/js_promise")]
             (-> (traverse 1)
                 (.then
                  (fn [path]
                    (is (= (js->clj path)) [1 2 3 4])
                    (done)))))))


(deftest cljs-async-traverse
  (t/async done
           (go
             (let [path (<? (as/traverse 1))]
               (is (= path [1 2 3 4]))
               (done)))))


(deftest cljs-promise-traverse
  (t/async done
           (-> (pr/traverse 1)
               (p/then (fn [path]
                         (is (= path [1 2 3 4]))
                         (done))))))
