(ns playground.async-utils
  (:require-macros [cljs.core.async.macros :refer [go-loop alt!]])
  (:require [cljs.core.async :as async :refer [<! >!]]))

(defrecord ClosableMix [is-closed <out <inputs])


(defn closable-mix [<out]
  (let [is-closed (atom false)
        <inputs (async/chan)
        xs []]

    (go-loop [pending #{}]
      (let [[val <ch] (alts! (concat pending [<inputs]))]
        (cond
          (and (= <ch <inputs) (some? val))
          (recur (conj pending val))

          (and (= <ch <inputs) (nil? val))
          (async/pipe
           (async/merge pending)
           <out)

          :default
          (do
            (when (nil? val)
              (recur (disj pending <ch)))

            (>! <out val)
            (recur pending)))))

    (->ClosableMix is-closed <out <inputs)))


(defn add-closable-mix
  "Adds <ch to mix. mix should not be closed"
  [mix <ch]
  {:pre [(instance? ClosableMix mix)
         (not @(:is-closed mix))]}

  (async/put! (:<inputs mix) <ch))


(defn close-mix
  "Closes mix"
  [mix]
  {:pre [(instance? ClosableMix mix)
         (not @(:is-closed mix))]}

  (reset! (:is-closed mix) true)
  (async/close! (:<inputs mix)))
