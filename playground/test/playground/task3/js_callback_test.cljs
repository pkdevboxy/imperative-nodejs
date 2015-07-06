(ns playground.task3.js-callback-test
  (:require-macros [playground.node-lib.macros :refer [node-require]]
                   [cljs.core.async.macros :refer [go]])
  (:require [cljs.core.async :as async :refer [<!]]
            [cljs.test :as t :refer-macros [deftest is]]
            [playground.node-lib.utils :refer [require-main]]
            [playground.test-fixtures :refer [mock-readFile-fixture mock-fs]]))


(t/use-fixtures :each mock-readFile-fixture)

(deftest reader_test
  (let [r (require-main "./playground/task3/js_callback")]
    (t/async
     done
     (let [result (volatile! [])
           callback (fn [err data]
                      (if (= data (.-DONE r))
                        (do
                          (is (= (into {} @result)
                                  mock-fs))
                          (done))

                        (vswap! result conj (js->clj (or err data)))))
           reader (.reader r callback)]

       (go (doseq [i ["1" "2" "3" "4"]]
             (<! (async/timeout (rand-int 30)))
             (.request reader i))
           (.finish reader))))))
