(ns playground.task5.read-write
  (:require-macros [cljs.core.async.macros :refer [go]])
  (:require [cljs.core.async :as async :refer [<! >!]]
            [playground.task5.benchmark-fixtures
             :refer [megabytes random-buffers with-fixtures hack! restore!
                     cljs-callback-impl coffee-callback-impl default-config]]))


(defn- make-env [config]
  (let [{:keys [record-size log-size read-ratio]
         :as config} (merge default-config config)
         records (random-buffers (int record-size) (megabytes log-size))
         n-records (count records)
         reads (vec (repeatedly (* read-ratio n-records) #(rand-int n-records)))]

    (merge config
           {:records records
            :reads reads})))



(defn- write-read-records
  [{{:keys [start add-record fetch-record print-stats]} :impl
    :keys [done records reads dir log-file-size report-write-time]}]

  (let [ch (async/chan 1)]
    (go
      (let [log (<! (do (start dir (megabytes log-file-size)
                               (fn [err log]
                                 (when err (throw err))
                                 (async/put! ch log)))
                        ch))

            <add-record (fn [buffer]
                          (add-record log buffer (fn [err offset]
                                                   (when err (throw err))
                                                   (async/put! ch offset)))
                          ch)

            <fetch-record (fn [offset]
                            (fetch-record log offset (fn [err buffer]
                                                       (when err (throw err))
                                                       (async/put! ch buffer)))
                            ch)]

        (let [record-map
              (loop [result []
                     [buffer & rest] records]

                (if buffer
                  (recur
                   (conj result [(<! (<add-record buffer)) buffer])
                   rest)
                  result))]

          (doseq [i reads
                  :let [[offset buffer] (nth record-map i)]]
            (when-not (.equals buffer (<! (<fetch-record offset)))
              (throw (js/Error "log is broken")))))
        (when print-stats
          (print-stats log))
        (done)))))


(def callback-read-write-bench
  {:name "callback coffeescript read write"
   :env (comp
         #(merge % {:impl coffee-callback-impl})
         make-env)

   :f write-read-records})


(def callback-cljs-read-write-bench
  {:name "callback clojurescript read write"
   :env (comp
         #(merge % {:impl cljs-callback-impl})
         make-env)

   :f write-read-records})
