(ns playground.task5-async.buffer-test
  (:require [cljs.test :as t :refer-macros [deftest is]]
            [playground.task5-async.buffer :as buffer]))


(deftest null-terminates-buffer
  (let [buf (js/Buffer. "foo")
        nt-buf (buffer/null-terminated buf)]

    (is (= (.-length buf) 3))
    (is (= (.-length nt-buf) 4))
    (is (.equals buf (.slice nt-buf 0 3)))
    (is (zero? (.readUInt8 nt-buf 3)))))


(deftest null-terminates-empty-buffer
  (let [buf (js/Buffer. 0)
        nt-buf (buffer/null-terminated buf)]

    (is (zero? (.-length buf)))
    (is (= (.-length nt-buf) 1))
    (is (zero? (.readUInt8 nt-buf 0)))))


(deftest test-extract-c-str
  (let [buf (js/Buffer. (clj->js [97 97 97 0 0 0]))
        c-str (buffer/extract-c-str buf)]
    (is (.equals (js/Buffer. "aaa") c-str))))
