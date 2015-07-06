(ns playground.task5.benchmark-fixtures)


(defn random-buffer [max-length]
  (let [length (rand-int max-length)
        buf (js/Buffer. length)]
    (loop [i 0]
      (if (identical? i length)
        buf
        (let [v (aget buf i)]
          (when (zero? v)
            (aset buf i 1))
          (recur (inc i)))))))


(defn megabytes [n]
  (* n 1024 1024))


(defn random-buffers [max-length total-size]
  (loop [result [] current-length 0]
    (if (< total-size (+ current-length max-length))
      result
      (let [buff (random-buffer max-length)]
        (recur (conj result buff) (+ current-length (.-length buff)))))))
