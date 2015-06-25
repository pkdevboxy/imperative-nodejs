goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

return cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__10565__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__10565 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__10566__i = 0, G__10566__a = new Array(arguments.length -  0);
while (G__10566__i < G__10566__a.length) {G__10566__a[G__10566__i] = arguments[G__10566__i + 0]; ++G__10566__i;}
  args = new cljs.core.IndexedSeq(G__10566__a,0);
} 
return G__10565__delegate.call(this,args);};
G__10565.cljs$lang$maxFixedArity = 0;
G__10565.cljs$lang$applyTo = (function (arglist__10567){
var args = cljs.core.seq(arglist__10567);
return G__10565__delegate(args);
});
G__10565.cljs$core$IFn$_invoke$arity$variadic = G__10565__delegate;
return G__10565;
})()
;
});
