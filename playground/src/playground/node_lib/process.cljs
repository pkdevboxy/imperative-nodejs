(ns playground.node-lib.process
  (:require-macros [playground.node-lib.macros :refer [node-require]])
  (:require [cljs.nodejs :as nodejs]))


(defn argv []
  (let [[_node _script & argv] (.-argv nodejs/process)]
    (vec argv)))
