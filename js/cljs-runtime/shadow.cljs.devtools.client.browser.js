goog.provide('shadow.cljs.devtools.client.browser');
shadow.cljs.devtools.client.browser.devtools_msg = (function shadow$cljs$devtools$client$browser$devtools_msg(var_args){
var args__5732__auto__ = [];
var len__5726__auto___21164 = arguments.length;
var i__5727__auto___21165 = (0);
while(true){
if((i__5727__auto___21165 < len__5726__auto___21164)){
args__5732__auto__.push((arguments[i__5727__auto___21165]));

var G__21166 = (i__5727__auto___21165 + (1));
i__5727__auto___21165 = G__21166;
continue;
} else {
}
break;
}

var argseq__5733__auto__ = ((((1) < args__5732__auto__.length))?(new cljs.core.IndexedSeq(args__5732__auto__.slice((1)),(0),null)):null);
return shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5733__auto__);
});

(shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic = (function (msg,args){
if(shadow.cljs.devtools.client.env.log){
if(cljs.core.seq(shadow.cljs.devtools.client.env.log_style)){
return console.log.apply(console,cljs.core.into_array.cljs$core$IFn$_invoke$arity$1(cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [["%cshadow-cljs: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg)].join(''),shadow.cljs.devtools.client.env.log_style], null),args)));
} else {
return console.log.apply(console,cljs.core.into_array.cljs$core$IFn$_invoke$arity$1(cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [["shadow-cljs: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg)].join('')], null),args)));
}
} else {
return null;
}
}));

(shadow.cljs.devtools.client.browser.devtools_msg.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(shadow.cljs.devtools.client.browser.devtools_msg.cljs$lang$applyTo = (function (seq20755){
var G__20756 = cljs.core.first(seq20755);
var seq20755__$1 = cljs.core.next(seq20755);
var self__5711__auto__ = this;
return self__5711__auto__.cljs$core$IFn$_invoke$arity$variadic(G__20756,seq20755__$1);
}));

shadow.cljs.devtools.client.browser.script_eval = (function shadow$cljs$devtools$client$browser$script_eval(code){
return goog.globalEval(code);
});
shadow.cljs.devtools.client.browser.do_js_load = (function shadow$cljs$devtools$client$browser$do_js_load(sources){
var seq__20777 = cljs.core.seq(sources);
var chunk__20778 = null;
var count__20779 = (0);
var i__20780 = (0);
while(true){
if((i__20780 < count__20779)){
var map__20799 = chunk__20778.cljs$core$IIndexed$_nth$arity$2(null, i__20780);
var map__20799__$1 = cljs.core.__destructure_map(map__20799);
var src = map__20799__$1;
var resource_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20799__$1,new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582));
var output_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20799__$1,new cljs.core.Keyword(null,"output-name","output-name",-1769107767));
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20799__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20799__$1,new cljs.core.Keyword(null,"js","js",1768080579));
$CLJS.SHADOW_ENV.setLoaded(output_name);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load JS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([resource_name], 0));

shadow.cljs.devtools.client.env.before_load_src(src);

try{shadow.cljs.devtools.client.browser.script_eval([cljs.core.str.cljs$core$IFn$_invoke$arity$1(js),"\n//# sourceURL=",cljs.core.str.cljs$core$IFn$_invoke$arity$1($CLJS.SHADOW_ENV.scriptBase),cljs.core.str.cljs$core$IFn$_invoke$arity$1(output_name)].join(''));
}catch (e20800){var e_21171 = e20800;
if(shadow.cljs.devtools.client.env.log){
console.error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name)].join(''),e_21171);
} else {
}

throw (new Error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name),": ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(e_21171.message)].join('')));
}

var G__21173 = seq__20777;
var G__21174 = chunk__20778;
var G__21175 = count__20779;
var G__21176 = (i__20780 + (1));
seq__20777 = G__21173;
chunk__20778 = G__21174;
count__20779 = G__21175;
i__20780 = G__21176;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__20777);
if(temp__5804__auto__){
var seq__20777__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__20777__$1)){
var c__5525__auto__ = cljs.core.chunk_first(seq__20777__$1);
var G__21177 = cljs.core.chunk_rest(seq__20777__$1);
var G__21178 = c__5525__auto__;
var G__21179 = cljs.core.count(c__5525__auto__);
var G__21180 = (0);
seq__20777 = G__21177;
chunk__20778 = G__21178;
count__20779 = G__21179;
i__20780 = G__21180;
continue;
} else {
var map__20801 = cljs.core.first(seq__20777__$1);
var map__20801__$1 = cljs.core.__destructure_map(map__20801);
var src = map__20801__$1;
var resource_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20801__$1,new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582));
var output_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20801__$1,new cljs.core.Keyword(null,"output-name","output-name",-1769107767));
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20801__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20801__$1,new cljs.core.Keyword(null,"js","js",1768080579));
$CLJS.SHADOW_ENV.setLoaded(output_name);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load JS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([resource_name], 0));

shadow.cljs.devtools.client.env.before_load_src(src);

try{shadow.cljs.devtools.client.browser.script_eval([cljs.core.str.cljs$core$IFn$_invoke$arity$1(js),"\n//# sourceURL=",cljs.core.str.cljs$core$IFn$_invoke$arity$1($CLJS.SHADOW_ENV.scriptBase),cljs.core.str.cljs$core$IFn$_invoke$arity$1(output_name)].join(''));
}catch (e20802){var e_21181 = e20802;
if(shadow.cljs.devtools.client.env.log){
console.error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name)].join(''),e_21181);
} else {
}

throw (new Error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name),": ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(e_21181.message)].join('')));
}

var G__21182 = cljs.core.next(seq__20777__$1);
var G__21183 = null;
var G__21184 = (0);
var G__21185 = (0);
seq__20777 = G__21182;
chunk__20778 = G__21183;
count__20779 = G__21184;
i__20780 = G__21185;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.cljs.devtools.client.browser.do_js_reload = (function shadow$cljs$devtools$client$browser$do_js_reload(msg,sources,complete_fn,failure_fn){
return shadow.cljs.devtools.client.env.do_js_reload.cljs$core$IFn$_invoke$arity$4(cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(msg,new cljs.core.Keyword(null,"log-missing-fn","log-missing-fn",732676765),(function (fn_sym){
return null;
}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"log-call-async","log-call-async",183826192),(function (fn_sym){
return shadow.cljs.devtools.client.browser.devtools_msg(["call async ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym)].join(''));
}),new cljs.core.Keyword(null,"log-call","log-call",412404391),(function (fn_sym){
return shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym)].join(''));
})], 0)),(function (){
return shadow.cljs.devtools.client.browser.do_js_load(sources);
}),complete_fn,failure_fn);
});
/**
 * when (require '["some-str" :as x]) is done at the REPL we need to manually call the shadow.js.require for it
 * since the file only adds the shadow$provide. only need to do this for shadow-js.
 */
