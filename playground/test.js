try {
    require("source-map-support").install();
} catch(err) {
}
require("./out/goog/bootstrap/nodejs.js");
require("./out/playground.js");
goog.require("playground.test_runner");
goog.require("cljs.nodejscli");
