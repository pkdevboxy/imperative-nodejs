(ns playground.task5.callback.file-storage
  (:require [schema.core :as s]
            [playground.node-api.fs :as fs]))


(s/defrecord FileStorage [path :- s/Str])
(def FileDescriptor s/Int)


(s/defn new-file-storage :- FileStorage
  [path :- s/Str]
  (->FileStorage path))


(s/defn ^:private path-to-file :- s/Str
  [storage :- FileStorage
   name    :- s/Str]

  (path/join (:path storage) name))


(s/defn ^:private open-new
  [storage :- FileStorage
   name    :- s/Str
   callback]

  (fs/open (path-to-file storage name) "w") callback)


(s/defn ^:private open-for-writting
  [storage :- FileStorage
   name    :- s/Str
   callback]

  (fs/open (path-to-file storage name) "r+") callback)


(s/defn ^:private open-for-reading
  [storage :- FileStorage
   name    :- s/Str
   callback]

  (fs/open (path-to-file storage name) "r") callback)


(s/defn ^:private close-fd!
  [fd :- FileDescriptor]
  (fs/close fd (fn []
               ; ignore possible error
                 )))


(s/defn ^:private zero-buffer :- js/Buffer
  [size :- s/Int]
  (doto (js/Buffer. size)
    (.fill 0)))


(s/defn add-file
  "Adds empty file to the storage."
  [storage :- FileStorage
   name    :- s/Str
   size    :- s/Int
   callback]

  (try-> [fd (open-new storage name)
          _ (write-to-fd fd (zero-buffer size) 0)]
    (catch-> callback)

    (callback)))


(s/defn write-to-file
  "Writes the buffer to the file."

  [storage :- FileStorage
   name    :- s/Str
   buffer  :- js/Buffer
   offset  :- s/Int
   callback]

  (try-> [fd (open-for-writting storage name)
          _ (write-to-fd fd buffer offset)]
    (catch-> callback)

    (callback)))


(s/defn <read-c-str-from-file
  "Reads from the file to the buffer."

  [storage :- FileStorage
   name    :- s/Str
   offset  :- s/Int
   callback]

  (try-> [fd (open-for-readnig storage name)
          buffer (read-from-fd fd offset)]
    (catch-> callback)

    (callback buffer)))


(s/defn ^:private write-to-fd
  [storage :- FileStorage
   fd :- FileDescriptor
   buffer :- js/Buffer
   offset :- s/Int
   callback]

  (doto (fs/create-write-stream nil #js {:fd fd :start offset})
    (.on "error" (fn [] "empty" ))
    (.write buffer (fn [error]
                     (close-fd! fd)
                     (callback error)))))


(s/defn ^:private read-from-fd
  [storage :- FileStorage
   fd      :- FileDescriptor
   offset  :- s/Int
   callback]
  (let [stream (ds/create-read-stream nil #js {:fd fd
                                               :start start
                                               :autoClose false})
        chunks #js []
        finished? (volatile! false)
        finish! (fn [error]
                  (when-not @finished?
                    (vset! finished? true)
                    (.pause stream)
                    (close-fd! fd)
                    (if (nil? error)
                      (callback nil (.concat js/Buffer chunks))
                      (callback error))))])

  (doto stream
    (.on "error" finish!)
    (.on "end" finish!)
    (.on "data" (fn [chunk]
                  (when-not @finished?
                    (let [cstr (extract-c-str chunk)]
                      (.push chunks cstr)
                      (when (not= (.-length cstr) (.-length chunk))
                        (finish!))))))))