shadow.cljs.devtools.client.browser.do_js_requires = (function shadow$cljs$devtools$client$browser$do_js_requires(js_requires){
var seq__20803 = cljs.core.seq(js_requires);
var chunk__20804 = null;
var count__20805 = (0);
var i__20806 = (0);
while(true){
if((i__20806 < count__20805)){
var js_ns = chunk__20804.cljs$core$IIndexed$_nth$arity$2(null, i__20806);
var require_str_21192 = ["var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns)," = shadow.js.require(\"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns),"\");"].join('');
shadow.cljs.devtools.client.browser.script_eval(require_str_21192);


var G__21193 = seq__20803;
var G__21194 = chunk__20804;
var G__21195 = count__20805;
var G__21196 = (i__20806 + (1));
seq__20803 = G__21193;
chunk__20804 = G__21194;
count__20805 = G__21195;
i__20806 = G__21196;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__20803);
if(temp__5804__auto__){
var seq__20803__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__20803__$1)){
var c__5525__auto__ = cljs.core.chunk_first(seq__20803__$1);
var G__21197 = cljs.core.chunk_rest(seq__20803__$1);
var G__21198 = c__5525__auto__;
var G__21199 = cljs.core.count(c__5525__auto__);
var G__21200 = (0);
seq__20803 = G__21197;
chunk__20804 = G__21198;
count__20805 = G__21199;
i__20806 = G__21200;
continue;
} else {
var js_ns = cljs.core.first(seq__20803__$1);
var require_str_21201 = ["var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns)," = shadow.js.require(\"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns),"\");"].join('');
shadow.cljs.devtools.client.browser.script_eval(require_str_21201);


var G__21202 = cljs.core.next(seq__20803__$1);
var G__21203 = null;
var G__21204 = (0);
var G__21205 = (0);
seq__20803 = G__21202;
chunk__20804 = G__21203;
count__20805 = G__21204;
i__20806 = G__21205;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.cljs.devtools.client.browser.handle_build_complete = (function shadow$cljs$devtools$client$browser$handle_build_complete(runtime,p__20816){
var map__20817 = p__20816;
var map__20817__$1 = cljs.core.__destructure_map(map__20817);
var msg = map__20817__$1;
var info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20817__$1,new cljs.core.Keyword(null,"info","info",-317069002));
var reload_info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20817__$1,new cljs.core.Keyword(null,"reload-info","reload-info",1648088086));
var warnings = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.distinct.cljs$core$IFn$_invoke$arity$1((function (){var iter__5480__auto__ = (function shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__20818(s__20819){
return (new cljs.core.LazySeq(null,(function (){
var s__20819__$1 = s__20819;
while(true){
var temp__5804__auto__ = cljs.core.seq(s__20819__$1);
if(temp__5804__auto__){
var xs__6360__auto__ = temp__5804__auto__;
var map__20825 = cljs.core.first(xs__6360__auto__);
var map__20825__$1 = cljs.core.__destructure_map(map__20825);
var src = map__20825__$1;
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20825__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var warnings = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20825__$1,new cljs.core.Keyword(null,"warnings","warnings",-735437651));
if(cljs.core.not(new cljs.core.Keyword(null,"from-jar","from-jar",1050932827).cljs$core$IFn$_invoke$arity$1(src))){
var iterys__5476__auto__ = ((function (s__20819__$1,map__20825,map__20825__$1,src,resource_name,warnings,xs__6360__auto__,temp__5804__auto__,map__20817,map__20817__$1,msg,info,reload_info){
return (function shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__20818_$_iter__20820(s__20821){
return (new cljs.core.LazySeq(null,((function (s__20819__$1,map__20825,map__20825__$1,src,resource_name,warnings,xs__6360__auto__,temp__5804__auto__,map__20817,map__20817__$1,msg,info,reload_info){
return (function (){
var s__20821__$1 = s__20821;
while(true){
var temp__5804__auto____$1 = cljs.core.seq(s__20821__$1);
if(temp__5804__auto____$1){
var s__20821__$2 = temp__5804__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__20821__$2)){
var c__5478__auto__ = cljs.core.chunk_first(s__20821__$2);
var size__5479__auto__ = cljs.core.count(c__5478__auto__);
var b__20823 = cljs.core.chunk_buffer(size__5479__auto__);
if((function (){var i__20822 = (0);
while(true){
if((i__20822 < size__5479__auto__)){
var warning = cljs.core._nth(c__5478__auto__,i__20822);
cljs.core.chunk_append(b__20823,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(warning,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100),resource_name));

var G__21206 = (i__20822 + (1));
i__20822 = G__21206;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__20823),shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__20818_$_iter__20820(cljs.core.chunk_rest(s__20821__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__20823),null);
}
} else {
var warning = cljs.core.first(s__20821__$2);
return cljs.core.cons(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(warning,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100),resource_name),shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__20818_$_iter__20820(cljs.core.rest(s__20821__$2)));
}
} else {
return null;
}
break;
}
});})(s__20819__$1,map__20825,map__20825__$1,src,resource_name,warnings,xs__6360__auto__,temp__5804__auto__,map__20817,map__20817__$1,msg,info,reload_info))
,null,null));
});})(s__20819__$1,map__20825,map__20825__$1,src,resource_name,warnings,xs__6360__auto__,temp__5804__auto__,map__20817,map__20817__$1,msg,info,reload_info))
;
var fs__5477__auto__ = cljs.core.seq(iterys__5476__auto__(warnings));
if(fs__5477__auto__){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(fs__5477__auto__,shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__20818(cljs.core.rest(s__20819__$1)));
} else {
var G__21207 = cljs.core.rest(s__20819__$1);
s__20819__$1 = G__21207;
continue;
}
} else {
var G__21208 = cljs.core.rest(s__20819__$1);
s__20819__$1 = G__21208;
continue;
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5480__auto__(new cljs.core.Keyword(null,"sources","sources",-321166424).cljs$core$IFn$_invoke$arity$1(info));
})()));
if(shadow.cljs.devtools.client.env.log){
var seq__20826_21209 = cljs.core.seq(warnings);
var chunk__20827_21210 = null;
var count__20828_21211 = (0);
var i__20829_21212 = (0);
while(true){
if((i__20829_21212 < count__20828_21211)){
var map__20832_21213 = chunk__20827_21210.cljs$core$IIndexed$_nth$arity$2(null, i__20829_21212);
var map__20832_21214__$1 = cljs.core.__destructure_map(map__20832_21213);
var w_21215 = map__20832_21214__$1;
var msg_21216__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20832_21214__$1,new cljs.core.Keyword(null,"msg","msg",-1386103444));
var line_21217 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20832_21214__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column_21218 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20832_21214__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var resource_name_21219 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20832_21214__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
console.warn(["BUILD-WARNING in ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name_21219)," at [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line_21217),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column_21218),"]\n\t",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg_21216__$1)].join(''));


var G__21220 = seq__20826_21209;
var G__21221 = chunk__20827_21210;
var G__21222 = count__20828_21211;
var G__21223 = (i__20829_21212 + (1));
seq__20826_21209 = G__21220;
chunk__20827_21210 = G__21221;
count__20828_21211 = G__21222;
i__20829_21212 = G__21223;
continue;
} else {
var temp__5804__auto___21224 = cljs.core.seq(seq__20826_21209);
if(temp__5804__auto___21224){
var seq__20826_21225__$1 = temp__5804__auto___21224;
if(cljs.core.chunked_seq_QMARK_(seq__20826_21225__$1)){
var c__5525__auto___21226 = cljs.core.chunk_first(seq__20826_21225__$1);
var G__21227 = cljs.core.chunk_rest(seq__20826_21225__$1);
var G__21228 = c__5525__auto___21226;
var G__21229 = cljs.core.count(c__5525__auto___21226);
var G__21230 = (0);
seq__20826_21209 = G__21227;
chunk__20827_21210 = G__21228;
count__20828_21211 = G__21229;
i__20829_21212 = G__21230;
continue;
} else {
var map__20833_21231 = cljs.core.first(seq__20826_21225__$1);
var map__20833_21232__$1 = cljs.core.__destructure_map(map__20833_21231);
var w_21233 = map__20833_21232__$1;
var msg_21234__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20833_21232__$1,new cljs.core.Keyword(null,"msg","msg",-1386103444));
var line_21235 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20833_21232__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column_21236 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20833_21232__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var resource_name_21237 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20833_21232__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
console.warn(["BUILD-WARNING in ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name_21237)," at [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line_21235),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column_21236),"]\n\t",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg_21234__$1)].join(''));


var G__21238 = cljs.core.next(seq__20826_21225__$1);
var G__21239 = null;
var G__21240 = (0);
var G__21241 = (0);
seq__20826_21209 = G__21238;
chunk__20827_21210 = G__21239;
count__20828_21211 = G__21240;
i__20829_21212 = G__21241;
continue;
}
} else {
}
}
break;
}
} else {
}

if((!(shadow.cljs.devtools.client.env.autoload))){
return shadow.cljs.devtools.client.hud.load_end_success();
} else {
if(((cljs.core.empty_QMARK_(warnings)) || (shadow.cljs.devtools.client.env.ignore_warnings))){
var sources_to_get = shadow.cljs.devtools.client.env.filter_reload_sources(info,reload_info);
if(cljs.core.not(cljs.core.seq(sources_to_get))){
return shadow.cljs.devtools.client.hud.load_end_success();
} else {
if(cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"after-load","after-load",-1278503285)], null)))){
} else {
shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("reloading code but no :after-load hooks are configured!",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["https://shadow-cljs.github.io/docs/UsersGuide.html#_lifecycle_hooks"], 0));
}

return shadow.cljs.devtools.client.shared.load_sources(runtime,sources_to_get,(function (p1__20814_SHARP_){
return shadow.cljs.devtools.client.browser.do_js_reload(msg,p1__20814_SHARP_,shadow.cljs.devtools.client.hud.load_end_success,shadow.cljs.devtools.client.hud.load_failure);
}));
}
} else {
return null;
}
}
});
shadow.cljs.devtools.client.browser.page_load_uri = (cljs.core.truth_(goog.global.document)?goog.Uri.parse(document.location.href):null);
shadow.cljs.devtools.client.browser.match_paths = (function shadow$cljs$devtools$client$browser$match_paths(old,new$){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("file",shadow.cljs.devtools.client.browser.page_load_uri.getScheme())){
var rel_new = cljs.core.subs.cljs$core$IFn$_invoke$arity$2(new$,(1));
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(old,rel_new)) || (clojure.string.starts_with_QMARK_(old,[rel_new,"?"].join(''))))){
return rel_new;
} else {
return null;
}
} else {
var node_uri = goog.Uri.parse(old);
var node_uri_resolved = shadow.cljs.devtools.client.browser.page_load_uri.resolve(node_uri);
var node_abs = node_uri_resolved.getPath();
var and__5000__auto__ = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$1(shadow.cljs.devtools.client.browser.page_load_uri.hasSameDomainAs(node_uri))) || (cljs.core.not(node_uri.hasDomain())));
if(and__5000__auto__){
var and__5000__auto____$1 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(node_abs,new$);
if(and__5000__auto____$1){
return new$;
} else {
return and__5000__auto____$1;
}
} else {
return and__5000__auto__;
}
}
});
shadow.cljs.devtools.client.browser.handle_asset_update = (function shadow$cljs$devtools$client$browser$handle_asset_update(p__20834){
var map__20835 = p__20834;
var map__20835__$1 = cljs.core.__destructure_map(map__20835);
var msg = map__20835__$1;
var updates = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20835__$1,new cljs.core.Keyword(null,"updates","updates",2013983452));
var reload_info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20835__$1,new cljs.core.Keyword(null,"reload-info","reload-info",1648088086));
var seq__20836 = cljs.core.seq(updates);
var chunk__20838 = null;
var count__20839 = (0);
var i__20840 = (0);
while(true){
if((i__20840 < count__20839)){
var path = chunk__20838.cljs$core$IIndexed$_nth$arity$2(null, i__20840);
if(clojure.string.ends_with_QMARK_(path,"css")){
var seq__20995_21244 = cljs.core.seq(cljs.core.array_seq.cljs$core$IFn$_invoke$arity$1(document.querySelectorAll("link[rel=\"stylesheet\"]")));
var chunk__20999_21245 = null;
var count__21000_21246 = (0);
var i__21001_21247 = (0);
while(true){
if((i__21001_21247 < count__21000_21246)){
var node_21248 = chunk__20999_21245.cljs$core$IIndexed$_nth$arity$2(null, i__21001_21247);
if(cljs.core.not(node_21248.shadow$old)){
var path_match_21249 = shadow.cljs.devtools.client.browser.match_paths(node_21248.getAttribute("href"),path);
if(cljs.core.truth_(path_match_21249)){
var new_link_21250 = (function (){var G__21027 = node_21248.cloneNode(true);
G__21027.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_21249),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__21027;
})();
(node_21248.shadow$old = true);

(new_link_21250.onload = ((function (seq__20995_21244,chunk__20999_21245,count__21000_21246,i__21001_21247,seq__20836,chunk__20838,count__20839,i__20840,new_link_21250,path_match_21249,node_21248,path,map__20835,map__20835__$1,msg,updates,reload_info){
return (function (e){
var seq__21028_21251 = cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"asset-load","asset-load",-1925902322)], null)));
var chunk__21030_21252 = null;
var count__21031_21253 = (0);
var i__21032_21254 = (0);
while(true){
if((i__21032_21254 < count__21031_21253)){
var map__21036_21255 = chunk__21030_21252.cljs$core$IIndexed$_nth$arity$2(null, i__21032_21254);
var map__21036_21256__$1 = cljs.core.__destructure_map(map__21036_21255);
var task_21257 = map__21036_21256__$1;
var fn_str_21258 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21036_21256__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_21259 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21036_21256__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_21260 = goog.getObjectByName(fn_str_21258,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_21259)].join(''));

(fn_obj_21260.cljs$core$IFn$_invoke$arity$2 ? fn_obj_21260.cljs$core$IFn$_invoke$arity$2(path,new_link_21250) : fn_obj_21260.call(null, path,new_link_21250));


var G__21261 = seq__21028_21251;
var G__21262 = chunk__21030_21252;
var G__21263 = count__21031_21253;
var G__21264 = (i__21032_21254 + (1));
seq__21028_21251 = G__21261;
chunk__21030_21252 = G__21262;
count__21031_21253 = G__21263;
i__21032_21254 = G__21264;
continue;
} else {
var temp__5804__auto___21265 = cljs.core.seq(seq__21028_21251);
if(temp__5804__auto___21265){
var seq__21028_21266__$1 = temp__5804__auto___21265;
if(cljs.core.chunked_seq_QMARK_(seq__21028_21266__$1)){
var c__5525__auto___21267 = cljs.core.chunk_first(seq__21028_21266__$1);
var G__21268 = cljs.core.chunk_rest(seq__21028_21266__$1);
var G__21269 = c__5525__auto___21267;
var G__21270 = cljs.core.count(c__5525__auto___21267);
var G__21271 = (0);
seq__21028_21251 = G__21268;
chunk__21030_21252 = G__21269;
count__21031_21253 = G__21270;
i__21032_21254 = G__21271;
continue;
} else {
var map__21037_21272 = cljs.core.first(seq__21028_21266__$1);
var map__21037_21273__$1 = cljs.core.__destructure_map(map__21037_21272);
var task_21274 = map__21037_21273__$1;
var fn_str_21275 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21037_21273__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_21276 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21037_21273__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_21277 = goog.getObjectByName(fn_str_21275,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_21276)].join(''));

(fn_obj_21277.cljs$core$IFn$_invoke$arity$2 ? fn_obj_21277.cljs$core$IFn$_invoke$arity$2(path,new_link_21250) : fn_obj_21277.call(null, path,new_link_21250));


var G__21278 = cljs.core.next(seq__21028_21266__$1);
var G__21279 = null;
var G__21280 = (0);
var G__21281 = (0);
seq__21028_21251 = G__21278;
chunk__21030_21252 = G__21279;
count__21031_21253 = G__21280;
i__21032_21254 = G__21281;
continue;
}
} else {
}
}
break;
}

return goog.dom.removeNode(node_21248);
});})(seq__20995_21244,chunk__20999_21245,count__21000_21246,i__21001_21247,seq__20836,chunk__20838,count__20839,i__20840,new_link_21250,path_match_21249,node_21248,path,map__20835,map__20835__$1,msg,updates,reload_info))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_21249], 0));

