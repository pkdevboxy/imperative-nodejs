(ns playground.node-lib.promise.fs
  (:require-macros [playground.node-lib.macros :refer [node-require]])
  (:require [promesa.core :as p]
            [playground.node-lib.promise.utils :as utils]))

(node-require fs)


(defn read-file
  "Reads file contents into a promise"
  [path]
  {:pre (string? path)}
  ((utils/callback->promise (.-readFile fs)) path))
