goog.provide('cljs.repl');
cljs.repl.print_doc = (function cljs$repl$print_doc(p__18308){
var map__18310 = p__18308;
var map__18310__$1 = cljs.core.__destructure_map(map__18310);
var m = map__18310__$1;
var n = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18310__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var nm = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18310__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["-------------------------"], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var or__5002__auto__ = new cljs.core.Keyword(null,"spec","spec",347520401).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return [(function (){var temp__5804__auto__ = new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(temp__5804__auto__)){
var ns = temp__5804__auto__;
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(ns),"/"].join('');
} else {
return null;
}
})(),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join('');
}
})()], 0));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Protocol"], 0));
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m))){
var seq__18316_18592 = cljs.core.seq(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__18317_18593 = null;
var count__18318_18594 = (0);
var i__18319_18595 = (0);
while(true){
if((i__18319_18595 < count__18318_18594)){
var f_18600 = chunk__18317_18593.cljs$core$IIndexed$_nth$arity$2(null, i__18319_18595);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["  ",f_18600], 0));


var G__18601 = seq__18316_18592;
var G__18602 = chunk__18317_18593;
var G__18603 = count__18318_18594;
var G__18604 = (i__18319_18595 + (1));
seq__18316_18592 = G__18601;
chunk__18317_18593 = G__18602;
count__18318_18594 = G__18603;
i__18319_18595 = G__18604;
continue;
} else {
var temp__5804__auto___18608 = cljs.core.seq(seq__18316_18592);
if(temp__5804__auto___18608){
var seq__18316_18609__$1 = temp__5804__auto___18608;
if(cljs.core.chunked_seq_QMARK_(seq__18316_18609__$1)){
var c__5525__auto___18610 = cljs.core.chunk_first(seq__18316_18609__$1);
var G__18611 = cljs.core.chunk_rest(seq__18316_18609__$1);
var G__18612 = c__5525__auto___18610;
var G__18613 = cljs.core.count(c__5525__auto___18610);
var G__18614 = (0);
seq__18316_18592 = G__18611;
chunk__18317_18593 = G__18612;
count__18318_18594 = G__18613;
i__18319_18595 = G__18614;
continue;
} else {
var f_18615 = cljs.core.first(seq__18316_18609__$1);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["  ",f_18615], 0));


var G__18617 = cljs.core.next(seq__18316_18609__$1);
var G__18618 = null;
var G__18619 = (0);
var G__18620 = (0);
seq__18316_18592 = G__18617;
chunk__18317_18593 = G__18618;
count__18318_18594 = G__18619;
i__18319_18595 = G__18620;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_18624 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__5002__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([arglists_18624], 0));
} else {
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first(arglists_18624)))?cljs.core.second(arglists_18624):arglists_18624)], 0));
}
} else {
}
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"special-form","special-form",-1326536374).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Special Form"], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m)], 0));

if(cljs.core.contains_QMARK_(m,new cljs.core.Keyword(null,"url","url",276297046))){
if(cljs.core.truth_(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))){
return cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n  Please see http://clojure.org/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))].join('')], 0));
} else {
return null;
}
} else {
return cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n  Please see http://clojure.org/special_forms#",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join('')], 0));
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Macro"], 0));
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"spec","spec",347520401).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Spec"], 0));
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["REPL Special Function"], 0));
} else {
}

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m)], 0));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
var seq__18332_18650 = cljs.core.seq(new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__18333_18651 = null;
var count__18334_18652 = (0);
var i__18335_18653 = (0);
while(true){
if((i__18335_18653 < count__18334_18652)){
var vec__18394_18654 = chunk__18333_18651.cljs$core$IIndexed$_nth$arity$2(null, i__18335_18653);
var name_18655 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18394_18654,(0),null);
var map__18397_18656 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18394_18654,(1),null);
var map__18397_18657__$1 = cljs.core.__destructure_map(map__18397_18656);
var doc_18658 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18397_18657__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_18659 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18397_18657__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println();

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",name_18655], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",arglists_18659], 0));

if(cljs.core.truth_(doc_18658)){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",doc_18658], 0));
} else {
}