goog.dom.insertSiblingAfter(new_link_21250,node_21248);


var G__21282 = seq__20995_21244;
var G__21283 = chunk__20999_21245;
var G__21284 = count__21000_21246;
var G__21285 = (i__21001_21247 + (1));
seq__20995_21244 = G__21282;
chunk__20999_21245 = G__21283;
count__21000_21246 = G__21284;
i__21001_21247 = G__21285;
continue;
} else {
var G__21286 = seq__20995_21244;
var G__21287 = chunk__20999_21245;
var G__21288 = count__21000_21246;
var G__21289 = (i__21001_21247 + (1));
seq__20995_21244 = G__21286;
chunk__20999_21245 = G__21287;
count__21000_21246 = G__21288;
i__21001_21247 = G__21289;
continue;
}
} else {
var G__21290 = seq__20995_21244;
var G__21291 = chunk__20999_21245;
var G__21292 = count__21000_21246;
var G__21293 = (i__21001_21247 + (1));
seq__20995_21244 = G__21290;
chunk__20999_21245 = G__21291;
count__21000_21246 = G__21292;
i__21001_21247 = G__21293;
continue;
}
} else {
var temp__5804__auto___21294 = cljs.core.seq(seq__20995_21244);
if(temp__5804__auto___21294){
var seq__20995_21295__$1 = temp__5804__auto___21294;
if(cljs.core.chunked_seq_QMARK_(seq__20995_21295__$1)){
var c__5525__auto___21296 = cljs.core.chunk_first(seq__20995_21295__$1);
var G__21297 = cljs.core.chunk_rest(seq__20995_21295__$1);
var G__21298 = c__5525__auto___21296;
var G__21299 = cljs.core.count(c__5525__auto___21296);
var G__21300 = (0);
seq__20995_21244 = G__21297;
chunk__20999_21245 = G__21298;
count__21000_21246 = G__21299;
i__21001_21247 = G__21300;
continue;
} else {
var node_21301 = cljs.core.first(seq__20995_21295__$1);
if(cljs.core.not(node_21301.shadow$old)){
var path_match_21302 = shadow.cljs.devtools.client.browser.match_paths(node_21301.getAttribute("href"),path);
if(cljs.core.truth_(path_match_21302)){
var new_link_21303 = (function (){var G__21038 = node_21301.cloneNode(true);
G__21038.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_21302),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__21038;
})();
(node_21301.shadow$old = true);

(new_link_21303.onload = ((function (seq__20995_21244,chunk__20999_21245,count__21000_21246,i__21001_21247,seq__20836,chunk__20838,count__20839,i__20840,new_link_21303,path_match_21302,node_21301,seq__20995_21295__$1,temp__5804__auto___21294,path,map__20835,map__20835__$1,msg,updates,reload_info){
return (function (e){
var seq__21039_21304 = cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"asset-load","asset-load",-1925902322)], null)));
var chunk__21041_21305 = null;
var count__21042_21306 = (0);
var i__21043_21307 = (0);
while(true){
if((i__21043_21307 < count__21042_21306)){
var map__21047_21308 = chunk__21041_21305.cljs$core$IIndexed$_nth$arity$2(null, i__21043_21307);
var map__21047_21309__$1 = cljs.core.__destructure_map(map__21047_21308);
var task_21310 = map__21047_21309__$1;
var fn_str_21311 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21047_21309__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_21312 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21047_21309__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_21313 = goog.getObjectByName(fn_str_21311,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_21312)].join(''));

(fn_obj_21313.cljs$core$IFn$_invoke$arity$2 ? fn_obj_21313.cljs$core$IFn$_invoke$arity$2(path,new_link_21303) : fn_obj_21313.call(null, path,new_link_21303));


var G__21314 = seq__21039_21304;
var G__21315 = chunk__21041_21305;
var G__21316 = count__21042_21306;
var G__21317 = (i__21043_21307 + (1));
seq__21039_21304 = G__21314;
chunk__21041_21305 = G__21315;
count__21042_21306 = G__21316;
i__21043_21307 = G__21317;
continue;
} else {
var temp__5804__auto___21318__$1 = cljs.core.seq(seq__21039_21304);
if(temp__5804__auto___21318__$1){
var seq__21039_21319__$1 = temp__5804__auto___21318__$1;
if(cljs.core.chunked_seq_QMARK_(seq__21039_21319__$1)){
var c__5525__auto___21320 = cljs.core.chunk_first(seq__21039_21319__$1);
var G__21321 = cljs.core.chunk_rest(seq__21039_21319__$1);
var G__21322 = c__5525__auto___21320;
var G__21323 = cljs.core.count(c__5525__auto___21320);
var G__21324 = (0);
seq__21039_21304 = G__21321;
chunk__21041_21305 = G__21322;
count__21042_21306 = G__21323;
i__21043_21307 = G__21324;
continue;
} else {
var map__21048_21325 = cljs.core.first(seq__21039_21319__$1);
var map__21048_21326__$1 = cljs.core.__destructure_map(map__21048_21325);
var task_21327 = map__21048_21326__$1;
var fn_str_21328 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21048_21326__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_21329 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21048_21326__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_21330 = goog.getObjectByName(fn_str_21328,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_21329)].join(''));

(fn_obj_21330.cljs$core$IFn$_invoke$arity$2 ? fn_obj_21330.cljs$core$IFn$_invoke$arity$2(path,new_link_21303) : fn_obj_21330.call(null, path,new_link_21303));


var G__21331 = cljs.core.next(seq__21039_21319__$1);
var G__21332 = null;
var G__21333 = (0);
var G__21334 = (0);
seq__21039_21304 = G__21331;
chunk__21041_21305 = G__21332;
count__21042_21306 = G__21333;
i__21043_21307 = G__21334;
continue;
}
} else {
}
}
break;
}

return goog.dom.removeNode(node_21301);
});})(seq__20995_21244,chunk__20999_21245,count__21000_21246,i__21001_21247,seq__20836,chunk__20838,count__20839,i__20840,new_link_21303,path_match_21302,node_21301,seq__20995_21295__$1,temp__5804__auto___21294,path,map__20835,map__20835__$1,msg,updates,reload_info))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_21302], 0));

