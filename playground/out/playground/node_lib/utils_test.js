// Compiled by ClojureScript 0.0-3308 {:target :nodejs}
goog.provide('playground.node_lib.utils_test');
goog.require('cljs.core');
goog.require('playground.node_lib.utils');
goog.require('cljs.test');
playground.node_lib.utils_test.str__GT_int = (function playground$node_lib$utils_test$str__GT_int(){
return cljs.test.test_var.call(null,playground$node_lib$utils_test$str__GT_int.cljs$lang$var);
});
playground.node_lib.utils_test.str__GT_int.cljs$lang$test = (function (){
try{var values__9889__auto___10520 = cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,playground.node_lib.utils.str__GT_int.call(null,"92")),(92));
var result__9890__auto___10521 = cljs.core.apply.call(null,cljs.core._EQ_,values__9889__auto___10520);
if(cljs.core.truth_(result__9890__auto___10521)){
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"pass","pass",1574159993),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),(92),cljs.core.list(new cljs.core.Symbol("utils","str->int","utils/str->int",2122924108,null),"92")),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core.cons.call(null,cljs.core._EQ_,values__9889__auto___10520),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
} else {
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"fail","fail",1706214930),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),(92),cljs.core.list(new cljs.core.Symbol("utils","str->int","utils/str->int",2122924108,null),"92")),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.cons.call(null,new cljs.core.Symbol(null,"=","=",-1501502141,null),values__9889__auto___10520)),new cljs.core.Symbol(null,"not","not",1044554643,null)),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}

}catch (e10517){var t__9927__auto___10522 = e10517;
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),(92),cljs.core.list(new cljs.core.Symbol("utils","str->int","utils/str->int",2122924108,null),"92")),new cljs.core.Keyword(null,"actual","actual",107306363),t__9927__auto___10522,new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}
try{try{playground.node_lib.utils.str__GT_int.call(null,"spam");

return cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"fail","fail",1706214930),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"thrown?","thrown?",839971709,null),new cljs.core.Symbol("js","Error","js/Error",-1692659266,null),cljs.core.list(new cljs.core.Symbol("utils","str->int","utils/str->int",2122924108,null),"spam")),new cljs.core.Keyword(null,"actual","actual",107306363),null,new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}catch (e10519){if((e10519 instanceof Error)){
var e__9916__auto__ = e10519;
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"pass","pass",1574159993),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"thrown?","thrown?",839971709,null),new cljs.core.Symbol("js","Error","js/Error",-1692659266,null),cljs.core.list(new cljs.core.Symbol("utils","str->int","utils/str->int",2122924108,null),"spam")),new cljs.core.Keyword(null,"actual","actual",107306363),e__9916__auto__,new cljs.core.Keyword(null,"message","message",-406056002),null], null));

return e__9916__auto__;
} else {
throw e10519;

}
}}catch (e10518){var t__9927__auto__ = e10518;
return cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"thrown?","thrown?",839971709,null),new cljs.core.Symbol("js","Error","js/Error",-1692659266,null),cljs.core.list(new cljs.core.Symbol("utils","str->int","utils/str->int",2122924108,null),"spam")),new cljs.core.Keyword(null,"actual","actual",107306363),t__9927__auto__,new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}});

playground.node_lib.utils_test.str__GT_int.cljs$lang$var = new cljs.core.Var(function(){return playground.node_lib.utils_test.str__GT_int;},new cljs.core.Symbol("playground.node-lib.utils-test","str->int","playground.node-lib.utils-test/str->int",-1064202926,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"playground.node-lib.utils-test","playground.node-lib.utils-test",214775124,null),new cljs.core.Symbol(null,"str->int","str->int",1902145725,null),"test/playground/node_lib/utils_test.cljs",18,1,6,6,cljs.core.List.EMPTY,null,(cljs.core.truth_(playground.node_lib.utils_test.str__GT_int)?playground.node_lib.utils_test.str__GT_int.cljs$lang$test:null)]));

//# sourceMappingURL=utils_test.js.map