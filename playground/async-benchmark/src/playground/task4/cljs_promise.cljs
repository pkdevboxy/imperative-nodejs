(ns playground.task4.cljs-promise
  (:require [promesa.core :as p]
            [playground.node-lib.promise.fs :as fs]))

(defn write-two-files [f1 data1 f2 data2]
  (let [p1 (fs/write-file f1 data1)
        p2 (fs/write-file f2 data2)]
    ; silence unhandled error warning
    (p/catch p2 (fn [err] nil))
    (-> p1
        (p/then (fn []
                  (p/catch p2
                      (fn [err]
                        [nil err]))))

        (p/catch (fn [err1]
                   (-> p2
                       (p/then (fn [] [err1 nil]))
                       (p/catch (fn [err2] [err1 err2]))))))))