goog.dom.insertSiblingAfter(new_link_21303,node_21301);


var G__21335 = cljs.core.next(seq__20995_21295__$1);
var G__21336 = null;
var G__21337 = (0);
var G__21338 = (0);
seq__20995_21244 = G__21335;
chunk__20999_21245 = G__21336;
count__21000_21246 = G__21337;
i__21001_21247 = G__21338;
continue;
} else {
var G__21339 = cljs.core.next(seq__20995_21295__$1);
var G__21340 = null;
var G__21341 = (0);
var G__21342 = (0);
seq__20995_21244 = G__21339;
chunk__20999_21245 = G__21340;
count__21000_21246 = G__21341;
i__21001_21247 = G__21342;
continue;
}
} else {
var G__21343 = cljs.core.next(seq__20995_21295__$1);
var G__21344 = null;
var G__21345 = (0);
var G__21346 = (0);
seq__20995_21244 = G__21343;
chunk__20999_21245 = G__21344;
count__21000_21246 = G__21345;
i__21001_21247 = G__21346;
continue;
}
}
} else {
}
}
break;
}


var G__21347 = seq__20836;
var G__21348 = chunk__20838;
var G__21349 = count__20839;
var G__21350 = (i__20840 + (1));
seq__20836 = G__21347;
chunk__20838 = G__21348;
count__20839 = G__21349;
i__20840 = G__21350;
continue;
} else {
var G__21351 = seq__20836;
var G__21352 = chunk__20838;
var G__21353 = count__20839;
var G__21354 = (i__20840 + (1));
seq__20836 = G__21351;
chunk__20838 = G__21352;
count__20839 = G__21353;
i__20840 = G__21354;
continue;
}
} else {
var temp__5804__auto__ = cljs.core.seq(seq__20836);
if(temp__5804__auto__){
var seq__20836__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__20836__$1)){
var c__5525__auto__ = cljs.core.chunk_first(seq__20836__$1);
var G__21355 = cljs.core.chunk_rest(seq__20836__$1);
var G__21356 = c__5525__auto__;
var G__21357 = cljs.core.count(c__5525__auto__);
var G__21358 = (0);
seq__20836 = G__21355;
chunk__20838 = G__21356;
count__20839 = G__21357;
i__20840 = G__21358;
continue;
} else {
var path = cljs.core.first(seq__20836__$1);
if(clojure.string.ends_with_QMARK_(path,"css")){
var seq__21049_21362 = cljs.core.seq(cljs.core.array_seq.cljs$core$IFn$_invoke$arity$1(document.querySelectorAll("link[rel=\"stylesheet\"]")));
var chunk__21053_21363 = null;
var count__21054_21364 = (0);
var i__21055_21365 = (0);
while(true){
if((i__21055_21365 < count__21054_21364)){
var node_21366 = chunk__21053_21363.cljs$core$IIndexed$_nth$arity$2(null, i__21055_21365);
if(cljs.core.not(node_21366.shadow$old)){
var path_match_21368 = shadow.cljs.devtools.client.browser.match_paths(node_21366.getAttribute("href"),path);
if(cljs.core.truth_(path_match_21368)){
var new_link_21369 = (function (){var G__21094 = node_21366.cloneNode(true);
G__21094.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_21368),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__21094;
})();
(node_21366.shadow$old = true);

(new_link_21369.onload = ((function (seq__21049_21362,chunk__21053_21363,count__21054_21364,i__21055_21365,seq__20836,chunk__20838,count__20839,i__20840,new_link_21369,path_match_21368,node_21366,path,seq__20836__$1,temp__5804__auto__,map__20835,map__20835__$1,msg,updates,reload_info){
return (function (e){
var seq__21095_21370 = cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"asset-load","asset-load",-1925902322)], null)));
var chunk__21097_21371 = null;
var count__21098_21372 = (0);
var i__21099_21373 = (0);
while(true){
if((i__21099_21373 < count__21098_21372)){
var map__21105_21374 = chunk__21097_21371.cljs$core$IIndexed$_nth$arity$2(null, i__21099_21373);
var map__21105_21375__$1 = cljs.core.__destructure_map(map__21105_21374);
var task_21376 = map__21105_21375__$1;
var fn_str_21377 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21105_21375__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_21378 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21105_21375__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_21380 = goog.getObjectByName(fn_str_21377,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_21378)].join(''));

(fn_obj_21380.cljs$core$IFn$_invoke$arity$2 ? fn_obj_21380.cljs$core$IFn$_invoke$arity$2(path,new_link_21369) : fn_obj_21380.call(null, path,new_link_21369));


var G__21382 = seq__21095_21370;
var G__21383 = chunk__21097_21371;
var G__21384 = count__21098_21372;
var G__21385 = (i__21099_21373 + (1));
seq__21095_21370 = G__21382;
chunk__21097_21371 = G__21383;
count__21098_21372 = G__21384;
i__21099_21373 = G__21385;
continue;
} else {
var temp__5804__auto___21386__$1 = cljs.core.seq(seq__21095_21370);
if(temp__5804__auto___21386__$1){
var seq__21095_21387__$1 = temp__5804__auto___21386__$1;
if(cljs.core.chunked_seq_QMARK_(seq__21095_21387__$1)){
var c__5525__auto___21388 = cljs.core.chunk_first(seq__21095_21387__$1);
var G__21389 = cljs.core.chunk_rest(seq__21095_21387__$1);
var G__21390 = c__5525__auto___21388;
var G__21391 = cljs.core.count(c__5525__auto___21388);
var G__21392 = (0);
seq__21095_21370 = G__21389;
chunk__21097_21371 = G__21390;
count__21098_21372 = G__21391;
i__21099_21373 = G__21392;
continue;
} else {
var map__21107_21393 = cljs.core.first(seq__21095_21387__$1);
var map__21107_21394__$1 = cljs.core.__destructure_map(map__21107_21393);
var task_21395 = map__21107_21394__$1;
var fn_str_21396 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21107_21394__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_21397 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21107_21394__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_21398 = goog.getObjectByName(fn_str_21396,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_21397)].join(''));

(fn_obj_21398.cljs$core$IFn$_invoke$arity$2 ? fn_obj_21398.cljs$core$IFn$_invoke$arity$2(path,new_link_21369) : fn_obj_21398.call(null, path,new_link_21369));


var G__21399 = cljs.core.next(seq__21095_21387__$1);
var G__21400 = null;
var G__21401 = (0);
var G__21402 = (0);
seq__21095_21370 = G__21399;
chunk__21097_21371 = G__21400;
count__21098_21372 = G__21401;
i__21099_21373 = G__21402;
continue;
}
} else {
}
}
break;
}

return goog.dom.removeNode(node_21366);
});})(seq__21049_21362,chunk__21053_21363,count__21054_21364,i__21055_21365,seq__20836,chunk__20838,count__20839,i__20840,new_link_21369,path_match_21368,node_21366,path,seq__20836__$1,temp__5804__auto__,map__20835,map__20835__$1,msg,updates,reload_info))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_21368], 0));

