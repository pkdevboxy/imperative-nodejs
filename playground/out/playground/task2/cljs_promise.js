// Compiled by ClojureScript 0.0-3308 {:target :nodejs}
goog.provide('playground.task2.cljs_promise');
goog.require('cljs.core');
goog.require('promesa.core');
goog.require('playground.node_lib.promise.fs');
goog.require('playground.node_lib.utils');
playground.task2.cljs_promise.traverse = (function playground$task2$cljs_promise$traverse(k){
if(cljs.core.number_QMARK_){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,new cljs.core.Symbol(null,"number?","number?",-1747282210,null)))].join('')));
}

if(cljs.core.truth_(k)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,new cljs.core.Symbol(null,"k","k",-505765866,null)))].join('')));
}

var step = (function playground$task2$cljs_promise$traverse_$_step(i,path){
return promesa.core.then.call(null,promesa.core.then.call(null,playground.node_lib.promise.fs.read_file.call(null,[cljs.core.str(i)].join('')),playground.node_lib.utils.str__GT_int),(function (j){
if(((0) < j)){
return playground$task2$cljs_promise$traverse_$_step.call(null,j,cljs.core.conj.call(null,path,i));
} else {
return cljs.core.conj.call(null,path,i);
}
}));
});
return step.call(null,k,cljs.core.PersistentVector.EMPTY);
});

//# sourceMappingURL=cljs_promise.js.map