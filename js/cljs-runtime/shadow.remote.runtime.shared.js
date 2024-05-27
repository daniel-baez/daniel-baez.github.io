goog.provide('shadow.remote.runtime.shared');
shadow.remote.runtime.shared.init_state = (function shadow$remote$runtime$shared$init_state(client_info){
return new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"extensions","extensions",-1103629196),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"ops","ops",1237330063),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"client-info","client-info",1958982504),client_info,new cljs.core.Keyword(null,"call-id-seq","call-id-seq",-1679248218),(0),new cljs.core.Keyword(null,"call-handlers","call-handlers",386605551),cljs.core.PersistentArrayMap.EMPTY], null);
});
shadow.remote.runtime.shared.now = (function shadow$remote$runtime$shared$now(){
return Date.now();
});
shadow.remote.runtime.shared.get_client_id = (function shadow$remote$runtime$shared$get_client_id(p__13896){
var map__13897 = p__13896;
var map__13897__$1 = cljs.core.__destructure_map(map__13897);
var runtime = map__13897__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13897__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var or__5002__auto__ = new cljs.core.Keyword(null,"client-id","client-id",-464622140).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref));
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("runtime has no assigned runtime-id",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"runtime","runtime",-1331573996),runtime], null));
}
});
shadow.remote.runtime.shared.relay_msg = (function shadow$remote$runtime$shared$relay_msg(runtime,msg){
var self_id_14274 = shadow.remote.runtime.shared.get_client_id(runtime);
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"to","to",192099007).cljs$core$IFn$_invoke$arity$1(msg),self_id_14274)){
shadow.remote.runtime.api.relay_msg(runtime,msg);
} else {
Promise.resolve((1)).then((function (){
var G__13902 = runtime;
var G__13903 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(msg,new cljs.core.Keyword(null,"from","from",1815293044),self_id_14274);
return (shadow.remote.runtime.shared.process.cljs$core$IFn$_invoke$arity$2 ? shadow.remote.runtime.shared.process.cljs$core$IFn$_invoke$arity$2(G__13902,G__13903) : shadow.remote.runtime.shared.process.call(null, G__13902,G__13903));
}));
}

return msg;
});
shadow.remote.runtime.shared.reply = (function shadow$remote$runtime$shared$reply(runtime,p__13905,res){
var map__13906 = p__13905;
var map__13906__$1 = cljs.core.__destructure_map(map__13906);
var call_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13906__$1,new cljs.core.Keyword(null,"call-id","call-id",1043012968));
var from = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13906__$1,new cljs.core.Keyword(null,"from","from",1815293044));
var res__$1 = (function (){var G__13907 = res;
var G__13907__$1 = (cljs.core.truth_(call_id)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__13907,new cljs.core.Keyword(null,"call-id","call-id",1043012968),call_id):G__13907);
if(cljs.core.truth_(from)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__13907__$1,new cljs.core.Keyword(null,"to","to",192099007),from);
} else {
return G__13907__$1;
}
})();
return shadow.remote.runtime.api.relay_msg(runtime,res__$1);
});
shadow.remote.runtime.shared.call = (function shadow$remote$runtime$shared$call(var_args){
var G__13913 = arguments.length;
switch (G__13913) {
case 3:
return shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$3 = (function (runtime,msg,handlers){
return shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$4(runtime,msg,handlers,(0));
}));

(shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$4 = (function (p__13919,msg,handlers,timeout_after_ms){
var map__13920 = p__13919;
var map__13920__$1 = cljs.core.__destructure_map(map__13920);
var runtime = map__13920__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13920__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
if(cljs.core.map_QMARK_(msg)){
} else {
throw (new Error("Assert failed: (map? msg)"));
}

if(cljs.core.map_QMARK_(handlers)){
} else {
throw (new Error("Assert failed: (map? handlers)"));
}

if(cljs.core.nat_int_QMARK_(timeout_after_ms)){
} else {
throw (new Error("Assert failed: (nat-int? timeout-after-ms)"));
}

var call_id = new cljs.core.Keyword(null,"call-id-seq","call-id-seq",-1679248218).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state_ref,cljs.core.update,new cljs.core.Keyword(null,"call-id-seq","call-id-seq",-1679248218),cljs.core.inc);

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state_ref,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"call-handlers","call-handlers",386605551),call_id], null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"handlers","handlers",79528781),handlers,new cljs.core.Keyword(null,"called-at","called-at",607081160),shadow.remote.runtime.shared.now(),new cljs.core.Keyword(null,"msg","msg",-1386103444),msg,new cljs.core.Keyword(null,"timeout","timeout",-318625318),timeout_after_ms], null));

