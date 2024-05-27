goog.provide('shadow.dom');
shadow.dom.transition_supported_QMARK_ = (((typeof window !== 'undefined'))?goog.style.transition.isSupported():null);

/**
 * @interface
 */
shadow.dom.IElement = function(){};

var shadow$dom$IElement$_to_dom$dyn_18852 = (function (this$){
var x__5350__auto__ = (((this$ == null))?null:this$);
var m__5351__auto__ = (shadow.dom._to_dom[goog.typeOf(x__5350__auto__)]);
if((!((m__5351__auto__ == null)))){
return (m__5351__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5351__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__5351__auto__.call(null, this$));
} else {
var m__5349__auto__ = (shadow.dom._to_dom["_"]);
if((!((m__5349__auto__ == null)))){
return (m__5349__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5349__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__5349__auto__.call(null, this$));
} else {
throw cljs.core.missing_protocol("IElement.-to-dom",this$);
}
}
});
shadow.dom._to_dom = (function shadow$dom$_to_dom(this$){
if((((!((this$ == null)))) && ((!((this$.shadow$dom$IElement$_to_dom$arity$1 == null)))))){
return this$.shadow$dom$IElement$_to_dom$arity$1(this$);
} else {
return shadow$dom$IElement$_to_dom$dyn_18852(this$);
}
});


/**
 * @interface
 */
shadow.dom.SVGElement = function(){};

var shadow$dom$SVGElement$_to_svg$dyn_18853 = (function (this$){
var x__5350__auto__ = (((this$ == null))?null:this$);
var m__5351__auto__ = (shadow.dom._to_svg[goog.typeOf(x__5350__auto__)]);
if((!((m__5351__auto__ == null)))){
return (m__5351__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5351__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__5351__auto__.call(null, this$));
} else {
var m__5349__auto__ = (shadow.dom._to_svg["_"]);
if((!((m__5349__auto__ == null)))){
return (m__5349__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5349__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__5349__auto__.call(null, this$));
} else {
throw cljs.core.missing_protocol("SVGElement.-to-svg",this$);
}
}
});
shadow.dom._to_svg = (function shadow$dom$_to_svg(this$){
if((((!((this$ == null)))) && ((!((this$.shadow$dom$SVGElement$_to_svg$arity$1 == null)))))){
return this$.shadow$dom$SVGElement$_to_svg$arity$1(this$);
} else {
return shadow$dom$SVGElement$_to_svg$dyn_18853(this$);
}
});

shadow.dom.lazy_native_coll_seq = (function shadow$dom$lazy_native_coll_seq(coll,idx){
if((idx < coll.length)){
return (new cljs.core.LazySeq(null,(function (){
return cljs.core.cons((coll[idx]),(function (){var G__17291 = coll;
var G__17292 = (idx + (1));
return (shadow.dom.lazy_native_coll_seq.cljs$core$IFn$_invoke$arity$2 ? shadow.dom.lazy_native_coll_seq.cljs$core$IFn$_invoke$arity$2(G__17291,G__17292) : shadow.dom.lazy_native_coll_seq.call(null, G__17291,G__17292));
})());
}),null,null));
} else {
return null;
}
});

/**
* @constructor
 * @implements {cljs.core.IIndexed}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IDeref}
 * @implements {shadow.dom.IElement}
*/
shadow.dom.NativeColl = (function (coll){
this.coll = coll;
this.cljs$lang$protocol_mask$partition0$ = 8421394;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(shadow.dom.NativeColl.prototype.cljs$core$IDeref$_deref$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.coll;
}));

(shadow.dom.NativeColl.prototype.cljs$core$IIndexed$_nth$arity$2 = (function (this$,n){
var self__ = this;
var this$__$1 = this;
return (self__.coll[n]);
}));

(shadow.dom.NativeColl.prototype.cljs$core$IIndexed$_nth$arity$3 = (function (this$,n,not_found){
var self__ = this;
var this$__$1 = this;
var or__5002__auto__ = (self__.coll[n]);
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return not_found;
}
}));

(shadow.dom.NativeColl.prototype.cljs$core$ICounted$_count$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.coll.length;
}));

(shadow.dom.NativeColl.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return shadow.dom.lazy_native_coll_seq(self__.coll,(0));
}));

(shadow.dom.NativeColl.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(shadow.dom.NativeColl.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.coll;
}));

(shadow.dom.NativeColl.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"coll","coll",-1006698606,null)], null);
}));

(shadow.dom.NativeColl.cljs$lang$type = true);

(shadow.dom.NativeColl.cljs$lang$ctorStr = "shadow.dom/NativeColl");

(shadow.dom.NativeColl.cljs$lang$ctorPrWriter = (function (this__5287__auto__,writer__5288__auto__,opt__5289__auto__){
return cljs.core._write(writer__5288__auto__,"shadow.dom/NativeColl");
}));

/**
 * Positional factory function for shadow.dom/NativeColl.
 */
shadow.dom.__GT_NativeColl = (function shadow$dom$__GT_NativeColl(coll){
return (new shadow.dom.NativeColl(coll));
});

