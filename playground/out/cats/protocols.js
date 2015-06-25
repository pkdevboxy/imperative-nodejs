// Compiled by ClojureScript 0.0-3308 {:target :nodejs}
goog.provide('cats.protocols');
goog.require('cljs.core');

/**
 * Abstraction that establish a membership of types
 * with one concrete monad.
 * 
 * This is a way that cats establishes the relation
 * between a type and the monad that that should play.
 * 
 * A great example es Maybe monad type Just. It implements
 * this abstraction for establish that Just is part of
 * Maybe monad.
 */
cats.protocols.Context = (function (){var obj10788 = {};
return obj10788;
})();

/**
 * Get the monad instance for curent value.
 */
cats.protocols.get_context = (function cats$protocols$get_context(_){
if((function (){var and__4319__auto__ = _;
if(and__4319__auto__){
return _.cats$protocols$Context$get_context$arity$1;
} else {
return and__4319__auto__;
}
})()){
return _.cats$protocols$Context$get_context$arity$1(_);
} else {
var x__4967__auto__ = (((_ == null))?null:_);
return (function (){var or__4331__auto__ = (cats.protocols.get_context[goog.typeOf(x__4967__auto__)]);
if(or__4331__auto__){
return or__4331__auto__;
} else {
var or__4331__auto____$1 = (cats.protocols.get_context["_"]);
if(or__4331__auto____$1){
return or__4331__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Context.get-context",_);
}
}
})().call(null,_);
}
});


/**
 * A type class responsible of extract the
 * value from a monad context.
 */
cats.protocols.Extract = (function (){var obj10790 = {};
return obj10790;
})();

/**
 * Extract the value from monad context.
 */
cats.protocols.extract = (function cats$protocols$extract(mv){
if((function (){var and__4319__auto__ = mv;
if(and__4319__auto__){
return mv.cats$protocols$Extract$extract$arity$1;
} else {
return and__4319__auto__;
}
})()){
return mv.cats$protocols$Extract$extract$arity$1(mv);
} else {
var x__4967__auto__ = (((mv == null))?null:mv);
return (function (){var or__4331__auto__ = (cats.protocols.extract[goog.typeOf(x__4967__auto__)]);
if(or__4331__auto__){
return or__4331__auto__;
} else {
var or__4331__auto____$1 = (cats.protocols.extract["_"]);
if(or__4331__auto____$1){
return or__4331__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Extract.extract",mv);
}
}
})().call(null,mv);
}
});


/**
 * The Functor abstraction.
 */
cats.protocols.Functor = (function (){var obj10792 = {};
return obj10792;
})();

/**
 * Applies function f to the value(s) inside the context of the functor fv.
 */
cats.protocols.fmap = (function cats$protocols$fmap(ftor,f,fv){
if((function (){var and__4319__auto__ = ftor;
if(and__4319__auto__){
return ftor.cats$protocols$Functor$fmap$arity$3;
} else {
return and__4319__auto__;
}
})()){
return ftor.cats$protocols$Functor$fmap$arity$3(ftor,f,fv);
} else {
var x__4967__auto__ = (((ftor == null))?null:ftor);
return (function (){var or__4331__auto__ = (cats.protocols.fmap[goog.typeOf(x__4967__auto__)]);
if(or__4331__auto__){
return or__4331__auto__;
} else {
var or__4331__auto____$1 = (cats.protocols.fmap["_"]);
if(or__4331__auto____$1){
return or__4331__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Functor.fmap",ftor);
}
}
})().call(null,ftor,f,fv);
}
});


/**
 * The Applicative abstraction.
 */
cats.protocols.Applicative = (function (){var obj10794 = {};
return obj10794;
})();

/**
 * Applies the function(s) inside ag's context to the value(s)
 * inside av's context while preserving the context.
 */
