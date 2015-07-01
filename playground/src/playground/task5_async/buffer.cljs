(ns playground.task5-async.buffer
  (:require [schema.core :as s]))


(s/defn null-terminated :- js/Buffer
  [buf :- js/Buffer]

  (let [result (.concat js/Buffer
                        (clj->js [buf (js/Buffer. 1)])
                        (inc (.-length buf)))]
    (.writeUInt8 result 0 (.-length buf))
    result))


(s/defn extract-c-str :- js/Buffer
  [buf :- js/Buffer]

  (let [l (some #(when (zero? (aget buf %)) %)
                (range (.-length buf)))]
    (.slice buf 0 (or l (.-length buf)))))
