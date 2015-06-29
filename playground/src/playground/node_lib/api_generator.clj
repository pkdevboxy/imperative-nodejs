(ns playground.node-lib.api-generator
  (:require [camel-snake-kebab.core :refer [->kebab-case]]
            [clj-http.client :as client]
            [clojure.data.json :as json]
            [clojure.pprint :as pprint]))

(declare fetch-json-spec!
         generate-functions
         ns-for)


(defn generate-ns-for!
  "Prints clojurescript API wrapper for node-module"
  [node-module]
  {:pre (symbol? node-module)}

  (let [json-spec (fetch-json-spec! node-module)]

    (pprint/write
     `((~'ns ~(ns-for node-module)
         (:require [cljs.nodejs :as ~'nodejs]))

       (def ^:private ~node-module (nodejs/require ~(str node-module)))
       ~@(generate-functions node-module json-spec))

     :dispatch pprint/code-dispatch)))


(defn- ns-for [node-module]
  (symbol (str "playground.node-api." node-module)))


(defn- url-for-module [node-module]
  (format "https://nodejs.org/api/%s.json" node-module))


(defn- fetch-json-spec! [node-module]
  (let [url (url-for-module node-module)]
    (:body
     (client/get url {:as :json}))))


(defn- extract-methods [json-spec]
  {:pre (= 1 (count (:modules json-spec)))}
  (get-in json-spec [:modules 0 :methods]))


(defn- clean-name [name]
  (symbol (apply str (remove #{\]} name))))


(defn- read-method [method-spec]
  (let [params (->> (get-in method-spec [:signatures 0 :params])
                    (map :name)
                    (map clean-name)
                    vec)]
    {:name (symbol (->kebab-case (:name method-spec)))
     :node-name (symbol (:name method-spec))
     :doc (:desc method-spec)
     :params params
     :is-async (= 'callback (last params))}))


(defn- generate-function [node-module
                          {name :name
                           node-name :node-name
                           params :params
                           is-async :is-async}]
  (let [call (symbol (str "." node-name))
        meta-annotations (if is-async [(symbol "^:node-async")] [])]

    `(~'defn ~@meta-annotations ~name
       [~@params]
       (~call ~node-module ~@params))))

(defn- generate-functions [node-module json-spec]
  (->> json-spec
       extract-methods
       (map read-method)
       (map #(generate-function node-module %))))
