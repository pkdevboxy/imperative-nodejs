(ns playground.task5-async.fixtures
  (:require [playground.node-api.fs :as fs]
            [playground.node-api.path :as path]
            [playground.task5-async.impl :as impl]))


(def ^:dynamic *log-dir*)
(def ^:dynamic *log*)

(defn- rm-dir-dwim [dir]
  (when (fs/exists-sync dir)
    (doseq [f (fs/readdir-sync dir)]
      (fs/unlink-sync (path/join dir f)))
    (fs/rmdir-sync *log-dir*)))


(def log-fixture
  {:before (fn []
             (set! *log-dir* "/tmp/test-impl")
             (set! *log* (impl/->Log *log-dir* 10 0 nil))
             (rm-dir-dwim *log-dir*)


             (fs/mkdir-sync *log-dir*))

   :after (fn []
            (set! *log-dir* nil)
            (set! *log* nil))})
