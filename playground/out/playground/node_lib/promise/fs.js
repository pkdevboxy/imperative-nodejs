// Compiled by ClojureScript 0.0-3308 {:target :nodejs}
goog.provide('playground.node_lib.promise.fs');
goog.require('cljs.core');
goog.require('promesa.core');
goog.require('playground.node_lib.promise.utils');
playground.node_lib.promise.fs.fs = require("fs");
/**
 * Reads file contents into a promise
 */
playground.node_lib.promise.fs.read_file = (function playground$node_lib$promise$fs$read_file(path){
if(cljs.core.string_QMARK_){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,new cljs.core.Symbol(null,"string?","string?",-1129175764,null)))].join('')));
}

if(cljs.core.truth_(path)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,new cljs.core.Symbol(null,"path","path",1452340359,null)))].join('')));
}

return playground.node_lib.promise.utils.callback__GT_promise.call(null,playground.node_lib.promise.fs.fs.readFile).call(null,path);
});

//# sourceMappingURL=fs.js.map