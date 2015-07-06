(ns playground.task5.fixtures
  (:require [playground.node-api.path :as path]
            [playground.node-lib.utils :refer [prepare-clean-dir]]))


(def ^:dynamic *tmp-dir*)

(def dir-fixture
  {:before (fn []
             (set! *tmp-dir* "/tmp/tests")
             (prepare-clean-dir *tmp-dir*))

   :after (fn [] )})