var G__18664 = seq__18332_18650;
var G__18665 = chunk__18333_18651;
var G__18666 = count__18334_18652;
var G__18667 = (i__18335_18653 + (1));
seq__18332_18650 = G__18664;
chunk__18333_18651 = G__18665;
count__18334_18652 = G__18666;
i__18335_18653 = G__18667;
continue;
} else {
var temp__5804__auto___18668 = cljs.core.seq(seq__18332_18650);
if(temp__5804__auto___18668){
var seq__18332_18669__$1 = temp__5804__auto___18668;
if(cljs.core.chunked_seq_QMARK_(seq__18332_18669__$1)){
var c__5525__auto___18670 = cljs.core.chunk_first(seq__18332_18669__$1);
var G__18671 = cljs.core.chunk_rest(seq__18332_18669__$1);
var G__18672 = c__5525__auto___18670;
var G__18673 = cljs.core.count(c__5525__auto___18670);
var G__18674 = (0);
seq__18332_18650 = G__18671;
chunk__18333_18651 = G__18672;
count__18334_18652 = G__18673;
i__18335_18653 = G__18674;
continue;
} else {
var vec__18398_18675 = cljs.core.first(seq__18332_18669__$1);
var name_18676 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18398_18675,(0),null);
var map__18401_18677 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18398_18675,(1),null);
var map__18401_18678__$1 = cljs.core.__destructure_map(map__18401_18677);
var doc_18679 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18401_18678__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_18680 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18401_18678__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println();

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",name_18676], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",arglists_18680], 0));

if(cljs.core.truth_(doc_18679)){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",doc_18679], 0));
} else {
}


var G__18681 = cljs.core.next(seq__18332_18669__$1);
var G__18682 = null;
var G__18683 = (0);
var G__18684 = (0);
seq__18332_18650 = G__18681;
chunk__18333_18651 = G__18682;
count__18334_18652 = G__18683;
i__18335_18653 = G__18684;
continue;
}
} else {
}
}
break;
}
} else {
}

if(cljs.core.truth_(n)){
var temp__5804__auto__ = cljs.spec.alpha.get_spec(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.ns_name(n)),cljs.core.name(nm)));
if(cljs.core.truth_(temp__5804__auto__)){
var fnspec = temp__5804__auto__;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Spec"], 0));

var seq__18404 = cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword(null,"fn","fn",-1175266204)], null));
var chunk__18405 = null;
var count__18406 = (0);
var i__18407 = (0);
while(true){
if((i__18407 < count__18406)){
var role = chunk__18405.cljs$core$IIndexed$_nth$arity$2(null, i__18407);
var temp__5804__auto___18685__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(fnspec,role);
if(cljs.core.truth_(temp__5804__auto___18685__$1)){
var spec_18686 = temp__5804__auto___18685__$1;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n ",cljs.core.name(role),":"].join(''),cljs.spec.alpha.describe(spec_18686)], 0));
} else {
}


var G__18687 = seq__18404;
var G__18688 = chunk__18405;
var G__18689 = count__18406;
var G__18690 = (i__18407 + (1));
seq__18404 = G__18687;
chunk__18405 = G__18688;
count__18406 = G__18689;
i__18407 = G__18690;
continue;
} else {
var temp__5804__auto____$1 = cljs.core.seq(seq__18404);
if(temp__5804__auto____$1){
var seq__18404__$1 = temp__5804__auto____$1;
if(cljs.core.chunked_seq_QMARK_(seq__18404__$1)){
var c__5525__auto__ = cljs.core.chunk_first(seq__18404__$1);
var G__18700 = cljs.core.chunk_rest(seq__18404__$1);
var G__18701 = c__5525__auto__;
var G__18702 = cljs.core.count(c__5525__auto__);
var G__18703 = (0);
seq__18404 = G__18700;
chunk__18405 = G__18701;
count__18406 = G__18702;
i__18407 = G__18703;
continue;
} else {
var role = cljs.core.first(seq__18404__$1);
var temp__5804__auto___18710__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(fnspec,role);
if(cljs.core.truth_(temp__5804__auto___18710__$2)){
var spec_18711 = temp__5804__auto___18710__$2;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n ",cljs.core.name(role),":"].join(''),cljs.spec.alpha.describe(spec_18711)], 0));
} else {
}


var G__18714 = cljs.core.next(seq__18404__$1);
var G__18715 = null;
var G__18716 = (0);
var G__18717 = (0);
seq__18404 = G__18714;
chunk__18405 = G__18715;
count__18406 = G__18716;
i__18407 = G__18717;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return null;
}
} else {
return null;
}
}
});
/**
 * Constructs a data representation for a Error with keys:
 *  :cause - root cause message
 *  :phase - error phase
 *  :via - cause chain, with cause keys:
 *           :type - exception class symbol
 *           :message - exception message
 *           :data - ex-data
 *           :at - top stack element
 *  :trace - root cause stack elements
 */
