try {
    require("source-map-support").install();
} catch(err) {
}
require("./out/goog/bootstrap/nodejs.js");
require("./out/task2.js");
goog.require("task2.test_runner");
goog.require("cljs.nodejscli");