cats.protocols.fapply = (function cats$protocols$fapply(app,af,av){
if((function (){var and__4319__auto__ = app;
if(and__4319__auto__){
return app.cats$protocols$Applicative$fapply$arity$3;
} else {
return and__4319__auto__;
}
})()){
return app.cats$protocols$Applicative$fapply$arity$3(app,af,av);
} else {
var x__4967__auto__ = (((app == null))?null:app);
return (function (){var or__4331__auto__ = (cats.protocols.fapply[goog.typeOf(x__4967__auto__)]);
if(or__4331__auto__){
return or__4331__auto__;
} else {
var or__4331__auto____$1 = (cats.protocols.fapply["_"]);
if(or__4331__auto____$1){
return or__4331__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Applicative.fapply",app);
}
}
})().call(null,app,af,av);
}
});

/**
 * Takes any context monadic value ctx and any value v, and puts
 * the value v in the most minimal context of same type of ctx
 */
cats.protocols.pure = (function cats$protocols$pure(app,v){
if((function (){var and__4319__auto__ = app;
if(and__4319__auto__){
return app.cats$protocols$Applicative$pure$arity$2;
} else {
return and__4319__auto__;
}
})()){
return app.cats$protocols$Applicative$pure$arity$2(app,v);
} else {
var x__4967__auto__ = (((app == null))?null:app);
return (function (){var or__4331__auto__ = (cats.protocols.pure[goog.typeOf(x__4967__auto__)]);
if(or__4331__auto__){
return or__4331__auto__;
} else {
var or__4331__auto____$1 = (cats.protocols.pure["_"]);
if(or__4331__auto____$1){
return or__4331__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Applicative.pure",app);
}
}
})().call(null,app,v);
}
});


/**
 * The Monad abstraction.
 */
cats.protocols.Monad = (function (){var obj10796 = {};
return obj10796;
})();

cats.protocols.mreturn = (function cats$protocols$mreturn(m,v){
if((function (){var and__4319__auto__ = m;
if(and__4319__auto__){
return m.cats$protocols$Monad$mreturn$arity$2;
} else {
return and__4319__auto__;
}
})()){
return m.cats$protocols$Monad$mreturn$arity$2(m,v);
} else {
var x__4967__auto__ = (((m == null))?null:m);
return (function (){var or__4331__auto__ = (cats.protocols.mreturn[goog.typeOf(x__4967__auto__)]);
if(or__4331__auto__){
return or__4331__auto__;
} else {
var or__4331__auto____$1 = (cats.protocols.mreturn["_"]);
if(or__4331__auto____$1){
return or__4331__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Monad.mreturn",m);
}
}
})().call(null,m,v);
}
});

cats.protocols.mbind = (function cats$protocols$mbind(m,mv,f){
if((function (){var and__4319__auto__ = m;
if(and__4319__auto__){
return m.cats$protocols$Monad$mbind$arity$3;
} else {
return and__4319__auto__;
}
})()){
return m.cats$protocols$Monad$mbind$arity$3(m,mv,f);
} else {
var x__4967__auto__ = (((m == null))?null:m);
return (function (){var or__4331__auto__ = (cats.protocols.mbind[goog.typeOf(x__4967__auto__)]);
if(or__4331__auto__){
return or__4331__auto__;
} else {
var or__4331__auto____$1 = (cats.protocols.mbind["_"]);
if(or__4331__auto____$1){
return or__4331__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Monad.mbind",m);
}
}
})().call(null,m,mv,f);
}
});


/**
 * A complement abstraction for monad that
 * supports the notion of an identity element.
 */
cats.protocols.MonadZero = (function (){var obj10798 = {};
return obj10798;
})();

/**
 * The identity element for `ctx`.
 */
cats.protocols.mzero = (function cats$protocols$mzero(m){
if((function (){var and__4319__auto__ = m;
if(and__4319__auto__){
return m.cats$protocols$MonadZero$mzero$arity$1;
} else {
return and__4319__auto__;
}
})()){
return m.cats$protocols$MonadZero$mzero$arity$1(m);
} else {
var x__4967__auto__ = (((m == null))?null:m);
return (function (){var or__4331__auto__ = (cats.protocols.mzero[goog.typeOf(x__4967__auto__)]);
if(or__4331__auto__){
return or__4331__auto__;
} else {
var or__4331__auto____$1 = (cats.protocols.mzero["_"]);
if(or__4331__auto____$1){
return or__4331__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"MonadZero.mzero",m);
}
}
})().call(null,m);
}
});


