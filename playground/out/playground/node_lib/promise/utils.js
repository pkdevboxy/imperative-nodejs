// Compiled by ClojureScript 0.0-3308 {:target :nodejs}
goog.provide('playground.node_lib.promise.utils');
goog.require('cljs.core');
goog.require('promesa.core');
/**
 * Turns a CPS-stype function f into a promise returning function.
 */
playground.node_lib.promise.utils.callback__GT_promise = (function playground$node_lib$promise$utils$callback__GT_promise(f){
if(cljs.core.fn_QMARK_){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,new cljs.core.Symbol(null,"fn?","fn?",1820990818,null)))].join('')));
}

if(cljs.core.truth_(f)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,new cljs.core.Symbol(null,"f","f",43394975,null)))].join('')));
}

return (function() { 
var G__6089__delegate = function (args){
return promesa.core.promise.call(null,(function (resolve,reject){
var callback = (function (err,data){
if(cljs.core.truth_(err)){
return reject.call(null,err);
} else {
return resolve.call(null,data);
}
});
var args_with_cb = cljs.core.conj.call(null,cljs.core.vec.call(null,args),callback);
return cljs.core.apply.call(null,f,args_with_cb);
}));
};
var G__6089 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__6090__i = 0, G__6090__a = new Array(arguments.length -  0);
while (G__6090__i < G__6090__a.length) {G__6090__a[G__6090__i] = arguments[G__6090__i + 0]; ++G__6090__i;}
  args = new cljs.core.IndexedSeq(G__6090__a,0);
} 
return G__6089__delegate.call(this,args);};
G__6089.cljs$lang$maxFixedArity = 0;
G__6089.cljs$lang$applyTo = (function (arglist__6091){
var args = cljs.core.seq(arglist__6091);
return G__6089__delegate(args);
});
G__6089.cljs$core$IFn$_invoke$arity$variadic = G__6089__delegate;
return G__6089;
})()
;
});

//# sourceMappingURL=utils.js.map