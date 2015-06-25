// Compiled by ClojureScript 0.0-3308 {:target :nodejs}
goog.provide('playground.task2.js_callback_test');
goog.require('cljs.core');
goog.require('cljs.test');
goog.require('playground.task2.test_utils');
playground.task2.js_callback_test.traverse = require("./coffee/js_callbacks");
playground.task2.js_callback_test.cljs_test_each_fixtures = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [playground.task2.test_utils.mock_readFile_fixture], null);
playground.task2.js_callback_test.traverse_ok = (function playground$task2$js_callback_test$traverse_ok(){
return cljs.test.test_var.call(null,playground$task2$js_callback_test$traverse_ok.cljs$lang$var);
});
playground.task2.js_callback_test.traverse_ok.cljs$lang$test = (function (){
if(typeof playground.task2.js_callback_test.t10209 !== 'undefined'){
} else {

/**
* @constructor
*/
playground.task2.js_callback_test.t10209 = (function (meta10210){
this.meta10210 = meta10210;
this.cljs$lang$protocol_mask$partition0$ = 393217;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
playground.task2.js_callback_test.t10209.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_10211,meta10210__$1){
var self__ = this;
var _10211__$1 = this;
return (new playground.task2.js_callback_test.t10209(meta10210__$1));
});

playground.task2.js_callback_test.t10209.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_10211){
var self__ = this;
var _10211__$1 = this;
return self__.meta10210;
});

playground.task2.js_callback_test.t10209.prototype.cljs$test$IAsyncTest$ = true;

playground.task2.js_callback_test.t10209.prototype.call = (function (self__,done){
var self__ = this;
var self____$1 = this;
var ___9958__auto__ = self____$1;
var callback = ((function (___9958__auto__,self____$1){
return (function (err,data){
try{var values__9889__auto___10217 = cljs.core._conj.call(null,cljs.core.List.EMPTY,err);
var result__9890__auto___10218 = cljs.core.apply.call(null,cljs.core.nil_QMARK_,values__9889__auto___10217);
if(cljs.core.truth_(result__9890__auto___10218)){
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"pass","pass",1574159993),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"nil?","nil?",1612038930,null),new cljs.core.Symbol(null,"err","err",-448925678,null)),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core.cons.call(null,cljs.core.nil_QMARK_,values__9889__auto___10217),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
} else {
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"fail","fail",1706214930),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"nil?","nil?",1612038930,null),new cljs.core.Symbol(null,"err","err",-448925678,null)),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.cons.call(null,new cljs.core.Symbol(null,"nil?","nil?",1612038930,null),values__9889__auto___10217)),new cljs.core.Symbol(null,"not","not",1044554643,null)),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}

}catch (e10213){var t__9927__auto___10219 = e10213;
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"nil?","nil?",1612038930,null),new cljs.core.Symbol(null,"err","err",-448925678,null)),new cljs.core.Keyword(null,"actual","actual",107306363),t__9927__auto___10219,new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}
try{var values__9889__auto___10220 = cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(2),(3),(4)], null)),cljs.core.js__GT_clj.call(null,data));
var result__9890__auto___10221 = cljs.core.apply.call(null,cljs.core._EQ_,values__9889__auto___10220);
if(cljs.core.truth_(result__9890__auto___10221)){
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"pass","pass",1574159993),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"js->clj","js->clj",1544462432,null),new cljs.core.Symbol(null,"data","data",1407862150,null)),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(2),(3),(4)], null)),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core.cons.call(null,cljs.core._EQ_,values__9889__auto___10220),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
} else {
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"fail","fail",1706214930),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"js->clj","js->clj",1544462432,null),new cljs.core.Symbol(null,"data","data",1407862150,null)),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(2),(3),(4)], null)),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.cons.call(null,new cljs.core.Symbol(null,"=","=",-1501502141,null),values__9889__auto___10220)),new cljs.core.Symbol(null,"not","not",1044554643,null)),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}

}catch (e10214){var t__9927__auto___10222 = e10214;
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"js->clj","js->clj",1544462432,null),new cljs.core.Symbol(null,"data","data",1407862150,null)),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(2),(3),(4)], null)),new cljs.core.Keyword(null,"actual","actual",107306363),t__9927__auto___10222,new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}
return done.call(null);
});})(___9958__auto__,self____$1))
;
return playground.task2.js_callback_test.traverse.call(null,(1),callback);
});

playground.task2.js_callback_test.t10209.prototype.apply = (function (self__,args10212){
var self__ = this;
var self____$1 = this;
return self____$1.call.apply(self____$1,[self____$1].concat(cljs.core.aclone.call(null,args10212)));
});