shadow.dom.native_coll = (function shadow$dom$native_coll(coll){
return (new shadow.dom.NativeColl(coll));
});
shadow.dom.dom_node = (function shadow$dom$dom_node(el){
if((el == null)){
return null;
} else {
if((((!((el == null))))?((((false) || ((cljs.core.PROTOCOL_SENTINEL === el.shadow$dom$IElement$))))?true:false):false)){
return el.shadow$dom$IElement$_to_dom$arity$1(null, );
} else {
if(typeof el === 'string'){
return document.createTextNode(el);
} else {
if(typeof el === 'number'){
return document.createTextNode(cljs.core.str.cljs$core$IFn$_invoke$arity$1(el));
} else {
return el;

}
}
}
}
});
shadow.dom.query_one = (function shadow$dom$query_one(var_args){
var G__17352 = arguments.length;
switch (G__17352) {
case 1:
return shadow.dom.query_one.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.query_one.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.query_one.cljs$core$IFn$_invoke$arity$1 = (function (sel){
return document.querySelector(sel);
}));

(shadow.dom.query_one.cljs$core$IFn$_invoke$arity$2 = (function (sel,root){
return shadow.dom.dom_node(root).querySelector(sel);
}));

(shadow.dom.query_one.cljs$lang$maxFixedArity = 2);

shadow.dom.query = (function shadow$dom$query(var_args){
var G__17378 = arguments.length;
switch (G__17378) {
case 1:
return shadow.dom.query.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.query.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.query.cljs$core$IFn$_invoke$arity$1 = (function (sel){
return (new shadow.dom.NativeColl(document.querySelectorAll(sel)));
}));

(shadow.dom.query.cljs$core$IFn$_invoke$arity$2 = (function (sel,root){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(root).querySelectorAll(sel)));
}));

(shadow.dom.query.cljs$lang$maxFixedArity = 2);

shadow.dom.by_id = (function shadow$dom$by_id(var_args){
var G__17389 = arguments.length;
switch (G__17389) {
case 2:
return shadow.dom.by_id.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return shadow.dom.by_id.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.by_id.cljs$core$IFn$_invoke$arity$2 = (function (id,el){
return shadow.dom.dom_node(el).getElementById(id);
}));

(shadow.dom.by_id.cljs$core$IFn$_invoke$arity$1 = (function (id){
return document.getElementById(id);
}));

(shadow.dom.by_id.cljs$lang$maxFixedArity = 2);

shadow.dom.build = shadow.dom.dom_node;
shadow.dom.ev_stop = (function shadow$dom$ev_stop(var_args){
var G__17402 = arguments.length;
switch (G__17402) {
case 1:
return shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1 = (function (e){
if(cljs.core.truth_(e.stopPropagation)){
e.stopPropagation();

e.preventDefault();
} else {
(e.cancelBubble = true);

(e.returnValue = false);
}

return e;
}));

(shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$2 = (function (e,el){
shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1(e);

return el;
}));

(shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$4 = (function (e,el,scope,owner){
shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1(e);

return el;
}));

(shadow.dom.ev_stop.cljs$lang$maxFixedArity = 4);

/**
 * check wether a parent node (or the document) contains the child
 */
shadow.dom.contains_QMARK_ = (function shadow$dom$contains_QMARK_(var_args){
var G__17426 = arguments.length;
switch (G__17426) {
case 1:
return shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$1 = (function (el){
return goog.dom.contains(document,shadow.dom.dom_node(el));
}));

(shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$2 = (function (parent,el){
return goog.dom.contains(shadow.dom.dom_node(parent),shadow.dom.dom_node(el));
}));

(shadow.dom.contains_QMARK_.cljs$lang$maxFixedArity = 2);

shadow.dom.add_class = (function shadow$dom$add_class(el,cls){
return goog.dom.classlist.add(shadow.dom.dom_node(el),cls);
});
shadow.dom.remove_class = (function shadow$dom$remove_class(el,cls){
return goog.dom.classlist.remove(shadow.dom.dom_node(el),cls);
});
shadow.dom.toggle_class = (function shadow$dom$toggle_class(var_args){
var G__17460 = arguments.length;
switch (G__17460) {
case 2:
return shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$2 = (function (el,cls){
return goog.dom.classlist.toggle(shadow.dom.dom_node(el),cls);
}));

(shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$3 = (function (el,cls,v){
if(cljs.core.truth_(v)){
return shadow.dom.add_class(el,cls);
} else {
return shadow.dom.remove_class(el,cls);
}
}));

(shadow.dom.toggle_class.cljs$lang$maxFixedArity = 3);

shadow.dom.dom_listen = (cljs.core.truth_((function (){var or__5002__auto__ = (!((typeof document !== 'undefined')));
if(or__5002__auto__){
return or__5002__auto__;
} else {
return document.addEventListener;
}
})())?(function shadow$dom$dom_listen_good(el,ev,handler){
return el.addEventListener(ev,handler,false);
}):(function shadow$dom$dom_listen_ie(el,ev,handler){
try{return el.attachEvent(["on",cljs.core.str.cljs$core$IFn$_invoke$arity$1(ev)].join(''),(function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null, e,el));
}));
}catch (e17471){if((e17471 instanceof Object)){
var e = e17471;
return console.log("didnt support attachEvent",el,e);
} else {
throw e17471;

}
}}));
shadow.dom.dom_listen_remove = (cljs.core.truth_((function (){var or__5002__auto__ = (!((typeof document !== 'undefined')));
if(or__5002__auto__){
return or__5002__auto__;
} else {
return document.removeEventListener;
}
})())?(function shadow$dom$dom_listen_remove_good(el,ev,handler){
return el.removeEventListener(ev,handler,false);
}):(function shadow$dom$dom_listen_remove_ie(el,ev,handler){
return el.detachEvent(["on",cljs.core.str.cljs$core$IFn$_invoke$arity$1(ev)].join(''),handler);
}));
shadow.dom.on_query = (function shadow$dom$on_query(root_el,ev,selector,handler){
var seq__17498 = cljs.core.seq(shadow.dom.query.cljs$core$IFn$_invoke$arity$2(selector,root_el));
var chunk__17499 = null;
var count__17500 = (0);
var i__17501 = (0);
while(true){
if((i__17501 < count__17500)){
var el = chunk__17499.cljs$core$IIndexed$_nth$arity$2(null, i__17501);
var handler_18880__$1 = ((function (seq__17498,chunk__17499,count__17500,i__17501,el){
return (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null, e,el));
});})(seq__17498,chunk__17499,count__17500,i__17501,el))
;
shadow.dom.dom_listen(el,cljs.core.name(ev),handler_18880__$1);


var G__18881 = seq__17498;
var G__18882 = chunk__17499;
var G__18883 = count__17500;
var G__18884 = (i__17501 + (1));
seq__17498 = G__18881;
chunk__17499 = G__18882;
count__17500 = G__18883;
i__17501 = G__18884;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__17498);
if(temp__5804__auto__){
var seq__17498__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__17498__$1)){
var c__5525__auto__ = cljs.core.chunk_first(seq__17498__$1);
var G__18885 = cljs.core.chunk_rest(seq__17498__$1);
var G__18886 = c__5525__auto__;
var G__18887 = cljs.core.count(c__5525__auto__);
var G__18888 = (0);
seq__17498 = G__18885;
chunk__17499 = G__18886;
count__17500 = G__18887;
i__17501 = G__18888;
continue;
} else {
var el = cljs.core.first(seq__17498__$1);
var handler_18889__$1 = ((function (seq__17498,chunk__17499,count__17500,i__17501,el,seq__17498__$1,temp__5804__auto__){
return (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null, e,el));
});})(seq__17498,chunk__17499,count__17500,i__17501,el,seq__17498__$1,temp__5804__auto__))
;
shadow.dom.dom_listen(el,cljs.core.name(ev),handler_18889__$1);


var G__18890 = cljs.core.next(seq__17498__$1);
var G__18891 = null;
var G__18892 = (0);
var G__18893 = (0);
seq__17498 = G__18890;
chunk__17499 = G__18891;
count__17500 = G__18892;
i__17501 = G__18893;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.dom.on = (function shadow$dom$on(var_args){
var G__17561 = arguments.length;
switch (G__17561) {
case 3:
return shadow.dom.on.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return shadow.dom.on.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.on.cljs$core$IFn$_invoke$arity$3 = (function (el,ev,handler){
return shadow.dom.on.cljs$core$IFn$_invoke$arity$4(el,ev,handler,false);
}));

(shadow.dom.on.cljs$core$IFn$_invoke$arity$4 = (function (el,ev,handler,capture){
if(cljs.core.vector_QMARK_(ev)){
return shadow.dom.on_query(el,cljs.core.first(ev),cljs.core.second(ev),handler);
} else {
var handler__$1 = (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null, e,el));
});
return shadow.dom.dom_listen(shadow.dom.dom_node(el),cljs.core.name(ev),handler__$1);
}
}));

(shadow.dom.on.cljs$lang$maxFixedArity = 4);

shadow.dom.remove_event_handler = (function shadow$dom$remove_event_handler(el,ev,handler){
return shadow.dom.dom_listen_remove(shadow.dom.dom_node(el),cljs.core.name(ev),handler);
});
shadow.dom.add_event_listeners = (function shadow$dom$add_event_listeners(el,events){
var seq__17593 = cljs.core.seq(events);
var chunk__17594 = null;
var count__17595 = (0);
var i__17596 = (0);
while(true){
if((i__17596 < count__17595)){
var vec__17623 = chunk__17594.cljs$core$IIndexed$_nth$arity$2(null, i__17596);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17623,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17623,(1),null);
shadow.dom.on.cljs$core$IFn$_invoke$arity$3(el,k,v);


var G__18896 = seq__17593;
var G__18897 = chunk__17594;
var G__18898 = count__17595;
var G__18899 = (i__17596 + (1));
seq__17593 = G__18896;
chunk__17594 = G__18897;
count__17595 = G__18898;
i__17596 = G__18899;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__17593);
if(temp__5804__auto__){
var seq__17593__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__17593__$1)){
var c__5525__auto__ = cljs.core.chunk_first(seq__17593__$1);
var G__18900 = cljs.core.chunk_rest(seq__17593__$1);
var G__18901 = c__5525__auto__;
var G__18902 = cljs.core.count(c__5525__auto__);
var G__18903 = (0);
seq__17593 = G__18900;
chunk__17594 = G__18901;
count__17595 = G__18902;
i__17596 = G__18903;
continue;
} else {
var vec__17630 = cljs.core.first(seq__17593__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17630,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17630,(1),null);
shadow.dom.on.cljs$core$IFn$_invoke$arity$3(el,k,v);


var G__18904 = cljs.core.next(seq__17593__$1);
var G__18905 = null;
var G__18906 = (0);
var G__18907 = (0);
seq__17593 = G__18904;
chunk__17594 = G__18905;
count__17595 = G__18906;
i__17596 = G__18907;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.dom.set_style = (function shadow$dom$set_style(el,styles){
var dom = shadow.dom.dom_node(el);
var seq__17647 = cljs.core.seq(styles);
var chunk__17648 = null;
var count__17649 = (0);
var i__17650 = (0);
while(true){
if((i__17650 < count__17649)){
var vec__17675 = chunk__17648.cljs$core$IIndexed$_nth$arity$2(null, i__17650);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17675,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17675,(1),null);
goog.style.setStyle(dom,cljs.core.name(k),(((v == null))?"":v));


var G__18908 = seq__17647;
var G__18909 = chunk__17648;
var G__18910 = count__17649;
var G__18911 = (i__17650 + (1));
seq__17647 = G__18908;
chunk__17648 = G__18909;
count__17649 = G__18910;
i__17650 = G__18911;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__17647);
if(temp__5804__auto__){
var seq__17647__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__17647__$1)){
var c__5525__auto__ = cljs.core.chunk_first(seq__17647__$1);
var G__18912 = cljs.core.chunk_rest(seq__17647__$1);
var G__18913 = c__5525__auto__;
var G__18914 = cljs.core.count(c__5525__auto__);
var G__18915 = (0);
seq__17647 = G__18912;
chunk__17648 = G__18913;
count__17649 = G__18914;
i__17650 = G__18915;
continue;
} else {
var vec__17682 = cljs.core.first(seq__17647__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17682,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17682,(1),null);
goog.style.setStyle(dom,cljs.core.name(k),(((v == null))?"":v));


var G__18916 = cljs.core.next(seq__17647__$1);
var G__18917 = null;
var G__18918 = (0);
var G__18919 = (0);
seq__17647 = G__18916;
chunk__17648 = G__18917;
count__17649 = G__18918;
i__17650 = G__18919;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.dom.set_attr_STAR_ = (function shadow$dom$set_attr_STAR_(el,key,value){
var G__17695_18920 = key;
var G__17695_18921__$1 = (((G__17695_18920 instanceof cljs.core.Keyword))?G__17695_18920.fqn:null);
switch (G__17695_18921__$1) {
case "id":
(el.id = cljs.core.str.cljs$core$IFn$_invoke$arity$1(value));

break;
case "class":
(el.className = cljs.core.str.cljs$core$IFn$_invoke$arity$1(value));

break;
case "for":
(el.htmlFor = value);

break;
case "cellpadding":
el.setAttribute("cellPadding",value);

break;
case "cellspacing":
el.setAttribute("cellSpacing",value);

break;
case "colspan":
el.setAttribute("colSpan",value);

break;
case "frameborder":
el.setAttribute("frameBorder",value);

break;
case "height":
el.setAttribute("height",value);

break;
case "maxlength":
el.setAttribute("maxLength",value);

break;
case "role":
el.setAttribute("role",value);

break;
case "rowspan":
el.setAttribute("rowSpan",value);

break;
case "type":
el.setAttribute("type",value);

break;
case "usemap":
el.setAttribute("useMap",value);

break;
case "valign":
el.setAttribute("vAlign",value);

break;
case "width":
el.setAttribute("width",value);

break;
case "on":
shadow.dom.add_event_listeners(el,value);

break;
case "style":
if((value == null)){
} else {
if(typeof value === 'string'){
el.setAttribute("style",value);
} else {
if(cljs.core.map_QMARK_(value)){
shadow.dom.set_style(el,value);
} else {
goog.style.setStyle(el,value);

}
}
}

break;
default:
var ks_18923 = cljs.core.name(key);
if(cljs.core.truth_((function (){var or__5002__auto__ = goog.string.startsWith(ks_18923,"data-");
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return goog.string.startsWith(ks_18923,"aria-");
}
})())){
el.setAttribute(ks_18923,value);
} else {
(el[ks_18923] = value);
}

}

return el;
});
shadow.dom.set_attrs = (function shadow$dom$set_attrs(el,attrs){
return cljs.core.reduce_kv((function (el__$1,key,value){
shadow.dom.set_attr_STAR_(el__$1,key,value);

return el__$1;
}),shadow.dom.dom_node(el),attrs);
});
shadow.dom.set_attr = (function shadow$dom$set_attr(el,key,value){
return shadow.dom.set_attr_STAR_(shadow.dom.dom_node(el),key,value);
});
shadow.dom.has_class_QMARK_ = (function shadow$dom$has_class_QMARK_(el,cls){
return goog.dom.classlist.contains(shadow.dom.dom_node(el),cls);
});
shadow.dom.merge_class_string = (function shadow$dom$merge_class_string(current,extra_class){
if(cljs.core.seq(current)){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(current)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(extra_class)].join('');
} else {
return extra_class;
}
});
shadow.dom.parse_tag = (function shadow$dom$parse_tag(spec){
var spec__$1 = cljs.core.name(spec);
var fdot = spec__$1.indexOf(".");
var fhash = spec__$1.indexOf("#");
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fdot)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fhash)))){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1,null,null], null);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fhash)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1.substring((0),fdot),null,clojure.string.replace(spec__$1.substring((fdot + (1))),/\./," ")], null);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fdot)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1.substring((0),fhash),spec__$1.substring((fhash + (1))),null], null);
} else {
if((fhash > fdot)){
throw ["cant have id after class?",spec__$1].join('');
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1.substring((0),fhash),spec__$1.substring((fhash + (1)),fdot),clojure.string.replace(spec__$1.substring((fdot + (1))),/\./," ")], null);

}
}
}
}
});
shadow.dom.create_dom_node = (function shadow$dom$create_dom_node(tag_def,p__17767){
var map__17768 = p__17767;
var map__17768__$1 = cljs.core.__destructure_map(map__17768);
var props = map__17768__$1;
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17768__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
var tag_props = ({});
var vec__17769 = shadow.dom.parse_tag(tag_def);
var tag_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17769,(0),null);
var tag_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17769,(1),null);
var tag_classes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17769,(2),null);
if(cljs.core.truth_(tag_id)){
(tag_props["id"] = tag_id);
} else {
}

if(cljs.core.truth_(tag_classes)){
(tag_props["class"] = shadow.dom.merge_class_string(class$,tag_classes));
} else {
}

var G__17778 = goog.dom.createDom(tag_name,tag_props);
shadow.dom.set_attrs(G__17778,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(props,new cljs.core.Keyword(null,"class","class",-2030961996)));

