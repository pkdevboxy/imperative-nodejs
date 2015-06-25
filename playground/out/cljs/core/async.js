// Compiled by ClojureScript 0.0-3308 {:target :nodejs}
goog.provide('cljs.core.async');
goog.require('cljs.core');
goog.require('cljs.core.async.impl.channels');
goog.require('cljs.core.async.impl.dispatch');
goog.require('cljs.core.async.impl.ioc_helpers');
goog.require('cljs.core.async.impl.protocols');
goog.require('cljs.core.async.impl.buffers');
goog.require('cljs.core.async.impl.timers');
cljs.core.async.fn_handler = (function cljs$core$async$fn_handler(f){
if(typeof cljs.core.async.t10814 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t10814 = (function (fn_handler,f,meta10815){
this.fn_handler = fn_handler;
this.f = f;
this.meta10815 = meta10815;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t10814.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_10816,meta10815__$1){
var self__ = this;
var _10816__$1 = this;
return (new cljs.core.async.t10814(self__.fn_handler,self__.f,meta10815__$1));
});

cljs.core.async.t10814.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_10816){
var self__ = this;
var _10816__$1 = this;
return self__.meta10815;
});

cljs.core.async.t10814.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t10814.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t10814.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
});

cljs.core.async.t10814.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"fn-handler","fn-handler",648785851,null),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"meta10815","meta10815",-1052461025,null)], null);
});

cljs.core.async.t10814.cljs$lang$type = true;

cljs.core.async.t10814.cljs$lang$ctorStr = "cljs.core.async/t10814";

cljs.core.async.t10814.cljs$lang$ctorPrWriter = (function (this__4910__auto__,writer__4911__auto__,opt__4912__auto__){
return cljs.core._write.call(null,writer__4911__auto__,"cljs.core.async/t10814");
});

cljs.core.async.__GT_t10814 = (function cljs$core$async$fn_handler_$___GT_t10814(fn_handler__$1,f__$1,meta10815){
return (new cljs.core.async.t10814(fn_handler__$1,f__$1,meta10815));
});

}

return (new cljs.core.async.t10814(cljs$core$async$fn_handler,f,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Returns a fixed buffer of size n. When full, puts will block/park.
 */
cljs.core.async.buffer = (function cljs$core$async$buffer(n){
return cljs.core.async.impl.buffers.fixed_buffer.call(null,n);
});
/**
 * Returns a buffer of size n. When full, puts will complete but
 * val will be dropped (no transfer).
 */
cljs.core.async.dropping_buffer = (function cljs$core$async$dropping_buffer(n){
return cljs.core.async.impl.buffers.dropping_buffer.call(null,n);
});
/**
 * Returns a buffer of size n. When full, puts will complete, and be
 * buffered, but oldest elements in buffer will be dropped (not
 * transferred).
 */
cljs.core.async.sliding_buffer = (function cljs$core$async$sliding_buffer(n){
return cljs.core.async.impl.buffers.sliding_buffer.call(null,n);
});
/**
 * Returns true if a channel created with buff will never block. That is to say,
 * puts into this buffer will never cause the buffer to be full.
 */
cljs.core.async.unblocking_buffer_QMARK_ = (function cljs$core$async$unblocking_buffer_QMARK_(buff){
var G__10818 = buff;
if(G__10818){
var bit__5005__auto__ = null;
if(cljs.core.truth_((function (){var or__4331__auto__ = bit__5005__auto__;
if(cljs.core.truth_(or__4331__auto__)){
return or__4331__auto__;
} else {
return G__10818.cljs$core$async$impl$protocols$UnblockingBuffer$;
}
})())){
return true;
} else {
if((!G__10818.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,G__10818);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,G__10818);
}
});
/**
 * Creates a channel with an optional buffer, an optional transducer (like (map f),
 * (filter p) etc or a composition thereof), and an optional exception handler.
 * If buf-or-n is a number, will create and use a fixed buffer of that size. If a
 * transducer is supplied a buffer must be specified. ex-handler must be a
 * fn of one argument - if an exception occurs during transformation it will be called
 * with the thrown value as an argument, and any non-nil return value will be placed
 * in the channel.
 */
cljs.core.async.chan = (function cljs$core$async$chan(){
var G__10820 = arguments.length;
switch (G__10820) {
case 0:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.chan.call(null,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1 = (function (buf_or_n){
return cljs.core.async.chan.call(null,buf_or_n,null,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2 = (function (buf_or_n,xform){
return cljs.core.async.chan.call(null,buf_or_n,xform,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3 = (function (buf_or_n,xform,ex_handler){
var buf_or_n__$1 = ((cljs.core._EQ_.call(null,buf_or_n,(0)))?null:buf_or_n);
if(cljs.core.truth_(xform)){
if(cljs.core.truth_(buf_or_n__$1)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("buffer must be supplied when transducer is"),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,new cljs.core.Symbol(null,"buf-or-n","buf-or-n",-1646815050,null)))].join('')));
}
} else {
}

return cljs.core.async.impl.channels.chan.call(null,((typeof buf_or_n__$1 === 'number')?cljs.core.async.buffer.call(null,buf_or_n__$1):buf_or_n__$1),xform,ex_handler);
});

cljs.core.async.chan.cljs$lang$maxFixedArity = 3;
/**
 * Returns a channel that will close after msecs
 */
cljs.core.async.timeout = (function cljs$core$async$timeout(msecs){
return cljs.core.async.impl.timers.timeout.call(null,msecs);
});
/**
 * takes a val from port. Must be called inside a (go ...) block. Will
 * return nil if closed. Will park if nothing is available.
 * Returns true unless port is already closed
 */
cljs.core.async._LT__BANG_ = (function cljs$core$async$_LT__BANG_(port){
throw (new Error("<! used not in (go ...) block"));
});
/**
 * Asynchronously takes a val from port, passing to fn1. Will pass nil
 * if closed. If on-caller? (default true) is true, and value is
 * immediately available, will call fn1 on calling thread.
 * Returns nil.
 */
cljs.core.async.take_BANG_ = (function cljs$core$async$take_BANG_(){
var G__10823 = arguments.length;
switch (G__10823) {
case 2:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,fn1){
return cljs.core.async.take_BANG_.call(null,port,fn1,true);
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(ret)){
var val_10825 = cljs.core.deref.call(null,ret);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,val_10825);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (val_10825,ret){
return (function (){
return fn1.call(null,val_10825);
});})(val_10825,ret))
);
}
} else {
}

return null;
});

cljs.core.async.take_BANG_.cljs$lang$maxFixedArity = 3;
cljs.core.async.nop = (function cljs$core$async$nop(_){
return null;
});
cljs.core.async.fhnop = cljs.core.async.fn_handler.call(null,cljs.core.async.nop);
/**
 * puts a val into port. nil values are not allowed. Must be called
 * inside a (go ...) block. Will park if no buffer space is available.
 * Returns true unless port is already closed.
 */
cljs.core.async._GT__BANG_ = (function cljs$core$async$_GT__BANG_(port,val){
throw (new Error(">! used not in (go ...) block"));
});
/**
 * Asynchronously puts a val into port, calling fn0 (if supplied) when
 * complete. nil values are not allowed. Will throw if closed. If
 * on-caller? (default true) is true, and the put is immediately
 * accepted, will call fn0 on calling thread.  Returns nil.
 */
cljs.core.async.put_BANG_ = (function cljs$core$async$put_BANG_(){
var G__10827 = arguments.length;
switch (G__10827) {
case 2:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,val){
var temp__4420__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fhnop);
if(cljs.core.truth_(temp__4420__auto__)){
var ret = temp__4420__auto__;
return cljs.core.deref.call(null,ret);
} else {
return true;
}
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,val,fn1){
return cljs.core.async.put_BANG_.call(null,port,val,fn1,true);
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (port,val,fn1,on_caller_QMARK_){
var temp__4420__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(temp__4420__auto__)){
var retb = temp__4420__auto__;
var ret = cljs.core.deref.call(null,retb);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,ret);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (ret,retb,temp__4420__auto__){
return (function (){
return fn1.call(null,ret);
});})(ret,retb,temp__4420__auto__))
);
}

return ret;
} else {
return true;
}
});

cljs.core.async.put_BANG_.cljs$lang$maxFixedArity = 4;
cljs.core.async.close_BANG_ = (function cljs$core$async$close_BANG_(port){
return cljs.core.async.impl.protocols.close_BANG_.call(null,port);
});
cljs.core.async.random_array = (function cljs$core$async$random_array(n){
var a = (new Array(n));
var n__5216__auto___10829 = n;
var x_10830 = (0);
while(true){
if((x_10830 < n__5216__auto___10829)){
(a[x_10830] = (0));

var G__10831 = (x_10830 + (1));
x_10830 = G__10831;
continue;
} else {
}
break;
}

var i = (1);
while(true){
if(cljs.core._EQ_.call(null,i,n)){
return a;
} else {
var j = cljs.core.rand_int.call(null,i);
(a[i] = (a[j]));

(a[j] = i);

var G__10832 = (i + (1));
i = G__10832;
continue;
}
break;
}
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.call(null,true);
if(typeof cljs.core.async.t10836 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t10836 = (function (alt_flag,flag,meta10837){
this.alt_flag = alt_flag;
this.flag = flag;
this.meta10837 = meta10837;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t10836.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_10838,meta10837__$1){
var self__ = this;
var _10838__$1 = this;
return (new cljs.core.async.t10836(self__.alt_flag,self__.flag,meta10837__$1));
});})(flag))
;

cljs.core.async.t10836.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_10838){
var self__ = this;
var _10838__$1 = this;
return self__.meta10837;
});})(flag))
;

cljs.core.async.t10836.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t10836.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref.call(null,self__.flag);
});})(flag))
;

cljs.core.async.t10836.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.flag,null);

return true;
});})(flag))
;

cljs.core.async.t10836.getBasis = ((function (flag){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"alt-flag","alt-flag",-1794972754,null),new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta10837","meta10837",-1502545228,null)], null);
});})(flag))
;

cljs.core.async.t10836.cljs$lang$type = true;

cljs.core.async.t10836.cljs$lang$ctorStr = "cljs.core.async/t10836";

cljs.core.async.t10836.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__4910__auto__,writer__4911__auto__,opt__4912__auto__){
return cljs.core._write.call(null,writer__4911__auto__,"cljs.core.async/t10836");
});})(flag))
;

cljs.core.async.__GT_t10836 = ((function (flag){
return (function cljs$core$async$alt_flag_$___GT_t10836(alt_flag__$1,flag__$1,meta10837){
return (new cljs.core.async.t10836(alt_flag__$1,flag__$1,meta10837));
});})(flag))
;

}

return (new cljs.core.async.t10836(cljs$core$async$alt_flag,flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if(typeof cljs.core.async.t10842 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t10842 = (function (alt_handler,flag,cb,meta10843){
this.alt_handler = alt_handler;
this.flag = flag;
this.cb = cb;
this.meta10843 = meta10843;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t10842.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_10844,meta10843__$1){
var self__ = this;
var _10844__$1 = this;
return (new cljs.core.async.t10842(self__.alt_handler,self__.flag,self__.cb,meta10843__$1));
});

cljs.core.async.t10842.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_10844){
var self__ = this;
var _10844__$1 = this;
return self__.meta10843;
});

cljs.core.async.t10842.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t10842.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});

cljs.core.async.t10842.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit.call(null,self__.flag);

return self__.cb;
});

cljs.core.async.t10842.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"alt-handler","alt-handler",963786170,null),new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta10843","meta10843",-2010806672,null)], null);
});

cljs.core.async.t10842.cljs$lang$type = true;

cljs.core.async.t10842.cljs$lang$ctorStr = "cljs.core.async/t10842";

cljs.core.async.t10842.cljs$lang$ctorPrWriter = (function (this__4910__auto__,writer__4911__auto__,opt__4912__auto__){
return cljs.core._write.call(null,writer__4911__auto__,"cljs.core.async/t10842");
});

cljs.core.async.__GT_t10842 = (function cljs$core$async$alt_handler_$___GT_t10842(alt_handler__$1,flag__$1,cb__$1,meta10843){
return (new cljs.core.async.t10842(alt_handler__$1,flag__$1,cb__$1,meta10843));
});

}

return (new cljs.core.async.t10842(cljs$core$async$alt_handler,flag,cb,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * returns derefable [val port] if immediate, nil if enqueued
 */
cljs.core.async.do_alts = (function cljs$core$async$do_alts(fret,ports,opts){
var flag = cljs.core.async.alt_flag.call(null);
var n = cljs.core.count.call(null,ports);
var idxs = cljs.core.async.random_array.call(null,n);
var priority = new cljs.core.Keyword(null,"priority","priority",1431093715).cljs$core$IFn$_invoke$arity$1(opts);
var ret = (function (){var i = (0);
while(true){
if((i < n)){
var idx = (cljs.core.truth_(priority)?i:(idxs[i]));
var port = cljs.core.nth.call(null,ports,idx);
var wport = ((cljs.core.vector_QMARK_.call(null,port))?port.call(null,(0)):null);
var vbox = (cljs.core.truth_(wport)?(function (){var val = port.call(null,(1));
return cljs.core.async.impl.protocols.put_BANG_.call(null,wport,val,cljs.core.async.alt_handler.call(null,flag,((function (i,val,idx,port,wport,flag,n,idxs,priority){
return (function (p1__10845_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__10845_SHARP_,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__10846_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__10846_SHARP_,port], null));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref.call(null,vbox),(function (){var or__4331__auto__ = wport;
if(cljs.core.truth_(or__4331__auto__)){
return or__4331__auto__;
} else {
return port;
}
})()], null));
} else {
var G__10847 = (i + (1));
i = G__10847;
continue;
}
} else {
return null;
}
break;
}
})();
var or__4331__auto__ = ret;
if(cljs.core.truth_(or__4331__auto__)){
return or__4331__auto__;
} else {
if(cljs.core.contains_QMARK_.call(null,opts,new cljs.core.Keyword(null,"default","default",-1987822328))){
var temp__4422__auto__ = (function (){var and__4319__auto__ = cljs.core.async.impl.protocols.active_QMARK_.call(null,flag);
if(cljs.core.truth_(and__4319__auto__)){
return cljs.core.async.impl.protocols.commit.call(null,flag);
} else {
return and__4319__auto__;
}
})();
if(cljs.core.truth_(temp__4422__auto__)){
var got = temp__4422__auto__;
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"default","default",-1987822328).cljs$core$IFn$_invoke$arity$1(opts),new cljs.core.Keyword(null,"default","default",-1987822328)], null));
} else {
return null;
}
} else {
return null;
}
}
});
/**
 * Completes at most one of several channel operations. Must be called
 * inside a (go ...) block. ports is a vector of channel endpoints,
 * which can be either a channel to take from or a vector of
 * [channel-to-put-to val-to-put], in any combination. Takes will be
 * made as if by <!, and puts will be made as if by >!. Unless
 * the :priority option is true, if more than one port operation is
 * ready a non-deterministic choice will be made. If no operation is
 * ready and a :default value is supplied, [default-val :default] will
 * be returned, otherwise alts! will park until the first operation to
 * become ready completes. Returns [val port] of the completed
 * operation, where val is the value taken for takes, and a
 * boolean (true unless already closed, as per put!) for puts.
 * 
 * opts are passed as :key val ... Supported options:
 * 
 * :default val - the value to use if none of the operations are immediately ready
 * :priority true - (default nil) when true, the operations will be tried in order.
 * 
 * Note: there is no guarantee that the port exps or val exprs will be
 * used, nor in what order should they be, so they should not be
 * depended upon for side effects.
 */
cljs.core.async.alts_BANG_ = (function cljs$core$async$alts_BANG_(){
var argseq__5371__auto__ = ((((1) < arguments.length))?(new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,(1)),(0))):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5371__auto__);
});

cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__10850){
var map__10851 = p__10850;
var map__10851__$1 = ((cljs.core.seq_QMARK_.call(null,map__10851))?cljs.core.apply.call(null,cljs.core.hash_map,map__10851):map__10851);
var opts = map__10851__$1;
throw (new Error("alts! used not in (go ...) block"));
});

cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1);

cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq10848){
var G__10849 = cljs.core.first.call(null,seq10848);
var seq10848__$1 = cljs.core.next.call(null,seq10848);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__10849,seq10848__$1);
});
/**
 * Takes elements from the from channel and supplies them to the to
 * channel. By default, the to channel will be closed when the from
 * channel closes, but can be determined by the close?  parameter. Will
 * stop consuming the from channel if the to channel closes
 */
