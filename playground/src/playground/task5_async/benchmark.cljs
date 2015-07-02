(ns playground.task5-async.benchmark
  (:require-macros [cljs.core.async.macros :refer [go]])
  (:require [cljs.core.async :as async :refer [<! >!]]
            [playground.task5-async.log :as log]
            [playground.node-lib.result :as result]
            [playground.benchmark :refer [time-it!]]))


(defn random-byte []
  (inc (rand-int 255)))

(defn random-buffer [max-length]
  (js/Buffer. (clj->js (repeatedly (rand-int max-length) random-byte))))


(defn random-buffers [n max-length]
  (repeatedly n #(random-buffer max-length)))


(defn make-scenario [n-requests max-record-length write-prob]
  (let [buffers (map-indexed vector (random-buffers (int (* n-requests write-prob))
                                                    max-record-length))
        writes (for [[i b] buffers]
                 [:write [i b]])
        reads (for [_ (range (- n-requests (count writes)))]
                [:read (first (rand-nth buffers))])]
    (vec (concat writes reads))))


(defn make-scenarios [n n-requests max-record-length write-prob]
  (repeatedly n #(make-scenario n-requests max-record-length write-prob)))


(defn make-bench [l scenarios]
  (fn [done]
    (go
      (let [logger (result/unwrap! (<! (log/<start l)))
            n-requests (atom (reduce + (map count scenarios)))
            results (atom {})]
        (doseq [s scenarios]
          (go
            (doseq [[cmd arg] s]
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


(def scenarios (make-scenarios 10 200 10 0.2))

(defn try-it []
  (let [fs (playground.task5-async.file-storage/new-file-storage "/tmp/bench")
        l (log/new-log fs 30)
        b (make-bench l scenarios)]
    (time-it! b)))