cljs.repl.Error__GT_map = (function cljs$repl$Error__GT_map(o){
return cljs.core.Throwable__GT_map(o);
});
/**
 * Returns an analysis of the phase, error, cause, and location of an error that occurred
 *   based on Throwable data, as returned by Throwable->map. All attributes other than phase
 *   are optional:
 *  :clojure.error/phase - keyword phase indicator, one of:
 *    :read-source :compile-syntax-check :compilation :macro-syntax-check :macroexpansion
 *    :execution :read-eval-result :print-eval-result
 *  :clojure.error/source - file name (no path)
 *  :clojure.error/line - integer line number
 *  :clojure.error/column - integer column number
 *  :clojure.error/symbol - symbol being expanded/compiled/invoked
 *  :clojure.error/class - cause exception class symbol
 *  :clojure.error/cause - cause exception message
 *  :clojure.error/spec - explain-data for spec error
 */
cljs.repl.ex_triage = (function cljs$repl$ex_triage(datafied_throwable){
var map__18451 = datafied_throwable;
var map__18451__$1 = cljs.core.__destructure_map(map__18451);
var via = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18451__$1,new cljs.core.Keyword(null,"via","via",-1904457336));
var trace = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18451__$1,new cljs.core.Keyword(null,"trace","trace",-1082747415));
var phase = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__18451__$1,new cljs.core.Keyword(null,"phase","phase",575722892),new cljs.core.Keyword(null,"execution","execution",253283524));
var map__18452 = cljs.core.last(via);
var map__18452__$1 = cljs.core.__destructure_map(map__18452);
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18452__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var message = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18452__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var data = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18452__$1,new cljs.core.Keyword(null,"data","data",-232669377));
var map__18453 = data;
var map__18453__$1 = cljs.core.__destructure_map(map__18453);
var problems = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18453__$1,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814));
var fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18453__$1,new cljs.core.Keyword("cljs.spec.alpha","fn","cljs.spec.alpha/fn",408600443));
var caller = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18453__$1,new cljs.core.Keyword("cljs.spec.test.alpha","caller","cljs.spec.test.alpha/caller",-398302390));
var map__18454 = new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.first(via));
var map__18454__$1 = cljs.core.__destructure_map(map__18454);
var top_data = map__18454__$1;
var source = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18454__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3((function (){var G__18455 = phase;
var G__18455__$1 = (((G__18455 instanceof cljs.core.Keyword))?G__18455.fqn:null);
switch (G__18455__$1) {
case "read-source":
var map__18456 = data;
var map__18456__$1 = cljs.core.__destructure_map(map__18456);
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18456__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18456__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var G__18457 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.second(via)),top_data], 0));
var G__18457__$1 = (cljs.core.truth_(source)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__18457,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__18457);
var G__18457__$2 = (cljs.core.truth_((function (){var fexpr__18458 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__18458.cljs$core$IFn$_invoke$arity$1 ? fexpr__18458.cljs$core$IFn$_invoke$arity$1(source) : fexpr__18458.call(null, source));
})())?cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__18457__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__18457__$1);
if(cljs.core.truth_(message)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__18457__$2,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__18457__$2;
}

break;
case "compile-syntax-check":
case "compilation":
case "macro-syntax-check":
case "macroexpansion":
var G__18463 = top_data;
var G__18463__$1 = (cljs.core.truth_(source)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__18463,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__18463);
var G__18463__$2 = (cljs.core.truth_((function (){var fexpr__18464 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__18464.cljs$core$IFn$_invoke$arity$1 ? fexpr__18464.cljs$core$IFn$_invoke$arity$1(source) : fexpr__18464.call(null, source));
})())?cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__18463__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__18463__$1);
var G__18463__$3 = (cljs.core.truth_(type)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__18463__$2,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__18463__$2);
var G__18463__$4 = (cljs.core.truth_(message)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__18463__$3,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__18463__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__18463__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__18463__$4;
}

