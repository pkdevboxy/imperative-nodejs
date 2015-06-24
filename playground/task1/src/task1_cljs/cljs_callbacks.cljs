(ns task1.cljs-callbacks
  (:require-macros [task1.macros :refer [node-require]])
  (:require [cljs.nodejs :as node]))

(node-require [fs])


(defn- map-cb [f coll callback]
  (if (empty? coll)
    (callback nil [])

    (let [results (atom [])
          cb (fn [err data]
               (if err
                 (callback err)
                 (do
                   (swap! results conj data)
                   (when (= (count @results) (count coll))
                     (callback nil @results)))))]

      (doseq [x coll]
        (f x cb)))))

(defn sum-from-files [files callback]
  (map-cb (.-readFile fs) files
          (fn [err data]
            (if err
              (callback err)
              (callback nil (->> data
                                 (map int)
                                 (reduce +)))))))
