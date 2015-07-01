(ns playground.task5-async.file-storage
  (:require-macros [cljs.core.async.macros :refer [go]])
  (:require [cljs.core.async :as async :refer [<! >!]]
            [playground.node-lib.result :as result]
            [playground.node-lib.utils :refer [<<<]]
            [playground.node-api.path :as path]
            [playground.node-api.fs :as fs]))


(defrecord FileStorage [path])


(defn new-file-storage [path]
  (->FileStorage path))


(defn- path-to-file [storage name]
  (path/join (:path storage) name))


(defn- <open-new [storage name]
  (<<< fs/open (path-to-file storage name) "wx"))


(defn- <open-for-writing [storage name]
  (<<< fs/open (path-to-file storage name) "r+"))


(defn- <open-for-reading [storage name]
  (<<< fs/open (path-to-file storage name) "r"))


(defn- zero-buffer [size]
  (doto (js/Buffer. size)
    (.fill 0)))


(defn <add-file [storage name size]
  (go
    (result/forward-error (<! (<open-new storage name))
      fd (<! (<<< fs/write fd
                  (zero-buffer size) 0 size
                  0)))))


(defn <write-to-file [storage name buffer offset]
  (go
    (result/forward-error (<! (<open-for-writing storage name))
      fd (<! (<<< fs/write fd
                  buffer 0 (.-length buffer)
                  offset)))))


(defn <read-from-file [storage name buffer offset]
  (go
    (result/forward-error (<! (<open-for-reading storage name))
      fd (<! (<<< fs/read fd
                  buffer 0 (.-length buffer)
                  offset)))))
