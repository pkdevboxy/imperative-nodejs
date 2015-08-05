(ns playground.task1.cljs-promise
  (:require-macros [playground.task1.macros :refer [node-require]])
  (:require [promesa.core :as p]))

(node-require [fs])


(defn read-file [file]
  (p/promise (fn [resolve reject]
               (.readFile fs file (fn [err data]
                                    (if err
                                      (reject err)
                                      (resolve data)))))))

(defn promise->callback [promise callback]
  (-> promise
      (p/then #(callback nil %))
      (p/catch #(callback %))))

(defn sum-from-files [files callback]
  (-> (p/all (map read-file files))
      (p/then #(->> % (map int) (reduce +)))
      (promise->callback callback)))