goog.dom.insertSiblingAfter(new_link_21369,node_21366);


var G__21403 = seq__21049_21362;
var G__21404 = chunk__21053_21363;
var G__21405 = count__21054_21364;
var G__21406 = (i__21055_21365 + (1));
seq__21049_21362 = G__21403;
chunk__21053_21363 = G__21404;
count__21054_21364 = G__21405;
i__21055_21365 = G__21406;
continue;
} else {
var G__21407 = seq__21049_21362;
var G__21408 = chunk__21053_21363;
var G__21409 = count__21054_21364;
var G__21410 = (i__21055_21365 + (1));
seq__21049_21362 = G__21407;
chunk__21053_21363 = G__21408;
count__21054_21364 = G__21409;
i__21055_21365 = G__21410;
continue;
}
} else {
var G__21411 = seq__21049_21362;
var G__21412 = chunk__21053_21363;
var G__21413 = count__21054_21364;
var G__21414 = (i__21055_21365 + (1));
seq__21049_21362 = G__21411;
chunk__21053_21363 = G__21412;
count__21054_21364 = G__21413;
i__21055_21365 = G__21414;
continue;
}
} else {
var temp__5804__auto___21415__$1 = cljs.core.seq(seq__21049_21362);
if(temp__5804__auto___21415__$1){
var seq__21049_21416__$1 = temp__5804__auto___21415__$1;
if(cljs.core.chunked_seq_QMARK_(seq__21049_21416__$1)){
var c__5525__auto___21417 = cljs.core.chunk_first(seq__21049_21416__$1);
var G__21418 = cljs.core.chunk_rest(seq__21049_21416__$1);
var G__21419 = c__5525__auto___21417;
var G__21420 = cljs.core.count(c__5525__auto___21417);
var G__21421 = (0);
seq__21049_21362 = G__21418;
chunk__21053_21363 = G__21419;
count__21054_21364 = G__21420;
i__21055_21365 = G__21421;
continue;
} else {
var node_21422 = cljs.core.first(seq__21049_21416__$1);
if(cljs.core.not(node_21422.shadow$old)){
var path_match_21423 = shadow.cljs.devtools.client.browser.match_paths(node_21422.getAttribute("href"),path);
if(cljs.core.truth_(path_match_21423)){
var new_link_21424 = (function (){var G__21108 = node_21422.cloneNode(true);
G__21108.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_21423),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__21108;
})();
(node_21422.shadow$old = true);

(new_link_21424.onload = ((function (seq__21049_21362,chunk__21053_21363,count__21054_21364,i__21055_21365,seq__20836,chunk__20838,count__20839,i__20840,new_link_21424,path_match_21423,node_21422,seq__21049_21416__$1,temp__5804__auto___21415__$1,path,seq__20836__$1,temp__5804__auto__,map__20835,map__20835__$1,msg,updates,reload_info){
return (function (e){
var seq__21109_21425 = cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"asset-load","asset-load",-1925902322)], null)));
var chunk__21111_21426 = null;
var count__21112_21427 = (0);
var i__21113_21428 = (0);
while(true){
if((i__21113_21428 < count__21112_21427)){
var map__21117_21429 = chunk__21111_21426.cljs$core$IIndexed$_nth$arity$2(null, i__21113_21428);
var map__21117_21430__$1 = cljs.core.__destructure_map(map__21117_21429);
var task_21431 = map__21117_21430__$1;
var fn_str_21432 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21117_21430__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_21433 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21117_21430__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_21434 = goog.getObjectByName(fn_str_21432,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_21433)].join(''));

(fn_obj_21434.cljs$core$IFn$_invoke$arity$2 ? fn_obj_21434.cljs$core$IFn$_invoke$arity$2(path,new_link_21424) : fn_obj_21434.call(null, path,new_link_21424));


var G__21435 = seq__21109_21425;
var G__21436 = chunk__21111_21426;
var G__21437 = count__21112_21427;
var G__21438 = (i__21113_21428 + (1));
seq__21109_21425 = G__21435;
chunk__21111_21426 = G__21436;
count__21112_21427 = G__21437;
i__21113_21428 = G__21438;
continue;
} else {
var temp__5804__auto___21439__$2 = cljs.core.seq(seq__21109_21425);
if(temp__5804__auto___21439__$2){
var seq__21109_21440__$1 = temp__5804__auto___21439__$2;
if(cljs.core.chunked_seq_QMARK_(seq__21109_21440__$1)){
var c__5525__auto___21441 = cljs.core.chunk_first(seq__21109_21440__$1);
var G__21442 = cljs.core.chunk_rest(seq__21109_21440__$1);
var G__21443 = c__5525__auto___21441;
var G__21444 = cljs.core.count(c__5525__auto___21441);
var G__21445 = (0);
seq__21109_21425 = G__21442;
chunk__21111_21426 = G__21443;
count__21112_21427 = G__21444;
i__21113_21428 = G__21445;
continue;
} else {
var map__21119_21446 = cljs.core.first(seq__21109_21440__$1);
var map__21119_21447__$1 = cljs.core.__destructure_map(map__21119_21446);
var task_21448 = map__21119_21447__$1;
var fn_str_21449 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21119_21447__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_21450 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21119_21447__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_21451 = goog.getObjectByName(fn_str_21449,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_21450)].join(''));

(fn_obj_21451.cljs$core$IFn$_invoke$arity$2 ? fn_obj_21451.cljs$core$IFn$_invoke$arity$2(path,new_link_21424) : fn_obj_21451.call(null, path,new_link_21424));


var G__21452 = cljs.core.next(seq__21109_21440__$1);
var G__21453 = null;
var G__21454 = (0);
var G__21455 = (0);
seq__21109_21425 = G__21452;
chunk__21111_21426 = G__21453;
count__21112_21427 = G__21454;
i__21113_21428 = G__21455;
continue;
}
} else {
}
}
break;
}

return goog.dom.removeNode(node_21422);
});})(seq__21049_21362,chunk__21053_21363,count__21054_21364,i__21055_21365,seq__20836,chunk__20838,count__20839,i__20840,new_link_21424,path_match_21423,node_21422,seq__21049_21416__$1,temp__5804__auto___21415__$1,path,seq__20836__$1,temp__5804__auto__,map__20835,map__20835__$1,msg,updates,reload_info))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_21423], 0));

