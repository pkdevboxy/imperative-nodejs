// Compiled by ClojureScript 0.0-3308 {:target :nodejs}
goog.provide('playground.task1.err');
goog.require('cljs.core');
goog.require('cljs.core.async');
playground.task1.err.is_err = (function playground$task1$err$is_err(x){
return (x instanceof Error);
});
playground.task1.err.throw_err = (function playground$task1$err$throw_err(x){
if(cljs.core.truth_(playground.task1.err.is_err.call(null,x))){
throw x;
} else {
}

return x;
});
playground.task1.err.lift = (function playground$task1$err$lift(f){
return (function() { 
var G__9535__delegate = function (args){
var errors = cljs.core.filter.call(null,playground.task1.err.is_err,args);
if(cljs.core.empty_QMARK_.call(null,errors)){
return cljs.core.apply.call(null,f,args);
} else {
return cljs.core.first.call(null,errors);
}
};
var G__9535 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__9536__i = 0, G__9536__a = new Array(arguments.length -  0);
while (G__9536__i < G__9536__a.length) {G__9536__a[G__9536__i] = arguments[G__9536__i + 0]; ++G__9536__i;}
  args = new cljs.core.IndexedSeq(G__9536__a,0);
} 
return G__9535__delegate.call(this,args);};
G__9535.cljs$lang$maxFixedArity = 0;
G__9535.cljs$lang$applyTo = (function (arglist__9537){
var args = cljs.core.seq(arglist__9537);
return G__9535__delegate(args);
});
G__9535.cljs$core$IFn$_invoke$arity$variadic = G__9535__delegate;
return G__9535;
})()
;
});

//# sourceMappingURL=err.js.map