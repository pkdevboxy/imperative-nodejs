(ns playground.task5.benchmark-fixtures
  (:require goog.async.nextTick
            [playground.node-lib.utils :refer [require-main]]
            [playground.task5.callback.file-storage]
            [playground.task5.callback.log]))


(def default-config
  {:record-size 1000
   :log-file-size 5
   :log-size 100
   :read-ratio 10
   :dir "/tmp/bench"
   :report-write-time false})


(def cljs-callback-impl
  {:start (fn [dir size callback]
            (let [log (playground.task5.callback.log/new-log
                       (playground.task5.callback.file-storage/new-file-storage dir)
                       size)]
              (playground.task5.callback.log/start log callback)))
   :add-record playground.task5.callback.log/add-record
   :fetch-record playground.task5.callback.log/fetch-record
   :flush! playground.task5.callback.log/flush!})


(def coffee-callback-impl
  {:start (fn [dir size callbck]
            (let [FileStorage (require-main "./playground/task5/caching_file_storage")
                  Log (require-main "./playground/task5/log")
                  log (Log. (FileStorage. dir) size)]
              (.start log callbck)))
   :add-record (fn [log record callback]
                 (.writeRecord log record callback))
   :fetch-record (fn [log offset callback]
                   (.readRecord log offset callback))
   :flush! (fn [log]
             (.flush log))
   :print-stats (fn [log] (.printStats log))})


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

(defn hack! []
  (set-nextTick (.-nextTick js/process)))

(defn restore! []
  (set-nextTick original-nextTick))


(defn with-fixtures [before f after]
  (fn [config]
    (before)
    (f (update-in config [:done]
                  (fn [done]
                    (fn []
                      (after)
                      (done)))))))
