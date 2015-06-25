// Compiled by ClojureScript 0.0-3308 {:target :nodejs}
goog.provide('cats.core');
goog.require('cljs.core');
goog.require('cats.protocols');
cats.core._STAR_context_STAR_ = null;
/**
 * Get current context or obtain it from
 * the provided instance.
 */
cats.core.get_current_context = (function cats$core$get_current_context(){
var G__10699 = arguments.length;
switch (G__10699) {
case 0:
return cats.core.get_current_context.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cats.core.get_current_context.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

cats.core.get_current_context.cljs$core$IFn$_invoke$arity$0 = (function (){
return cats.core.get_current_context.call(null,null);
});

cats.core.get_current_context.cljs$core$IFn$_invoke$arity$1 = (function (default$){
if(!((cats.core._STAR_context_STAR_ == null))){
return cats.core._STAR_context_STAR_;
} else {
if((function (){var G__10700 = default$;
if(G__10700){
var bit__5005__auto__ = null;
if(cljs.core.truth_((function (){var or__4331__auto__ = bit__5005__auto__;
if(cljs.core.truth_(or__4331__auto__)){
return or__4331__auto__;
} else {
return G__10700.cats$protocols$Context$;
}
})())){
return true;
} else {
if((!G__10700.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,cats.protocols.Context,G__10700);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,cats.protocols.Context,G__10700);
}
})()){
return cats.protocols.get_context.call(null,default$);
} else {
if((function (){var G__10701 = default$;
if(G__10701){
var bit__5005__auto__ = null;
if(cljs.core.truth_((function (){var or__4331__auto__ = bit__5005__auto__;
if(cljs.core.truth_(or__4331__auto__)){
return or__4331__auto__;
} else {
return G__10701.cats$protocols$Monad$;
}
})())){
return true;
} else {
if((!G__10701.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,cats.protocols.Monad,G__10701);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,cats.protocols.Monad,G__10701);
}
})()){
return default$;
} else {
throw (new Error("You are using return/pure/mzero function without context."));

}
}
}
});

cats.core.get_current_context.cljs$lang$maxFixedArity = 1;
/**
 * Given any value v, return it wrapped in
 * default/effect free context.
 * 
 * This is multiarity function that with arity pure/1
 * it uses the dynamic scope to resolve the current
 * context. With `pure/2`, you can force a specific context
 * value.
 * 
 * Example:
 * 
 * (with-monad either/either-monad
 * (pure 1)
 * ;; => #<Right [1]>
 * 
 */
cats.core.pure = (function cats$core$pure(){
var G__10704 = arguments.length;
switch (G__10704) {
case 1:
return cats.core.pure.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cats.core.pure.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

cats.core.pure.cljs$core$IFn$_invoke$arity$1 = (function (v){
return cats.core.pure.call(null,cats.core.get_current_context.call(null),v);
});

cats.core.pure.cljs$core$IFn$_invoke$arity$2 = (function (ctx,v){
return cats.protocols.pure.call(null,ctx,v);
});

cats.core.pure.cljs$lang$maxFixedArity = 2;
/**
 * This is a monad version of pure and it works
 * identically to it.
 */
cats.core.return$ = (function cats$core$return(){
var G__10707 = arguments.length;
switch (G__10707) {
case 1:
return cats.core.return$.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cats.core.return$.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

cats.core.return$.cljs$core$IFn$_invoke$arity$1 = (function (v){
return cats.core.return$.call(null,cats.core.get_current_context.call(null),v);
});

cats.core.return$.cljs$core$IFn$_invoke$arity$2 = (function (ctx,v){
return cats.protocols.mreturn.call(null,ctx,v);
});

cats.core.return$.cljs$lang$maxFixedArity = 2;
/**
 * Given a value inside monadic context `mv` and any function,
 * applies a function to value of mv.
 * 
 * (bind (either/right 1) (fn [v]
 * (return (inc v))))
 * ;; => #<Right [2]>
 * 
 * For convenience, you may prefer use a `mlet` macro
 * that add a beautiful, let like syntax for
 * compose operations with `bind` function.
 */
cats.core.bind = (function cats$core$bind(mv,f){
if((function (){var G__10714 = cats.core._STAR_context_STAR_;
if(G__10714){
var bit__5005__auto__ = null;
if(cljs.core.truth_((function (){var or__4331__auto__ = bit__5005__auto__;
if(cljs.core.truth_(or__4331__auto__)){
return or__4331__auto__;
} else {
return G__10714.cats$protocols$MonadTrans$;
}
})())){
return true;
} else {
if((!G__10714.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,cats.protocols.MonadTrans,G__10714);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,cats.protocols.MonadTrans,G__10714);
}
})()){
return cats.protocols.mbind.call(null,cats.core._STAR_context_STAR_,mv,f);
} else {
if((cats.core._STAR_context_STAR_ == null)){
if((function (){var G__10715 = cats.protocols.get_context.call(null,mv);
if(G__10715){
var bit__5005__auto__ = null;
if(cljs.core.truth_((function (){var or__4331__auto__ = bit__5005__auto__;
if(cljs.core.truth_(or__4331__auto__)){
return or__4331__auto__;
} else {
return G__10715.cats$protocols$MonadTrans$;
}
})())){
return true;
} else {
if((!G__10715.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,cats.protocols.MonadTrans,G__10715);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,cats.protocols.MonadTrans,G__10715);
}
})()){
var _STAR_context_STAR_10716 = cats.core._STAR_context_STAR_;
cats.core._STAR_context_STAR_ = cats.protocols.get_context.call(null,mv);

try{return cats.protocols.mbind.call(null,cats.core._STAR_context_STAR_,mv,f);
}finally {cats.core._STAR_context_STAR_ = _STAR_context_STAR_10716;
}} else {
if((function (){var G__10717 = cats.core._STAR_context_STAR_;
if(G__10717){
var bit__5005__auto__ = null;
if(cljs.core.truth_((function (){var or__4331__auto__ = bit__5005__auto__;
if(cljs.core.truth_(or__4331__auto__)){
return or__4331__auto__;
} else {
return G__10717.cats$protocols$MonadTrans$;
}
})())){
return true;
} else {
if((!G__10717.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,cats.protocols.MonadTrans,G__10717);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,cats.protocols.MonadTrans,G__10717);
}
})()){
return cats.protocols.mbind.call(null,cats.core._STAR_context_STAR_,mv,f);
} else {
var _STAR_context_STAR_10718 = cats.core._STAR_context_STAR_;
cats.core._STAR_context_STAR_ = cats.protocols.get_context.call(null,mv);

try{return cats.protocols.mbind.call(null,cats.core._STAR_context_STAR_,mv,f);
}finally {cats.core._STAR_context_STAR_ = _STAR_context_STAR_10718;
}
}
}
} else {
var ctx = cats.core.get_current_context.call(null,mv);
return cats.protocols.mbind.call(null,ctx,mv,f);

}
}
});
cats.core.mzero = (function cats$core$mzero(){
var ctx = cats.core.get_current_context.call(null);
return cats.protocols.mzero.call(null,ctx);
});
cats.core.mplus = (function cats$core$mplus(){
var argseq__5371__auto__ = ((((0) < arguments.length))?(new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,(0)),(0))):null);
return cats.core.mplus.cljs$core$IFn$_invoke$arity$variadic(argseq__5371__auto__);
});

cats.core.mplus.cljs$core$IFn$_invoke$arity$variadic = (function (mvs){
if(!(cljs.core.empty_QMARK_.call(null,mvs))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"not","not",1044554643,null),cljs.core.list(new cljs.core.Symbol(null,"empty?","empty?",76408555,null),new cljs.core.Symbol(null,"mvs","mvs",-446484819,null)))))].join('')));
}

var ctx = cats.core.get_current_context.call(null,cljs.core.first.call(null,mvs));
return cljs.core.reduce.call(null,cljs.core.partial.call(null,cats.protocols.mplus,ctx),mvs);
});

cats.core.mplus.cljs$lang$maxFixedArity = (0);

cats.core.mplus.cljs$lang$applyTo = (function (seq10719){
return cats.core.mplus.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq10719));
});
cats.core.guard = (function cats$core$guard(b){
if(cljs.core.truth_(b)){
return cats.core.return$.call(null,null);
} else {
return cats.core.mzero.call(null);
}
});
/**
 * Remove one level of monadic structure.
 * This is same as that `(bind mv identity)`
 */
cats.core.join = (function cats$core$join(mv){
return cats.core.bind.call(null,mv,cljs.core.identity);
});
/**
 * Apply a function f to the value inside functor's fv
 * preserving the context type.
 */
cats.core.fmap = (function cats$core$fmap(f,fv){
return cats.protocols.fmap.call(null,cats.core.get_current_context.call(null,fv),f,fv);
});
/**
 * Given function inside af's conext and value inside
 * av's context, applies the function to value and return
 * a result wrapped in context of same type of av context.
 */
cats.core.fapply = (function cats$core$fapply(af,av){
return cats.protocols.fapply.call(null,cats.core.get_current_context.call(null,af),af,av);
});
/**
 * If the expression is true, returns the monadic value.
 * Otherwise, yields nil in a monadic context.
 */
cats.core.when = (function cats$core$when(){
var G__10721 = arguments.length;
switch (G__10721) {
case 2:
return cats.core.when.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cats.core.when.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

cats.core.when.cljs$core$IFn$_invoke$arity$2 = (function (b,mv){
return cats.core.when.call(null,cats.core.get_current_context.call(null,mv),b,mv);
});

cats.core.when.cljs$core$IFn$_invoke$arity$3 = (function (ctx,b,mv){
if(cljs.core.truth_(b)){
return mv;
} else {
return cats.core.return$.call(null,ctx,null);
}
});

cats.core.when.cljs$lang$maxFixedArity = 3;
/**
 * If the expression is false, returns the monadic value.
 * Otherwise, yields nil in a monadic context.
 */
cats.core.unless = (function cats$core$unless(b,mv){
if(cljs.core.truth_(b)){
return null;
} else {
return mv;
}
});
/**
 * Lift a value from the inner monad of a monad transformer
 * into a value of the monad transformer.
 */
cats.core.lift = (function cats$core$lift(){
var G__10724 = arguments.length;
switch (G__10724) {
case 1:
return cats.core.lift.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cats.core.lift.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

cats.core.lift.cljs$core$IFn$_invoke$arity$1 = (function (mv){
return cats.protocols.lift.call(null,cats.core._STAR_context_STAR_,mv);
});

cats.core.lift.cljs$core$IFn$_invoke$arity$2 = (function (m,mv){
return cats.protocols.lift.call(null,m,mv);
});

cats.core.lift.cljs$lang$maxFixedArity = 2;
/**
 * Given a non-empty collection of monadic values, collect
 * their values in a vector returned in the monadic context.
 * 
 * (sequence [(maybe/just 2) (maybe/just 3)])
 * ;; => <Just [[2, 3]]>
 * 
 * (sequence [(maybe/nothing) (maybe/just 3)])
 * ;; => <Nothing>
 * 
 */
cats.core.sequence = (function cats$core$sequence(mvs){
if(cljs.core.truth_(cljs.core.not_empty.call(null,mvs))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"not-empty","not-empty",2029453590,null),new cljs.core.Symbol(null,"mvs","mvs",-446484819,null))))].join('')));
}

var ctx = cats.core.get_current_context.call(null,cljs.core.first.call(null,mvs));
if((function (){var G__10730 = ctx;
if(G__10730){
var bit__5005__auto__ = null;
if(cljs.core.truth_((function (){var or__4331__auto__ = bit__5005__auto__;
if(cljs.core.truth_(or__4331__auto__)){
return or__4331__auto__;
} else {
return G__10730.cats$protocols$MonadTrans$;
}
})())){
return true;
} else {
if((!G__10730.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,cats.protocols.MonadTrans,G__10730);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,cats.protocols.MonadTrans,G__10730);
}
})()){
var _STAR_context_STAR_10731 = cats.core._STAR_context_STAR_;
cats.core._STAR_context_STAR_ = ctx;

try{return cljs.core.reduce.call(null,((function (_STAR_context_STAR_10731,ctx){
return (function (mvs__$1,mv){
return cats.core.bind.call(null,mv,((function (_STAR_context_STAR_10731,ctx){
return (function (v){
return cats.core.bind.call(null,mvs__$1,((function (_STAR_context_STAR_10731,ctx){
return (function (vs){
return cats.core.return$.call(null,cljs.core.cons.call(null,v,vs));
});})(_STAR_context_STAR_10731,ctx))
);
});})(_STAR_context_STAR_10731,ctx))
);
});})(_STAR_context_STAR_10731,ctx))
,cats.core.return$.call(null,cljs.core.List.EMPTY),cljs.core.reverse.call(null,mvs));
}finally {cats.core._STAR_context_STAR_ = _STAR_context_STAR_10731;
}} else {
if((function (){var G__10732 = cats.core._STAR_context_STAR_;
if(G__10732){
var bit__5005__auto__ = null;
if(cljs.core.truth_((function (){var or__4331__auto__ = bit__5005__auto__;
if(cljs.core.truth_(or__4331__auto__)){
return or__4331__auto__;
} else {
return G__10732.cats$protocols$MonadTrans$;
}
})())){
return true;
} else {
if((!G__10732.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,cats.protocols.MonadTrans,G__10732);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,cats.protocols.MonadTrans,G__10732);
}
})()){
return cljs.core.reduce.call(null,((function (ctx){
return (function (mvs__$1,mv){
return cats.core.bind.call(null,mv,((function (ctx){
return (function (v){
return cats.core.bind.call(null,mvs__$1,((function (ctx){
return (function (vs){
return cats.core.return$.call(null,cljs.core.cons.call(null,v,vs));
});})(ctx))
);
});})(ctx))
);
});})(ctx))
,cats.core.return$.call(null,cljs.core.List.EMPTY),cljs.core.reverse.call(null,mvs));
} else {
var _STAR_context_STAR_10733 = cats.core._STAR_context_STAR_;
cats.core._STAR_context_STAR_ = ctx;

try{return cljs.core.reduce.call(null,((function (_STAR_context_STAR_10733,ctx){
return (function (mvs__$1,mv){
return cats.core.bind.call(null,mv,((function (_STAR_context_STAR_10733,ctx){
return (function (v){
return cats.core.bind.call(null,mvs__$1,((function (_STAR_context_STAR_10733,ctx){
return (function (vs){
return cats.core.return$.call(null,cljs.core.cons.call(null,v,vs));
});})(_STAR_context_STAR_10733,ctx))
);
});})(_STAR_context_STAR_10733,ctx))
);
});})(_STAR_context_STAR_10733,ctx))
,cats.core.return$.call(null,cljs.core.List.EMPTY),cljs.core.reverse.call(null,mvs));
}finally {cats.core._STAR_context_STAR_ = _STAR_context_STAR_10733;
}
}
}
});
/**
 * Given a function that takes a value and puts it into a
 * monadic context, map it into the given collection
 * calling sequence on the results.
 * 
 * (require '[cats.monad.maybe :as maybe])
 * (require '[cats.core :as m])
 * 
 * (m/mapseq maybe/just [2 3])
 * ;=> <Just [[2 3]]>
 * 
 * (m/mapseq (fn [v]
 * (if (odd? v)
 * (maybe/just v)
 * (maybe/nothing)))
 * [1 2])
 * ;=> <Nothing>
 * 
 */
cats.core.mapseq = (function cats$core$mapseq(mf,coll){
return cats.core.sequence.call(null,cljs.core.map.call(null,mf,coll));
});
/**
 * Same as mapseq but with the arguments in reverse order.
 * 
 * Let se a little example:
 * 
 * (m/forseq [2 3] maybe/just)
 * ;; => <Just [[2 3]]>
 * 
 * Yet an other example that fails:
 * 
 * (m/forseq [1 2]
 * (fn [v]
 * (if (odd? v)
 * (maybe/just v)
 * (maybe/nothing))))
 * ;; => <Nothing>
 * 
 */
cats.core.forseq = (function cats$core$forseq(vs,mf){
return cats.core.mapseq.call(null,mf,vs);
});
/**
 * Applies a predicate to a value in a `MonadZero` instance,
 * returning the identity element when the predicate yields false.
 * 
 * Otherwise, returns the instance unchanged.
 * 
 * (require '[cats.monad.moaybe :as maybe])
 * (require '[cats.core :as m])
 * 
 * (m/filter (partial < 2) (maybe/just 3))
 * ;=> <Just [3]>
 * 
 * (m/filter (partial < 4) (maybe/just 3))
 * ;=> <Nothing>
 * 
 */
cats.core.filter = (function cats$core$filter(p,mv){
if((function (){var G__10741 = cats.core.get_current_context.call(null,mv);
if(G__10741){
var bit__5005__auto__ = null;
if(cljs.core.truth_((function (){var or__4331__auto__ = bit__5005__auto__;
if(cljs.core.truth_(or__4331__auto__)){
return or__4331__auto__;
} else {
return G__10741.cats$protocols$MonadTrans$;
}
})())){
return true;
} else {
if((!G__10741.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,cats.protocols.MonadTrans,G__10741);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,cats.protocols.MonadTrans,G__10741);
}
})()){
var _STAR_context_STAR_10742 = cats.core._STAR_context_STAR_;
cats.core._STAR_context_STAR_ = cats.core.get_current_context.call(null,mv);

try{return cats.core.bind.call(null,mv,((function (_STAR_context_STAR_10742){
return (function (v){
return cats.core.bind.call(null,cats.core.guard.call(null,p.call(null,v)),((function (_STAR_context_STAR_10742){
return (function (G__10743){
return cats.core.return$.call(null,v);
});})(_STAR_context_STAR_10742))
);
});})(_STAR_context_STAR_10742))
);
}finally {cats.core._STAR_context_STAR_ = _STAR_context_STAR_10742;
}} else {
if((function (){var G__10744 = cats.core._STAR_context_STAR_;
if(G__10744){
var bit__5005__auto__ = null;
if(cljs.core.truth_((function (){var or__4331__auto__ = bit__5005__auto__;
if(cljs.core.truth_(or__4331__auto__)){
return or__4331__auto__;
} else {
return G__10744.cats$protocols$MonadTrans$;
}
})())){
return true;
} else {
if((!G__10744.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,cats.protocols.MonadTrans,G__10744);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,cats.protocols.MonadTrans,G__10744);
}
})()){
return cats.core.bind.call(null,mv,(function (v){
return cats.core.bind.call(null,cats.core.guard.call(null,p.call(null,v)),(function (G__10745){
return cats.core.return$.call(null,v);
}));
}));
} else {
var _STAR_context_STAR_10746 = cats.core._STAR_context_STAR_;
cats.core._STAR_context_STAR_ = cats.core.get_current_context.call(null,mv);

try{return cats.core.bind.call(null,mv,((function (_STAR_context_STAR_10746){
return (function (v){
return cats.core.bind.call(null,cats.core.guard.call(null,p.call(null,v)),((function (_STAR_context_STAR_10746){
return (function (G__10747){
return cats.core.return$.call(null,v);
});})(_STAR_context_STAR_10746))
);
});})(_STAR_context_STAR_10746))
);
}finally {cats.core._STAR_context_STAR_ = _STAR_context_STAR_10746;
}
}
}
});
/**
 * Alias of fmap.
 */
cats.core._LT_$_GT_ = (function cats$core$_LT_$_GT_(){
var G__10749 = arguments.length;
switch (G__10749) {
case 1:
return cats.core._LT_$_GT_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cats.core._LT_$_GT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

cats.core._LT_$_GT_.cljs$core$IFn$_invoke$arity$1 = (function (f){
return (function (fv){
return cats.core.fmap.call(null,f,fv);
});
});

cats.core._LT_$_GT_.cljs$core$IFn$_invoke$arity$2 = (function (f,fv){
return cats.core.fmap.call(null,f,fv);
});

cats.core._LT_$_GT_.cljs$lang$maxFixedArity = 2;
/**
 * Performs a Haskell-style left-associative fapply.
 */
cats.core._LT__STAR__GT_ = (function cats$core$_LT__STAR__GT_(){
var G__10755 = arguments.length;
switch (G__10755) {
case 2:
return cats.core._LT__STAR__GT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var argseq__5382__auto__ = (new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,(2)),(0)));
return cats.core._LT__STAR__GT_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__5382__auto__);

}
});

cats.core._LT__STAR__GT_.cljs$core$IFn$_invoke$arity$2 = (function (af,av){
return cats.core.fapply.call(null,af,av);
});

cats.core._LT__STAR__GT_.cljs$core$IFn$_invoke$arity$variadic = (function (af,av,avs){
return cljs.core.reduce.call(null,cats.core.fapply,af,cljs.core.cons.call(null,av,avs));
});

cats.core._LT__STAR__GT_.cljs$lang$applyTo = (function (seq10751){
var G__10752 = cljs.core.first.call(null,seq10751);
var seq10751__$1 = cljs.core.next.call(null,seq10751);
var G__10753 = cljs.core.first.call(null,seq10751__$1);
var seq10751__$2 = cljs.core.next.call(null,seq10751__$1);
return cats.core._LT__STAR__GT_.cljs$core$IFn$_invoke$arity$variadic(G__10752,G__10753,seq10751__$2);
});

cats.core._LT__STAR__GT_.cljs$lang$maxFixedArity = (2);
/**
 * Performs a Haskell-style left-associative
 * bind.
 * 
 * Let see it in action:
 * 
 * (>>= (just 1) (comp just inc) (comp just inc))
 * ;; => #<Just [3]>
 * 
 */
cats.core._GT__GT__EQ_ = (function cats$core$_GT__GT__EQ_(){
var G__10761 = arguments.length;
switch (G__10761) {
case 2:
return cats.core._GT__GT__EQ_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var argseq__5382__auto__ = (new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,(2)),(0)));
return cats.core._GT__GT__EQ_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__5382__auto__);

}
});

cats.core._GT__GT__EQ_.cljs$core$IFn$_invoke$arity$2 = (function (mv,f){
return cats.core.bind.call(null,mv,f);
});

cats.core._GT__GT__EQ_.cljs$core$IFn$_invoke$arity$variadic = (function (mv,f,fs){
return cljs.core.reduce.call(null,cats.core.bind,mv,cljs.core.cons.call(null,f,fs));
});

cats.core._GT__GT__EQ_.cljs$lang$applyTo = (function (seq10757){
var G__10758 = cljs.core.first.call(null,seq10757);
var seq10757__$1 = cljs.core.next.call(null,seq10757);
var G__10759 = cljs.core.first.call(null,seq10757__$1);
var seq10757__$2 = cljs.core.next.call(null,seq10757__$1);
return cats.core._GT__GT__EQ_.cljs$core$IFn$_invoke$arity$variadic(G__10758,G__10759,seq10757__$2);
});

cats.core._GT__GT__EQ_.cljs$lang$maxFixedArity = (2);
/**
 * Performs a Haskell-style left-associative bind,
 * ignoring the values produced by the monad computations.
 */
cats.core._GT__GT_ = (function cats$core$_GT__GT_(){
var G__10767 = arguments.length;
switch (G__10767) {
case 2:
return cats.core._GT__GT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var argseq__5382__auto__ = (new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,(2)),(0)));
return cats.core._GT__GT_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__5382__auto__);

}
});