cljs.core.async.pipe = (function cljs$core$async$pipe(){
var G__10853 = arguments.length;
switch (G__10853) {
case 2:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2 = (function (from,to){
return cljs.core.async.pipe.call(null,from,to,true);
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3 = (function (from,to,close_QMARK_){
var c__7383__auto___10902 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__7383__auto___10902){
return (function (){
var f__7384__auto__ = (function (){var switch__7321__auto__ = ((function (c__7383__auto___10902){
return (function (state_10877){
var state_val_10878 = (state_10877[(1)]);
if((state_val_10878 === (7))){
var inst_10873 = (state_10877[(2)]);
var state_10877__$1 = state_10877;
var statearr_10879_10903 = state_10877__$1;
(statearr_10879_10903[(2)] = inst_10873);

(statearr_10879_10903[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10878 === (1))){
var state_10877__$1 = state_10877;
var statearr_10880_10904 = state_10877__$1;
(statearr_10880_10904[(2)] = null);

(statearr_10880_10904[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10878 === (4))){
var inst_10856 = (state_10877[(7)]);
var inst_10856__$1 = (state_10877[(2)]);
var inst_10857 = (inst_10856__$1 == null);
var state_10877__$1 = (function (){var statearr_10881 = state_10877;
(statearr_10881[(7)] = inst_10856__$1);

return statearr_10881;
})();
if(cljs.core.truth_(inst_10857)){
var statearr_10882_10905 = state_10877__$1;
(statearr_10882_10905[(1)] = (5));

} else {
var statearr_10883_10906 = state_10877__$1;
(statearr_10883_10906[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10878 === (13))){
var state_10877__$1 = state_10877;
var statearr_10884_10907 = state_10877__$1;
(statearr_10884_10907[(2)] = null);

(statearr_10884_10907[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10878 === (6))){
var inst_10856 = (state_10877[(7)]);
var state_10877__$1 = state_10877;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_10877__$1,(11),to,inst_10856);
} else {
if((state_val_10878 === (3))){
var inst_10875 = (state_10877[(2)]);
var state_10877__$1 = state_10877;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_10877__$1,inst_10875);
} else {
if((state_val_10878 === (12))){
var state_10877__$1 = state_10877;
var statearr_10885_10908 = state_10877__$1;
(statearr_10885_10908[(2)] = null);

(statearr_10885_10908[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10878 === (2))){
var state_10877__$1 = state_10877;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_10877__$1,(4),from);
} else {
if((state_val_10878 === (11))){
var inst_10866 = (state_10877[(2)]);
var state_10877__$1 = state_10877;
if(cljs.core.truth_(inst_10866)){
var statearr_10886_10909 = state_10877__$1;
(statearr_10886_10909[(1)] = (12));

} else {
var statearr_10887_10910 = state_10877__$1;
(statearr_10887_10910[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10878 === (9))){
var state_10877__$1 = state_10877;
var statearr_10888_10911 = state_10877__$1;
(statearr_10888_10911[(2)] = null);

(statearr_10888_10911[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10878 === (5))){
var state_10877__$1 = state_10877;
if(cljs.core.truth_(close_QMARK_)){
var statearr_10889_10912 = state_10877__$1;
(statearr_10889_10912[(1)] = (8));

} else {
var statearr_10890_10913 = state_10877__$1;
(statearr_10890_10913[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10878 === (14))){
var inst_10871 = (state_10877[(2)]);
var state_10877__$1 = state_10877;
var statearr_10891_10914 = state_10877__$1;
(statearr_10891_10914[(2)] = inst_10871);

(statearr_10891_10914[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10878 === (10))){
var inst_10863 = (state_10877[(2)]);
var state_10877__$1 = state_10877;
var statearr_10892_10915 = state_10877__$1;
(statearr_10892_10915[(2)] = inst_10863);

(statearr_10892_10915[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10878 === (8))){
var inst_10860 = cljs.core.async.close_BANG_.call(null,to);
var state_10877__$1 = state_10877;
var statearr_10893_10916 = state_10877__$1;
(statearr_10893_10916[(2)] = inst_10860);

(statearr_10893_10916[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__7383__auto___10902))
;
return ((function (switch__7321__auto__,c__7383__auto___10902){
return (function() {
var cljs$core$async$state_machine__7322__auto__ = null;
var cljs$core$async$state_machine__7322__auto____0 = (function (){
var statearr_10897 = [null,null,null,null,null,null,null,null];
(statearr_10897[(0)] = cljs$core$async$state_machine__7322__auto__);

(statearr_10897[(1)] = (1));

return statearr_10897;
});
var cljs$core$async$state_machine__7322__auto____1 = (function (state_10877){
while(true){
var ret_value__7323__auto__ = (function (){try{while(true){
var result__7324__auto__ = switch__7321__auto__.call(null,state_10877);
if(cljs.core.keyword_identical_QMARK_.call(null,result__7324__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__7324__auto__;
}
break;
}
}catch (e10898){if((e10898 instanceof Object)){
var ex__7325__auto__ = e10898;
var statearr_10899_10917 = state_10877;
(statearr_10899_10917[(5)] = ex__7325__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_10877);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e10898;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__7323__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__10918 = state_10877;
state_10877 = G__10918;
continue;
} else {
return ret_value__7323__auto__;
}
break;
}
});
cljs$core$async$state_machine__7322__auto__ = function(state_10877){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__7322__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__7322__auto____1.call(this,state_10877);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__7322__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__7322__auto____0;
cljs$core$async$state_machine__7322__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__7322__auto____1;
return cljs$core$async$state_machine__7322__auto__;
})()
;})(switch__7321__auto__,c__7383__auto___10902))
})();
var state__7385__auto__ = (function (){var statearr_10900 = f__7384__auto__.call(null);
(statearr_10900[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7383__auto___10902);

return statearr_10900;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__7385__auto__);
});})(c__7383__auto___10902))
);


return to;
});

cljs.core.async.pipe.cljs$lang$maxFixedArity = 3;
cljs.core.async.pipeline_STAR_ = (function cljs$core$async$pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,type){
if((n > (0))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"pos?","pos?",-244377722,null),new cljs.core.Symbol(null,"n","n",-2092305744,null))))].join('')));
}

var jobs = cljs.core.async.chan.call(null,n);
var results = cljs.core.async.chan.call(null,n);
var process = ((function (jobs,results){
return (function (p__11102){
var vec__11103 = p__11102;
var v = cljs.core.nth.call(null,vec__11103,(0),null);
var p = cljs.core.nth.call(null,vec__11103,(1),null);
var job = vec__11103;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1),xf,ex_handler);
var c__7383__auto___11285 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__7383__auto___11285,res,vec__11103,v,p,job,jobs,results){
return (function (){
var f__7384__auto__ = (function (){var switch__7321__auto__ = ((function (c__7383__auto___11285,res,vec__11103,v,p,job,jobs,results){
return (function (state_11108){
var state_val_11109 = (state_11108[(1)]);
if((state_val_11109 === (1))){
var state_11108__$1 = state_11108;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_11108__$1,(2),res,v);
} else {
if((state_val_11109 === (2))){
var inst_11105 = (state_11108[(2)]);
var inst_11106 = cljs.core.async.close_BANG_.call(null,res);
var state_11108__$1 = (function (){var statearr_11110 = state_11108;
(statearr_11110[(7)] = inst_11105);

return statearr_11110;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_11108__$1,inst_11106);
} else {
return null;
}
}
});})(c__7383__auto___11285,res,vec__11103,v,p,job,jobs,results))
;
return ((function (switch__7321__auto__,c__7383__auto___11285,res,vec__11103,v,p,job,jobs,results){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__7322__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__7322__auto____0 = (function (){
var statearr_11114 = [null,null,null,null,null,null,null,null];
(statearr_11114[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__7322__auto__);

(statearr_11114[(1)] = (1));

return statearr_11114;
});
var cljs$core$async$pipeline_STAR__$_state_machine__7322__auto____1 = (function (state_11108){
while(true){
var ret_value__7323__auto__ = (function (){try{while(true){
var result__7324__auto__ = switch__7321__auto__.call(null,state_11108);
if(cljs.core.keyword_identical_QMARK_.call(null,result__7324__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__7324__auto__;
}
break;
}
}catch (e11115){if((e11115 instanceof Object)){
var ex__7325__auto__ = e11115;
var statearr_11116_11286 = state_11108;
(statearr_11116_11286[(5)] = ex__7325__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11108);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e11115;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__7323__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__11287 = state_11108;
state_11108 = G__11287;
continue;
} else {
return ret_value__7323__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__7322__auto__ = function(state_11108){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__7322__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__7322__auto____1.call(this,state_11108);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__7322__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__7322__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__7322__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__7322__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__7322__auto__;
})()
;})(switch__7321__auto__,c__7383__auto___11285,res,vec__11103,v,p,job,jobs,results))
})();
var state__7385__auto__ = (function (){var statearr_11117 = f__7384__auto__.call(null);
(statearr_11117[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7383__auto___11285);

return statearr_11117;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__7385__auto__);
});})(c__7383__auto___11285,res,vec__11103,v,p,job,jobs,results))
);


cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results))
;
var async = ((function (jobs,results,process){
return (function (p__11118){
var vec__11119 = p__11118;
var v = cljs.core.nth.call(null,vec__11119,(0),null);
var p = cljs.core.nth.call(null,vec__11119,(1),null);
var job = vec__11119;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1));
xf.call(null,v,res);

cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results,process))
;
var n__5216__auto___11288 = n;
var __11289 = (0);
while(true){
if((__11289 < n__5216__auto___11288)){
var G__11120_11290 = (((type instanceof cljs.core.Keyword))?type.fqn:null);
switch (G__11120_11290) {
case "compute":
var c__7383__auto___11292 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__11289,c__7383__auto___11292,G__11120_11290,n__5216__auto___11288,jobs,results,process,async){
return (function (){
var f__7384__auto__ = (function (){var switch__7321__auto__ = ((function (__11289,c__7383__auto___11292,G__11120_11290,n__5216__auto___11288,jobs,results,process,async){
return (function (state_11133){
var state_val_11134 = (state_11133[(1)]);
if((state_val_11134 === (1))){
var state_11133__$1 = state_11133;
var statearr_11135_11293 = state_11133__$1;
(statearr_11135_11293[(2)] = null);

(statearr_11135_11293[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11134 === (2))){
var state_11133__$1 = state_11133;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_11133__$1,(4),jobs);
} else {
if((state_val_11134 === (3))){
var inst_11131 = (state_11133[(2)]);
var state_11133__$1 = state_11133;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_11133__$1,inst_11131);
} else {
if((state_val_11134 === (4))){
var inst_11123 = (state_11133[(2)]);
var inst_11124 = process.call(null,inst_11123);
var state_11133__$1 = state_11133;
if(cljs.core.truth_(inst_11124)){
var statearr_11136_11294 = state_11133__$1;
(statearr_11136_11294[(1)] = (5));

} else {
var statearr_11137_11295 = state_11133__$1;
(statearr_11137_11295[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11134 === (5))){
var state_11133__$1 = state_11133;
var statearr_11138_11296 = state_11133__$1;
(statearr_11138_11296[(2)] = null);

(statearr_11138_11296[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11134 === (6))){
var state_11133__$1 = state_11133;
var statearr_11139_11297 = state_11133__$1;
(statearr_11139_11297[(2)] = null);

(statearr_11139_11297[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11134 === (7))){
var inst_11129 = (state_11133[(2)]);
var state_11133__$1 = state_11133;
var statearr_11140_11298 = state_11133__$1;
(statearr_11140_11298[(2)] = inst_11129);

(statearr_11140_11298[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
});})(__11289,c__7383__auto___11292,G__11120_11290,n__5216__auto___11288,jobs,results,process,async))
;
return ((function (__11289,switch__7321__auto__,c__7383__auto___11292,G__11120_11290,n__5216__auto___11288,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__7322__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__7322__auto____0 = (function (){
var statearr_11144 = [null,null,null,null,null,null,null];
(statearr_11144[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__7322__auto__);

(statearr_11144[(1)] = (1));

return statearr_11144;
});
var cljs$core$async$pipeline_STAR__$_state_machine__7322__auto____1 = (function (state_11133){
while(true){
var ret_value__7323__auto__ = (function (){try{while(true){
var result__7324__auto__ = switch__7321__auto__.call(null,state_11133);
if(cljs.core.keyword_identical_QMARK_.call(null,result__7324__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__7324__auto__;
}
break;
}
}catch (e11145){if((e11145 instanceof Object)){
var ex__7325__auto__ = e11145;
var statearr_11146_11299 = state_11133;
(statearr_11146_11299[(5)] = ex__7325__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11133);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e11145;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__7323__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__11300 = state_11133;
state_11133 = G__11300;
continue;
} else {
return ret_value__7323__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__7322__auto__ = function(state_11133){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__7322__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__7322__auto____1.call(this,state_11133);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__7322__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__7322__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__7322__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__7322__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__7322__auto__;
})()
;})(__11289,switch__7321__auto__,c__7383__auto___11292,G__11120_11290,n__5216__auto___11288,jobs,results,process,async))
})();
var state__7385__auto__ = (function (){var statearr_11147 = f__7384__auto__.call(null);
(statearr_11147[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7383__auto___11292);

return statearr_11147;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__7385__auto__);
});})(__11289,c__7383__auto___11292,G__11120_11290,n__5216__auto___11288,jobs,results,process,async))
);


break;
case "async":
var c__7383__auto___11301 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__11289,c__7383__auto___11301,G__11120_11290,n__5216__auto___11288,jobs,results,process,async){
return (function (){
var f__7384__auto__ = (function (){var switch__7321__auto__ = ((function (__11289,c__7383__auto___11301,G__11120_11290,n__5216__auto___11288,jobs,results,process,async){
return (function (state_11160){
var state_val_11161 = (state_11160[(1)]);
if((state_val_11161 === (1))){
var state_11160__$1 = state_11160;
var statearr_11162_11302 = state_11160__$1;
(statearr_11162_11302[(2)] = null);

(statearr_11162_11302[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11161 === (2))){
var state_11160__$1 = state_11160;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_11160__$1,(4),jobs);
} else {
if((state_val_11161 === (3))){
var inst_11158 = (state_11160[(2)]);
var state_11160__$1 = state_11160;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_11160__$1,inst_11158);
} else {
if((state_val_11161 === (4))){
var inst_11150 = (state_11160[(2)]);
var inst_11151 = async.call(null,inst_11150);
var state_11160__$1 = state_11160;
if(cljs.core.truth_(inst_11151)){
var statearr_11163_11303 = state_11160__$1;
(statearr_11163_11303[(1)] = (5));

} else {
var statearr_11164_11304 = state_11160__$1;
(statearr_11164_11304[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11161 === (5))){
var state_11160__$1 = state_11160;
var statearr_11165_11305 = state_11160__$1;
(statearr_11165_11305[(2)] = null);

(statearr_11165_11305[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11161 === (6))){
var state_11160__$1 = state_11160;
var statearr_11166_11306 = state_11160__$1;
(statearr_11166_11306[(2)] = null);

(statearr_11166_11306[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11161 === (7))){
var inst_11156 = (state_11160[(2)]);
var state_11160__$1 = state_11160;
var statearr_11167_11307 = state_11160__$1;
(statearr_11167_11307[(2)] = inst_11156);

(statearr_11167_11307[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
});})(__11289,c__7383__auto___11301,G__11120_11290,n__5216__auto___11288,jobs,results,process,async))
;
return ((function (__11289,switch__7321__auto__,c__7383__auto___11301,G__11120_11290,n__5216__auto___11288,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__7322__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__7322__auto____0 = (function (){
var statearr_11171 = [null,null,null,null,null,null,null];
(statearr_11171[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__7322__auto__);

(statearr_11171[(1)] = (1));

return statearr_11171;
});
var cljs$core$async$pipeline_STAR__$_state_machine__7322__auto____1 = (function (state_11160){
while(true){
var ret_value__7323__auto__ = (function (){try{while(true){
var result__7324__auto__ = switch__7321__auto__.call(null,state_11160);
if(cljs.core.keyword_identical_QMARK_.call(null,result__7324__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__7324__auto__;
}
break;
}
}catch (e11172){if((e11172 instanceof Object)){
var ex__7325__auto__ = e11172;
var statearr_11173_11308 = state_11160;
(statearr_11173_11308[(5)] = ex__7325__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11160);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e11172;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__7323__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__11309 = state_11160;
state_11160 = G__11309;
continue;
} else {
return ret_value__7323__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__7322__auto__ = function(state_11160){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__7322__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__7322__auto____1.call(this,state_11160);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__7322__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__7322__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__7322__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__7322__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__7322__auto__;
})()
;})(__11289,switch__7321__auto__,c__7383__auto___11301,G__11120_11290,n__5216__auto___11288,jobs,results,process,async))
})();
var state__7385__auto__ = (function (){var statearr_11174 = f__7384__auto__.call(null);
(statearr_11174[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7383__auto___11301);

return statearr_11174;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__7385__auto__);
});})(__11289,c__7383__auto___11301,G__11120_11290,n__5216__auto___11288,jobs,results,process,async))
);


break;
default:
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(type)].join('')));

}

var G__11310 = (__11289 + (1));
__11289 = G__11310;
continue;
} else {
}
break;
}

var c__7383__auto___11311 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__7383__auto___11311,jobs,results,process,async){
return (function (){
var f__7384__auto__ = (function (){var switch__7321__auto__ = ((function (c__7383__auto___11311,jobs,results,process,async){
return (function (state_11196){
var state_val_11197 = (state_11196[(1)]);
if((state_val_11197 === (1))){
var state_11196__$1 = state_11196;
var statearr_11198_11312 = state_11196__$1;
(statearr_11198_11312[(2)] = null);

(statearr_11198_11312[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11197 === (2))){
var state_11196__$1 = state_11196;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_11196__$1,(4),from);
} else {
if((state_val_11197 === (3))){
var inst_11194 = (state_11196[(2)]);
var state_11196__$1 = state_11196;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_11196__$1,inst_11194);
} else {
if((state_val_11197 === (4))){
var inst_11177 = (state_11196[(7)]);
var inst_11177__$1 = (state_11196[(2)]);
var inst_11178 = (inst_11177__$1 == null);
var state_11196__$1 = (function (){var statearr_11199 = state_11196;
(statearr_11199[(7)] = inst_11177__$1);

return statearr_11199;
})();
if(cljs.core.truth_(inst_11178)){
var statearr_11200_11313 = state_11196__$1;
(statearr_11200_11313[(1)] = (5));

} else {
var statearr_11201_11314 = state_11196__$1;
(statearr_11201_11314[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11197 === (5))){
var inst_11180 = cljs.core.async.close_BANG_.call(null,jobs);
var state_11196__$1 = state_11196;
var statearr_11202_11315 = state_11196__$1;
(statearr_11202_11315[(2)] = inst_11180);

(statearr_11202_11315[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11197 === (6))){
var inst_11182 = (state_11196[(8)]);
var inst_11177 = (state_11196[(7)]);
var inst_11182__$1 = cljs.core.async.chan.call(null,(1));
var inst_11183 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_11184 = [inst_11177,inst_11182__$1];
var inst_11185 = (new cljs.core.PersistentVector(null,2,(5),inst_11183,inst_11184,null));
var state_11196__$1 = (function (){var statearr_11203 = state_11196;
(statearr_11203[(8)] = inst_11182__$1);

return statearr_11203;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_11196__$1,(8),jobs,inst_11185);
} else {
if((state_val_11197 === (7))){
var inst_11192 = (state_11196[(2)]);
var state_11196__$1 = state_11196;
var statearr_11204_11316 = state_11196__$1;
(statearr_11204_11316[(2)] = inst_11192);

(statearr_11204_11316[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11197 === (8))){
var inst_11182 = (state_11196[(8)]);
var inst_11187 = (state_11196[(2)]);
var state_11196__$1 = (function (){var statearr_11205 = state_11196;
(statearr_11205[(9)] = inst_11187);

return statearr_11205;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_11196__$1,(9),results,inst_11182);
} else {
if((state_val_11197 === (9))){
var inst_11189 = (state_11196[(2)]);
var state_11196__$1 = (function (){var statearr_11206 = state_11196;
(statearr_11206[(10)] = inst_11189);

return statearr_11206;
})();
var statearr_11207_11317 = state_11196__$1;
(statearr_11207_11317[(2)] = null);

(statearr_11207_11317[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
});})(c__7383__auto___11311,jobs,results,process,async))
;
return ((function (switch__7321__auto__,c__7383__auto___11311,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__7322__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__7322__auto____0 = (function (){
var statearr_11211 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_11211[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__7322__auto__);

(statearr_11211[(1)] = (1));

return statearr_11211;
});
var cljs$core$async$pipeline_STAR__$_state_machine__7322__auto____1 = (function (state_11196){
while(true){
var ret_value__7323__auto__ = (function (){try{while(true){
var result__7324__auto__ = switch__7321__auto__.call(null,state_11196);
if(cljs.core.keyword_identical_QMARK_.call(null,result__7324__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__7324__auto__;
}
break;
}
}catch (e11212){if((e11212 instanceof Object)){
var ex__7325__auto__ = e11212;
var statearr_11213_11318 = state_11196;
(statearr_11213_11318[(5)] = ex__7325__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11196);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e11212;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__7323__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__11319 = state_11196;
state_11196 = G__11319;
continue;
} else {
return ret_value__7323__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__7322__auto__ = function(state_11196){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__7322__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__7322__auto____1.call(this,state_11196);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__7322__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__7322__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__7322__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__7322__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__7322__auto__;
})()
;})(switch__7321__auto__,c__7383__auto___11311,jobs,results,process,async))
})();
var state__7385__auto__ = (function (){var statearr_11214 = f__7384__auto__.call(null);
(statearr_11214[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7383__auto___11311);

return statearr_11214;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__7385__auto__);
});})(c__7383__auto___11311,jobs,results,process,async))
);


var c__7383__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__7383__auto__,jobs,results,process,async){
return (function (){
var f__7384__auto__ = (function (){var switch__7321__auto__ = ((function (c__7383__auto__,jobs,results,process,async){
return (function (state_11252){
var state_val_11253 = (state_11252[(1)]);
if((state_val_11253 === (7))){
var inst_11248 = (state_11252[(2)]);
var state_11252__$1 = state_11252;
var statearr_11254_11320 = state_11252__$1;
(statearr_11254_11320[(2)] = inst_11248);

(statearr_11254_11320[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11253 === (20))){
var state_11252__$1 = state_11252;
var statearr_11255_11321 = state_11252__$1;
(statearr_11255_11321[(2)] = null);

(statearr_11255_11321[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11253 === (1))){
var state_11252__$1 = state_11252;
var statearr_11256_11322 = state_11252__$1;
(statearr_11256_11322[(2)] = null);

(statearr_11256_11322[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11253 === (4))){
var inst_11217 = (state_11252[(7)]);
var inst_11217__$1 = (state_11252[(2)]);
var inst_11218 = (inst_11217__$1 == null);
var state_11252__$1 = (function (){var statearr_11257 = state_11252;
(statearr_11257[(7)] = inst_11217__$1);

return statearr_11257;
})();
if(cljs.core.truth_(inst_11218)){
var statearr_11258_11323 = state_11252__$1;
(statearr_11258_11323[(1)] = (5));

} else {
var statearr_11259_11324 = state_11252__$1;
(statearr_11259_11324[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11253 === (15))){
var inst_11230 = (state_11252[(8)]);
var state_11252__$1 = state_11252;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_11252__$1,(18),to,inst_11230);
} else {
if((state_val_11253 === (21))){
var inst_11243 = (state_11252[(2)]);
var state_11252__$1 = state_11252;
var statearr_11260_11325 = state_11252__$1;
(statearr_11260_11325[(2)] = inst_11243);

(statearr_11260_11325[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11253 === (13))){
var inst_11245 = (state_11252[(2)]);
var state_11252__$1 = (function (){var statearr_11261 = state_11252;
(statearr_11261[(9)] = inst_11245);

return statearr_11261;
})();
var statearr_11262_11326 = state_11252__$1;
(statearr_11262_11326[(2)] = null);

(statearr_11262_11326[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11253 === (6))){
var inst_11217 = (state_11252[(7)]);
var state_11252__$1 = state_11252;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_11252__$1,(11),inst_11217);
} else {
if((state_val_11253 === (17))){
var inst_11238 = (state_11252[(2)]);
var state_11252__$1 = state_11252;
if(cljs.core.truth_(inst_11238)){
var statearr_11263_11327 = state_11252__$1;
(statearr_11263_11327[(1)] = (19));

} else {
var statearr_11264_11328 = state_11252__$1;
(statearr_11264_11328[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11253 === (3))){
var inst_11250 = (state_11252[(2)]);
var state_11252__$1 = state_11252;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_11252__$1,inst_11250);
} else {
if((state_val_11253 === (12))){
var inst_11227 = (state_11252[(10)]);
var state_11252__$1 = state_11252;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_11252__$1,(14),inst_11227);
} else {
if((state_val_11253 === (2))){
var state_11252__$1 = state_11252;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_11252__$1,(4),results);
} else {
if((state_val_11253 === (19))){
var state_11252__$1 = state_11252;
var statearr_11265_11329 = state_11252__$1;
(statearr_11265_11329[(2)] = null);

(statearr_11265_11329[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11253 === (11))){
var inst_11227 = (state_11252[(2)]);
var state_11252__$1 = (function (){var statearr_11266 = state_11252;
(statearr_11266[(10)] = inst_11227);

return statearr_11266;
})();
var statearr_11267_11330 = state_11252__$1;
(statearr_11267_11330[(2)] = null);

(statearr_11267_11330[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11253 === (9))){
var state_11252__$1 = state_11252;
var statearr_11268_11331 = state_11252__$1;
(statearr_11268_11331[(2)] = null);

(statearr_11268_11331[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11253 === (5))){
var state_11252__$1 = state_11252;
if(cljs.core.truth_(close_QMARK_)){
var statearr_11269_11332 = state_11252__$1;
(statearr_11269_11332[(1)] = (8));

} else {
var statearr_11270_11333 = state_11252__$1;
(statearr_11270_11333[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11253 === (14))){
var inst_11230 = (state_11252[(8)]);
var inst_11232 = (state_11252[(11)]);
var inst_11230__$1 = (state_11252[(2)]);
var inst_11231 = (inst_11230__$1 == null);
var inst_11232__$1 = cljs.core.not.call(null,inst_11231);
var state_11252__$1 = (function (){var statearr_11271 = state_11252;
(statearr_11271[(8)] = inst_11230__$1);

(statearr_11271[(11)] = inst_11232__$1);

return statearr_11271;
})();
if(inst_11232__$1){
var statearr_11272_11334 = state_11252__$1;
(statearr_11272_11334[(1)] = (15));

} else {
var statearr_11273_11335 = state_11252__$1;
(statearr_11273_11335[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11253 === (16))){
var inst_11232 = (state_11252[(11)]);
var state_11252__$1 = state_11252;
var statearr_11274_11336 = state_11252__$1;
(statearr_11274_11336[(2)] = inst_11232);

(statearr_11274_11336[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11253 === (10))){
var inst_11224 = (state_11252[(2)]);
var state_11252__$1 = state_11252;
var statearr_11275_11337 = state_11252__$1;
(statearr_11275_11337[(2)] = inst_11224);

(statearr_11275_11337[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11253 === (18))){
var inst_11235 = (state_11252[(2)]);
var state_11252__$1 = state_11252;
var statearr_11276_11338 = state_11252__$1;
(statearr_11276_11338[(2)] = inst_11235);

(statearr_11276_11338[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11253 === (8))){
var inst_11221 = cljs.core.async.close_BANG_.call(null,to);
var state_11252__$1 = state_11252;
var statearr_11277_11339 = state_11252__$1;
(statearr_11277_11339[(2)] = inst_11221);

(statearr_11277_11339[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__7383__auto__,jobs,results,process,async))
;
return ((function (switch__7321__auto__,c__7383__auto__,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__7322__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__7322__auto____0 = (function (){
var statearr_11281 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_11281[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__7322__auto__);

(statearr_11281[(1)] = (1));

return statearr_11281;
});
var cljs$core$async$pipeline_STAR__$_state_machine__7322__auto____1 = (function (state_11252){
while(true){
var ret_value__7323__auto__ = (function (){try{while(true){
var result__7324__auto__ = switch__7321__auto__.call(null,state_11252);
if(cljs.core.keyword_identical_QMARK_.call(null,result__7324__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__7324__auto__;
}
break;
}
}catch (e11282){if((e11282 instanceof Object)){
var ex__7325__auto__ = e11282;
var statearr_11283_11340 = state_11252;
(statearr_11283_11340[(5)] = ex__7325__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11252);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e11282;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__7323__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__11341 = state_11252;
state_11252 = G__11341;
continue;
} else {
return ret_value__7323__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__7322__auto__ = function(state_11252){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__7322__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__7322__auto____1.call(this,state_11252);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__7322__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__7322__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__7322__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__7322__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__7322__auto__;
})()
;})(switch__7321__auto__,c__7383__auto__,jobs,results,process,async))
})();
var state__7385__auto__ = (function (){var statearr_11284 = f__7384__auto__.call(null);
(statearr_11284[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7383__auto__);

return statearr_11284;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__7385__auto__);
});})(c__7383__auto__,jobs,results,process,async))
);

return c__7383__auto__;
});
/**
 * Takes elements from the from channel and supplies them to the to
 * channel, subject to the async function af, with parallelism n. af
 * must be a function of two arguments, the first an input value and
 * the second a channel on which to place the result(s). af must close!
 * the channel before returning.  The presumption is that af will
 * return immediately, having launched some asynchronous operation
 * whose completion/callback will manipulate the result channel. Outputs
 * will be returned in order relative to  the inputs. By default, the to
 * channel will be closed when the from channel closes, but can be
 * determined by the close?  parameter. Will stop consuming the from
 * channel if the to channel closes.
 */
cljs.core.async.pipeline_async = (function cljs$core$async$pipeline_async(){
var G__11343 = arguments.length;
switch (G__11343) {
case 4:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4 = (function (n,to,af,from){
return cljs.core.async.pipeline_async.call(null,n,to,af,from,true);
});

cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5 = (function (n,to,af,from,close_QMARK_){
return cljs.core.async.pipeline_STAR_.call(null,n,to,af,from,close_QMARK_,null,new cljs.core.Keyword(null,"async","async",1050769601));
});

cljs.core.async.pipeline_async.cljs$lang$maxFixedArity = 5;
/**
 * Takes elements from the from channel and supplies them to the to
 * channel, subject to the transducer xf, with parallelism n. Because
 * it is parallel, the transducer will be applied independently to each
 * element, not across elements, and may produce zero or more outputs
 * per input.  Outputs will be returned in order relative to the
 * inputs. By default, the to channel will be closed when the from
 * channel closes, but can be determined by the close?  parameter. Will
 * stop consuming the from channel if the to channel closes.
 * 
 * Note this is supplied for API compatibility with the Clojure version.
 * Values of N > 1 will not result in actual concurrency in a
 * single-threaded runtime.
 */
cljs.core.async.pipeline = (function cljs$core$async$pipeline(){
var G__11346 = arguments.length;
switch (G__11346) {
case 4:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
case 6:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4 = (function (n,to,xf,from){
return cljs.core.async.pipeline.call(null,n,to,xf,from,true);
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5 = (function (n,to,xf,from,close_QMARK_){
return cljs.core.async.pipeline.call(null,n,to,xf,from,close_QMARK_,null);
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6 = (function (n,to,xf,from,close_QMARK_,ex_handler){
return cljs.core.async.pipeline_STAR_.call(null,n,to,xf,from,close_QMARK_,ex_handler,new cljs.core.Keyword(null,"compute","compute",1555393130));
});

cljs.core.async.pipeline.cljs$lang$maxFixedArity = 6;
/**
 * Takes a predicate and a source channel and returns a vector of two
 * channels, the first of which will contain the values for which the
 * predicate returned true, the second those for which it returned
 * false.
 * 
 * The out channels will be unbuffered by default, or two buf-or-ns can
 * be supplied. The channels will close after the source channel has
 * closed.
 */
cljs.core.async.split = (function cljs$core$async$split(){
var G__11349 = arguments.length;
switch (G__11349) {
case 2:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.split.call(null,p,ch,null,null);
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.call(null,t_buf_or_n);
var fc = cljs.core.async.chan.call(null,f_buf_or_n);
var c__7383__auto___11401 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__7383__auto___11401,tc,fc){
return (function (){
var f__7384__auto__ = (function (){var switch__7321__auto__ = ((function (c__7383__auto___11401,tc,fc){
return (function (state_11375){
var state_val_11376 = (state_11375[(1)]);
if((state_val_11376 === (7))){
var inst_11371 = (state_11375[(2)]);
var state_11375__$1 = state_11375;
var statearr_11377_11402 = state_11375__$1;
(statearr_11377_11402[(2)] = inst_11371);

(statearr_11377_11402[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11376 === (1))){
var state_11375__$1 = state_11375;
var statearr_11378_11403 = state_11375__$1;
(statearr_11378_11403[(2)] = null);

(statearr_11378_11403[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11376 === (4))){
var inst_11352 = (state_11375[(7)]);
var inst_11352__$1 = (state_11375[(2)]);
var inst_11353 = (inst_11352__$1 == null);
var state_11375__$1 = (function (){var statearr_11379 = state_11375;
(statearr_11379[(7)] = inst_11352__$1);

return statearr_11379;
})();
if(cljs.core.truth_(inst_11353)){
var statearr_11380_11404 = state_11375__$1;
(statearr_11380_11404[(1)] = (5));

} else {
var statearr_11381_11405 = state_11375__$1;
(statearr_11381_11405[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11376 === (13))){
var state_11375__$1 = state_11375;
var statearr_11382_11406 = state_11375__$1;
(statearr_11382_11406[(2)] = null);

(statearr_11382_11406[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11376 === (6))){
var inst_11352 = (state_11375[(7)]);
var inst_11358 = p.call(null,inst_11352);
var state_11375__$1 = state_11375;
if(cljs.core.truth_(inst_11358)){
var statearr_11383_11407 = state_11375__$1;
(statearr_11383_11407[(1)] = (9));

} else {
var statearr_11384_11408 = state_11375__$1;
(statearr_11384_11408[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11376 === (3))){
var inst_11373 = (state_11375[(2)]);
var state_11375__$1 = state_11375;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_11375__$1,inst_11373);
} else {
if((state_val_11376 === (12))){
var state_11375__$1 = state_11375;
var statearr_11385_11409 = state_11375__$1;
(statearr_11385_11409[(2)] = null);

(statearr_11385_11409[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11376 === (2))){
var state_11375__$1 = state_11375;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_11375__$1,(4),ch);
} else {
if((state_val_11376 === (11))){
var inst_11352 = (state_11375[(7)]);
var inst_11362 = (state_11375[(2)]);
var state_11375__$1 = state_11375;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_11375__$1,(8),inst_11362,inst_11352);
} else {
if((state_val_11376 === (9))){
var state_11375__$1 = state_11375;
var statearr_11386_11410 = state_11375__$1;
(statearr_11386_11410[(2)] = tc);

(statearr_11386_11410[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11376 === (5))){
var inst_11355 = cljs.core.async.close_BANG_.call(null,tc);
var inst_11356 = cljs.core.async.close_BANG_.call(null,fc);
var state_11375__$1 = (function (){var statearr_11387 = state_11375;
(statearr_11387[(8)] = inst_11355);

return statearr_11387;
})();
var statearr_11388_11411 = state_11375__$1;
(statearr_11388_11411[(2)] = inst_11356);

(statearr_11388_11411[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11376 === (14))){
var inst_11369 = (state_11375[(2)]);
var state_11375__$1 = state_11375;
var statearr_11389_11412 = state_11375__$1;
(statearr_11389_11412[(2)] = inst_11369);

(statearr_11389_11412[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11376 === (10))){
var state_11375__$1 = state_11375;
var statearr_11390_11413 = state_11375__$1;
(statearr_11390_11413[(2)] = fc);

(statearr_11390_11413[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11376 === (8))){
var inst_11364 = (state_11375[(2)]);
var state_11375__$1 = state_11375;
if(cljs.core.truth_(inst_11364)){
var statearr_11391_11414 = state_11375__$1;
(statearr_11391_11414[(1)] = (12));

} else {
var statearr_11392_11415 = state_11375__$1;
(statearr_11392_11415[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__7383__auto___11401,tc,fc))
;
return ((function (switch__7321__auto__,c__7383__auto___11401,tc,fc){
return (function() {
var cljs$core$async$state_machine__7322__auto__ = null;
var cljs$core$async$state_machine__7322__auto____0 = (function (){
var statearr_11396 = [null,null,null,null,null,null,null,null,null];
(statearr_11396[(0)] = cljs$core$async$state_machine__7322__auto__);

(statearr_11396[(1)] = (1));

return statearr_11396;
});
var cljs$core$async$state_machine__7322__auto____1 = (function (state_11375){
while(true){
var ret_value__7323__auto__ = (function (){try{while(true){
var result__7324__auto__ = switch__7321__auto__.call(null,state_11375);
if(cljs.core.keyword_identical_QMARK_.call(null,result__7324__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__7324__auto__;
}
break;
}
}catch (e11397){if((e11397 instanceof Object)){
var ex__7325__auto__ = e11397;
var statearr_11398_11416 = state_11375;
(statearr_11398_11416[(5)] = ex__7325__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11375);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e11397;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__7323__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__11417 = state_11375;
state_11375 = G__11417;
continue;
} else {
return ret_value__7323__auto__;
}
break;
}
});
cljs$core$async$state_machine__7322__auto__ = function(state_11375){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__7322__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__7322__auto____1.call(this,state_11375);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__7322__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__7322__auto____0;
cljs$core$async$state_machine__7322__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__7322__auto____1;
return cljs$core$async$state_machine__7322__auto__;
})()
;})(switch__7321__auto__,c__7383__auto___11401,tc,fc))
})();
var state__7385__auto__ = (function (){var statearr_11399 = f__7384__auto__.call(null);
(statearr_11399[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7383__auto___11401);

return statearr_11399;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__7385__auto__);
});})(c__7383__auto___11401,tc,fc))
);


return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tc,fc], null);
});

cljs.core.async.split.cljs$lang$maxFixedArity = 4;
/**
 * f should be a function of 2 arguments. Returns a channel containing
 * the single result of applying f to init and the first item from the
 * channel, then applying f to that result and the 2nd item, etc. If
 * the channel closes without yielding items, returns init and f is not
 * called. ch must close before reduce produces a result.
 */
cljs.core.async.reduce = (function cljs$core$async$reduce(f,init,ch){
var c__7383__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__7383__auto__){
return (function (){
var f__7384__auto__ = (function (){var switch__7321__auto__ = ((function (c__7383__auto__){
return (function (state_11464){
var state_val_11465 = (state_11464[(1)]);
if((state_val_11465 === (1))){
var inst_11450 = init;
var state_11464__$1 = (function (){var statearr_11466 = state_11464;
(statearr_11466[(7)] = inst_11450);

return statearr_11466;
})();
var statearr_11467_11482 = state_11464__$1;
(statearr_11467_11482[(2)] = null);

(statearr_11467_11482[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11465 === (2))){
var state_11464__$1 = state_11464;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_11464__$1,(4),ch);
} else {
if((state_val_11465 === (3))){
var inst_11462 = (state_11464[(2)]);
var state_11464__$1 = state_11464;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_11464__$1,inst_11462);
} else {
if((state_val_11465 === (4))){
var inst_11453 = (state_11464[(8)]);
var inst_11453__$1 = (state_11464[(2)]);
var inst_11454 = (inst_11453__$1 == null);
var state_11464__$1 = (function (){var statearr_11468 = state_11464;
(statearr_11468[(8)] = inst_11453__$1);

return statearr_11468;
})();
if(cljs.core.truth_(inst_11454)){
var statearr_11469_11483 = state_11464__$1;
(statearr_11469_11483[(1)] = (5));

} else {
var statearr_11470_11484 = state_11464__$1;
(statearr_11470_11484[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11465 === (5))){
var inst_11450 = (state_11464[(7)]);
var state_11464__$1 = state_11464;
var statearr_11471_11485 = state_11464__$1;
(statearr_11471_11485[(2)] = inst_11450);

(statearr_11471_11485[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11465 === (6))){
var inst_11453 = (state_11464[(8)]);
var inst_11450 = (state_11464[(7)]);
var inst_11457 = f.call(null,inst_11450,inst_11453);
var inst_11450__$1 = inst_11457;
var state_11464__$1 = (function (){var statearr_11472 = state_11464;
(statearr_11472[(7)] = inst_11450__$1);

return statearr_11472;
})();
var statearr_11473_11486 = state_11464__$1;
(statearr_11473_11486[(2)] = null);

(statearr_11473_11486[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11465 === (7))){
var inst_11460 = (state_11464[(2)]);
var state_11464__$1 = state_11464;
var statearr_11474_11487 = state_11464__$1;
(statearr_11474_11487[(2)] = inst_11460);

(statearr_11474_11487[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
});})(c__7383__auto__))
;
return ((function (switch__7321__auto__,c__7383__auto__){
return (function() {
var cljs$core$async$reduce_$_state_machine__7322__auto__ = null;
var cljs$core$async$reduce_$_state_machine__7322__auto____0 = (function (){
var statearr_11478 = [null,null,null,null,null,null,null,null,null];
(statearr_11478[(0)] = cljs$core$async$reduce_$_state_machine__7322__auto__);

(statearr_11478[(1)] = (1));

return statearr_11478;
});
var cljs$core$async$reduce_$_state_machine__7322__auto____1 = (function (state_11464){
while(true){
var ret_value__7323__auto__ = (function (){try{while(true){
var result__7324__auto__ = switch__7321__auto__.call(null,state_11464);
if(cljs.core.keyword_identical_QMARK_.call(null,result__7324__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__7324__auto__;
}
break;
}
}catch (e11479){if((e11479 instanceof Object)){
var ex__7325__auto__ = e11479;
var statearr_11480_11488 = state_11464;
(statearr_11480_11488[(5)] = ex__7325__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11464);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e11479;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__7323__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__11489 = state_11464;
state_11464 = G__11489;
continue;
} else {
return ret_value__7323__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__7322__auto__ = function(state_11464){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__7322__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__7322__auto____1.call(this,state_11464);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__7322__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__7322__auto____0;
cljs$core$async$reduce_$_state_machine__7322__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__7322__auto____1;
return cljs$core$async$reduce_$_state_machine__7322__auto__;
})()
;})(switch__7321__auto__,c__7383__auto__))
})();
var state__7385__auto__ = (function (){var statearr_11481 = f__7384__auto__.call(null);
(statearr_11481[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7383__auto__);

return statearr_11481;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__7385__auto__);
});})(c__7383__auto__))
);

return c__7383__auto__;
});
/**
 * Puts the contents of coll into the supplied channel.
 * 
 * By default the channel will be closed after the items are copied,
 * but can be determined by the close? parameter.
 * 
 * Returns a channel which will close after the items are copied.
 */
cljs.core.async.onto_chan = (function cljs$core$async$onto_chan(){
var G__11491 = arguments.length;
switch (G__11491) {
case 2:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan.call(null,ch,coll,true);
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
var c__7383__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__7383__auto__){
return (function (){
var f__7384__auto__ = (function (){var switch__7321__auto__ = ((function (c__7383__auto__){
return (function (state_11516){
var state_val_11517 = (state_11516[(1)]);
if((state_val_11517 === (7))){
var inst_11498 = (state_11516[(2)]);
var state_11516__$1 = state_11516;
var statearr_11518_11542 = state_11516__$1;
(statearr_11518_11542[(2)] = inst_11498);

(statearr_11518_11542[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11517 === (1))){
var inst_11492 = cljs.core.seq.call(null,coll);
var inst_11493 = inst_11492;
var state_11516__$1 = (function (){var statearr_11519 = state_11516;
(statearr_11519[(7)] = inst_11493);

return statearr_11519;
})();
var statearr_11520_11543 = state_11516__$1;
(statearr_11520_11543[(2)] = null);

(statearr_11520_11543[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11517 === (4))){
var inst_11493 = (state_11516[(7)]);
var inst_11496 = cljs.core.first.call(null,inst_11493);
var state_11516__$1 = state_11516;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_11516__$1,(7),ch,inst_11496);
} else {
if((state_val_11517 === (13))){
var inst_11510 = (state_11516[(2)]);
var state_11516__$1 = state_11516;
var statearr_11521_11544 = state_11516__$1;
(statearr_11521_11544[(2)] = inst_11510);

(statearr_11521_11544[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11517 === (6))){
var inst_11501 = (state_11516[(2)]);
var state_11516__$1 = state_11516;
if(cljs.core.truth_(inst_11501)){
var statearr_11522_11545 = state_11516__$1;
(statearr_11522_11545[(1)] = (8));

} else {
var statearr_11523_11546 = state_11516__$1;
(statearr_11523_11546[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11517 === (3))){
var inst_11514 = (state_11516[(2)]);
var state_11516__$1 = state_11516;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_11516__$1,inst_11514);
} else {
if((state_val_11517 === (12))){
var state_11516__$1 = state_11516;
var statearr_11524_11547 = state_11516__$1;
(statearr_11524_11547[(2)] = null);

(statearr_11524_11547[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11517 === (2))){
var inst_11493 = (state_11516[(7)]);
var state_11516__$1 = state_11516;
if(cljs.core.truth_(inst_11493)){
var statearr_11525_11548 = state_11516__$1;
(statearr_11525_11548[(1)] = (4));

} else {
var statearr_11526_11549 = state_11516__$1;
(statearr_11526_11549[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11517 === (11))){
var inst_11507 = cljs.core.async.close_BANG_.call(null,ch);
var state_11516__$1 = state_11516;
var statearr_11527_11550 = state_11516__$1;
(statearr_11527_11550[(2)] = inst_11507);

(statearr_11527_11550[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11517 === (9))){
var state_11516__$1 = state_11516;
if(cljs.core.truth_(close_QMARK_)){
var statearr_11528_11551 = state_11516__$1;
(statearr_11528_11551[(1)] = (11));

} else {
var statearr_11529_11552 = state_11516__$1;
(statearr_11529_11552[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11517 === (5))){
var inst_11493 = (state_11516[(7)]);
var state_11516__$1 = state_11516;
var statearr_11530_11553 = state_11516__$1;
(statearr_11530_11553[(2)] = inst_11493);

(statearr_11530_11553[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11517 === (10))){
var inst_11512 = (state_11516[(2)]);
var state_11516__$1 = state_11516;
var statearr_11531_11554 = state_11516__$1;
(statearr_11531_11554[(2)] = inst_11512);

(statearr_11531_11554[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11517 === (8))){
var inst_11493 = (state_11516[(7)]);
var inst_11503 = cljs.core.next.call(null,inst_11493);
var inst_11493__$1 = inst_11503;
var state_11516__$1 = (function (){var statearr_11532 = state_11516;
(statearr_11532[(7)] = inst_11493__$1);

return statearr_11532;
})();
var statearr_11533_11555 = state_11516__$1;
(statearr_11533_11555[(2)] = null);

(statearr_11533_11555[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__7383__auto__))
;
return ((function (switch__7321__auto__,c__7383__auto__){
return (function() {
var cljs$core$async$state_machine__7322__auto__ = null;
var cljs$core$async$state_machine__7322__auto____0 = (function (){
var statearr_11537 = [null,null,null,null,null,null,null,null];
(statearr_11537[(0)] = cljs$core$async$state_machine__7322__auto__);

(statearr_11537[(1)] = (1));

return statearr_11537;
});
var cljs$core$async$state_machine__7322__auto____1 = (function (state_11516){
while(true){
var ret_value__7323__auto__ = (function (){try{while(true){
var result__7324__auto__ = switch__7321__auto__.call(null,state_11516);
if(cljs.core.keyword_identical_QMARK_.call(null,result__7324__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__7324__auto__;
}
break;
}
}catch (e11538){if((e11538 instanceof Object)){
var ex__7325__auto__ = e11538;
var statearr_11539_11556 = state_11516;
(statearr_11539_11556[(5)] = ex__7325__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11516);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e11538;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__7323__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__11557 = state_11516;
state_11516 = G__11557;
continue;
} else {
return ret_value__7323__auto__;
}
break;
}
});
cljs$core$async$state_machine__7322__auto__ = function(state_11516){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__7322__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__7322__auto____1.call(this,state_11516);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__7322__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__7322__auto____0;
cljs$core$async$state_machine__7322__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__7322__auto____1;
return cljs$core$async$state_machine__7322__auto__;
})()
;})(switch__7321__auto__,c__7383__auto__))
})();
var state__7385__auto__ = (function (){var statearr_11540 = f__7384__auto__.call(null);
(statearr_11540[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7383__auto__);

return statearr_11540;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__7385__auto__);
});})(c__7383__auto__))
);

return c__7383__auto__;
});

cljs.core.async.onto_chan.cljs$lang$maxFixedArity = 3;
/**
 * Creates and returns a channel which contains the contents of coll,
 * closing when exhausted.
 */
cljs.core.async.to_chan = (function cljs$core$async$to_chan(coll){
var ch = cljs.core.async.chan.call(null,cljs.core.bounded_count.call(null,(100),coll));
cljs.core.async.onto_chan.call(null,ch,coll);

return ch;
});

cljs.core.async.Mux = (function (){var obj11559 = {};
return obj11559;
})();

cljs.core.async.muxch_STAR_ = (function cljs$core$async$muxch_STAR_(_){
if((function (){var and__4319__auto__ = _;
if(and__4319__auto__){
return _.cljs$core$async$Mux$muxch_STAR_$arity$1;
} else {
return and__4319__auto__;
}
})()){
return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else {
var x__4967__auto__ = (((_ == null))?null:_);
return (function (){var or__4331__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__4967__auto__)]);
if(or__4331__auto__){
return or__4331__auto__;
} else {
var or__4331__auto____$1 = (cljs.core.async.muxch_STAR_["_"]);
if(or__4331__auto____$1){
return or__4331__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Mux.muxch*",_);
}
}
})().call(null,_);
}
});


cljs.core.async.Mult = (function (){var obj11561 = {};
return obj11561;
})();

cljs.core.async.tap_STAR_ = (function cljs$core$async$tap_STAR_(m,ch,close_QMARK_){
if((function (){var and__4319__auto__ = m;
if(and__4319__auto__){
return m.cljs$core$async$Mult$tap_STAR_$arity$3;
} else {
return and__4319__auto__;
}
})()){
return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else {
var x__4967__auto__ = (((m == null))?null:m);
return (function (){var or__4331__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__4967__auto__)]);
if(or__4331__auto__){
return or__4331__auto__;
} else {
var or__4331__auto____$1 = (cljs.core.async.tap_STAR_["_"]);
if(or__4331__auto____$1){
return or__4331__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Mult.tap*",m);
}
}
})().call(null,m,ch,close_QMARK_);
}
});

cljs.core.async.untap_STAR_ = (function cljs$core$async$untap_STAR_(m,ch){
if((function (){var and__4319__auto__ = m;
if(and__4319__auto__){
return m.cljs$core$async$Mult$untap_STAR_$arity$2;
} else {
return and__4319__auto__;
}
})()){
return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else {
var x__4967__auto__ = (((m == null))?null:m);
return (function (){var or__4331__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__4967__auto__)]);
if(or__4331__auto__){
return or__4331__auto__;
} else {
var or__4331__auto____$1 = (cljs.core.async.untap_STAR_["_"]);
if(or__4331__auto____$1){
return or__4331__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Mult.untap*",m);
}
}
})().call(null,m,ch);
}
});

cljs.core.async.untap_all_STAR_ = (function cljs$core$async$untap_all_STAR_(m){
if((function (){var and__4319__auto__ = m;
if(and__4319__auto__){
return m.cljs$core$async$Mult$untap_all_STAR_$arity$1;
} else {
return and__4319__auto__;
}
})()){
return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else {
var x__4967__auto__ = (((m == null))?null:m);
return (function (){var or__4331__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__4967__auto__)]);
if(or__4331__auto__){
return or__4331__auto__;
} else {
var or__4331__auto____$1 = (cljs.core.async.untap_all_STAR_["_"]);
if(or__4331__auto____$1){
return or__4331__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Mult.untap-all*",m);
}
}
})().call(null,m);
}
});

/**
 * Creates and returns a mult(iple) of the supplied channel. Channels
 * containing copies of the channel can be created with 'tap', and
 * detached with 'untap'.
 * 
 * Each item is distributed to all taps in parallel and synchronously,
 * i.e. each tap must accept before the next item is distributed. Use
 * buffering/windowing to prevent slow taps from holding up the mult.
 * 
 * Items received when there are no taps get dropped.
 * 
 * If a tap puts to a closed channel, it will be removed from the mult.
 */
cljs.core.async.mult = (function cljs$core$async$mult(ch){
var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var m = (function (){
if(typeof cljs.core.async.t11783 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t11783 = (function (mult,ch,cs,meta11784){
this.mult = mult;
this.ch = ch;
this.cs = cs;
this.meta11784 = meta11784;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t11783.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_11785,meta11784__$1){
var self__ = this;
var _11785__$1 = this;
return (new cljs.core.async.t11783(self__.mult,self__.ch,self__.cs,meta11784__$1));
});})(cs))
;

cljs.core.async.t11783.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_11785){
var self__ = this;
var _11785__$1 = this;
return self__.meta11784;
});})(cs))
;

cljs.core.async.t11783.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t11783.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(cs))
;

cljs.core.async.t11783.prototype.cljs$core$async$Mult$ = true;

cljs.core.async.t11783.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
});})(cs))
;

cljs.core.async.t11783.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$1);

return null;
});})(cs))
;

cljs.core.async.t11783.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
});})(cs))
;

cljs.core.async.t11783.getBasis = ((function (cs){
return (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"mult","mult",-1187640995,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta11784","meta11784",-1146673606,null)], null);
});})(cs))
;

cljs.core.async.t11783.cljs$lang$type = true;

cljs.core.async.t11783.cljs$lang$ctorStr = "cljs.core.async/t11783";

cljs.core.async.t11783.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__4910__auto__,writer__4911__auto__,opt__4912__auto__){
return cljs.core._write.call(null,writer__4911__auto__,"cljs.core.async/t11783");
});})(cs))
;

cljs.core.async.__GT_t11783 = ((function (cs){
return (function cljs$core$async$mult_$___GT_t11783(mult__$1,ch__$1,cs__$1,meta11784){
return (new cljs.core.async.t11783(mult__$1,ch__$1,cs__$1,meta11784));
});})(cs))
;

}

return (new cljs.core.async.t11783(cljs$core$async$mult,ch,cs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var dchan = cljs.core.async.chan.call(null,(1));
var dctr = cljs.core.atom.call(null,null);
var done = ((function (cs,m,dchan,dctr){
return (function (_){
if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.call(null,dchan,true);
} else {
return null;
}
});})(cs,m,dchan,dctr))
;
var c__7383__auto___12004 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__7383__auto___12004,cs,m,dchan,dctr,done){
return (function (){
var f__7384__auto__ = (function (){var switch__7321__auto__ = ((function (c__7383__auto___12004,cs,m,dchan,dctr,done){
return (function (state_11916){
var state_val_11917 = (state_11916[(1)]);
if((state_val_11917 === (7))){
var inst_11912 = (state_11916[(2)]);
var state_11916__$1 = state_11916;
var statearr_11918_12005 = state_11916__$1;
(statearr_11918_12005[(2)] = inst_11912);

(statearr_11918_12005[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11917 === (20))){
var inst_11817 = (state_11916[(7)]);
var inst_11827 = cljs.core.first.call(null,inst_11817);
var inst_11828 = cljs.core.nth.call(null,inst_11827,(0),null);
var inst_11829 = cljs.core.nth.call(null,inst_11827,(1),null);
var state_11916__$1 = (function (){var statearr_11919 = state_11916;
(statearr_11919[(8)] = inst_11828);

return statearr_11919;
})();
if(cljs.core.truth_(inst_11829)){
var statearr_11920_12006 = state_11916__$1;
(statearr_11920_12006[(1)] = (22));

} else {
var statearr_11921_12007 = state_11916__$1;
(statearr_11921_12007[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11917 === (27))){
var inst_11788 = (state_11916[(9)]);
var inst_11864 = (state_11916[(10)]);
var inst_11857 = (state_11916[(11)]);
var inst_11859 = (state_11916[(12)]);
var inst_11864__$1 = cljs.core._nth.call(null,inst_11857,inst_11859);
var inst_11865 = cljs.core.async.put_BANG_.call(null,inst_11864__$1,inst_11788,done);
var state_11916__$1 = (function (){var statearr_11922 = state_11916;
(statearr_11922[(10)] = inst_11864__$1);

return statearr_11922;
})();
if(cljs.core.truth_(inst_11865)){
var statearr_11923_12008 = state_11916__$1;
(statearr_11923_12008[(1)] = (30));

} else {
var statearr_11924_12009 = state_11916__$1;
(statearr_11924_12009[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11917 === (1))){
var state_11916__$1 = state_11916;
var statearr_11925_12010 = state_11916__$1;
(statearr_11925_12010[(2)] = null);

(statearr_11925_12010[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11917 === (24))){
var inst_11817 = (state_11916[(7)]);
var inst_11834 = (state_11916[(2)]);
var inst_11835 = cljs.core.next.call(null,inst_11817);
var inst_11797 = inst_11835;
var inst_11798 = null;
var inst_11799 = (0);
var inst_11800 = (0);
var state_11916__$1 = (function (){var statearr_11926 = state_11916;
(statearr_11926[(13)] = inst_11834);

(statearr_11926[(14)] = inst_11797);

(statearr_11926[(15)] = inst_11799);

(statearr_11926[(16)] = inst_11800);

(statearr_11926[(17)] = inst_11798);

return statearr_11926;
})();
var statearr_11927_12011 = state_11916__$1;
(statearr_11927_12011[(2)] = null);

(statearr_11927_12011[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11917 === (39))){
var state_11916__$1 = state_11916;
var statearr_11931_12012 = state_11916__$1;
(statearr_11931_12012[(2)] = null);

(statearr_11931_12012[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11917 === (4))){
var inst_11788 = (state_11916[(9)]);
var inst_11788__$1 = (state_11916[(2)]);
var inst_11789 = (inst_11788__$1 == null);
var state_11916__$1 = (function (){var statearr_11932 = state_11916;
(statearr_11932[(9)] = inst_11788__$1);

return statearr_11932;
})();
if(cljs.core.truth_(inst_11789)){
var statearr_11933_12013 = state_11916__$1;
(statearr_11933_12013[(1)] = (5));

} else {
var statearr_11934_12014 = state_11916__$1;
(statearr_11934_12014[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11917 === (15))){
var inst_11797 = (state_11916[(14)]);
var inst_11799 = (state_11916[(15)]);
var inst_11800 = (state_11916[(16)]);
var inst_11798 = (state_11916[(17)]);
var inst_11813 = (state_11916[(2)]);
var inst_11814 = (inst_11800 + (1));
var tmp11928 = inst_11797;
var tmp11929 = inst_11799;
var tmp11930 = inst_11798;
var inst_11797__$1 = tmp11928;
var inst_11798__$1 = tmp11930;
var inst_11799__$1 = tmp11929;
var inst_11800__$1 = inst_11814;
var state_11916__$1 = (function (){var statearr_11935 = state_11916;
(statearr_11935[(14)] = inst_11797__$1);

(statearr_11935[(18)] = inst_11813);

(statearr_11935[(15)] = inst_11799__$1);

(statearr_11935[(16)] = inst_11800__$1);

(statearr_11935[(17)] = inst_11798__$1);

return statearr_11935;
})();
var statearr_11936_12015 = state_11916__$1;
(statearr_11936_12015[(2)] = null);

(statearr_11936_12015[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11917 === (21))){
var inst_11838 = (state_11916[(2)]);
var state_11916__$1 = state_11916;
var statearr_11940_12016 = state_11916__$1;
(statearr_11940_12016[(2)] = inst_11838);

(statearr_11940_12016[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11917 === (31))){
var inst_11864 = (state_11916[(10)]);
var inst_11868 = done.call(null,null);
var inst_11869 = cljs.core.async.untap_STAR_.call(null,m,inst_11864);
var state_11916__$1 = (function (){var statearr_11941 = state_11916;
(statearr_11941[(19)] = inst_11868);

return statearr_11941;
})();
var statearr_11942_12017 = state_11916__$1;
(statearr_11942_12017[(2)] = inst_11869);

(statearr_11942_12017[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11917 === (32))){
var inst_11858 = (state_11916[(20)]);
var inst_11857 = (state_11916[(11)]);
var inst_11859 = (state_11916[(12)]);
var inst_11856 = (state_11916[(21)]);
var inst_11871 = (state_11916[(2)]);
var inst_11872 = (inst_11859 + (1));
var tmp11937 = inst_11858;
var tmp11938 = inst_11857;
var tmp11939 = inst_11856;
var inst_11856__$1 = tmp11939;
var inst_11857__$1 = tmp11938;
var inst_11858__$1 = tmp11937;
var inst_11859__$1 = inst_11872;
var state_11916__$1 = (function (){var statearr_11943 = state_11916;
(statearr_11943[(20)] = inst_11858__$1);

(statearr_11943[(11)] = inst_11857__$1);

(statearr_11943[(22)] = inst_11871);

(statearr_11943[(12)] = inst_11859__$1);

(statearr_11943[(21)] = inst_11856__$1);

return statearr_11943;
})();
var statearr_11944_12018 = state_11916__$1;
(statearr_11944_12018[(2)] = null);

(statearr_11944_12018[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11917 === (40))){
var inst_11884 = (state_11916[(23)]);
var inst_11888 = done.call(null,null);
var inst_11889 = cljs.core.async.untap_STAR_.call(null,m,inst_11884);
var state_11916__$1 = (function (){var statearr_11945 = state_11916;
(statearr_11945[(24)] = inst_11888);

return statearr_11945;
})();
var statearr_11946_12019 = state_11916__$1;
(statearr_11946_12019[(2)] = inst_11889);

(statearr_11946_12019[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11917 === (33))){
var inst_11875 = (state_11916[(25)]);
var inst_11877 = cljs.core.chunked_seq_QMARK_.call(null,inst_11875);
var state_11916__$1 = state_11916;
if(inst_11877){
var statearr_11947_12020 = state_11916__$1;
(statearr_11947_12020[(1)] = (36));

} else {
var statearr_11948_12021 = state_11916__$1;
(statearr_11948_12021[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11917 === (13))){
var inst_11807 = (state_11916[(26)]);
var inst_11810 = cljs.core.async.close_BANG_.call(null,inst_11807);
var state_11916__$1 = state_11916;
var statearr_11949_12022 = state_11916__$1;
(statearr_11949_12022[(2)] = inst_11810);

(statearr_11949_12022[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11917 === (22))){
var inst_11828 = (state_11916[(8)]);
var inst_11831 = cljs.core.async.close_BANG_.call(null,inst_11828);
var state_11916__$1 = state_11916;
var statearr_11950_12023 = state_11916__$1;
(statearr_11950_12023[(2)] = inst_11831);

(statearr_11950_12023[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11917 === (36))){
var inst_11875 = (state_11916[(25)]);
var inst_11879 = cljs.core.chunk_first.call(null,inst_11875);
var inst_11880 = cljs.core.chunk_rest.call(null,inst_11875);
var inst_11881 = cljs.core.count.call(null,inst_11879);
var inst_11856 = inst_11880;
var inst_11857 = inst_11879;
var inst_11858 = inst_11881;
var inst_11859 = (0);
var state_11916__$1 = (function (){var statearr_11951 = state_11916;
(statearr_11951[(20)] = inst_11858);

(statearr_11951[(11)] = inst_11857);

(statearr_11951[(12)] = inst_11859);

(statearr_11951[(21)] = inst_11856);

return statearr_11951;
})();
var statearr_11952_12024 = state_11916__$1;
(statearr_11952_12024[(2)] = null);

(statearr_11952_12024[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11917 === (41))){
var inst_11875 = (state_11916[(25)]);
var inst_11891 = (state_11916[(2)]);
var inst_11892 = cljs.core.next.call(null,inst_11875);
var inst_11856 = inst_11892;
var inst_11857 = null;
var inst_11858 = (0);
var inst_11859 = (0);
var state_11916__$1 = (function (){var statearr_11953 = state_11916;
(statearr_11953[(20)] = inst_11858);

(statearr_11953[(27)] = inst_11891);

(statearr_11953[(11)] = inst_11857);

(statearr_11953[(12)] = inst_11859);

(statearr_11953[(21)] = inst_11856);

return statearr_11953;
})();
var statearr_11954_12025 = state_11916__$1;
(statearr_11954_12025[(2)] = null);

(statearr_11954_12025[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11917 === (43))){
var state_11916__$1 = state_11916;
var statearr_11955_12026 = state_11916__$1;
(statearr_11955_12026[(2)] = null);

(statearr_11955_12026[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11917 === (29))){
var inst_11900 = (state_11916[(2)]);
var state_11916__$1 = state_11916;
var statearr_11956_12027 = state_11916__$1;
(statearr_11956_12027[(2)] = inst_11900);

(statearr_11956_12027[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11917 === (44))){
var inst_11909 = (state_11916[(2)]);
var state_11916__$1 = (function (){var statearr_11957 = state_11916;
(statearr_11957[(28)] = inst_11909);

return statearr_11957;
})();
var statearr_11958_12028 = state_11916__$1;
(statearr_11958_12028[(2)] = null);

(statearr_11958_12028[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11917 === (6))){
var inst_11848 = (state_11916[(29)]);
var inst_11847 = cljs.core.deref.call(null,cs);
var inst_11848__$1 = cljs.core.keys.call(null,inst_11847);
var inst_11849 = cljs.core.count.call(null,inst_11848__$1);
var inst_11850 = cljs.core.reset_BANG_.call(null,dctr,inst_11849);
var inst_11855 = cljs.core.seq.call(null,inst_11848__$1);
var inst_11856 = inst_11855;
var inst_11857 = null;
var inst_11858 = (0);
var inst_11859 = (0);
var state_11916__$1 = (function (){var statearr_11959 = state_11916;
(statearr_11959[(30)] = inst_11850);

(statearr_11959[(20)] = inst_11858);

(statearr_11959[(11)] = inst_11857);

(statearr_11959[(12)] = inst_11859);

(statearr_11959[(21)] = inst_11856);

(statearr_11959[(29)] = inst_11848__$1);

return statearr_11959;
})();
var statearr_11960_12029 = state_11916__$1;
(statearr_11960_12029[(2)] = null);

(statearr_11960_12029[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11917 === (28))){
var inst_11875 = (state_11916[(25)]);
var inst_11856 = (state_11916[(21)]);
var inst_11875__$1 = cljs.core.seq.call(null,inst_11856);
var state_11916__$1 = (function (){var statearr_11961 = state_11916;
(statearr_11961[(25)] = inst_11875__$1);

return statearr_11961;
})();
if(inst_11875__$1){
var statearr_11962_12030 = state_11916__$1;
(statearr_11962_12030[(1)] = (33));

} else {
var statearr_11963_12031 = state_11916__$1;
(statearr_11963_12031[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11917 === (25))){
var inst_11858 = (state_11916[(20)]);
var inst_11859 = (state_11916[(12)]);
var inst_11861 = (inst_11859 < inst_11858);
var inst_11862 = inst_11861;
var state_11916__$1 = state_11916;
if(cljs.core.truth_(inst_11862)){
var statearr_11964_12032 = state_11916__$1;
(statearr_11964_12032[(1)] = (27));

} else {
var statearr_11965_12033 = state_11916__$1;
(statearr_11965_12033[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11917 === (34))){
var state_11916__$1 = state_11916;
var statearr_11966_12034 = state_11916__$1;
(statearr_11966_12034[(2)] = null);

(statearr_11966_12034[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11917 === (17))){
var state_11916__$1 = state_11916;
var statearr_11967_12035 = state_11916__$1;
(statearr_11967_12035[(2)] = null);

(statearr_11967_12035[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11917 === (3))){
var inst_11914 = (state_11916[(2)]);
var state_11916__$1 = state_11916;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_11916__$1,inst_11914);
} else {
if((state_val_11917 === (12))){
var inst_11843 = (state_11916[(2)]);
var state_11916__$1 = state_11916;
var statearr_11968_12036 = state_11916__$1;
(statearr_11968_12036[(2)] = inst_11843);

(statearr_11968_12036[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11917 === (2))){
var state_11916__$1 = state_11916;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_11916__$1,(4),ch);
} else {
if((state_val_11917 === (23))){
var state_11916__$1 = state_11916;
var statearr_11969_12037 = state_11916__$1;
(statearr_11969_12037[(2)] = null);

(statearr_11969_12037[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11917 === (35))){
var inst_11898 = (state_11916[(2)]);
var state_11916__$1 = state_11916;
var statearr_11970_12038 = state_11916__$1;
(statearr_11970_12038[(2)] = inst_11898);

(statearr_11970_12038[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11917 === (19))){
var inst_11817 = (state_11916[(7)]);
var inst_11821 = cljs.core.chunk_first.call(null,inst_11817);
var inst_11822 = cljs.core.chunk_rest.call(null,inst_11817);
var inst_11823 = cljs.core.count.call(null,inst_11821);
var inst_11797 = inst_11822;
var inst_11798 = inst_11821;
var inst_11799 = inst_11823;
var inst_11800 = (0);
var state_11916__$1 = (function (){var statearr_11971 = state_11916;
(statearr_11971[(14)] = inst_11797);

(statearr_11971[(15)] = inst_11799);

(statearr_11971[(16)] = inst_11800);

(statearr_11971[(17)] = inst_11798);

return statearr_11971;
})();
var statearr_11972_12039 = state_11916__$1;
(statearr_11972_12039[(2)] = null);

(statearr_11972_12039[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11917 === (11))){
var inst_11797 = (state_11916[(14)]);
var inst_11817 = (state_11916[(7)]);
var inst_11817__$1 = cljs.core.seq.call(null,inst_11797);
var state_11916__$1 = (function (){var statearr_11973 = state_11916;
(statearr_11973[(7)] = inst_11817__$1);

return statearr_11973;
})();
if(inst_11817__$1){
var statearr_11974_12040 = state_11916__$1;
(statearr_11974_12040[(1)] = (16));

} else {
var statearr_11975_12041 = state_11916__$1;
(statearr_11975_12041[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11917 === (9))){
var inst_11845 = (state_11916[(2)]);
var state_11916__$1 = state_11916;
var statearr_11976_12042 = state_11916__$1;
(statearr_11976_12042[(2)] = inst_11845);

(statearr_11976_12042[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11917 === (5))){
var inst_11795 = cljs.core.deref.call(null,cs);
var inst_11796 = cljs.core.seq.call(null,inst_11795);
var inst_11797 = inst_11796;
var inst_11798 = null;
var inst_11799 = (0);
var inst_11800 = (0);
var state_11916__$1 = (function (){var statearr_11977 = state_11916;
(statearr_11977[(14)] = inst_11797);

(statearr_11977[(15)] = inst_11799);

(statearr_11977[(16)] = inst_11800);

(statearr_11977[(17)] = inst_11798);

return statearr_11977;
})();
var statearr_11978_12043 = state_11916__$1;
(statearr_11978_12043[(2)] = null);

(statearr_11978_12043[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11917 === (14))){
var state_11916__$1 = state_11916;
var statearr_11979_12044 = state_11916__$1;
(statearr_11979_12044[(2)] = null);

(statearr_11979_12044[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11917 === (45))){
var inst_11906 = (state_11916[(2)]);
var state_11916__$1 = state_11916;
var statearr_11980_12045 = state_11916__$1;
(statearr_11980_12045[(2)] = inst_11906);

(statearr_11980_12045[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11917 === (26))){
var inst_11848 = (state_11916[(29)]);
var inst_11902 = (state_11916[(2)]);
var inst_11903 = cljs.core.seq.call(null,inst_11848);
var state_11916__$1 = (function (){var statearr_11981 = state_11916;
(statearr_11981[(31)] = inst_11902);

return statearr_11981;
})();
if(inst_11903){
var statearr_11982_12046 = state_11916__$1;
(statearr_11982_12046[(1)] = (42));

} else {
var statearr_11983_12047 = state_11916__$1;
(statearr_11983_12047[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11917 === (16))){
var inst_11817 = (state_11916[(7)]);
var inst_11819 = cljs.core.chunked_seq_QMARK_.call(null,inst_11817);
var state_11916__$1 = state_11916;
if(inst_11819){
var statearr_11984_12048 = state_11916__$1;
(statearr_11984_12048[(1)] = (19));

} else {
var statearr_11985_12049 = state_11916__$1;
(statearr_11985_12049[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11917 === (38))){
var inst_11895 = (state_11916[(2)]);
var state_11916__$1 = state_11916;
var statearr_11986_12050 = state_11916__$1;
(statearr_11986_12050[(2)] = inst_11895);

(statearr_11986_12050[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11917 === (30))){
var state_11916__$1 = state_11916;
var statearr_11987_12051 = state_11916__$1;
(statearr_11987_12051[(2)] = null);

(statearr_11987_12051[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11917 === (10))){
var inst_11800 = (state_11916[(16)]);
var inst_11798 = (state_11916[(17)]);
var inst_11806 = cljs.core._nth.call(null,inst_11798,inst_11800);
var inst_11807 = cljs.core.nth.call(null,inst_11806,(0),null);
var inst_11808 = cljs.core.nth.call(null,inst_11806,(1),null);
var state_11916__$1 = (function (){var statearr_11988 = state_11916;
(statearr_11988[(26)] = inst_11807);

return statearr_11988;
})();
if(cljs.core.truth_(inst_11808)){
var statearr_11989_12052 = state_11916__$1;
(statearr_11989_12052[(1)] = (13));

} else {
var statearr_11990_12053 = state_11916__$1;
(statearr_11990_12053[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11917 === (18))){
var inst_11841 = (state_11916[(2)]);
var state_11916__$1 = state_11916;
var statearr_11991_12054 = state_11916__$1;
(statearr_11991_12054[(2)] = inst_11841);

(statearr_11991_12054[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11917 === (42))){
var state_11916__$1 = state_11916;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_11916__$1,(45),dchan);
} else {
if((state_val_11917 === (37))){
var inst_11788 = (state_11916[(9)]);
var inst_11884 = (state_11916[(23)]);
var inst_11875 = (state_11916[(25)]);
var inst_11884__$1 = cljs.core.first.call(null,inst_11875);
var inst_11885 = cljs.core.async.put_BANG_.call(null,inst_11884__$1,inst_11788,done);
var state_11916__$1 = (function (){var statearr_11992 = state_11916;
(statearr_11992[(23)] = inst_11884__$1);

return statearr_11992;
})();
if(cljs.core.truth_(inst_11885)){
var statearr_11993_12055 = state_11916__$1;
(statearr_11993_12055[(1)] = (39));

} else {
var statearr_11994_12056 = state_11916__$1;
(statearr_11994_12056[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11917 === (8))){
var inst_11799 = (state_11916[(15)]);
var inst_11800 = (state_11916[(16)]);
var inst_11802 = (inst_11800 < inst_11799);
var inst_11803 = inst_11802;
var state_11916__$1 = state_11916;
if(cljs.core.truth_(inst_11803)){
var statearr_11995_12057 = state_11916__$1;
(statearr_11995_12057[(1)] = (10));

} else {
var statearr_11996_12058 = state_11916__$1;
(statearr_11996_12058[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__7383__auto___12004,cs,m,dchan,dctr,done))
;
return ((function (switch__7321__auto__,c__7383__auto___12004,cs,m,dchan,dctr,done){
return (function() {
var cljs$core$async$mult_$_state_machine__7322__auto__ = null;
var cljs$core$async$mult_$_state_machine__7322__auto____0 = (function (){
var statearr_12000 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_12000[(0)] = cljs$core$async$mult_$_state_machine__7322__auto__);

(statearr_12000[(1)] = (1));

return statearr_12000;
});
var cljs$core$async$mult_$_state_machine__7322__auto____1 = (function (state_11916){
while(true){
var ret_value__7323__auto__ = (function (){try{while(true){
var result__7324__auto__ = switch__7321__auto__.call(null,state_11916);
if(cljs.core.keyword_identical_QMARK_.call(null,result__7324__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__7324__auto__;
}
break;
}
}catch (e12001){if((e12001 instanceof Object)){
var ex__7325__auto__ = e12001;
var statearr_12002_12059 = state_11916;
(statearr_12002_12059[(5)] = ex__7325__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11916);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e12001;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__7323__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__12060 = state_11916;
state_11916 = G__12060;
continue;
} else {
return ret_value__7323__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__7322__auto__ = function(state_11916){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__7322__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__7322__auto____1.call(this,state_11916);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__7322__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__7322__auto____0;
cljs$core$async$mult_$_state_machine__7322__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__7322__auto____1;
return cljs$core$async$mult_$_state_machine__7322__auto__;
})()
;})(switch__7321__auto__,c__7383__auto___12004,cs,m,dchan,dctr,done))
})();
var state__7385__auto__ = (function (){var statearr_12003 = f__7384__auto__.call(null);
(statearr_12003[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7383__auto___12004);

return statearr_12003;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__7385__auto__);
});})(c__7383__auto___12004,cs,m,dchan,dctr,done))
);


return m;
});
/**
 * Copies the mult source onto the supplied channel.
 * 
 * By default the channel will be closed when the source closes,
 * but can be determined by the close? parameter.
 */
cljs.core.async.tap = (function cljs$core$async$tap(){
var G__12062 = arguments.length;
switch (G__12062) {
case 2:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2 = (function (mult,ch){
return cljs.core.async.tap.call(null,mult,ch,true);
});

cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3 = (function (mult,ch,close_QMARK_){
cljs.core.async.tap_STAR_.call(null,mult,ch,close_QMARK_);

return ch;
});

cljs.core.async.tap.cljs$lang$maxFixedArity = 3;
/**
 * Disconnects a target channel from a mult
 */
cljs.core.async.untap = (function cljs$core$async$untap(mult,ch){
return cljs.core.async.untap_STAR_.call(null,mult,ch);
});
/**
 * Disconnects all target channels from a mult
 */
cljs.core.async.untap_all = (function cljs$core$async$untap_all(mult){
return cljs.core.async.untap_all_STAR_.call(null,mult);
});

cljs.core.async.Mix = (function (){var obj12065 = {};
return obj12065;
})();

cljs.core.async.admix_STAR_ = (function cljs$core$async$admix_STAR_(m,ch){
if((function (){var and__4319__auto__ = m;
if(and__4319__auto__){
return m.cljs$core$async$Mix$admix_STAR_$arity$2;
} else {
return and__4319__auto__;
}
})()){
return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else {
var x__4967__auto__ = (((m == null))?null:m);
return (function (){var or__4331__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__4967__auto__)]);
if(or__4331__auto__){
return or__4331__auto__;
} else {
var or__4331__auto____$1 = (cljs.core.async.admix_STAR_["_"]);
if(or__4331__auto____$1){
return or__4331__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Mix.admix*",m);
}
}
})().call(null,m,ch);
}
});

cljs.core.async.unmix_STAR_ = (function cljs$core$async$unmix_STAR_(m,ch){
if((function (){var and__4319__auto__ = m;
if(and__4319__auto__){
return m.cljs$core$async$Mix$unmix_STAR_$arity$2;
} else {
return and__4319__auto__;
}
})()){
return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else {
var x__4967__auto__ = (((m == null))?null:m);
return (function (){var or__4331__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__4967__auto__)]);
if(or__4331__auto__){
return or__4331__auto__;
} else {
var or__4331__auto____$1 = (cljs.core.async.unmix_STAR_["_"]);
if(or__4331__auto____$1){
return or__4331__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Mix.unmix*",m);
}
}
})().call(null,m,ch);
}
});

cljs.core.async.unmix_all_STAR_ = (function cljs$core$async$unmix_all_STAR_(m){
if((function (){var and__4319__auto__ = m;
if(and__4319__auto__){
return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1;
} else {
return and__4319__auto__;
}
})()){
return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else {
var x__4967__auto__ = (((m == null))?null:m);
return (function (){var or__4331__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__4967__auto__)]);
if(or__4331__auto__){
return or__4331__auto__;
} else {
var or__4331__auto____$1 = (cljs.core.async.unmix_all_STAR_["_"]);
if(or__4331__auto____$1){
return or__4331__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Mix.unmix-all*",m);
}
}
})().call(null,m);
}
});

cljs.core.async.toggle_STAR_ = (function cljs$core$async$toggle_STAR_(m,state_map){
if((function (){var and__4319__auto__ = m;
if(and__4319__auto__){
return m.cljs$core$async$Mix$toggle_STAR_$arity$2;
} else {
return and__4319__auto__;
}
})()){
return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else {
var x__4967__auto__ = (((m == null))?null:m);
return (function (){var or__4331__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__4967__auto__)]);
if(or__4331__auto__){
return or__4331__auto__;
} else {
var or__4331__auto____$1 = (cljs.core.async.toggle_STAR_["_"]);
if(or__4331__auto____$1){
return or__4331__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Mix.toggle*",m);
}
}
})().call(null,m,state_map);
}
});

cljs.core.async.solo_mode_STAR_ = (function cljs$core$async$solo_mode_STAR_(m,mode){
if((function (){var and__4319__auto__ = m;
if(and__4319__auto__){
return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2;
} else {
return and__4319__auto__;
}
})()){
return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else {
var x__4967__auto__ = (((m == null))?null:m);
return (function (){var or__4331__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__4967__auto__)]);
if(or__4331__auto__){
return or__4331__auto__;
} else {
var or__4331__auto____$1 = (cljs.core.async.solo_mode_STAR_["_"]);
if(or__4331__auto____$1){
return or__4331__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Mix.solo-mode*",m);
}
}
})().call(null,m,mode);
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(){
var argseq__5371__auto__ = ((((3) < arguments.length))?(new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,(3)),(0))):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__5371__auto__);
});

cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__12070){
var map__12071 = p__12070;
var map__12071__$1 = ((cljs.core.seq_QMARK_.call(null,map__12071))?cljs.core.apply.call(null,cljs.core.hash_map,map__12071):map__12071);
var opts = map__12071__$1;
var statearr_12072_12075 = state;
(statearr_12072_12075[cljs.core.async.impl.ioc_helpers.STATE_IDX] = cont_block);


var temp__4422__auto__ = cljs.core.async.do_alts.call(null,((function (map__12071,map__12071__$1,opts){
return (function (val){
var statearr_12073_12076 = state;
(statearr_12073_12076[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state);
});})(map__12071,map__12071__$1,opts))
,ports,opts);
if(cljs.core.truth_(temp__4422__auto__)){
var cb = temp__4422__auto__;
var statearr_12074_12077 = state;
(statearr_12074_12077[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = cljs.core.deref.call(null,cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
});

cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3);

cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq12066){
var G__12067 = cljs.core.first.call(null,seq12066);
var seq12066__$1 = cljs.core.next.call(null,seq12066);
var G__12068 = cljs.core.first.call(null,seq12066__$1);
var seq12066__$2 = cljs.core.next.call(null,seq12066__$1);
var G__12069 = cljs.core.first.call(null,seq12066__$2);
var seq12066__$3 = cljs.core.next.call(null,seq12066__$2);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__12067,G__12068,G__12069,seq12066__$3);
});
/**
 * Creates and returns a mix of one or more input channels which will
 * be put on the supplied out channel. Input sources can be added to
 * the mix with 'admix', and removed with 'unmix'. A mix supports
 * soloing, muting and pausing multiple inputs atomically using
 * 'toggle', and can solo using either muting or pausing as determined
 * by 'solo-mode'.
 * 
 * Each channel can have zero or more boolean modes set via 'toggle':
 * 
 * :solo - when true, only this (ond other soloed) channel(s) will appear
 * in the mix output channel. :mute and :pause states of soloed
 * channels are ignored. If solo-mode is :mute, non-soloed
 * channels are muted, if :pause, non-soloed channels are
 * paused.
 * 
 * :mute - muted channels will have their contents consumed but not included in the mix
 * :pause - paused channels will not have their contents consumed (and thus also not included in the mix)
 */
cljs.core.async.mix = (function cljs$core$async$mix(out){
var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var solo_modes = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pause","pause",-2095325672),null,new cljs.core.Keyword(null,"mute","mute",1151223646),null], null), null);
var attrs = cljs.core.conj.call(null,solo_modes,new cljs.core.Keyword(null,"solo","solo",-316350075));
var solo_mode = cljs.core.atom.call(null,new cljs.core.Keyword(null,"mute","mute",1151223646));
var change = cljs.core.async.chan.call(null);
var changed = ((function (cs,solo_modes,attrs,solo_mode,change){
return (function (){
return cljs.core.async.put_BANG_.call(null,change,true);
});})(cs,solo_modes,attrs,solo_mode,change))
;
var pick = ((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (attr,chs){
return cljs.core.reduce_kv.call(null,((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (ret,c,v){
if(cljs.core.truth_(attr.call(null,v))){
return cljs.core.conj.call(null,ret,c);
} else {
return ret;
}
});})(cs,solo_modes,attrs,solo_mode,change,changed))
,cljs.core.PersistentHashSet.EMPTY,chs);
});})(cs,solo_modes,attrs,solo_mode,change,changed))
;
var calc_state = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick){
return (function (){
var chs = cljs.core.deref.call(null,cs);
var mode = cljs.core.deref.call(null,solo_mode);
var solos = pick.call(null,new cljs.core.Keyword(null,"solo","solo",-316350075),chs);
var pauses = pick.call(null,new cljs.core.Keyword(null,"pause","pause",-2095325672),chs);
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"solos","solos",1441458643),solos,new cljs.core.Keyword(null,"mutes","mutes",1068806309),pick.call(null,new cljs.core.Keyword(null,"mute","mute",1151223646),chs),new cljs.core.Keyword(null,"reads","reads",-1215067361),cljs.core.conj.call(null,(((cljs.core._EQ_.call(null,mode,new cljs.core.Keyword(null,"pause","pause",-2095325672))) && (!(cljs.core.empty_QMARK_.call(null,solos))))?cljs.core.vec.call(null,solos):cljs.core.vec.call(null,cljs.core.remove.call(null,pauses,cljs.core.keys.call(null,chs)))),change)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick))
;
var m = (function (){
if(typeof cljs.core.async.t12197 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t12197 = (function (change,mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta12198){
this.change = change;
this.mix = mix;
this.solo_mode = solo_mode;
this.pick = pick;
this.cs = cs;
this.calc_state = calc_state;
this.out = out;
this.changed = changed;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.meta12198 = meta12198;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t12197.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_12199,meta12198__$1){
var self__ = this;
var _12199__$1 = this;
return (new cljs.core.async.t12197(self__.change,self__.mix,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta12198__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t12197.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_12199){
var self__ = this;
var _12199__$1 = this;
return self__.meta12198;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t12197.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t12197.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t12197.prototype.cljs$core$async$Mix$ = true;

cljs.core.async.t12197.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t12197.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t12197.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t12197.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t12197.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.solo_modes.call(null,mode))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("mode must be one of: "),cljs.core.str(self__.solo_modes)].join('')),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"mode","mode",-2000032078,null))))].join('')));
}

cljs.core.reset_BANG_.call(null,self__.solo_mode,mode);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t12197.getBasis = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (){
return new cljs.core.PersistentVector(null, 11, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"change","change",477485025,null),new cljs.core.Symbol(null,"mix","mix",2121373763,null),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"meta12198","meta12198",-1616559913,null)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t12197.cljs$lang$type = true;

cljs.core.async.t12197.cljs$lang$ctorStr = "cljs.core.async/t12197";

cljs.core.async.t12197.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__4910__auto__,writer__4911__auto__,opt__4912__auto__){
return cljs.core._write.call(null,writer__4911__auto__,"cljs.core.async/t12197");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.__GT_t12197 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function cljs$core$async$mix_$___GT_t12197(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta12198){
return (new cljs.core.async.t12197(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta12198));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

}

return (new cljs.core.async.t12197(change,cljs$core$async$mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__7383__auto___12316 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__7383__auto___12316,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){
var f__7384__auto__ = (function (){var switch__7321__auto__ = ((function (c__7383__auto___12316,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_12269){
var state_val_12270 = (state_12269[(1)]);
if((state_val_12270 === (7))){
var inst_12213 = (state_12269[(7)]);
var inst_12218 = cljs.core.apply.call(null,cljs.core.hash_map,inst_12213);
var state_12269__$1 = state_12269;
var statearr_12271_12317 = state_12269__$1;
(statearr_12271_12317[(2)] = inst_12218);

(statearr_12271_12317[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12270 === (20))){
var inst_12228 = (state_12269[(8)]);
var state_12269__$1 = state_12269;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_12269__$1,(23),out,inst_12228);
} else {
if((state_val_12270 === (1))){
var inst_12203 = (state_12269[(9)]);
var inst_12203__$1 = calc_state.call(null);
var inst_12204 = cljs.core.seq_QMARK_.call(null,inst_12203__$1);
var state_12269__$1 = (function (){var statearr_12272 = state_12269;
(statearr_12272[(9)] = inst_12203__$1);

return statearr_12272;
})();
if(inst_12204){
var statearr_12273_12318 = state_12269__$1;
(statearr_12273_12318[(1)] = (2));

} else {
var statearr_12274_12319 = state_12269__$1;
(statearr_12274_12319[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12270 === (24))){
var inst_12221 = (state_12269[(10)]);
var inst_12213 = inst_12221;
var state_12269__$1 = (function (){var statearr_12275 = state_12269;
(statearr_12275[(7)] = inst_12213);

return statearr_12275;
})();
var statearr_12276_12320 = state_12269__$1;
(statearr_12276_12320[(2)] = null);

(statearr_12276_12320[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12270 === (4))){
var inst_12203 = (state_12269[(9)]);
var inst_12209 = (state_12269[(2)]);
var inst_12210 = cljs.core.get.call(null,inst_12209,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_12211 = cljs.core.get.call(null,inst_12209,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_12212 = cljs.core.get.call(null,inst_12209,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_12213 = inst_12203;
var state_12269__$1 = (function (){var statearr_12277 = state_12269;
(statearr_12277[(11)] = inst_12212);

(statearr_12277[(12)] = inst_12211);

(statearr_12277[(7)] = inst_12213);

(statearr_12277[(13)] = inst_12210);

return statearr_12277;
})();
var statearr_12278_12321 = state_12269__$1;
(statearr_12278_12321[(2)] = null);

(statearr_12278_12321[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12270 === (15))){
var state_12269__$1 = state_12269;
var statearr_12279_12322 = state_12269__$1;
(statearr_12279_12322[(2)] = null);

(statearr_12279_12322[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12270 === (21))){
var inst_12221 = (state_12269[(10)]);
var inst_12213 = inst_12221;
var state_12269__$1 = (function (){var statearr_12280 = state_12269;
(statearr_12280[(7)] = inst_12213);

return statearr_12280;
})();
var statearr_12281_12323 = state_12269__$1;
(statearr_12281_12323[(2)] = null);

(statearr_12281_12323[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12270 === (13))){
var inst_12265 = (state_12269[(2)]);
var state_12269__$1 = state_12269;
var statearr_12282_12324 = state_12269__$1;
(statearr_12282_12324[(2)] = inst_12265);

(statearr_12282_12324[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12270 === (22))){
var inst_12263 = (state_12269[(2)]);
var state_12269__$1 = state_12269;
var statearr_12283_12325 = state_12269__$1;
(statearr_12283_12325[(2)] = inst_12263);

(statearr_12283_12325[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12270 === (6))){
var inst_12267 = (state_12269[(2)]);
var state_12269__$1 = state_12269;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_12269__$1,inst_12267);
} else {
if((state_val_12270 === (25))){
var state_12269__$1 = state_12269;
var statearr_12284_12326 = state_12269__$1;
(statearr_12284_12326[(2)] = null);

(statearr_12284_12326[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12270 === (17))){
var inst_12243 = (state_12269[(14)]);
var state_12269__$1 = state_12269;
var statearr_12285_12327 = state_12269__$1;
(statearr_12285_12327[(2)] = inst_12243);

(statearr_12285_12327[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12270 === (3))){
var inst_12203 = (state_12269[(9)]);
var state_12269__$1 = state_12269;
var statearr_12286_12328 = state_12269__$1;
(statearr_12286_12328[(2)] = inst_12203);

(statearr_12286_12328[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12270 === (12))){
var inst_12222 = (state_12269[(15)]);
var inst_12243 = (state_12269[(14)]);
var inst_12229 = (state_12269[(16)]);
var inst_12243__$1 = inst_12222.call(null,inst_12229);
var state_12269__$1 = (function (){var statearr_12287 = state_12269;
(statearr_12287[(14)] = inst_12243__$1);

return statearr_12287;
})();
if(cljs.core.truth_(inst_12243__$1)){
var statearr_12288_12329 = state_12269__$1;
(statearr_12288_12329[(1)] = (17));

} else {
var statearr_12289_12330 = state_12269__$1;
(statearr_12289_12330[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12270 === (2))){
var inst_12203 = (state_12269[(9)]);
var inst_12206 = cljs.core.apply.call(null,cljs.core.hash_map,inst_12203);
var state_12269__$1 = state_12269;
var statearr_12290_12331 = state_12269__$1;
(statearr_12290_12331[(2)] = inst_12206);

(statearr_12290_12331[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12270 === (23))){
var inst_12254 = (state_12269[(2)]);
var state_12269__$1 = state_12269;
if(cljs.core.truth_(inst_12254)){
var statearr_12291_12332 = state_12269__$1;
(statearr_12291_12332[(1)] = (24));

} else {
var statearr_12292_12333 = state_12269__$1;
(statearr_12292_12333[(1)] = (25));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12270 === (19))){
var inst_12251 = (state_12269[(2)]);
var state_12269__$1 = state_12269;
if(cljs.core.truth_(inst_12251)){
var statearr_12293_12334 = state_12269__$1;
(statearr_12293_12334[(1)] = (20));

} else {
var statearr_12294_12335 = state_12269__$1;
(statearr_12294_12335[(1)] = (21));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12270 === (11))){
var inst_12228 = (state_12269[(8)]);
var inst_12234 = (inst_12228 == null);
var state_12269__$1 = state_12269;
if(cljs.core.truth_(inst_12234)){
var statearr_12295_12336 = state_12269__$1;
(statearr_12295_12336[(1)] = (14));

} else {
var statearr_12296_12337 = state_12269__$1;
(statearr_12296_12337[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12270 === (9))){
var inst_12221 = (state_12269[(10)]);
var inst_12221__$1 = (state_12269[(2)]);
var inst_12222 = cljs.core.get.call(null,inst_12221__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_12223 = cljs.core.get.call(null,inst_12221__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_12224 = cljs.core.get.call(null,inst_12221__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_12269__$1 = (function (){var statearr_12297 = state_12269;
(statearr_12297[(17)] = inst_12223);

(statearr_12297[(15)] = inst_12222);

(statearr_12297[(10)] = inst_12221__$1);

return statearr_12297;
})();
return cljs.core.async.ioc_alts_BANG_.call(null,state_12269__$1,(10),inst_12224);
} else {
if((state_val_12270 === (5))){
var inst_12213 = (state_12269[(7)]);
var inst_12216 = cljs.core.seq_QMARK_.call(null,inst_12213);
var state_12269__$1 = state_12269;
if(inst_12216){
var statearr_12298_12338 = state_12269__$1;
(statearr_12298_12338[(1)] = (7));

} else {
var statearr_12299_12339 = state_12269__$1;
(statearr_12299_12339[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12270 === (14))){
var inst_12229 = (state_12269[(16)]);
var inst_12236 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_12229);
var state_12269__$1 = state_12269;
var statearr_12300_12340 = state_12269__$1;
(statearr_12300_12340[(2)] = inst_12236);

(statearr_12300_12340[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12270 === (26))){
var inst_12259 = (state_12269[(2)]);
var state_12269__$1 = state_12269;
var statearr_12301_12341 = state_12269__$1;
(statearr_12301_12341[(2)] = inst_12259);

(statearr_12301_12341[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12270 === (16))){
var inst_12239 = (state_12269[(2)]);
var inst_12240 = calc_state.call(null);
var inst_12213 = inst_12240;
var state_12269__$1 = (function (){var statearr_12302 = state_12269;
(statearr_12302[(18)] = inst_12239);

(statearr_12302[(7)] = inst_12213);

return statearr_12302;
})();
var statearr_12303_12342 = state_12269__$1;
(statearr_12303_12342[(2)] = null);

(statearr_12303_12342[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12270 === (10))){
var inst_12228 = (state_12269[(8)]);
var inst_12229 = (state_12269[(16)]);
var inst_12227 = (state_12269[(2)]);
var inst_12228__$1 = cljs.core.nth.call(null,inst_12227,(0),null);
var inst_12229__$1 = cljs.core.nth.call(null,inst_12227,(1),null);
var inst_12230 = (inst_12228__$1 == null);
var inst_12231 = cljs.core._EQ_.call(null,inst_12229__$1,change);
var inst_12232 = (inst_12230) || (inst_12231);
var state_12269__$1 = (function (){var statearr_12304 = state_12269;
(statearr_12304[(8)] = inst_12228__$1);

(statearr_12304[(16)] = inst_12229__$1);

return statearr_12304;
})();
if(cljs.core.truth_(inst_12232)){
var statearr_12305_12343 = state_12269__$1;
(statearr_12305_12343[(1)] = (11));

} else {
var statearr_12306_12344 = state_12269__$1;
(statearr_12306_12344[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12270 === (18))){
var inst_12223 = (state_12269[(17)]);
var inst_12222 = (state_12269[(15)]);
var inst_12229 = (state_12269[(16)]);
var inst_12246 = cljs.core.empty_QMARK_.call(null,inst_12222);
var inst_12247 = inst_12223.call(null,inst_12229);
var inst_12248 = cljs.core.not.call(null,inst_12247);
var inst_12249 = (inst_12246) && (inst_12248);
var state_12269__$1 = state_12269;
var statearr_12307_12345 = state_12269__$1;
(statearr_12307_12345[(2)] = inst_12249);

(statearr_12307_12345[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12270 === (8))){
var inst_12213 = (state_12269[(7)]);
var state_12269__$1 = state_12269;
var statearr_12308_12346 = state_12269__$1;
(statearr_12308_12346[(2)] = inst_12213);

(statearr_12308_12346[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__7383__auto___12316,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;
return ((function (switch__7321__auto__,c__7383__auto___12316,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var cljs$core$async$mix_$_state_machine__7322__auto__ = null;
var cljs$core$async$mix_$_state_machine__7322__auto____0 = (function (){
var statearr_12312 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_12312[(0)] = cljs$core$async$mix_$_state_machine__7322__auto__);

(statearr_12312[(1)] = (1));

return statearr_12312;
});
var cljs$core$async$mix_$_state_machine__7322__auto____1 = (function (state_12269){
while(true){
var ret_value__7323__auto__ = (function (){try{while(true){
var result__7324__auto__ = switch__7321__auto__.call(null,state_12269);
if(cljs.core.keyword_identical_QMARK_.call(null,result__7324__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__7324__auto__;
}
break;
}
}catch (e12313){if((e12313 instanceof Object)){
var ex__7325__auto__ = e12313;
var statearr_12314_12347 = state_12269;
(statearr_12314_12347[(5)] = ex__7325__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12269);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e12313;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__7323__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__12348 = state_12269;
state_12269 = G__12348;
continue;
} else {
return ret_value__7323__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__7322__auto__ = function(state_12269){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__7322__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__7322__auto____1.call(this,state_12269);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__7322__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__7322__auto____0;
cljs$core$async$mix_$_state_machine__7322__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__7322__auto____1;
return cljs$core$async$mix_$_state_machine__7322__auto__;
})()
;})(switch__7321__auto__,c__7383__auto___12316,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();
var state__7385__auto__ = (function (){var statearr_12315 = f__7384__auto__.call(null);
(statearr_12315[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7383__auto___12316);

return statearr_12315;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__7385__auto__);
});})(c__7383__auto___12316,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
);


return m;
});
/**
 * Adds ch as an input to the mix
 */
cljs.core.async.admix = (function cljs$core$async$admix(mix,ch){
return cljs.core.async.admix_STAR_.call(null,mix,ch);
});
/**
 * Removes ch as an input to the mix
 */
cljs.core.async.unmix = (function cljs$core$async$unmix(mix,ch){
return cljs.core.async.unmix_STAR_.call(null,mix,ch);
});
/**
 * removes all inputs from the mix
 */
cljs.core.async.unmix_all = (function cljs$core$async$unmix_all(mix){
return cljs.core.async.unmix_all_STAR_.call(null,mix);
});
/**
 * Atomically sets the state(s) of one or more channels in a mix. The
 * state map is a map of channels -> channel-state-map. A
 * channel-state-map is a map of attrs -> boolean, where attr is one or
 * more of :mute, :pause or :solo. Any states supplied are merged with
 * the current state.
 * 
 * Note that channels can be added to a mix via toggle, which can be
 * used to add channels in a particular (e.g. paused) state.
 */
cljs.core.async.toggle = (function cljs$core$async$toggle(mix,state_map){
return cljs.core.async.toggle_STAR_.call(null,mix,state_map);
});
/**
 * Sets the solo mode of the mix. mode must be one of :mute or :pause
 */
cljs.core.async.solo_mode = (function cljs$core$async$solo_mode(mix,mode){
return cljs.core.async.solo_mode_STAR_.call(null,mix,mode);
});

cljs.core.async.Pub = (function (){var obj12350 = {};
return obj12350;
})();

cljs.core.async.sub_STAR_ = (function cljs$core$async$sub_STAR_(p,v,ch,close_QMARK_){
if((function (){var and__4319__auto__ = p;
if(and__4319__auto__){
return p.cljs$core$async$Pub$sub_STAR_$arity$4;
} else {
return and__4319__auto__;
}
})()){
return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else {
var x__4967__auto__ = (((p == null))?null:p);
return (function (){var or__4331__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__4967__auto__)]);
if(or__4331__auto__){
return or__4331__auto__;
} else {
var or__4331__auto____$1 = (cljs.core.async.sub_STAR_["_"]);
if(or__4331__auto____$1){
return or__4331__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Pub.sub*",p);
}
}
})().call(null,p,v,ch,close_QMARK_);
}
});

cljs.core.async.unsub_STAR_ = (function cljs$core$async$unsub_STAR_(p,v,ch){
if((function (){var and__4319__auto__ = p;
if(and__4319__auto__){
return p.cljs$core$async$Pub$unsub_STAR_$arity$3;
} else {
return and__4319__auto__;
}
})()){
return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else {
var x__4967__auto__ = (((p == null))?null:p);
return (function (){var or__4331__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__4967__auto__)]);
if(or__4331__auto__){
return or__4331__auto__;
} else {
var or__4331__auto____$1 = (cljs.core.async.unsub_STAR_["_"]);
if(or__4331__auto____$1){
return or__4331__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub*",p);
}
}
})().call(null,p,v,ch);
}
});

cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(){
var G__12352 = arguments.length;
switch (G__12352) {
case 1:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (p){
if((function (){var and__4319__auto__ = p;
if(and__4319__auto__){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1;
} else {
return and__4319__auto__;
}
})()){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else {
var x__4967__auto__ = (((p == null))?null:p);
return (function (){var or__4331__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__4967__auto__)]);
if(or__4331__auto__){
return or__4331__auto__;
} else {
var or__4331__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(or__4331__auto____$1){
return or__4331__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
})().call(null,p);
}
});

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (p,v){
if((function (){var and__4319__auto__ = p;
if(and__4319__auto__){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2;
} else {
return and__4319__auto__;
}
})()){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else {
var x__4967__auto__ = (((p == null))?null:p);
return (function (){var or__4331__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__4967__auto__)]);
if(or__4331__auto__){
return or__4331__auto__;
} else {
var or__4331__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(or__4331__auto____$1){
return or__4331__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
})().call(null,p,v);
}
});

cljs.core.async.unsub_all_STAR_.cljs$lang$maxFixedArity = 2;

/**
 * Creates and returns a pub(lication) of the supplied channel,
 * partitioned into topics by the topic-fn. topic-fn will be applied to
 * each value on the channel and the result will determine the 'topic'
 * on which that value will be put. Channels can be subscribed to
 * receive copies of topics using 'sub', and unsubscribed using
 * 'unsub'. Each topic will be handled by an internal mult on a
 * dedicated channel. By default these internal channels are
 * unbuffered, but a buf-fn can be supplied which, given a topic,
 * creates a buffer with desired properties.
 * 
 * Each item is distributed to all subs in parallel and synchronously,
 * i.e. each sub must accept before the next item is distributed. Use
 * buffering/windowing to prevent slow subs from holding up the pub.
 * 
 * Items received when there are no matching subs get dropped.
 * 
 * Note that if buf-fns are used then each topic is handled
 * asynchronously, i.e. if a channel is subscribed to more than one
 * topic it should not expect them to be interleaved identically with
 * the source.
 */
cljs.core.async.pub = (function cljs$core$async$pub(){
var G__12356 = arguments.length;
switch (G__12356) {
case 2:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2 = (function (ch,topic_fn){
return cljs.core.async.pub.call(null,ch,topic_fn,cljs.core.constantly.call(null,null));
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3 = (function (ch,topic_fn,buf_fn){
var mults = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var ensure_mult = ((function (mults){
return (function (topic){
var or__4331__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,mults),topic);
if(cljs.core.truth_(or__4331__auto__)){
return or__4331__auto__;
} else {
return cljs.core.get.call(null,cljs.core.swap_BANG_.call(null,mults,((function (or__4331__auto__,mults){
return (function (p1__12354_SHARP_){
if(cljs.core.truth_(p1__12354_SHARP_.call(null,topic))){
return p1__12354_SHARP_;
} else {
return cljs.core.assoc.call(null,p1__12354_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__4331__auto__,mults))
),topic);
}
});})(mults))
;
var p = (function (){
if(typeof cljs.core.async.t12357 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t12357 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta12358){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta12358 = meta12358;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t12357.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_12359,meta12358__$1){
var self__ = this;
var _12359__$1 = this;
return (new cljs.core.async.t12357(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta12358__$1));
});})(mults,ensure_mult))
;

cljs.core.async.t12357.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_12359){
var self__ = this;
var _12359__$1 = this;
return self__.meta12358;
});})(mults,ensure_mult))
;

cljs.core.async.t12357.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t12357.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(mults,ensure_mult))
;

cljs.core.async.t12357.prototype.cljs$core$async$Pub$ = true;

cljs.core.async.t12357.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = self__.ensure_mult.call(null,topic);
return cljs.core.async.tap.call(null,m,ch__$1,close_QMARK_);
});})(mults,ensure_mult))
;

cljs.core.async.t12357.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1){
var self__ = this;
var p__$1 = this;
var temp__4422__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,self__.mults),topic);
if(cljs.core.truth_(temp__4422__auto__)){
var m = temp__4422__auto__;
return cljs.core.async.untap.call(null,m,ch__$1);
} else {
return null;
}
});})(mults,ensure_mult))
;

cljs.core.async.t12357.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;

cljs.core.async.t12357.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;

cljs.core.async.t12357.getBasis = ((function (mults,ensure_mult){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta12358","meta12358",-80545155,null)], null);
});})(mults,ensure_mult))
;

cljs.core.async.t12357.cljs$lang$type = true;

cljs.core.async.t12357.cljs$lang$ctorStr = "cljs.core.async/t12357";

cljs.core.async.t12357.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__4910__auto__,writer__4911__auto__,opt__4912__auto__){
return cljs.core._write.call(null,writer__4911__auto__,"cljs.core.async/t12357");
});})(mults,ensure_mult))
;

cljs.core.async.__GT_t12357 = ((function (mults,ensure_mult){
return (function cljs$core$async$__GT_t12357(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta12358){
return (new cljs.core.async.t12357(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta12358));
});})(mults,ensure_mult))
;

}

return (new cljs.core.async.t12357(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__7383__auto___12480 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__7383__auto___12480,mults,ensure_mult,p){
return (function (){
var f__7384__auto__ = (function (){var switch__7321__auto__ = ((function (c__7383__auto___12480,mults,ensure_mult,p){
return (function (state_12431){
var state_val_12432 = (state_12431[(1)]);
if((state_val_12432 === (7))){
var inst_12427 = (state_12431[(2)]);
var state_12431__$1 = state_12431;
var statearr_12433_12481 = state_12431__$1;
(statearr_12433_12481[(2)] = inst_12427);

(statearr_12433_12481[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12432 === (20))){
var state_12431__$1 = state_12431;
var statearr_12434_12482 = state_12431__$1;
(statearr_12434_12482[(2)] = null);

(statearr_12434_12482[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12432 === (1))){
var state_12431__$1 = state_12431;
var statearr_12435_12483 = state_12431__$1;
(statearr_12435_12483[(2)] = null);

(statearr_12435_12483[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12432 === (24))){
var inst_12410 = (state_12431[(7)]);
var inst_12419 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_12410);
var state_12431__$1 = state_12431;
var statearr_12436_12484 = state_12431__$1;
(statearr_12436_12484[(2)] = inst_12419);

(statearr_12436_12484[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12432 === (4))){
var inst_12362 = (state_12431[(8)]);
var inst_12362__$1 = (state_12431[(2)]);
var inst_12363 = (inst_12362__$1 == null);
var state_12431__$1 = (function (){var statearr_12437 = state_12431;
(statearr_12437[(8)] = inst_12362__$1);

return statearr_12437;
})();
if(cljs.core.truth_(inst_12363)){
var statearr_12438_12485 = state_12431__$1;
(statearr_12438_12485[(1)] = (5));

} else {
var statearr_12439_12486 = state_12431__$1;
(statearr_12439_12486[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12432 === (15))){
var inst_12404 = (state_12431[(2)]);
var state_12431__$1 = state_12431;
var statearr_12440_12487 = state_12431__$1;
(statearr_12440_12487[(2)] = inst_12404);

(statearr_12440_12487[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12432 === (21))){
var inst_12424 = (state_12431[(2)]);
var state_12431__$1 = (function (){var statearr_12441 = state_12431;
(statearr_12441[(9)] = inst_12424);

return statearr_12441;
})();
var statearr_12442_12488 = state_12431__$1;
(statearr_12442_12488[(2)] = null);

(statearr_12442_12488[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12432 === (13))){
var inst_12386 = (state_12431[(10)]);
var inst_12388 = cljs.core.chunked_seq_QMARK_.call(null,inst_12386);
var state_12431__$1 = state_12431;
if(inst_12388){
var statearr_12443_12489 = state_12431__$1;
(statearr_12443_12489[(1)] = (16));

} else {
var statearr_12444_12490 = state_12431__$1;
(statearr_12444_12490[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12432 === (22))){
var inst_12416 = (state_12431[(2)]);
var state_12431__$1 = state_12431;
if(cljs.core.truth_(inst_12416)){
var statearr_12445_12491 = state_12431__$1;
(statearr_12445_12491[(1)] = (23));

} else {
var statearr_12446_12492 = state_12431__$1;
(statearr_12446_12492[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12432 === (6))){
var inst_12362 = (state_12431[(8)]);
var inst_12412 = (state_12431[(11)]);
var inst_12410 = (state_12431[(7)]);
var inst_12410__$1 = topic_fn.call(null,inst_12362);
var inst_12411 = cljs.core.deref.call(null,mults);
var inst_12412__$1 = cljs.core.get.call(null,inst_12411,inst_12410__$1);
var state_12431__$1 = (function (){var statearr_12447 = state_12431;
(statearr_12447[(11)] = inst_12412__$1);

(statearr_12447[(7)] = inst_12410__$1);

return statearr_12447;
})();
if(cljs.core.truth_(inst_12412__$1)){
var statearr_12448_12493 = state_12431__$1;
(statearr_12448_12493[(1)] = (19));

} else {
var statearr_12449_12494 = state_12431__$1;
(statearr_12449_12494[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12432 === (25))){
var inst_12421 = (state_12431[(2)]);
var state_12431__$1 = state_12431;
var statearr_12450_12495 = state_12431__$1;
(statearr_12450_12495[(2)] = inst_12421);

(statearr_12450_12495[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12432 === (17))){
var inst_12386 = (state_12431[(10)]);
var inst_12395 = cljs.core.first.call(null,inst_12386);
var inst_12396 = cljs.core.async.muxch_STAR_.call(null,inst_12395);
var inst_12397 = cljs.core.async.close_BANG_.call(null,inst_12396);
var inst_12398 = cljs.core.next.call(null,inst_12386);
var inst_12372 = inst_12398;
var inst_12373 = null;
var inst_12374 = (0);
var inst_12375 = (0);
var state_12431__$1 = (function (){var statearr_12451 = state_12431;
(statearr_12451[(12)] = inst_12373);

(statearr_12451[(13)] = inst_12372);

(statearr_12451[(14)] = inst_12374);

(statearr_12451[(15)] = inst_12397);

(statearr_12451[(16)] = inst_12375);

return statearr_12451;
})();
var statearr_12452_12496 = state_12431__$1;
(statearr_12452_12496[(2)] = null);

(statearr_12452_12496[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12432 === (3))){
var inst_12429 = (state_12431[(2)]);
var state_12431__$1 = state_12431;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_12431__$1,inst_12429);
} else {
if((state_val_12432 === (12))){
var inst_12406 = (state_12431[(2)]);
var state_12431__$1 = state_12431;
var statearr_12453_12497 = state_12431__$1;
(statearr_12453_12497[(2)] = inst_12406);

(statearr_12453_12497[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12432 === (2))){
var state_12431__$1 = state_12431;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_12431__$1,(4),ch);
} else {
if((state_val_12432 === (23))){
var state_12431__$1 = state_12431;
var statearr_12454_12498 = state_12431__$1;
(statearr_12454_12498[(2)] = null);

(statearr_12454_12498[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12432 === (19))){
var inst_12362 = (state_12431[(8)]);
var inst_12412 = (state_12431[(11)]);
var inst_12414 = cljs.core.async.muxch_STAR_.call(null,inst_12412);
var state_12431__$1 = state_12431;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_12431__$1,(22),inst_12414,inst_12362);
} else {
if((state_val_12432 === (11))){
var inst_12372 = (state_12431[(13)]);
var inst_12386 = (state_12431[(10)]);
var inst_12386__$1 = cljs.core.seq.call(null,inst_12372);
var state_12431__$1 = (function (){var statearr_12455 = state_12431;
(statearr_12455[(10)] = inst_12386__$1);

return statearr_12455;
})();
if(inst_12386__$1){
var statearr_12456_12499 = state_12431__$1;
(statearr_12456_12499[(1)] = (13));

} else {
var statearr_12457_12500 = state_12431__$1;
(statearr_12457_12500[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12432 === (9))){
var inst_12408 = (state_12431[(2)]);
var state_12431__$1 = state_12431;
var statearr_12458_12501 = state_12431__$1;
(statearr_12458_12501[(2)] = inst_12408);

(statearr_12458_12501[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12432 === (5))){
var inst_12369 = cljs.core.deref.call(null,mults);
var inst_12370 = cljs.core.vals.call(null,inst_12369);
var inst_12371 = cljs.core.seq.call(null,inst_12370);
var inst_12372 = inst_12371;
var inst_12373 = null;
var inst_12374 = (0);
var inst_12375 = (0);
var state_12431__$1 = (function (){var statearr_12459 = state_12431;
(statearr_12459[(12)] = inst_12373);

(statearr_12459[(13)] = inst_12372);

(statearr_12459[(14)] = inst_12374);

(statearr_12459[(16)] = inst_12375);

return statearr_12459;
})();
var statearr_12460_12502 = state_12431__$1;
(statearr_12460_12502[(2)] = null);

(statearr_12460_12502[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12432 === (14))){
var state_12431__$1 = state_12431;
var statearr_12464_12503 = state_12431__$1;
(statearr_12464_12503[(2)] = null);

(statearr_12464_12503[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12432 === (16))){
var inst_12386 = (state_12431[(10)]);
var inst_12390 = cljs.core.chunk_first.call(null,inst_12386);
var inst_12391 = cljs.core.chunk_rest.call(null,inst_12386);
var inst_12392 = cljs.core.count.call(null,inst_12390);
var inst_12372 = inst_12391;
var inst_12373 = inst_12390;
var inst_12374 = inst_12392;
var inst_12375 = (0);
var state_12431__$1 = (function (){var statearr_12465 = state_12431;
(statearr_12465[(12)] = inst_12373);

(statearr_12465[(13)] = inst_12372);

(statearr_12465[(14)] = inst_12374);

(statearr_12465[(16)] = inst_12375);

return statearr_12465;
})();
var statearr_12466_12504 = state_12431__$1;
(statearr_12466_12504[(2)] = null);

(statearr_12466_12504[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12432 === (10))){
var inst_12373 = (state_12431[(12)]);
var inst_12372 = (state_12431[(13)]);
var inst_12374 = (state_12431[(14)]);
var inst_12375 = (state_12431[(16)]);
var inst_12380 = cljs.core._nth.call(null,inst_12373,inst_12375);
var inst_12381 = cljs.core.async.muxch_STAR_.call(null,inst_12380);
var inst_12382 = cljs.core.async.close_BANG_.call(null,inst_12381);
var inst_12383 = (inst_12375 + (1));
var tmp12461 = inst_12373;
var tmp12462 = inst_12372;
var tmp12463 = inst_12374;
var inst_12372__$1 = tmp12462;
var inst_12373__$1 = tmp12461;
var inst_12374__$1 = tmp12463;
var inst_12375__$1 = inst_12383;
var state_12431__$1 = (function (){var statearr_12467 = state_12431;
(statearr_12467[(12)] = inst_12373__$1);

(statearr_12467[(13)] = inst_12372__$1);

(statearr_12467[(14)] = inst_12374__$1);

(statearr_12467[(17)] = inst_12382);

(statearr_12467[(16)] = inst_12375__$1);

return statearr_12467;
})();
var statearr_12468_12505 = state_12431__$1;
(statearr_12468_12505[(2)] = null);

(statearr_12468_12505[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12432 === (18))){
var inst_12401 = (state_12431[(2)]);
var state_12431__$1 = state_12431;
var statearr_12469_12506 = state_12431__$1;
(statearr_12469_12506[(2)] = inst_12401);

(statearr_12469_12506[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12432 === (8))){
var inst_12374 = (state_12431[(14)]);
var inst_12375 = (state_12431[(16)]);
var inst_12377 = (inst_12375 < inst_12374);
var inst_12378 = inst_12377;
var state_12431__$1 = state_12431;
if(cljs.core.truth_(inst_12378)){
var statearr_12470_12507 = state_12431__$1;
(statearr_12470_12507[(1)] = (10));

} else {
var statearr_12471_12508 = state_12431__$1;
(statearr_12471_12508[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__7383__auto___12480,mults,ensure_mult,p))
;
return ((function (switch__7321__auto__,c__7383__auto___12480,mults,ensure_mult,p){
return (function() {
var cljs$core$async$state_machine__7322__auto__ = null;
var cljs$core$async$state_machine__7322__auto____0 = (function (){
var statearr_12475 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_12475[(0)] = cljs$core$async$state_machine__7322__auto__);

(statearr_12475[(1)] = (1));

return statearr_12475;
});
var cljs$core$async$state_machine__7322__auto____1 = (function (state_12431){
while(true){
var ret_value__7323__auto__ = (function (){try{while(true){
var result__7324__auto__ = switch__7321__auto__.call(null,state_12431);
if(cljs.core.keyword_identical_QMARK_.call(null,result__7324__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__7324__auto__;
}
break;
}
}catch (e12476){if((e12476 instanceof Object)){
var ex__7325__auto__ = e12476;
var statearr_12477_12509 = state_12431;
(statearr_12477_12509[(5)] = ex__7325__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12431);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e12476;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__7323__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__12510 = state_12431;
state_12431 = G__12510;
continue;
} else {
return ret_value__7323__auto__;
}
break;
}
});
cljs$core$async$state_machine__7322__auto__ = function(state_12431){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__7322__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__7322__auto____1.call(this,state_12431);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__7322__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__7322__auto____0;
cljs$core$async$state_machine__7322__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__7322__auto____1;
return cljs$core$async$state_machine__7322__auto__;
})()
;})(switch__7321__auto__,c__7383__auto___12480,mults,ensure_mult,p))
})();
var state__7385__auto__ = (function (){var statearr_12478 = f__7384__auto__.call(null);
(statearr_12478[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7383__auto___12480);

return statearr_12478;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__7385__auto__);
});})(c__7383__auto___12480,mults,ensure_mult,p))
);


return p;
});

cljs.core.async.pub.cljs$lang$maxFixedArity = 3;
/**
 * Subscribes a channel to a topic of a pub.
 * 
 * By default the channel will be closed when the source closes,
 * but can be determined by the close? parameter.
 */
cljs.core.async.sub = (function cljs$core$async$sub(){
var G__12512 = arguments.length;
switch (G__12512) {
case 3:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3 = (function (p,topic,ch){
return cljs.core.async.sub.call(null,p,topic,ch,true);
});

cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4 = (function (p,topic,ch,close_QMARK_){
return cljs.core.async.sub_STAR_.call(null,p,topic,ch,close_QMARK_);
});

cljs.core.async.sub.cljs$lang$maxFixedArity = 4;
/**
 * Unsubscribes a channel from a topic of a pub
 */
cljs.core.async.unsub = (function cljs$core$async$unsub(p,topic,ch){
return cljs.core.async.unsub_STAR_.call(null,p,topic,ch);
});
/**
 * Unsubscribes all channels from a pub, or a topic of a pub
 */
cljs.core.async.unsub_all = (function cljs$core$async$unsub_all(){
var G__12515 = arguments.length;
switch (G__12515) {
case 1:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1 = (function (p){
return cljs.core.async.unsub_all_STAR_.call(null,p);
});

cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2 = (function (p,topic){
return cljs.core.async.unsub_all_STAR_.call(null,p,topic);
});

cljs.core.async.unsub_all.cljs$lang$maxFixedArity = 2;
/**
 * Takes a function and a collection of source channels, and returns a
 * channel which contains the values produced by applying f to the set
 * of first items taken from each source channel, followed by applying
 * f to the set of second items from each channel, until any one of the
 * channels is closed, at which point the output channel will be
 * closed. The returned channel will be unbuffered by default, or a
 * buf-or-n can be supplied
 */
cljs.core.async.map = (function cljs$core$async$map(){
var G__12518 = arguments.length;
switch (G__12518) {
case 2:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

cljs.core.async.map.cljs$core$IFn$_invoke$arity$2 = (function (f,chs){
return cljs.core.async.map.call(null,f,chs,null);
});

cljs.core.async.map.cljs$core$IFn$_invoke$arity$3 = (function (f,chs,buf_or_n){
var chs__$1 = cljs.core.vec.call(null,chs);
var out = cljs.core.async.chan.call(null,buf_or_n);
var cnt = cljs.core.count.call(null,chs__$1);
var rets = cljs.core.object_array.call(null,cnt);
var dchan = cljs.core.async.chan.call(null,(1));
var dctr = cljs.core.atom.call(null,null);
var done = cljs.core.mapv.call(null,((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (i){
return ((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (ret){
(rets[i] = ret);

if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.call(null,dchan,rets.slice((0)));
} else {
return null;
}
});
;})(chs__$1,out,cnt,rets,dchan,dctr))
});})(chs__$1,out,cnt,rets,dchan,dctr))
,cljs.core.range.call(null,cnt));
var c__7383__auto___12588 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__7383__auto___12588,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){
var f__7384__auto__ = (function (){var switch__7321__auto__ = ((function (c__7383__auto___12588,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_12557){
var state_val_12558 = (state_12557[(1)]);
if((state_val_12558 === (7))){
var state_12557__$1 = state_12557;
var statearr_12559_12589 = state_12557__$1;
(statearr_12559_12589[(2)] = null);

(statearr_12559_12589[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12558 === (1))){
var state_12557__$1 = state_12557;
var statearr_12560_12590 = state_12557__$1;
(statearr_12560_12590[(2)] = null);

(statearr_12560_12590[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12558 === (4))){
var inst_12521 = (state_12557[(7)]);
var inst_12523 = (inst_12521 < cnt);
var state_12557__$1 = state_12557;
if(cljs.core.truth_(inst_12523)){
var statearr_12561_12591 = state_12557__$1;
(statearr_12561_12591[(1)] = (6));

} else {
var statearr_12562_12592 = state_12557__$1;
(statearr_12562_12592[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12558 === (15))){
var inst_12553 = (state_12557[(2)]);
var state_12557__$1 = state_12557;
var statearr_12563_12593 = state_12557__$1;
(statearr_12563_12593[(2)] = inst_12553);

(statearr_12563_12593[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12558 === (13))){
var inst_12546 = cljs.core.async.close_BANG_.call(null,out);
var state_12557__$1 = state_12557;
var statearr_12564_12594 = state_12557__$1;
(statearr_12564_12594[(2)] = inst_12546);

(statearr_12564_12594[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12558 === (6))){
var state_12557__$1 = state_12557;
var statearr_12565_12595 = state_12557__$1;
(statearr_12565_12595[(2)] = null);

(statearr_12565_12595[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12558 === (3))){
var inst_12555 = (state_12557[(2)]);
var state_12557__$1 = state_12557;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_12557__$1,inst_12555);
} else {
if((state_val_12558 === (12))){
var inst_12543 = (state_12557[(8)]);
var inst_12543__$1 = (state_12557[(2)]);
var inst_12544 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_12543__$1);
var state_12557__$1 = (function (){var statearr_12566 = state_12557;
(statearr_12566[(8)] = inst_12543__$1);

return statearr_12566;
})();
if(cljs.core.truth_(inst_12544)){
var statearr_12567_12596 = state_12557__$1;
(statearr_12567_12596[(1)] = (13));

} else {
var statearr_12568_12597 = state_12557__$1;
(statearr_12568_12597[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12558 === (2))){
var inst_12520 = cljs.core.reset_BANG_.call(null,dctr,cnt);
var inst_12521 = (0);
var state_12557__$1 = (function (){var statearr_12569 = state_12557;
(statearr_12569[(9)] = inst_12520);

(statearr_12569[(7)] = inst_12521);

return statearr_12569;
})();
var statearr_12570_12598 = state_12557__$1;
(statearr_12570_12598[(2)] = null);

(statearr_12570_12598[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12558 === (11))){
var inst_12521 = (state_12557[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_12557,(10),Object,null,(9));
var inst_12530 = chs__$1.call(null,inst_12521);
var inst_12531 = done.call(null,inst_12521);
var inst_12532 = cljs.core.async.take_BANG_.call(null,inst_12530,inst_12531);
var state_12557__$1 = state_12557;
var statearr_12571_12599 = state_12557__$1;
(statearr_12571_12599[(2)] = inst_12532);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12557__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12558 === (9))){
var inst_12521 = (state_12557[(7)]);
var inst_12534 = (state_12557[(2)]);
var inst_12535 = (inst_12521 + (1));
var inst_12521__$1 = inst_12535;
var state_12557__$1 = (function (){var statearr_12572 = state_12557;
(statearr_12572[(10)] = inst_12534);

(statearr_12572[(7)] = inst_12521__$1);

return statearr_12572;
})();
var statearr_12573_12600 = state_12557__$1;
(statearr_12573_12600[(2)] = null);

(statearr_12573_12600[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12558 === (5))){
var inst_12541 = (state_12557[(2)]);
var state_12557__$1 = (function (){var statearr_12574 = state_12557;
(statearr_12574[(11)] = inst_12541);

return statearr_12574;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_12557__$1,(12),dchan);
} else {
if((state_val_12558 === (14))){
var inst_12543 = (state_12557[(8)]);
var inst_12548 = cljs.core.apply.call(null,f,inst_12543);
var state_12557__$1 = state_12557;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_12557__$1,(16),out,inst_12548);
} else {
if((state_val_12558 === (16))){
var inst_12550 = (state_12557[(2)]);
var state_12557__$1 = (function (){var statearr_12575 = state_12557;
(statearr_12575[(12)] = inst_12550);

return statearr_12575;
})();
var statearr_12576_12601 = state_12557__$1;
(statearr_12576_12601[(2)] = null);

(statearr_12576_12601[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12558 === (10))){
var inst_12525 = (state_12557[(2)]);
var inst_12526 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);
var state_12557__$1 = (function (){var statearr_12577 = state_12557;
(statearr_12577[(13)] = inst_12525);

return statearr_12577;
})();
var statearr_12578_12602 = state_12557__$1;
(statearr_12578_12602[(2)] = inst_12526);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12557__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12558 === (8))){
var inst_12539 = (state_12557[(2)]);
var state_12557__$1 = state_12557;
var statearr_12579_12603 = state_12557__$1;
(statearr_12579_12603[(2)] = inst_12539);

(statearr_12579_12603[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__7383__auto___12588,chs__$1,out,cnt,rets,dchan,dctr,done))
;
return ((function (switch__7321__auto__,c__7383__auto___12588,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var cljs$core$async$state_machine__7322__auto__ = null;
var cljs$core$async$state_machine__7322__auto____0 = (function (){
var statearr_12583 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_12583[(0)] = cljs$core$async$state_machine__7322__auto__);

(statearr_12583[(1)] = (1));

return statearr_12583;
});
var cljs$core$async$state_machine__7322__auto____1 = (function (state_12557){
while(true){
var ret_value__7323__auto__ = (function (){try{while(true){
var result__7324__auto__ = switch__7321__auto__.call(null,state_12557);
if(cljs.core.keyword_identical_QMARK_.call(null,result__7324__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__7324__auto__;
}
break;
}
}catch (e12584){if((e12584 instanceof Object)){
var ex__7325__auto__ = e12584;
var statearr_12585_12604 = state_12557;
(statearr_12585_12604[(5)] = ex__7325__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12557);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e12584;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__7323__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__12605 = state_12557;
state_12557 = G__12605;
continue;
} else {
return ret_value__7323__auto__;
}
break;
}
});
cljs$core$async$state_machine__7322__auto__ = function(state_12557){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__7322__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__7322__auto____1.call(this,state_12557);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__7322__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__7322__auto____0;
cljs$core$async$state_machine__7322__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__7322__auto____1;
return cljs$core$async$state_machine__7322__auto__;
})()
;})(switch__7321__auto__,c__7383__auto___12588,chs__$1,out,cnt,rets,dchan,dctr,done))
})();
var state__7385__auto__ = (function (){var statearr_12586 = f__7384__auto__.call(null);
(statearr_12586[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7383__auto___12588);

return statearr_12586;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__7385__auto__);
});})(c__7383__auto___12588,chs__$1,out,cnt,rets,dchan,dctr,done))
);


return out;
});

cljs.core.async.map.cljs$lang$maxFixedArity = 3;
/**
 * Takes a collection of source channels and returns a channel which
 * contains all values taken from them. The returned channel will be
 * unbuffered by default, or a buf-or-n can be supplied. The channel
 * will close after all the source channels have closed.
 */
cljs.core.async.merge = (function cljs$core$async$merge(){
var G__12608 = arguments.length;
switch (G__12608) {
case 1:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1 = (function (chs){
return cljs.core.async.merge.call(null,chs,null);
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__7383__auto___12663 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__7383__auto___12663,out){
return (function (){
var f__7384__auto__ = (function (){var switch__7321__auto__ = ((function (c__7383__auto___12663,out){
return (function (state_12638){
var state_val_12639 = (state_12638[(1)]);
if((state_val_12639 === (7))){
var inst_12617 = (state_12638[(7)]);
var inst_12618 = (state_12638[(8)]);
var inst_12617__$1 = (state_12638[(2)]);
var inst_12618__$1 = cljs.core.nth.call(null,inst_12617__$1,(0),null);
var inst_12619 = cljs.core.nth.call(null,inst_12617__$1,(1),null);
var inst_12620 = (inst_12618__$1 == null);
var state_12638__$1 = (function (){var statearr_12640 = state_12638;
(statearr_12640[(9)] = inst_12619);

(statearr_12640[(7)] = inst_12617__$1);

(statearr_12640[(8)] = inst_12618__$1);

return statearr_12640;
})();
if(cljs.core.truth_(inst_12620)){
var statearr_12641_12664 = state_12638__$1;
(statearr_12641_12664[(1)] = (8));

} else {
var statearr_12642_12665 = state_12638__$1;
(statearr_12642_12665[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12639 === (1))){
var inst_12609 = cljs.core.vec.call(null,chs);
var inst_12610 = inst_12609;
var state_12638__$1 = (function (){var statearr_12643 = state_12638;
(statearr_12643[(10)] = inst_12610);

return statearr_12643;
})();
var statearr_12644_12666 = state_12638__$1;
(statearr_12644_12666[(2)] = null);

(statearr_12644_12666[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12639 === (4))){
var inst_12610 = (state_12638[(10)]);
var state_12638__$1 = state_12638;
return cljs.core.async.ioc_alts_BANG_.call(null,state_12638__$1,(7),inst_12610);
} else {
if((state_val_12639 === (6))){
var inst_12634 = (state_12638[(2)]);
var state_12638__$1 = state_12638;
var statearr_12645_12667 = state_12638__$1;
(statearr_12645_12667[(2)] = inst_12634);

(statearr_12645_12667[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12639 === (3))){
var inst_12636 = (state_12638[(2)]);
var state_12638__$1 = state_12638;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_12638__$1,inst_12636);
} else {
if((state_val_12639 === (2))){
var inst_12610 = (state_12638[(10)]);
var inst_12612 = cljs.core.count.call(null,inst_12610);
var inst_12613 = (inst_12612 > (0));
var state_12638__$1 = state_12638;
if(cljs.core.truth_(inst_12613)){
var statearr_12647_12668 = state_12638__$1;
(statearr_12647_12668[(1)] = (4));

} else {
var statearr_12648_12669 = state_12638__$1;
(statearr_12648_12669[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12639 === (11))){
var inst_12610 = (state_12638[(10)]);
var inst_12627 = (state_12638[(2)]);
var tmp12646 = inst_12610;
var inst_12610__$1 = tmp12646;
var state_12638__$1 = (function (){var statearr_12649 = state_12638;
(statearr_12649[(11)] = inst_12627);

(statearr_12649[(10)] = inst_12610__$1);

return statearr_12649;
})();
var statearr_12650_12670 = state_12638__$1;
(statearr_12650_12670[(2)] = null);

(statearr_12650_12670[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12639 === (9))){
var inst_12618 = (state_12638[(8)]);
var state_12638__$1 = state_12638;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_12638__$1,(11),out,inst_12618);
} else {
if((state_val_12639 === (5))){
var inst_12632 = cljs.core.async.close_BANG_.call(null,out);
var state_12638__$1 = state_12638;
var statearr_12651_12671 = state_12638__$1;
(statearr_12651_12671[(2)] = inst_12632);

(statearr_12651_12671[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12639 === (10))){
var inst_12630 = (state_12638[(2)]);
var state_12638__$1 = state_12638;
var statearr_12652_12672 = state_12638__$1;
(statearr_12652_12672[(2)] = inst_12630);

(statearr_12652_12672[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12639 === (8))){
var inst_12619 = (state_12638[(9)]);
var inst_12617 = (state_12638[(7)]);
var inst_12618 = (state_12638[(8)]);
var inst_12610 = (state_12638[(10)]);
var inst_12622 = (function (){var cs = inst_12610;
var vec__12615 = inst_12617;
var v = inst_12618;
var c = inst_12619;
return ((function (cs,vec__12615,v,c,inst_12619,inst_12617,inst_12618,inst_12610,state_val_12639,c__7383__auto___12663,out){
return (function (p1__12606_SHARP_){
return cljs.core.not_EQ_.call(null,c,p1__12606_SHARP_);
});
;})(cs,vec__12615,v,c,inst_12619,inst_12617,inst_12618,inst_12610,state_val_12639,c__7383__auto___12663,out))
})();
var inst_12623 = cljs.core.filterv.call(null,inst_12622,inst_12610);
var inst_12610__$1 = inst_12623;
var state_12638__$1 = (function (){var statearr_12653 = state_12638;
(statearr_12653[(10)] = inst_12610__$1);

return statearr_12653;
})();
var statearr_12654_12673 = state_12638__$1;
(statearr_12654_12673[(2)] = null);

(statearr_12654_12673[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});})(c__7383__auto___12663,out))
;
return ((function (switch__7321__auto__,c__7383__auto___12663,out){
return (function() {
var cljs$core$async$state_machine__7322__auto__ = null;
var cljs$core$async$state_machine__7322__auto____0 = (function (){
var statearr_12658 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_12658[(0)] = cljs$core$async$state_machine__7322__auto__);

(statearr_12658[(1)] = (1));

return statearr_12658;
});
var cljs$core$async$state_machine__7322__auto____1 = (function (state_12638){
while(true){
var ret_value__7323__auto__ = (function (){try{while(true){
var result__7324__auto__ = switch__7321__auto__.call(null,state_12638);
if(cljs.core.keyword_identical_QMARK_.call(null,result__7324__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__7324__auto__;
}
break;
}
}catch (e12659){if((e12659 instanceof Object)){
var ex__7325__auto__ = e12659;
var statearr_12660_12674 = state_12638;
(statearr_12660_12674[(5)] = ex__7325__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12638);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e12659;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__7323__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__12675 = state_12638;
state_12638 = G__12675;
continue;
} else {
return ret_value__7323__auto__;
}
break;
}
});
cljs$core$async$state_machine__7322__auto__ = function(state_12638){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__7322__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__7322__auto____1.call(this,state_12638);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__7322__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__7322__auto____0;
cljs$core$async$state_machine__7322__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__7322__auto____1;
return cljs$core$async$state_machine__7322__auto__;
})()
;})(switch__7321__auto__,c__7383__auto___12663,out))
})();
var state__7385__auto__ = (function (){var statearr_12661 = f__7384__auto__.call(null);
(statearr_12661[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7383__auto___12663);

return statearr_12661;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__7385__auto__);
});})(c__7383__auto___12663,out))
);


return out;
});

cljs.core.async.merge.cljs$lang$maxFixedArity = 2;
/**
 * Returns a channel containing the single (collection) result of the
 * items taken from the channel conjoined to the supplied
 * collection. ch must close before into produces a result.
 */
cljs.core.async.into = (function cljs$core$async$into(coll,ch){
return cljs.core.async.reduce.call(null,cljs.core.conj,coll,ch);
});
/**
 * Returns a channel that will return, at most, n items from ch. After n items
 * have been returned, or ch has been closed, the return chanel will close.
 * 
 * The output channel is unbuffered by default, unless buf-or-n is given.
 */
cljs.core.async.take = (function cljs$core$async$take(){
var G__12677 = arguments.length;
switch (G__12677) {
case 2:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.take.call(null,n,ch,null);
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__7383__auto___12725 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__7383__auto___12725,out){
return (function (){
var f__7384__auto__ = (function (){var switch__7321__auto__ = ((function (c__7383__auto___12725,out){
return (function (state_12701){
var state_val_12702 = (state_12701[(1)]);
if((state_val_12702 === (7))){
var inst_12683 = (state_12701[(7)]);
var inst_12683__$1 = (state_12701[(2)]);
var inst_12684 = (inst_12683__$1 == null);
var inst_12685 = cljs.core.not.call(null,inst_12684);
var state_12701__$1 = (function (){var statearr_12703 = state_12701;
(statearr_12703[(7)] = inst_12683__$1);

return statearr_12703;
})();
if(inst_12685){
var statearr_12704_12726 = state_12701__$1;
(statearr_12704_12726[(1)] = (8));

} else {
var statearr_12705_12727 = state_12701__$1;
(statearr_12705_12727[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12702 === (1))){
var inst_12678 = (0);
var state_12701__$1 = (function (){var statearr_12706 = state_12701;
(statearr_12706[(8)] = inst_12678);

return statearr_12706;
})();
var statearr_12707_12728 = state_12701__$1;
(statearr_12707_12728[(2)] = null);

(statearr_12707_12728[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12702 === (4))){
var state_12701__$1 = state_12701;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_12701__$1,(7),ch);
} else {
if((state_val_12702 === (6))){
var inst_12696 = (state_12701[(2)]);
var state_12701__$1 = state_12701;
var statearr_12708_12729 = state_12701__$1;
(statearr_12708_12729[(2)] = inst_12696);

(statearr_12708_12729[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12702 === (3))){
var inst_12698 = (state_12701[(2)]);
var inst_12699 = cljs.core.async.close_BANG_.call(null,out);
var state_12701__$1 = (function (){var statearr_12709 = state_12701;
(statearr_12709[(9)] = inst_12698);

return statearr_12709;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_12701__$1,inst_12699);
} else {
if((state_val_12702 === (2))){
var inst_12678 = (state_12701[(8)]);
var inst_12680 = (inst_12678 < n);
var state_12701__$1 = state_12701;
if(cljs.core.truth_(inst_12680)){
var statearr_12710_12730 = state_12701__$1;
(statearr_12710_12730[(1)] = (4));

} else {
var statearr_12711_12731 = state_12701__$1;
(statearr_12711_12731[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12702 === (11))){
var inst_12678 = (state_12701[(8)]);
var inst_12688 = (state_12701[(2)]);
var inst_12689 = (inst_12678 + (1));
var inst_12678__$1 = inst_12689;
var state_12701__$1 = (function (){var statearr_12712 = state_12701;
(statearr_12712[(10)] = inst_12688);

(statearr_12712[(8)] = inst_12678__$1);

return statearr_12712;
})();
var statearr_12713_12732 = state_12701__$1;
(statearr_12713_12732[(2)] = null);

(statearr_12713_12732[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12702 === (9))){
var state_12701__$1 = state_12701;
var statearr_12714_12733 = state_12701__$1;
(statearr_12714_12733[(2)] = null);

(statearr_12714_12733[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12702 === (5))){
var state_12701__$1 = state_12701;
var statearr_12715_12734 = state_12701__$1;
(statearr_12715_12734[(2)] = null);

(statearr_12715_12734[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12702 === (10))){
var inst_12693 = (state_12701[(2)]);
var state_12701__$1 = state_12701;
var statearr_12716_12735 = state_12701__$1;
(statearr_12716_12735[(2)] = inst_12693);

(statearr_12716_12735[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12702 === (8))){
var inst_12683 = (state_12701[(7)]);
var state_12701__$1 = state_12701;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_12701__$1,(11),out,inst_12683);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});})(c__7383__auto___12725,out))
;
return ((function (switch__7321__auto__,c__7383__auto___12725,out){
return (function() {
var cljs$core$async$state_machine__7322__auto__ = null;
var cljs$core$async$state_machine__7322__auto____0 = (function (){
var statearr_12720 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_12720[(0)] = cljs$core$async$state_machine__7322__auto__);

(statearr_12720[(1)] = (1));

return statearr_12720;
});
var cljs$core$async$state_machine__7322__auto____1 = (function (state_12701){
while(true){
var ret_value__7323__auto__ = (function (){try{while(true){
var result__7324__auto__ = switch__7321__auto__.call(null,state_12701);
if(cljs.core.keyword_identical_QMARK_.call(null,result__7324__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__7324__auto__;
}
break;
}
}catch (e12721){if((e12721 instanceof Object)){
var ex__7325__auto__ = e12721;
var statearr_12722_12736 = state_12701;
(statearr_12722_12736[(5)] = ex__7325__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12701);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e12721;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__7323__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__12737 = state_12701;
state_12701 = G__12737;
continue;
} else {
return ret_value__7323__auto__;
}
break;
}
});
cljs$core$async$state_machine__7322__auto__ = function(state_12701){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__7322__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__7322__auto____1.call(this,state_12701);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__7322__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__7322__auto____0;
cljs$core$async$state_machine__7322__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__7322__auto____1;
return cljs$core$async$state_machine__7322__auto__;
})()
;})(switch__7321__auto__,c__7383__auto___12725,out))
})();
var state__7385__auto__ = (function (){var statearr_12723 = f__7384__auto__.call(null);
(statearr_12723[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7383__auto___12725);

return statearr_12723;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__7385__auto__);
});})(c__7383__auto___12725,out))
);


return out;
});

cljs.core.async.take.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if(typeof cljs.core.async.t12745 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t12745 = (function (map_LT_,f,ch,meta12746){
this.map_LT_ = map_LT_;
this.f = f;
this.ch = ch;
this.meta12746 = meta12746;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t12745.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_12747,meta12746__$1){
var self__ = this;
var _12747__$1 = this;
return (new cljs.core.async.t12745(self__.map_LT_,self__.f,self__.ch,meta12746__$1));
});

cljs.core.async.t12745.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_12747){
var self__ = this;
var _12747__$1 = this;
return self__.meta12746;
});

cljs.core.async.t12745.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t12745.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t12745.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t12745.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t12745.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){
if(typeof cljs.core.async.t12748 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t12748 = (function (map_LT_,f,ch,meta12746,_,fn1,meta12749){
this.map_LT_ = map_LT_;
this.f = f;
this.ch = ch;
this.meta12746 = meta12746;
this._ = _;
this.fn1 = fn1;
this.meta12749 = meta12749;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t12748.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_12750,meta12749__$1){
var self__ = this;
var _12750__$1 = this;
return (new cljs.core.async.t12748(self__.map_LT_,self__.f,self__.ch,self__.meta12746,self__._,self__.fn1,meta12749__$1));
});})(___$1))
;

cljs.core.async.t12748.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_12750){
var self__ = this;
var _12750__$1 = this;
return self__.meta12749;
});})(___$1))
;

cljs.core.async.t12748.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t12748.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});})(___$1))
;

cljs.core.async.t12748.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);
return ((function (f1,___$2,___$1){
return (function (p1__12738_SHARP_){
return f1.call(null,(((p1__12738_SHARP_ == null))?null:self__.f.call(null,p1__12738_SHARP_)));
});
;})(f1,___$2,___$1))
});})(___$1))
;

cljs.core.async.t12748.getBasis = ((function (___$1){
return (function (){
return new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"map<","map<",-1235808357,null),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta12746","meta12746",-1007902360,null),new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta12749","meta12749",1093038844,null)], null);
});})(___$1))
;

cljs.core.async.t12748.cljs$lang$type = true;

cljs.core.async.t12748.cljs$lang$ctorStr = "cljs.core.async/t12748";

cljs.core.async.t12748.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__4910__auto__,writer__4911__auto__,opt__4912__auto__){
return cljs.core._write.call(null,writer__4911__auto__,"cljs.core.async/t12748");
});})(___$1))
;

cljs.core.async.__GT_t12748 = ((function (___$1){
return (function cljs$core$async$map_LT__$___GT_t12748(map_LT___$1,f__$1,ch__$1,meta12746__$1,___$2,fn1__$1,meta12749){
return (new cljs.core.async.t12748(map_LT___$1,f__$1,ch__$1,meta12746__$1,___$2,fn1__$1,meta12749));
});})(___$1))
;

}

return (new cljs.core.async.t12748(self__.map_LT_,self__.f,self__.ch,self__.meta12746,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__4319__auto__ = ret;
if(cljs.core.truth_(and__4319__auto__)){
return !((cljs.core.deref.call(null,ret) == null));
} else {
return and__4319__auto__;
}
})())){
return cljs.core.async.impl.channels.box.call(null,self__.f.call(null,cljs.core.deref.call(null,ret)));
} else {
return ret;
}
});

cljs.core.async.t12745.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t12745.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
});

cljs.core.async.t12745.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"map<","map<",-1235808357,null),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta12746","meta12746",-1007902360,null)], null);
});

cljs.core.async.t12745.cljs$lang$type = true;

cljs.core.async.t12745.cljs$lang$ctorStr = "cljs.core.async/t12745";

cljs.core.async.t12745.cljs$lang$ctorPrWriter = (function (this__4910__auto__,writer__4911__auto__,opt__4912__auto__){
return cljs.core._write.call(null,writer__4911__auto__,"cljs.core.async/t12745");
});

cljs.core.async.__GT_t12745 = (function cljs$core$async$map_LT__$___GT_t12745(map_LT___$1,f__$1,ch__$1,meta12746){
return (new cljs.core.async.t12745(map_LT___$1,f__$1,ch__$1,meta12746));
});

}

return (new cljs.core.async.t12745(cljs$core$async$map_LT_,f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if(typeof cljs.core.async.t12754 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t12754 = (function (map_GT_,f,ch,meta12755){
this.map_GT_ = map_GT_;
this.f = f;
this.ch = ch;
this.meta12755 = meta12755;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t12754.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_12756,meta12755__$1){
var self__ = this;
var _12756__$1 = this;
return (new cljs.core.async.t12754(self__.map_GT_,self__.f,self__.ch,meta12755__$1));
});

cljs.core.async.t12754.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_12756){
var self__ = this;
var _12756__$1 = this;
return self__.meta12755;
});

cljs.core.async.t12754.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t12754.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t12754.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t12754.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t12754.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t12754.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn1);
});

cljs.core.async.t12754.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"map>","map>",1676369295,null),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta12755","meta12755",-2034253633,null)], null);
});

cljs.core.async.t12754.cljs$lang$type = true;

cljs.core.async.t12754.cljs$lang$ctorStr = "cljs.core.async/t12754";

cljs.core.async.t12754.cljs$lang$ctorPrWriter = (function (this__4910__auto__,writer__4911__auto__,opt__4912__auto__){
return cljs.core._write.call(null,writer__4911__auto__,"cljs.core.async/t12754");
});

cljs.core.async.__GT_t12754 = (function cljs$core$async$map_GT__$___GT_t12754(map_GT___$1,f__$1,ch__$1,meta12755){
return (new cljs.core.async.t12754(map_GT___$1,f__$1,ch__$1,meta12755));
});

}

return (new cljs.core.async.t12754(cljs$core$async$map_GT_,f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if(typeof cljs.core.async.t12760 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t12760 = (function (filter_GT_,p,ch,meta12761){
this.filter_GT_ = filter_GT_;
this.p = p;
this.ch = ch;
this.meta12761 = meta12761;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t12760.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_12762,meta12761__$1){
var self__ = this;
var _12762__$1 = this;
return (new cljs.core.async.t12760(self__.filter_GT_,self__.p,self__.ch,meta12761__$1));
});

cljs.core.async.t12760.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_12762){
var self__ = this;
var _12762__$1 = this;
return self__.meta12761;
});

cljs.core.async.t12760.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t12760.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t12760.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t12760.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t12760.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t12760.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t12760.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.p.call(null,val))){
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box.call(null,cljs.core.not.call(null,cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch)));
}
});

cljs.core.async.t12760.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"filter>","filter>",-37644455,null),new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta12761","meta12761",23227897,null)], null);
});

cljs.core.async.t12760.cljs$lang$type = true;

cljs.core.async.t12760.cljs$lang$ctorStr = "cljs.core.async/t12760";

cljs.core.async.t12760.cljs$lang$ctorPrWriter = (function (this__4910__auto__,writer__4911__auto__,opt__4912__auto__){
return cljs.core._write.call(null,writer__4911__auto__,"cljs.core.async/t12760");
});

cljs.core.async.__GT_t12760 = (function cljs$core$async$filter_GT__$___GT_t12760(filter_GT___$1,p__$1,ch__$1,meta12761){
return (new cljs.core.async.t12760(filter_GT___$1,p__$1,ch__$1,meta12761));
});

}

return (new cljs.core.async.t12760(cljs$core$async$filter_GT_,p,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_GT_ = (function cljs$core$async$remove_GT_(p,ch){
return cljs.core.async.filter_GT_.call(null,cljs.core.complement.call(null,p),ch);
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_LT_ = (function cljs$core$async$filter_LT_(){
var G__12764 = arguments.length;
switch (G__12764) {
case 2:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.filter_LT_.call(null,p,ch,null);
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__7383__auto___12807 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__7383__auto___12807,out){
return (function (){
var f__7384__auto__ = (function (){var switch__7321__auto__ = ((function (c__7383__auto___12807,out){
return (function (state_12785){
var state_val_12786 = (state_12785[(1)]);
if((state_val_12786 === (7))){
var inst_12781 = (state_12785[(2)]);
var state_12785__$1 = state_12785;
var statearr_12787_12808 = state_12785__$1;
(statearr_12787_12808[(2)] = inst_12781);

(statearr_12787_12808[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12786 === (1))){
var state_12785__$1 = state_12785;
var statearr_12788_12809 = state_12785__$1;
(statearr_12788_12809[(2)] = null);

(statearr_12788_12809[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12786 === (4))){
var inst_12767 = (state_12785[(7)]);
var inst_12767__$1 = (state_12785[(2)]);
var inst_12768 = (inst_12767__$1 == null);
var state_12785__$1 = (function (){var statearr_12789 = state_12785;
(statearr_12789[(7)] = inst_12767__$1);

return statearr_12789;
})();
if(cljs.core.truth_(inst_12768)){
var statearr_12790_12810 = state_12785__$1;
(statearr_12790_12810[(1)] = (5));

} else {
var statearr_12791_12811 = state_12785__$1;
(statearr_12791_12811[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12786 === (6))){
var inst_12767 = (state_12785[(7)]);
var inst_12772 = p.call(null,inst_12767);
var state_12785__$1 = state_12785;
if(cljs.core.truth_(inst_12772)){
var statearr_12792_12812 = state_12785__$1;
(statearr_12792_12812[(1)] = (8));

} else {
var statearr_12793_12813 = state_12785__$1;
(statearr_12793_12813[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12786 === (3))){
var inst_12783 = (state_12785[(2)]);
var state_12785__$1 = state_12785;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_12785__$1,inst_12783);
} else {
if((state_val_12786 === (2))){
var state_12785__$1 = state_12785;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_12785__$1,(4),ch);
} else {
if((state_val_12786 === (11))){
var inst_12775 = (state_12785[(2)]);
var state_12785__$1 = state_12785;
var statearr_12794_12814 = state_12785__$1;
(statearr_12794_12814[(2)] = inst_12775);

(statearr_12794_12814[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12786 === (9))){
var state_12785__$1 = state_12785;
var statearr_12795_12815 = state_12785__$1;
(statearr_12795_12815[(2)] = null);

(statearr_12795_12815[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12786 === (5))){
var inst_12770 = cljs.core.async.close_BANG_.call(null,out);
var state_12785__$1 = state_12785;
var statearr_12796_12816 = state_12785__$1;
(statearr_12796_12816[(2)] = inst_12770);

(statearr_12796_12816[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12786 === (10))){
var inst_12778 = (state_12785[(2)]);
var state_12785__$1 = (function (){var statearr_12797 = state_12785;
(statearr_12797[(8)] = inst_12778);

return statearr_12797;
})();
var statearr_12798_12817 = state_12785__$1;
(statearr_12798_12817[(2)] = null);

(statearr_12798_12817[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12786 === (8))){
var inst_12767 = (state_12785[(7)]);
var state_12785__$1 = state_12785;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_12785__$1,(11),out,inst_12767);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});})(c__7383__auto___12807,out))
;
return ((function (switch__7321__auto__,c__7383__auto___12807,out){
return (function() {
var cljs$core$async$state_machine__7322__auto__ = null;
var cljs$core$async$state_machine__7322__auto____0 = (function (){
var statearr_12802 = [null,null,null,null,null,null,null,null,null];
(statearr_12802[(0)] = cljs$core$async$state_machine__7322__auto__);

(statearr_12802[(1)] = (1));

return statearr_12802;
});
var cljs$core$async$state_machine__7322__auto____1 = (function (state_12785){
while(true){
var ret_value__7323__auto__ = (function (){try{while(true){
var result__7324__auto__ = switch__7321__auto__.call(null,state_12785);
if(cljs.core.keyword_identical_QMARK_.call(null,result__7324__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__7324__auto__;
}
break;
}
}catch (e12803){if((e12803 instanceof Object)){
var ex__7325__auto__ = e12803;
var statearr_12804_12818 = state_12785;
(statearr_12804_12818[(5)] = ex__7325__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12785);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e12803;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__7323__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__12819 = state_12785;
state_12785 = G__12819;
continue;
} else {
return ret_value__7323__auto__;
}
break;
}
});
cljs$core$async$state_machine__7322__auto__ = function(state_12785){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__7322__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__7322__auto____1.call(this,state_12785);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__7322__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__7322__auto____0;
cljs$core$async$state_machine__7322__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__7322__auto____1;
return cljs$core$async$state_machine__7322__auto__;
})()
;})(switch__7321__auto__,c__7383__auto___12807,out))
})();
var state__7385__auto__ = (function (){var statearr_12805 = f__7384__auto__.call(null);
(statearr_12805[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7383__auto___12807);

return statearr_12805;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__7385__auto__);
});})(c__7383__auto___12807,out))
);


return out;
});

cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(){
var G__12821 = arguments.length;
switch (G__12821) {
case 2:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.remove_LT_.call(null,p,ch,null);
});

cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
return cljs.core.async.filter_LT_.call(null,cljs.core.complement.call(null,p),ch,buf_or_n);
});

cljs.core.async.remove_LT_.cljs$lang$maxFixedArity = 3;
cljs.core.async.mapcat_STAR_ = (function cljs$core$async$mapcat_STAR_(f,in$,out){
var c__7383__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__7383__auto__){
return (function (){
var f__7384__auto__ = (function (){var switch__7321__auto__ = ((function (c__7383__auto__){
return (function (state_12988){
var state_val_12989 = (state_12988[(1)]);
if((state_val_12989 === (7))){
var inst_12984 = (state_12988[(2)]);
var state_12988__$1 = state_12988;
var statearr_12990_13031 = state_12988__$1;
(statearr_12990_13031[(2)] = inst_12984);

(statearr_12990_13031[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12989 === (20))){
var inst_12954 = (state_12988[(7)]);
var inst_12965 = (state_12988[(2)]);
var inst_12966 = cljs.core.next.call(null,inst_12954);
var inst_12940 = inst_12966;
var inst_12941 = null;
var inst_12942 = (0);
var inst_12943 = (0);
var state_12988__$1 = (function (){var statearr_12991 = state_12988;
(statearr_12991[(8)] = inst_12940);

(statearr_12991[(9)] = inst_12942);

(statearr_12991[(10)] = inst_12965);

(statearr_12991[(11)] = inst_12943);

(statearr_12991[(12)] = inst_12941);

return statearr_12991;
})();
var statearr_12992_13032 = state_12988__$1;
(statearr_12992_13032[(2)] = null);

(statearr_12992_13032[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12989 === (1))){
var state_12988__$1 = state_12988;
var statearr_12993_13033 = state_12988__$1;
(statearr_12993_13033[(2)] = null);

(statearr_12993_13033[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12989 === (4))){
var inst_12929 = (state_12988[(13)]);
var inst_12929__$1 = (state_12988[(2)]);
var inst_12930 = (inst_12929__$1 == null);
var state_12988__$1 = (function (){var statearr_12994 = state_12988;
(statearr_12994[(13)] = inst_12929__$1);

return statearr_12994;
})();
if(cljs.core.truth_(inst_12930)){
var statearr_12995_13034 = state_12988__$1;
(statearr_12995_13034[(1)] = (5));

} else {
var statearr_12996_13035 = state_12988__$1;
(statearr_12996_13035[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12989 === (15))){
var state_12988__$1 = state_12988;
var statearr_13000_13036 = state_12988__$1;
(statearr_13000_13036[(2)] = null);

(statearr_13000_13036[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12989 === (21))){
var state_12988__$1 = state_12988;
var statearr_13001_13037 = state_12988__$1;
(statearr_13001_13037[(2)] = null);

(statearr_13001_13037[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12989 === (13))){
var inst_12940 = (state_12988[(8)]);
var inst_12942 = (state_12988[(9)]);
var inst_12943 = (state_12988[(11)]);
var inst_12941 = (state_12988[(12)]);
var inst_12950 = (state_12988[(2)]);
var inst_12951 = (inst_12943 + (1));
var tmp12997 = inst_12940;
var tmp12998 = inst_12942;
var tmp12999 = inst_12941;
var inst_12940__$1 = tmp12997;
var inst_12941__$1 = tmp12999;
var inst_12942__$1 = tmp12998;
var inst_12943__$1 = inst_12951;
var state_12988__$1 = (function (){var statearr_13002 = state_12988;
(statearr_13002[(14)] = inst_12950);

(statearr_13002[(8)] = inst_12940__$1);

(statearr_13002[(9)] = inst_12942__$1);

(statearr_13002[(11)] = inst_12943__$1);

(statearr_13002[(12)] = inst_12941__$1);

return statearr_13002;
})();
var statearr_13003_13038 = state_12988__$1;
(statearr_13003_13038[(2)] = null);

(statearr_13003_13038[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12989 === (22))){
var state_12988__$1 = state_12988;
var statearr_13004_13039 = state_12988__$1;
(statearr_13004_13039[(2)] = null);

(statearr_13004_13039[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12989 === (6))){
var inst_12929 = (state_12988[(13)]);
var inst_12938 = f.call(null,inst_12929);
var inst_12939 = cljs.core.seq.call(null,inst_12938);
var inst_12940 = inst_12939;
var inst_12941 = null;
var inst_12942 = (0);
var inst_12943 = (0);
var state_12988__$1 = (function (){var statearr_13005 = state_12988;
(statearr_13005[(8)] = inst_12940);

(statearr_13005[(9)] = inst_12942);

(statearr_13005[(11)] = inst_12943);

(statearr_13005[(12)] = inst_12941);

return statearr_13005;
})();
var statearr_13006_13040 = state_12988__$1;
(statearr_13006_13040[(2)] = null);

(statearr_13006_13040[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12989 === (17))){
var inst_12954 = (state_12988[(7)]);
var inst_12958 = cljs.core.chunk_first.call(null,inst_12954);
var inst_12959 = cljs.core.chunk_rest.call(null,inst_12954);
var inst_12960 = cljs.core.count.call(null,inst_12958);
var inst_12940 = inst_12959;
var inst_12941 = inst_12958;
var inst_12942 = inst_12960;
var inst_12943 = (0);
var state_12988__$1 = (function (){var statearr_13007 = state_12988;
(statearr_13007[(8)] = inst_12940);

(statearr_13007[(9)] = inst_12942);

(statearr_13007[(11)] = inst_12943);

(statearr_13007[(12)] = inst_12941);

return statearr_13007;
})();
var statearr_13008_13041 = state_12988__$1;
(statearr_13008_13041[(2)] = null);

(statearr_13008_13041[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12989 === (3))){
var inst_12986 = (state_12988[(2)]);
var state_12988__$1 = state_12988;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_12988__$1,inst_12986);
} else {
if((state_val_12989 === (12))){
var inst_12974 = (state_12988[(2)]);
var state_12988__$1 = state_12988;
var statearr_13009_13042 = state_12988__$1;
(statearr_13009_13042[(2)] = inst_12974);

(statearr_13009_13042[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12989 === (2))){
var state_12988__$1 = state_12988;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_12988__$1,(4),in$);
} else {
if((state_val_12989 === (23))){
var inst_12982 = (state_12988[(2)]);
var state_12988__$1 = state_12988;
var statearr_13010_13043 = state_12988__$1;
(statearr_13010_13043[(2)] = inst_12982);

(statearr_13010_13043[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12989 === (19))){
var inst_12969 = (state_12988[(2)]);
var state_12988__$1 = state_12988;
var statearr_13011_13044 = state_12988__$1;
(statearr_13011_13044[(2)] = inst_12969);

(statearr_13011_13044[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12989 === (11))){
var inst_12940 = (state_12988[(8)]);
var inst_12954 = (state_12988[(7)]);
var inst_12954__$1 = cljs.core.seq.call(null,inst_12940);
var state_12988__$1 = (function (){var statearr_13012 = state_12988;
(statearr_13012[(7)] = inst_12954__$1);

return statearr_13012;
})();
if(inst_12954__$1){
var statearr_13013_13045 = state_12988__$1;
(statearr_13013_13045[(1)] = (14));

} else {
var statearr_13014_13046 = state_12988__$1;
(statearr_13014_13046[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12989 === (9))){
var inst_12976 = (state_12988[(2)]);
var inst_12977 = cljs.core.async.impl.protocols.closed_QMARK_.call(null,out);
var state_12988__$1 = (function (){var statearr_13015 = state_12988;
(statearr_13015[(15)] = inst_12976);

return statearr_13015;
})();
if(cljs.core.truth_(inst_12977)){
var statearr_13016_13047 = state_12988__$1;
(statearr_13016_13047[(1)] = (21));

} else {
var statearr_13017_13048 = state_12988__$1;
(statearr_13017_13048[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12989 === (5))){
var inst_12932 = cljs.core.async.close_BANG_.call(null,out);
var state_12988__$1 = state_12988;
var statearr_13018_13049 = state_12988__$1;
(statearr_13018_13049[(2)] = inst_12932);

(statearr_13018_13049[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12989 === (14))){
var inst_12954 = (state_12988[(7)]);
var inst_12956 = cljs.core.chunked_seq_QMARK_.call(null,inst_12954);
var state_12988__$1 = state_12988;
if(inst_12956){
var statearr_13019_13050 = state_12988__$1;
(statearr_13019_13050[(1)] = (17));

} else {
var statearr_13020_13051 = state_12988__$1;
(statearr_13020_13051[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12989 === (16))){
var inst_12972 = (state_12988[(2)]);
var state_12988__$1 = state_12988;
var statearr_13021_13052 = state_12988__$1;
(statearr_13021_13052[(2)] = inst_12972);

(statearr_13021_13052[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12989 === (10))){
var inst_12943 = (state_12988[(11)]);
var inst_12941 = (state_12988[(12)]);
var inst_12948 = cljs.core._nth.call(null,inst_12941,inst_12943);
var state_12988__$1 = state_12988;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_12988__$1,(13),out,inst_12948);
} else {
if((state_val_12989 === (18))){
var inst_12954 = (state_12988[(7)]);
var inst_12963 = cljs.core.first.call(null,inst_12954);
var state_12988__$1 = state_12988;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_12988__$1,(20),out,inst_12963);
} else {
if((state_val_12989 === (8))){
var inst_12942 = (state_12988[(9)]);
var inst_12943 = (state_12988[(11)]);
var inst_12945 = (inst_12943 < inst_12942);
var inst_12946 = inst_12945;
var state_12988__$1 = state_12988;
if(cljs.core.truth_(inst_12946)){
var statearr_13022_13053 = state_12988__$1;
(statearr_13022_13053[(1)] = (10));

} else {
var statearr_13023_13054 = state_12988__$1;
(statearr_13023_13054[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__7383__auto__))
;
return ((function (switch__7321__auto__,c__7383__auto__){
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__7322__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__7322__auto____0 = (function (){
var statearr_13027 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_13027[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__7322__auto__);

(statearr_13027[(1)] = (1));

return statearr_13027;
});
var cljs$core$async$mapcat_STAR__$_state_machine__7322__auto____1 = (function (state_12988){
while(true){
var ret_value__7323__auto__ = (function (){try{while(true){
var result__7324__auto__ = switch__7321__auto__.call(null,state_12988);
if(cljs.core.keyword_identical_QMARK_.call(null,result__7324__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__7324__auto__;
}
break;
}
}catch (e13028){if((e13028 instanceof Object)){
var ex__7325__auto__ = e13028;
var statearr_13029_13055 = state_12988;
(statearr_13029_13055[(5)] = ex__7325__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12988);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e13028;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__7323__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__13056 = state_12988;
state_12988 = G__13056;
continue;
} else {
return ret_value__7323__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__7322__auto__ = function(state_12988){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__7322__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__7322__auto____1.call(this,state_12988);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__7322__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__7322__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__7322__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__7322__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__7322__auto__;
})()
;})(switch__7321__auto__,c__7383__auto__))
})();
var state__7385__auto__ = (function (){var statearr_13030 = f__7384__auto__.call(null);
(statearr_13030[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7383__auto__);

return statearr_13030;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__7385__auto__);
});})(c__7383__auto__))
);

return c__7383__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(){
var G__13058 = arguments.length;
switch (G__13058) {
case 2:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2 = (function (f,in$){
return cljs.core.async.mapcat_LT_.call(null,f,in$,null);
});

cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3 = (function (f,in$,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
cljs.core.async.mapcat_STAR_.call(null,f,in$,out);

return out;
});

cljs.core.async.mapcat_LT_.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_GT_ = (function cljs$core$async$mapcat_GT_(){
var G__13061 = arguments.length;
switch (G__13061) {
case 2:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2 = (function (f,out){
return cljs.core.async.mapcat_GT_.call(null,f,out,null);
});

cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3 = (function (f,out,buf_or_n){
var in$ = cljs.core.async.chan.call(null,buf_or_n);
cljs.core.async.mapcat_STAR_.call(null,f,in$,out);

return in$;
});

cljs.core.async.mapcat_GT_.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.unique = (function cljs$core$async$unique(){
var G__13064 = arguments.length;
switch (G__13064) {
case 1:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1 = (function (ch){
return cljs.core.async.unique.call(null,ch,null);
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__7383__auto___13114 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__7383__auto___13114,out){
return (function (){
var f__7384__auto__ = (function (){var switch__7321__auto__ = ((function (c__7383__auto___13114,out){
return (function (state_13088){
var state_val_13089 = (state_13088[(1)]);
if((state_val_13089 === (7))){
var inst_13083 = (state_13088[(2)]);
var state_13088__$1 = state_13088;
var statearr_13090_13115 = state_13088__$1;
(statearr_13090_13115[(2)] = inst_13083);

(statearr_13090_13115[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13089 === (1))){
var inst_13065 = null;
var state_13088__$1 = (function (){var statearr_13091 = state_13088;
(statearr_13091[(7)] = inst_13065);

return statearr_13091;
})();
var statearr_13092_13116 = state_13088__$1;
(statearr_13092_13116[(2)] = null);

(statearr_13092_13116[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13089 === (4))){
var inst_13068 = (state_13088[(8)]);
var inst_13068__$1 = (state_13088[(2)]);
var inst_13069 = (inst_13068__$1 == null);
var inst_13070 = cljs.core.not.call(null,inst_13069);
var state_13088__$1 = (function (){var statearr_13093 = state_13088;
(statearr_13093[(8)] = inst_13068__$1);

return statearr_13093;
})();
if(inst_13070){
var statearr_13094_13117 = state_13088__$1;
(statearr_13094_13117[(1)] = (5));

} else {
var statearr_13095_13118 = state_13088__$1;
(statearr_13095_13118[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13089 === (6))){
var state_13088__$1 = state_13088;
var statearr_13096_13119 = state_13088__$1;
(statearr_13096_13119[(2)] = null);

(statearr_13096_13119[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13089 === (3))){
var inst_13085 = (state_13088[(2)]);
var inst_13086 = cljs.core.async.close_BANG_.call(null,out);
var state_13088__$1 = (function (){var statearr_13097 = state_13088;
(statearr_13097[(9)] = inst_13085);

return statearr_13097;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_13088__$1,inst_13086);
} else {
if((state_val_13089 === (2))){
var state_13088__$1 = state_13088;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_13088__$1,(4),ch);
} else {
if((state_val_13089 === (11))){
var inst_13068 = (state_13088[(8)]);
var inst_13077 = (state_13088[(2)]);
var inst_13065 = inst_13068;
var state_13088__$1 = (function (){var statearr_13098 = state_13088;
(statearr_13098[(7)] = inst_13065);

(statearr_13098[(10)] = inst_13077);

return statearr_13098;
})();
var statearr_13099_13120 = state_13088__$1;
(statearr_13099_13120[(2)] = null);

(statearr_13099_13120[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13089 === (9))){
var inst_13068 = (state_13088[(8)]);
var state_13088__$1 = state_13088;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_13088__$1,(11),out,inst_13068);
} else {
if((state_val_13089 === (5))){
var inst_13068 = (state_13088[(8)]);
var inst_13065 = (state_13088[(7)]);
var inst_13072 = cljs.core._EQ_.call(null,inst_13068,inst_13065);
var state_13088__$1 = state_13088;
if(inst_13072){
var statearr_13101_13121 = state_13088__$1;
(statearr_13101_13121[(1)] = (8));

} else {
var statearr_13102_13122 = state_13088__$1;
(statearr_13102_13122[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13089 === (10))){
var inst_13080 = (state_13088[(2)]);
var state_13088__$1 = state_13088;
var statearr_13103_13123 = state_13088__$1;
(statearr_13103_13123[(2)] = inst_13080);

(statearr_13103_13123[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13089 === (8))){
var inst_13065 = (state_13088[(7)]);
var tmp13100 = inst_13065;
var inst_13065__$1 = tmp13100;
var state_13088__$1 = (function (){var statearr_13104 = state_13088;
(statearr_13104[(7)] = inst_13065__$1);

return statearr_13104;
})();
var statearr_13105_13124 = state_13088__$1;
(statearr_13105_13124[(2)] = null);

(statearr_13105_13124[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});})(c__7383__auto___13114,out))
;
return ((function (switch__7321__auto__,c__7383__auto___13114,out){
return (function() {
var cljs$core$async$state_machine__7322__auto__ = null;
var cljs$core$async$state_machine__7322__auto____0 = (function (){
var statearr_13109 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_13109[(0)] = cljs$core$async$state_machine__7322__auto__);

(statearr_13109[(1)] = (1));

return statearr_13109;
});
var cljs$core$async$state_machine__7322__auto____1 = (function (state_13088){
while(true){
var ret_value__7323__auto__ = (function (){try{while(true){
var result__7324__auto__ = switch__7321__auto__.call(null,state_13088);
if(cljs.core.keyword_identical_QMARK_.call(null,result__7324__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__7324__auto__;
}
break;
}
}catch (e13110){if((e13110 instanceof Object)){
var ex__7325__auto__ = e13110;
var statearr_13111_13125 = state_13088;
(statearr_13111_13125[(5)] = ex__7325__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_13088);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e13110;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__7323__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__13126 = state_13088;
state_13088 = G__13126;
continue;
} else {
return ret_value__7323__auto__;
}
break;
}
});
cljs$core$async$state_machine__7322__auto__ = function(state_13088){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__7322__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__7322__auto____1.call(this,state_13088);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__7322__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__7322__auto____0;
cljs$core$async$state_machine__7322__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__7322__auto____1;
return cljs$core$async$state_machine__7322__auto__;
})()
;})(switch__7321__auto__,c__7383__auto___13114,out))
})();
var state__7385__auto__ = (function (){var statearr_13112 = f__7384__auto__.call(null);
(statearr_13112[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7383__auto___13114);

return statearr_13112;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__7385__auto__);
});})(c__7383__auto___13114,out))
);


return out;
});

cljs.core.async.unique.cljs$lang$maxFixedArity = 2;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(){
var G__13128 = arguments.length;
switch (G__13128) {
case 2:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.partition.call(null,n,ch,null);
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__7383__auto___13197 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__7383__auto___13197,out){
return (function (){
var f__7384__auto__ = (function (){var switch__7321__auto__ = ((function (c__7383__auto___13197,out){
return (function (state_13166){
var state_val_13167 = (state_13166[(1)]);
if((state_val_13167 === (7))){
var inst_13162 = (state_13166[(2)]);
var state_13166__$1 = state_13166;
var statearr_13168_13198 = state_13166__$1;
(statearr_13168_13198[(2)] = inst_13162);

(statearr_13168_13198[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13167 === (1))){
var inst_13129 = (new Array(n));
var inst_13130 = inst_13129;
var inst_13131 = (0);
var state_13166__$1 = (function (){var statearr_13169 = state_13166;
(statearr_13169[(7)] = inst_13131);

(statearr_13169[(8)] = inst_13130);

return statearr_13169;
})();
var statearr_13170_13199 = state_13166__$1;
(statearr_13170_13199[(2)] = null);

(statearr_13170_13199[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13167 === (4))){
var inst_13134 = (state_13166[(9)]);
var inst_13134__$1 = (state_13166[(2)]);
var inst_13135 = (inst_13134__$1 == null);
var inst_13136 = cljs.core.not.call(null,inst_13135);
var state_13166__$1 = (function (){var statearr_13171 = state_13166;
(statearr_13171[(9)] = inst_13134__$1);

return statearr_13171;
})();
if(inst_13136){
var statearr_13172_13200 = state_13166__$1;
(statearr_13172_13200[(1)] = (5));

} else {
var statearr_13173_13201 = state_13166__$1;
(statearr_13173_13201[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13167 === (15))){
var inst_13156 = (state_13166[(2)]);
var state_13166__$1 = state_13166;
var statearr_13174_13202 = state_13166__$1;
(statearr_13174_13202[(2)] = inst_13156);

(statearr_13174_13202[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13167 === (13))){
var state_13166__$1 = state_13166;
var statearr_13175_13203 = state_13166__$1;
(statearr_13175_13203[(2)] = null);

(statearr_13175_13203[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13167 === (6))){
var inst_13131 = (state_13166[(7)]);
var inst_13152 = (inst_13131 > (0));
var state_13166__$1 = state_13166;
if(cljs.core.truth_(inst_13152)){
var statearr_13176_13204 = state_13166__$1;
(statearr_13176_13204[(1)] = (12));

} else {
var statearr_13177_13205 = state_13166__$1;
(statearr_13177_13205[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13167 === (3))){
var inst_13164 = (state_13166[(2)]);
var state_13166__$1 = state_13166;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_13166__$1,inst_13164);
} else {
if((state_val_13167 === (12))){
var inst_13130 = (state_13166[(8)]);
var inst_13154 = cljs.core.vec.call(null,inst_13130);
var state_13166__$1 = state_13166;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_13166__$1,(15),out,inst_13154);
} else {
if((state_val_13167 === (2))){
var state_13166__$1 = state_13166;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_13166__$1,(4),ch);
} else {
if((state_val_13167 === (11))){
var inst_13146 = (state_13166[(2)]);
var inst_13147 = (new Array(n));
var inst_13130 = inst_13147;
var inst_13131 = (0);
var state_13166__$1 = (function (){var statearr_13178 = state_13166;
(statearr_13178[(7)] = inst_13131);

(statearr_13178[(10)] = inst_13146);

(statearr_13178[(8)] = inst_13130);

return statearr_13178;
})();
var statearr_13179_13206 = state_13166__$1;
(statearr_13179_13206[(2)] = null);

(statearr_13179_13206[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13167 === (9))){
var inst_13130 = (state_13166[(8)]);
var inst_13144 = cljs.core.vec.call(null,inst_13130);
var state_13166__$1 = state_13166;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_13166__$1,(11),out,inst_13144);
} else {
if((state_val_13167 === (5))){
var inst_13131 = (state_13166[(7)]);
var inst_13139 = (state_13166[(11)]);
var inst_13130 = (state_13166[(8)]);
var inst_13134 = (state_13166[(9)]);
var inst_13138 = (inst_13130[inst_13131] = inst_13134);
var inst_13139__$1 = (inst_13131 + (1));
var inst_13140 = (inst_13139__$1 < n);
var state_13166__$1 = (function (){var statearr_13180 = state_13166;
(statearr_13180[(11)] = inst_13139__$1);

(statearr_13180[(12)] = inst_13138);

return statearr_13180;
})();
if(cljs.core.truth_(inst_13140)){
var statearr_13181_13207 = state_13166__$1;
(statearr_13181_13207[(1)] = (8));

} else {
var statearr_13182_13208 = state_13166__$1;
(statearr_13182_13208[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13167 === (14))){
var inst_13159 = (state_13166[(2)]);
var inst_13160 = cljs.core.async.close_BANG_.call(null,out);
var state_13166__$1 = (function (){var statearr_13184 = state_13166;
(statearr_13184[(13)] = inst_13159);

return statearr_13184;
})();
var statearr_13185_13209 = state_13166__$1;
(statearr_13185_13209[(2)] = inst_13160);

(statearr_13185_13209[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13167 === (10))){
var inst_13150 = (state_13166[(2)]);
var state_13166__$1 = state_13166;
var statearr_13186_13210 = state_13166__$1;
(statearr_13186_13210[(2)] = inst_13150);

(statearr_13186_13210[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13167 === (8))){
var inst_13139 = (state_13166[(11)]);
var inst_13130 = (state_13166[(8)]);
var tmp13183 = inst_13130;
var inst_13130__$1 = tmp13183;
var inst_13131 = inst_13139;
var state_13166__$1 = (function (){var statearr_13187 = state_13166;
(statearr_13187[(7)] = inst_13131);

(statearr_13187[(8)] = inst_13130__$1);

return statearr_13187;
})();
var statearr_13188_13211 = state_13166__$1;
(statearr_13188_13211[(2)] = null);

(statearr_13188_13211[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__7383__auto___13197,out))
;
return ((function (switch__7321__auto__,c__7383__auto___13197,out){
return (function() {
var cljs$core$async$state_machine__7322__auto__ = null;
var cljs$core$async$state_machine__7322__auto____0 = (function (){
var statearr_13192 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_13192[(0)] = cljs$core$async$state_machine__7322__auto__);

(statearr_13192[(1)] = (1));

return statearr_13192;
});
var cljs$core$async$state_machine__7322__auto____1 = (function (state_13166){
while(true){
var ret_value__7323__auto__ = (function (){try{while(true){
var result__7324__auto__ = switch__7321__auto__.call(null,state_13166);
if(cljs.core.keyword_identical_QMARK_.call(null,result__7324__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__7324__auto__;
}
break;
}
}catch (e13193){if((e13193 instanceof Object)){
var ex__7325__auto__ = e13193;
var statearr_13194_13212 = state_13166;
(statearr_13194_13212[(5)] = ex__7325__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_13166);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e13193;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__7323__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__13213 = state_13166;
state_13166 = G__13213;
continue;
} else {
return ret_value__7323__auto__;
}
break;
}
});
cljs$core$async$state_machine__7322__auto__ = function(state_13166){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__7322__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__7322__auto____1.call(this,state_13166);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__7322__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__7322__auto____0;
cljs$core$async$state_machine__7322__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__7322__auto____1;
return cljs$core$async$state_machine__7322__auto__;
})()
;})(switch__7321__auto__,c__7383__auto___13197,out))
})();
var state__7385__auto__ = (function (){var statearr_13195 = f__7384__auto__.call(null);
(statearr_13195[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7383__auto___13197);

return statearr_13195;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__7385__auto__);
});})(c__7383__auto___13197,out))
);


return out;
});

cljs.core.async.partition.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(){
var G__13215 = arguments.length;
switch (G__13215) {
case 2:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2 = (function (f,ch){
return cljs.core.async.partition_by.call(null,f,ch,null);
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__7383__auto___13288 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__7383__auto___13288,out){
return (function (){
var f__7384__auto__ = (function (){var switch__7321__auto__ = ((function (c__7383__auto___13288,out){
return (function (state_13257){
var state_val_13258 = (state_13257[(1)]);
if((state_val_13258 === (7))){
var inst_13253 = (state_13257[(2)]);
var state_13257__$1 = state_13257;
var statearr_13259_13289 = state_13257__$1;
(statearr_13259_13289[(2)] = inst_13253);

(statearr_13259_13289[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13258 === (1))){
var inst_13216 = [];
var inst_13217 = inst_13216;
var inst_13218 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_13257__$1 = (function (){var statearr_13260 = state_13257;
(statearr_13260[(7)] = inst_13218);

(statearr_13260[(8)] = inst_13217);

return statearr_13260;
})();
var statearr_13261_13290 = state_13257__$1;
(statearr_13261_13290[(2)] = null);

(statearr_13261_13290[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13258 === (4))){
var inst_13221 = (state_13257[(9)]);
var inst_13221__$1 = (state_13257[(2)]);
var inst_13222 = (inst_13221__$1 == null);
var inst_13223 = cljs.core.not.call(null,inst_13222);
var state_13257__$1 = (function (){var statearr_13262 = state_13257;
(statearr_13262[(9)] = inst_13221__$1);

return statearr_13262;
})();
if(inst_13223){
var statearr_13263_13291 = state_13257__$1;
(statearr_13263_13291[(1)] = (5));

} else {
var statearr_13264_13292 = state_13257__$1;
(statearr_13264_13292[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13258 === (15))){
var inst_13247 = (state_13257[(2)]);
var state_13257__$1 = state_13257;
var statearr_13265_13293 = state_13257__$1;
(statearr_13265_13293[(2)] = inst_13247);

(statearr_13265_13293[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13258 === (13))){
var state_13257__$1 = state_13257;
var statearr_13266_13294 = state_13257__$1;
(statearr_13266_13294[(2)] = null);

(statearr_13266_13294[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13258 === (6))){
var inst_13217 = (state_13257[(8)]);
var inst_13242 = inst_13217.length;
var inst_13243 = (inst_13242 > (0));
var state_13257__$1 = state_13257;
if(cljs.core.truth_(inst_13243)){
var statearr_13267_13295 = state_13257__$1;
(statearr_13267_13295[(1)] = (12));

} else {
var statearr_13268_13296 = state_13257__$1;
(statearr_13268_13296[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13258 === (3))){
var inst_13255 = (state_13257[(2)]);
var state_13257__$1 = state_13257;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_13257__$1,inst_13255);
} else {
if((state_val_13258 === (12))){
var inst_13217 = (state_13257[(8)]);
var inst_13245 = cljs.core.vec.call(null,inst_13217);
var state_13257__$1 = state_13257;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_13257__$1,(15),out,inst_13245);
} else {
if((state_val_13258 === (2))){
var state_13257__$1 = state_13257;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_13257__$1,(4),ch);
} else {
if((state_val_13258 === (11))){
var inst_13225 = (state_13257[(10)]);
var inst_13221 = (state_13257[(9)]);
var inst_13235 = (state_13257[(2)]);
var inst_13236 = [];
var inst_13237 = inst_13236.push(inst_13221);
var inst_13217 = inst_13236;
var inst_13218 = inst_13225;
var state_13257__$1 = (function (){var statearr_13269 = state_13257;
(statearr_13269[(11)] = inst_13237);

(statearr_13269[(7)] = inst_13218);

(statearr_13269[(8)] = inst_13217);

(statearr_13269[(12)] = inst_13235);

return statearr_13269;
})();
var statearr_13270_13297 = state_13257__$1;
(statearr_13270_13297[(2)] = null);

(statearr_13270_13297[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13258 === (9))){
var inst_13217 = (state_13257[(8)]);
var inst_13233 = cljs.core.vec.call(null,inst_13217);
var state_13257__$1 = state_13257;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_13257__$1,(11),out,inst_13233);
} else {
if((state_val_13258 === (5))){
var inst_13225 = (state_13257[(10)]);
var inst_13221 = (state_13257[(9)]);
var inst_13218 = (state_13257[(7)]);
var inst_13225__$1 = f.call(null,inst_13221);
var inst_13226 = cljs.core._EQ_.call(null,inst_13225__$1,inst_13218);
var inst_13227 = cljs.core.keyword_identical_QMARK_.call(null,inst_13218,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_13228 = (inst_13226) || (inst_13227);
var state_13257__$1 = (function (){var statearr_13271 = state_13257;
(statearr_13271[(10)] = inst_13225__$1);

return statearr_13271;
})();
if(cljs.core.truth_(inst_13228)){
var statearr_13272_13298 = state_13257__$1;
(statearr_13272_13298[(1)] = (8));

} else {
var statearr_13273_13299 = state_13257__$1;
(statearr_13273_13299[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13258 === (14))){
var inst_13250 = (state_13257[(2)]);
var inst_13251 = cljs.core.async.close_BANG_.call(null,out);
var state_13257__$1 = (function (){var statearr_13275 = state_13257;
(statearr_13275[(13)] = inst_13250);

return statearr_13275;
})();
var statearr_13276_13300 = state_13257__$1;
(statearr_13276_13300[(2)] = inst_13251);

(statearr_13276_13300[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13258 === (10))){
var inst_13240 = (state_13257[(2)]);
var state_13257__$1 = state_13257;
var statearr_13277_13301 = state_13257__$1;
(statearr_13277_13301[(2)] = inst_13240);

(statearr_13277_13301[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13258 === (8))){
var inst_13225 = (state_13257[(10)]);
var inst_13221 = (state_13257[(9)]);
var inst_13217 = (state_13257[(8)]);
var inst_13230 = inst_13217.push(inst_13221);
var tmp13274 = inst_13217;
var inst_13217__$1 = tmp13274;
var inst_13218 = inst_13225;
var state_13257__$1 = (function (){var statearr_13278 = state_13257;
(statearr_13278[(7)] = inst_13218);

(statearr_13278[(8)] = inst_13217__$1);

(statearr_13278[(14)] = inst_13230);

return statearr_13278;
})();
var statearr_13279_13302 = state_13257__$1;
(statearr_13279_13302[(2)] = null);

(statearr_13279_13302[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__7383__auto___13288,out))
;
return ((function (switch__7321__auto__,c__7383__auto___13288,out){
return (function() {
var cljs$core$async$state_machine__7322__auto__ = null;
var cljs$core$async$state_machine__7322__auto____0 = (function (){
var statearr_13283 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_13283[(0)] = cljs$core$async$state_machine__7322__auto__);

(statearr_13283[(1)] = (1));

return statearr_13283;
});
var cljs$core$async$state_machine__7322__auto____1 = (function (state_13257){
while(true){
var ret_value__7323__auto__ = (function (){try{while(true){
var result__7324__auto__ = switch__7321__auto__.call(null,state_13257);
if(cljs.core.keyword_identical_QMARK_.call(null,result__7324__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__7324__auto__;
}
break;
}
}catch (e13284){if((e13284 instanceof Object)){
var ex__7325__auto__ = e13284;
var statearr_13285_13303 = state_13257;
(statearr_13285_13303[(5)] = ex__7325__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_13257);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e13284;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__7323__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__13304 = state_13257;
state_13257 = G__13304;
continue;
} else {
return ret_value__7323__auto__;
}
break;
}
});
cljs$core$async$state_machine__7322__auto__ = function(state_13257){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__7322__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__7322__auto____1.call(this,state_13257);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__7322__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__7322__auto____0;
cljs$core$async$state_machine__7322__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__7322__auto____1;
return cljs$core$async$state_machine__7322__auto__;
})()
;})(switch__7321__auto__,c__7383__auto___13288,out))
})();
var state__7385__auto__ = (function (){var statearr_13286 = f__7384__auto__.call(null);
(statearr_13286[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7383__auto___13288);

return statearr_13286;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__7385__auto__);
});})(c__7383__auto___13288,out))
);


return out;
});

cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3;

//# sourceMappingURL=async.js.map