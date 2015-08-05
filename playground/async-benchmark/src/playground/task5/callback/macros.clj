(ns playground.task5.callback.macros)


(defn transform [bindings error-handler body]
  (if-let [[args form] (first bindings)]
    (let [cont (transform (next bindings) error-handler body)]
      (if (= args :let)
        `(let ~form
           ~cont)

        `(~(first form) ~@(next form)
          (fn [err# ~@args]
            (if-not (nil? err#)
              (~error-handler err#)
              ~cont)))))

    `(do ~@body)))

(defmacro try-> [bindings catch & body]
  (when-not (and
             (vector? bindings)
             (even? (count bindings))
             (= 2 (count catch))
             (= 'catch-> (first catch)))
    (throw (IllegalArgumentException. "bad try->")))

  (let [bindings (map (fn [[names call]]
                        [(if (symbol? names)
                           [names]
                           names)
                         call])
                      (partition 2 bindings))
        error-handler (gensym "error-handler")]

    `(let [~error-handler ~(second catch)]
       ~(transform bindings error-handler body))))

(macroexpand-1
 '(try-> [x (f 1)
          :let [t (inc x)]
          [y z] (g t)]
    (catch-> callback)
    (callback nil (+ x y z))))
