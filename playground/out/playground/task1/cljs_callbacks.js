// Compiled by ClojureScript 0.0-3308 {:target :nodejs}
goog.provide('playground.task1.cljs_callbacks');
goog.require('cljs.core');
goog.require('cljs.nodejs');
playground.task1.cljs_callbacks.fs = require("fs");
playground.task1.cljs_callbacks.map_cb = (function playground$task1$cljs_callbacks$map_cb(f,coll,callback){
if(cljs.core.empty_QMARK_.call(null,coll)){
return callback.call(null,null,cljs.core.PersistentVector.EMPTY);
} else {
var results = cljs.core.atom.call(null,cljs.core.PersistentVector.EMPTY);
var cb = ((function (results){
return (function (err,data){
if(cljs.core.truth_(err)){
return callback.call(null,err);
} else {
cljs.core.swap_BANG_.call(null,results,cljs.core.conj,data);

if(cljs.core._EQ_.call(null,cljs.core.count.call(null,cljs.core.deref.call(null,results)),cljs.core.count.call(null,coll))){
return callback.call(null,null,cljs.core.deref.call(null,results));
} else {
return null;
}
}
});})(results))
;
var seq__13714 = cljs.core.seq.call(null,coll);
var chunk__13715 = null;
var count__13716 = (0);
var i__13717 = (0);
while(true){
if((i__13717 < count__13716)){
var x = cljs.core._nth.call(null,chunk__13715,i__13717);
f.call(null,x,cb);

var G__13718 = seq__13714;
var G__13719 = chunk__13715;
var G__13720 = count__13716;
var G__13721 = (i__13717 + (1));
seq__13714 = G__13718;
chunk__13715 = G__13719;
count__13716 = G__13720;
i__13717 = G__13721;
continue;
} else {
var temp__4422__auto__ = cljs.core.seq.call(null,seq__13714);
if(temp__4422__auto__){
var seq__13714__$1 = temp__4422__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__13714__$1)){
var c__5116__auto__ = cljs.core.chunk_first.call(null,seq__13714__$1);
var G__13722 = cljs.core.chunk_rest.call(null,seq__13714__$1);
var G__13723 = c__5116__auto__;
var G__13724 = cljs.core.count.call(null,c__5116__auto__);
var G__13725 = (0);
seq__13714 = G__13722;
chunk__13715 = G__13723;
count__13716 = G__13724;
i__13717 = G__13725;
continue;
} else {
var x = cljs.core.first.call(null,seq__13714__$1);
f.call(null,x,cb);

var G__13726 = cljs.core.next.call(null,seq__13714__$1);
var G__13727 = null;
var G__13728 = (0);
var G__13729 = (0);
seq__13714 = G__13726;
chunk__13715 = G__13727;
count__13716 = G__13728;
i__13717 = G__13729;
continue;
}
} else {
return null;
}
}
break;
}
}
});
playground.task1.cljs_callbacks.sum_from_files = (function playground$task1$cljs_callbacks$sum_from_files(files,callback){
return playground.task1.cljs_callbacks.map_cb.call(null,playground.task1.cljs_callbacks.fs.readFile,files,(function (err,data){
if(cljs.core.truth_(err)){
return callback.call(null,err);
} else {
return callback.call(null,null,cljs.core.reduce.call(null,cljs.core._PLUS_,cljs.core.map.call(null,cljs.core.int$,data)));
}
}));
});

//# sourceMappingURL=cljs_callbacks.js.map