return shadow.remote.runtime.api.relay_msg(runtime,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(msg,new cljs.core.Keyword(null,"call-id","call-id",1043012968),call_id));
}));

(shadow.remote.runtime.shared.call.cljs$lang$maxFixedArity = 4);

shadow.remote.runtime.shared.trigger_BANG_ = (function shadow$remote$runtime$shared$trigger_BANG_(var_args){
var args__5732__auto__ = [];
var len__5726__auto___14293 = arguments.length;
var i__5727__auto___14294 = (0);
while(true){
if((i__5727__auto___14294 < len__5726__auto___14293)){
args__5732__auto__.push((arguments[i__5727__auto___14294]));

var G__14295 = (i__5727__auto___14294 + (1));
i__5727__auto___14294 = G__14295;
continue;
} else {
}
break;
}

var argseq__5733__auto__ = ((((2) < args__5732__auto__.length))?(new cljs.core.IndexedSeq(args__5732__auto__.slice((2)),(0),null)):null);
return shadow.remote.runtime.shared.trigger_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__5733__auto__);
});

(shadow.remote.runtime.shared.trigger_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (p__14105,ev,args){
var map__14106 = p__14105;
var map__14106__$1 = cljs.core.__destructure_map(map__14106);
var runtime = map__14106__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14106__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var seq__14110 = cljs.core.seq(cljs.core.vals(new cljs.core.Keyword(null,"extensions","extensions",-1103629196).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref))));
var chunk__14113 = null;
var count__14114 = (0);
var i__14115 = (0);
while(true){
if((i__14115 < count__14114)){
var ext = chunk__14113.cljs$core$IIndexed$_nth$arity$2(null, i__14115);
var ev_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(ext,ev);
if(cljs.core.truth_(ev_fn)){
cljs.core.apply.cljs$core$IFn$_invoke$arity$2(ev_fn,args);


var G__14301 = seq__14110;
var G__14302 = chunk__14113;
var G__14303 = count__14114;
var G__14304 = (i__14115 + (1));
seq__14110 = G__14301;
chunk__14113 = G__14302;
count__14114 = G__14303;
i__14115 = G__14304;
continue;
} else {
var G__14305 = seq__14110;
var G__14306 = chunk__14113;
var G__14307 = count__14114;
var G__14308 = (i__14115 + (1));
seq__14110 = G__14305;
chunk__14113 = G__14306;
count__14114 = G__14307;
i__14115 = G__14308;
continue;
}
} else {
var temp__5804__auto__ = cljs.core.seq(seq__14110);
if(temp__5804__auto__){
var seq__14110__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__14110__$1)){
var c__5525__auto__ = cljs.core.chunk_first(seq__14110__$1);
var G__14310 = cljs.core.chunk_rest(seq__14110__$1);
var G__14311 = c__5525__auto__;
var G__14312 = cljs.core.count(c__5525__auto__);
var G__14313 = (0);
seq__14110 = G__14310;
chunk__14113 = G__14311;
count__14114 = G__14312;
i__14115 = G__14313;
continue;
} else {
var ext = cljs.core.first(seq__14110__$1);
var ev_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(ext,ev);
if(cljs.core.truth_(ev_fn)){
cljs.core.apply.cljs$core$IFn$_invoke$arity$2(ev_fn,args);


var G__14316 = cljs.core.next(seq__14110__$1);
var G__14317 = null;
var G__14318 = (0);
var G__14319 = (0);
seq__14110 = G__14316;
chunk__14113 = G__14317;
count__14114 = G__14318;
i__14115 = G__14319;
continue;
} else {
var G__14320 = cljs.core.next(seq__14110__$1);
var G__14321 = null;
var G__14322 = (0);
var G__14323 = (0);
seq__14110 = G__14320;
chunk__14113 = G__14321;
count__14114 = G__14322;
i__14115 = G__14323;
continue;
}
}
} else {
return null;
}
}
break;
}
}));

