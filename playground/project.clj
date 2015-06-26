(defproject playground "0.1.0-SNAPSHOT"
  :description "FIXME: write this!"
  :url "http://example.com/FIXME"

  :dependencies [[org.clojure/clojure "1.7.0-beta2"]
                 [org.clojure/clojurescript "0.0-3308"]
                 [org.clojure/core.async "0.1.346.0-17112a-alpha"]
                 [funcool/promesa "0.1.3"]]

  :node-dependencies [[source-map-support "0.2.8"]
                      [async "^1.2.1"]
                      [bluebird "^2.9.30"]]

  :plugins [[lein-cljsbuild "1.0.4"]
            [lein-npm "0.4.0"]
            [lein-coffeescript "0.1.7"]
            [lein-auto "0.1.2"]]

  :profiles {:dev {:dependencies [[com.cemerick/piggieback "0.2.1"]
                                  [org.clojure/tools.nrepl "0.2.10"]]
                   :repl-options {:nrepl-middleware [cemerick.piggieback/wrap-cljs-repl]}}}

  :auto {"coffeescript" {:file-pattern #"\.coffee$"}}

  :hooks [lein-coffeescript.plugin
          leiningen.cljsbuild]

  :source-paths ["src"]

  :coffeescript [{:sources "src/playground/task1/coffee/"
                  :output "out/playground/task1/coffee"}

                 {:sources "src/playground/task2/coffee/"
                  :output "out/playground/task2/coffee"}]

  :aliases {"test" ["do" "coffeescript" ["cljsbuild" "test" "all"]]

            "test-task1" ["do" "coffeescript" ["cljsbuild" "test" "task1"]]
            "test-task2" ["do" "coffeescript" ["cljsbuild" "test" "task2"]]
            "test-task3" ["do" "coffeescript" ["cljsbuild" "test" "task3"]]}


  :cljsbuild
  {:test-commands
   {"all" ["node" "test.js"]
    "task1" ["node" "test.js" "task1"]
    "task2" ["node" "test.js" "task2"]
    "task3" ["node" "test.js" "task3"]}

   :builds [{:id "playground"
             :source-paths ["src" "test"]
             :notify-command ["node" "test.js" "task3"]

             :compiler {:output-to "out/playground.js"
                        :output-dir "out"
                        :target :nodejs
                        :optimizations :none
                        :source-map true}}]})
