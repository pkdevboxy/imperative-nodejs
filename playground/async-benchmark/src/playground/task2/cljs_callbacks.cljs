(ns playground.task2.cljs-callbacks
  (:require-macros [playground.node-lib.macros :refer [node-require]])
  (:require [playground.node-lib.utils :as utils]
            [playground.node-lib.result :as result]))

(node-require fs)

(defn traverse [k callback]
  {:pre (number? k)}
  (letfn [(go [i path]
              (.readFile fs (str i)
                         #(on-read-file %1 %2 (conj path i))))

          (on-read-file [err data path]
            (if err
              (callback err)
              (result/match (utils/str->int data)
                error (callback error)
                j (if (pos? j)
                    (go j path)
                    (callback nil path)))))]

    (go k [])))
