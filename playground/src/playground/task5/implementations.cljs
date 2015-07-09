(ns playground.task5.implementations
  (:require [cljs.core.async :as async]
            [playground.task5-async.file-storage :as storage]
            [playground.task5-async.log :as log]
            [playground.node-lib.utils :refer [<<< <<<ch require-main]]))


(def async-log
  {:<start (fn [dir file-size]
             (let [file-storage (storage/new-file-storage dir)]
               (log/<start (log/new-log file-storage file-size))))
   :<add-record log/<add-record
   :<fetch-record log/<fetch-record})


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
