(ns playground.async-utils-test
  (:require-macros [cljs.core.async.macros :refer [go]])
  (:require [cljs.core.async :as async :refer [<! >!]]
            [cljs.test :as t :refer-macros [deftest is]]
            [playground.async-utils :as autils]))


(deftest flat-test
  (t/async done
           (let [<in (async/to-chan [1 3 5])
                 f (fn [i] (async/to-chan [i (inc i)]))]

             (go
               (is (= #{1 2 3 4 5 6}
                      (<! (async/into #{} (autils/flatmap f <in)))))
               (done)))))
