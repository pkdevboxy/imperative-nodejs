// Compiled by ClojureScript 0.0-3308 {:target :nodejs}
goog.provide('playground.task1.core_test');
goog.require('cljs.core');
goog.require('cljs.test');
goog.require('playground.task1.cljs_promise');
goog.require('playground.task1.cljs_callbacks');
goog.require('playground.task1.cljs_async');
goog.require('cljs.core.async');
goog.require('cljs.nodejs');
playground.task1.core_test.fs = require("fs");
playground.task1.core_test.original_readFile = playground.task1.core_test.fs.readFile;
playground.task1.core_test.readFile_mock = (function playground$task1$core_test$readFile_mock(name,callback){
var c__7383__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__7383__auto__){
return (function (){
var f__7384__auto__ = (function (){var switch__7321__auto__ = ((function (c__7383__auto__){
return (function (state_13756){
var state_val_13757 = (state_13756[(1)]);
if((state_val_13757 === (1))){
var inst_13751 = cljs.core.async.timeout.call(null,(30));
var state_13756__$1 = state_13756;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_13756__$1,(2),inst_13751);
} else {
if((state_val_13757 === (2))){
var inst_13753 = (state_13756[(2)]);
var inst_13754 = callback.call(null,null,name);
var state_13756__$1 = (function (){var statearr_13758 = state_13756;
(statearr_13758[(7)] = inst_13753);

return statearr_13758;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_13756__$1,inst_13754);
} else {
return null;
}
}
});})(c__7383__auto__))
;
return ((function (switch__7321__auto__,c__7383__auto__){
return (function() {
var playground$task1$core_test$readFile_mock_$_state_machine__7322__auto__ = null;
var playground$task1$core_test$readFile_mock_$_state_machine__7322__auto____0 = (function (){
var statearr_13762 = [null,null,null,null,null,null,null,null];
(statearr_13762[(0)] = playground$task1$core_test$readFile_mock_$_state_machine__7322__auto__);

(statearr_13762[(1)] = (1));

return statearr_13762;
});
var playground$task1$core_test$readFile_mock_$_state_machine__7322__auto____1 = (function (state_13756){
while(true){
var ret_value__7323__auto__ = (function (){try{while(true){
var result__7324__auto__ = switch__7321__auto__.call(null,state_13756);
if(cljs.core.keyword_identical_QMARK_.call(null,result__7324__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__7324__auto__;
}
break;
}
}catch (e13763){if((e13763 instanceof Object)){
var ex__7325__auto__ = e13763;
var statearr_13764_13766 = state_13756;
(statearr_13764_13766[(5)] = ex__7325__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_13756);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e13763;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__7323__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__13767 = state_13756;
state_13756 = G__13767;
continue;
} else {
return ret_value__7323__auto__;
}
break;
}
});
playground$task1$core_test$readFile_mock_$_state_machine__7322__auto__ = function(state_13756){
switch(arguments.length){
case 0:
return playground$task1$core_test$readFile_mock_$_state_machine__7322__auto____0.call(this);
case 1:
return playground$task1$core_test$readFile_mock_$_state_machine__7322__auto____1.call(this,state_13756);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
playground$task1$core_test$readFile_mock_$_state_machine__7322__auto__.cljs$core$IFn$_invoke$arity$0 = playground$task1$core_test$readFile_mock_$_state_machine__7322__auto____0;
playground$task1$core_test$readFile_mock_$_state_machine__7322__auto__.cljs$core$IFn$_invoke$arity$1 = playground$task1$core_test$readFile_mock_$_state_machine__7322__auto____1;
return playground$task1$core_test$readFile_mock_$_state_machine__7322__auto__;
})()
;})(switch__7321__auto__,c__7383__auto__))
})();
var state__7385__auto__ = (function (){var statearr_13765 = f__7384__auto__.call(null);
(statearr_13765[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7383__auto__);

return statearr_13765;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__7385__auto__);
});})(c__7383__auto__))
);

return c__7383__auto__;
});
playground.task1.core_test.cljs_test_each_fixtures = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"before","before",-1633692388),(function (){
return playground.task1.core_test.fs.readFile = playground.task1.core_test.readFile_mock;
}),new cljs.core.Keyword(null,"after","after",594996914),(function (){
return playground.task1.core_test.fs.readFile = playground.task1.core_test.original_readFile;
})], null)], null);
playground.task1.core_test.test_implementation = (function playground$task1$core_test$test_implementation(done,f_to_test){
var callback = (function (err,data){
try{var values__9889__auto___13772 = cljs.core._conj.call(null,cljs.core.List.EMPTY,err);
var result__9890__auto___13773 = cljs.core.apply.call(null,cljs.core.nil_QMARK_,values__9889__auto___13772);
if(cljs.core.truth_(result__9890__auto___13773)){
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"pass","pass",1574159993),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"nil?","nil?",1612038930,null),new cljs.core.Symbol(null,"err","err",-448925678,null)),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core.cons.call(null,cljs.core.nil_QMARK_,values__9889__auto___13772),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
} else {
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"fail","fail",1706214930),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"nil?","nil?",1612038930,null),new cljs.core.Symbol(null,"err","err",-448925678,null)),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.cons.call(null,new cljs.core.Symbol(null,"nil?","nil?",1612038930,null),values__9889__auto___13772)),new cljs.core.Symbol(null,"not","not",1044554643,null)),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}

}catch (e13770){var t__9927__auto___13774 = e13770;
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"nil?","nil?",1612038930,null),new cljs.core.Symbol(null,"err","err",-448925678,null)),new cljs.core.Keyword(null,"actual","actual",107306363),t__9927__auto___13774,new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}
try{var values__9889__auto___13775 = cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,data),(6));
var result__9890__auto___13776 = cljs.core.apply.call(null,cljs.core._EQ_,values__9889__auto___13775);
if(cljs.core.truth_(result__9890__auto___13776)){
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"pass","pass",1574159993),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),(6),new cljs.core.Symbol(null,"data","data",1407862150,null)),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core.cons.call(null,cljs.core._EQ_,values__9889__auto___13775),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
} else {
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"fail","fail",1706214930),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),(6),new cljs.core.Symbol(null,"data","data",1407862150,null)),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.cons.call(null,new cljs.core.Symbol(null,"=","=",-1501502141,null),values__9889__auto___13775)),new cljs.core.Symbol(null,"not","not",1044554643,null)),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}

}catch (e13771){var t__9927__auto___13777 = e13771;
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),(6),new cljs.core.Symbol(null,"data","data",1407862150,null)),new cljs.core.Keyword(null,"actual","actual",107306363),t__9927__auto___13777,new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}
return done.call(null);
});
return f_to_test.call(null,cljs.core.clj__GT_js.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["1","2","3"], null)),callback);
});
playground.task1.core_test.sum_numbers_from_files_cljs_callback = (function playground$task1$core_test$sum_numbers_from_files_cljs_callback(){
return cljs.test.test_var.call(null,playground$task1$core_test$sum_numbers_from_files_cljs_callback.cljs$lang$var);
});
playground.task1.core_test.sum_numbers_from_files_cljs_callback.cljs$lang$test = (function (){
if(typeof playground.task1.core_test.t13778 !== 'undefined'){
} else {

/**
* @constructor
*/
playground.task1.core_test.t13778 = (function (meta13779){
this.meta13779 = meta13779;
this.cljs$lang$protocol_mask$partition0$ = 393217;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
playground.task1.core_test.t13778.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_13780,meta13779__$1){
var self__ = this;
var _13780__$1 = this;
return (new playground.task1.core_test.t13778(meta13779__$1));
});

playground.task1.core_test.t13778.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_13780){
var self__ = this;
var _13780__$1 = this;
return self__.meta13779;
});

playground.task1.core_test.t13778.prototype.cljs$test$IAsyncTest$ = true;

playground.task1.core_test.t13778.prototype.call = (function (self__,done){
var self__ = this;
var self____$1 = this;
var ___9958__auto__ = self____$1;
return playground.task1.core_test.test_implementation.call(null,done,playground.task1.cljs_callbacks.sum_from_files);
});

playground.task1.core_test.t13778.prototype.apply = (function (self__,args13781){
var self__ = this;
var self____$1 = this;
return self____$1.call.apply(self____$1,[self____$1].concat(cljs.core.aclone.call(null,args13781)));
});

playground.task1.core_test.t13778.prototype.cljs$core$IFn$_invoke$arity$1 = (function (done){
var self__ = this;
var ___9958__auto__ = this;
return playground.task1.core_test.test_implementation.call(null,done,playground.task1.cljs_callbacks.sum_from_files);
});

playground.task1.core_test.t13778.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"meta13779","meta13779",-1804478489,null)], null);
});

