(ns task1-cljs.cljs-callbacks
  (:require-macros [task1-cljs.macros :refer [node-require]])
  (:require [cljs.nodejs :as node]))

(node-require [fs])


(defn- map-cb [f coll c]
  (if (empty? coll)
    (c nil [])

    (let [results (atom [])
          cb (fn [err data]
               (if err
                 (c err)
                 (do
                   (swap! results conj data)
                   (when (= (count @results) (count coll))
                     (c nil @results)))))]

      (doseq [x coll]
        (f x cb)))))

(defn sum-from-files [files c]
  (map-cb (.-readFile fs) files
          (fn [err data]
            (if err
              (c err)
              (c nil (->> data
                          (map int)
                          (reduce +)))))))
