// Compiled by ClojureScript 0.0-3308 {:target :nodejs}
goog.provide('playground.task2.cljs_promise_test');
goog.require('cljs.core');
goog.require('cljs.test');
goog.require('promesa.core');
goog.require('playground.task2.test_utils');
goog.require('playground.task2.cljs_promise');
playground.task2.cljs_promise_test.cljs_test_each_fixtures = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [playground.task2.test_utils.mock_readFile_fixture], null);
playground.task2.cljs_promise_test.traverse_ok = (function playground$task2$cljs_promise_test$traverse_ok(){
return cljs.test.test_var.call(null,playground$task2$cljs_promise_test$traverse_ok.cljs$lang$var);
});
playground.task2.cljs_promise_test.traverse_ok.cljs$lang$test = (function (){
if(typeof playground.task2.cljs_promise_test.t10089 !== 'undefined'){
} else {

/**
* @constructor
*/
playground.task2.cljs_promise_test.t10089 = (function (meta10090){
this.meta10090 = meta10090;
this.cljs$lang$protocol_mask$partition0$ = 393217;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
playground.task2.cljs_promise_test.t10089.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_10091,meta10090__$1){
var self__ = this;
var _10091__$1 = this;
return (new playground.task2.cljs_promise_test.t10089(meta10090__$1));
});

playground.task2.cljs_promise_test.t10089.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_10091){
var self__ = this;
var _10091__$1 = this;
return self__.meta10090;
});

playground.task2.cljs_promise_test.t10089.prototype.cljs$test$IAsyncTest$ = true;

playground.task2.cljs_promise_test.t10089.prototype.call = (function (self__,done){
var self__ = this;
var self____$1 = this;
var ___9958__auto__ = self____$1;
return promesa.core.then.call(null,playground.task2.cljs_promise.traverse.call(null,(1)),((function (___9958__auto__,self____$1){
return (function (path){
try{var values__9889__auto___10095 = cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(2),(3),(4)], null)),path);
var result__9890__auto___10096 = cljs.core.apply.call(null,cljs.core._EQ_,values__9889__auto___10095);
if(cljs.core.truth_(result__9890__auto___10096)){
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"pass","pass",1574159993),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),new cljs.core.Symbol(null,"path","path",1452340359,null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(2),(3),(4)], null)),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core.cons.call(null,cljs.core._EQ_,values__9889__auto___10095),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
} else {
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"fail","fail",1706214930),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),new cljs.core.Symbol(null,"path","path",1452340359,null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(2),(3),(4)], null)),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.cons.call(null,new cljs.core.Symbol(null,"=","=",-1501502141,null),values__9889__auto___10095)),new cljs.core.Symbol(null,"not","not",1044554643,null)),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}

}catch (e10093){var t__9927__auto___10097 = e10093;
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),new cljs.core.Symbol(null,"path","path",1452340359,null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(2),(3),(4)], null)),new cljs.core.Keyword(null,"actual","actual",107306363),t__9927__auto___10097,new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}
return done.call(null);
});})(___9958__auto__,self____$1))
);
});

playground.task2.cljs_promise_test.t10089.prototype.apply = (function (self__,args10092){
var self__ = this;
var self____$1 = this;
return self____$1.call.apply(self____$1,[self____$1].concat(cljs.core.aclone.call(null,args10092)));
});