playground.task1.core_test.t13778.cljs$lang$type = true;

playground.task1.core_test.t13778.cljs$lang$ctorStr = "playground.task1.core-test/t13778";

playground.task1.core_test.t13778.cljs$lang$ctorPrWriter = (function (this__4910__auto__,writer__4911__auto__,opt__4912__auto__){
return cljs.core._write.call(null,writer__4911__auto__,"playground.task1.core-test/t13778");
});

playground.task1.core_test.__GT_t13778 = (function playground$task1$core_test$__GT_t13778(meta13779){
return (new playground.task1.core_test.t13778(meta13779));
});

}

return (new playground.task1.core_test.t13778(null));
});

playground.task1.core_test.sum_numbers_from_files_cljs_callback.cljs$lang$var = new cljs.core.Var(function(){return playground.task1.core_test.sum_numbers_from_files_cljs_callback;},new cljs.core.Symbol("playground.task1.core-test","sum-numbers-from-files-cljs-callback","playground.task1.core-test/sum-numbers-from-files-cljs-callback",-1125301955,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"playground.task1.core-test","playground.task1.core-test",-348470523,null),new cljs.core.Symbol(null,"sum-numbers-from-files-cljs-callback","sum-numbers-from-files-cljs-callback",1005865680,null),"/home/user/projects/imperative-nodejs/playground/test/playground/task1/core_test.cljs",46,1,38,38,cljs.core.List.EMPTY,null,(cljs.core.truth_(playground.task1.core_test.sum_numbers_from_files_cljs_callback)?playground.task1.core_test.sum_numbers_from_files_cljs_callback.cljs$lang$test:null)]));
playground.task1.core_test.sum_numbers_from_files_cljs_promises = (function playground$task1$core_test$sum_numbers_from_files_cljs_promises(){
return cljs.test.test_var.call(null,playground$task1$core_test$sum_numbers_from_files_cljs_promises.cljs$lang$var);
});
playground.task1.core_test.sum_numbers_from_files_cljs_promises.cljs$lang$test = (function (){
if(typeof playground.task1.core_test.t13782 !== 'undefined'){
} else {

/**
* @constructor
*/
playground.task1.core_test.t13782 = (function (meta13783){
this.meta13783 = meta13783;
this.cljs$lang$protocol_mask$partition0$ = 393217;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
playground.task1.core_test.t13782.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_13784,meta13783__$1){
var self__ = this;
var _13784__$1 = this;
return (new playground.task1.core_test.t13782(meta13783__$1));
});

playground.task1.core_test.t13782.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_13784){
var self__ = this;
var _13784__$1 = this;
return self__.meta13783;
});

playground.task1.core_test.t13782.prototype.cljs$test$IAsyncTest$ = true;

playground.task1.core_test.t13782.prototype.call = (function (self__,done){
var self__ = this;
var self____$1 = this;
var ___9958__auto__ = self____$1;
return playground.task1.core_test.test_implementation.call(null,done,playground.task1.cljs_promise.sum_from_files);
});

playground.task1.core_test.t13782.prototype.apply = (function (self__,args13785){
var self__ = this;
var self____$1 = this;
return self____$1.call.apply(self____$1,[self____$1].concat(cljs.core.aclone.call(null,args13785)));
});

playground.task1.core_test.t13782.prototype.cljs$core$IFn$_invoke$arity$1 = (function (done){
var self__ = this;
var ___9958__auto__ = this;
return playground.task1.core_test.test_implementation.call(null,done,playground.task1.cljs_promise.sum_from_files);
});

playground.task1.core_test.t13782.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"meta13783","meta13783",430629562,null)], null);
});

