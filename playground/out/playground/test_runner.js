// Compiled by ClojureScript 0.0-3308 {:target :nodejs}
goog.provide('playground.test_runner');
goog.require('cljs.core');
goog.require('cljs.test');
goog.require('playground.task1.core_test');
goog.require('playground.task2.cljs_callback_test');
goog.require('playground.task2.js_callback_test');
goog.require('playground.task2.cljs_async_test');
goog.require('cljs.nodejs');
goog.require('playground.node_lib.process');
goog.require('playground.task2.cljs_promise_test');
goog.require('playground.node_lib.utils_test');
goog.require('playground.task2.js_promise_test');
cljs.nodejs.enable_util_print_BANG_.call(null);
playground.test_runner.test_task1 = (function playground$test_runner$test_task1(){
return cljs.test.run_block.call(null,(function (){var env13686 = cljs.test.empty_env.call(null);
var summary13687 = cljs.core.volatile_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"summary","summary",380847952),new cljs.core.Keyword(null,"fail","fail",1706214930),(0),new cljs.core.Keyword(null,"error","error",-978969032),(0),new cljs.core.Keyword(null,"pass","pass",1574159993),(0),new cljs.core.Keyword(null,"test","test",577538877),(0)], null));
return cljs.core.concat.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [((function (env13686,summary13687){
return (function (){
cljs.test.set_env_BANG_.call(null,env13686);

cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Symbol(null,"playground.task1.core-test","playground.task1.core-test",-348470523,null),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"begin-test-ns","begin-test-ns",-1701237033)], null));

return cljs.test.block.call(null,(function (){var env__9994__auto__ = cljs.test.get_current_env.call(null);
return cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [((function (env__9994__auto__,env13686,summary13687){
return (function (){
if((env__9994__auto__ == null)){
cljs.test.set_env_BANG_.call(null,cljs.test.empty_env.call(null));
} else {
}


return cljs.test.update_current_env_BANG_.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"each-fixtures","each-fixtures",802243977)], null),cljs.core.assoc,new cljs.core.Symbol(null,"playground.task1.core-test","playground.task1.core-test",-348470523,null),playground.task1.core_test.cljs_test_each_fixtures);
});})(env__9994__auto__,env13686,summary13687))
], null),cljs.test.test_vars_block.call(null,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Var(function(){return playground.task1.core_test.sum_numbers_from_files_js_callbacks;},new cljs.core.Symbol("playground.task1.core-test","sum-numbers-from-files-js-callbacks","playground.task1.core-test/sum-numbers-from-files-js-callbacks",1723196285,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"playground.task1.core-test","playground.task1.core-test",-348470523,null),new cljs.core.Symbol(null,"sum-numbers-from-files-js-callbacks","sum-numbers-from-files-js-callbacks",-6624342,null),"/home/user/projects/imperative-nodejs/playground/test/playground/task1/core_test.cljs",45,1,53,53,cljs.core.List.EMPTY,null,(cljs.core.truth_(playground.task1.core_test.sum_numbers_from_files_js_callbacks)?playground.task1.core_test.sum_numbers_from_files_js_callbacks.cljs$lang$test:null)])),new cljs.core.Var(function(){return playground.task1.core_test.sum_numbers_from_files_cljs_callback;},new cljs.core.Symbol("playground.task1.core-test","sum-numbers-from-files-cljs-callback","playground.task1.core-test/sum-numbers-from-files-cljs-callback",-1125301955,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"playground.task1.core-test","playground.task1.core-test",-348470523,null),new cljs.core.Symbol(null,"sum-numbers-from-files-cljs-callback","sum-numbers-from-files-cljs-callback",1005865680,null),"/home/user/projects/imperative-nodejs/playground/test/playground/task1/core_test.cljs",46,1,38,38,cljs.core.List.EMPTY,null,(cljs.core.truth_(playground.task1.core_test.sum_numbers_from_files_cljs_callback)?playground.task1.core_test.sum_numbers_from_files_cljs_callback.cljs$lang$test:null)])),new cljs.core.Var(function(){return playground.task1.core_test.sum_numbers_from_files_cljs_promises;},new cljs.core.Symbol("playground.task1.core-test","sum-numbers-from-files-cljs-promises","playground.task1.core-test/sum-numbers-from-files-cljs-promises",1570112796,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"playground.task1.core-test","playground.task1.core-test",-348470523,null),new cljs.core.Symbol(null,"sum-numbers-from-files-cljs-promises","sum-numbers-from-files-cljs-promises",-997257807,null),"/home/user/projects/imperative-nodejs/playground/test/playground/task1/core_test.cljs",46,1,43,43,cljs.core.List.EMPTY,null,(cljs.core.truth_(playground.task1.core_test.sum_numbers_from_files_cljs_promises)?playground.task1.core_test.sum_numbers_from_files_cljs_promises.cljs$lang$test:null)])),new cljs.core.Var(function(){return playground.task1.core_test.sum_numbers_from_files_js_promises;},new cljs.core.Symbol("playground.task1.core-test","sum-numbers-from-files-js-promises","playground.task1.core-test/sum-numbers-from-files-js-promises",-2083430402,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"playground.task1.core-test","playground.task1.core-test",-348470523,null),new cljs.core.Symbol(null,"sum-numbers-from-files-js-promises","sum-numbers-from-files-js-promises",137914259,null),"/home/user/projects/imperative-nodejs/playground/test/playground/task1/core_test.cljs",44,1,58,58,cljs.core.List.EMPTY,null,(cljs.core.truth_(playground.task1.core_test.sum_numbers_from_files_js_promises)?playground.task1.core_test.sum_numbers_from_files_js_promises.cljs$lang$test:null)])),new cljs.core.Var(function(){return playground.task1.core_test.sum_numbers_from_files_cljs_async;},new cljs.core.Symbol("playground.task1.core-test","sum-numbers-from-files-cljs-async","playground.task1.core-test/sum-numbers-from-files-cljs-async",1544144132,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"playground.task1.core-test","playground.task1.core-test",-348470523,null),new cljs.core.Symbol(null,"sum-numbers-from-files-cljs-async","sum-numbers-from-files-cljs-async",-982463143,null),"/home/user/projects/imperative-nodejs/playground/test/playground/task1/core_test.cljs",43,1,48,48,cljs.core.List.EMPTY,null,(cljs.core.truth_(playground.task1.core_test.sum_numbers_from_files_cljs_async)?playground.task1.core_test.sum_numbers_from_files_cljs_async.cljs$lang$test:null)]))], null)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [((function (env__9994__auto__,env13686,summary13687){
return (function (){
if((env__9994__auto__ == null)){
return cljs.test.clear_env_BANG_.call(null);
} else {
return null;
}
});})(env__9994__auto__,env13686,summary13687))
], null));
})());
});})(env13686,summary13687))
,((function (env13686,summary13687){
return (function (){
return cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Symbol(null,"playground.task1.core-test","playground.task1.core-test",-348470523,null),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"end-test-ns","end-test-ns",1620675645)], null));
});})(env13686,summary13687))
], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [((function (env13686,summary13687){
return (function (){
return cljs.core._vreset_BANG_.call(null,summary13687,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core._PLUS_).call(null,cljs.core._deref.call(null,summary13687),new cljs.core.Keyword(null,"report-counters","report-counters",-1702609242).cljs$core$IFn$_invoke$arity$1(cljs.test.get_and_clear_env_BANG_.call(null))));
});})(env13686,summary13687))
], null)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [((function (env13686,summary13687){
return (function (){
cljs.test.set_env_BANG_.call(null,env13686);

cljs.test.do_report.call(null,cljs.core.deref.call(null,summary13687));

cljs.test.report.call(null,cljs.core.assoc.call(null,cljs.core.deref.call(null,summary13687),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"end-run-tests","end-run-tests",267300563)));

return cljs.test.clear_env_BANG_.call(null);
});})(env13686,summary13687))
], null));
})());
});
playground.test_runner.test_task2 = (function playground$test_runner$test_task2(){
return cljs.test.run_block.call(null,(function (){var env13690 = cljs.test.empty_env.call(null);
var summary13691 = cljs.core.volatile_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"summary","summary",380847952),new cljs.core.Keyword(null,"fail","fail",1706214930),(0),new cljs.core.Keyword(null,"error","error",-978969032),(0),new cljs.core.Keyword(null,"pass","pass",1574159993),(0),new cljs.core.Keyword(null,"test","test",577538877),(0)], null));
return cljs.core.concat.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [((function (env13690,summary13691){
return (function (){
cljs.test.set_env_BANG_.call(null,env13690);

cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Symbol(null,"playground.task2.cljs-callback-test","playground.task2.cljs-callback-test",520567239,null),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"begin-test-ns","begin-test-ns",-1701237033)], null));

return cljs.test.block.call(null,(function (){var env__9994__auto__ = cljs.test.get_current_env.call(null);
return cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [((function (env__9994__auto__,env13690,summary13691){
return (function (){
if((env__9994__auto__ == null)){
cljs.test.set_env_BANG_.call(null,cljs.test.empty_env.call(null));
} else {
}


return cljs.test.update_current_env_BANG_.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"each-fixtures","each-fixtures",802243977)], null),cljs.core.assoc,new cljs.core.Symbol(null,"playground.task2.cljs-callback-test","playground.task2.cljs-callback-test",520567239,null),playground.task2.cljs_callback_test.cljs_test_each_fixtures);
});})(env__9994__auto__,env13690,summary13691))
], null),cljs.test.test_vars_block.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Var(function(){return playground.task2.cljs_callback_test.traverse_ok;},new cljs.core.Symbol("playground.task2.cljs-callback-test","traverse-ok","playground.task2.cljs-callback-test/traverse-ok",-1505087480,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"playground.task2.cljs-callback-test","playground.task2.cljs-callback-test",520567239,null),new cljs.core.Symbol(null,"traverse-ok","traverse-ok",-12732613,null),"test/playground/task2/cljs_callbacks_test.cljs",21,1,9,9,cljs.core.List.EMPTY,null,(cljs.core.truth_(playground.task2.cljs_callback_test.traverse_ok)?playground.task2.cljs_callback_test.traverse_ok.cljs$lang$test:null)])),new cljs.core.Var(function(){return playground.task2.cljs_callback_test.traverse_no_file;},new cljs.core.Symbol("playground.task2.cljs-callback-test","traverse-no-file","playground.task2.cljs-callback-test/traverse-no-file",-387925990,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"playground.task2.cljs-callback-test","playground.task2.cljs-callback-test",520567239,null),new cljs.core.Symbol(null,"traverse-no-file","traverse-no-file",1066418039,null),"test/playground/task2/cljs_callbacks_test.cljs",26,1,16,16,cljs.core.List.EMPTY,null,(cljs.core.truth_(playground.task2.cljs_callback_test.traverse_no_file)?playground.task2.cljs_callback_test.traverse_no_file.cljs$lang$test:null)]))], null)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [((function (env__9994__auto__,env13690,summary13691){
return (function (){
if((env__9994__auto__ == null)){
return cljs.test.clear_env_BANG_.call(null);
} else {
return null;
}
});})(env__9994__auto__,env13690,summary13691))
], null));
})());
});})(env13690,summary13691))
,((function (env13690,summary13691){
return (function (){
return cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Symbol(null,"playground.task2.cljs-callback-test","playground.task2.cljs-callback-test",520567239,null),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"end-test-ns","end-test-ns",1620675645)], null));
});})(env13690,summary13691))
], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [((function (env13690,summary13691){
return (function (){
return cljs.core._vreset_BANG_.call(null,summary13691,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core._PLUS_).call(null,cljs.core._deref.call(null,summary13691),new cljs.core.Keyword(null,"report-counters","report-counters",-1702609242).cljs$core$IFn$_invoke$arity$1(cljs.test.get_and_clear_env_BANG_.call(null))));
});})(env13690,summary13691))
], null)),cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [((function (env13690,summary13691){
return (function (){
cljs.test.set_env_BANG_.call(null,env13690);

cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Symbol(null,"playground.task2.js-callback-test","playground.task2.js-callback-test",1921080105,null),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"begin-test-ns","begin-test-ns",-1701237033)], null));

return cljs.test.block.call(null,(function (){var env__9994__auto__ = cljs.test.get_current_env.call(null);
return cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [((function (env__9994__auto__,env13690,summary13691){
return (function (){
if((env__9994__auto__ == null)){
cljs.test.set_env_BANG_.call(null,cljs.test.empty_env.call(null));
} else {
}


return cljs.test.update_current_env_BANG_.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"each-fixtures","each-fixtures",802243977)], null),cljs.core.assoc,new cljs.core.Symbol(null,"playground.task2.js-callback-test","playground.task2.js-callback-test",1921080105,null),playground.task2.js_callback_test.cljs_test_each_fixtures);
});})(env__9994__auto__,env13690,summary13691))
], null),cljs.test.test_vars_block.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Var(function(){return playground.task2.js_callback_test.traverse_ok;},new cljs.core.Symbol("playground.task2.js-callback-test","traverse-ok","playground.task2.js-callback-test/traverse-ok",1224728209,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"playground.task2.js-callback-test","playground.task2.js-callback-test",1921080105,null),new cljs.core.Symbol(null,"traverse-ok","traverse-ok",-12732613,null),"test/playground/task2/js_callback_test.cljs",21,1,10,10,cljs.core.List.EMPTY,null,(cljs.core.truth_(playground.task2.js_callback_test.traverse_ok)?playground.task2.js_callback_test.traverse_ok.cljs$lang$test:null)])),new cljs.core.Var(function(){return playground.task2.js_callback_test.traverse_no_file;},new cljs.core.Symbol("playground.task2.js-callback-test","traverse-no-file","playground.task2.js-callback-test/traverse-no-file",-1923902079,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"playground.task2.js-callback-test","playground.task2.js-callback-test",1921080105,null),new cljs.core.Symbol(null,"traverse-no-file","traverse-no-file",1066418039,null),"test/playground/task2/js_callback_test.cljs",26,1,19,19,cljs.core.List.EMPTY,null,(cljs.core.truth_(playground.task2.js_callback_test.traverse_no_file)?playground.task2.js_callback_test.traverse_no_file.cljs$lang$test:null)]))], null)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [((function (env__9994__auto__,env13690,summary13691){
return (function (){
if((env__9994__auto__ == null)){
return cljs.test.clear_env_BANG_.call(null);
} else {
return null;
}
});})(env__9994__auto__,env13690,summary13691))
], null));
})());
});})(env13690,summary13691))
,((function (env13690,summary13691){
return (function (){
return cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Symbol(null,"playground.task2.js-callback-test","playground.task2.js-callback-test",1921080105,null),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"end-test-ns","end-test-ns",1620675645)], null));
});})(env13690,summary13691))
], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [((function (env13690,summary13691){
return (function (){
return cljs.core._vreset_BANG_.call(null,summary13691,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core._PLUS_).call(null,cljs.core._deref.call(null,summary13691),new cljs.core.Keyword(null,"report-counters","report-counters",-1702609242).cljs$core$IFn$_invoke$arity$1(cljs.test.get_and_clear_env_BANG_.call(null))));
});})(env13690,summary13691))
], null)),cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [((function (env13690,summary13691){
return (function (){
cljs.test.set_env_BANG_.call(null,env13690);

cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Symbol(null,"playground.task2.cljs-async-test","playground.task2.cljs-async-test",1755050032,null),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"begin-test-ns","begin-test-ns",-1701237033)], null));

return cljs.test.block.call(null,(function (){var env__9994__auto__ = cljs.test.get_current_env.call(null);
return cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [((function (env__9994__auto__,env13690,summary13691){
return (function (){
if((env__9994__auto__ == null)){
cljs.test.set_env_BANG_.call(null,cljs.test.empty_env.call(null));
} else {
}


return cljs.test.update_current_env_BANG_.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"each-fixtures","each-fixtures",802243977)], null),cljs.core.assoc,new cljs.core.Symbol(null,"playground.task2.cljs-async-test","playground.task2.cljs-async-test",1755050032,null),playground.task2.cljs_async_test.cljs_test_each_fixtures);
});})(env__9994__auto__,env13690,summary13691))
], null),cljs.test.test_vars_block.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Var(function(){return playground.task2.cljs_async_test.traverse_ok;},new cljs.core.Symbol("playground.task2.cljs-async-test","traverse-ok","playground.task2.cljs-async-test/traverse-ok",-1487582895,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"playground.task2.cljs-async-test","playground.task2.cljs-async-test",1755050032,null),new cljs.core.Symbol(null,"traverse-ok","traverse-ok",-12732613,null),"test/playground/task2/cljs_async_test.cljs",21,1,12,12,cljs.core.List.EMPTY,null,(cljs.core.truth_(playground.task2.cljs_async_test.traverse_ok)?playground.task2.cljs_async_test.traverse_ok.cljs$lang$test:null)])),new cljs.core.Var(function(){return playground.task2.cljs_async_test.traverse_no_file;},new cljs.core.Symbol("playground.task2.cljs-async-test","traverse-no-file","playground.task2.cljs-async-test/traverse-no-file",-671547071,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"playground.task2.cljs-async-test","playground.task2.cljs-async-test",1755050032,null),new cljs.core.Symbol(null,"traverse-no-file","traverse-no-file",1066418039,null),"test/playground/task2/cljs_async_test.cljs",26,1,20,20,cljs.core.List.EMPTY,null,(cljs.core.truth_(playground.task2.cljs_async_test.traverse_no_file)?playground.task2.cljs_async_test.traverse_no_file.cljs$lang$test:null)]))], null)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [((function (env__9994__auto__,env13690,summary13691){
return (function (){
if((env__9994__auto__ == null)){
return cljs.test.clear_env_BANG_.call(null);
} else {
return null;
}
});})(env__9994__auto__,env13690,summary13691))
], null));
})());
});})(env13690,summary13691))
,((function (env13690,summary13691){
return (function (){
return cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Symbol(null,"playground.task2.cljs-async-test","playground.task2.cljs-async-test",1755050032,null),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"end-test-ns","end-test-ns",1620675645)], null));
});})(env13690,summary13691))
], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [((function (env13690,summary13691){
return (function (){
return cljs.core._vreset_BANG_.call(null,summary13691,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core._PLUS_).call(null,cljs.core._deref.call(null,summary13691),new cljs.core.Keyword(null,"report-counters","report-counters",-1702609242).cljs$core$IFn$_invoke$arity$1(cljs.test.get_and_clear_env_BANG_.call(null))));
});})(env13690,summary13691))
], null)),cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [((function (env13690,summary13691){
return (function (){
cljs.test.set_env_BANG_.call(null,env13690);

cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Symbol(null,"playground.task2.cljs-promise-test","playground.task2.cljs-promise-test",-118554509,null),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"begin-test-ns","begin-test-ns",-1701237033)], null));

return cljs.test.block.call(null,(function (){var env__9994__auto__ = cljs.test.get_current_env.call(null);
return cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [((function (env__9994__auto__,env13690,summary13691){
return (function (){
if((env__9994__auto__ == null)){
cljs.test.set_env_BANG_.call(null,cljs.test.empty_env.call(null));
} else {
}


return cljs.test.update_current_env_BANG_.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"each-fixtures","each-fixtures",802243977)], null),cljs.core.assoc,new cljs.core.Symbol(null,"playground.task2.cljs-promise-test","playground.task2.cljs-promise-test",-118554509,null),playground.task2.cljs_promise_test.cljs_test_each_fixtures);
});})(env__9994__auto__,env13690,summary13691))
], null),cljs.test.test_vars_block.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Var(function(){return playground.task2.cljs_promise_test.traverse_ok;},new cljs.core.Symbol("playground.task2.cljs-promise-test","traverse-ok","playground.task2.cljs-promise-test/traverse-ok",-1751760304,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"playground.task2.cljs-promise-test","playground.task2.cljs-promise-test",-118554509,null),new cljs.core.Symbol(null,"traverse-ok","traverse-ok",-12732613,null),"test/playground/task2/cljs_promise_test.cljs",21,1,10,10,cljs.core.List.EMPTY,null,(cljs.core.truth_(playground.task2.cljs_promise_test.traverse_ok)?playground.task2.cljs_promise_test.traverse_ok.cljs$lang$test:null)])),new cljs.core.Var(function(){return playground.task2.cljs_promise_test.traverse_no_file;},new cljs.core.Symbol("playground.task2.cljs-promise-test","traverse-no-file","playground.task2.cljs-promise-test/traverse-no-file",-972813758,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"playground.task2.cljs-promise-test","playground.task2.cljs-promise-test",-118554509,null),new cljs.core.Symbol(null,"traverse-no-file","traverse-no-file",1066418039,null),"test/playground/task2/cljs_promise_test.cljs",26,1,18,18,cljs.core.List.EMPTY,null,(cljs.core.truth_(playground.task2.cljs_promise_test.traverse_no_file)?playground.task2.cljs_promise_test.traverse_no_file.cljs$lang$test:null)]))], null)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [((function (env__9994__auto__,env13690,summary13691){
return (function (){
if((env__9994__auto__ == null)){
return cljs.test.clear_env_BANG_.call(null);
} else {
return null;
}
});})(env__9994__auto__,env13690,summary13691))
], null));
})());
});})(env13690,summary13691))
,((function (env13690,summary13691){
return (function (){
return cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Symbol(null,"playground.task2.cljs-promise-test","playground.task2.cljs-promise-test",-118554509,null),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"end-test-ns","end-test-ns",1620675645)], null));
});})(env13690,summary13691))
], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [((function (env13690,summary13691){
return (function (){
return cljs.core._vreset_BANG_.call(null,summary13691,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core._PLUS_).call(null,cljs.core._deref.call(null,summary13691),new cljs.core.Keyword(null,"report-counters","report-counters",-1702609242).cljs$core$IFn$_invoke$arity$1(cljs.test.get_and_clear_env_BANG_.call(null))));
});})(env13690,summary13691))
], null)),cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [((function (env13690,summary13691){
return (function (){
cljs.test.set_env_BANG_.call(null,env13690);

cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Symbol(null,"playground.task2.js-promise-test","playground.task2.js-promise-test",1712526783,null),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"begin-test-ns","begin-test-ns",-1701237033)], null));

return cljs.test.block.call(null,(function (){var env__9994__auto__ = cljs.test.get_current_env.call(null);
return cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [((function (env__9994__auto__,env13690,summary13691){
return (function (){
if((env__9994__auto__ == null)){
cljs.test.set_env_BANG_.call(null,cljs.test.empty_env.call(null));
} else {
}


return cljs.test.update_current_env_BANG_.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"each-fixtures","each-fixtures",802243977)], null),cljs.core.assoc,new cljs.core.Symbol(null,"playground.task2.js-promise-test","playground.task2.js-promise-test",1712526783,null),playground.task2.js_promise_test.cljs_test_each_fixtures);
});})(env__9994__auto__,env13690,summary13691))
], null),cljs.test.test_vars_block.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Var(function(){return playground.task2.js_promise_test.traverse_ok;},new cljs.core.Symbol("playground.task2.js-promise-test","traverse-ok","playground.task2.js-promise-test/traverse-ok",-272657241,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"playground.task2.js-promise-test","playground.task2.js-promise-test",1712526783,null),new cljs.core.Symbol(null,"traverse-ok","traverse-ok",-12732613,null),"test/playground/task2/js_promise_test.cljs",21,1,9,9,cljs.core.List.EMPTY,null,(cljs.core.truth_(playground.task2.js_promise_test.traverse_ok)?playground.task2.js_promise_test.traverse_ok.cljs$lang$test:null)])),new cljs.core.Var(function(){return playground.task2.js_promise_test.traverse_no_file;},new cljs.core.Symbol("playground.task2.js-promise-test","traverse-no-file","playground.task2.js-promise-test/traverse-no-file",772948987,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"playground.task2.js-promise-test","playground.task2.js-promise-test",1712526783,null),new cljs.core.Symbol(null,"traverse-no-file","traverse-no-file",1066418039,null),"test/playground/task2/js_promise_test.cljs",26,1,17,17,cljs.core.List.EMPTY,null,(cljs.core.truth_(playground.task2.js_promise_test.traverse_no_file)?playground.task2.js_promise_test.traverse_no_file.cljs$lang$test:null)]))], null)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [((function (env__9994__auto__,env13690,summary13691){
return (function (){
if((env__9994__auto__ == null)){
return cljs.test.clear_env_BANG_.call(null);
} else {
return null;
}
});})(env__9994__auto__,env13690,summary13691))
], null));
})());
});})(env13690,summary13691))
,((function (env13690,summary13691){
return (function (){
return cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Symbol(null,"playground.task2.js-promise-test","playground.task2.js-promise-test",1712526783,null),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"end-test-ns","end-test-ns",1620675645)], null));
});})(env13690,summary13691))
], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [((function (env13690,summary13691){
return (function (){
return cljs.core._vreset_BANG_.call(null,summary13691,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core._PLUS_).call(null,cljs.core._deref.call(null,summary13691),new cljs.core.Keyword(null,"report-counters","report-counters",-1702609242).cljs$core$IFn$_invoke$arity$1(cljs.test.get_and_clear_env_BANG_.call(null))));
});})(env13690,summary13691))
], null)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [((function (env13690,summary13691){
return (function (){
cljs.test.set_env_BANG_.call(null,env13690);

cljs.test.do_report.call(null,cljs.core.deref.call(null,summary13691));

cljs.test.report.call(null,cljs.core.assoc.call(null,cljs.core.deref.call(null,summary13691),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"end-run-tests","end-run-tests",267300563)));

return cljs.test.clear_env_BANG_.call(null);
});})(env13690,summary13691))
], null));
})());
});
playground.test_runner.test_all = (function playground$test_runner$test_all(){
return cljs.test.run_block.call(null,(function (){var env13694 = cljs.test.empty_env.call(null);
var summary13695 = cljs.core.volatile_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"summary","summary",380847952),new cljs.core.Keyword(null,"fail","fail",1706214930),(0),new cljs.core.Keyword(null,"error","error",-978969032),(0),new cljs.core.Keyword(null,"pass","pass",1574159993),(0),new cljs.core.Keyword(null,"test","test",577538877),(0)], null));
return cljs.core.concat.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [((function (env13694,summary13695){
return (function (){
cljs.test.set_env_BANG_.call(null,env13694);

cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Symbol(null,"playground.task1.core-test","playground.task1.core-test",-348470523,null),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"begin-test-ns","begin-test-ns",-1701237033)], null));

return cljs.test.block.call(null,(function (){var env__9994__auto__ = cljs.test.get_current_env.call(null);
return cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [((function (env__9994__auto__,env13694,summary13695){
return (function (){
if((env__9994__auto__ == null)){
cljs.test.set_env_BANG_.call(null,cljs.test.empty_env.call(null));
} else {
}


return cljs.test.update_current_env_BANG_.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"each-fixtures","each-fixtures",802243977)], null),cljs.core.assoc,new cljs.core.Symbol(null,"playground.task1.core-test","playground.task1.core-test",-348470523,null),playground.task1.core_test.cljs_test_each_fixtures);
});})(env__9994__auto__,env13694,summary13695))
], null),cljs.test.test_vars_block.call(null,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Var(function(){return playground.task1.core_test.sum_numbers_from_files_js_callbacks;},new cljs.core.Symbol("playground.task1.core-test","sum-numbers-from-files-js-callbacks","playground.task1.core-test/sum-numbers-from-files-js-callbacks",1723196285,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"playground.task1.core-test","playground.task1.core-test",-348470523,null),new cljs.core.Symbol(null,"sum-numbers-from-files-js-callbacks","sum-numbers-from-files-js-callbacks",-6624342,null),"/home/user/projects/imperative-nodejs/playground/test/playground/task1/core_test.cljs",45,1,53,53,cljs.core.List.EMPTY,null,(cljs.core.truth_(playground.task1.core_test.sum_numbers_from_files_js_callbacks)?playground.task1.core_test.sum_numbers_from_files_js_callbacks.cljs$lang$test:null)])),new cljs.core.Var(function(){return playground.task1.core_test.sum_numbers_from_files_cljs_callback;},new cljs.core.Symbol("playground.task1.core-test","sum-numbers-from-files-cljs-callback","playground.task1.core-test/sum-numbers-from-files-cljs-callback",-1125301955,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"playground.task1.core-test","playground.task1.core-test",-348470523,null),new cljs.core.Symbol(null,"sum-numbers-from-files-cljs-callback","sum-numbers-from-files-cljs-callback",1005865680,null),"/home/user/projects/imperative-nodejs/playground/test/playground/task1/core_test.cljs",46,1,38,38,cljs.core.List.EMPTY,null,(cljs.core.truth_(playground.task1.core_test.sum_numbers_from_files_cljs_callback)?playground.task1.core_test.sum_numbers_from_files_cljs_callback.cljs$lang$test:null)])),new cljs.core.Var(function(){return playground.task1.core_test.sum_numbers_from_files_cljs_promises;},new cljs.core.Symbol("playground.task1.core-test","sum-numbers-from-files-cljs-promises","playground.task1.core-test/sum-numbers-from-files-cljs-promises",1570112796,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"playground.task1.core-test","playground.task1.core-test",-348470523,null),new cljs.core.Symbol(null,"sum-numbers-from-files-cljs-promises","sum-numbers-from-files-cljs-promises",-997257807,null),"/home/user/projects/imperative-nodejs/playground/test/playground/task1/core_test.cljs",46,1,43,43,cljs.core.List.EMPTY,null,(cljs.core.truth_(playground.task1.core_test.sum_numbers_from_files_cljs_promises)?playground.task1.core_test.sum_numbers_from_files_cljs_promises.cljs$lang$test:null)])),new cljs.core.Var(function(){return playground.task1.core_test.sum_numbers_from_files_js_promises;},new cljs.core.Symbol("playground.task1.core-test","sum-numbers-from-files-js-promises","playground.task1.core-test/sum-numbers-from-files-js-promises",-2083430402,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"playground.task1.core-test","playground.task1.core-test",-348470523,null),new cljs.core.Symbol(null,"sum-numbers-from-files-js-promises","sum-numbers-from-files-js-promises",137914259,null),"/home/user/projects/imperative-nodejs/playground/test/playground/task1/core_test.cljs",44,1,58,58,cljs.core.List.EMPTY,null,(cljs.core.truth_(playground.task1.core_test.sum_numbers_from_files_js_promises)?playground.task1.core_test.sum_numbers_from_files_js_promises.cljs$lang$test:null)])),new cljs.core.Var(function(){return playground.task1.core_test.sum_numbers_from_files_cljs_async;},new cljs.core.Symbol("playground.task1.core-test","sum-numbers-from-files-cljs-async","playground.task1.core-test/sum-numbers-from-files-cljs-async",1544144132,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"playground.task1.core-test","playground.task1.core-test",-348470523,null),new cljs.core.Symbol(null,"sum-numbers-from-files-cljs-async","sum-numbers-from-files-cljs-async",-982463143,null),"/home/user/projects/imperative-nodejs/playground/test/playground/task1/core_test.cljs",43,1,48,48,cljs.core.List.EMPTY,null,(cljs.core.truth_(playground.task1.core_test.sum_numbers_from_files_cljs_async)?playground.task1.core_test.sum_numbers_from_files_cljs_async.cljs$lang$test:null)]))], null)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [((function (env__9994__auto__,env13694,summary13695){
return (function (){
if((env__9994__auto__ == null)){
return cljs.test.clear_env_BANG_.call(null);
} else {
return null;
}
});})(env__9994__auto__,env13694,summary13695))
], null));
})());
});})(env13694,summary13695))
,((function (env13694,summary13695){
return (function (){
return cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Symbol(null,"playground.task1.core-test","playground.task1.core-test",-348470523,null),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"end-test-ns","end-test-ns",1620675645)], null));
});})(env13694,summary13695))
], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [((function (env13694,summary13695){
return (function (){
return cljs.core._vreset_BANG_.call(null,summary13695,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core._PLUS_).call(null,cljs.core._deref.call(null,summary13695),new cljs.core.Keyword(null,"report-counters","report-counters",-1702609242).cljs$core$IFn$_invoke$arity$1(cljs.test.get_and_clear_env_BANG_.call(null))));
});})(env13694,summary13695))
], null)),cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [((function (env13694,summary13695){
return (function (){
cljs.test.set_env_BANG_.call(null,env13694);

cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Symbol(null,"playground.task2.cljs-callback-test","playground.task2.cljs-callback-test",520567239,null),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"begin-test-ns","begin-test-ns",-1701237033)], null));

return cljs.test.block.call(null,(function (){var env__9994__auto__ = cljs.test.get_current_env.call(null);
return cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [((function (env__9994__auto__,env13694,summary13695){
return (function (){
if((env__9994__auto__ == null)){
cljs.test.set_env_BANG_.call(null,cljs.test.empty_env.call(null));
} else {
}


return cljs.test.update_current_env_BANG_.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"each-fixtures","each-fixtures",802243977)], null),cljs.core.assoc,new cljs.core.Symbol(null,"playground.task2.cljs-callback-test","playground.task2.cljs-callback-test",520567239,null),playground.task2.cljs_callback_test.cljs_test_each_fixtures);
});})(env__9994__auto__,env13694,summary13695))
], null),cljs.test.test_vars_block.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Var(function(){return playground.task2.cljs_callback_test.traverse_ok;},new cljs.core.Symbol("playground.task2.cljs-callback-test","traverse-ok","playground.task2.cljs-callback-test/traverse-ok",-1505087480,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"playground.task2.cljs-callback-test","playground.task2.cljs-callback-test",520567239,null),new cljs.core.Symbol(null,"traverse-ok","traverse-ok",-12732613,null),"test/playground/task2/cljs_callbacks_test.cljs",21,1,9,9,cljs.core.List.EMPTY,null,(cljs.core.truth_(playground.task2.cljs_callback_test.traverse_ok)?playground.task2.cljs_callback_test.traverse_ok.cljs$lang$test:null)])),new cljs.core.Var(function(){return playground.task2.cljs_callback_test.traverse_no_file;},new cljs.core.Symbol("playground.task2.cljs-callback-test","traverse-no-file","playground.task2.cljs-callback-test/traverse-no-file",-387925990,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"playground.task2.cljs-callback-test","playground.task2.cljs-callback-test",520567239,null),new cljs.core.Symbol(null,"traverse-no-file","traverse-no-file",1066418039,null),"test/playground/task2/cljs_callbacks_test.cljs",26,1,16,16,cljs.core.List.EMPTY,null,(cljs.core.truth_(playground.task2.cljs_callback_test.traverse_no_file)?playground.task2.cljs_callback_test.traverse_no_file.cljs$lang$test:null)]))], null)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [((function (env__9994__auto__,env13694,summary13695){
return (function (){
if((env__9994__auto__ == null)){
return cljs.test.clear_env_BANG_.call(null);
} else {
return null;
}
});})(env__9994__auto__,env13694,summary13695))
], null));
})());
});})(env13694,summary13695))
,((function (env13694,summary13695){
return (function (){
return cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Symbol(null,"playground.task2.cljs-callback-test","playground.task2.cljs-callback-test",520567239,null),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"end-test-ns","end-test-ns",1620675645)], null));
});})(env13694,summary13695))
], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [((function (env13694,summary13695){
return (function (){
return cljs.core._vreset_BANG_.call(null,summary13695,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core._PLUS_).call(null,cljs.core._deref.call(null,summary13695),new cljs.core.Keyword(null,"report-counters","report-counters",-1702609242).cljs$core$IFn$_invoke$arity$1(cljs.test.get_and_clear_env_BANG_.call(null))));
});})(env13694,summary13695))
], null)),cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [((function (env13694,summary13695){
return (function (){
cljs.test.set_env_BANG_.call(null,env13694);

cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Symbol(null,"playground.task2.js-callback-test","playground.task2.js-callback-test",1921080105,null),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"begin-test-ns","begin-test-ns",-1701237033)], null));

return cljs.test.block.call(null,(function (){var env__9994__auto__ = cljs.test.get_current_env.call(null);
return cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [((function (env__9994__auto__,env13694,summary13695){
return (function (){
if((env__9994__auto__ == null)){
cljs.test.set_env_BANG_.call(null,cljs.test.empty_env.call(null));
} else {
}


return cljs.test.update_current_env_BANG_.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"each-fixtures","each-fixtures",802243977)], null),cljs.core.assoc,new cljs.core.Symbol(null,"playground.task2.js-callback-test","playground.task2.js-callback-test",1921080105,null),playground.task2.js_callback_test.cljs_test_each_fixtures);
});})(env__9994__auto__,env13694,summary13695))
], null),cljs.test.test_vars_block.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Var(function(){return playground.task2.js_callback_test.traverse_ok;},new cljs.core.Symbol("playground.task2.js-callback-test","traverse-ok","playground.task2.js-callback-test/traverse-ok",1224728209,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"playground.task2.js-callback-test","playground.task2.js-callback-test",1921080105,null),new cljs.core.Symbol(null,"traverse-ok","traverse-ok",-12732613,null),"test/playground/task2/js_callback_test.cljs",21,1,10,10,cljs.core.List.EMPTY,null,(cljs.core.truth_(playground.task2.js_callback_test.traverse_ok)?playground.task2.js_callback_test.traverse_ok.cljs$lang$test:null)])),new cljs.core.Var(function(){return playground.task2.js_callback_test.traverse_no_file;},new cljs.core.Symbol("playground.task2.js-callback-test","traverse-no-file","playground.task2.js-callback-test/traverse-no-file",-1923902079,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"playground.task2.js-callback-test","playground.task2.js-callback-test",1921080105,null),new cljs.core.Symbol(null,"traverse-no-file","traverse-no-file",1066418039,null),"test/playground/task2/js_callback_test.cljs",26,1,19,19,cljs.core.List.EMPTY,null,(cljs.core.truth_(playground.task2.js_callback_test.traverse_no_file)?playground.task2.js_callback_test.traverse_no_file.cljs$lang$test:null)]))], null)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [((function (env__9994__auto__,env13694,summary13695){
return (function (){
if((env__9994__auto__ == null)){
return cljs.test.clear_env_BANG_.call(null);
} else {
return null;
}
});})(env__9994__auto__,env13694,summary13695))
], null));
})());
});})(env13694,summary13695))
,((function (env13694,summary13695){
return (function (){
return cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Symbol(null,"playground.task2.js-callback-test","playground.task2.js-callback-test",1921080105,null),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"end-test-ns","end-test-ns",1620675645)], null));
});})(env13694,summary13695))
], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [((function (env13694,summary13695){
return (function (){
return cljs.core._vreset_BANG_.call(null,summary13695,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core._PLUS_).call(null,cljs.core._deref.call(null,summary13695),new cljs.core.Keyword(null,"report-counters","report-counters",-1702609242).cljs$core$IFn$_invoke$arity$1(cljs.test.get_and_clear_env_BANG_.call(null))));
});})(env13694,summary13695))
], null)),cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [((function (env13694,summary13695){
return (function (){
cljs.test.set_env_BANG_.call(null,env13694);

cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Symbol(null,"playground.task2.cljs-async-test","playground.task2.cljs-async-test",1755050032,null),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"begin-test-ns","begin-test-ns",-1701237033)], null));

return cljs.test.block.call(null,(function (){var env__9994__auto__ = cljs.test.get_current_env.call(null);
return cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [((function (env__9994__auto__,env13694,summary13695){
return (function (){
if((env__9994__auto__ == null)){
cljs.test.set_env_BANG_.call(null,cljs.test.empty_env.call(null));
} else {
}


return cljs.test.update_current_env_BANG_.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"each-fixtures","each-fixtures",802243977)], null),cljs.core.assoc,new cljs.core.Symbol(null,"playground.task2.cljs-async-test","playground.task2.cljs-async-test",1755050032,null),playground.task2.cljs_async_test.cljs_test_each_fixtures);
});})(env__9994__auto__,env13694,summary13695))
], null),cljs.test.test_vars_block.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Var(function(){return playground.task2.cljs_async_test.traverse_ok;},new cljs.core.Symbol("playground.task2.cljs-async-test","traverse-ok","playground.task2.cljs-async-test/traverse-ok",-1487582895,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"playground.task2.cljs-async-test","playground.task2.cljs-async-test",1755050032,null),new cljs.core.Symbol(null,"traverse-ok","traverse-ok",-12732613,null),"test/playground/task2/cljs_async_test.cljs",21,1,12,12,cljs.core.List.EMPTY,null,(cljs.core.truth_(playground.task2.cljs_async_test.traverse_ok)?playground.task2.cljs_async_test.traverse_ok.cljs$lang$test:null)])),new cljs.core.Var(function(){return playground.task2.cljs_async_test.traverse_no_file;},new cljs.core.Symbol("playground.task2.cljs-async-test","traverse-no-file","playground.task2.cljs-async-test/traverse-no-file",-671547071,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"playground.task2.cljs-async-test","playground.task2.cljs-async-test",1755050032,null),new cljs.core.Symbol(null,"traverse-no-file","traverse-no-file",1066418039,null),"test/playground/task2/cljs_async_test.cljs",26,1,20,20,cljs.core.List.EMPTY,null,(cljs.core.truth_(playground.task2.cljs_async_test.traverse_no_file)?playground.task2.cljs_async_test.traverse_no_file.cljs$lang$test:null)]))], null)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [((function (env__9994__auto__,env13694,summary13695){
return (function (){
if((env__9994__auto__ == null)){
return cljs.test.clear_env_BANG_.call(null);
} else {
return null;
}
});})(env__9994__auto__,env13694,summary13695))
], null));
})());
});})(env13694,summary13695))
,((function (env13694,summary13695){
return (function (){
return cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Symbol(null,"playground.task2.cljs-async-test","playground.task2.cljs-async-test",1755050032,null),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"end-test-ns","end-test-ns",1620675645)], null));
});})(env13694,summary13695))
], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [((function (env13694,summary13695){
return (function (){
return cljs.core._vreset_BANG_.call(null,summary13695,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core._PLUS_).call(null,cljs.core._deref.call(null,summary13695),new cljs.core.Keyword(null,"report-counters","report-counters",-1702609242).cljs$core$IFn$_invoke$arity$1(cljs.test.get_and_clear_env_BANG_.call(null))));
});})(env13694,summary13695))
], null)),cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [((function (env13694,summary13695){
return (function (){
cljs.test.set_env_BANG_.call(null,env13694);

cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Symbol(null,"playground.task2.cljs-promise-test","playground.task2.cljs-promise-test",-118554509,null),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"begin-test-ns","begin-test-ns",-1701237033)], null));

return cljs.test.block.call(null,(function (){var env__9994__auto__ = cljs.test.get_current_env.call(null);
return cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [((function (env__9994__auto__,env13694,summary13695){
return (function (){
if((env__9994__auto__ == null)){
cljs.test.set_env_BANG_.call(null,cljs.test.empty_env.call(null));
} else {
}


return cljs.test.update_current_env_BANG_.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"each-fixtures","each-fixtures",802243977)], null),cljs.core.assoc,new cljs.core.Symbol(null,"playground.task2.cljs-promise-test","playground.task2.cljs-promise-test",-118554509,null),playground.task2.cljs_promise_test.cljs_test_each_fixtures);
});})(env__9994__auto__,env13694,summary13695))
], null),cljs.test.test_vars_block.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Var(function(){return playground.task2.cljs_promise_test.traverse_ok;},new cljs.core.Symbol("playground.task2.cljs-promise-test","traverse-ok","playground.task2.cljs-promise-test/traverse-ok",-1751760304,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"playground.task2.cljs-promise-test","playground.task2.cljs-promise-test",-118554509,null),new cljs.core.Symbol(null,"traverse-ok","traverse-ok",-12732613,null),"test/playground/task2/cljs_promise_test.cljs",21,1,10,10,cljs.core.List.EMPTY,null,(cljs.core.truth_(playground.task2.cljs_promise_test.traverse_ok)?playground.task2.cljs_promise_test.traverse_ok.cljs$lang$test:null)])),new cljs.core.Var(function(){return playground.task2.cljs_promise_test.traverse_no_file;},new cljs.core.Symbol("playground.task2.cljs-promise-test","traverse-no-file","playground.task2.cljs-promise-test/traverse-no-file",-972813758,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"playground.task2.cljs-promise-test","playground.task2.cljs-promise-test",-118554509,null),new cljs.core.Symbol(null,"traverse-no-file","traverse-no-file",1066418039,null),"test/playground/task2/cljs_promise_test.cljs",26,1,18,18,cljs.core.List.EMPTY,null,(cljs.core.truth_(playground.task2.cljs_promise_test.traverse_no_file)?playground.task2.cljs_promise_test.traverse_no_file.cljs$lang$test:null)]))], null)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [((function (env__9994__auto__,env13694,summary13695){
return (function (){
if((env__9994__auto__ == null)){
return cljs.test.clear_env_BANG_.call(null);
} else {
return null;
}
});})(env__9994__auto__,env13694,summary13695))
], null));
})());
});})(env13694,summary13695))
,((function (env13694,summary13695){
return (function (){
return cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Symbol(null,"playground.task2.cljs-promise-test","playground.task2.cljs-promise-test",-118554509,null),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"end-test-ns","end-test-ns",1620675645)], null));
});})(env13694,summary13695))
], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [((function (env13694,summary13695){
return (function (){
return cljs.core._vreset_BANG_.call(null,summary13695,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core._PLUS_).call(null,cljs.core._deref.call(null,summary13695),new cljs.core.Keyword(null,"report-counters","report-counters",-1702609242).cljs$core$IFn$_invoke$arity$1(cljs.test.get_and_clear_env_BANG_.call(null))));
});})(env13694,summary13695))
], null)),cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [((function (env13694,summary13695){
return (function (){
cljs.test.set_env_BANG_.call(null,env13694);

cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Symbol(null,"playground.node-lib.utils-test","playground.node-lib.utils-test",214775124,null),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"begin-test-ns","begin-test-ns",-1701237033)], null));

return cljs.test.block.call(null,(function (){var env__9994__auto__ = cljs.test.get_current_env.call(null);
return cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [((function (env__9994__auto__,env13694,summary13695){
return (function (){
if((env__9994__auto__ == null)){
cljs.test.set_env_BANG_.call(null,cljs.test.empty_env.call(null));
} else {
}


return null;
});})(env__9994__auto__,env13694,summary13695))
], null),cljs.test.test_vars_block.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Var(function(){return playground.node_lib.utils_test.str__GT_int;},new cljs.core.Symbol("playground.node-lib.utils-test","str->int","playground.node-lib.utils-test/str->int",-1064202926,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"playground.node-lib.utils-test","playground.node-lib.utils-test",214775124,null),new cljs.core.Symbol(null,"str->int","str->int",1902145725,null),"test/playground/node_lib/utils_test.cljs",18,1,6,6,cljs.core.List.EMPTY,null,(cljs.core.truth_(playground.node_lib.utils_test.str__GT_int)?playground.node_lib.utils_test.str__GT_int.cljs$lang$test:null)]))], null)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [((function (env__9994__auto__,env13694,summary13695){
return (function (){
if((env__9994__auto__ == null)){
return cljs.test.clear_env_BANG_.call(null);
} else {
return null;
}
});})(env__9994__auto__,env13694,summary13695))
], null));
})());
});})(env13694,summary13695))
,((function (env13694,summary13695){
return (function (){
return cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Symbol(null,"playground.node-lib.utils-test","playground.node-lib.utils-test",214775124,null),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"end-test-ns","end-test-ns",1620675645)], null));
});})(env13694,summary13695))
], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [((function (env13694,summary13695){
return (function (){
return cljs.core._vreset_BANG_.call(null,summary13695,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core._PLUS_).call(null,cljs.core._deref.call(null,summary13695),new cljs.core.Keyword(null,"report-counters","report-counters",-1702609242).cljs$core$IFn$_invoke$arity$1(cljs.test.get_and_clear_env_BANG_.call(null))));
});})(env13694,summary13695))
], null)),cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [((function (env13694,summary13695){
return (function (){
cljs.test.set_env_BANG_.call(null,env13694);

cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Symbol(null,"playground.task2.js-promise-test","playground.task2.js-promise-test",1712526783,null),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"begin-test-ns","begin-test-ns",-1701237033)], null));

return cljs.test.block.call(null,(function (){var env__9994__auto__ = cljs.test.get_current_env.call(null);
return cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [((function (env__9994__auto__,env13694,summary13695){
return (function (){
if((env__9994__auto__ == null)){
cljs.test.set_env_BANG_.call(null,cljs.test.empty_env.call(null));
} else {
}


return cljs.test.update_current_env_BANG_.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"each-fixtures","each-fixtures",802243977)], null),cljs.core.assoc,new cljs.core.Symbol(null,"playground.task2.js-promise-test","playground.task2.js-promise-test",1712526783,null),playground.task2.js_promise_test.cljs_test_each_fixtures);
});})(env__9994__auto__,env13694,summary13695))
], null),cljs.test.test_vars_block.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Var(function(){return playground.task2.js_promise_test.traverse_ok;},new cljs.core.Symbol("playground.task2.js-promise-test","traverse-ok","playground.task2.js-promise-test/traverse-ok",-272657241,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"playground.task2.js-promise-test","playground.task2.js-promise-test",1712526783,null),new cljs.core.Symbol(null,"traverse-ok","traverse-ok",-12732613,null),"test/playground/task2/js_promise_test.cljs",21,1,9,9,cljs.core.List.EMPTY,null,(cljs.core.truth_(playground.task2.js_promise_test.traverse_ok)?playground.task2.js_promise_test.traverse_ok.cljs$lang$test:null)])),new cljs.core.Var(function(){return playground.task2.js_promise_test.traverse_no_file;},new cljs.core.Symbol("playground.task2.js-promise-test","traverse-no-file","playground.task2.js-promise-test/traverse-no-file",772948987,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"playground.task2.js-promise-test","playground.task2.js-promise-test",1712526783,null),new cljs.core.Symbol(null,"traverse-no-file","traverse-no-file",1066418039,null),"test/playground/task2/js_promise_test.cljs",26,1,17,17,cljs.core.List.EMPTY,null,(cljs.core.truth_(playground.task2.js_promise_test.traverse_no_file)?playground.task2.js_promise_test.traverse_no_file.cljs$lang$test:null)]))], null)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [((function (env__9994__auto__,env13694,summary13695){
return (function (){
if((env__9994__auto__ == null)){
return cljs.test.clear_env_BANG_.call(null);
} else {
return null;
}
});})(env__9994__auto__,env13694,summary13695))
], null));
})());
});})(env13694,summary13695))
,((function (env13694,summary13695){
return (function (){
return cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Symbol(null,"playground.task2.js-promise-test","playground.task2.js-promise-test",1712526783,null),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"end-test-ns","end-test-ns",1620675645)], null));
});})(env13694,summary13695))
], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [((function (env13694,summary13695){
return (function (){
return cljs.core._vreset_BANG_.call(null,summary13695,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core._PLUS_).call(null,cljs.core._deref.call(null,summary13695),new cljs.core.Keyword(null,"report-counters","report-counters",-1702609242).cljs$core$IFn$_invoke$arity$1(cljs.test.get_and_clear_env_BANG_.call(null))));
});})(env13694,summary13695))
], null)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [((function (env13694,summary13695){
return (function (){
cljs.test.set_env_BANG_.call(null,env13694);

cljs.test.do_report.call(null,cljs.core.deref.call(null,summary13695));

cljs.test.report.call(null,cljs.core.assoc.call(null,cljs.core.deref.call(null,summary13695),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"end-run-tests","end-run-tests",267300563)));

return cljs.test.clear_env_BANG_.call(null);
});})(env13694,summary13695))
], null));
})());
});
playground.test_runner._main = (function playground$test_runner$_main(){
var G__13697 = playground.node_lib.process.argv.call(null);
if(cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["task1"], null),G__13697)){
return playground.test_runner.test_task1.call(null);
} else {
if(cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["task2"], null),G__13697)){
return playground.test_runner.test_task2.call(null);
} else {
return playground.test_runner.test_all.call(null);

}
}
});
cljs.core._STAR_main_cli_fn_STAR_ = playground.test_runner._main;

//# sourceMappingURL=test_runner.js.map