return G__17778;
});
shadow.dom.append = (function shadow$dom$append(var_args){
var G__17787 = arguments.length;
switch (G__17787) {
case 1:
return shadow.dom.append.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.append.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.append.cljs$core$IFn$_invoke$arity$1 = (function (node){
if(cljs.core.truth_(node)){
var temp__5804__auto__ = shadow.dom.dom_node(node);
if(cljs.core.truth_(temp__5804__auto__)){
var n = temp__5804__auto__;
document.body.appendChild(n);

return n;
} else {
return null;
}
} else {
return null;
}
}));

(shadow.dom.append.cljs$core$IFn$_invoke$arity$2 = (function (el,node){
if(cljs.core.truth_(node)){
var temp__5804__auto__ = shadow.dom.dom_node(node);
if(cljs.core.truth_(temp__5804__auto__)){
var n = temp__5804__auto__;
shadow.dom.dom_node(el).appendChild(n);

return n;
} else {
return null;
}
} else {
return null;
}
}));

(shadow.dom.append.cljs$lang$maxFixedArity = 2);

shadow.dom.destructure_node = (function shadow$dom$destructure_node(create_fn,p__17809){
var vec__17813 = p__17809;
var seq__17814 = cljs.core.seq(vec__17813);
var first__17815 = cljs.core.first(seq__17814);
var seq__17814__$1 = cljs.core.next(seq__17814);
var nn = first__17815;
var first__17815__$1 = cljs.core.first(seq__17814__$1);
var seq__17814__$2 = cljs.core.next(seq__17814__$1);
var np = first__17815__$1;
var nc = seq__17814__$2;
var node = vec__17813;
if((nn instanceof cljs.core.Keyword)){
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("invalid dom node",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"node","node",581201198),node], null));
}

if((((np == null)) && ((nc == null)))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__17816 = nn;
var G__17817 = cljs.core.PersistentArrayMap.EMPTY;
return (create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(G__17816,G__17817) : create_fn.call(null, G__17816,G__17817));
})(),cljs.core.List.EMPTY], null);
} else {
if(cljs.core.map_QMARK_(np)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(nn,np) : create_fn.call(null, nn,np)),nc], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__17818 = nn;
var G__17819 = cljs.core.PersistentArrayMap.EMPTY;
return (create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(G__17818,G__17819) : create_fn.call(null, G__17818,G__17819));
})(),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(nc,np)], null);

}
}
});
shadow.dom.make_dom_node = (function shadow$dom$make_dom_node(structure){
var vec__17824 = shadow.dom.destructure_node(shadow.dom.create_dom_node,structure);
var node = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17824,(0),null);
var node_children = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17824,(1),null);
var seq__17830_18933 = cljs.core.seq(node_children);
var chunk__17831_18934 = null;
var count__17832_18935 = (0);
var i__17833_18936 = (0);
while(true){
if((i__17833_18936 < count__17832_18935)){
var child_struct_18937 = chunk__17831_18934.cljs$core$IIndexed$_nth$arity$2(null, i__17833_18936);
var children_18938 = shadow.dom.dom_node(child_struct_18937);
if(cljs.core.seq_QMARK_(children_18938)){
var seq__17902_18939 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom.dom_node,children_18938));
var chunk__17904_18940 = null;
var count__17905_18941 = (0);
var i__17906_18942 = (0);
while(true){
if((i__17906_18942 < count__17905_18941)){
var child_18943 = chunk__17904_18940.cljs$core$IIndexed$_nth$arity$2(null, i__17906_18942);
if(cljs.core.truth_(child_18943)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_18943);


var G__18944 = seq__17902_18939;
var G__18945 = chunk__17904_18940;
var G__18946 = count__17905_18941;
var G__18947 = (i__17906_18942 + (1));
seq__17902_18939 = G__18944;
chunk__17904_18940 = G__18945;
count__17905_18941 = G__18946;
i__17906_18942 = G__18947;
continue;
} else {
var G__18953 = seq__17902_18939;
var G__18954 = chunk__17904_18940;
var G__18955 = count__17905_18941;
var G__18956 = (i__17906_18942 + (1));
seq__17902_18939 = G__18953;
chunk__17904_18940 = G__18954;
count__17905_18941 = G__18955;
i__17906_18942 = G__18956;
continue;
}
} else {
var temp__5804__auto___18957 = cljs.core.seq(seq__17902_18939);
if(temp__5804__auto___18957){
var seq__17902_18958__$1 = temp__5804__auto___18957;
if(cljs.core.chunked_seq_QMARK_(seq__17902_18958__$1)){
var c__5525__auto___18959 = cljs.core.chunk_first(seq__17902_18958__$1);
var G__18960 = cljs.core.chunk_rest(seq__17902_18958__$1);
var G__18961 = c__5525__auto___18959;
var G__18962 = cljs.core.count(c__5525__auto___18959);
var G__18963 = (0);
seq__17902_18939 = G__18960;
chunk__17904_18940 = G__18961;
count__17905_18941 = G__18962;
i__17906_18942 = G__18963;
continue;
} else {
var child_18964 = cljs.core.first(seq__17902_18958__$1);
if(cljs.core.truth_(child_18964)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_18964);


var G__18965 = cljs.core.next(seq__17902_18958__$1);
var G__18966 = null;
var G__18967 = (0);
var G__18968 = (0);
seq__17902_18939 = G__18965;
chunk__17904_18940 = G__18966;
count__17905_18941 = G__18967;
i__17906_18942 = G__18968;
continue;
} else {
var G__18969 = cljs.core.next(seq__17902_18958__$1);
var G__18970 = null;
var G__18971 = (0);
var G__18972 = (0);
seq__17902_18939 = G__18969;
chunk__17904_18940 = G__18970;
count__17905_18941 = G__18971;
i__17906_18942 = G__18972;
continue;
}
}
} else {
}
}
break;
}
} else {
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,children_18938);
}


var G__18973 = seq__17830_18933;
var G__18974 = chunk__17831_18934;
var G__18975 = count__17832_18935;
var G__18976 = (i__17833_18936 + (1));
seq__17830_18933 = G__18973;
chunk__17831_18934 = G__18974;
count__17832_18935 = G__18975;
i__17833_18936 = G__18976;
continue;
} else {
var temp__5804__auto___18977 = cljs.core.seq(seq__17830_18933);
if(temp__5804__auto___18977){
var seq__17830_18978__$1 = temp__5804__auto___18977;
if(cljs.core.chunked_seq_QMARK_(seq__17830_18978__$1)){
var c__5525__auto___18984 = cljs.core.chunk_first(seq__17830_18978__$1);
var G__18985 = cljs.core.chunk_rest(seq__17830_18978__$1);
var G__18986 = c__5525__auto___18984;
var G__18987 = cljs.core.count(c__5525__auto___18984);
var G__18988 = (0);
seq__17830_18933 = G__18985;
chunk__17831_18934 = G__18986;
count__17832_18935 = G__18987;
i__17833_18936 = G__18988;
continue;
} else {
var child_struct_18994 = cljs.core.first(seq__17830_18978__$1);
var children_18995 = shadow.dom.dom_node(child_struct_18994);
if(cljs.core.seq_QMARK_(children_18995)){
var seq__17920_18996 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom.dom_node,children_18995));
var chunk__17922_18997 = null;
var count__17923_18998 = (0);
var i__17924_18999 = (0);
while(true){
if((i__17924_18999 < count__17923_18998)){
var child_19000 = chunk__17922_18997.cljs$core$IIndexed$_nth$arity$2(null, i__17924_18999);
if(cljs.core.truth_(child_19000)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_19000);


var G__19002 = seq__17920_18996;
var G__19003 = chunk__17922_18997;
var G__19004 = count__17923_18998;
var G__19005 = (i__17924_18999 + (1));
seq__17920_18996 = G__19002;
chunk__17922_18997 = G__19003;
count__17923_18998 = G__19004;
i__17924_18999 = G__19005;
continue;
} else {
var G__19006 = seq__17920_18996;
var G__19007 = chunk__17922_18997;
var G__19008 = count__17923_18998;
var G__19009 = (i__17924_18999 + (1));
seq__17920_18996 = G__19006;
chunk__17922_18997 = G__19007;
count__17923_18998 = G__19008;
i__17924_18999 = G__19009;
continue;
}
} else {
var temp__5804__auto___19010__$1 = cljs.core.seq(seq__17920_18996);
if(temp__5804__auto___19010__$1){
var seq__17920_19012__$1 = temp__5804__auto___19010__$1;
if(cljs.core.chunked_seq_QMARK_(seq__17920_19012__$1)){
var c__5525__auto___19013 = cljs.core.chunk_first(seq__17920_19012__$1);
var G__19014 = cljs.core.chunk_rest(seq__17920_19012__$1);
var G__19015 = c__5525__auto___19013;
var G__19016 = cljs.core.count(c__5525__auto___19013);
var G__19017 = (0);
seq__17920_18996 = G__19014;
chunk__17922_18997 = G__19015;
count__17923_18998 = G__19016;
i__17924_18999 = G__19017;
continue;
} else {
var child_19018 = cljs.core.first(seq__17920_19012__$1);
if(cljs.core.truth_(child_19018)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_19018);


var G__19019 = cljs.core.next(seq__17920_19012__$1);
var G__19020 = null;
var G__19021 = (0);
var G__19022 = (0);
seq__17920_18996 = G__19019;
chunk__17922_18997 = G__19020;
count__17923_18998 = G__19021;
i__17924_18999 = G__19022;
continue;
} else {
var G__19023 = cljs.core.next(seq__17920_19012__$1);
var G__19024 = null;
var G__19025 = (0);
var G__19026 = (0);
seq__17920_18996 = G__19023;
chunk__17922_18997 = G__19024;
count__17923_18998 = G__19025;
i__17924_18999 = G__19026;
continue;
}
}
} else {
}
}
break;
}
} else {
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,children_18995);
}


var G__19027 = cljs.core.next(seq__17830_18978__$1);
var G__19028 = null;
var G__19029 = (0);
var G__19030 = (0);
seq__17830_18933 = G__19027;
chunk__17831_18934 = G__19028;
count__17832_18935 = G__19029;
i__17833_18936 = G__19030;
continue;
}
} else {
}
}
break;
}

return node;
});
(cljs.core.Keyword.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.Keyword.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return shadow.dom.make_dom_node(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [this$__$1], null));
}));

(cljs.core.PersistentVector.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.PersistentVector.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return shadow.dom.make_dom_node(this$__$1);
}));

(cljs.core.LazySeq.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.LazySeq.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom._to_dom,this$__$1);
}));
if(cljs.core.truth_(((typeof HTMLElement) != 'undefined'))){
(HTMLElement.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(HTMLElement.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1;
}));
} else {
}
if(cljs.core.truth_(((typeof DocumentFragment) != 'undefined'))){
(DocumentFragment.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(DocumentFragment.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1;
}));
} else {
}
/**
 * clear node children
 */
