(ns playground.test-fixtures
  (:require-macros [cljs.core.async.macros :refer [go]]
                   [playground.node-lib.macros :refer [node-require]])
  (:require [cljs.core.async :as async :refer [<!]]))

(node-require fs)


(def ^:private files
  {"1" "2"
   "2" "3"
   "3" "4"
   "4" "0"})


(defn- mock-readFile [name callback]
  (go
    (<! (async/timeout (rand-int 30)))
    (if-let [next (files name)]
      (callback nil next)
      (callback (js/Error "No such file")))))

(def ^:private original-readFile (.-readFile fs))


(def mock-readFile-fixture
  "A mocking fixture for `fs.readFile`."
  {:before #(set! (.-readFile fs) mock-readFile)
   :after  #(set! (.-readFile fs) original-readFile)})
