(ns task2.cljs-async-test
  (:require-macros [task2.node-lib.macros :refer [<?]]
                   [task2.test-macros :refer [async-with-fixture]]
                   [cljs.core.async.macros :refer [go]])
  (:require [cljs.test :as t :refer-macros [deftest is]]
            [task2.test-utils :refer [mock-readFile]]
            [task2.cljs-async :refer [traverse]]))


(deftest cljs-async-traverse
  (async-with-fixture
   (mock-readFile {"1" "2"
                   "2" "3"
                   "3" "4"
                   "4" "0"})
   done

   (go
     (let [path (<? (traverse 1))]
       (is (= path [1 2 3 4]))
       (done)))))
