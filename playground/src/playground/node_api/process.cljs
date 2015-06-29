(ns playground.node-api.process
  (:require [cljs.nodejs :as nodejs]))


(def argv
  (js->clj (.-argc nodejs/process)))
