(ns task2.test
  (:require-macros [cljs.test :refer [is deftest run-tests testing]]
                   [cljs.core.async.macros :refer [go]]
                   [task2.node-lib.macros :refer [node-require <?]])

  (:require [cljs.nodejs :as nodejs]
            [cljs.test :as t]
            [cljs.core.async :refer [<! timeout]]
            [promesa.core :as p]
            [task2.cljs-async :as as]
            [task2.cljs-promise :as pr]
            [task2.node-lib.utils :as utils]))

(node-require fs)


(nodejs/enable-util-print!)

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


(deftest str->int
  (is (= 92 (utils/str->int "92")))
  (is (thrown? js/Error (utils/str->int "spam"))))


(defn -main []
  (run-tests 'task2.test))

(set! *main-cli-fn* -main)
