(ns task1-cljs.err
  (:require-macros [cljs.core.async.macros :refer [go]])
  (:require [cljs.core.async  :as async :refer [<!]]))


(defn is-err [x]
  (instance? js/Error x))


(defn throw-err [x]
  (when (is-err x)
    (throw x))
  x)


(defn lift [f]
  (fn [& args]
    (let [errors (filter is-err args)]
      (if (empty? errors)
        (apply f args)
        (first errors)))))