break;
case "read-eval-result":
case "print-eval-result":
var vec__18468 = cljs.core.first(trace);
var source__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18468,(0),null);
var method = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18468,(1),null);
var file = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18468,(2),null);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18468,(3),null);
var G__18471 = top_data;
var G__18471__$1 = (cljs.core.truth_(line)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__18471,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),line):G__18471);
var G__18471__$2 = (cljs.core.truth_(file)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__18471__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file):G__18471__$1);
var G__18471__$3 = (cljs.core.truth_((function (){var and__5000__auto__ = source__$1;
if(cljs.core.truth_(and__5000__auto__)){
return method;
} else {
return and__5000__auto__;
}
})())?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__18471__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null))):G__18471__$2);
var G__18471__$4 = (cljs.core.truth_(type)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__18471__$3,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__18471__$3);
if(cljs.core.truth_(message)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__18471__$4,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__18471__$4;
}

break;
case "execution":
var vec__18521 = cljs.core.first(trace);
var source__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18521,(0),null);
var method = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18521,(1),null);
var file = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18521,(2),null);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18521,(3),null);
var file__$1 = cljs.core.first(cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p1__18441_SHARP_){
var or__5002__auto__ = (p1__18441_SHARP_ == null);
if(or__5002__auto__){
return or__5002__auto__;
} else {
var fexpr__18524 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__18524.cljs$core$IFn$_invoke$arity$1 ? fexpr__18524.cljs$core$IFn$_invoke$arity$1(p1__18441_SHARP_) : fexpr__18524.call(null, p1__18441_SHARP_));
}
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(caller),file], null)));
var err_line = (function (){var or__5002__auto__ = new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(caller);
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return line;
}
})();
var G__18526 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type], null);
var G__18526__$1 = (cljs.core.truth_(err_line)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__18526,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),err_line):G__18526);
var G__18526__$2 = (cljs.core.truth_(message)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__18526__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__18526__$1);
var G__18526__$3 = (cljs.core.truth_((function (){var or__5002__auto__ = fn;
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
var and__5000__auto__ = source__$1;
if(cljs.core.truth_(and__5000__auto__)){
return method;
} else {
return and__5000__auto__;
}
}
})())?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__18526__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(function (){var or__5002__auto__ = fn;
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null));
}
})()):G__18526__$2);
var G__18526__$4 = (cljs.core.truth_(file__$1)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__18526__$3,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file__$1):G__18526__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__18526__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__18526__$4;
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__18455__$1)].join('')));

}
})(),new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358),phase);
});
/**
 * Returns a string from exception data, as produced by ex-triage.
 *   The first line summarizes the exception phase and location.
 *   The subsequent lines describe the cause.
 */
cljs.repl.ex_str = (function cljs$repl$ex_str(p__18544){
var map__18546 = p__18544;
var map__18546__$1 = cljs.core.__destructure_map(map__18546);
var triage_data = map__18546__$1;
var phase = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18546__$1,new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358));
var source = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18546__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18546__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18546__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var symbol = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18546__$1,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994));
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18546__$1,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890));
var cause = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18546__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742));
var spec = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18546__$1,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595));
var loc = [cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var or__5002__auto__ = source;
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return "<cljs repl>";
}
})()),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var or__5002__auto__ = line;
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return (1);
}
})()),(cljs.core.truth_(column)?[":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column)].join(''):"")].join('');
var class_name = cljs.core.name((function (){var or__5002__auto__ = class$;
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return "";
}
})());
var simple_class = class_name;
var cause_type = ((cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["RuntimeException",null,"Exception",null], null), null),simple_class))?"":[" (",simple_class,")"].join(''));
var format = goog.string.format;
var G__18547 = phase;
var G__18547__$1 = (((G__18547 instanceof cljs.core.Keyword))?G__18547.fqn:null);
switch (G__18547__$1) {
case "read-source":
return (format.cljs$core$IFn$_invoke$arity$3 ? format.cljs$core$IFn$_invoke$arity$3("Syntax error reading source at (%s).\n%s\n",loc,cause) : format.call(null, "Syntax error reading source at (%s).\n%s\n",loc,cause));

break;
case "macro-syntax-check":
var G__18548 = "Syntax error macroexpanding %sat (%s).\n%s";
var G__18549 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__18550 = loc;
var G__18551 = (cljs.core.truth_(spec)?(function (){var sb__5647__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__18553_18763 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__18554_18764 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__18555_18765 = true;
var _STAR_print_fn_STAR__temp_val__18556_18766 = (function (x__5648__auto__){
return sb__5647__auto__.append(x__5648__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__18555_18765);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__18556_18766);

try{cljs.spec.alpha.explain_out(cljs.core.update.cljs$core$IFn$_invoke$arity$3(spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),(function (probs){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__18540_SHARP_){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__18540_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
}),probs);
}))
);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__18554_18764);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__18553_18763);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__5647__auto__);
})():(format.cljs$core$IFn$_invoke$arity$2 ? format.cljs$core$IFn$_invoke$arity$2("%s\n",cause) : format.call(null, "%s\n",cause)));
return (format.cljs$core$IFn$_invoke$arity$4 ? format.cljs$core$IFn$_invoke$arity$4(G__18548,G__18549,G__18550,G__18551) : format.call(null, G__18548,G__18549,G__18550,G__18551));

