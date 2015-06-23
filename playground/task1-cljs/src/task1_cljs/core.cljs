(ns task1-cljs.core
  (:require [cljs.nodejs :as node]
            [task1-cljs.cljs-callbacks :as cb]
            [task1-cljs.cljs-promise :as pr]
            [task1-cljs.cljs-async :as as]))

(node/enable-util-print!)

(def cmd-argv
  (vec (drop 2 (.-argv node/process))))


(defn -main []
  (doseq [[impl f] [["cljs callbacks" cb/sum-from-files]
                    ["cljs promises" pr/sum-from-files]
                    ["cljs async" as/sum-from-files]
                    ["js callbacks" (js/require "../coffee/js_callback")]
                    ["js promises" (js/require "../coffee/js_promise")]]]

    (f (clj->js cmd-argv)
       (fn [err data]
         (println impl)
         (if err
           (println "error: " err)
           (println "done:  " data))))))

(set! *main-cli-fn* -main)
