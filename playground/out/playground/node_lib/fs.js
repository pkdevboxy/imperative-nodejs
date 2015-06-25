// Compiled by ClojureScript 0.0-3308 {:target :nodejs}
goog.provide('playground.node_lib.fs');
goog.require('cljs.core');
goog.require('playground.node_lib.utils');
playground.node_lib.fs.fs = require("fs");
/**
 * Creates a chanel with text file contents
 */
playground.node_lib.fs._LT_read_file = (function playground$node_lib$fs$_LT_read_file(path){
if(cljs.core.string_QMARK_){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,new cljs.core.Symbol(null,"string?","string?",-1129175764,null)))].join('')));
}

if(cljs.core.truth_(path)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,new cljs.core.Symbol(null,"path","path",1452340359,null)))].join('')));
}

return playground.node_lib.utils._LT__LT__LT_.call(null,playground.node_lib.fs.fs.readFile,path);
});

//# sourceMappingURL=fs.js.map