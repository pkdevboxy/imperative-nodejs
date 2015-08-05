(ns playground.task4.cljs-async
  (:require-macros [cljs.core.async.macros :refer [go]])
  (:require [playground.async-utils :as autils]
            [playground.node-lib.utils :refer [<<<]]
            [playground.node-api.fs :as fs]))


(defn write-two-files [f1 data1 f2 data2]
  (autils/concat [(<<< fs/write-file f1 data1)
                  (<<< fs/write-file f2 data2)]))