cats.core._GT__GT_.cljs$core$IFn$_invoke$arity$2 = (function (mv,mv_SINGLEQUOTE_){
return cats.core.bind.call(null,mv,(function (_){
return mv_SINGLEQUOTE_;
}));
});

cats.core._GT__GT_.cljs$core$IFn$_invoke$arity$variadic = (function (mv,mv_SINGLEQUOTE_,mvs){
return cljs.core.reduce.call(null,cats.core._GT__GT_,mv,cljs.core.cons.call(null,mv_SINGLEQUOTE_,mvs));
});

cats.core._GT__GT_.cljs$lang$applyTo = (function (seq10763){
var G__10764 = cljs.core.first.call(null,seq10763);
var seq10763__$1 = cljs.core.next.call(null,seq10763);
var G__10765 = cljs.core.first.call(null,seq10763__$1);
var seq10763__$2 = cljs.core.next.call(null,seq10763__$1);
return cats.core._GT__GT_.cljs$core$IFn$_invoke$arity$variadic(G__10764,G__10765,seq10763__$2);
});

cats.core._GT__GT_.cljs$lang$maxFixedArity = (2);
/**
 * Same as the two argument version of `>>=` but with the
 * arguments interchanged.
 */
cats.core._EQ__LT__LT_ = (function cats$core$_EQ__LT__LT_(f,mv){
return cats.core._GT__GT__EQ_.call(null,mv,f);
});
/**
 * Left-to-right composition of monads.
 */
