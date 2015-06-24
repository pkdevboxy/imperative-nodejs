(ns task2.node-lib.macros)

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
  `(task2.node-lib.errors/throw-error
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
