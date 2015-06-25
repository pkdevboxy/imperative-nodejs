// Compiled by ClojureScript 0.0-3308 {:target :nodejs}
goog.provide('playground.node_lib.errors');
goog.require('cljs.core');
playground.node_lib.errors.is_error_QMARK_ = (function playground$node_lib$errors$is_error_QMARK_(x){
return (x instanceof Error);
});
/**
 * Throws x if it is an error, otherwise does nothing
 */
playground.node_lib.errors.throw_error = (function playground$node_lib$errors$throw_error(x){
if(cljs.core.truth_(playground.node_lib.errors.is_error_QMARK_.call(null,x))){
throw x;
} else {
}

return x;
});
/**
 * Lifts f to work with possibly error arguments.
 * 
 * If any argument is an error, returns it, otherwise acts like f
 */
playground.node_lib.errors.lift = (function playground$node_lib$errors$lift(f){
return (function() { 
var G__9649__delegate = function (args){
var errors = cljs.core.filter.call(null,playground.node_lib.errors.is_error_QMARK_,args);
if(cljs.core.empty_QMARK_.call(null,errors)){
return cljs.core.apply.call(null,f,args);
} else {
return cljs.core.first.call(null,errors);
}
};
var G__9649 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__9650__i = 0, G__9650__a = new Array(arguments.length -  0);
while (G__9650__i < G__9650__a.length) {G__9650__a[G__9650__i] = arguments[G__9650__i + 0]; ++G__9650__i;}
  args = new cljs.core.IndexedSeq(G__9650__a,0);
} 
return G__9649__delegate.call(this,args);};
G__9649.cljs$lang$maxFixedArity = 0;
G__9649.cljs$lang$applyTo = (function (arglist__9651){
var args = cljs.core.seq(arglist__9651);
return G__9649__delegate(args);
});
G__9649.cljs$core$IFn$_invoke$arity$variadic = G__9649__delegate;
return G__9649;
})()
;
});

//# sourceMappingURL=errors.js.map