goog.dom.insertSiblingAfter(new_link_21424,node_21422);


var G__21456 = cljs.core.next(seq__21049_21416__$1);
var G__21457 = null;
var G__21458 = (0);
var G__21459 = (0);
seq__21049_21362 = G__21456;
chunk__21053_21363 = G__21457;
count__21054_21364 = G__21458;
i__21055_21365 = G__21459;
continue;
} else {
var G__21460 = cljs.core.next(seq__21049_21416__$1);
var G__21461 = null;
var G__21462 = (0);
var G__21463 = (0);
seq__21049_21362 = G__21460;
chunk__21053_21363 = G__21461;
count__21054_21364 = G__21462;
i__21055_21365 = G__21463;
continue;
}
} else {
var G__21464 = cljs.core.next(seq__21049_21416__$1);
var G__21465 = null;
var G__21466 = (0);
var G__21467 = (0);
seq__21049_21362 = G__21464;
chunk__21053_21363 = G__21465;
count__21054_21364 = G__21466;
i__21055_21365 = G__21467;
continue;
}
}
} else {
}
}
break;
}


var G__21468 = cljs.core.next(seq__20836__$1);
var G__21469 = null;
var G__21470 = (0);
var G__21471 = (0);
seq__20836 = G__21468;
chunk__20838 = G__21469;
count__20839 = G__21470;
i__20840 = G__21471;
continue;
} else {
var G__21472 = cljs.core.next(seq__20836__$1);
var G__21473 = null;
var G__21474 = (0);
var G__21475 = (0);
seq__20836 = G__21472;
chunk__20838 = G__21473;
count__20839 = G__21474;
i__20840 = G__21475;
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
shadow.cljs.devtools.client.browser.global_eval = (function shadow$cljs$devtools$client$browser$global_eval(js){
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2("undefined",typeof(module))){
return eval(js);
} else {
return (0,eval)(js);;
}
});
shadow.cljs.devtools.client.browser.runtime_info = (((typeof SHADOW_CONFIG !== 'undefined'))?shadow.json.to_clj.cljs$core$IFn$_invoke$arity$1(SHADOW_CONFIG):null);
shadow.cljs.devtools.client.browser.client_info = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([shadow.cljs.devtools.client.browser.runtime_info,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"host","host",-1558485167),(cljs.core.truth_(goog.global.document)?new cljs.core.Keyword(null,"browser","browser",828191719):new cljs.core.Keyword(null,"browser-worker","browser-worker",1638998282)),new cljs.core.Keyword(null,"user-agent","user-agent",1220426212),[(cljs.core.truth_(goog.userAgent.OPERA)?"Opera":(cljs.core.truth_(goog.userAgent.product.CHROME)?"Chrome":(cljs.core.truth_(goog.userAgent.IE)?"MSIE":(cljs.core.truth_(goog.userAgent.EDGE)?"Edge":(cljs.core.truth_(goog.userAgent.GECKO)?"Firefox":(cljs.core.truth_(goog.userAgent.SAFARI)?"Safari":(cljs.core.truth_(goog.userAgent.WEBKIT)?"Webkit":null)))))))," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(goog.userAgent.VERSION)," [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(goog.userAgent.PLATFORM),"]"].join(''),new cljs.core.Keyword(null,"dom","dom",-1236537922),(!((goog.global.document == null)))], null)], 0));
if((typeof shadow !== 'undefined') && (typeof shadow.cljs !== 'undefined') && (typeof shadow.cljs.devtools !== 'undefined') && (typeof shadow.cljs.devtools.client !== 'undefined') && (typeof shadow.cljs.devtools.client.browser !== 'undefined') && (typeof shadow.cljs.devtools.client.browser.ws_was_welcome_ref !== 'undefined')){
} else {
shadow.cljs.devtools.client.browser.ws_was_welcome_ref = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(false);
}
if(((shadow.cljs.devtools.client.env.enabled) && ((shadow.cljs.devtools.client.env.worker_client_id > (0))))){
(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$remote$runtime$api$IEvalJS$ = cljs.core.PROTOCOL_SENTINEL);

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$remote$runtime$api$IEvalJS$_js_eval$arity$2 = (function (this$,code){
var this$__$1 = this;
return shadow.cljs.devtools.client.browser.global_eval(code);
}));

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$ = cljs.core.PROTOCOL_SENTINEL);

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$do_invoke$arity$3 = (function (this$,ns,p__21129){
var map__21131 = p__21129;
var map__21131__$1 = cljs.core.__destructure_map(map__21131);
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21131__$1,new cljs.core.Keyword(null,"js","js",1768080579));
var this$__$1 = this;
return shadow.cljs.devtools.client.browser.global_eval(js);
}));

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$do_repl_init$arity$4 = (function (runtime,p__21135,done,error){
var map__21136 = p__21135;
var map__21136__$1 = cljs.core.__destructure_map(map__21136);
var repl_sources = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21136__$1,new cljs.core.Keyword(null,"repl-sources","repl-sources",723867535));
var runtime__$1 = this;
return shadow.cljs.devtools.client.shared.load_sources(runtime__$1,cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2(shadow.cljs.devtools.client.env.src_is_loaded_QMARK_,repl_sources)),(function (sources){
shadow.cljs.devtools.client.browser.do_js_load(sources);

return (done.cljs$core$IFn$_invoke$arity$0 ? done.cljs$core$IFn$_invoke$arity$0() : done.call(null, ));
}));
}));

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$do_repl_require$arity$4 = (function (runtime,p__21137,done,error){
var map__21139 = p__21137;
var map__21139__$1 = cljs.core.__destructure_map(map__21139);
var msg = map__21139__$1;
var sources = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21139__$1,new cljs.core.Keyword(null,"sources","sources",-321166424));
var reload_namespaces = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21139__$1,new cljs.core.Keyword(null,"reload-namespaces","reload-namespaces",250210134));
var js_requires = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21139__$1,new cljs.core.Keyword(null,"js-requires","js-requires",-1311472051));
var runtime__$1 = this;
var sources_to_load = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p__21142){
var map__21145 = p__21142;
var map__21145__$1 = cljs.core.__destructure_map(map__21145);
var src = map__21145__$1;
var provides = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21145__$1,new cljs.core.Keyword(null,"provides","provides",-1634397992));
var and__5000__auto__ = shadow.cljs.devtools.client.env.src_is_loaded_QMARK_(src);
if(cljs.core.truth_(and__5000__auto__)){
return cljs.core.not(cljs.core.some(reload_namespaces,provides));
} else {
return and__5000__auto__;
}
}),sources));
if(cljs.core.not(cljs.core.seq(sources_to_load))){
var G__21147 = cljs.core.PersistentVector.EMPTY;
return (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(G__21147) : done.call(null, G__21147));
} else {
return shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$3(runtime__$1,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"cljs-load-sources","cljs-load-sources",-1458295962),new cljs.core.Keyword(null,"to","to",192099007),shadow.cljs.devtools.client.env.worker_client_id,new cljs.core.Keyword(null,"sources","sources",-321166424),cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentVector.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582)),sources_to_load)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cljs-sources","cljs-sources",31121610),(function (p__21149){
var map__21150 = p__21149;
var map__21150__$1 = cljs.core.__destructure_map(map__21150);
var msg__$1 = map__21150__$1;
var sources__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21150__$1,new cljs.core.Keyword(null,"sources","sources",-321166424));
try{shadow.cljs.devtools.client.browser.do_js_load(sources__$1);

if(cljs.core.seq(js_requires)){
shadow.cljs.devtools.client.browser.do_js_requires(js_requires);
} else {
}

return (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(sources_to_load) : done.call(null, sources_to_load));
}catch (e21151){var ex = e21151;
return (error.cljs$core$IFn$_invoke$arity$1 ? error.cljs$core$IFn$_invoke$arity$1(ex) : error.call(null, ex));
}})], null));
}
}));

