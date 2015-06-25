// Compiled by ClojureScript 0.0-3308 {:target :nodejs}
goog.provide('playground.task2.js_promise_test');
goog.require('cljs.core');
goog.require('cljs.test');
goog.require('playground.task2.test_utils');
playground.task2.js_promise_test.traverse = require("./coffee/js_promise");
playground.task2.js_promise_test.cljs_test_each_fixtures = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [playground.task2.test_utils.mock_readFile_fixture], null);
playground.task2.js_promise_test.traverse_ok = (function playground$task2$js_promise_test$traverse_ok(){
return cljs.test.test_var.call(null,playground$task2$js_promise_test$traverse_ok.cljs$lang$var);
});
playground.task2.js_promise_test.traverse_ok.cljs$lang$test = (function (){
if(typeof playground.task2.js_promise_test.t10525 !== 'undefined'){
} else {

/**
* @constructor
*/
playground.task2.js_promise_test.t10525 = (function (meta10526){
this.meta10526 = meta10526;
this.cljs$lang$protocol_mask$partition0$ = 393217;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
playground.task2.js_promise_test.t10525.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_10527,meta10526__$1){
var self__ = this;
var _10527__$1 = this;
return (new playground.task2.js_promise_test.t10525(meta10526__$1));
});

playground.task2.js_promise_test.t10525.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_10527){
var self__ = this;
var _10527__$1 = this;
return self__.meta10526;
});

playground.task2.js_promise_test.t10525.prototype.cljs$test$IAsyncTest$ = true;

playground.task2.js_promise_test.t10525.prototype.call = (function (self__,done){
var self__ = this;
var self____$1 = this;
var ___9958__auto__ = self____$1;
return playground.task2.js_promise_test.traverse.call(null,(1)).then(((function (___9958__auto__,self____$1){
return (function (path){
try{var values__9889__auto___10531 = cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.js__GT_clj.call(null,path));
var result__9890__auto___10532 = cljs.core.apply.call(null,cljs.core._EQ_,values__9889__auto___10531);
if(cljs.core.truth_(result__9890__auto___10532)){
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"pass","pass",1574159993),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"js->clj","js->clj",1544462432,null),new cljs.core.Symbol(null,"path","path",1452340359,null))),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core.cons.call(null,cljs.core._EQ_,values__9889__auto___10531),new cljs.core.Keyword(null,"message","message",-406056002),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(2),(3),(4)], null)], null));
} else {
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"fail","fail",1706214930),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"js->clj","js->clj",1544462432,null),new cljs.core.Symbol(null,"path","path",1452340359,null))),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.cons.call(null,new cljs.core.Symbol(null,"=","=",-1501502141,null),values__9889__auto___10531)),new cljs.core.Symbol(null,"not","not",1044554643,null)),new cljs.core.Keyword(null,"message","message",-406056002),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(2),(3),(4)], null)], null));
}

}catch (e10529){var t__9927__auto___10533 = e10529;
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"js->clj","js->clj",1544462432,null),new cljs.core.Symbol(null,"path","path",1452340359,null))),new cljs.core.Keyword(null,"actual","actual",107306363),t__9927__auto___10533,new cljs.core.Keyword(null,"message","message",-406056002),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(2),(3),(4)], null)], null));
}
return done.call(null);
});})(___9958__auto__,self____$1))
);
});

playground.task2.js_promise_test.t10525.prototype.apply = (function (self__,args10528){
var self__ = this;
var self____$1 = this;
return self____$1.call.apply(self____$1,[self____$1].concat(cljs.core.aclone.call(null,args10528)));
});

