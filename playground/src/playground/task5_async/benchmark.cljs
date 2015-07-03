(ns playground.task5-async.benchmark
  (:require-macros [cljs.core.async.macros :refer [go]])
  (:require [cljs.core.async :as async :refer [<! >!]]
            [playground.test-utils :refer [prepare-clean-dir]]
            [playground.task5-async.log :as log]
            [playground.task5-async.file-storage :as storage]
            [playground.node-lib.result :as result]
            [playground.benchmark :refer [time-it!]]))


(defn random-byte []
  (inc (rand-int 255)))

(defn random-buffer [max-length]
  (js/Buffer. (clj->js (repeatedly (rand-int max-length) random-byte))))


(defn random-buffers [n max-length]
  (repeatedly n #(random-buffer max-length)))

(defn- enumerate [coll]
  (map-indexed vector coll))


(defn make-scenario [{:keys [n-requests-per-client
                             max-record-length
                             write-prob]}]

  (let [n-writes (int (* n-requests-per-client write-prob))
        n-reads (- n-requests-per-client n-writes)
        buffers (enumerate (random-buffers n-writes max-record-length))
        writes (for [[i b] buffers]
                 [:write [i b]])
        reads (for [_ (range n-reads)]
                [:read (first (rand-nth buffers))])]

    (vec (concat writes reads))))


(defn make-scenarios [{:keys [n-clients
                              n-request-per-client
                              max-record-length
                              write-prob]
                       :as config}]

  (repeatedly n-clients #(make-scenario config)))


(defn make-bench [l scenarios]
  (fn [done]
    (go
      (let [logger (result/unwrap! (<! (log/<start l)))
            n-requests (atom (reduce + (map count scenarios)))
            results (atom {})]
        (doseq [s scenarios]
          (go (doseq [[cmd arg] s]
                (condp = cmd
                  :write (let [[i buf] arg
                               off (result/unwrap! (<! (log/<add-record logger buf)))]
                           (swap! results conj [i [off buf]])
                           (swap! n-requests dec))

                  :read (let [[off expect] (@results arg)
                              buf (result/unwrap! (<! (log/<fetch-record logger off)))]
                          (assert (.equals buf expect))
                          (swap! n-requests dec)
                          (when (zero? @n-requests)
                            (done)))))))))))


(def default-params
  {:n-clients 10
   :n-requests-per-client 100
   :max-record-length 50
   :write-prob 0.2
   :log-file-size 200})


(defn run-bench!
  ([] (run-bench! {}))
  ([overrides]
   (let [params (into default-params overrides)
         scenarios (make-scenarios params)
         file-storage (storage/new-file-storage "/tmp/bench")
         l (log/new-log file-storage (:log-file-size params))]

     (prepare-clean-dir (:path file-storage))
     (time-it! (make-bench l scenarios)))))
