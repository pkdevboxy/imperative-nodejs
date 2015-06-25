(ns task2.cljs-async
  (:require-macros [cljs.core.async.macros :refer [go]]
                   [task2.node-lib.macros :refer [<? go? go-loop?]])

  (:require [cljs.core.async :as async]
            [task2.node-lib.errors :as err]
            [task2.node-lib.fs :as fs]))


(defn- <next-number [x]
  {:pre (integer? x)}
  (async/map (err/lift int) [(fs/<read-file (str x))]))


(defn traverse [k]
  {:pre (integer? k)}
  (go-loop?
   [i k path []]
   (let [new-path (conj path i)
         j (<? (<next-number i))]
     (if (< 0 j)
       (recur j new-path)
       new-path))))
