// Compiled by ClojureScript 0.0-3308 {:target :nodejs}
goog.provide('playground.task2.cljs_async');
goog.require('cljs.core');
goog.require('cljs.core.async');
goog.require('playground.node_lib.errors');
goog.require('playground.node_lib.fs');
playground.task2.cljs_async._LT_next_number = (function playground$task2$cljs_async$_LT_next_number(x){
if(cljs.core.integer_QMARK_){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,new cljs.core.Symbol(null,"integer?","integer?",1303791671,null)))].join('')));
}

if(cljs.core.truth_(x)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,new cljs.core.Symbol(null,"x","x",-555367584,null)))].join('')));
}

return cljs.core.async.map.call(null,playground.node_lib.errors.lift.call(null,cljs.core.int$),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [playground.node_lib.fs._LT_read_file.call(null,[cljs.core.str(x)].join(''))], null));
});
playground.task2.cljs_async.traverse = (function playground$task2$cljs_async$traverse(k){
if(cljs.core.integer_QMARK_){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,new cljs.core.Symbol(null,"integer?","integer?",1303791671,null)))].join('')));
}

if(cljs.core.truth_(k)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,new cljs.core.Symbol(null,"k","k",-505765866,null)))].join('')));
}

var c__7383__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__7383__auto__){
return (function (){
var f__7384__auto__ = (function (){var switch__7321__auto__ = ((function (c__7383__auto__){
return (function (state_9732){
var state_val_9733 = (state_9732[(1)]);
if((state_val_9733 === (7))){
var inst_9720 = (state_9732[(7)]);
var inst_9719 = (state_9732[(2)]);
var inst_9720__$1 = playground.node_lib.errors.throw_error.call(null,inst_9719);
var inst_9721 = ((0) < inst_9720__$1);
var state_9732__$1 = (function (){var statearr_9734 = state_9732;
(statearr_9734[(7)] = inst_9720__$1);

return statearr_9734;
})();
if(cljs.core.truth_(inst_9721)){
var statearr_9735_9754 = state_9732__$1;
(statearr_9735_9754[(1)] = (8));

} else {
var statearr_9736_9755 = state_9732__$1;
(statearr_9736_9755[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9733 === (1))){
var state_9732__$1 = state_9732;
var statearr_9737_9756 = state_9732__$1;
(statearr_9737_9756[(2)] = null);

(statearr_9737_9756[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9733 === (4))){
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_9732,(3),Error,null,(2));
var inst_9712 = cljs.core.PersistentVector.EMPTY;
var inst_9713 = k;
var inst_9714 = inst_9712;
var state_9732__$1 = (function (){var statearr_9738 = state_9732;
(statearr_9738[(8)] = inst_9713);

(statearr_9738[(9)] = inst_9714);

return statearr_9738;
})();
var statearr_9739_9757 = state_9732__$1;
(statearr_9739_9757[(2)] = null);

(statearr_9739_9757[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9733 === (6))){
var inst_9728 = (state_9732[(2)]);
var state_9732__$1 = state_9732;
var statearr_9740_9758 = state_9732__$1;
(statearr_9740_9758[(2)] = inst_9728);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_9732__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9733 === (3))){
var inst_9708 = (state_9732[(2)]);
var state_9732__$1 = state_9732;
var statearr_9741_9759 = state_9732__$1;
(statearr_9741_9759[(2)] = inst_9708);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_9732__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9733 === (2))){
var inst_9730 = (state_9732[(2)]);
var state_9732__$1 = state_9732;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_9732__$1,inst_9730);
} else {
if((state_val_9733 === (9))){
var inst_9716 = (state_9732[(10)]);
var state_9732__$1 = state_9732;
var statearr_9742_9760 = state_9732__$1;
(statearr_9742_9760[(2)] = inst_9716);

(statearr_9742_9760[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9733 === (5))){
var inst_9713 = (state_9732[(8)]);
var inst_9714 = (state_9732[(9)]);
var inst_9716 = cljs.core.conj.call(null,inst_9714,inst_9713);
var inst_9717 = playground.task2.cljs_async._LT_next_number.call(null,inst_9713);
var state_9732__$1 = (function (){var statearr_9743 = state_9732;
(statearr_9743[(10)] = inst_9716);

return statearr_9743;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_9732__$1,(7),inst_9717);
} else {
if((state_val_9733 === (10))){
var inst_9726 = (state_9732[(2)]);
var state_9732__$1 = state_9732;
var statearr_9744_9761 = state_9732__$1;
(statearr_9744_9761[(2)] = inst_9726);

(statearr_9744_9761[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9733 === (8))){
var inst_9716 = (state_9732[(10)]);
var inst_9720 = (state_9732[(7)]);
var inst_9713 = inst_9720;
var inst_9714 = inst_9716;
var state_9732__$1 = (function (){var statearr_9745 = state_9732;
(statearr_9745[(8)] = inst_9713);

(statearr_9745[(9)] = inst_9714);

return statearr_9745;
})();
var statearr_9746_9762 = state_9732__$1;
(statearr_9746_9762[(2)] = null);

(statearr_9746_9762[(1)] = (5));


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
}
}
});})(c__7383__auto__))
;
return ((function (switch__7321__auto__,c__7383__auto__){
return (function() {
var playground$task2$cljs_async$traverse_$_state_machine__7322__auto__ = null;
var playground$task2$cljs_async$traverse_$_state_machine__7322__auto____0 = (function (){
var statearr_9750 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_9750[(0)] = playground$task2$cljs_async$traverse_$_state_machine__7322__auto__);

(statearr_9750[(1)] = (1));

return statearr_9750;
});
var playground$task2$cljs_async$traverse_$_state_machine__7322__auto____1 = (function (state_9732){
while(true){
var ret_value__7323__auto__ = (function (){try{while(true){
var result__7324__auto__ = switch__7321__auto__.call(null,state_9732);
if(cljs.core.keyword_identical_QMARK_.call(null,result__7324__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__7324__auto__;
}
break;
}
}catch (e9751){if((e9751 instanceof Object)){
var ex__7325__auto__ = e9751;
var statearr_9752_9763 = state_9732;
(statearr_9752_9763[(5)] = ex__7325__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_9732);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e9751;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__7323__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__9764 = state_9732;
state_9732 = G__9764;
continue;
} else {
return ret_value__7323__auto__;
}
break;
}
});
playground$task2$cljs_async$traverse_$_state_machine__7322__auto__ = function(state_9732){
switch(arguments.length){
case 0:
return playground$task2$cljs_async$traverse_$_state_machine__7322__auto____0.call(this);
case 1:
return playground$task2$cljs_async$traverse_$_state_machine__7322__auto____1.call(this,state_9732);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
playground$task2$cljs_async$traverse_$_state_machine__7322__auto__.cljs$core$IFn$_invoke$arity$0 = playground$task2$cljs_async$traverse_$_state_machine__7322__auto____0;
playground$task2$cljs_async$traverse_$_state_machine__7322__auto__.cljs$core$IFn$_invoke$arity$1 = playground$task2$cljs_async$traverse_$_state_machine__7322__auto____1;
return playground$task2$cljs_async$traverse_$_state_machine__7322__auto__;
})()
;})(switch__7321__auto__,c__7383__auto__))
})();
var state__7385__auto__ = (function (){var statearr_9753 = f__7384__auto__.call(null);
(statearr_9753[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7383__auto__);

return statearr_9753;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__7385__auto__);
});})(c__7383__auto__))
);

return c__7383__auto__;
});

//# sourceMappingURL=cljs_async.js.map