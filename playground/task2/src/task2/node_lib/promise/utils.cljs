(ns task2.node-lib.promise.utils
  (:require [promesa.core :as p]))


(defn callback->promise
  "Turns a CPS-stype function f into a promise returning function."
  [f]
  {:pre (fn? f)}
  (fn [& args]
    (p/promise
     (fn [resolve reject]
       (let [callback (fn [err data]
                        (if err
                          (reject err)
                          (resolve data)))
             args-with-cb (conj (vec args) callback)]

         (apply f args-with-cb))))))
