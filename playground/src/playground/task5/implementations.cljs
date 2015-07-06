(ns playground.task5.implementations
  (:require [playground.task5-async.file-storage :as storage]
            [playground.task5-async.log :as log]
            [playground.node-lib.utils :refer [<<< require-main]]))


(def async-log
  {:<start (fn [dir file-size]
             (let [file-storage (storage/new-file-storage dir)]
               (log/<start (log/new-log file-storage file-size))))
   :<add-record log/<add-record
   :<fetch-record log/<fetch-record})


(def callback-log
  {:<start (fn [dir file-size]
             (let [Filestorage (require-main "./playground/task5/file_storage")
                   Log (require-main "./playground/task5/log")
                   storage (Filestorage. dir)
                   l (Log. storage file-size)]

               (<<< (.bind (.-start l) l))))

   :<add-record (fn [l record]
                  (<<< (.bind (.-writeRecord l) l) record))

   :<fetch-record (fn [l offset]
                    (<<< (.bind (.-readRecord l) l) offset))})