playground.task2.cljs_promise_test.t10089.prototype.cljs$core$IFn$_invoke$arity$1 = (function (done){
var self__ = this;
var ___9958__auto__ = this;
return promesa.core.then.call(null,playground.task2.cljs_promise.traverse.call(null,(1)),((function (___9958__auto__){
return (function (path){
try{var values__9889__auto___10098 = cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(2),(3),(4)], null)),path);
var result__9890__auto___10099 = cljs.core.apply.call(null,cljs.core._EQ_,values__9889__auto___10098);
if(cljs.core.truth_(result__9890__auto___10099)){
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"pass","pass",1574159993),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),new cljs.core.Symbol(null,"path","path",1452340359,null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(2),(3),(4)], null)),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core.cons.call(null,cljs.core._EQ_,values__9889__auto___10098),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
} else {
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"fail","fail",1706214930),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),new cljs.core.Symbol(null,"path","path",1452340359,null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(2),(3),(4)], null)),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.cons.call(null,new cljs.core.Symbol(null,"=","=",-1501502141,null),values__9889__auto___10098)),new cljs.core.Symbol(null,"not","not",1044554643,null)),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}

}catch (e10094){var t__9927__auto___10100 = e10094;
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),new cljs.core.Symbol(null,"path","path",1452340359,null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(2),(3),(4)], null)),new cljs.core.Keyword(null,"actual","actual",107306363),t__9927__auto___10100,new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}
return done.call(null);
});})(___9958__auto__))
);
});

playground.task2.cljs_promise_test.t10089.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"meta10090","meta10090",-1308752483,null)], null);
});

playground.task2.cljs_promise_test.t10089.cljs$lang$type = true;

playground.task2.cljs_promise_test.t10089.cljs$lang$ctorStr = "playground.task2.cljs-promise-test/t10089";

playground.task2.cljs_promise_test.t10089.cljs$lang$ctorPrWriter = (function (this__4910__auto__,writer__4911__auto__,opt__4912__auto__){
return cljs.core._write.call(null,writer__4911__auto__,"playground.task2.cljs-promise-test/t10089");
});

playground.task2.cljs_promise_test.__GT_t10089 = (function playground$task2$cljs_promise_test$__GT_t10089(meta10090){
return (new playground.task2.cljs_promise_test.t10089(meta10090));
});

}

return (new playground.task2.cljs_promise_test.t10089(null));
});

playground.task2.cljs_promise_test.traverse_ok.cljs$lang$var = new cljs.core.Var(function(){return playground.task2.cljs_promise_test.traverse_ok;},new cljs.core.Symbol("playground.task2.cljs-promise-test","traverse-ok","playground.task2.cljs-promise-test/traverse-ok",-1751760304,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"playground.task2.cljs-promise-test","playground.task2.cljs-promise-test",-118554509,null),new cljs.core.Symbol(null,"traverse-ok","traverse-ok",-12732613,null),"test/playground/task2/cljs_promise_test.cljs",21,1,10,10,cljs.core.List.EMPTY,null,(cljs.core.truth_(playground.task2.cljs_promise_test.traverse_ok)?playground.task2.cljs_promise_test.traverse_ok.cljs$lang$test:null)]));
playground.task2.cljs_promise_test.traverse_no_file = (function playground$task2$cljs_promise_test$traverse_no_file(){
return cljs.test.test_var.call(null,playground$task2$cljs_promise_test$traverse_no_file.cljs$lang$var);
});
playground.task2.cljs_promise_test.traverse_no_file.cljs$lang$test = (function (){
if(typeof playground.task2.cljs_promise_test.t10101 !== 'undefined'){
} else {

/**
* @constructor
*/
playground.task2.cljs_promise_test.t10101 = (function (meta10102){
this.meta10102 = meta10102;
this.cljs$lang$protocol_mask$partition0$ = 393217;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
playground.task2.cljs_promise_test.t10101.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_10103,meta10102__$1){
var self__ = this;
var _10103__$1 = this;
return (new playground.task2.cljs_promise_test.t10101(meta10102__$1));
});

playground.task2.cljs_promise_test.t10101.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_10103){
var self__ = this;
var _10103__$1 = this;
return self__.meta10102;
});

playground.task2.cljs_promise_test.t10101.prototype.cljs$test$IAsyncTest$ = true;

playground.task2.cljs_promise_test.t10101.prototype.call = (function (self__,done){
var self__ = this;
var self____$1 = this;
var ___9958__auto__ = self____$1;
return promesa.core.catch$.call(null,playground.task2.cljs_promise.traverse.call(null,(92)),((function (___9958__auto__,self____$1){
return (function (err){
try{var value__9892__auto___10107 = err;
if(cljs.core.truth_(value__9892__auto___10107)){
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"pass","pass",1574159993),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Symbol(null,"err","err",-448925678,null),new cljs.core.Keyword(null,"actual","actual",107306363),value__9892__auto___10107,new cljs.core.Keyword(null,"message","message",-406056002),null], null));
} else {
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"fail","fail",1706214930),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Symbol(null,"err","err",-448925678,null),new cljs.core.Keyword(null,"actual","actual",107306363),value__9892__auto___10107,new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}

}catch (e10105){var t__9927__auto___10108 = e10105;
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Symbol(null,"err","err",-448925678,null),new cljs.core.Keyword(null,"actual","actual",107306363),t__9927__auto___10108,new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}
return done.call(null);
});})(___9958__auto__,self____$1))
);
});

