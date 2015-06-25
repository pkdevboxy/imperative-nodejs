// Compiled by ClojureScript 0.0-3308 {:target :nodejs}
goog.provide('playground.task2.cljs_callbacks');
goog.require('cljs.core');
goog.require('playground.node_lib.utils');
playground.task2.cljs_callbacks.fs = require("fs");
playground.task2.cljs_callbacks.traverse = (function playground$task2$cljs_callbacks$traverse(k,callback){
if(cljs.core.number_QMARK_){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,new cljs.core.Symbol(null,"number?","number?",-1747282210,null)))].join('')));
}

if(cljs.core.truth_(k)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,new cljs.core.Symbol(null,"k","k",-505765866,null)))].join('')));
}

var go = (function playground$task2$cljs_callbacks$traverse_$_go(i,path){
return playground.task2.cljs_callbacks.fs.readFile([cljs.core.str(i)].join(''),(function (p1__9656_SHARP_,p2__9657_SHARP_){
return on_read_file.call(null,p1__9656_SHARP_,p2__9657_SHARP_,cljs.core.conj.call(null,path,i));
}));
});
var on_read_file = (function playground$task2$cljs_callbacks$traverse_$_on_read_file(err,data,path){
if(cljs.core.truth_(err)){
return callback.call(null,err);
} else {
var j = playground.node_lib.utils.str__GT_int.call(null,data);
if(((0) < j)){
return go.call(null,j,path);
} else {
return callback.call(null,null,path);
}
}
});
return go.call(null,k,cljs.core.PersistentVector.EMPTY);
});

//# sourceMappingURL=cljs_callbacks.js.map