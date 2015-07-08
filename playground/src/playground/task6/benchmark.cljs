(ns playground.task6.benchmark
  #_(:require-macros [playground.node-lib.macros :refer [do->]]
                   [cljs.core.async.macros :refer [go-loop]])
  #_(:require [cljs.core.async :as async :refer [<! >!]]
            [playground.node-lib.utils :refer [require-main]]
            [playground.node-lib.result :as result]
            [playground.benchmark :refer [time-it!]]))


;; (defn callback-benchmark [& {:keys [count-to delay]}]
;;   (fn [done]
;;     (let [summator (require-main "./playground/task6/summator")
;;           s (summator delay)
;;           i (atom 0)]
;;       (letfn [(callback [err sum]
;;                 (when err
;;                   (throw err))

;;                 (if (< @i count-to)
;;                   (do-> [[err sum] (s @i)]
;;                     (swap! i inc)
;;                     (callback err sum))

;;                   (done sum)))]

;;         (callback nil nil)))))


;; (defn async-benchmark [& {:keys [count-to delay]}]
;;   (let [summator (require-main "./playground/task6/summator")
;;         s (summator delay)]

;;     (fn [done]
;;       (go-loop [i 0]
;;         (let  [sum (<! (let [r (async/chan 1)]
;;                          (s i (fn [err arg]
;;                                 (async/put! r (if err
;;                                                 (result/failure err)
;;                                                 (result/ok arg)))))
;;                          r))]
;;           (if (identical? (dec i) count-to)
;;             (done sum)
;;             (recur (inc i))))))))
