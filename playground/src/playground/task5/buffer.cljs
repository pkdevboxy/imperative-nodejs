(ns playground.task5.buffer
  (:require [schema.core :as s]
            [playground.node-lib.utils :refer [require-local]]))


(s/defn null-terminated :- js/Buffer
  "Returns a copy of this buffer with 0 at the end"
  [buf :- js/Buffer]

  (let [result (.concat js/Buffer
                        (clj->js [buf (js/Buffer. 1)])
                        (inc (.-length buf)))]
    (.writeUInt8 result 0 (.-length buf))
    result))

(def extract-c-str (.-readCString (require-local "playground/task5/utils")))

#_(s/defn extract-c-str :- js/Buffer
  "Slices the buffer up to the first 0 or to the end.
  There is no zero bytes in the result"
  [buf :- js/Buffer]

  (let [l (some #(when (zero? (aget buf %)) %)
                (range (.-length buf)))]
    (.slice buf 0 (or l (.-length buf)))))
