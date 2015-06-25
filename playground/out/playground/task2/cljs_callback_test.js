// Compiled by ClojureScript 0.0-3308 {:target :nodejs}
goog.provide('playground.task2.cljs_callback_test');
goog.require('cljs.core');
goog.require('cljs.test');
goog.require('playground.task2.test_utils');
goog.require('playground.task2.cljs_callbacks');
playground.task2.cljs_callback_test.cljs_test_each_fixtures = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [playground.task2.test_utils.mock_readFile_fixture], null);
playground.task2.cljs_callback_test.traverse_ok = (function playground$task2$cljs_callback_test$traverse_ok(){
return cljs.test.test_var.call(null,playground$task2$cljs_callback_test$traverse_ok.cljs$lang$var);
});
playground.task2.cljs_callback_test.traverse_ok.cljs$lang$test = (function (){
if(typeof playground.task2.cljs_callback_test.t10177 !== 'undefined'){
} else {

/**
* @constructor
*/
playground.task2.cljs_callback_test.t10177 = (function (meta10178){
this.meta10178 = meta10178;
this.cljs$lang$protocol_mask$partition0$ = 393217;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
playground.task2.cljs_callback_test.t10177.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_10179,meta10178__$1){
var self__ = this;
var _10179__$1 = this;
return (new playground.task2.cljs_callback_test.t10177(meta10178__$1));
});

playground.task2.cljs_callback_test.t10177.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_10179){
var self__ = this;
var _10179__$1 = this;
return self__.meta10178;
});

playground.task2.cljs_callback_test.t10177.prototype.cljs$test$IAsyncTest$ = true;

playground.task2.cljs_callback_test.t10177.prototype.call = (function (self__,done){
var self__ = this;
var self____$1 = this;
var ___9958__auto__ = self____$1;
return playground.task2.cljs_callbacks.traverse.call(null,(1),((function (___9958__auto__,self____$1){
return (function (err,data){
try{var values__9889__auto___10185 = cljs.core._conj.call(null,cljs.core.List.EMPTY,err);
var result__9890__auto___10186 = cljs.core.apply.call(null,cljs.core.nil_QMARK_,values__9889__auto___10185);
if(cljs.core.truth_(result__9890__auto___10186)){
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"pass","pass",1574159993),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"nil?","nil?",1612038930,null),new cljs.core.Symbol(null,"err","err",-448925678,null)),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core.cons.call(null,cljs.core.nil_QMARK_,values__9889__auto___10185),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
} else {
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"fail","fail",1706214930),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"nil?","nil?",1612038930,null),new cljs.core.Symbol(null,"err","err",-448925678,null)),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.cons.call(null,new cljs.core.Symbol(null,"nil?","nil?",1612038930,null),values__9889__auto___10185)),new cljs.core.Symbol(null,"not","not",1044554643,null)),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}

}catch (e10181){var t__9927__auto___10187 = e10181;
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"nil?","nil?",1612038930,null),new cljs.core.Symbol(null,"err","err",-448925678,null)),new cljs.core.Keyword(null,"actual","actual",107306363),t__9927__auto___10187,new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}
try{var values__9889__auto___10188 = cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(2),(3),(4)], null)),data);
var result__9890__auto___10189 = cljs.core.apply.call(null,cljs.core._EQ_,values__9889__auto___10188);
if(cljs.core.truth_(result__9890__auto___10189)){
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"pass","pass",1574159993),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),new cljs.core.Symbol(null,"data","data",1407862150,null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(2),(3),(4)], null)),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core.cons.call(null,cljs.core._EQ_,values__9889__auto___10188),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
} else {
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"fail","fail",1706214930),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),new cljs.core.Symbol(null,"data","data",1407862150,null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(2),(3),(4)], null)),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.cons.call(null,new cljs.core.Symbol(null,"=","=",-1501502141,null),values__9889__auto___10188)),new cljs.core.Symbol(null,"not","not",1044554643,null)),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}

}catch (e10182){var t__9927__auto___10190 = e10182;
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),new cljs.core.Symbol(null,"data","data",1407862150,null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(2),(3),(4)], null)),new cljs.core.Keyword(null,"actual","actual",107306363),t__9927__auto___10190,new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}
return done.call(null);
});})(___9958__auto__,self____$1))
);
});

playground.task2.cljs_callback_test.t10177.prototype.apply = (function (self__,args10180){
var self__ = this;
var self____$1 = this;
return self____$1.call.apply(self____$1,[self____$1].concat(cljs.core.aclone.call(null,args10180)));
});

