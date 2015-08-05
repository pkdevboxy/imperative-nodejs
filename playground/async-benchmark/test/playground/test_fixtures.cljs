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


(defn evil-monkey
  "Makes a fixture that adds random failures to the specified async functions of
  a module"
  [node-module error-probaility & functions]

  (let [original-functions (atom {})
        mod (js/require (str node-module))
        wrap (fn [name f]
               (fn [& args]
                 (if (< (rand) error-probaility)
                   (do
                     ;; (println "Evil monkey!")
                     ((last args) (js/Error (str name ": evil monkey did it!"))))
                   (apply f args))))]
    {:before
     (fn []
       (reset! original-functions
               (into {} (for [f functions]
                          [f (aget mod f)])))
       (doseq [f functions]
         (aset mod f (wrap f (aget mod f)))))

     :after
     (fn []
       (doseq [[name f] @original-functions]
         (aset mod name f))
       (reset! original-functions {}))}))