playground.task1.core_test.t13782.cljs$lang$type = true;

playground.task1.core_test.t13782.cljs$lang$ctorStr = "playground.task1.core-test/t13782";

playground.task1.core_test.t13782.cljs$lang$ctorPrWriter = (function (this__4910__auto__,writer__4911__auto__,opt__4912__auto__){
return cljs.core._write.call(null,writer__4911__auto__,"playground.task1.core-test/t13782");
});

playground.task1.core_test.__GT_t13782 = (function playground$task1$core_test$__GT_t13782(meta13783){
return (new playground.task1.core_test.t13782(meta13783));
});

}

return (new playground.task1.core_test.t13782(null));
});

playground.task1.core_test.sum_numbers_from_files_cljs_promises.cljs$lang$var = new cljs.core.Var(function(){return playground.task1.core_test.sum_numbers_from_files_cljs_promises;},new cljs.core.Symbol("playground.task1.core-test","sum-numbers-from-files-cljs-promises","playground.task1.core-test/sum-numbers-from-files-cljs-promises",1570112796,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"playground.task1.core-test","playground.task1.core-test",-348470523,null),new cljs.core.Symbol(null,"sum-numbers-from-files-cljs-promises","sum-numbers-from-files-cljs-promises",-997257807,null),"/home/user/projects/imperative-nodejs/playground/test/playground/task1/core_test.cljs",46,1,43,43,cljs.core.List.EMPTY,null,(cljs.core.truth_(playground.task1.core_test.sum_numbers_from_files_cljs_promises)?playground.task1.core_test.sum_numbers_from_files_cljs_promises.cljs$lang$test:null)]));
playground.task1.core_test.sum_numbers_from_files_cljs_async = (function playground$task1$core_test$sum_numbers_from_files_cljs_async(){
return cljs.test.test_var.call(null,playground$task1$core_test$sum_numbers_from_files_cljs_async.cljs$lang$var);
});
playground.task1.core_test.sum_numbers_from_files_cljs_async.cljs$lang$test = (function (){
if(typeof playground.task1.core_test.t13786 !== 'undefined'){
} else {

/**
* @constructor
*/
playground.task1.core_test.t13786 = (function (meta13787){
this.meta13787 = meta13787;
this.cljs$lang$protocol_mask$partition0$ = 393217;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
playground.task1.core_test.t13786.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_13788,meta13787__$1){
var self__ = this;
var _13788__$1 = this;
return (new playground.task1.core_test.t13786(meta13787__$1));
});

playground.task1.core_test.t13786.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_13788){
var self__ = this;
var _13788__$1 = this;
return self__.meta13787;
});

playground.task1.core_test.t13786.prototype.cljs$test$IAsyncTest$ = true;

playground.task1.core_test.t13786.prototype.call = (function (self__,done){
var self__ = this;
var self____$1 = this;
var ___9958__auto__ = self____$1;
return playground.task1.core_test.test_implementation.call(null,done,playground.task1.cljs_async.sum_from_files);
});

playground.task1.core_test.t13786.prototype.apply = (function (self__,args13789){
var self__ = this;
var self____$1 = this;
return self____$1.call.apply(self____$1,[self____$1].concat(cljs.core.aclone.call(null,args13789)));
});

playground.task1.core_test.t13786.prototype.cljs$core$IFn$_invoke$arity$1 = (function (done){
var self__ = this;
var ___9958__auto__ = this;
return playground.task1.core_test.test_implementation.call(null,done,playground.task1.cljs_async.sum_from_files);
});

playground.task1.core_test.t13786.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"meta13787","meta13787",-1902664489,null)], null);
});

