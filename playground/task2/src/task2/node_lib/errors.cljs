(ns task2.node-lib.errors)

(defn- is-error? [x]
  (instance? js/Error x))


(defn throw-error
  "Throws x if it is an error, otherwise does nothing"
  [x]
  (when (is-error? x)
    (throw x))
  x)

(defn lift
  "Lifts f to work with possibly error arguments.

   If any argument is an error, returns it, otherwise acts like f"
  [f]
  (fn [& args]
    (let [errors (filter is-error? args)]
      (if (empty? errors)
        (apply f args)
        (first errors)))))