shadow.dom.reset = (function shadow$dom$reset(node){
return goog.dom.removeChildren(shadow.dom.dom_node(node));
});
shadow.dom.remove = (function shadow$dom$remove(node){
if((((!((node == null))))?(((((node.cljs$lang$protocol_mask$partition0$ & (8388608))) || ((cljs.core.PROTOCOL_SENTINEL === node.cljs$core$ISeqable$))))?true:false):false)){
var seq__17976 = cljs.core.seq(node);
var chunk__17977 = null;
var count__17978 = (0);
var i__17979 = (0);
while(true){
if((i__17979 < count__17978)){
var n = chunk__17977.cljs$core$IIndexed$_nth$arity$2(null, i__17979);
(shadow.dom.remove.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.remove.cljs$core$IFn$_invoke$arity$1(n) : shadow.dom.remove.call(null, n));


var G__19032 = seq__17976;
var G__19033 = chunk__17977;
var G__19034 = count__17978;
var G__19035 = (i__17979 + (1));
seq__17976 = G__19032;
chunk__17977 = G__19033;
count__17978 = G__19034;
i__17979 = G__19035;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__17976);
if(temp__5804__auto__){
var seq__17976__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__17976__$1)){
var c__5525__auto__ = cljs.core.chunk_first(seq__17976__$1);
var G__19036 = cljs.core.chunk_rest(seq__17976__$1);
var G__19037 = c__5525__auto__;
var G__19038 = cljs.core.count(c__5525__auto__);
var G__19039 = (0);
seq__17976 = G__19036;
chunk__17977 = G__19037;
count__17978 = G__19038;
i__17979 = G__19039;
continue;
} else {
var n = cljs.core.first(seq__17976__$1);
(shadow.dom.remove.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.remove.cljs$core$IFn$_invoke$arity$1(n) : shadow.dom.remove.call(null, n));


var G__19040 = cljs.core.next(seq__17976__$1);
var G__19041 = null;
var G__19042 = (0);
var G__19043 = (0);
seq__17976 = G__19040;
chunk__17977 = G__19041;
count__17978 = G__19042;
i__17979 = G__19043;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return goog.dom.removeNode(node);
}
});
shadow.dom.replace_node = (function shadow$dom$replace_node(old,new$){
return goog.dom.replaceNode(shadow.dom.dom_node(new$),shadow.dom.dom_node(old));
});
shadow.dom.text = (function shadow$dom$text(var_args){
var G__17999 = arguments.length;
switch (G__17999) {
case 2:
return shadow.dom.text.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return shadow.dom.text.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.text.cljs$core$IFn$_invoke$arity$2 = (function (el,new_text){
return (shadow.dom.dom_node(el).innerText = new_text);
}));

(shadow.dom.text.cljs$core$IFn$_invoke$arity$1 = (function (el){
return shadow.dom.dom_node(el).innerText;
}));

(shadow.dom.text.cljs$lang$maxFixedArity = 2);

shadow.dom.check = (function shadow$dom$check(var_args){
var G__18015 = arguments.length;
switch (G__18015) {
case 1:
return shadow.dom.check.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.check.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.check.cljs$core$IFn$_invoke$arity$1 = (function (el){
return shadow.dom.check.cljs$core$IFn$_invoke$arity$2(el,true);
}));

(shadow.dom.check.cljs$core$IFn$_invoke$arity$2 = (function (el,checked){
return (shadow.dom.dom_node(el).checked = checked);
}));

(shadow.dom.check.cljs$lang$maxFixedArity = 2);

shadow.dom.checked_QMARK_ = (function shadow$dom$checked_QMARK_(el){
return shadow.dom.dom_node(el).checked;
});
shadow.dom.form_elements = (function shadow$dom$form_elements(el){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(el).elements));
});
shadow.dom.children = (function shadow$dom$children(el){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(el).children));
});
shadow.dom.child_nodes = (function shadow$dom$child_nodes(el){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(el).childNodes));
});
shadow.dom.attr = (function shadow$dom$attr(var_args){
var G__18044 = arguments.length;
switch (G__18044) {
case 2:
return shadow.dom.attr.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.attr.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.attr.cljs$core$IFn$_invoke$arity$2 = (function (el,key){
return shadow.dom.dom_node(el).getAttribute(cljs.core.name(key));
}));

(shadow.dom.attr.cljs$core$IFn$_invoke$arity$3 = (function (el,key,default$){
var or__5002__auto__ = shadow.dom.dom_node(el).getAttribute(cljs.core.name(key));
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return default$;
}
}));

(shadow.dom.attr.cljs$lang$maxFixedArity = 3);

shadow.dom.del_attr = (function shadow$dom$del_attr(el,key){
return shadow.dom.dom_node(el).removeAttribute(cljs.core.name(key));
});
shadow.dom.data = (function shadow$dom$data(el,key){
return shadow.dom.dom_node(el).getAttribute(["data-",cljs.core.name(key)].join(''));
});
shadow.dom.set_data = (function shadow$dom$set_data(el,key,value){
return shadow.dom.dom_node(el).setAttribute(["data-",cljs.core.name(key)].join(''),cljs.core.str.cljs$core$IFn$_invoke$arity$1(value));
});
shadow.dom.set_html = (function shadow$dom$set_html(node,text){
return (shadow.dom.dom_node(node).innerHTML = text);
});
shadow.dom.get_html = (function shadow$dom$get_html(node){
return shadow.dom.dom_node(node).innerHTML;
});
shadow.dom.fragment = (function shadow$dom$fragment(var_args){
var args__5732__auto__ = [];
var len__5726__auto___19056 = arguments.length;
var i__5727__auto___19057 = (0);
while(true){
if((i__5727__auto___19057 < len__5726__auto___19056)){
args__5732__auto__.push((arguments[i__5727__auto___19057]));

var G__19058 = (i__5727__auto___19057 + (1));
i__5727__auto___19057 = G__19058;
continue;
} else {
}
break;
}

var argseq__5733__auto__ = ((((0) < args__5732__auto__.length))?(new cljs.core.IndexedSeq(args__5732__auto__.slice((0)),(0),null)):null);
return shadow.dom.fragment.cljs$core$IFn$_invoke$arity$variadic(argseq__5733__auto__);
});

(shadow.dom.fragment.cljs$core$IFn$_invoke$arity$variadic = (function (nodes){
var fragment = document.createDocumentFragment();
var seq__18070_19059 = cljs.core.seq(nodes);
var chunk__18071_19060 = null;
var count__18072_19061 = (0);
var i__18073_19062 = (0);
while(true){
if((i__18073_19062 < count__18072_19061)){
var node_19063 = chunk__18071_19060.cljs$core$IIndexed$_nth$arity$2(null, i__18073_19062);
fragment.appendChild(shadow.dom._to_dom(node_19063));


var G__19064 = seq__18070_19059;
var G__19065 = chunk__18071_19060;
var G__19066 = count__18072_19061;
var G__19067 = (i__18073_19062 + (1));
seq__18070_19059 = G__19064;
chunk__18071_19060 = G__19065;
count__18072_19061 = G__19066;
i__18073_19062 = G__19067;
continue;
} else {
var temp__5804__auto___19068 = cljs.core.seq(seq__18070_19059);
if(temp__5804__auto___19068){
var seq__18070_19069__$1 = temp__5804__auto___19068;
if(cljs.core.chunked_seq_QMARK_(seq__18070_19069__$1)){
var c__5525__auto___19070 = cljs.core.chunk_first(seq__18070_19069__$1);
var G__19071 = cljs.core.chunk_rest(seq__18070_19069__$1);
var G__19072 = c__5525__auto___19070;
var G__19073 = cljs.core.count(c__5525__auto___19070);
var G__19074 = (0);
seq__18070_19059 = G__19071;
chunk__18071_19060 = G__19072;
count__18072_19061 = G__19073;
i__18073_19062 = G__19074;
continue;
} else {
var node_19075 = cljs.core.first(seq__18070_19069__$1);
fragment.appendChild(shadow.dom._to_dom(node_19075));


var G__19076 = cljs.core.next(seq__18070_19069__$1);
var G__19077 = null;
var G__19078 = (0);
var G__19079 = (0);
seq__18070_19059 = G__19076;
chunk__18071_19060 = G__19077;
count__18072_19061 = G__19078;
i__18073_19062 = G__19079;
continue;
}
} else {
}
}
break;
}

return (new shadow.dom.NativeColl(fragment));
}));

(shadow.dom.fragment.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(shadow.dom.fragment.cljs$lang$applyTo = (function (seq18064){
var self__5712__auto__ = this;
return self__5712__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq18064));
}));

/**
 * given a html string, eval all <script> tags and return the html without the scripts
 * don't do this for everything, only content you trust.
 */
shadow.dom.eval_scripts = (function shadow$dom$eval_scripts(s){
var scripts = cljs.core.re_seq(/<script[^>]*?>(.+?)<\/script>/,s);
var seq__18085_19080 = cljs.core.seq(scripts);
var chunk__18086_19081 = null;
var count__18087_19082 = (0);
var i__18088_19083 = (0);
while(true){
if((i__18088_19083 < count__18087_19082)){
var vec__18105_19084 = chunk__18086_19081.cljs$core$IIndexed$_nth$arity$2(null, i__18088_19083);
var script_tag_19085 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18105_19084,(0),null);
var script_body_19086 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18105_19084,(1),null);
eval(script_body_19086);


var G__19087 = seq__18085_19080;
var G__19088 = chunk__18086_19081;
var G__19089 = count__18087_19082;
var G__19090 = (i__18088_19083 + (1));
seq__18085_19080 = G__19087;
chunk__18086_19081 = G__19088;
count__18087_19082 = G__19089;
i__18088_19083 = G__19090;
continue;
} else {
var temp__5804__auto___19091 = cljs.core.seq(seq__18085_19080);
if(temp__5804__auto___19091){
var seq__18085_19092__$1 = temp__5804__auto___19091;
if(cljs.core.chunked_seq_QMARK_(seq__18085_19092__$1)){
var c__5525__auto___19093 = cljs.core.chunk_first(seq__18085_19092__$1);
var G__19094 = cljs.core.chunk_rest(seq__18085_19092__$1);
var G__19095 = c__5525__auto___19093;
var G__19096 = cljs.core.count(c__5525__auto___19093);
var G__19097 = (0);
seq__18085_19080 = G__19094;
chunk__18086_19081 = G__19095;
count__18087_19082 = G__19096;
i__18088_19083 = G__19097;
continue;
} else {
var vec__18116_19098 = cljs.core.first(seq__18085_19092__$1);
var script_tag_19099 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18116_19098,(0),null);
var script_body_19100 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18116_19098,(1),null);
eval(script_body_19100);


var G__19101 = cljs.core.next(seq__18085_19092__$1);
var G__19102 = null;
var G__19103 = (0);
var G__19104 = (0);
seq__18085_19080 = G__19101;
chunk__18086_19081 = G__19102;
count__18087_19082 = G__19103;
i__18088_19083 = G__19104;
continue;
}
} else {
}
}
break;
}

