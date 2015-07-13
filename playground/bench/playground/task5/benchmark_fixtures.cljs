(ns playground.task5.benchmark-fixtures
  (:require goog.async.nextTick))


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


(defn random-buffers
  ([total-size] (random-buffers 1000 total-size))
  ([max-length total-size]
  (loop [result [] current-length 0]
    (if (< total-size (+ current-length max-length))
      result
      (let [buff (random-buffer max-length)]
        (recur (conj result buff) (+ current-length (.-length buff))))))))


(def ^:private original-nextTick (.. js/goog -async -nextTick))
(defn- set-nextTick [f]
  (-> js/goog
      .-async
      .-nextTick
      (set! f)))

(defn- hack! []
  (set-nextTick (.-nextTick js/process)))

(defn- restore! []
  (set-nextTick original-nextTick))


(defn- with-fixtures [before f after]
  (fn [config]
    (before)
    (f (update-in config [:done]
                  (fn [done]
                    (fn []
                      (after)
                      (done)))))))