/**
 * A complement abstraction for Monad that
 * supports the notion of addition.
 */
cats.protocols.MonadPlus = (function (){var obj10800 = {};
return obj10800;
})();

/**
 * An associative addition operation.
 */
cats.protocols.mplus = (function cats$protocols$mplus(m,mv,mv_SINGLEQUOTE_){
if((function (){var and__4319__auto__ = m;
if(and__4319__auto__){
return m.cats$protocols$MonadPlus$mplus$arity$3;
} else {
return and__4319__auto__;
}
})()){
return m.cats$protocols$MonadPlus$mplus$arity$3(m,mv,mv_SINGLEQUOTE_);
} else {
var x__4967__auto__ = (((m == null))?null:m);
return (function (){var or__4331__auto__ = (cats.protocols.mplus[goog.typeOf(x__4967__auto__)]);
if(or__4331__auto__){
return or__4331__auto__;
} else {
var or__4331__auto____$1 = (cats.protocols.mplus["_"]);
if(or__4331__auto____$1){
return or__4331__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"MonadPlus.mplus",m);
}
}
})().call(null,m,mv,mv_SINGLEQUOTE_);
}
});


/**
 * A specific case of Monad abstraction for
 * work with state in pure functional way.
 */
cats.protocols.MonadState = (function (){var obj10802 = {};
return obj10802;
})();

/**
 * Return the current state.
 */
cats.protocols.get_state = (function cats$protocols$get_state(m){
if((function (){var and__4319__auto__ = m;
if(and__4319__auto__){
return m.cats$protocols$MonadState$get_state$arity$1;
} else {
return and__4319__auto__;
}
})()){
return m.cats$protocols$MonadState$get_state$arity$1(m);
} else {
var x__4967__auto__ = (((m == null))?null:m);
return (function (){var or__4331__auto__ = (cats.protocols.get_state[goog.typeOf(x__4967__auto__)]);
if(or__4331__auto__){
return or__4331__auto__;
} else {
var or__4331__auto____$1 = (cats.protocols.get_state["_"]);
if(or__4331__auto____$1){
return or__4331__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"MonadState.get-state",m);
}
}
})().call(null,m);
}
});

/**
 * Update the state.
 */
cats.protocols.put_state = (function cats$protocols$put_state(m,newstate){
if((function (){var and__4319__auto__ = m;
if(and__4319__auto__){
return m.cats$protocols$MonadState$put_state$arity$2;
} else {
return and__4319__auto__;
}
})()){
return m.cats$protocols$MonadState$put_state$arity$2(m,newstate);
} else {
var x__4967__auto__ = (((m == null))?null:m);
return (function (){var or__4331__auto__ = (cats.protocols.put_state[goog.typeOf(x__4967__auto__)]);
if(or__4331__auto__){
return or__4331__auto__;
} else {
var or__4331__auto____$1 = (cats.protocols.put_state["_"]);
if(or__4331__auto____$1){
return or__4331__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"MonadState.put-state",m);
}
}
})().call(null,m,newstate);
}
});

/**
 * Apply a function to the current state and update it.
 */
cats.protocols.swap_state = (function cats$protocols$swap_state(m,f){
if((function (){var and__4319__auto__ = m;
if(and__4319__auto__){
return m.cats$protocols$MonadState$swap_state$arity$2;
} else {
return and__4319__auto__;
}
})()){
return m.cats$protocols$MonadState$swap_state$arity$2(m,f);
} else {
var x__4967__auto__ = (((m == null))?null:m);
return (function (){var or__4331__auto__ = (cats.protocols.swap_state[goog.typeOf(x__4967__auto__)]);
if(or__4331__auto__){
return or__4331__auto__;
} else {
var or__4331__auto____$1 = (cats.protocols.swap_state["_"]);
if(or__4331__auto____$1){
return or__4331__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"MonadState.swap-state",m);
}
}
})().call(null,m,f);
}
});