cats.core._GT__EQ__GT_ = (function cats$core$_GT__EQ__GT_(mf,mg,x){
if((function (){var G__10773 = cats.core.get_current_context.call(null,mf);
if(G__10773){
var bit__5005__auto__ = null;
if(cljs.core.truth_((function (){var or__4331__auto__ = bit__5005__auto__;
if(cljs.core.truth_(or__4331__auto__)){
return or__4331__auto__;
} else {
return G__10773.cats$protocols$MonadTrans$;
}
})())){
return true;
} else {
if((!G__10773.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,cats.protocols.MonadTrans,G__10773);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,cats.protocols.MonadTrans,G__10773);
}
})()){
var _STAR_context_STAR_10774 = cats.core._STAR_context_STAR_;
cats.core._STAR_context_STAR_ = cats.core.get_current_context.call(null,mf);

try{return cats.core.bind.call(null,mf.call(null,x),((function (_STAR_context_STAR_10774){
return (function (a){
return cats.core.bind.call(null,mg.call(null,a),((function (_STAR_context_STAR_10774){
return (function (b){
return cats.core.return$.call(null,b);
});})(_STAR_context_STAR_10774))
);
});})(_STAR_context_STAR_10774))
);
}finally {cats.core._STAR_context_STAR_ = _STAR_context_STAR_10774;
}} else {
if((function (){var G__10775 = cats.core._STAR_context_STAR_;
if(G__10775){
var bit__5005__auto__ = null;
if(cljs.core.truth_((function (){var or__4331__auto__ = bit__5005__auto__;
if(cljs.core.truth_(or__4331__auto__)){
return or__4331__auto__;
} else {
return G__10775.cats$protocols$MonadTrans$;
}
})())){
return true;
} else {
if((!G__10775.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,cats.protocols.MonadTrans,G__10775);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,cats.protocols.MonadTrans,G__10775);
}
})()){
return cats.core.bind.call(null,mf.call(null,x),(function (a){
return cats.core.bind.call(null,mg.call(null,a),(function (b){
return cats.core.return$.call(null,b);
}));
}));
} else {
var _STAR_context_STAR_10776 = cats.core._STAR_context_STAR_;
cats.core._STAR_context_STAR_ = cats.core.get_current_context.call(null,mf);

try{return cats.core.bind.call(null,mf.call(null,x),((function (_STAR_context_STAR_10776){
return (function (a){
return cats.core.bind.call(null,mg.call(null,a),((function (_STAR_context_STAR_10776){
return (function (b){
return cats.core.return$.call(null,b);
});})(_STAR_context_STAR_10776))
);
});})(_STAR_context_STAR_10776))
);
}finally {cats.core._STAR_context_STAR_ = _STAR_context_STAR_10776;
}
}
}
});
/**
 * Right-to-left composition of monads.
 * Same as `>=>` with its first two arguments flipped.
 */
cats.core._LT__EQ__LT_ = (function cats$core$_LT__EQ__LT_(mg,mf,x){
if((function (){var G__10781 = cats.core.get_current_context.call(null,mf);
if(G__10781){
var bit__5005__auto__ = null;
if(cljs.core.truth_((function (){var or__4331__auto__ = bit__5005__auto__;
if(cljs.core.truth_(or__4331__auto__)){
return or__4331__auto__;
} else {
return G__10781.cats$protocols$MonadTrans$;
}
})())){
return true;
} else {
if((!G__10781.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,cats.protocols.MonadTrans,G__10781);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,cats.protocols.MonadTrans,G__10781);
}
})()){
var _STAR_context_STAR_10782 = cats.core._STAR_context_STAR_;
cats.core._STAR_context_STAR_ = cats.core.get_current_context.call(null,mf);

try{return cats.core.bind.call(null,mf.call(null,x),((function (_STAR_context_STAR_10782){
return (function (a){
return cats.core.bind.call(null,mg.call(null,a),((function (_STAR_context_STAR_10782){
return (function (b){
return cats.core.return$.call(null,b);
});})(_STAR_context_STAR_10782))
);
});})(_STAR_context_STAR_10782))
);
}finally {cats.core._STAR_context_STAR_ = _STAR_context_STAR_10782;
}} else {
if((function (){var G__10783 = cats.core._STAR_context_STAR_;
if(G__10783){
var bit__5005__auto__ = null;
if(cljs.core.truth_((function (){var or__4331__auto__ = bit__5005__auto__;
if(cljs.core.truth_(or__4331__auto__)){
return or__4331__auto__;
} else {
return G__10783.cats$protocols$MonadTrans$;
}
})())){
return true;
} else {
if((!G__10783.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,cats.protocols.MonadTrans,G__10783);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,cats.protocols.MonadTrans,G__10783);
}
})()){
return cats.core.bind.call(null,mf.call(null,x),(function (a){
return cats.core.bind.call(null,mg.call(null,a),(function (b){
return cats.core.return$.call(null,b);
}));
}));
} else {
var _STAR_context_STAR_10784 = cats.core._STAR_context_STAR_;
cats.core._STAR_context_STAR_ = cats.core.get_current_context.call(null,mf);

try{return cats.core.bind.call(null,mf.call(null,x),((function (_STAR_context_STAR_10784){
return (function (a){
return cats.core.bind.call(null,mg.call(null,a),((function (_STAR_context_STAR_10784){
return (function (b){
return cats.core.return$.call(null,b);
});})(_STAR_context_STAR_10784))
);
});})(_STAR_context_STAR_10784))
);
}finally {cats.core._STAR_context_STAR_ = _STAR_context_STAR_10784;
}
}
}
});
/**
 * Generic function for unwrap/extract
 * the inner value of a container.
 */
cats.core.extract = (function cats$core$extract(v){
return cats.protocols.extract.call(null,v);
});

//# sourceMappingURL=core.js.map