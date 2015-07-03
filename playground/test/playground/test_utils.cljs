(ns playground.test-utils
  (:require-macros [cljs.core.async.macros :refer [go go-loop]])
  (:require [playground.node-lib.result :as result]
            [playground.node-api.fs :as fs]
            [playground.node-api.path :as path]))


(defn <retry [thunk]
  (go-loop [i 100]
    (result/match (<! (thunk))
      err (if (zero? i)
            (throw err)
            (recur (dec i)))
      value value)))


(defn prepare-clean-dir
  "Ensures that dir exists and is empty"
  [dir]
  (when (fs/exists-sync dir)
    (doseq [f (fs/readdir-sync dir)]
      (fs/unlink-sync (path/join dir f)))
    (fs/rmdir-sync dir)
    (fs/mkdir-sync dir)))
