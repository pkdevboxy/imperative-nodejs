(ns playground.node-lib.utils
  (:require [cljs.core.async :as async]
            [schema.core :as s]
            [playground.node-api.fs :as fs]
            [playground.node-api.path :as path]
            [playground.async-utils :as autils]
            [playground.node-lib.result :as result :refer [Result-of]]))


(defn <<<
  "Calls a CPS-style function f with args and returns a channel with result"
  [f & args]
  (let [>result (async/chan 1)
        callback (fn [err & args]
                   (autils/put-one! >result
                                    (if err
                                      (result/failure err)
                                      (result/ok (condp = (count args)
                                                   0 :ok
                                                   1 (first args)
                                                   args)))))]
    (apply f (concat args [callback]))
    >result))


(defn <<<ch
  [>result f & args]
  (let [callback (fn [err & args]
                   (async/put! >result
                               (if err
                                 (result/failure err)
                                 (result/ok (condp = (count args)
                                              0 :ok
                                              1 (first args)
                                              args)))))]

    (apply f (concat args [callback]))
    >result))


(s/defn str->int :- (Result-of s/Int)
  "Parses integer."
  [s :- s/Str]

  (let [i (js/parseInt s 10)]
    (if (js/isNaN i)
      (result/failure (js/Error (str "str->int: " s " is not an integer!")))
      (result/ok i))))


(js/require "babel/register")
(js/require "coffee-script/register")
(js/require "iced-coffee-script/register")

(defn require-local [module]
  (.require (.-main js/require) (str "../src/coffee/" module)))


(defn prepare-clean-dir
  "Ensures that dir exists and is empty"
  [dir]
  (when (fs/exists-sync dir)
    (doseq [f (fs/readdir-sync dir)]
      (fs/unlink-sync (path/join dir f)))
    (fs/rmdir-sync dir))

  (fs/mkdir-sync dir))
