(ns playground.task4.cljs-callback
  (:require-macros [playground.node-lib.macros :refer [do->]])
  (:require [playground.node-api.fs :as fs]))


(defn write-two-files [f1 data1 f2 data2 callback]
  (do-> [[err1 err2] [(fs/write-file f1 data1)
                      (fs/write-file f2 data2)]]
        (callback err1 err2)))
