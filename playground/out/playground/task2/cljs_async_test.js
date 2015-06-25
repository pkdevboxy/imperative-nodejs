// Compiled by ClojureScript 0.0-3308 {:target :nodejs}
goog.provide('playground.task2.cljs_async_test');
goog.require('cljs.core');
goog.require('cljs.test');
goog.require('playground.task2.test_utils');
goog.require('playground.task2.cljs_async');
playground.task2.cljs_async_test.cljs_test_each_fixtures = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [playground.task2.test_utils.mock_readFile_fixture], null);
playground.task2.cljs_async_test.traverse_ok = (function playground$task2$cljs_async_test$traverse_ok(){
return cljs.test.test_var.call(null,playground$task2$cljs_async_test$traverse_ok.cljs$lang$var);
});
playground.task2.cljs_async_test.traverse_ok.cljs$lang$test = (function (){
if(typeof playground.task2.cljs_async_test.t10241 !== 'undefined'){
} else {

/**
* @constructor
*/
playground.task2.cljs_async_test.t10241 = (function (meta10242){
this.meta10242 = meta10242;
this.cljs$lang$protocol_mask$partition0$ = 393217;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
playground.task2.cljs_async_test.t10241.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_10243,meta10242__$1){
var self__ = this;
var _10243__$1 = this;
return (new playground.task2.cljs_async_test.t10241(meta10242__$1));
});

playground.task2.cljs_async_test.t10241.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_10243){
var self__ = this;
var _10243__$1 = this;
return self__.meta10242;
});

playground.task2.cljs_async_test.t10241.prototype.cljs$test$IAsyncTest$ = true;

playground.task2.cljs_async_test.t10241.prototype.call = (function (self__,done){
var self__ = this;
var self____$1 = this;
var ___9958__auto__ = self____$1;
var c__7383__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__7383__auto__,___9958__auto__,self____$1){
return (function (){
var f__7384__auto__ = (function (){var switch__7321__auto__ = ((function (c__7383__auto__,___9958__auto__,self____$1){
return (function (state_10290){
var state_val_10291 = (state_10290[(1)]);
if((state_val_10291 === (1))){
var inst_10245 = playground.task2.cljs_async.traverse.call(null,(1));
var state_10290__$1 = state_10290;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_10290__$1,(2),inst_10245);
} else {
if((state_val_10291 === (2))){
var inst_10247 = (state_10290[(2)]);
var inst_10248 = playground.node_lib.errors.throw_error.call(null,inst_10247);
var state_10290__$1 = (function (){var statearr_10292 = state_10290;
(statearr_10292[(7)] = inst_10248);

return statearr_10292;
})();
var statearr_10293_10375 = state_10290__$1;
(statearr_10293_10375[(2)] = null);

(statearr_10293_10375[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10291 === (3))){
var inst_10287 = (state_10290[(2)]);
var inst_10288 = done.call(null);
var state_10290__$1 = (function (){var statearr_10294 = state_10290;
(statearr_10294[(8)] = inst_10287);

return statearr_10294;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_10290__$1,inst_10288);
} else {
if((state_val_10291 === (4))){
var inst_10249 = (state_10290[(2)]);
var inst_10250 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_10251 = cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),new cljs.core.Symbol(null,"path","path",1452340359,null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(2),(3),(4)], null));
var inst_10252 = [new cljs.core.Keyword(null,"error","error",-978969032),inst_10251,inst_10249,null];
var inst_10253 = cljs.core.PersistentHashMap.fromArrays(inst_10250,inst_10252);
var inst_10254 = cljs.test.do_report.call(null,inst_10253);
var state_10290__$1 = state_10290;
var statearr_10295_10376 = state_10290__$1;
(statearr_10295_10376[(2)] = inst_10254);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_10290__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10291 === (5))){
var inst_10263 = (state_10290[(9)]);
var inst_10264 = (state_10290[(10)]);
var inst_10248 = (state_10290[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_10290,(4),new cljs.core.Keyword(null,"default","default",-1987822328),null,(3));
var inst_10258 = cljs.core.List.EMPTY;
var inst_10259 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_10260 = [(1),(2),(3),(4)];
var inst_10261 = (new cljs.core.PersistentVector(null,4,(5),inst_10259,inst_10260,null));
var inst_10262 = cljs.core._conj.call(null,inst_10258,inst_10261);
var inst_10263__$1 = cljs.core._conj.call(null,inst_10262,inst_10248);
var inst_10264__$1 = cljs.core.apply.call(null,cljs.core._EQ_,inst_10263__$1);
var state_10290__$1 = (function (){var statearr_10296 = state_10290;
(statearr_10296[(9)] = inst_10263__$1);

(statearr_10296[(10)] = inst_10264__$1);

return statearr_10296;
})();
if(cljs.core.truth_(inst_10264__$1)){
var statearr_10297_10377 = state_10290__$1;
(statearr_10297_10377[(1)] = (6));

} else {
var statearr_10298_10378 = state_10290__$1;
(statearr_10298_10378[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10291 === (6))){
var inst_10263 = (state_10290[(9)]);
var inst_10266 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_10267 = cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),new cljs.core.Symbol(null,"path","path",1452340359,null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(2),(3),(4)], null));
var inst_10268 = cljs.core.cons.call(null,cljs.core._EQ_,inst_10263);
var inst_10269 = [new cljs.core.Keyword(null,"pass","pass",1574159993),inst_10267,inst_10268,null];
var inst_10270 = cljs.core.PersistentHashMap.fromArrays(inst_10266,inst_10269);
var inst_10271 = cljs.test.do_report.call(null,inst_10270);
var state_10290__$1 = state_10290;
var statearr_10299_10379 = state_10290__$1;
(statearr_10299_10379[(2)] = inst_10271);

(statearr_10299_10379[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10291 === (7))){
var inst_10263 = (state_10290[(9)]);
var inst_10273 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_10274 = cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),new cljs.core.Symbol(null,"path","path",1452340359,null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(2),(3),(4)], null));
var inst_10275 = cljs.core.List.EMPTY;
var inst_10276 = new cljs.core.Symbol(null,"=","=",-1501502141,null);
var inst_10277 = cljs.core.cons.call(null,inst_10276,inst_10263);
var inst_10278 = cljs.core._conj.call(null,inst_10275,inst_10277);
var inst_10279 = new cljs.core.Symbol(null,"not","not",1044554643,null);
var inst_10280 = cljs.core._conj.call(null,inst_10278,inst_10279);
var inst_10281 = [new cljs.core.Keyword(null,"fail","fail",1706214930),inst_10274,inst_10280,null];
var inst_10282 = cljs.core.PersistentHashMap.fromArrays(inst_10273,inst_10281);
var inst_10283 = cljs.test.do_report.call(null,inst_10282);
var state_10290__$1 = state_10290;
var statearr_10300_10380 = state_10290__$1;
(statearr_10300_10380[(2)] = inst_10283);

(statearr_10300_10380[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10291 === (8))){
var inst_10264 = (state_10290[(10)]);
var inst_10285 = (state_10290[(2)]);
var state_10290__$1 = (function (){var statearr_10301 = state_10290;
(statearr_10301[(11)] = inst_10285);

return statearr_10301;
})();
var statearr_10302_10381 = state_10290__$1;
(statearr_10302_10381[(2)] = inst_10264);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_10290__$1);

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
});})(c__7383__auto__,___9958__auto__,self____$1))
;
return ((function (switch__7321__auto__,c__7383__auto__,___9958__auto__,self____$1){
return (function() {
var playground$task2$cljs_async_test$state_machine__7322__auto__ = null;
var playground$task2$cljs_async_test$state_machine__7322__auto____0 = (function (){
var statearr_10306 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_10306[(0)] = playground$task2$cljs_async_test$state_machine__7322__auto__);

(statearr_10306[(1)] = (1));

return statearr_10306;
});
var playground$task2$cljs_async_test$state_machine__7322__auto____1 = (function (state_10290){
while(true){
var ret_value__7323__auto__ = (function (){try{while(true){
var result__7324__auto__ = switch__7321__auto__.call(null,state_10290);
if(cljs.core.keyword_identical_QMARK_.call(null,result__7324__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__7324__auto__;
}
break;
}
}catch (e10307){if((e10307 instanceof Object)){
var ex__7325__auto__ = e10307;
var statearr_10308_10382 = state_10290;
(statearr_10308_10382[(5)] = ex__7325__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_10290);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e10307;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__7323__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__10383 = state_10290;
state_10290 = G__10383;
continue;
} else {
return ret_value__7323__auto__;
}
break;
}
});
playground$task2$cljs_async_test$state_machine__7322__auto__ = function(state_10290){
switch(arguments.length){
case 0:
return playground$task2$cljs_async_test$state_machine__7322__auto____0.call(this);
case 1:
return playground$task2$cljs_async_test$state_machine__7322__auto____1.call(this,state_10290);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
playground$task2$cljs_async_test$state_machine__7322__auto__.cljs$core$IFn$_invoke$arity$0 = playground$task2$cljs_async_test$state_machine__7322__auto____0;
playground$task2$cljs_async_test$state_machine__7322__auto__.cljs$core$IFn$_invoke$arity$1 = playground$task2$cljs_async_test$state_machine__7322__auto____1;
return playground$task2$cljs_async_test$state_machine__7322__auto__;
})()
;})(switch__7321__auto__,c__7383__auto__,___9958__auto__,self____$1))
})();
var state__7385__auto__ = (function (){var statearr_10309 = f__7384__auto__.call(null);
(statearr_10309[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7383__auto__);

return statearr_10309;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__7385__auto__);
});})(c__7383__auto__,___9958__auto__,self____$1))
);

return c__7383__auto__;
});

playground.task2.cljs_async_test.t10241.prototype.apply = (function (self__,args10244){
var self__ = this;
var self____$1 = this;
return self____$1.call.apply(self____$1,[self____$1].concat(cljs.core.aclone.call(null,args10244)));
});

playground.task2.cljs_async_test.t10241.prototype.cljs$core$IFn$_invoke$arity$1 = (function (done){
var self__ = this;
var ___9958__auto__ = this;
var c__7383__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__7383__auto__,___9958__auto__){
return (function (){
var f__7384__auto__ = (function (){var switch__7321__auto__ = ((function (c__7383__auto__,___9958__auto__){
return (function (state_10355){
var state_val_10356 = (state_10355[(1)]);
if((state_val_10356 === (1))){
var inst_10310 = playground.task2.cljs_async.traverse.call(null,(1));
var state_10355__$1 = state_10355;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_10355__$1,(2),inst_10310);
} else {
if((state_val_10356 === (2))){
var inst_10312 = (state_10355[(2)]);
var inst_10313 = playground.node_lib.errors.throw_error.call(null,inst_10312);
var state_10355__$1 = (function (){var statearr_10357 = state_10355;
(statearr_10357[(7)] = inst_10313);

return statearr_10357;
})();
var statearr_10358_10384 = state_10355__$1;
(statearr_10358_10384[(2)] = null);

(statearr_10358_10384[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10356 === (3))){
var inst_10352 = (state_10355[(2)]);
var inst_10353 = done.call(null);
var state_10355__$1 = (function (){var statearr_10359 = state_10355;
(statearr_10359[(8)] = inst_10352);

return statearr_10359;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_10355__$1,inst_10353);
} else {
if((state_val_10356 === (4))){
var inst_10314 = (state_10355[(2)]);
var inst_10315 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_10316 = cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),new cljs.core.Symbol(null,"path","path",1452340359,null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(2),(3),(4)], null));
var inst_10317 = [new cljs.core.Keyword(null,"error","error",-978969032),inst_10316,inst_10314,null];
var inst_10318 = cljs.core.PersistentHashMap.fromArrays(inst_10315,inst_10317);
var inst_10319 = cljs.test.do_report.call(null,inst_10318);
var state_10355__$1 = state_10355;
var statearr_10360_10385 = state_10355__$1;
(statearr_10360_10385[(2)] = inst_10319);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_10355__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10356 === (5))){
var inst_10329 = (state_10355[(9)]);
var inst_10328 = (state_10355[(10)]);
var inst_10313 = (state_10355[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_10355,(4),new cljs.core.Keyword(null,"default","default",-1987822328),null,(3));
var inst_10323 = cljs.core.List.EMPTY;
var inst_10324 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_10325 = [(1),(2),(3),(4)];
var inst_10326 = (new cljs.core.PersistentVector(null,4,(5),inst_10324,inst_10325,null));
var inst_10327 = cljs.core._conj.call(null,inst_10323,inst_10326);
var inst_10328__$1 = cljs.core._conj.call(null,inst_10327,inst_10313);
var inst_10329__$1 = cljs.core.apply.call(null,cljs.core._EQ_,inst_10328__$1);
var state_10355__$1 = (function (){var statearr_10361 = state_10355;
(statearr_10361[(9)] = inst_10329__$1);

(statearr_10361[(10)] = inst_10328__$1);

return statearr_10361;
})();
if(cljs.core.truth_(inst_10329__$1)){
var statearr_10362_10386 = state_10355__$1;
(statearr_10362_10386[(1)] = (6));

} else {
var statearr_10363_10387 = state_10355__$1;
(statearr_10363_10387[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10356 === (6))){
var inst_10328 = (state_10355[(10)]);
var inst_10331 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_10332 = cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),new cljs.core.Symbol(null,"path","path",1452340359,null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(2),(3),(4)], null));
var inst_10333 = cljs.core.cons.call(null,cljs.core._EQ_,inst_10328);
var inst_10334 = [new cljs.core.Keyword(null,"pass","pass",1574159993),inst_10332,inst_10333,null];
var inst_10335 = cljs.core.PersistentHashMap.fromArrays(inst_10331,inst_10334);
var inst_10336 = cljs.test.do_report.call(null,inst_10335);
var state_10355__$1 = state_10355;
var statearr_10364_10388 = state_10355__$1;
(statearr_10364_10388[(2)] = inst_10336);

(statearr_10364_10388[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10356 === (7))){
var inst_10328 = (state_10355[(10)]);
var inst_10338 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_10339 = cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),new cljs.core.Symbol(null,"path","path",1452340359,null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(2),(3),(4)], null));
var inst_10340 = cljs.core.List.EMPTY;
var inst_10341 = new cljs.core.Symbol(null,"=","=",-1501502141,null);
var inst_10342 = cljs.core.cons.call(null,inst_10341,inst_10328);
var inst_10343 = cljs.core._conj.call(null,inst_10340,inst_10342);
var inst_10344 = new cljs.core.Symbol(null,"not","not",1044554643,null);
var inst_10345 = cljs.core._conj.call(null,inst_10343,inst_10344);
var inst_10346 = [new cljs.core.Keyword(null,"fail","fail",1706214930),inst_10339,inst_10345,null];
var inst_10347 = cljs.core.PersistentHashMap.fromArrays(inst_10338,inst_10346);
var inst_10348 = cljs.test.do_report.call(null,inst_10347);
var state_10355__$1 = state_10355;
var statearr_10365_10389 = state_10355__$1;
(statearr_10365_10389[(2)] = inst_10348);

(statearr_10365_10389[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10356 === (8))){
var inst_10329 = (state_10355[(9)]);
var inst_10350 = (state_10355[(2)]);
var state_10355__$1 = (function (){var statearr_10366 = state_10355;
(statearr_10366[(11)] = inst_10350);

return statearr_10366;
})();
var statearr_10367_10390 = state_10355__$1;
(statearr_10367_10390[(2)] = inst_10329);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_10355__$1);

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
});})(c__7383__auto__,___9958__auto__))
;
return ((function (switch__7321__auto__,c__7383__auto__,___9958__auto__){
return (function() {
var playground$task2$cljs_async_test$state_machine__7322__auto__ = null;
var playground$task2$cljs_async_test$state_machine__7322__auto____0 = (function (){
var statearr_10371 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_10371[(0)] = playground$task2$cljs_async_test$state_machine__7322__auto__);

(statearr_10371[(1)] = (1));

return statearr_10371;
});
var playground$task2$cljs_async_test$state_machine__7322__auto____1 = (function (state_10355){
while(true){
var ret_value__7323__auto__ = (function (){try{while(true){
var result__7324__auto__ = switch__7321__auto__.call(null,state_10355);
if(cljs.core.keyword_identical_QMARK_.call(null,result__7324__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__7324__auto__;
}
break;
}
}catch (e10372){if((e10372 instanceof Object)){
var ex__7325__auto__ = e10372;
var statearr_10373_10391 = state_10355;
(statearr_10373_10391[(5)] = ex__7325__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_10355);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e10372;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__7323__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__10392 = state_10355;
state_10355 = G__10392;
continue;
} else {
return ret_value__7323__auto__;
}
break;
}
});
playground$task2$cljs_async_test$state_machine__7322__auto__ = function(state_10355){
switch(arguments.length){
case 0:
return playground$task2$cljs_async_test$state_machine__7322__auto____0.call(this);
case 1:
return playground$task2$cljs_async_test$state_machine__7322__auto____1.call(this,state_10355);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
playground$task2$cljs_async_test$state_machine__7322__auto__.cljs$core$IFn$_invoke$arity$0 = playground$task2$cljs_async_test$state_machine__7322__auto____0;
playground$task2$cljs_async_test$state_machine__7322__auto__.cljs$core$IFn$_invoke$arity$1 = playground$task2$cljs_async_test$state_machine__7322__auto____1;
return playground$task2$cljs_async_test$state_machine__7322__auto__;
})()
;})(switch__7321__auto__,c__7383__auto__,___9958__auto__))
})();
var state__7385__auto__ = (function (){var statearr_10374 = f__7384__auto__.call(null);
(statearr_10374[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7383__auto__);

return statearr_10374;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__7385__auto__);
});})(c__7383__auto__,___9958__auto__))
);

return c__7383__auto__;
});

playground.task2.cljs_async_test.t10241.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"meta10242","meta10242",-1868121208,null)], null);
});

