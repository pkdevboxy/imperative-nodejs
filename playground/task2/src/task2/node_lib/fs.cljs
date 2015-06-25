(ns task2.node-lib.fs
  (:require-macros [task2.node-lib.macros :refer [node-require]])
  (:require [task2.node-lib.utils :refer [<<<]]))

(node-require fs)


(defn <read-file
  "Creates a chanel with text file contents"
  [path]
  {:pre (string? path)}
  (<<< (.-readFile fs) path))