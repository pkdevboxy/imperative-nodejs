(ns playground.task5.implementations
  (:require [playground.task5-async.file-storage :as storage]
            [playground.task5-async.log :as log]))


(def async-log
  {:<start (fn [dir file-size]
             (let [file-storage (storage/new-file-storage dir)]
               (log/<start (log/new-log file-storage file-size))))
   :<add-record log/<add-record
   :<fetch-record log/<fetch-record})
