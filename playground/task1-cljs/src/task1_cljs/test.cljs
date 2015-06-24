(ns task1-cljs.test
  (:require-macros [cljs.test :refer [is deftest run-tests]]
                   [task1-cljs.macros :refer [node-require]]
                   [cljs.core.async.macros :refer [go]])

  (:require [cljs.nodejs :as node]
            [cljs.core.async :as async :refer [<! chan take!]]
            [cljs.test :as t]
            [task1-cljs.cljs-callbacks :as cb]))

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


(deftest cljs-callbacks
  (t/async done
           (let [callback (fn [err data]
                            (is (nil? err))
                            (is (= 6 data))
                            (done))]

             (cb/sum-from-files ["1" "2" "3"] callback))))


(defn -main []
  (run-tests 'task1-cljs.test))

(set! *main-cli-fn* -main)
