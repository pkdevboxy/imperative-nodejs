(ns playground.node-lib.utils-test
  (:require [playground.node-lib.utils :as utils]
            [cljs.test :as t :refer-macros [deftest is]]))


(deftest str->int
  (is (= [nil 92] (utils/str->int "92")))
  (is (instance? js/Error (first (utils/str->int "spam")))))
