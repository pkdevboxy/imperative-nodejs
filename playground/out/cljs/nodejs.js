// Compiled by ClojureScript 0.0-3308 {:target :nodejs}
goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

return cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__13705__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__13705 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__13706__i = 0, G__13706__a = new Array(arguments.length -  0);
while (G__13706__i < G__13706__a.length) {G__13706__a[G__13706__i] = arguments[G__13706__i + 0]; ++G__13706__i;}
  args = new cljs.core.IndexedSeq(G__13706__a,0);
} 
return G__13705__delegate.call(this,args);};
G__13705.cljs$lang$maxFixedArity = 0;
G__13705.cljs$lang$applyTo = (function (arglist__13707){
var args = cljs.core.seq(arglist__13707);
return G__13705__delegate(args);
});
G__13705.cljs$core$IFn$_invoke$arity$variadic = G__13705__delegate;
return G__13705;
})()
;
});

//# sourceMappingURL=nodejs.js.map