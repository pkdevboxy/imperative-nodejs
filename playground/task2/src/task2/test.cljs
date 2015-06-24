(ns task2.test
  (:require-macros [cljs.test :refer [is deftest run-tests testing]]
                   [cljs.core.async.macros :refer [go]]
                   [task2.node-lib.macros :refer [node-require <?]])

  (:require [cljs.nodejs :as nodejs]
            [cljs.test :as t]
            [cljs.core.async :refer [<! timeout]]
            [task2.cljs-async :refer [traverse]]))

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



(deftest async-traverse
  (t/async done
           (go
             (let [path  (<? (traverse "1"))]
               (is (= path ["1" "2" "3" "4"]))
               (done)))))


(defn -main []
  (run-tests 'task2.test))

(set! *main-cli-fn* -main)