playground.task2.cljs_callback_test.t10177.prototype.cljs$core$IFn$_invoke$arity$1 = (function (done){
var self__ = this;
var ___9958__auto__ = this;
return playground.task2.cljs_callbacks.traverse.call(null,(1),((function (___9958__auto__){
return (function (err,data){
try{var values__9889__auto___10191 = cljs.core._conj.call(null,cljs.core.List.EMPTY,err);
var result__9890__auto___10192 = cljs.core.apply.call(null,cljs.core.nil_QMARK_,values__9889__auto___10191);
if(cljs.core.truth_(result__9890__auto___10192)){
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"pass","pass",1574159993),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"nil?","nil?",1612038930,null),new cljs.core.Symbol(null,"err","err",-448925678,null)),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core.cons.call(null,cljs.core.nil_QMARK_,values__9889__auto___10191),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
} else {
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"fail","fail",1706214930),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"nil?","nil?",1612038930,null),new cljs.core.Symbol(null,"err","err",-448925678,null)),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.cons.call(null,new cljs.core.Symbol(null,"nil?","nil?",1612038930,null),values__9889__auto___10191)),new cljs.core.Symbol(null,"not","not",1044554643,null)),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}

}catch (e10183){var t__9927__auto___10193 = e10183;
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"nil?","nil?",1612038930,null),new cljs.core.Symbol(null,"err","err",-448925678,null)),new cljs.core.Keyword(null,"actual","actual",107306363),t__9927__auto___10193,new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}
try{var values__9889__auto___10194 = cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(2),(3),(4)], null)),data);
var result__9890__auto___10195 = cljs.core.apply.call(null,cljs.core._EQ_,values__9889__auto___10194);
if(cljs.core.truth_(result__9890__auto___10195)){
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"pass","pass",1574159993),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),new cljs.core.Symbol(null,"data","data",1407862150,null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(2),(3),(4)], null)),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core.cons.call(null,cljs.core._EQ_,values__9889__auto___10194),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
} else {
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"fail","fail",1706214930),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),new cljs.core.Symbol(null,"data","data",1407862150,null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(2),(3),(4)], null)),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.cons.call(null,new cljs.core.Symbol(null,"=","=",-1501502141,null),values__9889__auto___10194)),new cljs.core.Symbol(null,"not","not",1044554643,null)),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}

}catch (e10184){var t__9927__auto___10196 = e10184;
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),new cljs.core.Symbol(null,"data","data",1407862150,null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(2),(3),(4)], null)),new cljs.core.Keyword(null,"actual","actual",107306363),t__9927__auto___10196,new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}
return done.call(null);
});})(___9958__auto__))
);
});

playground.task2.cljs_callback_test.t10177.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"meta10178","meta10178",1761874015,null)], null);
});

playground.task2.cljs_callback_test.t10177.cljs$lang$type = true;

playground.task2.cljs_callback_test.t10177.cljs$lang$ctorStr = "playground.task2.cljs-callback-test/t10177";

playground.task2.cljs_callback_test.t10177.cljs$lang$ctorPrWriter = (function (this__4910__auto__,writer__4911__auto__,opt__4912__auto__){
return cljs.core._write.call(null,writer__4911__auto__,"playground.task2.cljs-callback-test/t10177");
});

playground.task2.cljs_callback_test.__GT_t10177 = (function playground$task2$cljs_callback_test$__GT_t10177(meta10178){
return (new playground.task2.cljs_callback_test.t10177(meta10178));
});

}

return (new playground.task2.cljs_callback_test.t10177(null));
});

