try {
    require("source-map-support").install();
} catch(err) {
}
require("./out/goog/bootstrap/nodejs.js");
require("./out/playground.js");
goog.require("playgorund.task2.core");
goog.require("cljs.nodejscli");
