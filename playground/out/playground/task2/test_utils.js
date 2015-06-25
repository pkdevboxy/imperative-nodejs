// Compiled by ClojureScript 0.0-3308 {:target :nodejs}
goog.provide('playground.task2.test_utils');
goog.require('cljs.core');
goog.require('cljs.core.async');
playground.task2.test_utils.fs = require("fs");
playground.task2.test_utils.files = new cljs.core.PersistentArrayMap(null, 4, ["1","2","2","3","3","4","4","0"], null);
playground.task2.test_utils.mock_readFile = (function playground$task2$test_utils$mock_readFile(name,callback){
var c__7383__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__7383__auto__){
return (function (){
var f__7384__auto__ = (function (){var switch__7321__auto__ = ((function (c__7383__auto__){
return (function (state_9811){
var state_val_9812 = (state_9811[(1)]);
if((state_val_9812 === (1))){
var inst_9798 = cljs.core.rand_int.call(null,(30));
var inst_9799 = cljs.core.async.timeout.call(null,inst_9798);
var state_9811__$1 = state_9811;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_9811__$1,(2),inst_9799);
} else {
if((state_val_9812 === (2))){
var inst_9802 = (state_9811[(7)]);
var inst_9801 = (state_9811[(2)]);
var inst_9802__$1 = playground.task2.test_utils.files.call(null,name);
var state_9811__$1 = (function (){var statearr_9813 = state_9811;
(statearr_9813[(7)] = inst_9802__$1);

(statearr_9813[(8)] = inst_9801);

return statearr_9813;
})();
if(cljs.core.truth_(inst_9802__$1)){
var statearr_9814_9825 = state_9811__$1;
(statearr_9814_9825[(1)] = (3));

} else {
var statearr_9815_9826 = state_9811__$1;
(statearr_9815_9826[(1)] = (4));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9812 === (3))){
var inst_9802 = (state_9811[(7)]);
var inst_9804 = callback.call(null,null,inst_9802);
var state_9811__$1 = state_9811;
var statearr_9816_9827 = state_9811__$1;
(statearr_9816_9827[(2)] = inst_9804);

(statearr_9816_9827[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9812 === (4))){
var inst_9806 = Error("No such file");
var inst_9807 = callback.call(null,inst_9806);
var state_9811__$1 = state_9811;
var statearr_9817_9828 = state_9811__$1;
(statearr_9817_9828[(2)] = inst_9807);

(statearr_9817_9828[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9812 === (5))){
var inst_9809 = (state_9811[(2)]);
var state_9811__$1 = state_9811;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_9811__$1,inst_9809);
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
var playground$task2$test_utils$mock_readFile_$_state_machine__7322__auto__ = null;
var playground$task2$test_utils$mock_readFile_$_state_machine__7322__auto____0 = (function (){
var statearr_9821 = [null,null,null,null,null,null,null,null,null];
(statearr_9821[(0)] = playground$task2$test_utils$mock_readFile_$_state_machine__7322__auto__);

(statearr_9821[(1)] = (1));

return statearr_9821;
});
var playground$task2$test_utils$mock_readFile_$_state_machine__7322__auto____1 = (function (state_9811){
while(true){
var ret_value__7323__auto__ = (function (){try{while(true){
var result__7324__auto__ = switch__7321__auto__.call(null,state_9811);
if(cljs.core.keyword_identical_QMARK_.call(null,result__7324__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__7324__auto__;
}
break;
}
}catch (e9822){if((e9822 instanceof Object)){
var ex__7325__auto__ = e9822;
var statearr_9823_9829 = state_9811;
(statearr_9823_9829[(5)] = ex__7325__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_9811);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e9822;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__7323__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__9830 = state_9811;
state_9811 = G__9830;
continue;
} else {
return ret_value__7323__auto__;
}
break;
}
});
playground$task2$test_utils$mock_readFile_$_state_machine__7322__auto__ = function(state_9811){
switch(arguments.length){
case 0:
return playground$task2$test_utils$mock_readFile_$_state_machine__7322__auto____0.call(this);
case 1:
return playground$task2$test_utils$mock_readFile_$_state_machine__7322__auto____1.call(this,state_9811);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
playground$task2$test_utils$mock_readFile_$_state_machine__7322__auto__.cljs$core$IFn$_invoke$arity$0 = playground$task2$test_utils$mock_readFile_$_state_machine__7322__auto____0;
playground$task2$test_utils$mock_readFile_$_state_machine__7322__auto__.cljs$core$IFn$_invoke$arity$1 = playground$task2$test_utils$mock_readFile_$_state_machine__7322__auto____1;
return playground$task2$test_utils$mock_readFile_$_state_machine__7322__auto__;
})()
;})(switch__7321__auto__,c__7383__auto__))
})();
var state__7385__auto__ = (function (){var statearr_9824 = f__7384__auto__.call(null);
(statearr_9824[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7383__auto__);

return statearr_9824;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__7385__auto__);
});})(c__7383__auto__))
);

return c__7383__auto__;
});
playground.task2.test_utils.original_readFile = playground.task2.test_utils.fs.readFile;
/**
 * A mocking fixture for `fs.readFile`.
 */
playground.task2.test_utils.mock_readFile_fixture = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"before","before",-1633692388),(function (){
return playground.task2.test_utils.fs.readFile = playground.task2.test_utils.mock_readFile;
}),new cljs.core.Keyword(null,"after","after",594996914),(function (){
return playground.task2.test_utils.fs.readFile = playground.task2.test_utils.original_readFile;
})], null);

//# sourceMappingURL=test_utils.js.map