playground.task2.js_promise_test.t10525.prototype.cljs$core$IFn$_invoke$arity$1 = (function (done){
var self__ = this;
var ___9958__auto__ = this;
return playground.task2.js_promise_test.traverse.call(null,(1)).then(((function (___9958__auto__){
return (function (path){
try{var values__9889__auto___10534 = cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.js__GT_clj.call(null,path));
var result__9890__auto___10535 = cljs.core.apply.call(null,cljs.core._EQ_,values__9889__auto___10534);
if(cljs.core.truth_(result__9890__auto___10535)){
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"pass","pass",1574159993),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"js->clj","js->clj",1544462432,null),new cljs.core.Symbol(null,"path","path",1452340359,null))),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core.cons.call(null,cljs.core._EQ_,values__9889__auto___10534),new cljs.core.Keyword(null,"message","message",-406056002),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(2),(3),(4)], null)], null));
} else {
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"fail","fail",1706214930),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"js->clj","js->clj",1544462432,null),new cljs.core.Symbol(null,"path","path",1452340359,null))),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.cons.call(null,new cljs.core.Symbol(null,"=","=",-1501502141,null),values__9889__auto___10534)),new cljs.core.Symbol(null,"not","not",1044554643,null)),new cljs.core.Keyword(null,"message","message",-406056002),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(2),(3),(4)], null)], null));
}

}catch (e10530){var t__9927__auto___10536 = e10530;
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"js->clj","js->clj",1544462432,null),new cljs.core.Symbol(null,"path","path",1452340359,null))),new cljs.core.Keyword(null,"actual","actual",107306363),t__9927__auto___10536,new cljs.core.Keyword(null,"message","message",-406056002),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(2),(3),(4)], null)], null));
}
return done.call(null);
});})(___9958__auto__))
);
});

playground.task2.js_promise_test.t10525.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"meta10526","meta10526",-847916948,null)], null);
});

playground.task2.js_promise_test.t10525.cljs$lang$type = true;

playground.task2.js_promise_test.t10525.cljs$lang$ctorStr = "playground.task2.js-promise-test/t10525";

playground.task2.js_promise_test.t10525.cljs$lang$ctorPrWriter = (function (this__4910__auto__,writer__4911__auto__,opt__4912__auto__){
return cljs.core._write.call(null,writer__4911__auto__,"playground.task2.js-promise-test/t10525");
});

playground.task2.js_promise_test.__GT_t10525 = (function playground$task2$js_promise_test$__GT_t10525(meta10526){
return (new playground.task2.js_promise_test.t10525(meta10526));
});

}

return (new playground.task2.js_promise_test.t10525(null));
});

playground.task2.js_promise_test.traverse_ok.cljs$lang$var = new cljs.core.Var(function(){return playground.task2.js_promise_test.traverse_ok;},new cljs.core.Symbol("playground.task2.js-promise-test","traverse-ok","playground.task2.js-promise-test/traverse-ok",-272657241,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"playground.task2.js-promise-test","playground.task2.js-promise-test",1712526783,null),new cljs.core.Symbol(null,"traverse-ok","traverse-ok",-12732613,null),"test/playground/task2/js_promise_test.cljs",21,1,9,9,cljs.core.List.EMPTY,null,(cljs.core.truth_(playground.task2.js_promise_test.traverse_ok)?playground.task2.js_promise_test.traverse_ok.cljs$lang$test:null)]));
playground.task2.js_promise_test.traverse_no_file = (function playground$task2$js_promise_test$traverse_no_file(){
return cljs.test.test_var.call(null,playground$task2$js_promise_test$traverse_no_file.cljs$lang$var);
});
playground.task2.js_promise_test.traverse_no_file.cljs$lang$test = (function (){
if(typeof playground.task2.js_promise_test.t10537 !== 'undefined'){
} else {

/**
* @constructor
*/
playground.task2.js_promise_test.t10537 = (function (meta10538){
this.meta10538 = meta10538;
this.cljs$lang$protocol_mask$partition0$ = 393217;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
playground.task2.js_promise_test.t10537.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_10539,meta10538__$1){
var self__ = this;
var _10539__$1 = this;
return (new playground.task2.js_promise_test.t10537(meta10538__$1));
});

playground.task2.js_promise_test.t10537.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_10539){
var self__ = this;
var _10539__$1 = this;
return self__.meta10538;
});

playground.task2.js_promise_test.t10537.prototype.cljs$test$IAsyncTest$ = true;

playground.task2.js_promise_test.t10537.prototype.call = (function (self__,done){
var self__ = this;
var self____$1 = this;
var ___9958__auto__ = self____$1;
return playground.task2.js_promise_test.traverse.call(null,(92)).catch(((function (___9958__auto__,self____$1){
return (function (err){
try{var value__9892__auto___10543 = err;
if(cljs.core.truth_(value__9892__auto___10543)){
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"pass","pass",1574159993),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Symbol(null,"err","err",-448925678,null),new cljs.core.Keyword(null,"actual","actual",107306363),value__9892__auto___10543,new cljs.core.Keyword(null,"message","message",-406056002),null], null));
} else {
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"fail","fail",1706214930),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Symbol(null,"err","err",-448925678,null),new cljs.core.Keyword(null,"actual","actual",107306363),value__9892__auto___10543,new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}

}catch (e10541){var t__9927__auto___10544 = e10541;
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Symbol(null,"err","err",-448925678,null),new cljs.core.Keyword(null,"actual","actual",107306363),t__9927__auto___10544,new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}
return done.call(null);
});})(___9958__auto__,self____$1))
);
});