playground.task2.js_callback_test.t10209.prototype.cljs$core$IFn$_invoke$arity$1 = (function (done){
var self__ = this;
var ___9958__auto__ = this;
var callback = ((function (___9958__auto__){
return (function (err,data){
try{var values__9889__auto___10223 = cljs.core._conj.call(null,cljs.core.List.EMPTY,err);
var result__9890__auto___10224 = cljs.core.apply.call(null,cljs.core.nil_QMARK_,values__9889__auto___10223);
if(cljs.core.truth_(result__9890__auto___10224)){
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"pass","pass",1574159993),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"nil?","nil?",1612038930,null),new cljs.core.Symbol(null,"err","err",-448925678,null)),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core.cons.call(null,cljs.core.nil_QMARK_,values__9889__auto___10223),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
} else {
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"fail","fail",1706214930),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"nil?","nil?",1612038930,null),new cljs.core.Symbol(null,"err","err",-448925678,null)),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.cons.call(null,new cljs.core.Symbol(null,"nil?","nil?",1612038930,null),values__9889__auto___10223)),new cljs.core.Symbol(null,"not","not",1044554643,null)),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}

}catch (e10215){var t__9927__auto___10225 = e10215;
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"nil?","nil?",1612038930,null),new cljs.core.Symbol(null,"err","err",-448925678,null)),new cljs.core.Keyword(null,"actual","actual",107306363),t__9927__auto___10225,new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}
try{var values__9889__auto___10226 = cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(2),(3),(4)], null)),cljs.core.js__GT_clj.call(null,data));
var result__9890__auto___10227 = cljs.core.apply.call(null,cljs.core._EQ_,values__9889__auto___10226);
if(cljs.core.truth_(result__9890__auto___10227)){
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"pass","pass",1574159993),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"js->clj","js->clj",1544462432,null),new cljs.core.Symbol(null,"data","data",1407862150,null)),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(2),(3),(4)], null)),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core.cons.call(null,cljs.core._EQ_,values__9889__auto___10226),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
} else {
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"fail","fail",1706214930),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"js->clj","js->clj",1544462432,null),new cljs.core.Symbol(null,"data","data",1407862150,null)),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(2),(3),(4)], null)),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.cons.call(null,new cljs.core.Symbol(null,"=","=",-1501502141,null),values__9889__auto___10226)),new cljs.core.Symbol(null,"not","not",1044554643,null)),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}

}catch (e10216){var t__9927__auto___10228 = e10216;
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"js->clj","js->clj",1544462432,null),new cljs.core.Symbol(null,"data","data",1407862150,null)),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(2),(3),(4)], null)),new cljs.core.Keyword(null,"actual","actual",107306363),t__9927__auto___10228,new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}
return done.call(null);
});})(___9958__auto__))
;
return playground.task2.js_callback_test.traverse.call(null,(1),callback);
});

playground.task2.js_callback_test.t10209.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"meta10210","meta10210",-765193174,null)], null);
});

playground.task2.js_callback_test.t10209.cljs$lang$type = true;

playground.task2.js_callback_test.t10209.cljs$lang$ctorStr = "playground.task2.js-callback-test/t10209";

playground.task2.js_callback_test.t10209.cljs$lang$ctorPrWriter = (function (this__4910__auto__,writer__4911__auto__,opt__4912__auto__){
return cljs.core._write.call(null,writer__4911__auto__,"playground.task2.js-callback-test/t10209");
});

playground.task2.js_callback_test.__GT_t10209 = (function playground$task2$js_callback_test$__GT_t10209(meta10210){
return (new playground.task2.js_callback_test.t10209(meta10210));
});

}

return (new playground.task2.js_callback_test.t10209(null));
});