playground.task2.cljs_callback_test.traverse_ok.cljs$lang$var = new cljs.core.Var(function(){return playground.task2.cljs_callback_test.traverse_ok;},new cljs.core.Symbol("playground.task2.cljs-callback-test","traverse-ok","playground.task2.cljs-callback-test/traverse-ok",-1505087480,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"playground.task2.cljs-callback-test","playground.task2.cljs-callback-test",520567239,null),new cljs.core.Symbol(null,"traverse-ok","traverse-ok",-12732613,null),"test/playground/task2/cljs_callbacks_test.cljs",21,1,9,9,cljs.core.List.EMPTY,null,(cljs.core.truth_(playground.task2.cljs_callback_test.traverse_ok)?playground.task2.cljs_callback_test.traverse_ok.cljs$lang$test:null)]));
playground.task2.cljs_callback_test.traverse_no_file = (function playground$task2$cljs_callback_test$traverse_no_file(){
return cljs.test.test_var.call(null,playground$task2$cljs_callback_test$traverse_no_file.cljs$lang$var);
});
playground.task2.cljs_callback_test.traverse_no_file.cljs$lang$test = (function (){
if(typeof playground.task2.cljs_callback_test.t10197 !== 'undefined'){
} else {

/**
* @constructor
*/
playground.task2.cljs_callback_test.t10197 = (function (meta10198){
this.meta10198 = meta10198;
this.cljs$lang$protocol_mask$partition0$ = 393217;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
playground.task2.cljs_callback_test.t10197.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_10199,meta10198__$1){
var self__ = this;
var _10199__$1 = this;
return (new playground.task2.cljs_callback_test.t10197(meta10198__$1));
});

playground.task2.cljs_callback_test.t10197.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_10199){
var self__ = this;
var _10199__$1 = this;
return self__.meta10198;
});

playground.task2.cljs_callback_test.t10197.prototype.cljs$test$IAsyncTest$ = true;

playground.task2.cljs_callback_test.t10197.prototype.call = (function (self__,done){
var self__ = this;
var self____$1 = this;
var ___9958__auto__ = self____$1;
return playground.task2.cljs_callbacks.traverse.call(null,(92),((function (___9958__auto__,self____$1){
return (function (err,data){
try{var value__9892__auto___10203 = err;
if(cljs.core.truth_(value__9892__auto___10203)){
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"pass","pass",1574159993),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Symbol(null,"err","err",-448925678,null),new cljs.core.Keyword(null,"actual","actual",107306363),value__9892__auto___10203,new cljs.core.Keyword(null,"message","message",-406056002),null], null));
} else {
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"fail","fail",1706214930),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Symbol(null,"err","err",-448925678,null),new cljs.core.Keyword(null,"actual","actual",107306363),value__9892__auto___10203,new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}

}catch (e10201){var t__9927__auto___10204 = e10201;
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Symbol(null,"err","err",-448925678,null),new cljs.core.Keyword(null,"actual","actual",107306363),t__9927__auto___10204,new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}
return done.call(null);
});})(___9958__auto__,self____$1))
);
});

playground.task2.cljs_callback_test.t10197.prototype.apply = (function (self__,args10200){
var self__ = this;
var self____$1 = this;
return self____$1.call.apply(self____$1,[self____$1].concat(cljs.core.aclone.call(null,args10200)));
});

playground.task2.cljs_callback_test.t10197.prototype.cljs$core$IFn$_invoke$arity$1 = (function (done){
var self__ = this;
var ___9958__auto__ = this;
return playground.task2.cljs_callbacks.traverse.call(null,(92),((function (___9958__auto__){
return (function (err,data){
try{var value__9892__auto___10205 = err;
if(cljs.core.truth_(value__9892__auto___10205)){
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"pass","pass",1574159993),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Symbol(null,"err","err",-448925678,null),new cljs.core.Keyword(null,"actual","actual",107306363),value__9892__auto___10205,new cljs.core.Keyword(null,"message","message",-406056002),null], null));
} else {
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"fail","fail",1706214930),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Symbol(null,"err","err",-448925678,null),new cljs.core.Keyword(null,"actual","actual",107306363),value__9892__auto___10205,new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}

}catch (e10202){var t__9927__auto___10206 = e10202;
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Symbol(null,"err","err",-448925678,null),new cljs.core.Keyword(null,"actual","actual",107306363),t__9927__auto___10206,new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}
return done.call(null);
});})(___9958__auto__))
);
});

playground.task2.cljs_callback_test.t10197.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"meta10198","meta10198",796089334,null)], null);
});

playground.task2.cljs_callback_test.t10197.cljs$lang$type = true;

playground.task2.cljs_callback_test.t10197.cljs$lang$ctorStr = "playground.task2.cljs-callback-test/t10197";

playground.task2.cljs_callback_test.t10197.cljs$lang$ctorPrWriter = (function (this__4910__auto__,writer__4911__auto__,opt__4912__auto__){
return cljs.core._write.call(null,writer__4911__auto__,"playground.task2.cljs-callback-test/t10197");
});

playground.task2.cljs_callback_test.__GT_t10197 = (function playground$task2$cljs_callback_test$__GT_t10197(meta10198){
return (new playground.task2.cljs_callback_test.t10197(meta10198));
});

}

return (new playground.task2.cljs_callback_test.t10197(null));
});

playground.task2.cljs_callback_test.traverse_no_file.cljs$lang$var = new cljs.core.Var(function(){return playground.task2.cljs_callback_test.traverse_no_file;},new cljs.core.Symbol("playground.task2.cljs-callback-test","traverse-no-file","playground.task2.cljs-callback-test/traverse-no-file",-387925990,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"playground.task2.cljs-callback-test","playground.task2.cljs-callback-test",520567239,null),new cljs.core.Symbol(null,"traverse-no-file","traverse-no-file",1066418039,null),"test/playground/task2/cljs_callbacks_test.cljs",26,1,16,16,cljs.core.List.EMPTY,null,(cljs.core.truth_(playground.task2.cljs_callback_test.traverse_no_file)?playground.task2.cljs_callback_test.traverse_no_file.cljs$lang$test:null)]));

//# sourceMappingURL=cljs_callback_test.js.map