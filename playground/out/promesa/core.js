// Compiled by ClojureScript 0.0-3308 {:target :nodejs}
goog.provide('promesa.core');
goog.require('cljs.core');
goog.require('cats.core');
goog.require('cats.protocols');
cljs.core.load_file("out/bluebird.js");
promesa.core.promise_monad = (function (){
if(typeof promesa.core.t10674 !== 'undefined'){
} else {

/**
* @constructor
*/
promesa.core.t10674 = (function (meta10675){
this.meta10675 = meta10675;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
promesa.core.t10674.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_10676,meta10675__$1){
var self__ = this;
var _10676__$1 = this;
return (new promesa.core.t10674(meta10675__$1));
});

promesa.core.t10674.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_10676){
var self__ = this;
var _10676__$1 = this;
return self__.meta10675;
});

promesa.core.t10674.prototype.cats$protocols$Functor$ = true;

promesa.core.t10674.prototype.cats$protocols$Functor$fmap$arity$3 = (function (mn,f,mv){
var self__ = this;
var mn__$1 = this;
return promesa.core.then.call(null,mv,f);
});

promesa.core.t10674.prototype.cats$protocols$Monad$ = true;

promesa.core.t10674.prototype.cats$protocols$Monad$mreturn$arity$2 = (function (_,v){
var self__ = this;
var ___$1 = this;
return promesa.core.promise.call(null,v);
});

promesa.core.t10674.prototype.cats$protocols$Monad$mbind$arity$3 = (function (mn,mv,f){
var self__ = this;
var mn__$1 = this;
var ctx = cats.core._STAR_context_STAR_;
return promesa.core.then.call(null,mv,((function (ctx,mn__$1){
return (function (v){
if((function (){var G__10677 = ctx;
if(G__10677){
var bit__5005__auto__ = null;
if(cljs.core.truth_((function (){var or__4331__auto__ = bit__5005__auto__;
if(cljs.core.truth_(or__4331__auto__)){
return or__4331__auto__;
} else {
return G__10677.cats$protocols$MonadTrans$;
}
})())){
return true;
} else {
if((!G__10677.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,cats.protocols.MonadTrans,G__10677);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,cats.protocols.MonadTrans,G__10677);
}
})()){
var _STAR_context_STAR_10678 = cats.core._STAR_context_STAR_;
cats.core._STAR_context_STAR_ = ctx;

try{return f.call(null,v);
}finally {cats.core._STAR_context_STAR_ = _STAR_context_STAR_10678;
}} else {
if((function (){var G__10679 = cats.core._STAR_context_STAR_;
if(G__10679){
var bit__5005__auto__ = null;
if(cljs.core.truth_((function (){var or__4331__auto__ = bit__5005__auto__;
if(cljs.core.truth_(or__4331__auto__)){
return or__4331__auto__;
} else {
return G__10679.cats$protocols$MonadTrans$;
}
})())){
return true;
} else {
if((!G__10679.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,cats.protocols.MonadTrans,G__10679);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,cats.protocols.MonadTrans,G__10679);
}
})()){
return f.call(null,v);
} else {
var _STAR_context_STAR_10680 = cats.core._STAR_context_STAR_;
cats.core._STAR_context_STAR_ = ctx;

try{return f.call(null,v);
}finally {cats.core._STAR_context_STAR_ = _STAR_context_STAR_10680;
}
}
}
});})(ctx,mn__$1))
);
});

promesa.core.t10674.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"meta10675","meta10675",-285927061,null)], null);
});

promesa.core.t10674.cljs$lang$type = true;

promesa.core.t10674.cljs$lang$ctorStr = "promesa.core/t10674";

promesa.core.t10674.cljs$lang$ctorPrWriter = (function (this__4910__auto__,writer__4911__auto__,opt__4912__auto__){
return cljs.core._write.call(null,writer__4911__auto__,"promesa.core/t10674");
});

promesa.core.__GT_t10674 = (function promesa$core$__GT_t10674(meta10675){
return (new promesa.core.t10674(meta10675));
});

}

return (new promesa.core.t10674(cljs.core.PersistentArrayMap.EMPTY));
})()
;
Promise.prototype.cats$protocols$Context$ = true;

Promise.prototype.cats$protocols$Context$get_context$arity$1 = (function (_){
var ___$1 = this;
return promesa.core.promise_monad;
});

Promise.prototype.cats$protocols$Extract$ = true;