playground.task2.js_callback_test.traverse_ok.cljs$lang$var = new cljs.core.Var(function(){return playground.task2.js_callback_test.traverse_ok;},new cljs.core.Symbol("playground.task2.js-callback-test","traverse-ok","playground.task2.js-callback-test/traverse-ok",1224728209,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"playground.task2.js-callback-test","playground.task2.js-callback-test",1921080105,null),new cljs.core.Symbol(null,"traverse-ok","traverse-ok",-12732613,null),"test/playground/task2/js_callback_test.cljs",21,1,10,10,cljs.core.List.EMPTY,null,(cljs.core.truth_(playground.task2.js_callback_test.traverse_ok)?playground.task2.js_callback_test.traverse_ok.cljs$lang$test:null)]));
playground.task2.js_callback_test.traverse_no_file = (function playground$task2$js_callback_test$traverse_no_file(){
return cljs.test.test_var.call(null,playground$task2$js_callback_test$traverse_no_file.cljs$lang$var);
});
playground.task2.js_callback_test.traverse_no_file.cljs$lang$test = (function (){
if(typeof playground.task2.js_callback_test.t10229 !== 'undefined'){
} else {

/**
* @constructor
*/
playground.task2.js_callback_test.t10229 = (function (meta10230){
this.meta10230 = meta10230;
this.cljs$lang$protocol_mask$partition0$ = 393217;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
playground.task2.js_callback_test.t10229.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_10231,meta10230__$1){
var self__ = this;
var _10231__$1 = this;
return (new playground.task2.js_callback_test.t10229(meta10230__$1));
});

playground.task2.js_callback_test.t10229.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_10231){
var self__ = this;
var _10231__$1 = this;
return self__.meta10230;
});

playground.task2.js_callback_test.t10229.prototype.cljs$test$IAsyncTest$ = true;

playground.task2.js_callback_test.t10229.prototype.call = (function (self__,done){
var self__ = this;
var self____$1 = this;
var ___9958__auto__ = self____$1;
var callback = ((function (___9958__auto__,self____$1){
return (function (err,data){
try{var value__9892__auto___10235 = err;
if(cljs.core.truth_(value__9892__auto___10235)){
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"pass","pass",1574159993),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Symbol(null,"err","err",-448925678,null),new cljs.core.Keyword(null,"actual","actual",107306363),value__9892__auto___10235,new cljs.core.Keyword(null,"message","message",-406056002),null], null));
} else {
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"fail","fail",1706214930),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Symbol(null,"err","err",-448925678,null),new cljs.core.Keyword(null,"actual","actual",107306363),value__9892__auto___10235,new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}

}catch (e10233){var t__9927__auto___10236 = e10233;
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Symbol(null,"err","err",-448925678,null),new cljs.core.Keyword(null,"actual","actual",107306363),t__9927__auto___10236,new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}
return done.call(null);
});})(___9958__auto__,self____$1))
;
return playground.task2.js_callback_test.traverse.call(null,(92),callback);
});

playground.task2.js_callback_test.t10229.prototype.apply = (function (self__,args10232){
var self__ = this;
var self____$1 = this;
return self____$1.call.apply(self____$1,[self____$1].concat(cljs.core.aclone.call(null,args10232)));
});

playground.task2.js_callback_test.t10229.prototype.cljs$core$IFn$_invoke$arity$1 = (function (done){
var self__ = this;
var ___9958__auto__ = this;
var callback = ((function (___9958__auto__){
return (function (err,data){
try{var value__9892__auto___10237 = err;
if(cljs.core.truth_(value__9892__auto___10237)){
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"pass","pass",1574159993),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Symbol(null,"err","err",-448925678,null),new cljs.core.Keyword(null,"actual","actual",107306363),value__9892__auto___10237,new cljs.core.Keyword(null,"message","message",-406056002),null], null));
} else {
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"fail","fail",1706214930),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Symbol(null,"err","err",-448925678,null),new cljs.core.Keyword(null,"actual","actual",107306363),value__9892__auto___10237,new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}

}catch (e10234){var t__9927__auto___10238 = e10234;
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Symbol(null,"err","err",-448925678,null),new cljs.core.Keyword(null,"actual","actual",107306363),t__9927__auto___10238,new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}
return done.call(null);
});})(___9958__auto__))
;
return playground.task2.js_callback_test.traverse.call(null,(92),callback);
});

playground.task2.js_callback_test.t10229.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"meta10230","meta10230",419347817,null)], null);
});

playground.task2.js_callback_test.t10229.cljs$lang$type = true;

playground.task2.js_callback_test.t10229.cljs$lang$ctorStr = "playground.task2.js-callback-test/t10229";

playground.task2.js_callback_test.t10229.cljs$lang$ctorPrWriter = (function (this__4910__auto__,writer__4911__auto__,opt__4912__auto__){
return cljs.core._write.call(null,writer__4911__auto__,"playground.task2.js-callback-test/t10229");
});

playground.task2.js_callback_test.__GT_t10229 = (function playground$task2$js_callback_test$__GT_t10229(meta10230){
return (new playground.task2.js_callback_test.t10229(meta10230));
});

}

return (new playground.task2.js_callback_test.t10229(null));
});

playground.task2.js_callback_test.traverse_no_file.cljs$lang$var = new cljs.core.Var(function(){return playground.task2.js_callback_test.traverse_no_file;},new cljs.core.Symbol("playground.task2.js-callback-test","traverse-no-file","playground.task2.js-callback-test/traverse-no-file",-1923902079,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"playground.task2.js-callback-test","playground.task2.js-callback-test",1921080105,null),new cljs.core.Symbol(null,"traverse-no-file","traverse-no-file",1066418039,null),"test/playground/task2/js_callback_test.cljs",26,1,19,19,cljs.core.List.EMPTY,null,(cljs.core.truth_(playground.task2.js_callback_test.traverse_no_file)?playground.task2.js_callback_test.traverse_no_file.cljs$lang$test:null)]));

//# sourceMappingURL=js_callback_test.js.map