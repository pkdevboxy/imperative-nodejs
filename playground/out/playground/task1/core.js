// Compiled by ClojureScript 0.0-3308 {:target :nodejs}
goog.provide('playground.task1.core');
goog.require('cljs.core');
goog.require('cljs.nodejs');
goog.require('playground.task1.cljs_callbacks');
goog.require('playground.task1.cljs_promise');
goog.require('playground.task1.cljs_async');
cljs.nodejs.enable_util_print_BANG_.call(null);
playground.task1.core.cmd_argv = cljs.core.vec.call(null,cljs.core.drop.call(null,(2),cljs.nodejs.process.argv));
playground.task1.core._main = (function playground$task1$core$_main(){
var seq__9629 = cljs.core.seq.call(null,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["cljs callbacks",playground.task1.cljs_callbacks.sum_from_files], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["cljs promises",playground.task1.cljs_promise.sum_from_files], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["cljs async",playground.task1.cljs_async.sum_from_files], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["js callbacks",require("../coffee/js_callback")], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["js promises",require("../coffee/js_promise")], null)], null));
var chunk__9630 = null;
var count__9631 = (0);
var i__9632 = (0);
while(true){
if((i__9632 < count__9631)){
var vec__9633 = cljs.core._nth.call(null,chunk__9630,i__9632);
var impl = cljs.core.nth.call(null,vec__9633,(0),null);
var f = cljs.core.nth.call(null,vec__9633,(1),null);
f.call(null,cljs.core.clj__GT_js.call(null,playground.task1.core.cmd_argv),((function (seq__9629,chunk__9630,count__9631,i__9632,vec__9633,impl,f){
return (function (err,data){
cljs.core.println.call(null,impl);

if(cljs.core.truth_(err)){
return cljs.core.println.call(null,"error: ",err);
} else {
return cljs.core.println.call(null,"done:  ",data);
}
});})(seq__9629,chunk__9630,count__9631,i__9632,vec__9633,impl,f))
);

var G__9635 = seq__9629;
var G__9636 = chunk__9630;
var G__9637 = count__9631;
var G__9638 = (i__9632 + (1));
seq__9629 = G__9635;
chunk__9630 = G__9636;
count__9631 = G__9637;
i__9632 = G__9638;
continue;
} else {
var temp__4422__auto__ = cljs.core.seq.call(null,seq__9629);
if(temp__4422__auto__){
var seq__9629__$1 = temp__4422__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__9629__$1)){
var c__5116__auto__ = cljs.core.chunk_first.call(null,seq__9629__$1);
var G__9639 = cljs.core.chunk_rest.call(null,seq__9629__$1);
var G__9640 = c__5116__auto__;
var G__9641 = cljs.core.count.call(null,c__5116__auto__);
var G__9642 = (0);
seq__9629 = G__9639;
chunk__9630 = G__9640;
count__9631 = G__9641;
i__9632 = G__9642;
continue;
} else {
var vec__9634 = cljs.core.first.call(null,seq__9629__$1);
var impl = cljs.core.nth.call(null,vec__9634,(0),null);
var f = cljs.core.nth.call(null,vec__9634,(1),null);
f.call(null,cljs.core.clj__GT_js.call(null,playground.task1.core.cmd_argv),((function (seq__9629,chunk__9630,count__9631,i__9632,vec__9634,impl,f,seq__9629__$1,temp__4422__auto__){
return (function (err,data){
cljs.core.println.call(null,impl);

if(cljs.core.truth_(err)){
return cljs.core.println.call(null,"error: ",err);
} else {
return cljs.core.println.call(null,"done:  ",data);
}
});})(seq__9629,chunk__9630,count__9631,i__9632,vec__9634,impl,f,seq__9629__$1,temp__4422__auto__))
);

var G__9643 = cljs.core.next.call(null,seq__9629__$1);
var G__9644 = null;
var G__9645 = (0);
var G__9646 = (0);
seq__9629 = G__9643;
chunk__9630 = G__9644;
count__9631 = G__9645;
i__9632 = G__9646;
continue;
}
} else {
return null;
}
}
break;
}
});
cljs.core._STAR_main_cli_fn_STAR_ = playground.task1.core._main;

//# sourceMappingURL=core.js.map