(ns playground.async-utils-test
  (:require-macros [cljs.core.async.macros :refer [go]])
  (:require [cljs.core.async :as async :refer [<! >!]]
            [cljs.test :as t :refer-macros [deftest is]]
            [playground.async-utils :as autils]))


(deftest close-mix-test
  (t/async done
           (let [<result (async/chan)
                 mix (autils/closable-mix <result)
                 <odds (async/to-chan [1 3 5])
                 <evens (async/to-chan [2 4 6])]
             (go
               (autils/add-closable-mix mix <odds)
               (autils/add-closable-mix mix <evens)
               (autils/close-mix mix)
               (is (= #{1 2 3 4 5 6}
                      (<! (async/into #{} <result))))
               (done)))))
