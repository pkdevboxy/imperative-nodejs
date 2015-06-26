(ns playground.async-utils
  (:require-macros [cljs.core.async.macros :refer [go-loop alt!]])
  (:require [cljs.core.async :as async :refer [<! >!]]))

(defn flatmap [f <in]
  (let [<out (async/chan)]
    (go-loop [pending #{}]
      (let [[val <ch] (alts! (concat pending [<in]))]
        (cond
          (and (= <ch <in) (some? val))
          (recur (conj pending (f val)))

          (and (= <ch <in) (nil? val))
          (async/pipe
           (async/merge pending)
           <out)

          :default
          (if (nil? val)
            (recur (disj pending <ch))
            (do
              (>! <out val)
              (recur pending))))))
    <out))