/**
 * A specific case of Monad abstraction that
 * allows a read only access to an environment.
 */
cats.protocols.MonadReader = (function (){var obj10804 = {};
return obj10804;
})();

/**
 * Return the current environment.
 */
cats.protocols.ask = (function cats$protocols$ask(m){
if((function (){var and__4319__auto__ = m;
if(and__4319__auto__){
return m.cats$protocols$MonadReader$ask$arity$1;
} else {
return and__4319__auto__;
}
})()){
return m.cats$protocols$MonadReader$ask$arity$1(m);
} else {
var x__4967__auto__ = (((m == null))?null:m);
return (function (){var or__4331__auto__ = (cats.protocols.ask[goog.typeOf(x__4967__auto__)]);
if(or__4331__auto__){
return or__4331__auto__;
} else {
var or__4331__auto____$1 = (cats.protocols.ask["_"]);
if(or__4331__auto____$1){
return or__4331__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"MonadReader.ask",m);
}
}
})().call(null,m);
}
});

/**
 * Create a reader in a modified version of the environment.
 */
cats.protocols.local = (function cats$protocols$local(m,f,reader){
if((function (){var and__4319__auto__ = m;
if(and__4319__auto__){
return m.cats$protocols$MonadReader$local$arity$3;
} else {
return and__4319__auto__;
}
})()){
return m.cats$protocols$MonadReader$local$arity$3(m,f,reader);
} else {
var x__4967__auto__ = (((m == null))?null:m);
return (function (){var or__4331__auto__ = (cats.protocols.local[goog.typeOf(x__4967__auto__)]);
if(or__4331__auto__){
return or__4331__auto__;
} else {
var or__4331__auto____$1 = (cats.protocols.local["_"]);
if(or__4331__auto____$1){
return or__4331__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"MonadReader.local",m);
}
}
})().call(null,m,f,reader);
}
});


/**
 * A specific case of Monad abstraction that
 * allows emulate write operations in pure functional
 * way.
 * 
 * A great example is writing a log message.
 */
cats.protocols.MonadWriter = (function (){var obj10806 = {};
return obj10806;
})();

/**
 * Given a writer, yield a (value, log) pair as a value.
 */
cats.protocols.listen = (function cats$protocols$listen(m,mv){
if((function (){var and__4319__auto__ = m;
if(and__4319__auto__){
return m.cats$protocols$MonadWriter$listen$arity$2;
} else {
return and__4319__auto__;
}
})()){
return m.cats$protocols$MonadWriter$listen$arity$2(m,mv);
} else {
var x__4967__auto__ = (((m == null))?null:m);
return (function (){var or__4331__auto__ = (cats.protocols.listen[goog.typeOf(x__4967__auto__)]);
if(or__4331__auto__){
return or__4331__auto__;
} else {
var or__4331__auto____$1 = (cats.protocols.listen["_"]);
if(or__4331__auto____$1){
return or__4331__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"MonadWriter.listen",m);
}
}
})().call(null,m,mv);
}
});

/**
 * Add the given value to the log.
 */
cats.protocols.tell = (function cats$protocols$tell(m,v){
if((function (){var and__4319__auto__ = m;
if(and__4319__auto__){
return m.cats$protocols$MonadWriter$tell$arity$2;
} else {
return and__4319__auto__;
}
})()){
return m.cats$protocols$MonadWriter$tell$arity$2(m,v);
} else {
var x__4967__auto__ = (((m == null))?null:m);
return (function (){var or__4331__auto__ = (cats.protocols.tell[goog.typeOf(x__4967__auto__)]);
if(or__4331__auto__){
return or__4331__auto__;
} else {
var or__4331__auto____$1 = (cats.protocols.tell["_"]);
if(or__4331__auto____$1){
return or__4331__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"MonadWriter.tell",m);
}
}
})().call(null,m,v);
}
});