return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (s__$1,p__18120){
var vec__18125 = p__18120;
var script_tag = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18125,(0),null);
var script_body = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18125,(1),null);
return clojure.string.replace(s__$1,script_tag,"");
}),s,scripts);
});
shadow.dom.str__GT_fragment = (function shadow$dom$str__GT_fragment(s){
var el = document.createElement("div");
(el.innerHTML = s);

return (new shadow.dom.NativeColl(goog.dom.childrenToNode_(document,el)));
});
shadow.dom.node_name = (function shadow$dom$node_name(el){
return shadow.dom.dom_node(el).nodeName;
});
shadow.dom.ancestor_by_class = (function shadow$dom$ancestor_by_class(el,cls){
return goog.dom.getAncestorByClass(shadow.dom.dom_node(el),cls);
});
shadow.dom.ancestor_by_tag = (function shadow$dom$ancestor_by_tag(var_args){
var G__18185 = arguments.length;
switch (G__18185) {
case 2:
return shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$2 = (function (el,tag){
return goog.dom.getAncestorByTagNameAndClass(shadow.dom.dom_node(el),cljs.core.name(tag));
}));

(shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$3 = (function (el,tag,cls){
return goog.dom.getAncestorByTagNameAndClass(shadow.dom.dom_node(el),cljs.core.name(tag),cljs.core.name(cls));
}));

(shadow.dom.ancestor_by_tag.cljs$lang$maxFixedArity = 3);

shadow.dom.get_value = (function shadow$dom$get_value(dom){
return goog.dom.forms.getValue(shadow.dom.dom_node(dom));
});
shadow.dom.set_value = (function shadow$dom$set_value(dom,value){
return goog.dom.forms.setValue(shadow.dom.dom_node(dom),value);
});
shadow.dom.px = (function shadow$dom$px(value){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1((value | (0))),"px"].join('');
});
shadow.dom.pct = (function shadow$dom$pct(value){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(value),"%"].join('');
});
shadow.dom.remove_style_STAR_ = (function shadow$dom$remove_style_STAR_(el,style){
return el.style.removeProperty(cljs.core.name(style));
});
shadow.dom.remove_style = (function shadow$dom$remove_style(el,style){
var el__$1 = shadow.dom.dom_node(el);
return shadow.dom.remove_style_STAR_(el__$1,style);
});
shadow.dom.remove_styles = (function shadow$dom$remove_styles(el,style_keys){
var el__$1 = shadow.dom.dom_node(el);
var seq__18216 = cljs.core.seq(style_keys);
var chunk__18217 = null;
var count__18218 = (0);
var i__18219 = (0);
while(true){
if((i__18219 < count__18218)){
var it = chunk__18217.cljs$core$IIndexed$_nth$arity$2(null, i__18219);
shadow.dom.remove_style_STAR_(el__$1,it);


var G__19131 = seq__18216;
var G__19132 = chunk__18217;
var G__19133 = count__18218;
var G__19134 = (i__18219 + (1));
seq__18216 = G__19131;
chunk__18217 = G__19132;
count__18218 = G__19133;
i__18219 = G__19134;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__18216);
if(temp__5804__auto__){
var seq__18216__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__18216__$1)){
var c__5525__auto__ = cljs.core.chunk_first(seq__18216__$1);
var G__19135 = cljs.core.chunk_rest(seq__18216__$1);
var G__19136 = c__5525__auto__;
var G__19137 = cljs.core.count(c__5525__auto__);
var G__19138 = (0);
seq__18216 = G__19135;
chunk__18217 = G__19136;
count__18218 = G__19137;
i__18219 = G__19138;
continue;
} else {
var it = cljs.core.first(seq__18216__$1);
shadow.dom.remove_style_STAR_(el__$1,it);


var G__19139 = cljs.core.next(seq__18216__$1);
var G__19140 = null;
var G__19141 = (0);
var G__19142 = (0);
seq__18216 = G__19139;
chunk__18217 = G__19140;
count__18218 = G__19141;
i__18219 = G__19142;
continue;
}
} else {
return null;
}
}
break;
}
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
shadow.dom.Coordinate = (function (x,y,__meta,__extmap,__hash){
this.x = x;
this.y = y;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(shadow.dom.Coordinate.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__5300__auto__,k__5301__auto__){
var self__ = this;
var this__5300__auto____$1 = this;
return this__5300__auto____$1.cljs$core$ILookup$_lookup$arity$3(null, k__5301__auto__,null);
}));

(shadow.dom.Coordinate.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__5302__auto__,k18237,else__5303__auto__){
var self__ = this;
var this__5302__auto____$1 = this;
var G__18250 = k18237;
var G__18250__$1 = (((G__18250 instanceof cljs.core.Keyword))?G__18250.fqn:null);
switch (G__18250__$1) {
case "x":
return self__.x;

break;
case "y":
return self__.y;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k18237,else__5303__auto__);

}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__5320__auto__,f__5321__auto__,init__5322__auto__){
var self__ = this;
var this__5320__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__5323__auto__,p__18251){
var vec__18252 = p__18251;
var k__5324__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18252,(0),null);
var v__5325__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18252,(1),null);
return (f__5321__auto__.cljs$core$IFn$_invoke$arity$3 ? f__5321__auto__.cljs$core$IFn$_invoke$arity$3(ret__5323__auto__,k__5324__auto__,v__5325__auto__) : f__5321__auto__.call(null, ret__5323__auto__,k__5324__auto__,v__5325__auto__));
}),init__5322__auto__,this__5320__auto____$1);
}));

(shadow.dom.Coordinate.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__5315__auto__,writer__5316__auto__,opts__5317__auto__){
var self__ = this;
var this__5315__auto____$1 = this;
var pr_pair__5318__auto__ = (function (keyval__5319__auto__){
return cljs.core.pr_sequential_writer(writer__5316__auto__,cljs.core.pr_writer,""," ","",opts__5317__auto__,keyval__5319__auto__);
});
return cljs.core.pr_sequential_writer(writer__5316__auto__,pr_pair__5318__auto__,"#shadow.dom.Coordinate{",", ","}",opts__5317__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"x","x",2099068185),self__.x],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"y","y",-1757859776),self__.y],null))], null),self__.__extmap));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__18236){
var self__ = this;
var G__18236__$1 = this;
return (new cljs.core.RecordIter((0),G__18236__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"y","y",-1757859776)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__5298__auto__){
var self__ = this;
var this__5298__auto____$1 = this;
return self__.__meta;
}));

(shadow.dom.Coordinate.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__5295__auto__){
var self__ = this;
var this__5295__auto____$1 = this;
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,self__.__extmap,self__.__hash));
}));

(shadow.dom.Coordinate.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__5304__auto__){
var self__ = this;
var this__5304__auto____$1 = this;
return (2 + cljs.core.count(self__.__extmap));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__5296__auto__){
var self__ = this;
var this__5296__auto____$1 = this;
var h__5111__auto__ = self__.__hash;
if((!((h__5111__auto__ == null)))){
return h__5111__auto__;
} else {
var h__5111__auto____$1 = (function (coll__5297__auto__){
return (145542109 ^ cljs.core.hash_unordered_coll(coll__5297__auto__));
})(this__5296__auto____$1);
(self__.__hash = h__5111__auto____$1);

return h__5111__auto____$1;
}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this18238,other18239){
var self__ = this;
var this18238__$1 = this;
return (((!((other18239 == null)))) && ((((this18238__$1.constructor === other18239.constructor)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this18238__$1.x,other18239.x)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this18238__$1.y,other18239.y)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this18238__$1.__extmap,other18239.__extmap)))))))));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__5310__auto__,k__5311__auto__){
var self__ = this;
var this__5310__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"y","y",-1757859776),null,new cljs.core.Keyword(null,"x","x",2099068185),null], null), null),k__5311__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__5310__auto____$1),self__.__meta),k__5311__auto__);
} else {
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__5311__auto__)),null));
}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (this__5307__auto__,k18237){
var self__ = this;
var this__5307__auto____$1 = this;
var G__18280 = k18237;
var G__18280__$1 = (((G__18280 instanceof cljs.core.Keyword))?G__18280.fqn:null);
switch (G__18280__$1) {
case "x":
case "y":
return true;

break;
default:
return cljs.core.contains_QMARK_(self__.__extmap,k18237);

}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__5308__auto__,k__5309__auto__,G__18236){
var self__ = this;
var this__5308__auto____$1 = this;
var pred__18286 = cljs.core.keyword_identical_QMARK_;
var expr__18287 = k__5309__auto__;
if(cljs.core.truth_((pred__18286.cljs$core$IFn$_invoke$arity$2 ? pred__18286.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"x","x",2099068185),expr__18287) : pred__18286.call(null, new cljs.core.Keyword(null,"x","x",2099068185),expr__18287)))){
return (new shadow.dom.Coordinate(G__18236,self__.y,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__18286.cljs$core$IFn$_invoke$arity$2 ? pred__18286.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"y","y",-1757859776),expr__18287) : pred__18286.call(null, new cljs.core.Keyword(null,"y","y",-1757859776),expr__18287)))){
return (new shadow.dom.Coordinate(self__.x,G__18236,self__.__meta,self__.__extmap,null));
} else {
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__5309__auto__,G__18236),null));
}
}
}));

(shadow.dom.Coordinate.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__5313__auto__){
var self__ = this;
var this__5313__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"x","x",2099068185),self__.x,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"y","y",-1757859776),self__.y,null))], null),self__.__extmap));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__5299__auto__,G__18236){
var self__ = this;
var this__5299__auto____$1 = this;
return (new shadow.dom.Coordinate(self__.x,self__.y,G__18236,self__.__extmap,self__.__hash));
}));

(shadow.dom.Coordinate.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__5305__auto__,entry__5306__auto__){
var self__ = this;
var this__5305__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__5306__auto__)){
return this__5305__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null, cljs.core._nth(entry__5306__auto__,(0)),cljs.core._nth(entry__5306__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__5305__auto____$1,entry__5306__auto__);
}
}));

(shadow.dom.Coordinate.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"x","x",-555367584,null),new cljs.core.Symbol(null,"y","y",-117328249,null)], null);
}));

(shadow.dom.Coordinate.cljs$lang$type = true);

(shadow.dom.Coordinate.cljs$lang$ctorPrSeq = (function (this__5346__auto__){
return (new cljs.core.List(null,"shadow.dom/Coordinate",null,(1),null));
}));

(shadow.dom.Coordinate.cljs$lang$ctorPrWriter = (function (this__5346__auto__,writer__5347__auto__){
return cljs.core._write(writer__5347__auto__,"shadow.dom/Coordinate");
}));

/**
 * Positional factory function for shadow.dom/Coordinate.
 */
shadow.dom.__GT_Coordinate = (function shadow$dom$__GT_Coordinate(x,y){
return (new shadow.dom.Coordinate(x,y,null,null,null));
});

/**
 * Factory function for shadow.dom/Coordinate, taking a map of keywords to field values.
 */
shadow.dom.map__GT_Coordinate = (function shadow$dom$map__GT_Coordinate(G__18244){
var extmap__5342__auto__ = (function (){var G__18293 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__18244,new cljs.core.Keyword(null,"x","x",2099068185),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"y","y",-1757859776)], 0));
if(cljs.core.record_QMARK_(G__18244)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__18293);
} else {
return G__18293;
}
})();
return (new shadow.dom.Coordinate(new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(G__18244),new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(G__18244),null,cljs.core.not_empty(extmap__5342__auto__),null));
});

