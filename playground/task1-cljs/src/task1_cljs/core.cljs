(ns task1-cljs.core
  (:require [cljs.nodejs :as node]
            [task1-cljs.cljs-callbacks :as cb]))

(node/enable-util-print!)

(def cmd-argv
  (vec (drop 2 (.-argv node/process))))


(defn -main []
  (let [f cb/sum-from-files
        impl "cljs callbacks"]
    (f cmd-argv
       (fn [err data]
         (println impl)
         (if err
           (println "error: " err)
           (println "done:  " data))))))

(set! *main-cli-fn* -main)
