(defproject playground "0.1.0-SNAPSHOT"
  :description "FIXME: write this!"
  :url "http://example.com/FIXME"

  :dependencies [[org.clojure/clojure "1.7.0"]
                 [org.clojure/clojurescript "0.0-3308"]
                 [org.clojure/core.async "0.1.346.0-17112a-alpha"]
                 [funcool/promesa "0.1.3"]
                 [clj-http "1.1.2"]
                 [org.clojure/data.json "0.2.6"]
                 [camel-snake-kebab "0.3.2"]
                 [prismatic/schema "0.4.4-SNAPSHOT"]]

  :node-dependencies [[source-map-support "0.2.8"]
                      [async "^1.2.1"]
                      [bluebird "^2.9.30"]
                      [benchmark "1.0.0"]]

  :plugins [[lein-cljsbuild "1.0.6"]
            [lein-npm "0.5.0"]
            [lein-coffeescript "0.1.7"]
            [lein-auto "0.1.2"]]

  :profiles {:dev {:dependencies [[com.cemerick/piggieback "0.2.1"]
                                  [org.clojure/tools.nrepl "0.2.10"]]
                   :repl-options {:nrepl-middleware [cemerick.piggieback/wrap-cljs-repl]}}}

  :auto {"coffeescript" {:file-pattern #"\.coffee$"}}

  :hooks [lein-coffeescript.plugin
          leiningen.cljsbuild]

  :source-paths ["src" "test" "bench"]

  :coffeescript [{:sources ["src/coffee/"]
                  :output  "out/playground"}]

  :aliases {"test" ["do" "coffeescript" ["cljsbuild" "test" "all"]]

            "test-task1" ["do" "coffeescript" ["cljsbuild" "test" "task1"]]
            "test-task2" ["do" "coffeescript" ["cljsbuild" "test" "task2"]]
            "test-task3" ["do" "coffeescript" ["cljsbuild" "test" "task3"]]
            "test-task4" ["do" "coffeescript" ["cljsbuild" "test" "task4"]]
            "test-task5" ["do" "coffeescript" ["cljsbuild" "test" "task5"]]}


  :cljsbuild
  {:test-commands
   {"all" ["node" "out/test.js"]
    "task1" ["node" "out/test.js" "task1"]
    "task2" ["node" "out/test.js" "task2"]
    "task3" ["node" "out/test.js" "task3"]
    "task4" ["node" "out/test.js" "task4"]
    "task5" ["node" "out/test.js" "task5"]}

   :builds [{:id "dev"
             :source-paths ["src" "test"]
             :notify-command ["node" "out/test.js"]

             :compiler {:main playground.test-runner
                        :output-to "out/test.js"
                        :output-dir "out/dev"
                        :target :nodejs
                        :pretty-print true
                        :optimizations :none
                        :source-map true}}

            {:id "bench"
             :source-paths ["src" "bench"]

             :compiler {:output-to "out/bench.js"
                        :output-dir "out/bench"
                        :language-in  :ecmascript5
                        :language-out :ecmascript5
                        :target :nodejs
                        :pretty-print true
                        :optimizations :simple}}]})
