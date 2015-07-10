(ns playground.task5.buffer
  (:require [schema.core :as s]))


(s/defn null-terminated :- js/Buffer
  "Returns a copy of this buffer with 0 at the end"
  [buf :- js/Buffer]

  (let [result (.concat js/Buffer
                        (clj->js [buf (js/Buffer. 1)])
                        (inc (.-length buf)))]
    (.writeUInt8 result 0 (.-length buf))
    result))


(s/defn extract-c-str :- js/Buffer
  "Slices the buffer up to the first 0 or to the end.
  There is no zero bytes in the result"
  [buf :- js/Buffer]

  (let [l (some #(when (zero? (aget buf %)) %)
                (range (.-length buf)))]
    (.slice buf 0 (or l (.-length buf)))))
