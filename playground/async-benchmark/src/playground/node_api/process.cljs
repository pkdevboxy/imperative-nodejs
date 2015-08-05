(ns playground.node-api.process
  (:require [cljs.nodejs :as nodejs]))


(def argv
  (js->clj (.-argv nodejs/process)))
