(ns playground.task5.fixtures
  (:require [playground.node-api.fs :as fs]
            [playground.node-api.path :as path]
            [playground.test-utils :refer [prepare-clean-dir]]))


(def ^:dynamic *tmp-dir*)

(def dir-fixture
  {:before (fn []
             (set! *tmp-dir* "/tmp/tests")
             (prepare-clean-dir *tmp-dir*))

   :after (fn [] )})