Promise.prototype.cats$protocols$Extract$extract$arity$1 = (function (it){
var it__$1 = this;
return it__$1.value();
});

Promise.prototype.cljs$core$IDeref$ = true;

Promise.prototype.cljs$core$IDeref$_deref$arity$1 = (function (it){
var it__$1 = this;
return it__$1.value();
});
/**
 * Return a resolved promise with provided value.
 */
promesa.core.resolved = (function promesa$core$resolved(v){
return Promise.resolve(v);
});
/**
 * Return a rejected promise with provided reason.
 */
promesa.core.rejected = (function promesa$core$rejected(v){
return Promise.reject(v);
});
/**
 * The promise instance constructor.
 */
promesa.core.promise = (function promesa$core$promise(v){
if(cljs.core.fn_QMARK_.call(null,v)){
return (new Promise(v));
} else {
if((v instanceof Error)){
return promesa.core.rejected.call(null,v);
} else {
return promesa.core.resolved.call(null,v);

}
}
});
/**
 * Returns true if `p` is a primise
 * instance.
 */
promesa.core.promise_QMARK_ = (function promesa$core$promise_QMARK_(p){
return (p instanceof Promise);
});
/**
 * Returns true if promise `p` is
 * already fulfilled.
 */
promesa.core.fulfilled_QMARK_ = (function promesa$core$fulfilled_QMARK_(p){
if(cljs.core.truth_(promesa.core.promise_QMARK_.call(null,p))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"promise?","promise?",-283815882,null),new cljs.core.Symbol(null,"p","p",1791580836,null))))].join('')));
}

return p.isFulfilled();
});
/**
 * Returns true if promise `p` is
 * already rejected.
 */
promesa.core.rejected_QMARK_ = (function promesa$core$rejected_QMARK_(p){
if(cljs.core.truth_(promesa.core.promise_QMARK_.call(null,p))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"promise?","promise?",-283815882,null),new cljs.core.Symbol(null,"p","p",1791580836,null))))].join('')));
}

return p.isRejected();
});
/**
 * Returns true if promise `p` is
 * stil pending.
 */
promesa.core.pending_QMARK_ = (function promesa$core$pending_QMARK_(p){
if(cljs.core.truth_(promesa.core.promise_QMARK_.call(null,p))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"promise?","promise?",-283815882,null),new cljs.core.Symbol(null,"p","p",1791580836,null))))].join('')));
}

return p.isPending();
});
/**
 * Returns true if promise `p` is
 * cancelable.
 */
promesa.core.cancellable_QMARK_ = (function promesa$core$cancellable_QMARK_(p){
if(cljs.core.truth_(promesa.core.promise_QMARK_.call(null,p))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"promise?","promise?",-283815882,null),new cljs.core.Symbol(null,"p","p",1791580836,null))))].join('')));
}

return p.isCancellable();
});
/**
 * Given an array of promises, return a promise
 * that is fulfilled  when all the items in the
 * array are fulfilled.
 */
promesa.core.all = (function promesa$core$all(promises){
return Promise.all(cljs.core.clj__GT_js.call(null,promises));
});
/**
 * Given an array of promises, return a promise
 * that is fulfilled when first one item in the
 * array is fulfilled.
 */
promesa.core.any = (function promesa$core$any(promises){
return Promise.any(cljs.core.clj__GT_js.call(null,promises));
});
/**
 * Given an array of promises, return a promise
 * that is fulfilled when `n` number of promises
 * is fulfilled.
 */
promesa.core.some = (function promesa$core$some(n,promises){
return Promise.some(cljs.core.clj__GT_js.call(null,promises),n);
});
/**
 * Given a timeout in miliseconds and optional
 * value, returns a promise that will fulfilled
 * with provided value (or nil) after the
 * time is reached.
 */
