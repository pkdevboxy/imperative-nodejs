try {
    require("source-map-support").install();
} catch(err) {
}
require("./out/goog/bootstrap/nodejs.js");
require("./out/task1.js");
goog.require("task1.core");
goog.require("cljs.nodejscli");