break;
case "macroexpansion":
var G__18557 = "Unexpected error%s macroexpanding %sat (%s).\n%s\n";
var G__18558 = cause_type;
var G__18559 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__18560 = loc;
var G__18561 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__18557,G__18558,G__18559,G__18560,G__18561) : format.call(null, G__18557,G__18558,G__18559,G__18560,G__18561));

break;
case "compile-syntax-check":
var G__18565 = "Syntax error%s compiling %sat (%s).\n%s\n";
var G__18566 = cause_type;
var G__18567 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__18568 = loc;
var G__18569 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__18565,G__18566,G__18567,G__18568,G__18569) : format.call(null, G__18565,G__18566,G__18567,G__18568,G__18569));

break;
case "compilation":
var G__18570 = "Unexpected error%s compiling %sat (%s).\n%s\n";
var G__18571 = cause_type;
var G__18572 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__18573 = loc;
var G__18574 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__18570,G__18571,G__18572,G__18573,G__18574) : format.call(null, G__18570,G__18571,G__18572,G__18573,G__18574));

break;
case "read-eval-result":
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5("Error reading eval result%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause) : format.call(null, "Error reading eval result%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause));

break;
case "print-eval-result":
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5("Error printing return value%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause) : format.call(null, "Error printing return value%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause));

break;
case "execution":
if(cljs.core.truth_(spec)){
var G__18575 = "Execution error - invalid arguments to %s at (%s).\n%s";
var G__18576 = symbol;
var G__18577 = loc;
var G__18578 = (function (){var sb__5647__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__18579_18769 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__18580_18770 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__18581_18771 = true;
var _STAR_print_fn_STAR__temp_val__18582_18772 = (function (x__5648__auto__){
return sb__5647__auto__.append(x__5648__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__18581_18771);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__18582_18772);

try{cljs.spec.alpha.explain_out(cljs.core.update.cljs$core$IFn$_invoke$arity$3(spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),(function (probs){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__18543_SHARP_){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__18543_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
}),probs);
}))
);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__18580_18770);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__18579_18769);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__5647__auto__);
})();
return (format.cljs$core$IFn$_invoke$arity$4 ? format.cljs$core$IFn$_invoke$arity$4(G__18575,G__18576,G__18577,G__18578) : format.call(null, G__18575,G__18576,G__18577,G__18578));
} else {
var G__18587 = "Execution error%s at %s(%s).\n%s\n";
var G__18588 = cause_type;
var G__18589 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__18590 = loc;
var G__18591 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__18587,G__18588,G__18589,G__18590,G__18591) : format.call(null, G__18587,G__18588,G__18589,G__18590,G__18591));
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__18547__$1)].join('')));

}
});
cljs.repl.error__GT_str = (function cljs$repl$error__GT_str(error){
return cljs.repl.ex_str(cljs.repl.ex_triage(cljs.repl.Error__GT_map(error)));
});

//# sourceMappingURL=cljs.repl.js.map