playground.task2.js_promise_test.t10537.prototype.apply = (function (self__,args10540){
var self__ = this;
var self____$1 = this;
return self____$1.call.apply(self____$1,[self____$1].concat(cljs.core.aclone.call(null,args10540)));
});

playground.task2.js_promise_test.t10537.prototype.cljs$core$IFn$_invoke$arity$1 = (function (done){
var self__ = this;
var ___9958__auto__ = this;
return playground.task2.js_promise_test.traverse.call(null,(92)).catch(((function (___9958__auto__){
return (function (err){
try{var value__9892__auto___10545 = err;
if(cljs.core.truth_(value__9892__auto___10545)){
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"pass","pass",1574159993),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Symbol(null,"err","err",-448925678,null),new cljs.core.Keyword(null,"actual","actual",107306363),value__9892__auto___10545,new cljs.core.Keyword(null,"message","message",-406056002),null], null));
} else {
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"fail","fail",1706214930),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Symbol(null,"err","err",-448925678,null),new cljs.core.Keyword(null,"actual","actual",107306363),value__9892__auto___10545,new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}

}catch (e10542){var t__9927__auto___10546 = e10542;
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Symbol(null,"err","err",-448925678,null),new cljs.core.Keyword(null,"actual","actual",107306363),t__9927__auto___10546,new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}
return done.call(null);
});})(___9958__auto__))
);
});

playground.task2.js_promise_test.t10537.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"meta10538","meta10538",643912681,null)], null);
});

playground.task2.js_promise_test.t10537.cljs$lang$type = true;

playground.task2.js_promise_test.t10537.cljs$lang$ctorStr = "playground.task2.js-promise-test/t10537";

playground.task2.js_promise_test.t10537.cljs$lang$ctorPrWriter = (function (this__4910__auto__,writer__4911__auto__,opt__4912__auto__){
return cljs.core._write.call(null,writer__4911__auto__,"playground.task2.js-promise-test/t10537");
});

playground.task2.js_promise_test.__GT_t10537 = (function playground$task2$js_promise_test$__GT_t10537(meta10538){
return (new playground.task2.js_promise_test.t10537(meta10538));
});

}

return (new playground.task2.js_promise_test.t10537(null));
});

playground.task2.js_promise_test.traverse_no_file.cljs$lang$var = new cljs.core.Var(function(){return playground.task2.js_promise_test.traverse_no_file;},new cljs.core.Symbol("playground.task2.js-promise-test","traverse-no-file","playground.task2.js-promise-test/traverse-no-file",772948987,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"playground.task2.js-promise-test","playground.task2.js-promise-test",1712526783,null),new cljs.core.Symbol(null,"traverse-no-file","traverse-no-file",1066418039,null),"test/playground/task2/js_promise_test.cljs",26,1,17,17,cljs.core.List.EMPTY,null,(cljs.core.truth_(playground.task2.js_promise_test.traverse_no_file)?playground.task2.js_promise_test.traverse_no_file.cljs$lang$test:null)]));

//# sourceMappingURL=js_promise_test.js.map