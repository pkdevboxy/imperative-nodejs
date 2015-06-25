(ns task2.node-lib.utils-test
  (:require [task2.node-lib.utils :as utils]
            [cljs.test :as t :refer-macros [deftest is]]))


(deftest str->int
  (is (= 92 (utils/str->int "92")))
  (is (thrown? js/Error (utils/str->int "spam"))))
