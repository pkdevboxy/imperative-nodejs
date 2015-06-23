(ns hello-cljs.core
  (:require [cljs.nodejs :as node]))

(node/enable-util-print!)

(def cmd-argv
  (vec (drop 2 (.-argv node/process))))

(def js-callback (js/require "../coffee/js_callback"))

(defn -main []
  (doseq [impl ["js_callback" "js_promise"]
          :let [mod (str "../coffee/" impl)
                f (js/require mod)]]
    (f (clj->js cmd-argv)
       (fn [err data]
         (println impl)
         (if err
           (println "error: " err)
           (println "done:  " data))))))

(set! *main-cli-fn* -main)
