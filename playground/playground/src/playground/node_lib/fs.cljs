(ns playground.node-lib.fs
  (:require-macros [playground.node-lib.macros :refer [node-require]])
  (:require [playground.node-lib.utils :refer [<<<]]))

(node-require fs)


(defn <read-file
  "Creates a chanel with text file contents"
  [path]
  {:pre (string? path)}
  (<<< (.-readFile fs) path))
