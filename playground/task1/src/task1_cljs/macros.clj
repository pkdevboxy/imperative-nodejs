(ns task1.macros)

(defmacro node-require [ & bindings]
  `(do
     ~@(for [[name]  bindings]
         `(def ^:private ~name (js/require ~(str name))))))

(defmacro <? [chan]
  `(task1.err/throw-err
    (cljs.core.async/<! ~chan)))
