(ns playground.task1.core
  (:require [cljs.nodejs :as node]
            [playground.task1.cljs-callbacks :as cb]
            [playground.task1.cljs-promise :as pr]
            [playground.task1.cljs-async :as as]
            [playground.node-lib.utils :refer [require-local]]))

(node/enable-util-print!)

(def cmd-argv
  (vec (drop 2 (.-argv node/process))))


(defn -main []
  (doseq [[impl f] [["cljs callbacks" cb/sum-from-files]
                    ["cljs promises" pr/sum-from-files]
                    ["cljs async" as/sum-from-files]
                    ["js callbacks" (require-local "playground/task1/js_callback")]
                    ["js promises" (require-local "playground/task1/js_promise")]]]

    (f (clj->js cmd-argv)
       (fn [err data]
         (println impl)
         (if err
           (println "error: " err)
           (println "done:  " data))))))
