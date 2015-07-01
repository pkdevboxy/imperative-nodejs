(ns playground.task5-async.impl-test
  (:require-macros [cljs.core.async.macros :refer [go]])
  (:require [cljs.core.async :as async :refer [<! >!]]
            [cljs.test :as t :refer-macros [deftest is]]
            [playground.task5-async.fixtures :refer [*log* log-fixture]]
            [playground.node-api.fs :as fs]
            [playground.node-api.path :as path]
            [playground.task5-async.impl :as impl]
            [playground.task5-async.buffer :as buffer]))


(t/use-fixtures :each log-fixture)

(deftest path-to-log-file-works
  (is (= "/tmp/test-impl/92" (impl/path-to-log-file *log* 92))))


(deftest test-open-log-file
  (t/async
   done
   (go
     (let [[_ fd] (<! (impl/<open-log-file *log* 0))]
       (is (some? fd))
       (done)))))


(deftest test-zero-file
  (t/async
   done
   (go
     (let [len (:log-file-size *log*)
           [_ fd] (<! (impl/<open-log-file *log* 0))]
       (<! (impl/<zero-file *log* fd))
       (is (= (.-size (fs/fstat-sync fd)) len))
       (let [buf (js/Buffer. len)]
         (fs/read-sync fd buf 0 len 0)
         (dotimes [i len]
           (is (zero? (aget buf i)))))
       (done)))))


(deftest test-add-first-file
  (t/async
   done
   (go
     (let [[_ l] (<! (impl/<add-first-file *log*))]
       (is (= l *log*))
       (is (fs/exists-sync (impl/path-to-log-file *log* 0)))
       (done)))))


(defn c-str [s]
  (buffer/null-terminated (js/Buffer. s)))


(deftest test-write-record!
  (t/async
   done
   (go
     (let [[_ log] (<! (impl/<start *log*))
           <resp1 (async/chan)
           <resp2 (async/chan)
           <resp3 (async/chan)]

       (impl/write-record! log (c-str "ab") <resp1)
       (is (zero? (second (<! <resp1))))

       (impl/write-record! log (c-str "cd") <resp2)
       (is (= 3 (second (<! <resp2))))

       (impl/write-record! log (c-str "hello") <resp3)
       (is (= 10 (second (<! <resp3))))

       (done)))))