playground.task1.core_test.t13786.cljs$lang$type = true;

playground.task1.core_test.t13786.cljs$lang$ctorStr = "playground.task1.core-test/t13786";

playground.task1.core_test.t13786.cljs$lang$ctorPrWriter = (function (this__4910__auto__,writer__4911__auto__,opt__4912__auto__){
return cljs.core._write.call(null,writer__4911__auto__,"playground.task1.core-test/t13786");
});

playground.task1.core_test.__GT_t13786 = (function playground$task1$core_test$__GT_t13786(meta13787){
return (new playground.task1.core_test.t13786(meta13787));
});

}

return (new playground.task1.core_test.t13786(null));
});

playground.task1.core_test.sum_numbers_from_files_cljs_async.cljs$lang$var = new cljs.core.Var(function(){return playground.task1.core_test.sum_numbers_from_files_cljs_async;},new cljs.core.Symbol("playground.task1.core-test","sum-numbers-from-files-cljs-async","playground.task1.core-test/sum-numbers-from-files-cljs-async",1544144132,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"playground.task1.core-test","playground.task1.core-test",-348470523,null),new cljs.core.Symbol(null,"sum-numbers-from-files-cljs-async","sum-numbers-from-files-cljs-async",-982463143,null),"/home/user/projects/imperative-nodejs/playground/test/playground/task1/core_test.cljs",43,1,48,48,cljs.core.List.EMPTY,null,(cljs.core.truth_(playground.task1.core_test.sum_numbers_from_files_cljs_async)?playground.task1.core_test.sum_numbers_from_files_cljs_async.cljs$lang$test:null)]));
playground.task1.core_test.sum_numbers_from_files_js_callbacks = (function playground$task1$core_test$sum_numbers_from_files_js_callbacks(){
return cljs.test.test_var.call(null,playground$task1$core_test$sum_numbers_from_files_js_callbacks.cljs$lang$var);
});
playground.task1.core_test.sum_numbers_from_files_js_callbacks.cljs$lang$test = (function (){
if(typeof playground.task1.core_test.t13790 !== 'undefined'){
} else {

/**
* @constructor
*/
playground.task1.core_test.t13790 = (function (meta13791){
this.meta13791 = meta13791;
this.cljs$lang$protocol_mask$partition0$ = 393217;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
playground.task1.core_test.t13790.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_13792,meta13791__$1){
var self__ = this;
var _13792__$1 = this;
return (new playground.task1.core_test.t13790(meta13791__$1));
});

playground.task1.core_test.t13790.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_13792){
var self__ = this;
var _13792__$1 = this;
return self__.meta13791;
});

playground.task1.core_test.t13790.prototype.cljs$test$IAsyncTest$ = true;

playground.task1.core_test.t13790.prototype.call = (function (self__,done){
var self__ = this;
var self____$1 = this;
var ___9958__auto__ = self____$1;
return playground.task1.core_test.test_implementation.call(null,done,require("./coffee/js_callback"));
});

playground.task1.core_test.t13790.prototype.apply = (function (self__,args13793){
var self__ = this;
var self____$1 = this;
return self____$1.call.apply(self____$1,[self____$1].concat(cljs.core.aclone.call(null,args13793)));
});

playground.task1.core_test.t13790.prototype.cljs$core$IFn$_invoke$arity$1 = (function (done){
var self__ = this;
var ___9958__auto__ = this;
return playground.task1.core_test.test_implementation.call(null,done,require("./coffee/js_callback"));
});

playground.task1.core_test.t13790.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"meta13791","meta13791",444456608,null)], null);
});

