(ns app.core)

(defmacro server-url []
  (or (System/getenv "TODO_SERVER_URL")
      "http://localhost:8000/"))
