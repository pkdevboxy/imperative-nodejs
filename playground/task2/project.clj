(defproject task2 "0.1.0-SNAPSHOT"
  :description "FIXME: write this!"
  :url "http://example.com/FIXME"

  :dependencies [[org.clojure/clojure "1.7.0-beta2"]
                 [org.clojure/clojurescript "0.0-3308"]
                 [org.clojure/core.async "0.1.346.0-17112a-alpha"]]

  :node-dependencies [[source-map-support "0.2.8"]]

  :plugins [[lein-cljsbuild "1.0.4"]
            [lein-npm "0.4.0"]
            [lein-coffeescript "0.1.7"]
            [lein-auto "0.1.2"]]

  :auto {"coffeescript" {:file-pattern #"\.coffee$"}}

  :hooks [lein-coffeescript.plugin
          leiningen.cljsbuild]

  :source-paths ["src"]

  :coffeescript {:sources "src/coffee/*.coffee"
                 :output "out/coffee"}


  :cljsbuild {
    :builds [{:id "task2"
              :source-paths ["src"]
              :compiler {
                :output-to "out/task2.js"
                :output-dir "out"
                :target :nodejs
                :optimizations :none
                :source-map true}}]})