shadow.cljs.devtools.client.shared.add_plugin_BANG_(new cljs.core.Keyword("shadow.cljs.devtools.client.browser","client","shadow.cljs.devtools.client.browser/client",-1461019282),cljs.core.PersistentHashSet.EMPTY,(function (p__21152){
var map__21153 = p__21152;
var map__21153__$1 = cljs.core.__destructure_map(map__21153);
var env = map__21153__$1;
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21153__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
var svc = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"runtime","runtime",-1331573996),runtime], null);
shadow.remote.runtime.api.add_extension(runtime,new cljs.core.Keyword("shadow.cljs.devtools.client.browser","client","shadow.cljs.devtools.client.browser/client",-1461019282),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"on-welcome","on-welcome",1895317125),(function (){
cljs.core.reset_BANG_(shadow.cljs.devtools.client.browser.ws_was_welcome_ref,true);

shadow.cljs.devtools.client.hud.connection_error_clear_BANG_();

shadow.cljs.devtools.client.env.patch_goog_BANG_();

return shadow.cljs.devtools.client.browser.devtools_msg(["#",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"client-id","client-id",-464622140).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(new cljs.core.Keyword(null,"state-ref","state-ref",2127874952).cljs$core$IFn$_invoke$arity$1(runtime))))," ready!"].join(''));
}),new cljs.core.Keyword(null,"on-disconnect","on-disconnect",-809021814),(function (e){
if(cljs.core.truth_(cljs.core.deref(shadow.cljs.devtools.client.browser.ws_was_welcome_ref))){
shadow.cljs.devtools.client.hud.connection_error("The Websocket connection was closed!");

return cljs.core.reset_BANG_(shadow.cljs.devtools.client.browser.ws_was_welcome_ref,false);
} else {
return null;
}
}),new cljs.core.Keyword(null,"on-reconnect","on-reconnect",1239988702),(function (e){
return shadow.cljs.devtools.client.hud.connection_error("Reconnecting ...");
}),new cljs.core.Keyword(null,"ops","ops",1237330063),new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"access-denied","access-denied",959449406),(function (msg){
cljs.core.reset_BANG_(shadow.cljs.devtools.client.browser.ws_was_welcome_ref,false);

return shadow.cljs.devtools.client.hud.connection_error(["Stale Output! Your loaded JS was not produced by the running shadow-cljs instance."," Is the watch for this build running?"].join(''));
}),new cljs.core.Keyword(null,"cljs-asset-update","cljs-asset-update",1224093028),(function (msg){
return shadow.cljs.devtools.client.browser.handle_asset_update(msg);
}),new cljs.core.Keyword(null,"cljs-build-configure","cljs-build-configure",-2089891268),(function (msg){
return null;
}),new cljs.core.Keyword(null,"cljs-build-start","cljs-build-start",-725781241),(function (msg){
shadow.cljs.devtools.client.hud.hud_hide();

shadow.cljs.devtools.client.hud.load_start();

return shadow.cljs.devtools.client.env.run_custom_notify_BANG_(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(msg,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"build-start","build-start",-959649480)));
}),new cljs.core.Keyword(null,"cljs-build-complete","cljs-build-complete",273626153),(function (msg){
var msg__$1 = shadow.cljs.devtools.client.env.add_warnings_to_info(msg);
shadow.cljs.devtools.client.hud.connection_error_clear_BANG_();

shadow.cljs.devtools.client.hud.hud_warnings(msg__$1);

shadow.cljs.devtools.client.browser.handle_build_complete(runtime,msg__$1);

return shadow.cljs.devtools.client.env.run_custom_notify_BANG_(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(msg__$1,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"build-complete","build-complete",-501868472)));
}),new cljs.core.Keyword(null,"cljs-build-failure","cljs-build-failure",1718154990),(function (msg){
shadow.cljs.devtools.client.hud.load_end();

shadow.cljs.devtools.client.hud.hud_error(msg);

return shadow.cljs.devtools.client.env.run_custom_notify_BANG_(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(msg,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"build-failure","build-failure",-2107487466)));
}),new cljs.core.Keyword("shadow.cljs.devtools.client.env","worker-notify","shadow.cljs.devtools.client.env/worker-notify",-1456820670),(function (p__21154){
var map__21155 = p__21154;
var map__21155__$1 = cljs.core.__destructure_map(map__21155);
var event_op = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21155__$1,new cljs.core.Keyword(null,"event-op","event-op",200358057));
var client_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21155__$1,new cljs.core.Keyword(null,"client-id","client-id",-464622140));
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"client-disconnect","client-disconnect",640227957),event_op)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(client_id,shadow.cljs.devtools.client.env.worker_client_id)))){
shadow.cljs.devtools.client.hud.connection_error_clear_BANG_();

return shadow.cljs.devtools.client.hud.connection_error("The watch for this build was stopped!");
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"client-connect","client-connect",-1113973888),event_op)){
shadow.cljs.devtools.client.hud.connection_error_clear_BANG_();

return shadow.cljs.devtools.client.hud.connection_error("The watch for this build was restarted. Reload required!");
} else {
return null;
}
}
})], null)], null));

return svc;
}),(function (p__21156){
var map__21157 = p__21156;
var map__21157__$1 = cljs.core.__destructure_map(map__21157);
var svc = map__21157__$1;
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21157__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
return shadow.remote.runtime.api.del_extension(runtime,new cljs.core.Keyword("shadow.cljs.devtools.client.browser","client","shadow.cljs.devtools.client.browser/client",-1461019282));
}));

shadow.cljs.devtools.client.shared.init_runtime_BANG_(shadow.cljs.devtools.client.browser.client_info,shadow.cljs.devtools.client.websocket.start,shadow.cljs.devtools.client.websocket.send,shadow.cljs.devtools.client.websocket.stop);
} else {
}

//# sourceMappingURL=shadow.cljs.devtools.client.browser.js.map
