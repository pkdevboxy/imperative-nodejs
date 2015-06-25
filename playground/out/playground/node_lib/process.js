// Compiled by ClojureScript 0.0-3308 {:target :nodejs}
goog.provide('playground.node_lib.process');
goog.require('cljs.core');
goog.require('cljs.nodejs');
playground.node_lib.process.argv = (function playground$node_lib$process$argv(){
var vec__13733 = cljs.nodejs.process.argv;
var _node = cljs.core.nth.call(null,vec__13733,(0),null);
var _script = cljs.core.nth.call(null,vec__13733,(1),null);
var argv__$1 = cljs.core.nthnext.call(null,vec__13733,(2));
return cljs.core.vec.call(null,argv__$1);
});

//# sourceMappingURL=process.js.map