(ns playground.task5-async.buffer)


(defn null-terminated [buf]
  {:pre (instance? js/Buffer buf)}
  (let [result (.concat js/Buffer
                        (clj->js [buf (js/Buffer. 1)])
                        (inc (.-length buf)))]
    (.writeUInt8 result 0 (.-length buf))
    result))


(defn extract-c-str [buf]
  (let [l (some #(when (zero? (aget buf %)) %)
                (range (.-length buf)))]
    (.slice buf 0 (or l (.-length buf)))))
