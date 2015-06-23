(defproject task1-cljs "0.1.0-SNAPSHOT"
  :description "FIXME: write this!"
  :url "http://example.com/FIXME"

  :dependencies [[org.clojure/clojure "1.7.0-beta2"]
                 [org.clojure/clojurescript "0.0-3308"]]

  :node-dependencies [[source-map-support "0.2.8"]
                      [async "^1.2.1"]
                      [bluebird "^2.9.30"]]

  :plugins [[lein-cljsbuild "1.0.6"]
            [lein-npm "0.5.0"]
            [lein-coffeescript "0.1.7"]
            [lein-auto "0.1.2"]]

  :auto {"coffeescript" {:file-pattern #"\.coffee$"}}

  :hooks [lein-coffeescript.plugin
          leiningen.cljsbuild]

  :source-paths ["src"]

  :coffeescript {:sources "src/coffee/*.coffee"
                 :output "out/coffee"}

  :cljsbuild {
    :builds [{:id "task1-cljs"
              :source-paths ["src"]
              :compiler {
                :output-to "out/task1_cljs.js"
                :output-dir "out"
                :target :nodejs
                :optimizations :none
                :source-map true}}]})