shadow.dom.get_position = (function shadow$dom$get_position(el){
var pos = goog.style.getPosition(shadow.dom.dom_node(el));
return shadow.dom.__GT_Coordinate(pos.x,pos.y);
});
shadow.dom.get_client_position = (function shadow$dom$get_client_position(el){
var pos = goog.style.getClientPosition(shadow.dom.dom_node(el));
return shadow.dom.__GT_Coordinate(pos.x,pos.y);
});
shadow.dom.get_page_offset = (function shadow$dom$get_page_offset(el){
var pos = goog.style.getPageOffset(shadow.dom.dom_node(el));
return shadow.dom.__GT_Coordinate(pos.x,pos.y);
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
shadow.dom.Size = (function (w,h,__meta,__extmap,__hash){
this.w = w;
this.h = h;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(shadow.dom.Size.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__5300__auto__,k__5301__auto__){
var self__ = this;
var this__5300__auto____$1 = this;
return this__5300__auto____$1.cljs$core$ILookup$_lookup$arity$3(null, k__5301__auto__,null);
}));

(shadow.dom.Size.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__5302__auto__,k18298,else__5303__auto__){
var self__ = this;
var this__5302__auto____$1 = this;
var G__18309 = k18298;
var G__18309__$1 = (((G__18309 instanceof cljs.core.Keyword))?G__18309.fqn:null);
switch (G__18309__$1) {
case "w":
return self__.w;

break;
case "h":
return self__.h;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k18298,else__5303__auto__);

}
}));

(shadow.dom.Size.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__5320__auto__,f__5321__auto__,init__5322__auto__){
var self__ = this;
var this__5320__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__5323__auto__,p__18311){
var vec__18312 = p__18311;
var k__5324__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18312,(0),null);
var v__5325__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18312,(1),null);
return (f__5321__auto__.cljs$core$IFn$_invoke$arity$3 ? f__5321__auto__.cljs$core$IFn$_invoke$arity$3(ret__5323__auto__,k__5324__auto__,v__5325__auto__) : f__5321__auto__.call(null, ret__5323__auto__,k__5324__auto__,v__5325__auto__));
}),init__5322__auto__,this__5320__auto____$1);
}));

(shadow.dom.Size.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__5315__auto__,writer__5316__auto__,opts__5317__auto__){
var self__ = this;
var this__5315__auto____$1 = this;
var pr_pair__5318__auto__ = (function (keyval__5319__auto__){
return cljs.core.pr_sequential_writer(writer__5316__auto__,cljs.core.pr_writer,""," ","",opts__5317__auto__,keyval__5319__auto__);
});
return cljs.core.pr_sequential_writer(writer__5316__auto__,pr_pair__5318__auto__,"#shadow.dom.Size{",", ","}",opts__5317__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"w","w",354169001),self__.w],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"h","h",1109658740),self__.h],null))], null),self__.__extmap));
}));

(shadow.dom.Size.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__18297){
var self__ = this;
var G__18297__$1 = this;
return (new cljs.core.RecordIter((0),G__18297__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"w","w",354169001),new cljs.core.Keyword(null,"h","h",1109658740)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(shadow.dom.Size.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__5298__auto__){
var self__ = this;
var this__5298__auto____$1 = this;
return self__.__meta;
}));

(shadow.dom.Size.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__5295__auto__){
var self__ = this;
var this__5295__auto____$1 = this;
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,self__.__extmap,self__.__hash));
}));

(shadow.dom.Size.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__5304__auto__){
var self__ = this;
var this__5304__auto____$1 = this;
return (2 + cljs.core.count(self__.__extmap));
}));

(shadow.dom.Size.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__5296__auto__){
var self__ = this;
var this__5296__auto____$1 = this;
var h__5111__auto__ = self__.__hash;
if((!((h__5111__auto__ == null)))){
return h__5111__auto__;
} else {
var h__5111__auto____$1 = (function (coll__5297__auto__){
return (-1228019642 ^ cljs.core.hash_unordered_coll(coll__5297__auto__));
})(this__5296__auto____$1);
(self__.__hash = h__5111__auto____$1);

return h__5111__auto____$1;
}
}));

(shadow.dom.Size.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this18299,other18300){
var self__ = this;
var this18299__$1 = this;
return (((!((other18300 == null)))) && ((((this18299__$1.constructor === other18300.constructor)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this18299__$1.w,other18300.w)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this18299__$1.h,other18300.h)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this18299__$1.__extmap,other18300.__extmap)))))))));
}));

(shadow.dom.Size.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__5310__auto__,k__5311__auto__){
var self__ = this;
var this__5310__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"w","w",354169001),null,new cljs.core.Keyword(null,"h","h",1109658740),null], null), null),k__5311__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__5310__auto____$1),self__.__meta),k__5311__auto__);
} else {
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__5311__auto__)),null));
}
}));

(shadow.dom.Size.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (this__5307__auto__,k18298){
var self__ = this;
var this__5307__auto____$1 = this;
var G__18340 = k18298;
var G__18340__$1 = (((G__18340 instanceof cljs.core.Keyword))?G__18340.fqn:null);
switch (G__18340__$1) {
case "w":
case "h":
return true;

break;
default:
return cljs.core.contains_QMARK_(self__.__extmap,k18298);

}
}));

(shadow.dom.Size.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__5308__auto__,k__5309__auto__,G__18297){
var self__ = this;
var this__5308__auto____$1 = this;
var pred__18343 = cljs.core.keyword_identical_QMARK_;
var expr__18344 = k__5309__auto__;
if(cljs.core.truth_((pred__18343.cljs$core$IFn$_invoke$arity$2 ? pred__18343.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"w","w",354169001),expr__18344) : pred__18343.call(null, new cljs.core.Keyword(null,"w","w",354169001),expr__18344)))){
return (new shadow.dom.Size(G__18297,self__.h,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__18343.cljs$core$IFn$_invoke$arity$2 ? pred__18343.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"h","h",1109658740),expr__18344) : pred__18343.call(null, new cljs.core.Keyword(null,"h","h",1109658740),expr__18344)))){
return (new shadow.dom.Size(self__.w,G__18297,self__.__meta,self__.__extmap,null));
} else {
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__5309__auto__,G__18297),null));
}
}
}));

(shadow.dom.Size.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__5313__auto__){
var self__ = this;
var this__5313__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"w","w",354169001),self__.w,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"h","h",1109658740),self__.h,null))], null),self__.__extmap));
}));

(shadow.dom.Size.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__5299__auto__,G__18297){
var self__ = this;
var this__5299__auto____$1 = this;
return (new shadow.dom.Size(self__.w,self__.h,G__18297,self__.__extmap,self__.__hash));
}));

(shadow.dom.Size.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__5305__auto__,entry__5306__auto__){
var self__ = this;
var this__5305__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__5306__auto__)){
return this__5305__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null, cljs.core._nth(entry__5306__auto__,(0)),cljs.core._nth(entry__5306__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__5305__auto____$1,entry__5306__auto__);
}
}));

(shadow.dom.Size.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"w","w",1994700528,null),new cljs.core.Symbol(null,"h","h",-1544777029,null)], null);
}));

(shadow.dom.Size.cljs$lang$type = true);

(shadow.dom.Size.cljs$lang$ctorPrSeq = (function (this__5346__auto__){
return (new cljs.core.List(null,"shadow.dom/Size",null,(1),null));
}));

(shadow.dom.Size.cljs$lang$ctorPrWriter = (function (this__5346__auto__,writer__5347__auto__){
return cljs.core._write(writer__5347__auto__,"shadow.dom/Size");
}));

/**
 * Positional factory function for shadow.dom/Size.
 */
shadow.dom.__GT_Size = (function shadow$dom$__GT_Size(w,h){
return (new shadow.dom.Size(w,h,null,null,null));
});

/**
 * Factory function for shadow.dom/Size, taking a map of keywords to field values.
 */
shadow.dom.map__GT_Size = (function shadow$dom$map__GT_Size(G__18307){
var extmap__5342__auto__ = (function (){var G__18389 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__18307,new cljs.core.Keyword(null,"w","w",354169001),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"h","h",1109658740)], 0));
if(cljs.core.record_QMARK_(G__18307)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__18389);
} else {
return G__18389;
}
})();
return (new shadow.dom.Size(new cljs.core.Keyword(null,"w","w",354169001).cljs$core$IFn$_invoke$arity$1(G__18307),new cljs.core.Keyword(null,"h","h",1109658740).cljs$core$IFn$_invoke$arity$1(G__18307),null,cljs.core.not_empty(extmap__5342__auto__),null));
});

