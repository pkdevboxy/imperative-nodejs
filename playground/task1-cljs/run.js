try {
    require("source-map-support").install();
} catch(err) {
}
require("./out/goog/bootstrap/nodejs.js");
require("./out/task1_cljs.js");
goog.require("task1_cljs.core");
goog.require("cljs.nodejscli");