playground.task2.cljs_promise_test.t10101.prototype.apply = (function (self__,args10104){
var self__ = this;
var self____$1 = this;
return self____$1.call.apply(self____$1,[self____$1].concat(cljs.core.aclone.call(null,args10104)));
});

playground.task2.cljs_promise_test.t10101.prototype.cljs$core$IFn$_invoke$arity$1 = (function (done){
var self__ = this;
var ___9958__auto__ = this;
return promesa.core.catch$.call(null,playground.task2.cljs_promise.traverse.call(null,(92)),((function (___9958__auto__){
return (function (err){
try{var value__9892__auto___10109 = err;
if(cljs.core.truth_(value__9892__auto___10109)){
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"pass","pass",1574159993),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Symbol(null,"err","err",-448925678,null),new cljs.core.Keyword(null,"actual","actual",107306363),value__9892__auto___10109,new cljs.core.Keyword(null,"message","message",-406056002),null], null));
} else {
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"fail","fail",1706214930),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Symbol(null,"err","err",-448925678,null),new cljs.core.Keyword(null,"actual","actual",107306363),value__9892__auto___10109,new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}

}catch (e10106){var t__9927__auto___10110 = e10106;
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Symbol(null,"err","err",-448925678,null),new cljs.core.Keyword(null,"actual","actual",107306363),t__9927__auto___10110,new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}
return done.call(null);
});})(___9958__auto__))
);
});

playground.task2.cljs_promise_test.t10101.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"meta10102","meta10102",-347853875,null)], null);
});

playground.task2.cljs_promise_test.t10101.cljs$lang$type = true;

playground.task2.cljs_promise_test.t10101.cljs$lang$ctorStr = "playground.task2.cljs-promise-test/t10101";

playground.task2.cljs_promise_test.t10101.cljs$lang$ctorPrWriter = (function (this__4910__auto__,writer__4911__auto__,opt__4912__auto__){
return cljs.core._write.call(null,writer__4911__auto__,"playground.task2.cljs-promise-test/t10101");
});

playground.task2.cljs_promise_test.__GT_t10101 = (function playground$task2$cljs_promise_test$__GT_t10101(meta10102){
return (new playground.task2.cljs_promise_test.t10101(meta10102));
});

}

return (new playground.task2.cljs_promise_test.t10101(null));
});

playground.task2.cljs_promise_test.traverse_no_file.cljs$lang$var = new cljs.core.Var(function(){return playground.task2.cljs_promise_test.traverse_no_file;},new cljs.core.Symbol("playground.task2.cljs-promise-test","traverse-no-file","playground.task2.cljs-promise-test/traverse-no-file",-972813758,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"playground.task2.cljs-promise-test","playground.task2.cljs-promise-test",-118554509,null),new cljs.core.Symbol(null,"traverse-no-file","traverse-no-file",1066418039,null),"test/playground/task2/cljs_promise_test.cljs",26,1,18,18,cljs.core.List.EMPTY,null,(cljs.core.truth_(playground.task2.cljs_promise_test.traverse_no_file)?playground.task2.cljs_promise_test.traverse_no_file.cljs$lang$test:null)]));

//# sourceMappingURL=cljs_promise_test.js.map