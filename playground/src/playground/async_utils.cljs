(ns playground.async-utils
  (:refer-clojure :exclude [concat])
  (:require-macros [cljs.core.async.macros :refer [go-loop alt!]])
  (:require [cljs.core.async :as async :refer [<! >!]]))


(defn put-one! [ch val]
  (async/put! ch val #(async/close! ch)))


(defn chan-of [val]
  (let [>result (async/chan 1)]
    (put-one! >result val)
    >result))


(defn flatmap
  "Maps f over <in to get a channel of channels and then mixes resulting
  channels without order"
  [f <in]
  {:pre (fn? f)}
  (let [out> (async/chan)]
    (go-loop [pending #{}]
      (let [[val <ch] (alts! (clojure.core/concat pending [<in]))]
        (cond
          (and (= <ch <in) (some? val))
          (recur (conj pending (f val)))

          (and (= <ch <in) (nil? val))
          (async/pipe
           (async/merge pending)
           out>)

          :default
          (if (nil? val)
            (recur (disj pending <ch))
            (do
              (>! out> val)
              (recur pending))))))
    out>))

(defn concat
  "Like async/merge, but preserves order"
  ([chs] (concat chs nil))
  ([chs buf-or-n]
   (let [>out (async/chan buf-or-n)]
     (go-loop [chs chs]
       (if (empty? chs)
         (async/close! >out)
         (if-let [val (<! (first chs))]
           (do
             (>! >out val)
             (recur chs))
           (recur (rest chs)))))
     >out)))
