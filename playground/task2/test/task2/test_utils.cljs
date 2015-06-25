(ns task2.test-utils
  (:require-macros [cljs.core.async.macros :refer [go]]
                   [task2.node-lib.macros :refer [node-require]])
  (:require [cljs.core.async :as async :refer [<!]]))

(node-require fs)


(def ^:private default-files
  {"1" "2"
   "2" "3"
   "3" "4"
   "4" "0"})


(defn mock-readFile
  "Creates a mocking fixture for `fs.readFile`.
   files should be a map from file names to contents."
  ([] (mock-readFile default-files))

  ([files]
   (let [original-readFile (.-readFile fs)
         mock-readFile (fn [name callback]
                         (go
                           (<! (async/timeout (rand-int 30)))
                           (if-let [next (files name)]
                             (callback nil next)
                             (callback (js/Error "No such file")))))]

     {:before #(set! (.-readFile fs) mock-readFile)
      :after  #(set! (.-readFile fs) original-readFile)})))