playground.task1.core_test.t13790.cljs$lang$type = true;

playground.task1.core_test.t13790.cljs$lang$ctorStr = "playground.task1.core-test/t13790";

playground.task1.core_test.t13790.cljs$lang$ctorPrWriter = (function (this__4910__auto__,writer__4911__auto__,opt__4912__auto__){
return cljs.core._write.call(null,writer__4911__auto__,"playground.task1.core-test/t13790");
});

playground.task1.core_test.__GT_t13790 = (function playground$task1$core_test$__GT_t13790(meta13791){
return (new playground.task1.core_test.t13790(meta13791));
});

}

return (new playground.task1.core_test.t13790(null));
});

playground.task1.core_test.sum_numbers_from_files_js_callbacks.cljs$lang$var = new cljs.core.Var(function(){return playground.task1.core_test.sum_numbers_from_files_js_callbacks;},new cljs.core.Symbol("playground.task1.core-test","sum-numbers-from-files-js-callbacks","playground.task1.core-test/sum-numbers-from-files-js-callbacks",1723196285,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"playground.task1.core-test","playground.task1.core-test",-348470523,null),new cljs.core.Symbol(null,"sum-numbers-from-files-js-callbacks","sum-numbers-from-files-js-callbacks",-6624342,null),"/home/user/projects/imperative-nodejs/playground/test/playground/task1/core_test.cljs",45,1,53,53,cljs.core.List.EMPTY,null,(cljs.core.truth_(playground.task1.core_test.sum_numbers_from_files_js_callbacks)?playground.task1.core_test.sum_numbers_from_files_js_callbacks.cljs$lang$test:null)]));
playground.task1.core_test.sum_numbers_from_files_js_promises = (function playground$task1$core_test$sum_numbers_from_files_js_promises(){
return cljs.test.test_var.call(null,playground$task1$core_test$sum_numbers_from_files_js_promises.cljs$lang$var);
});
playground.task1.core_test.sum_numbers_from_files_js_promises.cljs$lang$test = (function (){
if(typeof playground.task1.core_test.t13794 !== 'undefined'){
} else {

/**
* @constructor
*/
playground.task1.core_test.t13794 = (function (meta13795){
this.meta13795 = meta13795;
this.cljs$lang$protocol_mask$partition0$ = 393217;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
playground.task1.core_test.t13794.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_13796,meta13795__$1){
var self__ = this;
var _13796__$1 = this;
return (new playground.task1.core_test.t13794(meta13795__$1));
});

playground.task1.core_test.t13794.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_13796){
var self__ = this;
var _13796__$1 = this;
return self__.meta13795;
});

playground.task1.core_test.t13794.prototype.cljs$test$IAsyncTest$ = true;

playground.task1.core_test.t13794.prototype.call = (function (self__,done){
var self__ = this;
var self____$1 = this;
var ___9958__auto__ = self____$1;
return playground.task1.core_test.test_implementation.call(null,done,require("./coffee/js_promise"));
});

playground.task1.core_test.t13794.prototype.apply = (function (self__,args13797){
var self__ = this;
var self____$1 = this;
return self____$1.call.apply(self____$1,[self____$1].concat(cljs.core.aclone.call(null,args13797)));
});

playground.task1.core_test.t13794.prototype.cljs$core$IFn$_invoke$arity$1 = (function (done){
var self__ = this;
var ___9958__auto__ = this;
return playground.task1.core_test.test_implementation.call(null,done,require("./coffee/js_promise"));
});

playground.task1.core_test.t13794.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"meta13795","meta13795",-954338606,null)], null);
});