(shadow.remote.runtime.shared.trigger_BANG_.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(shadow.remote.runtime.shared.trigger_BANG_.cljs$lang$applyTo = (function (seq14102){
var G__14103 = cljs.core.first(seq14102);
var seq14102__$1 = cljs.core.next(seq14102);
var G__14104 = cljs.core.first(seq14102__$1);
var seq14102__$2 = cljs.core.next(seq14102__$1);
var self__5711__auto__ = this;
return self__5711__auto__.cljs$core$IFn$_invoke$arity$variadic(G__14103,G__14104,seq14102__$2);
}));

shadow.remote.runtime.shared.welcome = (function shadow$remote$runtime$shared$welcome(p__14123,p__14124){
var map__14125 = p__14123;
var map__14125__$1 = cljs.core.__destructure_map(map__14125);
var runtime = map__14125__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14125__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var map__14126 = p__14124;
var map__14126__$1 = cljs.core.__destructure_map(map__14126);
var msg = map__14126__$1;
var client_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14126__$1,new cljs.core.Keyword(null,"client-id","client-id",-464622140));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state_ref,cljs.core.assoc,new cljs.core.Keyword(null,"client-id","client-id",-464622140),client_id);

var map__14128 = cljs.core.deref(state_ref);
var map__14128__$1 = cljs.core.__destructure_map(map__14128);
var client_info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14128__$1,new cljs.core.Keyword(null,"client-info","client-info",1958982504));
var extensions = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14128__$1,new cljs.core.Keyword(null,"extensions","extensions",-1103629196));
shadow.remote.runtime.shared.relay_msg(runtime,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"hello","hello",-245025397),new cljs.core.Keyword(null,"client-info","client-info",1958982504),client_info], null));

return shadow.remote.runtime.shared.trigger_BANG_(runtime,new cljs.core.Keyword(null,"on-welcome","on-welcome",1895317125));
});
shadow.remote.runtime.shared.ping = (function shadow$remote$runtime$shared$ping(runtime,msg){
return shadow.remote.runtime.shared.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"pong","pong",-172484958)], null));
});
shadow.remote.runtime.shared.request_supported_ops = (function shadow$remote$runtime$shared$request_supported_ops(p__14131,msg){
var map__14133 = p__14131;
var map__14133__$1 = cljs.core.__destructure_map(map__14133);
var runtime = map__14133__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14133__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
return shadow.remote.runtime.shared.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"supported-ops","supported-ops",337914702),new cljs.core.Keyword(null,"ops","ops",1237330063),cljs.core.disj.cljs$core$IFn$_invoke$arity$variadic(cljs.core.set(cljs.core.keys(new cljs.core.Keyword(null,"ops","ops",1237330063).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref)))),new cljs.core.Keyword(null,"welcome","welcome",-578152123),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"unknown-relay-op","unknown-relay-op",170832753),new cljs.core.Keyword(null,"unknown-op","unknown-op",1900385996),new cljs.core.Keyword(null,"request-supported-ops","request-supported-ops",-1034994502),new cljs.core.Keyword(null,"tool-disconnect","tool-disconnect",189103996)], 0))], null));
});
shadow.remote.runtime.shared.unknown_relay_op = (function shadow$remote$runtime$shared$unknown_relay_op(msg){
return console.warn("unknown-relay-op",msg);
});
shadow.remote.runtime.shared.unknown_op = (function shadow$remote$runtime$shared$unknown_op(msg){
return console.warn("unknown-op",msg);
});
shadow.remote.runtime.shared.add_extension_STAR_ = (function shadow$remote$runtime$shared$add_extension_STAR_(p__14143,key,p__14144){
var map__14148 = p__14143;
var map__14148__$1 = cljs.core.__destructure_map(map__14148);
var state = map__14148__$1;
var extensions = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14148__$1,new cljs.core.Keyword(null,"extensions","extensions",-1103629196));
var map__14149 = p__14144;
var map__14149__$1 = cljs.core.__destructure_map(map__14149);
var spec = map__14149__$1;
var ops = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14149__$1,new cljs.core.Keyword(null,"ops","ops",1237330063));
var transit_write_handlers = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14149__$1,new cljs.core.Keyword(null,"transit-write-handlers","transit-write-handlers",1886308716));
if(cljs.core.contains_QMARK_(extensions,key)){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("extension already registered",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),key,new cljs.core.Keyword(null,"spec","spec",347520401),spec], null));
} else {
}

