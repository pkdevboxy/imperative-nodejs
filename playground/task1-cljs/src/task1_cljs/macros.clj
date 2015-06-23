(ns task1-cljs.macros)

(defmacro node-require [ & bindings]
  `(do
     ~@(for [[name]  bindings]
         `(def ~name (js/require ~(str name))))))


(defmacro <? [chan]
  (let [x (gensym "x")]
    `(let [~x (cljs.core.async/<! ~chan)]
       (when (instance? js/Error ~x)
         (throw ~x))
       ~x)))