/**
 * Given a writer whose value is a pair with a function as its second element,
 * yield a writer which has the first element of the pair as the value and
 * the result of applying the aforementioned function to the log as the new log.
 */
cats.protocols.pass = (function cats$protocols$pass(m,mv){
if((function (){var and__4319__auto__ = m;
if(and__4319__auto__){
return m.cats$protocols$MonadWriter$pass$arity$2;
} else {
return and__4319__auto__;
}
})()){
return m.cats$protocols$MonadWriter$pass$arity$2(m,mv);
} else {
var x__4967__auto__ = (((m == null))?null:m);
return (function (){var or__4331__auto__ = (cats.protocols.pass[goog.typeOf(x__4967__auto__)]);
if(or__4331__auto__){
return or__4331__auto__;
} else {
var or__4331__auto____$1 = (cats.protocols.pass["_"]);
if(or__4331__auto____$1){
return or__4331__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"MonadWriter.pass",m);
}
}
})().call(null,m,mv);
}
});


/**
 * A common abstraction for all monad transformers.
 */
cats.protocols.MonadTrans = (function (){var obj10808 = {};
return obj10808;
})();

/**
 * Return the base monad of this transformer.
 */
cats.protocols.base = (function cats$protocols$base(mt){
if((function (){var and__4319__auto__ = mt;
if(and__4319__auto__){
return mt.cats$protocols$MonadTrans$base$arity$1;
} else {
return and__4319__auto__;
}
})()){
return mt.cats$protocols$MonadTrans$base$arity$1(mt);
} else {
var x__4967__auto__ = (((mt == null))?null:mt);
return (function (){var or__4331__auto__ = (cats.protocols.base[goog.typeOf(x__4967__auto__)]);
if(or__4331__auto__){
return or__4331__auto__;
} else {
var or__4331__auto____$1 = (cats.protocols.base["_"]);
if(or__4331__auto____$1){
return or__4331__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"MonadTrans.base",mt);
}
}
})().call(null,mt);
}
});

/**
 * Return the monad that this transformer wraps.
 */
cats.protocols.inner = (function cats$protocols$inner(mt){
if((function (){var and__4319__auto__ = mt;
if(and__4319__auto__){
return mt.cats$protocols$MonadTrans$inner$arity$1;
} else {
return and__4319__auto__;
}
})()){
return mt.cats$protocols$MonadTrans$inner$arity$1(mt);
} else {
var x__4967__auto__ = (((mt == null))?null:mt);
return (function (){var or__4331__auto__ = (cats.protocols.inner[goog.typeOf(x__4967__auto__)]);
if(or__4331__auto__){
return or__4331__auto__;
} else {
var or__4331__auto____$1 = (cats.protocols.inner["_"]);
if(or__4331__auto____$1){
return or__4331__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"MonadTrans.inner",mt);
}
}
})().call(null,mt);
}
});

/**
 * Lift a value from the parameterized monad to the transformer.
 */
cats.protocols.lift = (function cats$protocols$lift(m,mv){
if((function (){var and__4319__auto__ = m;
if(and__4319__auto__){
return m.cats$protocols$MonadTrans$lift$arity$2;
} else {
return and__4319__auto__;
}
})()){
return m.cats$protocols$MonadTrans$lift$arity$2(m,mv);
} else {
var x__4967__auto__ = (((m == null))?null:m);
return (function (){var or__4331__auto__ = (cats.protocols.lift[goog.typeOf(x__4967__auto__)]);
if(or__4331__auto__){
return or__4331__auto__;
} else {
var or__4331__auto____$1 = (cats.protocols.lift["_"]);
if(or__4331__auto____$1){
return or__4331__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"MonadTrans.lift",m);
}
}
})().call(null,m,mv);
}
});


//# sourceMappingURL=protocols.js.map