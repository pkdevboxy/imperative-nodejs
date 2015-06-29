(ns playground.task2.cljs-async
  (:require-macros [cljs.core.async.macros :refer [go]]
                   [playground.node-lib.macros :refer [<? go? go-loop?]])

  (:require [cljs.core.async :as async]
            [playground.node-lib.errors :as err]
            [playground.node-lib.utils :refer [<<<]]
            [playground.node-api.fs :as fs]))


(defn- <next-number [x]
  {:pre (integer? x)}
  (async/map (err/lift int) [(<<< fs/read-file (str x))]))


(defn traverse [k]
  {:pre (integer? k)}
  (go-loop?
   [i k path []]
   (let [new-path (conj path i)
         j (<? (<next-number i))]
     (if (pos? j)
       (recur j new-path)
       new-path))))
