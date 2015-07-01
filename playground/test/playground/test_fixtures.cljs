(ns playground.test-fixtures
  (:require-macros [cljs.core.async.macros :refer [go]]
                   [playground.node-lib.macros :refer [node-require]])
  (:require [cljs.core.async :as async :refer [<!]]))

(node-require fs)


(def mock-fs
  {"1" "2"
   "2" "3"
   "3" "4"
   "4" "0"})

(defn <random-delay []
  (async/timeout (rand-int 30)))


(defn- mock-readFile [name callback]
  {:pre (some? callback)}
  (go
    (<! (<random-delay))
    (if-let [next (mock-fs name)]
      (callback nil next)
      (callback (js/Error "No such file")))))

(def ^:private original-readFile (.-readFile fs))

(defn- mock-writeFile [name data opts callback]
  {:pre (some? callback)}
  (go
    (<! (<random-delay))
    (if (mock-fs name)
      (callback)
      (callback (js/Error "Unable to create file")))))

(def ^:private original-writeFile (.-writeFile fs))


(def mock-readFile-fixture
  "A mocking fixture for `fs.readFile`."
  {:before #(set! (.-readFile fs) mock-readFile)
   :after  #(set! (.-readFile fs) original-readFile)})


(def mock-writeFile-fixture
  "A mocking fixture for `fs.writeFile`."
  {:before #(set! (.-writeFile fs) mock-writeFile)
   :after  #(set! (.-writeFile fs) original-writeFile)})
