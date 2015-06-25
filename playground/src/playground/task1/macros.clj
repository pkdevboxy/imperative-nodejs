(ns playground.task1.macros)

(defmacro node-require [ & bindings]
  `(do
     ~@(for [[name]  bindings]
         `(def ^:private ~name (js/require ~(str name))))))

(defmacro <? [chan]
  `(playground.task1.err/throw-err
    (cljs.core.async/<! ~chan)))
