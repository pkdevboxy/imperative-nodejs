(ns task2.cljs-promise
  (:require [promesa.core :as p]
            [task2.node-lib.promise.fs :as fs]
            [task2.node-lib.utils :as utils]))


(defn traverse [k]
  {:pre (number? k)}
  (letfn [(step [i path]
            (-> (fs/read-file (str i))
                (p/then utils/str->int)
                (p/then (fn [j]
                          (if (< 0 j)
                            (step j (conj path i))
                            (conj path i))))))]
    (step k [])))
