// Compiled by ClojureScript 0.0-3308 {:target :nodejs}
goog.provide('playground.task1.cljs_promise');
goog.require('cljs.core');
goog.require('promesa.core');
playground.task1.cljs_promise.fs = require("fs");
playground.task1.cljs_promise.read_file = (function playground$task1$cljs_promise$read_file(file){
return promesa.core.promise.call(null,(function (resolve,reject){
return playground.task1.cljs_promise.fs.readFile(file,(function (err,data){
if(cljs.core.truth_(err)){
return reject.call(null,err);
} else {
return resolve.call(null,data);
}
}));
}));
});
playground.task1.cljs_promise.promise__GT_callback = (function playground$task1$cljs_promise$promise__GT_callback(promise,callback){
return promesa.core.catch$.call(null,promesa.core.then.call(null,promise,(function (p1__9540_SHARP_){
return callback.call(null,null,p1__9540_SHARP_);
})),(function (p1__9541_SHARP_){
return callback.call(null,p1__9541_SHARP_);
}));
});
playground.task1.cljs_promise.sum_from_files = (function playground$task1$cljs_promise$sum_from_files(files,callback){
return playground.task1.cljs_promise.promise__GT_callback.call(null,promesa.core.then.call(null,promesa.core.all.call(null,cljs.core.map.call(null,playground.task1.cljs_promise.read_file,files)),(function (p1__9542_SHARP_){
return cljs.core.reduce.call(null,cljs.core._PLUS_,cljs.core.map.call(null,cljs.core.int$,p1__9542_SHARP_));
})),callback);
});

//# sourceMappingURL=cljs_promise.js.map