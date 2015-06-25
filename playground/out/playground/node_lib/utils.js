// Compiled by ClojureScript 0.0-3308 {:target :nodejs}
goog.provide('playground.node_lib.utils');
goog.require('cljs.core');
goog.require('cljs.core.async');
/**
 * Calls a CPS-style function f with args and returns a channel with result
 */
playground.node_lib.utils._LT__LT__LT_ = (function playground$node_lib$utils$_LT__LT__LT_(){
var argseq__5371__auto__ = ((((1) < arguments.length))?(new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,(1)),(0))):null);
return playground.node_lib.utils._LT__LT__LT_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5371__auto__);
});

playground.node_lib.utils._LT__LT__LT_.cljs$core$IFn$_invoke$arity$variadic = (function (f,args){
var result = cljs.core.async.chan.call(null);
cljs.core.apply.call(null,f,cljs.core.concat.call(null,args,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [((function (result){
return (function (err,data){
cljs.core.async.put_BANG_.call(null,result,(function (){var or__4331__auto__ = err;
if(cljs.core.truth_(or__4331__auto__)){
return or__4331__auto__;
} else {
return data;
}
})());

return cljs.core.async.close_BANG_.call(null,result);
});})(result))
], null)));

return result;
});

playground.node_lib.utils._LT__LT__LT_.cljs$lang$maxFixedArity = (1);

playground.node_lib.utils._LT__LT__LT_.cljs$lang$applyTo = (function (seq9524){
var G__9525 = cljs.core.first.call(null,seq9524);
var seq9524__$1 = cljs.core.next.call(null,seq9524);
return playground.node_lib.utils._LT__LT__LT_.cljs$core$IFn$_invoke$arity$variadic(G__9525,seq9524__$1);
});
/**
 * Turns a CPS-style function f into a channel returning function
 */
playground.node_lib.utils.callback__GT_chan = (function playground$node_lib$utils$callback__GT_chan(f){
return (function() { 
var G__9526__delegate = function (args){
return cljs.core.apply.call(null,playground.node_lib.utils._LT__LT__LT_,f,args);
};
var G__9526 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__9527__i = 0, G__9527__a = new Array(arguments.length -  0);
while (G__9527__i < G__9527__a.length) {G__9527__a[G__9527__i] = arguments[G__9527__i + 0]; ++G__9527__i;}
  args = new cljs.core.IndexedSeq(G__9527__a,0);
} 
return G__9526__delegate.call(this,args);};
G__9526.cljs$lang$maxFixedArity = 0;
G__9526.cljs$lang$applyTo = (function (arglist__9528){
var args = cljs.core.seq(arglist__9528);
return G__9526__delegate(args);
});
G__9526.cljs$core$IFn$_invoke$arity$variadic = G__9526__delegate;
return G__9526;
})()
;
});
/**
 * Parses integer. Throws if not an integer.
 */
playground.node_lib.utils.str__GT_int = (function playground$node_lib$utils$str__GT_int(s){
if(cljs.core.string_QMARK_){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,new cljs.core.Symbol(null,"string?","string?",-1129175764,null)))].join('')));
}

if(cljs.core.truth_(s)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,new cljs.core.Symbol(null,"s","s",-948495851,null)))].join('')));
}

var result = parseInt(s,(10));
if(cljs.core.truth_(isNaN(result))){
throw Error([cljs.core.str("str->int: "),cljs.core.str(s),cljs.core.str(" is not an integer!")].join(''));
} else {
}

return result;
});

//# sourceMappingURL=utils.js.map