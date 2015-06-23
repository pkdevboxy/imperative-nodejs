(ns task1-cljs.macros)

(defmacro node-require [ & bindings]
  `(do
     ~@(for [[name]  bindings]
         `(def ~name (js/require ~(str name))))))