return cljs.core.reduce_kv((function (state__$1,op_kw,op_handler){
if(cljs.core.truth_(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(state__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ops","ops",1237330063),op_kw], null)))){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("op already registered",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),key,new cljs.core.Keyword(null,"op","op",-1882987955),op_kw], null));
} else {
}

return cljs.core.assoc_in(state__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ops","ops",1237330063),op_kw], null),op_handler);
}),cljs.core.assoc_in(state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"extensions","extensions",-1103629196),key], null),spec),ops);
});
shadow.remote.runtime.shared.add_extension = (function shadow$remote$runtime$shared$add_extension(p__14173,key,spec){
var map__14174 = p__14173;
var map__14174__$1 = cljs.core.__destructure_map(map__14174);
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14174__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state_ref,shadow.remote.runtime.shared.add_extension_STAR_,key,spec);
});
shadow.remote.runtime.shared.add_defaults = (function shadow$remote$runtime$shared$add_defaults(runtime){
return shadow.remote.runtime.shared.add_extension(runtime,new cljs.core.Keyword("shadow.remote.runtime.shared","defaults","shadow.remote.runtime.shared/defaults",-1821257543),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"ops","ops",1237330063),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"welcome","welcome",-578152123),(function (p1__14177_SHARP_){
return shadow.remote.runtime.shared.welcome(runtime,p1__14177_SHARP_);
}),new cljs.core.Keyword(null,"unknown-relay-op","unknown-relay-op",170832753),(function (p1__14179_SHARP_){
return shadow.remote.runtime.shared.unknown_relay_op(p1__14179_SHARP_);
}),new cljs.core.Keyword(null,"unknown-op","unknown-op",1900385996),(function (p1__14180_SHARP_){
return shadow.remote.runtime.shared.unknown_op(p1__14180_SHARP_);
}),new cljs.core.Keyword(null,"ping","ping",-1670114784),(function (p1__14181_SHARP_){
return shadow.remote.runtime.shared.ping(runtime,p1__14181_SHARP_);
}),new cljs.core.Keyword(null,"request-supported-ops","request-supported-ops",-1034994502),(function (p1__14182_SHARP_){
return shadow.remote.runtime.shared.request_supported_ops(runtime,p1__14182_SHARP_);
})], null)], null));
});
shadow.remote.runtime.shared.del_extension_STAR_ = (function shadow$remote$runtime$shared$del_extension_STAR_(state,key){
var ext = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"extensions","extensions",-1103629196),key], null));
if(cljs.core.not(ext)){
return state;
} else {
return cljs.core.reduce_kv((function (state__$1,op_kw,op_handler){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(state__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ops","ops",1237330063)], null),cljs.core.dissoc,op_kw);
}),cljs.core.update.cljs$core$IFn$_invoke$arity$4(state,new cljs.core.Keyword(null,"extensions","extensions",-1103629196),cljs.core.dissoc,key),new cljs.core.Keyword(null,"ops","ops",1237330063).cljs$core$IFn$_invoke$arity$1(ext));
}
});
shadow.remote.runtime.shared.del_extension = (function shadow$remote$runtime$shared$del_extension(p__14186,key){
var map__14187 = p__14186;
var map__14187__$1 = cljs.core.__destructure_map(map__14187);
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14187__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(state_ref,shadow.remote.runtime.shared.del_extension_STAR_,key);
});
shadow.remote.runtime.shared.unhandled_call_result = (function shadow$remote$runtime$shared$unhandled_call_result(call_config,msg){
return console.warn("unhandled call result",msg,call_config);
});
shadow.remote.runtime.shared.unhandled_client_not_found = (function shadow$remote$runtime$shared$unhandled_client_not_found(p__14190,msg){
var map__14191 = p__14190;
var map__14191__$1 = cljs.core.__destructure_map(map__14191);
var runtime = map__14191__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14191__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
return shadow.remote.runtime.shared.trigger_BANG_.cljs$core$IFn$_invoke$arity$variadic(runtime,new cljs.core.Keyword(null,"on-client-not-found","on-client-not-found",-642452849),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([msg], 0));
});
shadow.remote.runtime.shared.reply_unknown_op = (function shadow$remote$runtime$shared$reply_unknown_op(runtime,msg){
return shadow.remote.runtime.shared.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"unknown-op","unknown-op",1900385996),new cljs.core.Keyword(null,"msg","msg",-1386103444),msg], null));
});
shadow.remote.runtime.shared.process = (function shadow$remote$runtime$shared$process(p__14196,p__14197){
var map__14201 = p__14196;
var map__14201__$1 = cljs.core.__destructure_map(map__14201);
var runtime = map__14201__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14201__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var map__14202 = p__14197;
var map__14202__$1 = cljs.core.__destructure_map(map__14202);
var msg = map__14202__$1;
var op = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14202__$1,new cljs.core.Keyword(null,"op","op",-1882987955));
var call_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14202__$1,new cljs.core.Keyword(null,"call-id","call-id",1043012968));
var state = cljs.core.deref(state_ref);
var op_handler = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ops","ops",1237330063),op], null));
if(cljs.core.truth_(call_id)){
var cfg = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"call-handlers","call-handlers",386605551),call_id], null));
var call_handler = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cfg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"handlers","handlers",79528781),op], null));
if(cljs.core.truth_(call_handler)){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(state_ref,cljs.core.update,new cljs.core.Keyword(null,"call-handlers","call-handlers",386605551),cljs.core.dissoc,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([call_id], 0));

return (call_handler.cljs$core$IFn$_invoke$arity$1 ? call_handler.cljs$core$IFn$_invoke$arity$1(msg) : call_handler.call(null, msg));
} else {
if(cljs.core.truth_(op_handler)){
return (op_handler.cljs$core$IFn$_invoke$arity$1 ? op_handler.cljs$core$IFn$_invoke$arity$1(msg) : op_handler.call(null, msg));
} else {
return shadow.remote.runtime.shared.unhandled_call_result(cfg,msg);

}
}
} else {
if(cljs.core.truth_(op_handler)){
return (op_handler.cljs$core$IFn$_invoke$arity$1 ? op_handler.cljs$core$IFn$_invoke$arity$1(msg) : op_handler.call(null, msg));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"client-not-found","client-not-found",-1754042614),op)){
return shadow.remote.runtime.shared.unhandled_client_not_found(runtime,msg);
} else {
return shadow.remote.runtime.shared.reply_unknown_op(runtime,msg);

}
}
}
});
shadow.remote.runtime.shared.run_on_idle = (function shadow$remote$runtime$shared$run_on_idle(state_ref){
var seq__14221 = cljs.core.seq(cljs.core.vals(new cljs.core.Keyword(null,"extensions","extensions",-1103629196).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref))));
var chunk__14223 = null;
var count__14224 = (0);
var i__14225 = (0);
while(true){
if((i__14225 < count__14224)){
var map__14248 = chunk__14223.cljs$core$IIndexed$_nth$arity$2(null, i__14225);
var map__14248__$1 = cljs.core.__destructure_map(map__14248);
var on_idle = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14248__$1,new cljs.core.Keyword(null,"on-idle","on-idle",2044706602));
if(cljs.core.truth_(on_idle)){
(on_idle.cljs$core$IFn$_invoke$arity$0 ? on_idle.cljs$core$IFn$_invoke$arity$0() : on_idle.call(null, ));


var G__14368 = seq__14221;
var G__14369 = chunk__14223;
var G__14370 = count__14224;
var G__14371 = (i__14225 + (1));
seq__14221 = G__14368;
chunk__14223 = G__14369;
count__14224 = G__14370;
i__14225 = G__14371;
continue;
} else {
var G__14374 = seq__14221;
var G__14375 = chunk__14223;
var G__14376 = count__14224;
var G__14377 = (i__14225 + (1));
seq__14221 = G__14374;
chunk__14223 = G__14375;
count__14224 = G__14376;
i__14225 = G__14377;
continue;
}
} else {
var temp__5804__auto__ = cljs.core.seq(seq__14221);
if(temp__5804__auto__){
var seq__14221__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__14221__$1)){
var c__5525__auto__ = cljs.core.chunk_first(seq__14221__$1);
var G__14380 = cljs.core.chunk_rest(seq__14221__$1);
var G__14381 = c__5525__auto__;
var G__14382 = cljs.core.count(c__5525__auto__);
var G__14383 = (0);
seq__14221 = G__14380;
chunk__14223 = G__14381;
count__14224 = G__14382;
i__14225 = G__14383;
continue;
} else {
var map__14256 = cljs.core.first(seq__14221__$1);
var map__14256__$1 = cljs.core.__destructure_map(map__14256);
var on_idle = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14256__$1,new cljs.core.Keyword(null,"on-idle","on-idle",2044706602));
if(cljs.core.truth_(on_idle)){
(on_idle.cljs$core$IFn$_invoke$arity$0 ? on_idle.cljs$core$IFn$_invoke$arity$0() : on_idle.call(null, ));


var G__14386 = cljs.core.next(seq__14221__$1);
var G__14387 = null;
var G__14388 = (0);
var G__14389 = (0);
seq__14221 = G__14386;
chunk__14223 = G__14387;
count__14224 = G__14388;
i__14225 = G__14389;
continue;
} else {
var G__14390 = cljs.core.next(seq__14221__$1);
var G__14391 = null;
var G__14392 = (0);
var G__14393 = (0);
seq__14221 = G__14390;
chunk__14223 = G__14391;
count__14224 = G__14392;
i__14225 = G__14393;
continue;
}
}
} else {
return null;
}
}
break;
}
});

//# sourceMappingURL=shadow.remote.runtime.shared.js.map
