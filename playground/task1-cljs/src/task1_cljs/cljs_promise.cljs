(ns task1-cljs.cljs-promise
  (:require-macros [task1-cljs.macros :refer [node-require]])
  (:require [promesa.core :as p]))

(node-require [fs])


(defn- read-file [file]
  (p/promise (fn [resolve reject]
               (.readFile fs file (fn [err data]
                                    (if err
                                      (reject err)
                                      (resolve data)))))))


(defn sum-from-files [files c]
  (-> (p/all (map read-file files))
      (p/then #(->> % (map int) (reduce +)))
      (p/then #(c nil %))
      (p/catch #(c %))))