shadow.dom.size__GT_clj = (function shadow$dom$size__GT_clj(size){
return (new shadow.dom.Size(size.width,size.height,null,null,null));
});
shadow.dom.get_size = (function shadow$dom$get_size(el){
return shadow.dom.size__GT_clj(goog.style.getSize(shadow.dom.dom_node(el)));
});
shadow.dom.get_height = (function shadow$dom$get_height(el){
return shadow.dom.get_size(el).h;
});
shadow.dom.get_viewport_size = (function shadow$dom$get_viewport_size(){
return shadow.dom.size__GT_clj(goog.dom.getViewportSize());
});
shadow.dom.first_child = (function shadow$dom$first_child(el){
return (shadow.dom.dom_node(el).children[(0)]);
});
shadow.dom.select_option_values = (function shadow$dom$select_option_values(el){
var native$ = shadow.dom.dom_node(el);
var opts = (native$["options"]);
var a__5590__auto__ = opts;
var l__5591__auto__ = a__5590__auto__.length;
var i = (0);
var ret = cljs.core.PersistentVector.EMPTY;
while(true){
if((i < l__5591__auto__)){
var G__19200 = (i + (1));
var G__19201 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ret,(opts[i]["value"]));
i = G__19200;
ret = G__19201;
continue;
} else {
return ret;
}
break;
}
});
shadow.dom.build_url = (function shadow$dom$build_url(path,query_params){
if(cljs.core.empty_QMARK_(query_params)){
return path;
} else {
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(path),"?",clojure.string.join.cljs$core$IFn$_invoke$arity$2("&",cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__18496){
var vec__18497 = p__18496;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18497,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18497,(1),null);
return [cljs.core.name(k),"=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(encodeURIComponent(cljs.core.str.cljs$core$IFn$_invoke$arity$1(v)))].join('');
}),query_params))].join('');
}
});
shadow.dom.redirect = (function shadow$dom$redirect(var_args){
var G__18513 = arguments.length;
switch (G__18513) {
case 1:
return shadow.dom.redirect.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.redirect.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.redirect.cljs$core$IFn$_invoke$arity$1 = (function (path){
return shadow.dom.redirect.cljs$core$IFn$_invoke$arity$2(path,cljs.core.PersistentArrayMap.EMPTY);
}));

(shadow.dom.redirect.cljs$core$IFn$_invoke$arity$2 = (function (path,query_params){
return (document["location"]["href"] = shadow.dom.build_url(path,query_params));
}));

(shadow.dom.redirect.cljs$lang$maxFixedArity = 2);

shadow.dom.reload_BANG_ = (function shadow$dom$reload_BANG_(){
return (document.location.href = document.location.href);
});
shadow.dom.tag_name = (function shadow$dom$tag_name(el){
var dom = shadow.dom.dom_node(el);
return dom.tagName;
});
shadow.dom.insert_after = (function shadow$dom$insert_after(ref,new$){
var new_node = shadow.dom.dom_node(new$);
goog.dom.insertSiblingAfter(new_node,shadow.dom.dom_node(ref));

return new_node;
});
shadow.dom.insert_before = (function shadow$dom$insert_before(ref,new$){
var new_node = shadow.dom.dom_node(new$);
goog.dom.insertSiblingBefore(new_node,shadow.dom.dom_node(ref));

return new_node;
});
shadow.dom.insert_first = (function shadow$dom$insert_first(ref,new$){
var temp__5802__auto__ = shadow.dom.dom_node(ref).firstChild;
if(cljs.core.truth_(temp__5802__auto__)){
var child = temp__5802__auto__;
return shadow.dom.insert_before(child,new$);
} else {
return shadow.dom.append.cljs$core$IFn$_invoke$arity$2(ref,new$);
}
});
shadow.dom.index_of = (function shadow$dom$index_of(el){
var el__$1 = shadow.dom.dom_node(el);
var i = (0);
while(true){
var ps = el__$1.previousSibling;
if((ps == null)){
return i;
} else {
var G__19206 = ps;
var G__19207 = (i + (1));
el__$1 = G__19206;
i = G__19207;
continue;
}
break;
}
});
shadow.dom.get_parent = (function shadow$dom$get_parent(el){
return goog.dom.getParentElement(shadow.dom.dom_node(el));
});
shadow.dom.parents = (function shadow$dom$parents(el){
var parent = shadow.dom.get_parent(el);
if(cljs.core.truth_(parent)){
return cljs.core.cons(parent,(new cljs.core.LazySeq(null,(function (){
return (shadow.dom.parents.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.parents.cljs$core$IFn$_invoke$arity$1(parent) : shadow.dom.parents.call(null, parent));
}),null,null)));
} else {
return null;
}
});
shadow.dom.matches = (function shadow$dom$matches(el,sel){
return shadow.dom.dom_node(el).matches(sel);
});
shadow.dom.get_next_sibling = (function shadow$dom$get_next_sibling(el){
return goog.dom.getNextElementSibling(shadow.dom.dom_node(el));
});
shadow.dom.get_previous_sibling = (function shadow$dom$get_previous_sibling(el){
return goog.dom.getPreviousElementSibling(shadow.dom.dom_node(el));
});
shadow.dom.xmlns = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 2, ["svg","http://www.w3.org/2000/svg","xlink","http://www.w3.org/1999/xlink"], null));
shadow.dom.create_svg_node = (function shadow$dom$create_svg_node(tag_def,props){
var vec__18597 = shadow.dom.parse_tag(tag_def);
var tag_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18597,(0),null);
var tag_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18597,(1),null);
var tag_classes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18597,(2),null);
var el = document.createElementNS("http://www.w3.org/2000/svg",tag_name);
if(cljs.core.truth_(tag_id)){
el.setAttribute("id",tag_id);
} else {
}

if(cljs.core.truth_(tag_classes)){
el.setAttribute("class",shadow.dom.merge_class_string(new cljs.core.Keyword(null,"class","class",-2030961996).cljs$core$IFn$_invoke$arity$1(props),tag_classes));
} else {
}

var seq__18616_19212 = cljs.core.seq(props);
var chunk__18621_19214 = null;
var count__18622_19216 = (0);
var i__18623_19218 = (0);
while(true){
if((i__18623_19218 < count__18622_19216)){
var vec__18637_19219 = chunk__18621_19214.cljs$core$IIndexed$_nth$arity$2(null, i__18623_19218);
var k_19220 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18637_19219,(0),null);
var v_19221 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18637_19219,(1),null);
el.setAttributeNS((function (){var temp__5804__auto__ = cljs.core.namespace(k_19220);
if(cljs.core.truth_(temp__5804__auto__)){
var ns = temp__5804__auto__;
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(shadow.dom.xmlns),ns);
} else {
return null;
}
})(),cljs.core.name(k_19220),v_19221);


var G__19224 = seq__18616_19212;
var G__19225 = chunk__18621_19214;
var G__19226 = count__18622_19216;
var G__19227 = (i__18623_19218 + (1));
seq__18616_19212 = G__19224;
chunk__18621_19214 = G__19225;
count__18622_19216 = G__19226;
i__18623_19218 = G__19227;
continue;
} else {
var temp__5804__auto___19228 = cljs.core.seq(seq__18616_19212);
if(temp__5804__auto___19228){
var seq__18616_19229__$1 = temp__5804__auto___19228;
if(cljs.core.chunked_seq_QMARK_(seq__18616_19229__$1)){
var c__5525__auto___19230 = cljs.core.chunk_first(seq__18616_19229__$1);
var G__19231 = cljs.core.chunk_rest(seq__18616_19229__$1);
var G__19232 = c__5525__auto___19230;
var G__19233 = cljs.core.count(c__5525__auto___19230);
var G__19234 = (0);
seq__18616_19212 = G__19231;
chunk__18621_19214 = G__19232;
count__18622_19216 = G__19233;
i__18623_19218 = G__19234;
continue;
} else {
var vec__18642_19235 = cljs.core.first(seq__18616_19229__$1);
var k_19236 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18642_19235,(0),null);
var v_19237 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18642_19235,(1),null);
el.setAttributeNS((function (){var temp__5804__auto____$1 = cljs.core.namespace(k_19236);
if(cljs.core.truth_(temp__5804__auto____$1)){
var ns = temp__5804__auto____$1;
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(shadow.dom.xmlns),ns);
} else {
return null;
}
})(),cljs.core.name(k_19236),v_19237);


var G__19242 = cljs.core.next(seq__18616_19229__$1);
var G__19243 = null;
var G__19244 = (0);
var G__19245 = (0);
seq__18616_19212 = G__19242;
chunk__18621_19214 = G__19243;
count__18622_19216 = G__19244;
i__18623_19218 = G__19245;
continue;
}
} else {
}
}
break;
}

return el;
});
shadow.dom.svg_node = (function shadow$dom$svg_node(el){
if((el == null)){
return null;
} else {
if((((!((el == null))))?((((false) || ((cljs.core.PROTOCOL_SENTINEL === el.shadow$dom$SVGElement$))))?true:false):false)){
return el.shadow$dom$SVGElement$_to_svg$arity$1(null, );
} else {
return el;

}
}
});
shadow.dom.make_svg_node = (function shadow$dom$make_svg_node(structure){
var vec__18691 = shadow.dom.destructure_node(shadow.dom.create_svg_node,structure);
var node = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18691,(0),null);
var node_children = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18691,(1),null);
var seq__18694_19246 = cljs.core.seq(node_children);
var chunk__18696_19247 = null;
var count__18697_19248 = (0);
var i__18698_19249 = (0);
while(true){
if((i__18698_19249 < count__18697_19248)){
var child_struct_19250 = chunk__18696_19247.cljs$core$IIndexed$_nth$arity$2(null, i__18698_19249);
if((!((child_struct_19250 == null)))){
if(typeof child_struct_19250 === 'string'){
var text_19251 = (node["textContent"]);
(node["textContent"] = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(text_19251),child_struct_19250].join(''));
} else {
var children_19252 = shadow.dom.svg_node(child_struct_19250);
if(cljs.core.seq_QMARK_(children_19252)){
var seq__18733_19253 = cljs.core.seq(children_19252);
var chunk__18735_19254 = null;
var count__18736_19255 = (0);
var i__18737_19256 = (0);
while(true){
if((i__18737_19256 < count__18736_19255)){
var child_19260 = chunk__18735_19254.cljs$core$IIndexed$_nth$arity$2(null, i__18737_19256);
if(cljs.core.truth_(child_19260)){
node.appendChild(child_19260);


var G__19261 = seq__18733_19253;
var G__19262 = chunk__18735_19254;
var G__19263 = count__18736_19255;
var G__19264 = (i__18737_19256 + (1));
seq__18733_19253 = G__19261;
chunk__18735_19254 = G__19262;
count__18736_19255 = G__19263;
i__18737_19256 = G__19264;
continue;
} else {
var G__19265 = seq__18733_19253;
var G__19266 = chunk__18735_19254;
var G__19267 = count__18736_19255;
var G__19268 = (i__18737_19256 + (1));
seq__18733_19253 = G__19265;
chunk__18735_19254 = G__19266;
count__18736_19255 = G__19267;
i__18737_19256 = G__19268;
continue;
}
} else {
var temp__5804__auto___19272 = cljs.core.seq(seq__18733_19253);
if(temp__5804__auto___19272){
var seq__18733_19273__$1 = temp__5804__auto___19272;
if(cljs.core.chunked_seq_QMARK_(seq__18733_19273__$1)){
var c__5525__auto___19274 = cljs.core.chunk_first(seq__18733_19273__$1);
var G__19275 = cljs.core.chunk_rest(seq__18733_19273__$1);
var G__19276 = c__5525__auto___19274;
var G__19277 = cljs.core.count(c__5525__auto___19274);
var G__19278 = (0);
seq__18733_19253 = G__19275;
chunk__18735_19254 = G__19276;
count__18736_19255 = G__19277;
i__18737_19256 = G__19278;
continue;
} else {
var child_19279 = cljs.core.first(seq__18733_19273__$1);
if(cljs.core.truth_(child_19279)){
node.appendChild(child_19279);


var G__19283 = cljs.core.next(seq__18733_19273__$1);
var G__19284 = null;
var G__19285 = (0);
var G__19286 = (0);
seq__18733_19253 = G__19283;
chunk__18735_19254 = G__19284;
count__18736_19255 = G__19285;
i__18737_19256 = G__19286;
continue;
} else {
var G__19287 = cljs.core.next(seq__18733_19273__$1);
var G__19288 = null;
var G__19289 = (0);
var G__19290 = (0);
seq__18733_19253 = G__19287;
chunk__18735_19254 = G__19288;
count__18736_19255 = G__19289;
i__18737_19256 = G__19290;
continue;
}
}
} else {
}
}
break;
}
} else {
node.appendChild(children_19252);
}
}


var G__19291 = seq__18694_19246;
var G__19292 = chunk__18696_19247;
var G__19293 = count__18697_19248;
var G__19294 = (i__18698_19249 + (1));
seq__18694_19246 = G__19291;
chunk__18696_19247 = G__19292;
count__18697_19248 = G__19293;
i__18698_19249 = G__19294;
continue;
} else {
var G__19295 = seq__18694_19246;
var G__19296 = chunk__18696_19247;
var G__19297 = count__18697_19248;
var G__19298 = (i__18698_19249 + (1));
seq__18694_19246 = G__19295;
chunk__18696_19247 = G__19296;
count__18697_19248 = G__19297;
i__18698_19249 = G__19298;
continue;
}
} else {
var temp__5804__auto___19299 = cljs.core.seq(seq__18694_19246);
if(temp__5804__auto___19299){
var seq__18694_19300__$1 = temp__5804__auto___19299;
if(cljs.core.chunked_seq_QMARK_(seq__18694_19300__$1)){
var c__5525__auto___19301 = cljs.core.chunk_first(seq__18694_19300__$1);
var G__19302 = cljs.core.chunk_rest(seq__18694_19300__$1);
var G__19303 = c__5525__auto___19301;
var G__19304 = cljs.core.count(c__5525__auto___19301);
var G__19305 = (0);
seq__18694_19246 = G__19302;
chunk__18696_19247 = G__19303;
count__18697_19248 = G__19304;
i__18698_19249 = G__19305;
continue;
} else {
var child_struct_19306 = cljs.core.first(seq__18694_19300__$1);
if((!((child_struct_19306 == null)))){
if(typeof child_struct_19306 === 'string'){
var text_19311 = (node["textContent"]);
(node["textContent"] = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(text_19311),child_struct_19306].join(''));
} else {
var children_19312 = shadow.dom.svg_node(child_struct_19306);
if(cljs.core.seq_QMARK_(children_19312)){
var seq__18746_19313 = cljs.core.seq(children_19312);
var chunk__18748_19314 = null;
var count__18749_19315 = (0);
var i__18750_19316 = (0);
while(true){
if((i__18750_19316 < count__18749_19315)){
var child_19317 = chunk__18748_19314.cljs$core$IIndexed$_nth$arity$2(null, i__18750_19316);
if(cljs.core.truth_(child_19317)){
node.appendChild(child_19317);


var G__19318 = seq__18746_19313;
var G__19319 = chunk__18748_19314;
var G__19320 = count__18749_19315;
var G__19321 = (i__18750_19316 + (1));
seq__18746_19313 = G__19318;
chunk__18748_19314 = G__19319;
count__18749_19315 = G__19320;
i__18750_19316 = G__19321;
continue;
} else {
var G__19322 = seq__18746_19313;
var G__19323 = chunk__18748_19314;
var G__19324 = count__18749_19315;
var G__19325 = (i__18750_19316 + (1));
seq__18746_19313 = G__19322;
chunk__18748_19314 = G__19323;
count__18749_19315 = G__19324;
i__18750_19316 = G__19325;
continue;
}
} else {
var temp__5804__auto___19326__$1 = cljs.core.seq(seq__18746_19313);
if(temp__5804__auto___19326__$1){
var seq__18746_19327__$1 = temp__5804__auto___19326__$1;
if(cljs.core.chunked_seq_QMARK_(seq__18746_19327__$1)){
var c__5525__auto___19328 = cljs.core.chunk_first(seq__18746_19327__$1);
var G__19329 = cljs.core.chunk_rest(seq__18746_19327__$1);
var G__19330 = c__5525__auto___19328;
var G__19331 = cljs.core.count(c__5525__auto___19328);
var G__19332 = (0);
seq__18746_19313 = G__19329;
chunk__18748_19314 = G__19330;
count__18749_19315 = G__19331;
i__18750_19316 = G__19332;
continue;
} else {
var child_19333 = cljs.core.first(seq__18746_19327__$1);
if(cljs.core.truth_(child_19333)){
node.appendChild(child_19333);


var G__19334 = cljs.core.next(seq__18746_19327__$1);
var G__19335 = null;
var G__19336 = (0);
var G__19337 = (0);
seq__18746_19313 = G__19334;
chunk__18748_19314 = G__19335;
count__18749_19315 = G__19336;
i__18750_19316 = G__19337;
continue;
} else {
var G__19338 = cljs.core.next(seq__18746_19327__$1);
var G__19339 = null;
var G__19340 = (0);
var G__19341 = (0);
seq__18746_19313 = G__19338;
chunk__18748_19314 = G__19339;
count__18749_19315 = G__19340;
i__18750_19316 = G__19341;
continue;
}
}
} else {
}
}
break;
}
} else {
node.appendChild(children_19312);
}
}


var G__19346 = cljs.core.next(seq__18694_19300__$1);
var G__19347 = null;
var G__19348 = (0);
var G__19349 = (0);
seq__18694_19246 = G__19346;
chunk__18696_19247 = G__19347;
count__18697_19248 = G__19348;
i__18698_19249 = G__19349;
continue;
} else {
var G__19350 = cljs.core.next(seq__18694_19300__$1);
var G__19351 = null;
var G__19352 = (0);
var G__19353 = (0);
seq__18694_19246 = G__19350;
chunk__18696_19247 = G__19351;
count__18697_19248 = G__19352;
i__18698_19249 = G__19353;
continue;
}
}
} else {
}
}
break;
}

