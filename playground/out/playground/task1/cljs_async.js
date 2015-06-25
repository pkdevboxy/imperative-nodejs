// Compiled by ClojureScript 0.0-3308 {:target :nodejs}
goog.provide('playground.task1.cljs_async');
goog.require('cljs.core');
goog.require('cljs.core.async');
goog.require('playground.task1.err');
playground.task1.cljs_async.fs = require("fs");
playground.task1.cljs_async.chan__GT_callback = (function playground$task1$cljs_async$chan__GT_callback(channel,callback){
var c__7383__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__7383__auto__){
return (function (){
var f__7384__auto__ = (function (){var switch__7321__auto__ = ((function (c__7383__auto__){
return (function (state_9581){
var state_val_9582 = (state_9581[(1)]);
if((state_val_9582 === (1))){
var state_9581__$1 = state_9581;
var statearr_9583_9593 = state_9581__$1;
(statearr_9583_9593[(2)] = null);

(statearr_9583_9593[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9582 === (2))){
var inst_9579 = (state_9581[(2)]);
var state_9581__$1 = state_9581;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_9581__$1,inst_9579);
} else {
if((state_val_9582 === (3))){
var inst_9569 = (state_9581[(2)]);
var inst_9570 = callback.call(null,inst_9569);
var state_9581__$1 = state_9581;
var statearr_9584_9594 = state_9581__$1;
(statearr_9584_9594[(2)] = inst_9570);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_9581__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9582 === (4))){
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_9581,(3),Error,null,(2));
var state_9581__$1 = state_9581;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_9581__$1,(5),channel);
} else {
if((state_val_9582 === (5))){
var inst_9575 = (state_9581[(2)]);
var inst_9576 = playground.task1.err.throw_err.call(null,inst_9575);
var inst_9577 = callback.call(null,null,inst_9576);
var state_9581__$1 = state_9581;
var statearr_9585_9595 = state_9581__$1;
(statearr_9585_9595[(2)] = inst_9577);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_9581__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
});})(c__7383__auto__))
;
return ((function (switch__7321__auto__,c__7383__auto__){
return (function() {
var playground$task1$cljs_async$chan__GT_callback_$_state_machine__7322__auto__ = null;
var playground$task1$cljs_async$chan__GT_callback_$_state_machine__7322__auto____0 = (function (){
var statearr_9589 = [null,null,null,null,null,null,null];
(statearr_9589[(0)] = playground$task1$cljs_async$chan__GT_callback_$_state_machine__7322__auto__);

(statearr_9589[(1)] = (1));

return statearr_9589;
});
var playground$task1$cljs_async$chan__GT_callback_$_state_machine__7322__auto____1 = (function (state_9581){
while(true){
var ret_value__7323__auto__ = (function (){try{while(true){
var result__7324__auto__ = switch__7321__auto__.call(null,state_9581);
if(cljs.core.keyword_identical_QMARK_.call(null,result__7324__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__7324__auto__;
}
break;
}
}catch (e9590){if((e9590 instanceof Object)){
var ex__7325__auto__ = e9590;
var statearr_9591_9596 = state_9581;
(statearr_9591_9596[(5)] = ex__7325__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_9581);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e9590;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__7323__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__9597 = state_9581;
state_9581 = G__9597;
continue;
} else {
return ret_value__7323__auto__;
}
break;
}
});
playground$task1$cljs_async$chan__GT_callback_$_state_machine__7322__auto__ = function(state_9581){
switch(arguments.length){
case 0:
return playground$task1$cljs_async$chan__GT_callback_$_state_machine__7322__auto____0.call(this);
case 1:
return playground$task1$cljs_async$chan__GT_callback_$_state_machine__7322__auto____1.call(this,state_9581);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
playground$task1$cljs_async$chan__GT_callback_$_state_machine__7322__auto__.cljs$core$IFn$_invoke$arity$0 = playground$task1$cljs_async$chan__GT_callback_$_state_machine__7322__auto____0;
playground$task1$cljs_async$chan__GT_callback_$_state_machine__7322__auto__.cljs$core$IFn$_invoke$arity$1 = playground$task1$cljs_async$chan__GT_callback_$_state_machine__7322__auto____1;
return playground$task1$cljs_async$chan__GT_callback_$_state_machine__7322__auto__;
})()
;})(switch__7321__auto__,c__7383__auto__))
})();
var state__7385__auto__ = (function (){var statearr_9592 = f__7384__auto__.call(null);
(statearr_9592[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7383__auto__);

return statearr_9592;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__7385__auto__);
});})(c__7383__auto__))
);

return c__7383__auto__;
});
playground.task1.cljs_async.read_file = (function playground$task1$cljs_async$read_file(f){
var result = cljs.core.async.chan.call(null);
playground.task1.cljs_async.fs.readFile(f,((function (result){
return (function (err,data){
cljs.core.async.put_BANG_.call(null,result,(function (){var or__4331__auto__ = err;
if(cljs.core.truth_(or__4331__auto__)){
return or__4331__auto__;
} else {
return data;
}
})());

return cljs.core.async.close_BANG_.call(null,result);
});})(result))
);

return result;
});
playground.task1.cljs_async.sum_files = (function playground$task1$cljs_async$sum_files(files){
return cljs.core.async.reduce.call(null,playground.task1.err.lift.call(null,cljs.core._PLUS_),(0),(function (p1__9598_SHARP_){
return cljs.core.async.map.call(null,playground.task1.err.lift.call(null,cljs.core.int$),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__9598_SHARP_], null));
}).call(null,cljs.core.async.merge.call(null,cljs.core.map.call(null,playground.task1.cljs_async.read_file,files))));
});
playground.task1.cljs_async.sum_from_files = (function playground$task1$cljs_async$sum_from_files(files,callback){
return playground.task1.cljs_async.chan__GT_callback.call(null,playground.task1.cljs_async.sum_files.call(null,files),callback);
});

//# sourceMappingURL=cljs_async.js.map