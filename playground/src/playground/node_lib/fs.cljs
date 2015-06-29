(ns playground.node-lib.fs
  (:require [playground.node-lib.utils :refer [<<<]]
            [playground.node-api.fs :as fs]))


(defn <read-file
  "Creates a chanel with text file contents"
  [path]
  {:pre (string? path)}
  (<<< fs/read-file path))
