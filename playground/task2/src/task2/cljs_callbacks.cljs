(ns task2.cljs-callbacks
  (:require-macros [task2.node-lib.macros :refer [node-require]])
  (:require [task2.node-lib.utils :as utils]))

(node-require fs)

(defn traverse [k callback]
  {:pre (number? k)}
  (letfn [(go [i path]
              (.readFile fs (str i)
                         #(on-read-file %1 %2 (conj path i))))

          (on-read-file [err data path]
            (if err
              (callback err)
              (let [j (utils/str->int data)]
                (if (< 0 j)
                  (go j path)
                  (callback nil path)))))]

    (go k [])))