promesa.core.delay = (function promesa$core$delay(){
var G__10682 = arguments.length;
switch (G__10682) {
case 1:
return promesa.core.delay.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return promesa.core.delay.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

promesa.core.delay.cljs$core$IFn$_invoke$arity$1 = (function (t){
return promesa.core.delay.call(null,t,null);
});

promesa.core.delay.cljs$core$IFn$_invoke$arity$2 = (function (t,v){
return Promise.delay(v,t);
});

promesa.core.delay.cljs$lang$maxFixedArity = 2;
/**
 * Returns a cancellable promise that will be fulfilled
 * with this promise's fulfillment value or rejection reason.
 * However, if this promise is not fulfilled or rejected
 * within `ms` milliseconds, the returned promise is cancelled
 * with a TimeoutError
 */
promesa.core.timeout = (function promesa$core$timeout(){
var G__10685 = arguments.length;
switch (G__10685) {
case 2:
return promesa.core.timeout.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return promesa.core.timeout.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

promesa.core.timeout.cljs$core$IFn$_invoke$arity$2 = (function (p,t){
return p.timeout(t);
});

promesa.core.timeout.cljs$core$IFn$_invoke$arity$3 = (function (p,t,v){
return p.timeout(t,v);
});

promesa.core.timeout.cljs$lang$maxFixedArity = 3;
/**
 * A chain helper for promises.
 */
promesa.core.then = (function promesa$core$then(p,callback){
return p.then(callback);
});
/**
 * A chain helper like `then` but recevies a
 * resolved promises unrolled as parameters.
 */
promesa.core.spread = (function promesa$core$spread(p,callback){
return p.spread(callback);
});
/**
 * A chain helper that associate handler to
 * the promise that will be called regardless
 * if it is resolved or rejected.
 */
promesa.core.finally$ = (function promesa$core$finally(p,callback){
return p.finally(callback);
});
/**
 * Catch all promise chain helper.
 */
promesa.core.catch$ = (function promesa$core$catch(){
var G__10688 = arguments.length;
switch (G__10688) {
case 2:
return promesa.core.catch$.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return promesa.core.catch$.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

promesa.core.catch$.cljs$core$IFn$_invoke$arity$2 = (function (p,callback){
return p.catch(callback);
});

promesa.core.catch$.cljs$core$IFn$_invoke$arity$3 = (function (p,type,callback){
var type__$1 = (function (){var pred__10689 = cljs.core._EQ_;
var expr__10690 = type;
if(cljs.core.truth_(pred__10689.call(null,new cljs.core.Keyword(null,"timeout","timeout",-318625318),expr__10690))){
return Promise.TimeoutError;
} else {
if(cljs.core.truth_(pred__10689.call(null,new cljs.core.Keyword(null,"cancel","cancel",-1964088360),expr__10690))){
return Promise.CancellationError;
} else {
return type;
}
}
})();
return p.catch(type__$1,callback);
});

promesa.core.catch$.cljs$lang$maxFixedArity = 3;
/**
 * Catch operational errors promise chain helper.
 */
promesa.core.error = (function promesa$core$error(p,callback){
return p.error(callback);
});
/**
 * Get the fulfillment value of this promise.
 * Throws an error if the promise isn't fulfilled.
 */
promesa.core.value = (function promesa$core$value(p){
return p.value();
});
/**
 * Get the rejection reason of this promise.
 * Throws an error if the promise isn't rejected.
 */
promesa.core.reason = (function promesa$core$reason(p){
return p.reason();
});
/**
 * Given a nodejs like function that accepts a callback
 * as the last argument and return an other function
 * that returns a promise.
 */
promesa.core.promisify = (function promesa$core$promisify(callable){
return (function() { 
var G__10693__delegate = function (args){
return promesa.core.promise.call(null,(function (resolve){
var args__$1 = cljs.core.conj.call(null,cljs.core.vec.call(null,args),resolve);
return cljs.core.apply.call(null,callable,args__$1);
}));
};
var G__10693 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__10694__i = 0, G__10694__a = new Array(arguments.length -  0);
while (G__10694__i < G__10694__a.length) {G__10694__a[G__10694__i] = arguments[G__10694__i + 0]; ++G__10694__i;}
  args = new cljs.core.IndexedSeq(G__10694__a,0);
} 
return G__10693__delegate.call(this,args);};
G__10693.cljs$lang$maxFixedArity = 0;
G__10693.cljs$lang$applyTo = (function (arglist__10695){
var args = cljs.core.seq(arglist__10695);
return G__10693__delegate(args);
});
G__10693.cljs$core$IFn$_invoke$arity$variadic = G__10693__delegate;
return G__10693;
})()
;
});
/**
 * Mark a promise as cancellable.
 */
promesa.core.cancelable = (function promesa$core$cancelable(p){
return p.cancellable();
});
/**
 * Cancel a cancellable promise.
 */
promesa.core.cancel = (function promesa$core$cancel(p){
return p.cancel();
});

//# sourceMappingURL=core.js.map