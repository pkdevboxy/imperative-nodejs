(ns playground.node-api.path
  (:require [cljs.nodejs :as nodejs]))

(def path (nodejs/require "path"))

(defn normalize [p] (.normalize path p))

(defn join [& paths] (apply (.-join path) paths))

(defn is-absolute [path] (.isAbsolute path path))

(defn relative [from to] (.relative path from to))

(defn dirname [p] (.dirname path p))

(defn basename [p ext] (.basename path p ext))

(defn extname [p] (.extname path p))

(defn parse [pathString] (.parse path pathString))

(defn format [pathObject] (.format path pathObject))