playground.task2.cljs_async_test.t10241.cljs$lang$type = true;

playground.task2.cljs_async_test.t10241.cljs$lang$ctorStr = "playground.task2.cljs-async-test/t10241";

playground.task2.cljs_async_test.t10241.cljs$lang$ctorPrWriter = (function (this__4910__auto__,writer__4911__auto__,opt__4912__auto__){
return cljs.core._write.call(null,writer__4911__auto__,"playground.task2.cljs-async-test/t10241");
});

playground.task2.cljs_async_test.__GT_t10241 = (function playground$task2$cljs_async_test$__GT_t10241(meta10242){
return (new playground.task2.cljs_async_test.t10241(meta10242));
});

}

return (new playground.task2.cljs_async_test.t10241(null));
});

playground.task2.cljs_async_test.traverse_ok.cljs$lang$var = new cljs.core.Var(function(){return playground.task2.cljs_async_test.traverse_ok;},new cljs.core.Symbol("playground.task2.cljs-async-test","traverse-ok","playground.task2.cljs-async-test/traverse-ok",-1487582895,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"playground.task2.cljs-async-test","playground.task2.cljs-async-test",1755050032,null),new cljs.core.Symbol(null,"traverse-ok","traverse-ok",-12732613,null),"test/playground/task2/cljs_async_test.cljs",21,1,12,12,cljs.core.List.EMPTY,null,(cljs.core.truth_(playground.task2.cljs_async_test.traverse_ok)?playground.task2.cljs_async_test.traverse_ok.cljs$lang$test:null)]));
playground.task2.cljs_async_test.traverse_no_file = (function playground$task2$cljs_async_test$traverse_no_file(){
return cljs.test.test_var.call(null,playground$task2$cljs_async_test$traverse_no_file.cljs$lang$var);
});
playground.task2.cljs_async_test.traverse_no_file.cljs$lang$test = (function (){
if(typeof playground.task2.cljs_async_test.t10393 !== 'undefined'){
} else {

/**
* @constructor
*/
playground.task2.cljs_async_test.t10393 = (function (meta10394){
this.meta10394 = meta10394;
this.cljs$lang$protocol_mask$partition0$ = 393217;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
playground.task2.cljs_async_test.t10393.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_10395,meta10394__$1){
var self__ = this;
var _10395__$1 = this;
return (new playground.task2.cljs_async_test.t10393(meta10394__$1));
});

playground.task2.cljs_async_test.t10393.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_10395){
var self__ = this;
var _10395__$1 = this;
return self__.meta10394;
});

playground.task2.cljs_async_test.t10393.prototype.cljs$test$IAsyncTest$ = true;

playground.task2.cljs_async_test.t10393.prototype.call = (function (self__,done){
var self__ = this;
var self____$1 = this;
var ___9958__auto__ = self____$1;
var c__7383__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__7383__auto__,___9958__auto__,self____$1){
return (function (){
var f__7384__auto__ = (function (){var switch__7321__auto__ = ((function (c__7383__auto__,___9958__auto__,self____$1){
return (function (state_10430){
var state_val_10431 = (state_10430[(1)]);
if((state_val_10431 === (1))){
var state_10430__$1 = state_10430;
var statearr_10432_10499 = state_10430__$1;
(statearr_10432_10499[(2)] = null);

(statearr_10432_10499[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10431 === (2))){
var inst_10427 = (state_10430[(2)]);
var inst_10428 = done.call(null);
var state_10430__$1 = (function (){var statearr_10433 = state_10430;
(statearr_10433[(7)] = inst_10427);

return statearr_10433;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_10430__$1,inst_10428);
} else {
if((state_val_10431 === (3))){
var inst_10397 = (state_10430[(2)]);
var inst_10398 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_10399 = cljs.core.list(new cljs.core.Symbol(null,"thrown?","thrown?",839971709,null),new cljs.core.Symbol("js","Error","js/Error",-1692659266,null),cljs.core.list(new cljs.core.Symbol(null,"<?","<?",-1929864530,null),cljs.core.list(new cljs.core.Symbol(null,"traverse","traverse",1337839862,null),(92))));
var inst_10400 = [new cljs.core.Keyword(null,"error","error",-978969032),inst_10399,inst_10397,null];
var inst_10401 = cljs.core.PersistentHashMap.fromArrays(inst_10398,inst_10400);
var inst_10402 = cljs.test.do_report.call(null,inst_10401);
var state_10430__$1 = state_10430;
var statearr_10434_10500 = state_10430__$1;
(statearr_10434_10500[(2)] = inst_10402);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_10430__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10431 === (4))){
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_10430,(3),new cljs.core.Keyword(null,"default","default",-1987822328),null,(2));
var state_10430__$1 = state_10430;
var statearr_10435_10501 = state_10430__$1;
(statearr_10435_10501[(2)] = null);

(statearr_10435_10501[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10431 === (5))){
var inst_10425 = (state_10430[(2)]);
var state_10430__$1 = state_10430;
var statearr_10436_10502 = state_10430__$1;
(statearr_10436_10502[(2)] = inst_10425);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_10430__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10431 === (6))){
var inst_10406 = (state_10430[(2)]);
var inst_10407 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_10408 = cljs.core.list(new cljs.core.Symbol(null,"thrown?","thrown?",839971709,null),new cljs.core.Symbol("js","Error","js/Error",-1692659266,null),cljs.core.list(new cljs.core.Symbol(null,"<?","<?",-1929864530,null),cljs.core.list(new cljs.core.Symbol(null,"traverse","traverse",1337839862,null),(92))));
var inst_10409 = [new cljs.core.Keyword(null,"pass","pass",1574159993),inst_10408,inst_10406,null];
var inst_10410 = cljs.core.PersistentHashMap.fromArrays(inst_10407,inst_10409);
var inst_10411 = cljs.test.do_report.call(null,inst_10410);
var state_10430__$1 = (function (){var statearr_10437 = state_10430;
(statearr_10437[(8)] = inst_10411);

return statearr_10437;
})();
var statearr_10438_10503 = state_10430__$1;
(statearr_10438_10503[(2)] = inst_10406);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_10430__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10431 === (7))){
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_10430,(6),Error,null,(5));
var inst_10415 = playground.task2.cljs_async.traverse.call(null,(92));
var state_10430__$1 = state_10430;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_10430__$1,(8),inst_10415);
} else {
if((state_val_10431 === (8))){
var inst_10417 = (state_10430[(2)]);
var inst_10418 = playground.node_lib.errors.throw_error.call(null,inst_10417);
var inst_10419 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_10420 = cljs.core.list(new cljs.core.Symbol(null,"thrown?","thrown?",839971709,null),new cljs.core.Symbol("js","Error","js/Error",-1692659266,null),cljs.core.list(new cljs.core.Symbol(null,"<?","<?",-1929864530,null),cljs.core.list(new cljs.core.Symbol(null,"traverse","traverse",1337839862,null),(92))));
var inst_10421 = [new cljs.core.Keyword(null,"fail","fail",1706214930),inst_10420,null,null];
var inst_10422 = cljs.core.PersistentHashMap.fromArrays(inst_10419,inst_10421);
var inst_10423 = cljs.test.do_report.call(null,inst_10422);
var state_10430__$1 = (function (){var statearr_10439 = state_10430;
(statearr_10439[(9)] = inst_10418);

return statearr_10439;
})();
var statearr_10440_10504 = state_10430__$1;
(statearr_10440_10504[(2)] = inst_10423);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_10430__$1);

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
});})(c__7383__auto__,___9958__auto__,self____$1))
;
return ((function (switch__7321__auto__,c__7383__auto__,___9958__auto__,self____$1){
return (function() {
var playground$task2$cljs_async_test$state_machine__7322__auto__ = null;
var playground$task2$cljs_async_test$state_machine__7322__auto____0 = (function (){
var statearr_10444 = [null,null,null,null,null,null,null,null,null,null];
(statearr_10444[(0)] = playground$task2$cljs_async_test$state_machine__7322__auto__);

(statearr_10444[(1)] = (1));

return statearr_10444;
});
var playground$task2$cljs_async_test$state_machine__7322__auto____1 = (function (state_10430){
while(true){
var ret_value__7323__auto__ = (function (){try{while(true){
var result__7324__auto__ = switch__7321__auto__.call(null,state_10430);
if(cljs.core.keyword_identical_QMARK_.call(null,result__7324__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__7324__auto__;
}
break;
}
}catch (e10445){if((e10445 instanceof Object)){
var ex__7325__auto__ = e10445;
var statearr_10446_10505 = state_10430;
(statearr_10446_10505[(5)] = ex__7325__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_10430);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e10445;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__7323__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__10506 = state_10430;
state_10430 = G__10506;
continue;
} else {
return ret_value__7323__auto__;
}
break;
}
});
playground$task2$cljs_async_test$state_machine__7322__auto__ = function(state_10430){
switch(arguments.length){
case 0:
return playground$task2$cljs_async_test$state_machine__7322__auto____0.call(this);
case 1:
return playground$task2$cljs_async_test$state_machine__7322__auto____1.call(this,state_10430);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
playground$task2$cljs_async_test$state_machine__7322__auto__.cljs$core$IFn$_invoke$arity$0 = playground$task2$cljs_async_test$state_machine__7322__auto____0;
playground$task2$cljs_async_test$state_machine__7322__auto__.cljs$core$IFn$_invoke$arity$1 = playground$task2$cljs_async_test$state_machine__7322__auto____1;
return playground$task2$cljs_async_test$state_machine__7322__auto__;
})()
;})(switch__7321__auto__,c__7383__auto__,___9958__auto__,self____$1))
})();
var state__7385__auto__ = (function (){var statearr_10447 = f__7384__auto__.call(null);
(statearr_10447[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7383__auto__);

return statearr_10447;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__7385__auto__);
});})(c__7383__auto__,___9958__auto__,self____$1))
);

return c__7383__auto__;
});

playground.task2.cljs_async_test.t10393.prototype.apply = (function (self__,args10396){
var self__ = this;
var self____$1 = this;
return self____$1.call.apply(self____$1,[self____$1].concat(cljs.core.aclone.call(null,args10396)));
});

playground.task2.cljs_async_test.t10393.prototype.cljs$core$IFn$_invoke$arity$1 = (function (done){
var self__ = this;
var ___9958__auto__ = this;
var c__7383__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__7383__auto__,___9958__auto__){
return (function (){
var f__7384__auto__ = (function (){var switch__7321__auto__ = ((function (c__7383__auto__,___9958__auto__){
return (function (state_10481){
var state_val_10482 = (state_10481[(1)]);
if((state_val_10482 === (1))){
var state_10481__$1 = state_10481;
var statearr_10483_10507 = state_10481__$1;
(statearr_10483_10507[(2)] = null);

(statearr_10483_10507[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10482 === (2))){
var inst_10478 = (state_10481[(2)]);
var inst_10479 = done.call(null);
var state_10481__$1 = (function (){var statearr_10484 = state_10481;
(statearr_10484[(7)] = inst_10478);

return statearr_10484;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_10481__$1,inst_10479);
} else {
if((state_val_10482 === (3))){
var inst_10448 = (state_10481[(2)]);
var inst_10449 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_10450 = cljs.core.list(new cljs.core.Symbol(null,"thrown?","thrown?",839971709,null),new cljs.core.Symbol("js","Error","js/Error",-1692659266,null),cljs.core.list(new cljs.core.Symbol(null,"<?","<?",-1929864530,null),cljs.core.list(new cljs.core.Symbol(null,"traverse","traverse",1337839862,null),(92))));
var inst_10451 = [new cljs.core.Keyword(null,"error","error",-978969032),inst_10450,inst_10448,null];
var inst_10452 = cljs.core.PersistentHashMap.fromArrays(inst_10449,inst_10451);
var inst_10453 = cljs.test.do_report.call(null,inst_10452);
var state_10481__$1 = state_10481;
var statearr_10485_10508 = state_10481__$1;
(statearr_10485_10508[(2)] = inst_10453);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_10481__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10482 === (4))){
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_10481,(3),new cljs.core.Keyword(null,"default","default",-1987822328),null,(2));
var state_10481__$1 = state_10481;
var statearr_10486_10509 = state_10481__$1;
(statearr_10486_10509[(2)] = null);

(statearr_10486_10509[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10482 === (5))){
var inst_10476 = (state_10481[(2)]);
var state_10481__$1 = state_10481;
var statearr_10487_10510 = state_10481__$1;
(statearr_10487_10510[(2)] = inst_10476);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_10481__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10482 === (6))){
var inst_10457 = (state_10481[(2)]);
var inst_10458 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_10459 = cljs.core.list(new cljs.core.Symbol(null,"thrown?","thrown?",839971709,null),new cljs.core.Symbol("js","Error","js/Error",-1692659266,null),cljs.core.list(new cljs.core.Symbol(null,"<?","<?",-1929864530,null),cljs.core.list(new cljs.core.Symbol(null,"traverse","traverse",1337839862,null),(92))));
var inst_10460 = [new cljs.core.Keyword(null,"pass","pass",1574159993),inst_10459,inst_10457,null];
var inst_10461 = cljs.core.PersistentHashMap.fromArrays(inst_10458,inst_10460);
var inst_10462 = cljs.test.do_report.call(null,inst_10461);
var state_10481__$1 = (function (){var statearr_10488 = state_10481;
(statearr_10488[(8)] = inst_10462);

return statearr_10488;
})();
var statearr_10489_10511 = state_10481__$1;
(statearr_10489_10511[(2)] = inst_10457);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_10481__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10482 === (7))){
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_10481,(6),Error,null,(5));
var inst_10466 = playground.task2.cljs_async.traverse.call(null,(92));
var state_10481__$1 = state_10481;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_10481__$1,(8),inst_10466);
} else {
if((state_val_10482 === (8))){
var inst_10468 = (state_10481[(2)]);
var inst_10469 = playground.node_lib.errors.throw_error.call(null,inst_10468);
var inst_10470 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_10471 = cljs.core.list(new cljs.core.Symbol(null,"thrown?","thrown?",839971709,null),new cljs.core.Symbol("js","Error","js/Error",-1692659266,null),cljs.core.list(new cljs.core.Symbol(null,"<?","<?",-1929864530,null),cljs.core.list(new cljs.core.Symbol(null,"traverse","traverse",1337839862,null),(92))));
var inst_10472 = [new cljs.core.Keyword(null,"fail","fail",1706214930),inst_10471,null,null];
var inst_10473 = cljs.core.PersistentHashMap.fromArrays(inst_10470,inst_10472);
var inst_10474 = cljs.test.do_report.call(null,inst_10473);
var state_10481__$1 = (function (){var statearr_10490 = state_10481;
(statearr_10490[(9)] = inst_10469);

return statearr_10490;
})();
var statearr_10491_10512 = state_10481__$1;
(statearr_10491_10512[(2)] = inst_10474);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_10481__$1);

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
});})(c__7383__auto__,___9958__auto__))
;
return ((function (switch__7321__auto__,c__7383__auto__,___9958__auto__){
return (function() {
var playground$task2$cljs_async_test$state_machine__7322__auto__ = null;
var playground$task2$cljs_async_test$state_machine__7322__auto____0 = (function (){
var statearr_10495 = [null,null,null,null,null,null,null,null,null,null];
(statearr_10495[(0)] = playground$task2$cljs_async_test$state_machine__7322__auto__);

(statearr_10495[(1)] = (1));

return statearr_10495;
});
var playground$task2$cljs_async_test$state_machine__7322__auto____1 = (function (state_10481){
while(true){
var ret_value__7323__auto__ = (function (){try{while(true){
var result__7324__auto__ = switch__7321__auto__.call(null,state_10481);
if(cljs.core.keyword_identical_QMARK_.call(null,result__7324__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__7324__auto__;
}
break;
}
}catch (e10496){if((e10496 instanceof Object)){
var ex__7325__auto__ = e10496;
var statearr_10497_10513 = state_10481;
(statearr_10497_10513[(5)] = ex__7325__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_10481);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e10496;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__7323__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__10514 = state_10481;
state_10481 = G__10514;
continue;
} else {
return ret_value__7323__auto__;
}
break;
}
});
playground$task2$cljs_async_test$state_machine__7322__auto__ = function(state_10481){
switch(arguments.length){
case 0:
return playground$task2$cljs_async_test$state_machine__7322__auto____0.call(this);
case 1:
return playground$task2$cljs_async_test$state_machine__7322__auto____1.call(this,state_10481);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
playground$task2$cljs_async_test$state_machine__7322__auto__.cljs$core$IFn$_invoke$arity$0 = playground$task2$cljs_async_test$state_machine__7322__auto____0;
playground$task2$cljs_async_test$state_machine__7322__auto__.cljs$core$IFn$_invoke$arity$1 = playground$task2$cljs_async_test$state_machine__7322__auto____1;
return playground$task2$cljs_async_test$state_machine__7322__auto__;
})()
;})(switch__7321__auto__,c__7383__auto__,___9958__auto__))
})();
var state__7385__auto__ = (function (){var statearr_10498 = f__7384__auto__.call(null);
(statearr_10498[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7383__auto__);

return statearr_10498;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__7385__auto__);
});})(c__7383__auto__,___9958__auto__))
);

return c__7383__auto__;
});

playground.task2.cljs_async_test.t10393.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"meta10394","meta10394",-1625942933,null)], null);
});

playground.task2.cljs_async_test.t10393.cljs$lang$type = true;

playground.task2.cljs_async_test.t10393.cljs$lang$ctorStr = "playground.task2.cljs-async-test/t10393";

playground.task2.cljs_async_test.t10393.cljs$lang$ctorPrWriter = (function (this__4910__auto__,writer__4911__auto__,opt__4912__auto__){
return cljs.core._write.call(null,writer__4911__auto__,"playground.task2.cljs-async-test/t10393");
});

playground.task2.cljs_async_test.__GT_t10393 = (function playground$task2$cljs_async_test$__GT_t10393(meta10394){
return (new playground.task2.cljs_async_test.t10393(meta10394));
});

}

return (new playground.task2.cljs_async_test.t10393(null));
});

playground.task2.cljs_async_test.traverse_no_file.cljs$lang$var = new cljs.core.Var(function(){return playground.task2.cljs_async_test.traverse_no_file;},new cljs.core.Symbol("playground.task2.cljs-async-test","traverse-no-file","playground.task2.cljs-async-test/traverse-no-file",-671547071,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"playground.task2.cljs-async-test","playground.task2.cljs-async-test",1755050032,null),new cljs.core.Symbol(null,"traverse-no-file","traverse-no-file",1066418039,null),"test/playground/task2/cljs_async_test.cljs",26,1,20,20,cljs.core.List.EMPTY,null,(cljs.core.truth_(playground.task2.cljs_async_test.traverse_no_file)?playground.task2.cljs_async_test.traverse_no_file.cljs$lang$test:null)]));

//# sourceMappingURL=cljs_async_test.js.map