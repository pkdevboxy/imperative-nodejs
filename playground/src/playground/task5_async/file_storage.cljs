(ns playground.task5-async.file-storage
  (:require-macros [cljs.core.async.macros :refer [go]])
  (:require [cljs.core.async :as async :refer [<! >!]]
            [schema.core :as s]
            [playground.node-lib.result :as result]
            [playground.node-lib.utils :refer [<<<]]
            [playground.node-api.path :as path]
            [playground.node-api.fs :as fs]))


(s/defrecord FileStorage [path :- s/Str])


(s/defn new-file-storage :- FileStorage
  "Creates a new file storage. This is a pure function."
  [path :- s/Str]
  (->FileStorage path))


(s/defn ^:private path-to-file :- s/Str
  [storage :- FileStorage
   name    :- s/Str]

  (path/join (:path storage) name))


(s/defn ^:private <open-new
  [storage :- FileStorage
   name    :- s/Str]

  (<<< fs/open (path-to-file storage name) "w"))


(s/defn ^:private <open-for-writing
  [storage :- FileStorage
   name    :- s/Str]

  (<<< fs/open (path-to-file storage name) "r+"))


(s/defn ^:private close-fd!
  [fd :- s/Int]
  (fs/close fd (fn []
               ; ignore possible error
                 )))


(s/defn ^:private <open-for-reading
  [storage :- FileStorage
   name    :- s/Str]

  (<<< fs/open (path-to-file storage name) "r"))


(s/defn ^:private zero-buffer :- js/Buffer
  [size :- s/Int]
  (doto (js/Buffer. size)
    (.fill 0)))


(s/defn <add-file
  "Adds empty file to the storage."
  [storage :- FileStorage
   name    :- s/Str
   size    :- s/Int]

  (go
    (result/forward-error (<! (<open-new storage name))
      fd (let [result (<! (<<< fs/write fd
                               (zero-buffer size) 0 size
                               0))]
           (close-fd! fd)
           result))))


(s/defn <write-to-file
  "Writes the buffer to the file."
  [storage :- FileStorage
   name    :- s/Str
   buffer  :- js/Buffer
   offset  :- s/Int]

  (go
    (result/forward-error (<! (<open-for-writing storage name))
      fd (let [result (<! (<<< fs/write fd
                               buffer 0 (.-length buffer)
                               offset))]
           (close-fd! fd)
           result))))


(s/defn <read-from-file
  "Reads from the file to the buffer."
  [storage :- FileStorage
   name    :- s/Str
   buffer  :- js/Buffer
   offset  :- s/Int]

  (go
    (result/forward-error (<! (<open-for-reading storage name))
      fd (let [result (<! (<<< fs/read fd
                               buffer 0 (.-length buffer)
                               offset))]
           (close-fd! fd)
           result))))