return node;
});
(shadow.dom.SVGElement["string"] = true);

(shadow.dom._to_svg["string"] = (function (this$){
if((this$ instanceof cljs.core.Keyword)){
return shadow.dom.make_svg_node(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [this$], null));
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("strings cannot be in svgs",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"this","this",-611633625),this$], null));
}
}));

(cljs.core.PersistentVector.prototype.shadow$dom$SVGElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.PersistentVector.prototype.shadow$dom$SVGElement$_to_svg$arity$1 = (function (this$){
var this$__$1 = this;
return shadow.dom.make_svg_node(this$__$1);
}));

(cljs.core.LazySeq.prototype.shadow$dom$SVGElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.LazySeq.prototype.shadow$dom$SVGElement$_to_svg$arity$1 = (function (this$){
var this$__$1 = this;
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom._to_svg,this$__$1);
}));

(shadow.dom.SVGElement["null"] = true);

(shadow.dom._to_svg["null"] = (function (_){
return null;
}));
shadow.dom.svg = (function shadow$dom$svg(var_args){
var args__5732__auto__ = [];
var len__5726__auto___19360 = arguments.length;
var i__5727__auto___19361 = (0);
while(true){
if((i__5727__auto___19361 < len__5726__auto___19360)){
args__5732__auto__.push((arguments[i__5727__auto___19361]));

var G__19362 = (i__5727__auto___19361 + (1));
i__5727__auto___19361 = G__19362;
continue;
} else {
}
break;
}

var argseq__5733__auto__ = ((((1) < args__5732__auto__.length))?(new cljs.core.IndexedSeq(args__5732__auto__.slice((1)),(0),null)):null);
return shadow.dom.svg.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5733__auto__);
});

(shadow.dom.svg.cljs$core$IFn$_invoke$arity$variadic = (function (attrs,children){
return shadow.dom._to_svg(cljs.core.vec(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"svg","svg",856789142),attrs], null),children)));
}));

(shadow.dom.svg.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(shadow.dom.svg.cljs$lang$applyTo = (function (seq18767){
var G__18768 = cljs.core.first(seq18767);
var seq18767__$1 = cljs.core.next(seq18767);
var self__5711__auto__ = this;
return self__5711__auto__.cljs$core$IFn$_invoke$arity$variadic(G__18768,seq18767__$1);
}));

/**
 * returns a channel for events on el
 * transform-fn should be a (fn [e el] some-val) where some-val will be put on the chan
 * once-or-cleanup handles the removal of the event handler
 * - true: remove after one event
 * - false: never removed
 * - chan: remove on msg/close
 */
shadow.dom.event_chan = (function shadow$dom$event_chan(var_args){
var G__18790 = arguments.length;
switch (G__18790) {
case 2:
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$2 = (function (el,event){
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4(el,event,null,false);
}));

(shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$3 = (function (el,event,xf){
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4(el,event,xf,false);
}));

(shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4 = (function (el,event,xf,once_or_cleanup){
var buf = cljs.core.async.sliding_buffer((1));
var chan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2(buf,xf);
var event_fn = (function shadow$dom$event_fn(e){
cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(chan,e);

if(once_or_cleanup === true){
shadow.dom.remove_event_handler(el,event,shadow$dom$event_fn);

return cljs.core.async.close_BANG_(chan);
} else {
return null;
}
});
shadow.dom.dom_listen(shadow.dom.dom_node(el),cljs.core.name(event),event_fn);

if(cljs.core.truth_((function (){var and__5000__auto__ = once_or_cleanup;
if(cljs.core.truth_(and__5000__auto__)){
return (!(once_or_cleanup === true));
} else {
return and__5000__auto__;
}
})())){
var c__13768__auto___19368 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__13770__auto__ = (function (){var switch__13478__auto__ = (function (state_18805){
var state_val_18806 = (state_18805[(1)]);
if((state_val_18806 === (1))){
var state_18805__$1 = state_18805;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_18805__$1,(2),once_or_cleanup);
} else {
if((state_val_18806 === (2))){
var inst_18802 = (state_18805[(2)]);
var inst_18803 = shadow.dom.remove_event_handler(el,event,event_fn);
var state_18805__$1 = (function (){var statearr_18809 = state_18805;
(statearr_18809[(7)] = inst_18802);

return statearr_18809;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_18805__$1,inst_18803);
} else {
return null;
}
}
});
return (function() {
var shadow$dom$state_machine__13479__auto__ = null;
var shadow$dom$state_machine__13479__auto____0 = (function (){
var statearr_18812 = [null,null,null,null,null,null,null,null];
(statearr_18812[(0)] = shadow$dom$state_machine__13479__auto__);

(statearr_18812[(1)] = (1));

return statearr_18812;
});
var shadow$dom$state_machine__13479__auto____1 = (function (state_18805){
while(true){
var ret_value__13480__auto__ = (function (){try{while(true){
var result__13481__auto__ = switch__13478__auto__(state_18805);
if(cljs.core.keyword_identical_QMARK_(result__13481__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__13481__auto__;
}
break;
}
}catch (e18813){var ex__13482__auto__ = e18813;
var statearr_18814_19370 = state_18805;
(statearr_18814_19370[(2)] = ex__13482__auto__);


if(cljs.core.seq((state_18805[(4)]))){
var statearr_18815_19371 = state_18805;
(statearr_18815_19371[(1)] = cljs.core.first((state_18805[(4)])));

} else {
throw ex__13482__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__13480__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__19372 = state_18805;
state_18805 = G__19372;
continue;
} else {
return ret_value__13480__auto__;
}
break;
}
});
shadow$dom$state_machine__13479__auto__ = function(state_18805){
switch(arguments.length){
case 0:
return shadow$dom$state_machine__13479__auto____0.call(this);
case 1:
return shadow$dom$state_machine__13479__auto____1.call(this,state_18805);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
shadow$dom$state_machine__13479__auto__.cljs$core$IFn$_invoke$arity$0 = shadow$dom$state_machine__13479__auto____0;
shadow$dom$state_machine__13479__auto__.cljs$core$IFn$_invoke$arity$1 = shadow$dom$state_machine__13479__auto____1;
return shadow$dom$state_machine__13479__auto__;
})()
})();
var state__13771__auto__ = (function (){var statearr_18817 = f__13770__auto__();
(statearr_18817[(6)] = c__13768__auto___19368);

return statearr_18817;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__13771__auto__);
}));

} else {
}

return chan;
}));

(shadow.dom.event_chan.cljs$lang$maxFixedArity = 4);


//# sourceMappingURL=shadow.dom.js.map