playground.task1.core_test.t13794.cljs$lang$type = true;

playground.task1.core_test.t13794.cljs$lang$ctorStr = "playground.task1.core-test/t13794";

playground.task1.core_test.t13794.cljs$lang$ctorPrWriter = (function (this__4910__auto__,writer__4911__auto__,opt__4912__auto__){
return cljs.core._write.call(null,writer__4911__auto__,"playground.task1.core-test/t13794");
});

playground.task1.core_test.__GT_t13794 = (function playground$task1$core_test$__GT_t13794(meta13795){
return (new playground.task1.core_test.t13794(meta13795));
});

}

return (new playground.task1.core_test.t13794(null));
});

playground.task1.core_test.sum_numbers_from_files_js_promises.cljs$lang$var = new cljs.core.Var(function(){return playground.task1.core_test.sum_numbers_from_files_js_promises;},new cljs.core.Symbol("playground.task1.core-test","sum-numbers-from-files-js-promises","playground.task1.core-test/sum-numbers-from-files-js-promises",-2083430402,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"playground.task1.core-test","playground.task1.core-test",-348470523,null),new cljs.core.Symbol(null,"sum-numbers-from-files-js-promises","sum-numbers-from-files-js-promises",137914259,null),"/home/user/projects/imperative-nodejs/playground/test/playground/task1/core_test.cljs",44,1,58,58,cljs.core.List.EMPTY,null,(cljs.core.truth_(playground.task1.core_test.sum_numbers_from_files_js_promises)?playground.task1.core_test.sum_numbers_from_files_js_promises.cljs$lang$test:null)]));

//# sourceMappingURL=core_test.js.map