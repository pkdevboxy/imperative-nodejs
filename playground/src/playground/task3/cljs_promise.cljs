(ns playground.task3.cljs-promise
  (:require [promesa.core :as p]
            [playground.node-lib.promise.fs :as fs]))

(defrecord  Reader [closed? in-flight done-p resolve])


(defn reader []
  (let [resolve (volatile! nil)
        done-p (p/promise #(vreset! resolve %))]

    (atom (->Reader false 0 done-p resolve))))


(defn- notify-if-done [reader]
  {:pre (instance? Reader @reader)}

  (let [{in-flight :in-flight
         closed? :closed?
         resolve :resolve} @reader]

    (when (and closed?
               (zero? in-flight))
      (@resolve))))


(defn request! [reader path]
  {:pre [(instance? Reader @reader)
         (string? path)
         (not (:closed? @reader))]}

  (swap! reader update-in [:in-flight] inc)

  (let [result (fs/read-file path)
        done (fn []
               (swap! reader update-in [:in-flight] dec)
               (notify-if-done reader))]

    (-> result
        (p/then done)
        (p/catch done))

    result))


(defn close! [reader]
  {:pre [(instance? Reader @reader)
         (not (:closed? @reader))]}
  (swap! reader assoc :closed? true)
  (notify-if-done reader)
  (:done-p @reader))
