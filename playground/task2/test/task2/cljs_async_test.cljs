(ns task2.cljs-async-test
  (:require-macros [task2.node-lib.macros :refer [<?]]
                   [cljs.core.async.macros :refer [go]])
  (:require [cljs.test :as t :refer-macros [deftest is]]
            [task2.test-utils :refer [mock-readFile]]
            [task2.cljs-async :refer [traverse]]))


(t/use-fixtures :each (mock-readFile))


(deftest cljs-async-traverse
  (t/async done
           (go
             (let [path (<? (traverse 1))]
               (is (= path [1 2 3 4]))
               (done)))))
