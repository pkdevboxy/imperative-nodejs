(defproject playground "0.1.0-SNAPSHOT"
  :license {:name "Apache License 2.0"
            :url "http://www.apache.org/licenses/LICENSE-2.0.html"
            :year 2015
            :key "apache-2.0"}
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
                      [closurecompiler-externs "1.0.4"]
                      [iced-coffee-script "108.0.6"]
                      [iced-runtime "1.0.2"]
                      [babel "5.8.3"]]

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
                  :output  "out/playground"
                  :map true}]

  :aliases {"test" ["do" "coffeescript" ["cljsbuild" "test" "all"]]

            "test-task1" ["do" "coffeescript" ["cljsbuild" "test" "task1"]]
            "test-task2" ["do" "coffeescript" ["cljsbuild" "test" "task2"]]
            "test-task3" ["do" "coffeescript" ["cljsbuild" "test" "task3"]]
            "test-task4" ["do" "coffeescript" ["cljsbuild" "test" "task4"]]
            "test-task5" ["do" "coffeescript" ["cljsbuild" "test" "task5"]]}


  :cljsbuild
  {:test-commands
   {"all" ["node" "--harmony" "out/test.js"]
    "task1" ["node" "--harmony" "out/test.js" "task1"]
    "task2" ["node" "--harmony" "out/test.js" "task2"]
    "task3" ["node" "--harmony" "out/test.js" "task3"]
    "task4" ["node" "--harmony" "out/test.js" "task4"]
    "task5" ["node" "--harmony" "out/test.js" "task5"]}

   :builds [{:id "dev"
             :source-paths ["src" "test"]
             :notify-command ["node" "--harmony" "out/test.js"]

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
                        :print-input-delimiter true
                        :closure-defines {"goog.DEBUG" false}
                        :externs ["node_modules/closurecompiler-externs/assert.js"
                                  "node_modules/closurecompiler-externs/buffer.js"
                                  "node_modules/closurecompiler-externs/child_process.js"
                                  "node_modules/closurecompiler-externs/cluster.js"
                                  "node_modules/closurecompiler-externs/core.js"
                                  "node_modules/closurecompiler-externs/crypto.js"
                                  "node_modules/closurecompiler-externs/dgram.js"
                                  "node_modules/closurecompiler-externs/dns.js"
                                  "node_modules/closurecompiler-externs/domain.js"
                                  "node_modules/closurecompiler-externs/events.js"
                                  "node_modules/closurecompiler-externs/fs.js"
                                  "node_modules/closurecompiler-externs/http.js"
                                  "node_modules/closurecompiler-externs/https.js"
                                  "node_modules/closurecompiler-externs/net.js"
                                  "node_modules/closurecompiler-externs/os.js"
                                  "node_modules/closurecompiler-externs/path.js"
                                  "node_modules/closurecompiler-externs/process.js"
                                  "node_modules/closurecompiler-externs/punycode.js"
                                  "node_modules/closurecompiler-externs/querystring.js"
                                  "node_modules/closurecompiler-externs/readline.js"
                                  "node_modules/closurecompiler-externs/repl.js"
                                  "node_modules/closurecompiler-externs/stream.js"
                                  "node_modules/closurecompiler-externs/string_decoder.js"
                                  "node_modules/closurecompiler-externs/tls.js"
                                  "node_modules/closurecompiler-externs/tty.js"
                                  "node_modules/closurecompiler-externs/url.js"
                                  "node_modules/closurecompiler-externs/util.js"
                                  "node_modules/closurecompiler-externs/vm.js"
                                  "node_modules/closurecompiler-externs/zlib.js"]
                        :optimizations :simple
                        :elide-asserts true
                        :source-map "out/bench.js.map"}}]})
