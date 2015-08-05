(ns playground.task5.callback.log-impl
  (:require-macros [cljs.core.async.macros :refer [go-loop]]
                   [playground.task5.callback.macros :refer [try->]])
  (:require [cljs.core.async :as async :refer [<! >!]]
            [schema.core :as s]
            [playground.schemas :refer [Atom-of]]
            [playground.task5.callback.file-storage :as storage]))


(def RecordOffset s/Int)
(def NullTerminatedBuffer (s/both js/Buffer
                                  (s/pred #(zero? (aget % (dec (.-length %)))))))


(s/defrecord Log
    [storage        :- storage/FileStorage
     log-file-size  :- s/Int
     current-offset :- (s/maybe (Atom-of RecordOffset))
     <writes])


(s/defn ^:private is-valid-offset :- s/Bool
  [x :- s/Int]
  (<= 0 x (.-MAX_SAFE_INTEGER js/Number)))


(s/defn ^:private file-id-for-offset :- s/Int
  [log    :- Log
   offset :- s/Int]
  {:pre (<= 0 offset @(:current-offset log))}

  (quot offset (:log-file-size log)))


(s/defn ^:private current-file-id :- s/Int
  [log :- Log]
  (file-id-for-offset log @(:current-offset log)))


(s/defn ^:private in-file-offset :- s/Int
  [log    :- Log
   offset :- s/Int]

  (mod offset (:log-file-size log)))


(s/defn ^:private current-in-file-offset :- s/Int
  [log :- Log]

  (in-file-offset log @(:current-offset log)))


(s/defn ^:private free-space-in-file :- s/Int
  [log :- Log]

  (- (:log-file-size log)
     (current-in-file-offset log)))


(s/defn ^:private add-file
  [log     :- Log
   file-id :- s/Int
   callback]
  (storage/add-file (:storage log)
                    (str file-id)
                    (:log-file-size log)
                    callback))


(s/defn ^:private increase-offset
  [log :- Log
   off :- s/Int
   callback]

  (let [new-file-id (file-id-for-offset log (+ @(:current-offset log) off))
        commit! #(swap! (:current-offset log) + off)]
    (if (= (current-file-id log) new-file-id)
      (do
        (commit!)
        (.nextTick js/process callback))

      (do
        (storage/flush! (:storage log))
        (try-> [_ (add-file log new-file-id)]
          (catch-> callback)

          (commit!)
          (callback))))))


(s/defn ^:private fill-current-file-if-neccessary
  [log    :- Log
   record :- NullTerminatedBuffer
   callback]

  (if (< (.-length record) (free-space-in-file log))
    (.nextTick js/process callback)
    (increase-offset log (free-space-in-file log) callback)))


(s/defn ^:private write-record!
  [log    :- Log
   record :- NullTerminatedBuffer
   callback]

  (try-> [_ (fill-current-file-if-neccessary log record)
          _ (storage/write-to-file (:storage log)
                                   (str (current-file-id log))
                                   record
                                   (current-in-file-offset log))
          :let [old-offset @(:current-offset log)]
          _ (increase-offset log (.-length record))]
    (catch-> callback)

    (callback nil old-offset)))


(s/defn start
  [log :- Log
   callback]

  (let [log (into log
                  {:current-offset (atom 0 :validator is-valid-offset)
                   :<writes (async/chan 1)})]
    (try-> [_ (add-file log 0)]
      (catch-> callback)

      (callback nil log))))


(s/defn start-processing!
  [log :- Log]

  (let [ch (async/chan 1)]
    (go-loop []
      (when-let [[buffer callback] (<! (:<writes log))]
        (write-record! log buffer
                       (fn [error offset]
                         (async/put! ch :ready)
                         (callback error offset)))
        (<! ch)
        (recur)))))


(s/defn read-record!
  [log           :- Log
   global-offset :- s/Int
   callback]
  {:pre (<= 0 global-offset @(:current-offset log))}

  (let [file-id (file-id-for-offset log global-offset)
        offset (in-file-offset log global-offset)]

    (storage/read-c-str-from-file (:storage log)
                                  (str file-id)
                                  offset
                                  callback)))
(s/defn flush! [log :- Log]
  #_(storage/flush! (:storage log)))
