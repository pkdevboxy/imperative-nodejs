(ns task1-cljs.macros)

(defmacro node-require [ & bindings]
  `(do
     ~@(for [[name]  bindings]
         `(def ~name (js/require ~(str name))))))

(defmacro <? [chan]
  `(task1-cljs.err/throw-err
    (cljs.core.async/<! ~chan)))
