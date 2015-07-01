(ns playground.task5-async.fixtures
  (:require [playground.node-api.fs :as fs]
            [playground.node-api.path :as path]
            [playground.task5-async.file-storage :as storage]
            [playground.task5-async.log-impl :as impl]))


(def ^:dynamic *file-storage*)
(def ^:dynamic *log*)
(def ^:private log-dir "/tmp/test-impl")


(defn- rm-dir-dwim [dir]
  (when (fs/exists-sync dir)
    (doseq [f (fs/readdir-sync dir)]
      (fs/unlink-sync (path/join dir f)))
    (fs/rmdir-sync log-dir)))


(def log-fixture
  {:before (fn []
             (set! *file-storage*  (storage/new-file-storage log-dir))
             (set! *log* (impl/->Log *file-storage* 10 0 nil))
             (rm-dir-dwim log-dir)


             (fs/mkdir-sync log-dir))

   :after (fn []
            (set! *file-storage* nil)
            (set! *log* nil))})
