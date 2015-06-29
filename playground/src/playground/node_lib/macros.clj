(ns playground.node-lib.macros)

(defmacro node-require
  "Imports node modules.
   Example: `(node-require fs http)`"
  [& bindings]
  `(do
     ~@(for [name bindings]
         `(def ~name (js/require ~(str name))))))


(defmacro <?
  "Fetches a value from chan like <! an throws it if it is an error."
  [chan]
  `(playground.node-lib.errors/throw-error
    (cljs.core.async/<! ~chan)))


(defmacro go?
  "Like go macro, but redirects unhandled exceptions to the resulting channel"
  [& body]

  (let [e (gensym "e")]
    `(cljs.core.async.macros/go
       (try
         ~@body
         (catch js/Error ~e
           ~e)))))

(defmacro go-loop?
  "Like (go? (loop ...))"
  [bindings & body]
  `(go? (loop ~bindings ~@body)))


(declare cps-transform)


(defmacro do->
  "for-like comprehension for callback based API.

  (do-> [[err data] (f arg1 arg2)]
    body)

  is transformed into

  (f arg1 arg2 (fn [err data] body)).

  Sequential calls are possible

  (do-> [result1 (f arg1)
         result2 (g result1)]
    body)

  Parallel calls are possible

  (do-> [[result1 result2] [(f arg1) (g arg2)]]
    body)"
  [bindings & body]

  (cps-transform bindings body))


(defn- names->args [names]
  {:pre [(or (symbol? names)
             (vector? names))]}

  (if (symbol? names)
    [names]
    names))


(defn- params->map [params]
  (into {}
        (map-indexed (fn [i param] [param i]) params)))


(defn- parallel-step [params calls continuation]
  {:pre (= (count params) (count calls))}
  (let [results (gensym "results")
        continue (gensym "continue")]

    `(let [~results (atom {})
           ~continue (fn [~(params->map params)] ~continuation)]
       (do
         ~@(map-indexed
            (fn [i call]
              (concat call
                      `((fn [& args#]
                          (swap! ~results assoc ~i args#)
                          (if (= (count @~results) ~(count calls))
                            (~continue @~results))))))
            calls)))))


(defn- cont-step [names call continuation]
  {:pre [(or (not (vector? call))
            (vector? names))]}

  (if (vector? call)
    (parallel-step (map names->args names) call continuation)
    (concat call `((fn ~(names->args names) ~continuation)))))


(defn- cps-transform [bindings body]
  {:pre (even? (count bindings))}
  (if (empty? bindings)
    `(do ~@body)

    (let [[names call] (take 2 bindings)
          continuation (cps-transform (drop 2 bindings) body)]
      (cont-step names call continuation))))
