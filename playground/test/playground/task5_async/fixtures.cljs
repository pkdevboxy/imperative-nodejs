(ns playground.task5-async.fixtures
  (:require [playground.node-api.fs :as fs]
            [playground.node-api.path :as path]
            [playground.test-utils :refer [prepare-clean-dir]]
            [playground.task5-async.file-storage :as storage]
            [playground.task5-async.log-impl :as impl]))


(def ^:dynamic *file-storage*)
(def ^:private log-dir "/tmp/test-impl")


(def log-fixture
  {:before (fn []
             (set! *file-storage* (storage/new-file-storage log-dir))
             (prepare-clean-dir log-dir))

   :after (fn []
            (set! *file-storage* nil))})
