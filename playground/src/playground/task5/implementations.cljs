(ns playground.task5.implementations
  (:require [cljs.core.async :as async]
            [playground.task5.async.file-storage]
            [playground.task5.async.log]
            [playground.task5.callback.file-storage]
            [playground.task5.callback.log]

            [playground.node-lib.utils :refer [<<< <<<ch require-main]]))


(def async-log
  {:<start (fn [dir file-size]
             (let [file-storage (playground.task5.async.file-storage/new-file-storage dir)]
               (playground.task5.async.log/<start
                (playground.task5.async.log/new-log file-storage file-size))))

   :<add-record playground.task5.async.log/<add-record
   :<fetch-record playground.task5.async.log/<fetch-record})


(defn- start! [l cb] (.start l cb))
(defn- write-record! [l b cb] (.writeRecord l b cb))
(defn- read-record!  [l o cb] (.readRecord  l o cb))

(def callback-log
  {:<start (fn [dir file-size]
             (let [Filestorage (require-main "./playground/task5/file_storage")
                   Log (require-main "./playground/task5/log")
                   storage (Filestorage. dir)
                   l (Log. storage file-size)]

               (<<< start! l)))

   :<add-record (fn [l record]
                  (<<< write-record! l record))

   :<fetch-record (fn [l offset]
                    (<<< read-record! l offset))})


(def iced-log
  {:<start (fn [dir file-size]
             (let [Filestorage (require-main "./playground/task5/iced/file_storage")
                   Log (require-main "./playground/task5/iced/log")
                   storage (Filestorage. dir)
                   l (Log. storage file-size)]

               (<<< start! l)))

   :<add-record (fn [l record]
                  (<<< write-record! l record))

   :<fetch-record (fn [l offset]
                    (<<< read-record! l offset))})


(def promise-log
  {:<start (fn [dir file-size]
             (let [Filestorage (require-main "./playground/task5/promise/file_storage")
                   Log (require-main "./playground/task5/promise/log")
                   storage (Filestorage. dir)
                   l (Log. storage file-size)]

               (<<< start! l)))

   :<add-record (fn [l record]
                  (<<< write-record! l record))

   :<fetch-record (fn [l offset]
                    (<<< read-record! l offset))})


(def callback-cljs-log
  {:<start (fn [dir file-size]
             (let [storage (playground.task5.callback.file-storage/new-file-storage dir)
                   l (playground.task5.callback.log/new-log storage file-size)]
               (<<< playground.task5.callback.log/start l)))

   :<add-record (fn [l record]
                  (<<< playground.task5.callback.log/add-record l record))

   :<fetch-record (fn [l offset]
                    (<<< playground.task5.callback.log/fetch-record l offset))})



(def callback-log-shared-chan
  (let [callback-ch (async/chan 1)]
    {:<start (fn [dir file-size]
               (let [Filestorage (require-main "./playground/task5/file_storage")
                     Log (require-main "./playground/task5/log")
                     storage (Filestorage. dir)
                     l (Log. storage file-size)]

                 (<<<ch callback-ch start! l)))

     :<add-record (fn [l record]
                    (<<<ch callback-ch write-record! l record))

     :<fetch-record (fn [l offset]
                      (<<<ch callback-ch read-record! l offset))}))
