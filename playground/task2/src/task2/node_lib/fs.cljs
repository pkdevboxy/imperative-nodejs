(ns task2.node-lib.fs
  (:require-macros [task2.node-lib.macros :refer [node-require]])
  (:require [task2.node-lib.utils :as utils]))

(node-require fs)


(defn file-chan
  "Creates a chanel with text file contents"
  [path]
  {:pre (string? path)}
  ((utils/callback->chan (.-readFile fs)) path))
