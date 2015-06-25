(ns task2.test-macros
  (:require  [clojure.test :refer :all]))


(defmacro async-with-fixture
  "Like cljs.test/async, but uses supplied fixture with the test."
  [fixture done & body]
  `(cljs.test/async original-done#
                    (let [{before# :before after# :after} ~fixture]
                      (before#)
                      (let [~done (fn []
                                    (after#)
                                    (original-done#))]
                        ~@body))))
