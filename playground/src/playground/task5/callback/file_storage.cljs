(ns playground.task5.callback.file-storage
  (:require-macros [playground.task5.callback.macros :refer [try->]])
  (:require [schema.core :as s]
            [playground.node-api.path :as path]
            [playground.node-api.fs :as fs]
            [playground.task5.buffer :as buffer]))


(s/defrecord FileStorage [path  :- s/Str
                          cache
                          dirty
                          ])
(def FileDescriptor s/Int)

(s/defn ^:private add-to-cache!
  [storage :- FileStorage
   name    :- s/Str
   buffer  :- js/Buffer]
  (swap! (:cache storage) assoc name buffer))

(s/defn ^:private get-from-cache!
  [storage :- FileStorage
   name    :- s/Str]
  (@(:cache storage) name))

(s/defn ^:private add-to-dirty!
  [storage :- FileStorage
   name    :- s/Str]

  (swap! (:dirty storage) conj name))


(s/defn ^:private path-to-file :- s/Str
  [storage :- FileStorage
   name    :- s/Str]

  (path/join (:path storage) name))


(s/defn ^:private zero-buffer :- js/Buffer
  [size :- s/Int]
  (doto (js/Buffer. size)
    (.fill 0)))


(s/defn ^:private read-to-cache
  [storage :- FileStorage
   name    :- s/Str
   callback]

  (if-let [result (get-from-cache! storage name)]
    (.nextTick js/process #(callback nil result))
    (try-> [result (fs/read-file (path-to-file storage name) nil)]
      (catch-> callback)
      (add-to-cache! storage name result)
      (callback nil result))))


(s/defn new-file-storage :- FileStorage
  [path :- s/Str]
  (->FileStorage path (atom {}) (atom #{})))


(s/defn add-file
  "Adds empty file to the storage."
  [storage :- FileStorage
   name    :- s/Str
   size    :- s/Int
   callback]

  (add-to-cache! storage name (zero-buffer size))
  (add-to-dirty! storage name)
  (.nextTick js/process callback))


(s/defn write-to-file
  "Writes the buffer to the file."

  [storage :- FileStorage
   name    :- s/Str
   buffer  :- js/Buffer
   offset  :- s/Int
   callback]
  (let [target (get-from-cache! storage name)]
    (assert target)
    (add-to-dirty! storage name)
    (.copy buffer target offset)
    (.nextTick js/process callback)))


(s/defn read-c-str-from-file
  "Reads from the file to the buffer."

  [storage :- FileStorage
   name    :- s/Str
   offset  :- s/Int
   callback]

  (try-> [buf (read-to-cache storage name)]
    (catch-> callback)
    (callback nil (buffer/extract-c-str (.slice buf offset)))))

(s/defn flush!
  [storage :- FileStorage]
  (doseq [name @(:dirty storage)]
    (try-> [_ (fs/write-file (path-to-file storage name)
                             (get-from-cache! storage name))]
      (catch-> (fn [err] (throw err)))
      (swap! (:dirty storage) disj name))))
