try {
    require("source-map-support").install();
} catch(err) {
}
require("./out/goog/bootstrap/nodejs.js");
require("./out/hello_cljs.js");
goog.require("hello_cljs.core");
goog.require("cljs.nodejscli");
