goog.provide('cljs.core.async');
goog.scope(function(){
  cljs.core.async.goog$module$goog$array = goog.module.get('goog.array');
});

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async13890 = (function (f,blockable,meta13891){
this.f = f;
this.blockable = blockable;
this.meta13891 = meta13891;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async13890.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_13892,meta13891__$1){
var self__ = this;
var _13892__$1 = this;
return (new cljs.core.async.t_cljs$core$async13890(self__.f,self__.blockable,meta13891__$1));
}));

(cljs.core.async.t_cljs$core$async13890.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_13892){
var self__ = this;
var _13892__$1 = this;
return self__.meta13891;
}));

(cljs.core.async.t_cljs$core$async13890.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async13890.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async13890.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
}));

(cljs.core.async.t_cljs$core$async13890.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
}));

(cljs.core.async.t_cljs$core$async13890.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta13891","meta13891",1952224971,null)], null);
}));

(cljs.core.async.t_cljs$core$async13890.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async13890.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async13890");

(cljs.core.async.t_cljs$core$async13890.cljs$lang$ctorPrWriter = (function (this__5287__auto__,writer__5288__auto__,opt__5289__auto__){
return cljs.core._write(writer__5288__auto__,"cljs.core.async/t_cljs$core$async13890");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async13890.
 */
cljs.core.async.__GT_t_cljs$core$async13890 = (function cljs$core$async$__GT_t_cljs$core$async13890(f,blockable,meta13891){
return (new cljs.core.async.t_cljs$core$async13890(f,blockable,meta13891));
});


cljs.core.async.fn_handler = (function cljs$core$async$fn_handler(var_args){
var G__13888 = arguments.length;
switch (G__13888) {
case 1:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1 = (function (f){
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(f,true);
}));

(cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2 = (function (f,blockable){
return (new cljs.core.async.t_cljs$core$async13890(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
}));

(cljs.core.async.fn_handler.cljs$lang$maxFixedArity = 2);

/**
 * Returns a fixed buffer of size n. When full, puts will block/park.
 */
cljs.core.async.buffer = (function cljs$core$async$buffer(n){
return cljs.core.async.impl.buffers.fixed_buffer(n);
});
/**
 * Returns a buffer of size n. When full, puts will complete but
 *   val will be dropped (no transfer).
 */
cljs.core.async.dropping_buffer = (function cljs$core$async$dropping_buffer(n){
return cljs.core.async.impl.buffers.dropping_buffer(n);
});
/**
 * Returns a buffer of size n. When full, puts will complete, and be
 *   buffered, but oldest elements in buffer will be dropped (not
 *   transferred).
 */
cljs.core.async.sliding_buffer = (function cljs$core$async$sliding_buffer(n){
return cljs.core.async.impl.buffers.sliding_buffer(n);
});
/**
 * Returns true if a channel created with buff will never block. That is to say,
 * puts into this buffer will never cause the buffer to be full. 
 */
cljs.core.async.unblocking_buffer_QMARK_ = (function cljs$core$async$unblocking_buffer_QMARK_(buff){
if((!((buff == null)))){
if(((false) || ((cljs.core.PROTOCOL_SENTINEL === buff.cljs$core$async$impl$protocols$UnblockingBuffer$)))){
return true;
} else {
if((!buff.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_(cljs.core.async.impl.protocols.UnblockingBuffer,buff);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_(cljs.core.async.impl.protocols.UnblockingBuffer,buff);
}
});
/**
 * Creates a channel with an optional buffer, an optional transducer (like (map f),
 *   (filter p) etc or a composition thereof), and an optional exception handler.
 *   If buf-or-n is a number, will create and use a fixed buffer of that size. If a
 *   transducer is supplied a buffer must be specified. ex-handler must be a
 *   fn of one argument - if an exception occurs during transformation it will be called
 *   with the thrown value as an argument, and any non-nil return value will be placed
 *   in the channel.
 */
cljs.core.async.chan = (function cljs$core$async$chan(var_args){
var G__13910 = arguments.length;
switch (G__13910) {
case 0:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(null);
}));

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1 = (function (buf_or_n){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(buf_or_n,null,null);
}));

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2 = (function (buf_or_n,xform){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(buf_or_n,xform,null);
}));

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3 = (function (buf_or_n,xform,ex_handler){
var buf_or_n__$1 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(buf_or_n,(0)))?null:buf_or_n);
if(cljs.core.truth_(xform)){
if(cljs.core.truth_(buf_or_n__$1)){
} else {
throw (new Error(["Assert failed: ","buffer must be supplied when transducer is","\n","buf-or-n"].join('')));
}
} else {
}

return cljs.core.async.impl.channels.chan.cljs$core$IFn$_invoke$arity$3(((typeof buf_or_n__$1 === 'number')?cljs.core.async.buffer(buf_or_n__$1):buf_or_n__$1),xform,ex_handler);
}));

(cljs.core.async.chan.cljs$lang$maxFixedArity = 3);

/**
 * Creates a promise channel with an optional transducer, and an optional
 *   exception-handler. A promise channel can take exactly one value that consumers
 *   will receive. Once full, puts complete but val is dropped (no transfer).
 *   Consumers will block until either a value is placed in the channel or the
 *   channel is closed. See chan for the semantics of xform and ex-handler.
 */
cljs.core.async.promise_chan = (function cljs$core$async$promise_chan(var_args){
var G__13925 = arguments.length;
switch (G__13925) {
case 0:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1(null);
}));

(cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1 = (function (xform){
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2(xform,null);
}));

(cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2 = (function (xform,ex_handler){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(cljs.core.async.impl.buffers.promise_buffer(),xform,ex_handler);
}));

(cljs.core.async.promise_chan.cljs$lang$maxFixedArity = 2);

/**
 * Returns a channel that will close after msecs
 */
cljs.core.async.timeout = (function cljs$core$async$timeout(msecs){
return cljs.core.async.impl.timers.timeout(msecs);
});
/**
 * takes a val from port. Must be called inside a (go ...) block. Will
 *   return nil if closed. Will park if nothing is available.
 *   Returns true unless port is already closed
 */
cljs.core.async._LT__BANG_ = (function cljs$core$async$_LT__BANG_(port){
throw (new Error("<! used not in (go ...) block"));
});
/**
 * Asynchronously takes a val from port, passing to fn1. Will pass nil
 * if closed. If on-caller? (default true) is true, and value is
 * immediately available, will call fn1 on calling thread.
 * Returns nil.
 */
cljs.core.async.take_BANG_ = (function cljs$core$async$take_BANG_(var_args){
var G__13933 = arguments.length;
switch (G__13933) {
case 2:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,fn1){
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3(port,fn1,true);
}));

(cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(fn1));
if(cljs.core.truth_(ret)){
var val_17282 = cljs.core.deref(ret);
if(cljs.core.truth_(on_caller_QMARK_)){
(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_17282) : fn1.call(null, val_17282));
} else {
cljs.core.async.impl.dispatch.run((function (){
return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_17282) : fn1.call(null, val_17282));
}));
}
} else {
}

return null;
}));

(cljs.core.async.take_BANG_.cljs$lang$maxFixedArity = 3);

cljs.core.async.nop = (function cljs$core$async$nop(_){
return null;
});
cljs.core.async.fhnop = cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(cljs.core.async.nop);
/**
 * puts a val into port. nil values are not allowed. Must be called
 *   inside a (go ...) block. Will park if no buffer space is available.
 *   Returns true unless port is already closed.
 */
cljs.core.async._GT__BANG_ = (function cljs$core$async$_GT__BANG_(port,val){
throw (new Error(">! used not in (go ...) block"));
});
/**
 * Asynchronously puts a val into port, calling fn1 (if supplied) when
 * complete. nil values are not allowed. Will throw if closed. If
 * on-caller? (default true) is true, and the put is immediately
 * accepted, will call fn1 on calling thread.  Returns nil.
 */
cljs.core.async.put_BANG_ = (function cljs$core$async$put_BANG_(var_args){
var G__13941 = arguments.length;
switch (G__13941) {
case 2:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,val){
var temp__5802__auto__ = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fhnop);
if(cljs.core.truth_(temp__5802__auto__)){
var ret = temp__5802__auto__;
return cljs.core.deref(ret);
} else {
return true;
}
}));

(cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,val,fn1){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4(port,val,fn1,true);
}));

(cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (port,val,fn1,on_caller_QMARK_){
var temp__5802__auto__ = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(fn1));
if(cljs.core.truth_(temp__5802__auto__)){
var retb = temp__5802__auto__;
var ret = cljs.core.deref(retb);
if(cljs.core.truth_(on_caller_QMARK_)){
(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(ret) : fn1.call(null, ret));
} else {
cljs.core.async.impl.dispatch.run((function (){
return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(ret) : fn1.call(null, ret));
}));
}

return ret;
} else {
return true;
}
}));

(cljs.core.async.put_BANG_.cljs$lang$maxFixedArity = 4);

cljs.core.async.close_BANG_ = (function cljs$core$async$close_BANG_(port){
return cljs.core.async.impl.protocols.close_BANG_(port);
});
cljs.core.async.random_array = (function cljs$core$async$random_array(n){
var a = (new Array(n));
var n__5593__auto___17285 = n;
var x_17286 = (0);
while(true){
if((x_17286 < n__5593__auto___17285)){
(a[x_17286] = x_17286);

var G__17287 = (x_17286 + (1));
x_17286 = G__17287;
continue;
} else {
}
break;
}

cljs.core.async.goog$module$goog$array.shuffle(a);

return a;
});

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async13974 = (function (flag,meta13975){
this.flag = flag;
this.meta13975 = meta13975;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async13974.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_13976,meta13975__$1){
var self__ = this;
var _13976__$1 = this;
return (new cljs.core.async.t_cljs$core$async13974(self__.flag,meta13975__$1));
}));

(cljs.core.async.t_cljs$core$async13974.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_13976){
var self__ = this;
var _13976__$1 = this;
return self__.meta13975;
}));

(cljs.core.async.t_cljs$core$async13974.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async13974.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref(self__.flag);
}));

(cljs.core.async.t_cljs$core$async13974.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async13974.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.flag,null);

return true;
}));

(cljs.core.async.t_cljs$core$async13974.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta13975","meta13975",-1413576626,null)], null);
}));

(cljs.core.async.t_cljs$core$async13974.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async13974.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async13974");

(cljs.core.async.t_cljs$core$async13974.cljs$lang$ctorPrWriter = (function (this__5287__auto__,writer__5288__auto__,opt__5289__auto__){
return cljs.core._write(writer__5288__auto__,"cljs.core.async/t_cljs$core$async13974");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async13974.
 */
cljs.core.async.__GT_t_cljs$core$async13974 = (function cljs$core$async$__GT_t_cljs$core$async13974(flag,meta13975){
return (new cljs.core.async.t_cljs$core$async13974(flag,meta13975));
});


cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(true);
return (new cljs.core.async.t_cljs$core$async13974(flag,cljs.core.PersistentArrayMap.EMPTY));
});

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async13992 = (function (flag,cb,meta13993){
this.flag = flag;
this.cb = cb;
this.meta13993 = meta13993;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async13992.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_13994,meta13993__$1){
var self__ = this;
var _13994__$1 = this;
return (new cljs.core.async.t_cljs$core$async13992(self__.flag,self__.cb,meta13993__$1));
}));

(cljs.core.async.t_cljs$core$async13992.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_13994){
var self__ = this;
var _13994__$1 = this;
return self__.meta13993;
}));

(cljs.core.async.t_cljs$core$async13992.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async13992.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.flag);
}));

(cljs.core.async.t_cljs$core$async13992.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async13992.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit(self__.flag);

return self__.cb;
}));

(cljs.core.async.t_cljs$core$async13992.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta13993","meta13993",773099709,null)], null);
}));

(cljs.core.async.t_cljs$core$async13992.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async13992.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async13992");

(cljs.core.async.t_cljs$core$async13992.cljs$lang$ctorPrWriter = (function (this__5287__auto__,writer__5288__auto__,opt__5289__auto__){
return cljs.core._write(writer__5288__auto__,"cljs.core.async/t_cljs$core$async13992");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async13992.
 */
cljs.core.async.__GT_t_cljs$core$async13992 = (function cljs$core$async$__GT_t_cljs$core$async13992(flag,cb,meta13993){
return (new cljs.core.async.t_cljs$core$async13992(flag,cb,meta13993));
});


cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
return (new cljs.core.async.t_cljs$core$async13992(flag,cb,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * returns derefable [val port] if immediate, nil if enqueued
 */
cljs.core.async.do_alts = (function cljs$core$async$do_alts(fret,ports,opts){
if((cljs.core.count(ports) > (0))){
} else {
throw (new Error(["Assert failed: ","alts must have at least one channel operation","\n","(pos? (count ports))"].join('')));
}

var flag = cljs.core.async.alt_flag();
var n = cljs.core.count(ports);
var idxs = cljs.core.async.random_array(n);
var priority = new cljs.core.Keyword(null,"priority","priority",1431093715).cljs$core$IFn$_invoke$arity$1(opts);
var ret = (function (){var i = (0);
while(true){
if((i < n)){
var idx = (cljs.core.truth_(priority)?i:(idxs[i]));
var port = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ports,idx);
var wport = ((cljs.core.vector_QMARK_(port))?(port.cljs$core$IFn$_invoke$arity$1 ? port.cljs$core$IFn$_invoke$arity$1((0)) : port.call(null, (0))):null);
var vbox = (cljs.core.truth_(wport)?(function (){var val = (port.cljs$core$IFn$_invoke$arity$1 ? port.cljs$core$IFn$_invoke$arity$1((1)) : port.call(null, (1)));
return cljs.core.async.impl.protocols.put_BANG_(wport,val,cljs.core.async.alt_handler(flag,((function (i,val,idx,port,wport,flag,n,idxs,priority){
return (function (p1__14044_SHARP_){
var G__14076 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__14044_SHARP_,wport], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__14076) : fret.call(null, G__14076));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.alt_handler(flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__14045_SHARP_){
var G__14078 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__14045_SHARP_,port], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__14078) : fret.call(null, G__14078));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref(vbox),(function (){var or__5002__auto__ = wport;
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return port;
}
})()], null));
} else {
var G__17304 = (i + (1));
i = G__17304;
continue;
}
} else {
return null;
}
break;
}
})();
var or__5002__auto__ = ret;
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
if(cljs.core.contains_QMARK_(opts,new cljs.core.Keyword(null,"default","default",-1987822328))){
var temp__5804__auto__ = (function (){var and__5000__auto__ = flag.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1(null, );
if(cljs.core.truth_(and__5000__auto__)){
return flag.cljs$core$async$impl$protocols$Handler$commit$arity$1(null, );
} else {
return and__5000__auto__;
}
})();
if(cljs.core.truth_(temp__5804__auto__)){
var got = temp__5804__auto__;
return cljs.core.async.impl.channels.box(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"default","default",-1987822328).cljs$core$IFn$_invoke$arity$1(opts),new cljs.core.Keyword(null,"default","default",-1987822328)], null));
} else {
return null;
}
} else {
return null;
}
}
});
/**
 * Completes at most one of several channel operations. Must be called
 * inside a (go ...) block. ports is a vector of channel endpoints,
 * which can be either a channel to take from or a vector of
 *   [channel-to-put-to val-to-put], in any combination. Takes will be
 *   made as if by <!, and puts will be made as if by >!. Unless
 *   the :priority option is true, if more than one port operation is
 *   ready a non-deterministic choice will be made. If no operation is
 *   ready and a :default value is supplied, [default-val :default] will
 *   be returned, otherwise alts! will park until the first operation to
 *   become ready completes. Returns [val port] of the completed
 *   operation, where val is the value taken for takes, and a
 *   boolean (true unless already closed, as per put!) for puts.
 * 
 *   opts are passed as :key val ... Supported options:
 * 
 *   :default val - the value to use if none of the operations are immediately ready
 *   :priority true - (default nil) when true, the operations will be tried in order.
 * 
 *   Note: there is no guarantee that the port exps or val exprs will be
 *   used, nor in what order should they be, so they should not be
 *   depended upon for side effects.
 */
cljs.core.async.alts_BANG_ = (function cljs$core$async$alts_BANG_(var_args){
var args__5732__auto__ = [];
var len__5726__auto___17305 = arguments.length;
var i__5727__auto___17306 = (0);
while(true){
if((i__5727__auto___17306 < len__5726__auto___17305)){
args__5732__auto__.push((arguments[i__5727__auto___17306]));

var G__17307 = (i__5727__auto___17306 + (1));
i__5727__auto___17306 = G__17307;
continue;
} else {
}
break;
}

var argseq__5733__auto__ = ((((1) < args__5732__auto__.length))?(new cljs.core.IndexedSeq(args__5732__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5733__auto__);
});

(cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__14107){
var map__14109 = p__14107;
var map__14109__$1 = cljs.core.__destructure_map(map__14109);
var opts = map__14109__$1;
throw (new Error("alts! used not in (go ...) block"));
}));

(cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq14088){
var G__14089 = cljs.core.first(seq14088);
var seq14088__$1 = cljs.core.next(seq14088);
var self__5711__auto__ = this;
return self__5711__auto__.cljs$core$IFn$_invoke$arity$variadic(G__14089,seq14088__$1);
}));

/**
 * Puts a val into port if it's possible to do so immediately.
 *   nil values are not allowed. Never blocks. Returns true if offer succeeds.
 */
cljs.core.async.offer_BANG_ = (function cljs$core$async$offer_BANG_(port,val){
var ret = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref(ret);
} else {
return null;
}
});
/**
 * Takes a val from port if it's possible to do so immediately.
 *   Never blocks. Returns value if successful, nil otherwise.
 */
cljs.core.async.poll_BANG_ = (function cljs$core$async$poll_BANG_(port){
var ret = cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref(ret);
} else {
return null;
}
});
/**
 * Takes elements from the from channel and supplies them to the to
 * channel. By default, the to channel will be closed when the from
 * channel closes, but can be determined by the close?  parameter. Will
 * stop consuming the from channel if the to channel closes
 */
cljs.core.async.pipe = (function cljs$core$async$pipe(var_args){
var G__14119 = arguments.length;
switch (G__14119) {
case 2:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2 = (function (from,to){
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3(from,to,true);
}));

(cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3 = (function (from,to,close_QMARK_){
var c__13768__auto___17312 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__13770__auto__ = (function (){var switch__13478__auto__ = (function (state_14178){
var state_val_14183 = (state_14178[(1)]);
if((state_val_14183 === (7))){
var inst_14167 = (state_14178[(2)]);
var state_14178__$1 = state_14178;
var statearr_14189_17313 = state_14178__$1;
(statearr_14189_17313[(2)] = inst_14167);

(statearr_14189_17313[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14183 === (1))){
var state_14178__$1 = state_14178;
var statearr_14192_17314 = state_14178__$1;
(statearr_14192_17314[(2)] = null);

(statearr_14192_17314[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14183 === (4))){
var inst_14142 = (state_14178[(7)]);
var inst_14142__$1 = (state_14178[(2)]);
var inst_14145 = (inst_14142__$1 == null);
var state_14178__$1 = (function (){var statearr_14193 = state_14178;
(statearr_14193[(7)] = inst_14142__$1);

return statearr_14193;
})();
if(cljs.core.truth_(inst_14145)){
var statearr_14194_17315 = state_14178__$1;
(statearr_14194_17315[(1)] = (5));

} else {
var statearr_14195_17316 = state_14178__$1;
(statearr_14195_17316[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14183 === (13))){
var state_14178__$1 = state_14178;
var statearr_14199_17317 = state_14178__$1;
(statearr_14199_17317[(2)] = null);

(statearr_14199_17317[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14183 === (6))){
var inst_14142 = (state_14178[(7)]);
var state_14178__$1 = state_14178;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_14178__$1,(11),to,inst_14142);
} else {
if((state_val_14183 === (3))){
var inst_14171 = (state_14178[(2)]);
var state_14178__$1 = state_14178;
return cljs.core.async.impl.ioc_helpers.return_chan(state_14178__$1,inst_14171);
} else {
if((state_val_14183 === (12))){
var state_14178__$1 = state_14178;
var statearr_14200_17318 = state_14178__$1;
(statearr_14200_17318[(2)] = null);

(statearr_14200_17318[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14183 === (2))){
var state_14178__$1 = state_14178;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_14178__$1,(4),from);
} else {
if((state_val_14183 === (11))){
var inst_14160 = (state_14178[(2)]);
var state_14178__$1 = state_14178;
if(cljs.core.truth_(inst_14160)){
var statearr_14203_17321 = state_14178__$1;
(statearr_14203_17321[(1)] = (12));

} else {
var statearr_14205_17322 = state_14178__$1;
(statearr_14205_17322[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14183 === (9))){
var state_14178__$1 = state_14178;
var statearr_14208_17329 = state_14178__$1;
(statearr_14208_17329[(2)] = null);

(statearr_14208_17329[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14183 === (5))){
var state_14178__$1 = state_14178;
if(cljs.core.truth_(close_QMARK_)){
var statearr_14210_17330 = state_14178__$1;
(statearr_14210_17330[(1)] = (8));

} else {
var statearr_14211_17331 = state_14178__$1;
(statearr_14211_17331[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14183 === (14))){
var inst_14165 = (state_14178[(2)]);
var state_14178__$1 = state_14178;
var statearr_14214_17332 = state_14178__$1;
(statearr_14214_17332[(2)] = inst_14165);

(statearr_14214_17332[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14183 === (10))){
var inst_14157 = (state_14178[(2)]);
var state_14178__$1 = state_14178;
var statearr_14215_17333 = state_14178__$1;
(statearr_14215_17333[(2)] = inst_14157);

(statearr_14215_17333[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14183 === (8))){
var inst_14153 = cljs.core.async.close_BANG_(to);
var state_14178__$1 = state_14178;
var statearr_14216_17334 = state_14178__$1;
(statearr_14216_17334[(2)] = inst_14153);

(statearr_14216_17334[(1)] = (10));


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
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__13479__auto__ = null;
var cljs$core$async$state_machine__13479__auto____0 = (function (){
var statearr_14217 = [null,null,null,null,null,null,null,null];
(statearr_14217[(0)] = cljs$core$async$state_machine__13479__auto__);

(statearr_14217[(1)] = (1));

return statearr_14217;
});
var cljs$core$async$state_machine__13479__auto____1 = (function (state_14178){
while(true){
var ret_value__13480__auto__ = (function (){try{while(true){
var result__13481__auto__ = switch__13478__auto__(state_14178);
if(cljs.core.keyword_identical_QMARK_(result__13481__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__13481__auto__;
}
break;
}
}catch (e14219){var ex__13482__auto__ = e14219;
var statearr_14220_17335 = state_14178;
(statearr_14220_17335[(2)] = ex__13482__auto__);


if(cljs.core.seq((state_14178[(4)]))){
var statearr_14227_17336 = state_14178;
(statearr_14227_17336[(1)] = cljs.core.first((state_14178[(4)])));

} else {
throw ex__13482__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__13480__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__17337 = state_14178;
state_14178 = G__17337;
continue;
} else {
return ret_value__13480__auto__;
}
break;
}
});
cljs$core$async$state_machine__13479__auto__ = function(state_14178){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__13479__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__13479__auto____1.call(this,state_14178);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__13479__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__13479__auto____0;
cljs$core$async$state_machine__13479__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__13479__auto____1;
return cljs$core$async$state_machine__13479__auto__;
})()
})();
var state__13771__auto__ = (function (){var statearr_14230 = f__13770__auto__();
(statearr_14230[(6)] = c__13768__auto___17312);

return statearr_14230;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__13771__auto__);
}));


return to;
}));

(cljs.core.async.pipe.cljs$lang$maxFixedArity = 3);

cljs.core.async.pipeline_STAR_ = (function cljs$core$async$pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,type){
if((n > (0))){
} else {
throw (new Error("Assert failed: (pos? n)"));
}

var jobs = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(n);
var results = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(n);
var process__$1 = (function (p__14236){
var vec__14238 = p__14236;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14238,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14238,(1),null);
var job = vec__14238;
if((job == null)){
cljs.core.async.close_BANG_(results);

return null;
} else {
var res = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((1),xf,ex_handler);
var c__13768__auto___17350 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__13770__auto__ = (function (){var switch__13478__auto__ = (function (state_14246){
var state_val_14247 = (state_14246[(1)]);
if((state_val_14247 === (1))){
var state_14246__$1 = state_14246;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_14246__$1,(2),res,v);
} else {
if((state_val_14247 === (2))){
var inst_14243 = (state_14246[(2)]);
var inst_14244 = cljs.core.async.close_BANG_(res);
var state_14246__$1 = (function (){var statearr_14255 = state_14246;
(statearr_14255[(7)] = inst_14243);

return statearr_14255;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_14246__$1,inst_14244);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__13479__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__13479__auto____0 = (function (){
var statearr_14259 = [null,null,null,null,null,null,null,null];
(statearr_14259[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__13479__auto__);

(statearr_14259[(1)] = (1));

return statearr_14259;
});
var cljs$core$async$pipeline_STAR__$_state_machine__13479__auto____1 = (function (state_14246){
while(true){
var ret_value__13480__auto__ = (function (){try{while(true){
var result__13481__auto__ = switch__13478__auto__(state_14246);
if(cljs.core.keyword_identical_QMARK_(result__13481__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__13481__auto__;
}
break;
}
}catch (e14260){var ex__13482__auto__ = e14260;
var statearr_14261_17353 = state_14246;
(statearr_14261_17353[(2)] = ex__13482__auto__);


if(cljs.core.seq((state_14246[(4)]))){
var statearr_14262_17354 = state_14246;
(statearr_14262_17354[(1)] = cljs.core.first((state_14246[(4)])));

} else {
throw ex__13482__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__13480__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__17355 = state_14246;
state_14246 = G__17355;
continue;
} else {
return ret_value__13480__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__13479__auto__ = function(state_14246){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__13479__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__13479__auto____1.call(this,state_14246);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__13479__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__13479__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__13479__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__13479__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__13479__auto__;
})()
})();
var state__13771__auto__ = (function (){var statearr_14263 = f__13770__auto__();
(statearr_14263[(6)] = c__13768__auto___17350);

return statearr_14263;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__13771__auto__);
}));


cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(p,res);

return true;
}
});
var async = (function (p__14268){
var vec__14269 = p__14268;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14269,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14269,(1),null);
var job = vec__14269;
if((job == null)){
cljs.core.async.close_BANG_(results);

return null;
} else {
var res = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
(xf.cljs$core$IFn$_invoke$arity$2 ? xf.cljs$core$IFn$_invoke$arity$2(v,res) : xf.call(null, v,res));

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(p,res);

return true;
}
});
var n__5593__auto___17360 = n;
var __17361 = (0);
while(true){
if((__17361 < n__5593__auto___17360)){
var G__14275_17362 = type;
var G__14275_17363__$1 = (((G__14275_17362 instanceof cljs.core.Keyword))?G__14275_17362.fqn:null);
switch (G__14275_17363__$1) {
case "compute":
var c__13768__auto___17365 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__17361,c__13768__auto___17365,G__14275_17362,G__14275_17363__$1,n__5593__auto___17360,jobs,results,process__$1,async){
return (function (){
var f__13770__auto__ = (function (){var switch__13478__auto__ = ((function (__17361,c__13768__auto___17365,G__14275_17362,G__14275_17363__$1,n__5593__auto___17360,jobs,results,process__$1,async){
return (function (state_14289){
var state_val_14290 = (state_14289[(1)]);
if((state_val_14290 === (1))){
var state_14289__$1 = state_14289;
var statearr_14292_17366 = state_14289__$1;
(statearr_14292_17366[(2)] = null);

(statearr_14292_17366[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14290 === (2))){
var state_14289__$1 = state_14289;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_14289__$1,(4),jobs);
} else {
if((state_val_14290 === (3))){
var inst_14287 = (state_14289[(2)]);
var state_14289__$1 = state_14289;
return cljs.core.async.impl.ioc_helpers.return_chan(state_14289__$1,inst_14287);
} else {
if((state_val_14290 === (4))){
var inst_14278 = (state_14289[(2)]);
var inst_14279 = process__$1(inst_14278);
var state_14289__$1 = state_14289;
if(cljs.core.truth_(inst_14279)){
var statearr_14296_17368 = state_14289__$1;
(statearr_14296_17368[(1)] = (5));

} else {
var statearr_14297_17369 = state_14289__$1;
(statearr_14297_17369[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14290 === (5))){
var state_14289__$1 = state_14289;
var statearr_14298_17370 = state_14289__$1;
(statearr_14298_17370[(2)] = null);

(statearr_14298_17370[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14290 === (6))){
var state_14289__$1 = state_14289;
var statearr_14299_17371 = state_14289__$1;
(statearr_14299_17371[(2)] = null);

(statearr_14299_17371[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14290 === (7))){
var inst_14285 = (state_14289[(2)]);
var state_14289__$1 = state_14289;
var statearr_14309_17372 = state_14289__$1;
(statearr_14309_17372[(2)] = inst_14285);

(statearr_14309_17372[(1)] = (3));


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
});})(__17361,c__13768__auto___17365,G__14275_17362,G__14275_17363__$1,n__5593__auto___17360,jobs,results,process__$1,async))
;
return ((function (__17361,switch__13478__auto__,c__13768__auto___17365,G__14275_17362,G__14275_17363__$1,n__5593__auto___17360,jobs,results,process__$1,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__13479__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__13479__auto____0 = (function (){
var statearr_14315 = [null,null,null,null,null,null,null];
(statearr_14315[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__13479__auto__);

(statearr_14315[(1)] = (1));

return statearr_14315;
});
var cljs$core$async$pipeline_STAR__$_state_machine__13479__auto____1 = (function (state_14289){
while(true){
var ret_value__13480__auto__ = (function (){try{while(true){
var result__13481__auto__ = switch__13478__auto__(state_14289);
if(cljs.core.keyword_identical_QMARK_(result__13481__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__13481__auto__;
}
break;
}
}catch (e14324){var ex__13482__auto__ = e14324;
var statearr_14325_17373 = state_14289;
(statearr_14325_17373[(2)] = ex__13482__auto__);


if(cljs.core.seq((state_14289[(4)]))){
var statearr_14326_17374 = state_14289;
(statearr_14326_17374[(1)] = cljs.core.first((state_14289[(4)])));

} else {
throw ex__13482__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__13480__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__17375 = state_14289;
state_14289 = G__17375;
continue;
} else {
return ret_value__13480__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__13479__auto__ = function(state_14289){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__13479__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__13479__auto____1.call(this,state_14289);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__13479__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__13479__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__13479__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__13479__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__13479__auto__;
})()
;})(__17361,switch__13478__auto__,c__13768__auto___17365,G__14275_17362,G__14275_17363__$1,n__5593__auto___17360,jobs,results,process__$1,async))
})();
var state__13771__auto__ = (function (){var statearr_14327 = f__13770__auto__();
(statearr_14327[(6)] = c__13768__auto___17365);

return statearr_14327;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__13771__auto__);
});})(__17361,c__13768__auto___17365,G__14275_17362,G__14275_17363__$1,n__5593__auto___17360,jobs,results,process__$1,async))
);


break;
case "async":
var c__13768__auto___17377 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__17361,c__13768__auto___17377,G__14275_17362,G__14275_17363__$1,n__5593__auto___17360,jobs,results,process__$1,async){
return (function (){
var f__13770__auto__ = (function (){var switch__13478__auto__ = ((function (__17361,c__13768__auto___17377,G__14275_17362,G__14275_17363__$1,n__5593__auto___17360,jobs,results,process__$1,async){
return (function (state_14342){
var state_val_14344 = (state_14342[(1)]);
if((state_val_14344 === (1))){
var state_14342__$1 = state_14342;
var statearr_14346_17379 = state_14342__$1;
(statearr_14346_17379[(2)] = null);

(statearr_14346_17379[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14344 === (2))){
var state_14342__$1 = state_14342;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_14342__$1,(4),jobs);
} else {
if((state_val_14344 === (3))){
var inst_14339 = (state_14342[(2)]);
var state_14342__$1 = state_14342;
return cljs.core.async.impl.ioc_helpers.return_chan(state_14342__$1,inst_14339);
} else {
if((state_val_14344 === (4))){
var inst_14330 = (state_14342[(2)]);
var inst_14331 = async(inst_14330);
var state_14342__$1 = state_14342;
if(cljs.core.truth_(inst_14331)){
var statearr_14349_17380 = state_14342__$1;
(statearr_14349_17380[(1)] = (5));

} else {
var statearr_14350_17381 = state_14342__$1;
(statearr_14350_17381[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14344 === (5))){
var state_14342__$1 = state_14342;
var statearr_14351_17382 = state_14342__$1;
(statearr_14351_17382[(2)] = null);

(statearr_14351_17382[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14344 === (6))){
var state_14342__$1 = state_14342;
var statearr_14361_17383 = state_14342__$1;
(statearr_14361_17383[(2)] = null);

(statearr_14361_17383[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14344 === (7))){
var inst_14337 = (state_14342[(2)]);
var state_14342__$1 = state_14342;
var statearr_14362_17384 = state_14342__$1;
(statearr_14362_17384[(2)] = inst_14337);

(statearr_14362_17384[(1)] = (3));


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
});})(__17361,c__13768__auto___17377,G__14275_17362,G__14275_17363__$1,n__5593__auto___17360,jobs,results,process__$1,async))
;
return ((function (__17361,switch__13478__auto__,c__13768__auto___17377,G__14275_17362,G__14275_17363__$1,n__5593__auto___17360,jobs,results,process__$1,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__13479__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__13479__auto____0 = (function (){
var statearr_14364 = [null,null,null,null,null,null,null];
(statearr_14364[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__13479__auto__);

(statearr_14364[(1)] = (1));

return statearr_14364;
});
var cljs$core$async$pipeline_STAR__$_state_machine__13479__auto____1 = (function (state_14342){
while(true){
var ret_value__13480__auto__ = (function (){try{while(true){
var result__13481__auto__ = switch__13478__auto__(state_14342);
if(cljs.core.keyword_identical_QMARK_(result__13481__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__13481__auto__;
}
break;
}
}catch (e14366){var ex__13482__auto__ = e14366;
var statearr_14367_17390 = state_14342;
(statearr_14367_17390[(2)] = ex__13482__auto__);


if(cljs.core.seq((state_14342[(4)]))){
var statearr_14378_17391 = state_14342;
(statearr_14378_17391[(1)] = cljs.core.first((state_14342[(4)])));

} else {
throw ex__13482__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__13480__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__17393 = state_14342;
state_14342 = G__17393;
continue;
} else {
return ret_value__13480__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__13479__auto__ = function(state_14342){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__13479__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__13479__auto____1.call(this,state_14342);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__13479__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__13479__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__13479__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__13479__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__13479__auto__;
})()
;})(__17361,switch__13478__auto__,c__13768__auto___17377,G__14275_17362,G__14275_17363__$1,n__5593__auto___17360,jobs,results,process__$1,async))
})();
var state__13771__auto__ = (function (){var statearr_14385 = f__13770__auto__();
(statearr_14385[(6)] = c__13768__auto___17377);

return statearr_14385;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__13771__auto__);
});})(__17361,c__13768__auto___17377,G__14275_17362,G__14275_17363__$1,n__5593__auto___17360,jobs,results,process__$1,async))
);


break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__14275_17363__$1)].join('')));

}

var G__17395 = (__17361 + (1));
__17361 = G__17395;
continue;
} else {
}
break;
}

var c__13768__auto___17396 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__13770__auto__ = (function (){var switch__13478__auto__ = (function (state_14420){
var state_val_14421 = (state_14420[(1)]);
if((state_val_14421 === (7))){
var inst_14416 = (state_14420[(2)]);
var state_14420__$1 = state_14420;
var statearr_14429_17397 = state_14420__$1;
(statearr_14429_17397[(2)] = inst_14416);

(statearr_14429_17397[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14421 === (1))){
var state_14420__$1 = state_14420;
var statearr_14432_17398 = state_14420__$1;
(statearr_14432_17398[(2)] = null);

(statearr_14432_17398[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14421 === (4))){
var inst_14396 = (state_14420[(7)]);
var inst_14396__$1 = (state_14420[(2)]);
var inst_14397 = (inst_14396__$1 == null);
var state_14420__$1 = (function (){var statearr_14437 = state_14420;
(statearr_14437[(7)] = inst_14396__$1);

return statearr_14437;
})();
if(cljs.core.truth_(inst_14397)){
var statearr_14438_17401 = state_14420__$1;
(statearr_14438_17401[(1)] = (5));

} else {
var statearr_14439_17403 = state_14420__$1;
(statearr_14439_17403[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14421 === (6))){
var inst_14401 = (state_14420[(8)]);
var inst_14396 = (state_14420[(7)]);
var inst_14401__$1 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var inst_14405 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_14407 = [inst_14396,inst_14401__$1];
var inst_14408 = (new cljs.core.PersistentVector(null,2,(5),inst_14405,inst_14407,null));
var state_14420__$1 = (function (){var statearr_14444 = state_14420;
(statearr_14444[(8)] = inst_14401__$1);

return statearr_14444;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_14420__$1,(8),jobs,inst_14408);
} else {
if((state_val_14421 === (3))){
var inst_14418 = (state_14420[(2)]);
var state_14420__$1 = state_14420;
return cljs.core.async.impl.ioc_helpers.return_chan(state_14420__$1,inst_14418);
} else {
if((state_val_14421 === (2))){
var state_14420__$1 = state_14420;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_14420__$1,(4),from);
} else {
if((state_val_14421 === (9))){
var inst_14413 = (state_14420[(2)]);
var state_14420__$1 = (function (){var statearr_14449 = state_14420;
(statearr_14449[(9)] = inst_14413);

return statearr_14449;
})();
var statearr_14450_17407 = state_14420__$1;
(statearr_14450_17407[(2)] = null);

(statearr_14450_17407[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14421 === (5))){
var inst_14399 = cljs.core.async.close_BANG_(jobs);
var state_14420__$1 = state_14420;
var statearr_14452_17408 = state_14420__$1;
(statearr_14452_17408[(2)] = inst_14399);

(statearr_14452_17408[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14421 === (8))){
var inst_14401 = (state_14420[(8)]);
var inst_14411 = (state_14420[(2)]);
var state_14420__$1 = (function (){var statearr_14453 = state_14420;
(statearr_14453[(10)] = inst_14411);

return statearr_14453;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_14420__$1,(9),results,inst_14401);
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
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__13479__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__13479__auto____0 = (function (){
var statearr_14457 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_14457[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__13479__auto__);

(statearr_14457[(1)] = (1));

return statearr_14457;
});
var cljs$core$async$pipeline_STAR__$_state_machine__13479__auto____1 = (function (state_14420){
while(true){
var ret_value__13480__auto__ = (function (){try{while(true){
var result__13481__auto__ = switch__13478__auto__(state_14420);
if(cljs.core.keyword_identical_QMARK_(result__13481__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__13481__auto__;
}
break;
}
}catch (e14458){var ex__13482__auto__ = e14458;
var statearr_14460_17418 = state_14420;
(statearr_14460_17418[(2)] = ex__13482__auto__);


if(cljs.core.seq((state_14420[(4)]))){
var statearr_14461_17419 = state_14420;
(statearr_14461_17419[(1)] = cljs.core.first((state_14420[(4)])));

} else {
throw ex__13482__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__13480__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__17420 = state_14420;
state_14420 = G__17420;
continue;
} else {
return ret_value__13480__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__13479__auto__ = function(state_14420){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__13479__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__13479__auto____1.call(this,state_14420);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__13479__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__13479__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__13479__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__13479__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__13479__auto__;
})()
})();
var state__13771__auto__ = (function (){var statearr_14462 = f__13770__auto__();
(statearr_14462[(6)] = c__13768__auto___17396);

return statearr_14462;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__13771__auto__);
}));


var c__13768__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__13770__auto__ = (function (){var switch__13478__auto__ = (function (state_14504){
var state_val_14505 = (state_14504[(1)]);
if((state_val_14505 === (7))){
var inst_14498 = (state_14504[(2)]);
var state_14504__$1 = state_14504;
var statearr_14506_17421 = state_14504__$1;
(statearr_14506_17421[(2)] = inst_14498);

(statearr_14506_17421[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14505 === (20))){
var state_14504__$1 = state_14504;
var statearr_14507_17422 = state_14504__$1;
(statearr_14507_17422[(2)] = null);

(statearr_14507_17422[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14505 === (1))){
var state_14504__$1 = state_14504;
var statearr_14509_17425 = state_14504__$1;
(statearr_14509_17425[(2)] = null);

(statearr_14509_17425[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14505 === (4))){
var inst_14465 = (state_14504[(7)]);
var inst_14465__$1 = (state_14504[(2)]);
var inst_14466 = (inst_14465__$1 == null);
var state_14504__$1 = (function (){var statearr_14510 = state_14504;
(statearr_14510[(7)] = inst_14465__$1);

return statearr_14510;
})();
if(cljs.core.truth_(inst_14466)){
var statearr_14513_17427 = state_14504__$1;
(statearr_14513_17427[(1)] = (5));

} else {
var statearr_14517_17428 = state_14504__$1;
(statearr_14517_17428[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14505 === (15))){
var inst_14478 = (state_14504[(8)]);
var state_14504__$1 = state_14504;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_14504__$1,(18),to,inst_14478);
} else {
if((state_val_14505 === (21))){
var inst_14493 = (state_14504[(2)]);
var state_14504__$1 = state_14504;
var statearr_14520_17429 = state_14504__$1;
(statearr_14520_17429[(2)] = inst_14493);

(statearr_14520_17429[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14505 === (13))){
var inst_14495 = (state_14504[(2)]);
var state_14504__$1 = (function (){var statearr_14521 = state_14504;
(statearr_14521[(9)] = inst_14495);

return statearr_14521;
})();
var statearr_14522_17430 = state_14504__$1;
(statearr_14522_17430[(2)] = null);

(statearr_14522_17430[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14505 === (6))){
var inst_14465 = (state_14504[(7)]);
var state_14504__$1 = state_14504;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_14504__$1,(11),inst_14465);
} else {
if((state_val_14505 === (17))){
var inst_14488 = (state_14504[(2)]);
var state_14504__$1 = state_14504;
if(cljs.core.truth_(inst_14488)){
var statearr_14524_17431 = state_14504__$1;
(statearr_14524_17431[(1)] = (19));

} else {
var statearr_14525_17432 = state_14504__$1;
(statearr_14525_17432[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14505 === (3))){
var inst_14500 = (state_14504[(2)]);
var state_14504__$1 = state_14504;
return cljs.core.async.impl.ioc_helpers.return_chan(state_14504__$1,inst_14500);
} else {
if((state_val_14505 === (12))){
var inst_14475 = (state_14504[(10)]);
var state_14504__$1 = state_14504;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_14504__$1,(14),inst_14475);
} else {
if((state_val_14505 === (2))){
var state_14504__$1 = state_14504;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_14504__$1,(4),results);
} else {
if((state_val_14505 === (19))){
var state_14504__$1 = state_14504;
var statearr_14526_17433 = state_14504__$1;
(statearr_14526_17433[(2)] = null);

(statearr_14526_17433[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14505 === (11))){
var inst_14475 = (state_14504[(2)]);
var state_14504__$1 = (function (){var statearr_14528 = state_14504;
(statearr_14528[(10)] = inst_14475);

return statearr_14528;
})();
var statearr_14531_17434 = state_14504__$1;
(statearr_14531_17434[(2)] = null);

(statearr_14531_17434[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14505 === (9))){
var state_14504__$1 = state_14504;
var statearr_14534_17435 = state_14504__$1;
(statearr_14534_17435[(2)] = null);

(statearr_14534_17435[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14505 === (5))){
var state_14504__$1 = state_14504;
if(cljs.core.truth_(close_QMARK_)){
var statearr_14538_17436 = state_14504__$1;
(statearr_14538_17436[(1)] = (8));

} else {
var statearr_14540_17437 = state_14504__$1;
(statearr_14540_17437[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14505 === (14))){
var inst_14478 = (state_14504[(8)]);
var inst_14480 = (state_14504[(11)]);
var inst_14478__$1 = (state_14504[(2)]);
var inst_14479 = (inst_14478__$1 == null);
var inst_14480__$1 = cljs.core.not(inst_14479);
var state_14504__$1 = (function (){var statearr_14543 = state_14504;
(statearr_14543[(8)] = inst_14478__$1);

(statearr_14543[(11)] = inst_14480__$1);

return statearr_14543;
})();
if(inst_14480__$1){
var statearr_14544_17438 = state_14504__$1;
(statearr_14544_17438[(1)] = (15));

} else {
var statearr_14546_17439 = state_14504__$1;
(statearr_14546_17439[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14505 === (16))){
var inst_14480 = (state_14504[(11)]);
var state_14504__$1 = state_14504;
var statearr_14550_17440 = state_14504__$1;
(statearr_14550_17440[(2)] = inst_14480);

(statearr_14550_17440[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14505 === (10))){
var inst_14472 = (state_14504[(2)]);
var state_14504__$1 = state_14504;
var statearr_14552_17441 = state_14504__$1;
(statearr_14552_17441[(2)] = inst_14472);

(statearr_14552_17441[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14505 === (18))){
var inst_14484 = (state_14504[(2)]);
var state_14504__$1 = state_14504;
var statearr_14553_17454 = state_14504__$1;
(statearr_14553_17454[(2)] = inst_14484);

(statearr_14553_17454[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14505 === (8))){
var inst_14469 = cljs.core.async.close_BANG_(to);
var state_14504__$1 = state_14504;
var statearr_14554_17455 = state_14504__$1;
(statearr_14554_17455[(2)] = inst_14469);

(statearr_14554_17455[(1)] = (10));


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
}
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__13479__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__13479__auto____0 = (function (){
var statearr_14560 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_14560[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__13479__auto__);

(statearr_14560[(1)] = (1));

return statearr_14560;
});
var cljs$core$async$pipeline_STAR__$_state_machine__13479__auto____1 = (function (state_14504){
while(true){
var ret_value__13480__auto__ = (function (){try{while(true){
var result__13481__auto__ = switch__13478__auto__(state_14504);
if(cljs.core.keyword_identical_QMARK_(result__13481__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__13481__auto__;
}
break;
}
}catch (e14567){var ex__13482__auto__ = e14567;
var statearr_14571_17457 = state_14504;
(statearr_14571_17457[(2)] = ex__13482__auto__);


if(cljs.core.seq((state_14504[(4)]))){
var statearr_14572_17458 = state_14504;
(statearr_14572_17458[(1)] = cljs.core.first((state_14504[(4)])));

} else {
throw ex__13482__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__13480__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__17459 = state_14504;
state_14504 = G__17459;
continue;
} else {
return ret_value__13480__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__13479__auto__ = function(state_14504){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__13479__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__13479__auto____1.call(this,state_14504);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__13479__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__13479__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__13479__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__13479__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__13479__auto__;
})()
})();
var state__13771__auto__ = (function (){var statearr_14574 = f__13770__auto__();
(statearr_14574[(6)] = c__13768__auto__);

return statearr_14574;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__13771__auto__);
}));

return c__13768__auto__;
});
/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the async function af, with parallelism n. af
 *   must be a function of two arguments, the first an input value and
 *   the second a channel on which to place the result(s). The
 *   presumption is that af will return immediately, having launched some
 *   asynchronous operation whose completion/callback will put results on
 *   the channel, then close! it. Outputs will be returned in order
 *   relative to the inputs. By default, the to channel will be closed
 *   when the from channel closes, but can be determined by the close?
 *   parameter. Will stop consuming the from channel if the to channel
 *   closes. See also pipeline, pipeline-blocking.
 */
cljs.core.async.pipeline_async = (function cljs$core$async$pipeline_async(var_args){
var G__14590 = arguments.length;
switch (G__14590) {
case 4:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4 = (function (n,to,af,from){
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5(n,to,af,from,true);
}));

(cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5 = (function (n,to,af,from,close_QMARK_){
return cljs.core.async.pipeline_STAR_(n,to,af,from,close_QMARK_,null,new cljs.core.Keyword(null,"async","async",1050769601));
}));

(cljs.core.async.pipeline_async.cljs$lang$maxFixedArity = 5);

/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the transducer xf, with parallelism n. Because
 *   it is parallel, the transducer will be applied independently to each
 *   element, not across elements, and may produce zero or more outputs
 *   per input.  Outputs will be returned in order relative to the
 *   inputs. By default, the to channel will be closed when the from
 *   channel closes, but can be determined by the close?  parameter. Will
 *   stop consuming the from channel if the to channel closes.
 * 
 *   Note this is supplied for API compatibility with the Clojure version.
 *   Values of N > 1 will not result in actual concurrency in a
 *   single-threaded runtime.
 */
cljs.core.async.pipeline = (function cljs$core$async$pipeline(var_args){
var G__14608 = arguments.length;
switch (G__14608) {
case 4:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
case 6:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4 = (function (n,to,xf,from){
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5(n,to,xf,from,true);
}));

(cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5 = (function (n,to,xf,from,close_QMARK_){
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6(n,to,xf,from,close_QMARK_,null);
}));

(cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6 = (function (n,to,xf,from,close_QMARK_,ex_handler){
return cljs.core.async.pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,new cljs.core.Keyword(null,"compute","compute",1555393130));
}));

(cljs.core.async.pipeline.cljs$lang$maxFixedArity = 6);

/**
 * Takes a predicate and a source channel and returns a vector of two
 *   channels, the first of which will contain the values for which the
 *   predicate returned true, the second those for which it returned
 *   false.
 * 
 *   The out channels will be unbuffered by default, or two buf-or-ns can
 *   be supplied. The channels will close after the source channel has
 *   closed.
 */
cljs.core.async.split = (function cljs$core$async$split(var_args){
var G__14617 = arguments.length;
switch (G__14617) {
case 2:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.split.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4(p,ch,null,null);
}));

(cljs.core.async.split.cljs$core$IFn$_invoke$arity$4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(t_buf_or_n);
var fc = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(f_buf_or_n);
var c__13768__auto___17467 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__13770__auto__ = (function (){var switch__13478__auto__ = (function (state_14649){
var state_val_14650 = (state_14649[(1)]);
if((state_val_14650 === (7))){
var inst_14644 = (state_14649[(2)]);
var state_14649__$1 = state_14649;
var statearr_14652_17469 = state_14649__$1;
(statearr_14652_17469[(2)] = inst_14644);

(statearr_14652_17469[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14650 === (1))){
var state_14649__$1 = state_14649;
var statearr_14657_17470 = state_14649__$1;
(statearr_14657_17470[(2)] = null);

(statearr_14657_17470[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14650 === (4))){
var inst_14624 = (state_14649[(7)]);
var inst_14624__$1 = (state_14649[(2)]);
var inst_14626 = (inst_14624__$1 == null);
var state_14649__$1 = (function (){var statearr_14664 = state_14649;
(statearr_14664[(7)] = inst_14624__$1);

return statearr_14664;
})();
if(cljs.core.truth_(inst_14626)){
var statearr_14665_17472 = state_14649__$1;
(statearr_14665_17472[(1)] = (5));

} else {
var statearr_14666_17473 = state_14649__$1;
(statearr_14666_17473[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14650 === (13))){
var state_14649__$1 = state_14649;
var statearr_14668_17474 = state_14649__$1;
(statearr_14668_17474[(2)] = null);

(statearr_14668_17474[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14650 === (6))){
var inst_14624 = (state_14649[(7)]);
var inst_14631 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_14624) : p.call(null, inst_14624));
var state_14649__$1 = state_14649;
if(cljs.core.truth_(inst_14631)){
var statearr_14685_17475 = state_14649__$1;
(statearr_14685_17475[(1)] = (9));

} else {
var statearr_14689_17476 = state_14649__$1;
(statearr_14689_17476[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14650 === (3))){
var inst_14646 = (state_14649[(2)]);
var state_14649__$1 = state_14649;
return cljs.core.async.impl.ioc_helpers.return_chan(state_14649__$1,inst_14646);
} else {
if((state_val_14650 === (12))){
var state_14649__$1 = state_14649;
var statearr_14699_17477 = state_14649__$1;
(statearr_14699_17477[(2)] = null);

(statearr_14699_17477[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14650 === (2))){
var state_14649__$1 = state_14649;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_14649__$1,(4),ch);
} else {
if((state_val_14650 === (11))){
var inst_14624 = (state_14649[(7)]);
var inst_14635 = (state_14649[(2)]);
var state_14649__$1 = state_14649;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_14649__$1,(8),inst_14635,inst_14624);
} else {
if((state_val_14650 === (9))){
var state_14649__$1 = state_14649;
var statearr_14709_17478 = state_14649__$1;
(statearr_14709_17478[(2)] = tc);

(statearr_14709_17478[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14650 === (5))){
var inst_14628 = cljs.core.async.close_BANG_(tc);
var inst_14629 = cljs.core.async.close_BANG_(fc);
var state_14649__$1 = (function (){var statearr_14711 = state_14649;
(statearr_14711[(8)] = inst_14628);

return statearr_14711;
})();
var statearr_14712_17479 = state_14649__$1;
(statearr_14712_17479[(2)] = inst_14629);

(statearr_14712_17479[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14650 === (14))){
var inst_14642 = (state_14649[(2)]);
var state_14649__$1 = state_14649;
var statearr_14713_17480 = state_14649__$1;
(statearr_14713_17480[(2)] = inst_14642);

(statearr_14713_17480[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14650 === (10))){
var state_14649__$1 = state_14649;
var statearr_14715_17481 = state_14649__$1;
(statearr_14715_17481[(2)] = fc);

(statearr_14715_17481[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14650 === (8))){
var inst_14637 = (state_14649[(2)]);
var state_14649__$1 = state_14649;
if(cljs.core.truth_(inst_14637)){
var statearr_14730_17482 = state_14649__$1;
(statearr_14730_17482[(1)] = (12));

} else {
var statearr_14731_17483 = state_14649__$1;
(statearr_14731_17483[(1)] = (13));

}

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
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__13479__auto__ = null;
var cljs$core$async$state_machine__13479__auto____0 = (function (){
var statearr_14733 = [null,null,null,null,null,null,null,null,null];
(statearr_14733[(0)] = cljs$core$async$state_machine__13479__auto__);

(statearr_14733[(1)] = (1));

return statearr_14733;
});
var cljs$core$async$state_machine__13479__auto____1 = (function (state_14649){
while(true){
var ret_value__13480__auto__ = (function (){try{while(true){
var result__13481__auto__ = switch__13478__auto__(state_14649);
if(cljs.core.keyword_identical_QMARK_(result__13481__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__13481__auto__;
}
break;
}
}catch (e14734){var ex__13482__auto__ = e14734;
var statearr_14735_17484 = state_14649;
(statearr_14735_17484[(2)] = ex__13482__auto__);


if(cljs.core.seq((state_14649[(4)]))){
var statearr_14736_17488 = state_14649;
(statearr_14736_17488[(1)] = cljs.core.first((state_14649[(4)])));

} else {
throw ex__13482__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__13480__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__17489 = state_14649;
state_14649 = G__17489;
continue;
} else {
return ret_value__13480__auto__;
}
break;
}
});
cljs$core$async$state_machine__13479__auto__ = function(state_14649){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__13479__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__13479__auto____1.call(this,state_14649);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__13479__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__13479__auto____0;
cljs$core$async$state_machine__13479__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__13479__auto____1;
return cljs$core$async$state_machine__13479__auto__;
})()
})();
var state__13771__auto__ = (function (){var statearr_14737 = f__13770__auto__();
(statearr_14737[(6)] = c__13768__auto___17467);

return statearr_14737;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__13771__auto__);
}));


return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tc,fc], null);
}));

(cljs.core.async.split.cljs$lang$maxFixedArity = 4);

/**
 * f should be a function of 2 arguments. Returns a channel containing
 *   the single result of applying f to init and the first item from the
 *   channel, then applying f to that result and the 2nd item, etc. If
 *   the channel closes without yielding items, returns init and f is not
 *   called. ch must close before reduce produces a result.
 */
cljs.core.async.reduce = (function cljs$core$async$reduce(f,init,ch){
var c__13768__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__13770__auto__ = (function (){var switch__13478__auto__ = (function (state_14782){
var state_val_14783 = (state_14782[(1)]);
if((state_val_14783 === (7))){
var inst_14778 = (state_14782[(2)]);
var state_14782__$1 = state_14782;
var statearr_14786_17508 = state_14782__$1;
(statearr_14786_17508[(2)] = inst_14778);

(statearr_14786_17508[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14783 === (1))){
var inst_14756 = init;
var inst_14757 = inst_14756;
var state_14782__$1 = (function (){var statearr_14787 = state_14782;
(statearr_14787[(7)] = inst_14757);

return statearr_14787;
})();
var statearr_14788_17512 = state_14782__$1;
(statearr_14788_17512[(2)] = null);

(statearr_14788_17512[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14783 === (4))){
var inst_14760 = (state_14782[(8)]);
var inst_14760__$1 = (state_14782[(2)]);
var inst_14762 = (inst_14760__$1 == null);
var state_14782__$1 = (function (){var statearr_14790 = state_14782;
(statearr_14790[(8)] = inst_14760__$1);

return statearr_14790;
})();
if(cljs.core.truth_(inst_14762)){
var statearr_14791_17517 = state_14782__$1;
(statearr_14791_17517[(1)] = (5));

} else {
var statearr_14792_17518 = state_14782__$1;
(statearr_14792_17518[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14783 === (6))){
var inst_14769 = (state_14782[(9)]);
var inst_14760 = (state_14782[(8)]);
var inst_14757 = (state_14782[(7)]);
var inst_14769__$1 = (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(inst_14757,inst_14760) : f.call(null, inst_14757,inst_14760));
var inst_14770 = cljs.core.reduced_QMARK_(inst_14769__$1);
var state_14782__$1 = (function (){var statearr_14793 = state_14782;
(statearr_14793[(9)] = inst_14769__$1);

return statearr_14793;
})();
if(inst_14770){
var statearr_14794_17519 = state_14782__$1;
(statearr_14794_17519[(1)] = (8));

} else {
var statearr_14795_17520 = state_14782__$1;
(statearr_14795_17520[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14783 === (3))){
var inst_14780 = (state_14782[(2)]);
var state_14782__$1 = state_14782;
return cljs.core.async.impl.ioc_helpers.return_chan(state_14782__$1,inst_14780);
} else {
if((state_val_14783 === (2))){
var state_14782__$1 = state_14782;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_14782__$1,(4),ch);
} else {
if((state_val_14783 === (9))){
var inst_14769 = (state_14782[(9)]);
var inst_14757 = inst_14769;
var state_14782__$1 = (function (){var statearr_14796 = state_14782;
(statearr_14796[(7)] = inst_14757);

return statearr_14796;
})();
var statearr_14797_17530 = state_14782__$1;
(statearr_14797_17530[(2)] = null);

(statearr_14797_17530[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14783 === (5))){
var inst_14757 = (state_14782[(7)]);
var state_14782__$1 = state_14782;
var statearr_14798_17531 = state_14782__$1;
(statearr_14798_17531[(2)] = inst_14757);

(statearr_14798_17531[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14783 === (10))){
var inst_14776 = (state_14782[(2)]);
var state_14782__$1 = state_14782;
var statearr_14800_17532 = state_14782__$1;
(statearr_14800_17532[(2)] = inst_14776);

(statearr_14800_17532[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14783 === (8))){
var inst_14769 = (state_14782[(9)]);
var inst_14772 = cljs.core.deref(inst_14769);
var state_14782__$1 = state_14782;
var statearr_14807_17533 = state_14782__$1;
(statearr_14807_17533[(2)] = inst_14772);

(statearr_14807_17533[(1)] = (10));


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
});
return (function() {
var cljs$core$async$reduce_$_state_machine__13479__auto__ = null;
var cljs$core$async$reduce_$_state_machine__13479__auto____0 = (function (){
var statearr_14808 = [null,null,null,null,null,null,null,null,null,null];
(statearr_14808[(0)] = cljs$core$async$reduce_$_state_machine__13479__auto__);

(statearr_14808[(1)] = (1));

return statearr_14808;
});
var cljs$core$async$reduce_$_state_machine__13479__auto____1 = (function (state_14782){
while(true){
var ret_value__13480__auto__ = (function (){try{while(true){
var result__13481__auto__ = switch__13478__auto__(state_14782);
if(cljs.core.keyword_identical_QMARK_(result__13481__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__13481__auto__;
}
break;
}
}catch (e14815){var ex__13482__auto__ = e14815;
var statearr_14816_17538 = state_14782;
(statearr_14816_17538[(2)] = ex__13482__auto__);


if(cljs.core.seq((state_14782[(4)]))){
var statearr_14817_17539 = state_14782;
(statearr_14817_17539[(1)] = cljs.core.first((state_14782[(4)])));

} else {
throw ex__13482__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__13480__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__17540 = state_14782;
state_14782 = G__17540;
continue;
} else {
return ret_value__13480__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__13479__auto__ = function(state_14782){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__13479__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__13479__auto____1.call(this,state_14782);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__13479__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__13479__auto____0;
cljs$core$async$reduce_$_state_machine__13479__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__13479__auto____1;
return cljs$core$async$reduce_$_state_machine__13479__auto__;
})()
})();
var state__13771__auto__ = (function (){var statearr_14823 = f__13770__auto__();
(statearr_14823[(6)] = c__13768__auto__);

return statearr_14823;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__13771__auto__);
}));

return c__13768__auto__;
});
/**
 * async/reduces a channel with a transformation (xform f).
 *   Returns a channel containing the result.  ch must close before
 *   transduce produces a result.
 */
cljs.core.async.transduce = (function cljs$core$async$transduce(xform,f,init,ch){
var f__$1 = (xform.cljs$core$IFn$_invoke$arity$1 ? xform.cljs$core$IFn$_invoke$arity$1(f) : xform.call(null, f));
var c__13768__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__13770__auto__ = (function (){var switch__13478__auto__ = (function (state_14836){
var state_val_14837 = (state_14836[(1)]);
if((state_val_14837 === (1))){
var inst_14831 = cljs.core.async.reduce(f__$1,init,ch);
var state_14836__$1 = state_14836;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_14836__$1,(2),inst_14831);
} else {
if((state_val_14837 === (2))){
var inst_14833 = (state_14836[(2)]);
var inst_14834 = (f__$1.cljs$core$IFn$_invoke$arity$1 ? f__$1.cljs$core$IFn$_invoke$arity$1(inst_14833) : f__$1.call(null, inst_14833));
var state_14836__$1 = state_14836;
return cljs.core.async.impl.ioc_helpers.return_chan(state_14836__$1,inst_14834);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$transduce_$_state_machine__13479__auto__ = null;
var cljs$core$async$transduce_$_state_machine__13479__auto____0 = (function (){
var statearr_14847 = [null,null,null,null,null,null,null];
(statearr_14847[(0)] = cljs$core$async$transduce_$_state_machine__13479__auto__);

(statearr_14847[(1)] = (1));

return statearr_14847;
});
var cljs$core$async$transduce_$_state_machine__13479__auto____1 = (function (state_14836){
while(true){
var ret_value__13480__auto__ = (function (){try{while(true){
var result__13481__auto__ = switch__13478__auto__(state_14836);
if(cljs.core.keyword_identical_QMARK_(result__13481__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__13481__auto__;
}
break;
}
}catch (e14852){var ex__13482__auto__ = e14852;
var statearr_14853_17548 = state_14836;
(statearr_14853_17548[(2)] = ex__13482__auto__);


if(cljs.core.seq((state_14836[(4)]))){
var statearr_14854_17549 = state_14836;
(statearr_14854_17549[(1)] = cljs.core.first((state_14836[(4)])));

} else {
throw ex__13482__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__13480__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__17550 = state_14836;
state_14836 = G__17550;
continue;
} else {
return ret_value__13480__auto__;
}
break;
}
});
cljs$core$async$transduce_$_state_machine__13479__auto__ = function(state_14836){
switch(arguments.length){
case 0:
return cljs$core$async$transduce_$_state_machine__13479__auto____0.call(this);
case 1:
return cljs$core$async$transduce_$_state_machine__13479__auto____1.call(this,state_14836);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$transduce_$_state_machine__13479__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$transduce_$_state_machine__13479__auto____0;
cljs$core$async$transduce_$_state_machine__13479__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$transduce_$_state_machine__13479__auto____1;
return cljs$core$async$transduce_$_state_machine__13479__auto__;
})()
})();
var state__13771__auto__ = (function (){var statearr_14855 = f__13770__auto__();
(statearr_14855[(6)] = c__13768__auto__);

return statearr_14855;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__13771__auto__);
}));

return c__13768__auto__;
});
/**
 * Puts the contents of coll into the supplied channel.
 * 
 *   By default the channel will be closed after the items are copied,
 *   but can be determined by the close? parameter.
 * 
 *   Returns a channel which will close after the items are copied.
 */
cljs.core.async.onto_chan_BANG_ = (function cljs$core$async$onto_chan_BANG_(var_args){
var G__14862 = arguments.length;
switch (G__14862) {
case 2:
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3(ch,coll,true);
}));

(cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
var c__13768__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__13770__auto__ = (function (){var switch__13478__auto__ = (function (state_14891){
var state_val_14892 = (state_14891[(1)]);
if((state_val_14892 === (7))){
var inst_14873 = (state_14891[(2)]);
var state_14891__$1 = state_14891;
var statearr_14894_17553 = state_14891__$1;
(statearr_14894_17553[(2)] = inst_14873);

(statearr_14894_17553[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14892 === (1))){
var inst_14867 = cljs.core.seq(coll);
var inst_14868 = inst_14867;
var state_14891__$1 = (function (){var statearr_14895 = state_14891;
(statearr_14895[(7)] = inst_14868);

return statearr_14895;
})();
var statearr_14896_17554 = state_14891__$1;
(statearr_14896_17554[(2)] = null);

(statearr_14896_17554[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14892 === (4))){
var inst_14868 = (state_14891[(7)]);
var inst_14871 = cljs.core.first(inst_14868);
var state_14891__$1 = state_14891;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_14891__$1,(7),ch,inst_14871);
} else {
if((state_val_14892 === (13))){
var inst_14885 = (state_14891[(2)]);
var state_14891__$1 = state_14891;
var statearr_14897_17558 = state_14891__$1;
(statearr_14897_17558[(2)] = inst_14885);

(statearr_14897_17558[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14892 === (6))){
var inst_14876 = (state_14891[(2)]);
var state_14891__$1 = state_14891;
if(cljs.core.truth_(inst_14876)){
var statearr_14898_17559 = state_14891__$1;
(statearr_14898_17559[(1)] = (8));

} else {
var statearr_14899_17560 = state_14891__$1;
(statearr_14899_17560[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14892 === (3))){
var inst_14889 = (state_14891[(2)]);
var state_14891__$1 = state_14891;
return cljs.core.async.impl.ioc_helpers.return_chan(state_14891__$1,inst_14889);
} else {
if((state_val_14892 === (12))){
var state_14891__$1 = state_14891;
var statearr_14902_17565 = state_14891__$1;
(statearr_14902_17565[(2)] = null);

(statearr_14902_17565[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14892 === (2))){
var inst_14868 = (state_14891[(7)]);
var state_14891__$1 = state_14891;
if(cljs.core.truth_(inst_14868)){
var statearr_14903_17568 = state_14891__$1;
(statearr_14903_17568[(1)] = (4));

} else {
var statearr_14904_17569 = state_14891__$1;
(statearr_14904_17569[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14892 === (11))){
var inst_14882 = cljs.core.async.close_BANG_(ch);
var state_14891__$1 = state_14891;
var statearr_14905_17570 = state_14891__$1;
(statearr_14905_17570[(2)] = inst_14882);

(statearr_14905_17570[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14892 === (9))){
var state_14891__$1 = state_14891;
if(cljs.core.truth_(close_QMARK_)){
var statearr_14906_17571 = state_14891__$1;
(statearr_14906_17571[(1)] = (11));

} else {
var statearr_14907_17572 = state_14891__$1;
(statearr_14907_17572[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14892 === (5))){
var inst_14868 = (state_14891[(7)]);
var state_14891__$1 = state_14891;
var statearr_14909_17573 = state_14891__$1;
(statearr_14909_17573[(2)] = inst_14868);

(statearr_14909_17573[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14892 === (10))){
var inst_14887 = (state_14891[(2)]);
var state_14891__$1 = state_14891;
var statearr_14910_17574 = state_14891__$1;
(statearr_14910_17574[(2)] = inst_14887);

(statearr_14910_17574[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14892 === (8))){
var inst_14868 = (state_14891[(7)]);
var inst_14878 = cljs.core.next(inst_14868);
var inst_14868__$1 = inst_14878;
var state_14891__$1 = (function (){var statearr_14911 = state_14891;
(statearr_14911[(7)] = inst_14868__$1);

return statearr_14911;
})();
var statearr_14915_17575 = state_14891__$1;
(statearr_14915_17575[(2)] = null);

(statearr_14915_17575[(1)] = (2));


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
}
}
}
});
return (function() {
var cljs$core$async$state_machine__13479__auto__ = null;
var cljs$core$async$state_machine__13479__auto____0 = (function (){
var statearr_14918 = [null,null,null,null,null,null,null,null];
(statearr_14918[(0)] = cljs$core$async$state_machine__13479__auto__);

(statearr_14918[(1)] = (1));

return statearr_14918;
});
var cljs$core$async$state_machine__13479__auto____1 = (function (state_14891){
while(true){
var ret_value__13480__auto__ = (function (){try{while(true){
var result__13481__auto__ = switch__13478__auto__(state_14891);
if(cljs.core.keyword_identical_QMARK_(result__13481__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__13481__auto__;
}
break;
}
}catch (e14920){var ex__13482__auto__ = e14920;
var statearr_14921_17583 = state_14891;
(statearr_14921_17583[(2)] = ex__13482__auto__);


if(cljs.core.seq((state_14891[(4)]))){
var statearr_14922_17584 = state_14891;
(statearr_14922_17584[(1)] = cljs.core.first((state_14891[(4)])));

} else {
throw ex__13482__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__13480__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__17585 = state_14891;
state_14891 = G__17585;
continue;
} else {
return ret_value__13480__auto__;
}
break;
}
});
cljs$core$async$state_machine__13479__auto__ = function(state_14891){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__13479__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__13479__auto____1.call(this,state_14891);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__13479__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__13479__auto____0;
cljs$core$async$state_machine__13479__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__13479__auto____1;
return cljs$core$async$state_machine__13479__auto__;
})()
})();
var state__13771__auto__ = (function (){var statearr_14924 = f__13770__auto__();
(statearr_14924[(6)] = c__13768__auto__);

return statearr_14924;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__13771__auto__);
}));

return c__13768__auto__;
}));

(cljs.core.async.onto_chan_BANG_.cljs$lang$maxFixedArity = 3);

/**
 * Creates and returns a channel which contains the contents of coll,
 *   closing when exhausted.
 */
cljs.core.async.to_chan_BANG_ = (function cljs$core$async$to_chan_BANG_(coll){
var ch = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(cljs.core.bounded_count((100),coll));
cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$2(ch,coll);

return ch;
});
/**
 * Deprecated - use onto-chan!
 */
cljs.core.async.onto_chan = (function cljs$core$async$onto_chan(var_args){
var G__14929 = arguments.length;
switch (G__14929) {
case 2:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3(ch,coll,true);
}));

(cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3(ch,coll,close_QMARK_);
}));

(cljs.core.async.onto_chan.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - use to-chan!
 */
cljs.core.async.to_chan = (function cljs$core$async$to_chan(coll){
return cljs.core.async.to_chan_BANG_(coll);
});

/**
 * @interface
 */
cljs.core.async.Mux = function(){};

var cljs$core$async$Mux$muxch_STAR_$dyn_17591 = (function (_){
var x__5350__auto__ = (((_ == null))?null:_);
var m__5351__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__5350__auto__)]);
if((!((m__5351__auto__ == null)))){
return (m__5351__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5351__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__5351__auto__.call(null, _));
} else {
var m__5349__auto__ = (cljs.core.async.muxch_STAR_["_"]);
if((!((m__5349__auto__ == null)))){
return (m__5349__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5349__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__5349__auto__.call(null, _));
} else {
throw cljs.core.missing_protocol("Mux.muxch*",_);
}
}
});
cljs.core.async.muxch_STAR_ = (function cljs$core$async$muxch_STAR_(_){
if((((!((_ == null)))) && ((!((_.cljs$core$async$Mux$muxch_STAR_$arity$1 == null)))))){
return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else {
return cljs$core$async$Mux$muxch_STAR_$dyn_17591(_);
}
});


/**
 * @interface
 */
cljs.core.async.Mult = function(){};

var cljs$core$async$Mult$tap_STAR_$dyn_17592 = (function (m,ch,close_QMARK_){
var x__5350__auto__ = (((m == null))?null:m);
var m__5351__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__5350__auto__)]);
if((!((m__5351__auto__ == null)))){
return (m__5351__auto__.cljs$core$IFn$_invoke$arity$3 ? m__5351__auto__.cljs$core$IFn$_invoke$arity$3(m,ch,close_QMARK_) : m__5351__auto__.call(null, m,ch,close_QMARK_));
} else {
var m__5349__auto__ = (cljs.core.async.tap_STAR_["_"]);
if((!((m__5349__auto__ == null)))){
return (m__5349__auto__.cljs$core$IFn$_invoke$arity$3 ? m__5349__auto__.cljs$core$IFn$_invoke$arity$3(m,ch,close_QMARK_) : m__5349__auto__.call(null, m,ch,close_QMARK_));
} else {
throw cljs.core.missing_protocol("Mult.tap*",m);
}
}
});
cljs.core.async.tap_STAR_ = (function cljs$core$async$tap_STAR_(m,ch,close_QMARK_){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$tap_STAR_$arity$3 == null)))))){
return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else {
return cljs$core$async$Mult$tap_STAR_$dyn_17592(m,ch,close_QMARK_);
}
});

var cljs$core$async$Mult$untap_STAR_$dyn_17600 = (function (m,ch){
var x__5350__auto__ = (((m == null))?null:m);
var m__5351__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__5350__auto__)]);
if((!((m__5351__auto__ == null)))){
return (m__5351__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5351__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__5351__auto__.call(null, m,ch));
} else {
var m__5349__auto__ = (cljs.core.async.untap_STAR_["_"]);
if((!((m__5349__auto__ == null)))){
return (m__5349__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5349__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__5349__auto__.call(null, m,ch));
} else {
throw cljs.core.missing_protocol("Mult.untap*",m);
}
}
});
cljs.core.async.untap_STAR_ = (function cljs$core$async$untap_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$untap_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else {
return cljs$core$async$Mult$untap_STAR_$dyn_17600(m,ch);
}
});

var cljs$core$async$Mult$untap_all_STAR_$dyn_17611 = (function (m){
var x__5350__auto__ = (((m == null))?null:m);
var m__5351__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__5350__auto__)]);
if((!((m__5351__auto__ == null)))){
return (m__5351__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5351__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__5351__auto__.call(null, m));
} else {
var m__5349__auto__ = (cljs.core.async.untap_all_STAR_["_"]);
if((!((m__5349__auto__ == null)))){
return (m__5349__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5349__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__5349__auto__.call(null, m));
} else {
throw cljs.core.missing_protocol("Mult.untap-all*",m);
}
}
});
cljs.core.async.untap_all_STAR_ = (function cljs$core$async$untap_all_STAR_(m){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$untap_all_STAR_$arity$1 == null)))))){
return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else {
return cljs$core$async$Mult$untap_all_STAR_$dyn_17611(m);
}
});


/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async14957 = (function (ch,cs,meta14958){
this.ch = ch;
this.cs = cs;
this.meta14958 = meta14958;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async14957.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_14959,meta14958__$1){
var self__ = this;
var _14959__$1 = this;
return (new cljs.core.async.t_cljs$core$async14957(self__.ch,self__.cs,meta14958__$1));
}));

(cljs.core.async.t_cljs$core$async14957.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_14959){
var self__ = this;
var _14959__$1 = this;
return self__.meta14958;
}));

(cljs.core.async.t_cljs$core$async14957.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async14957.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async14957.prototype.cljs$core$async$Mult$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async14957.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
}));

(cljs.core.async.t_cljs$core$async14957.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch__$1);

return null;
}));

(cljs.core.async.t_cljs$core$async14957.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
}));

(cljs.core.async.t_cljs$core$async14957.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta14958","meta14958",-766516244,null)], null);
}));

(cljs.core.async.t_cljs$core$async14957.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async14957.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async14957");

(cljs.core.async.t_cljs$core$async14957.cljs$lang$ctorPrWriter = (function (this__5287__auto__,writer__5288__auto__,opt__5289__auto__){
return cljs.core._write(writer__5288__auto__,"cljs.core.async/t_cljs$core$async14957");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async14957.
 */
cljs.core.async.__GT_t_cljs$core$async14957 = (function cljs$core$async$__GT_t_cljs$core$async14957(ch,cs,meta14958){
return (new cljs.core.async.t_cljs$core$async14957(ch,cs,meta14958));
});


/**
 * Creates and returns a mult(iple) of the supplied channel. Channels
 *   containing copies of the channel can be created with 'tap', and
 *   detached with 'untap'.
 * 
 *   Each item is distributed to all taps in parallel and synchronously,
 *   i.e. each tap must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow taps from holding up the mult.
 * 
 *   Items received when there are no taps get dropped.
 * 
 *   If a tap puts to a closed channel, it will be removed from the mult.
 */
cljs.core.async.mult = (function cljs$core$async$mult(ch){
var cs = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var m = (new cljs.core.async.t_cljs$core$async14957(ch,cs,cljs.core.PersistentArrayMap.EMPTY));
var dchan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var dctr = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
var done = (function (_){
if((cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(dchan,true);
} else {
return null;
}
});
var c__13768__auto___17626 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__13770__auto__ = (function (){var switch__13478__auto__ = (function (state_15129){
var state_val_15130 = (state_15129[(1)]);
if((state_val_15130 === (7))){
var inst_15124 = (state_15129[(2)]);
var state_15129__$1 = state_15129;
var statearr_15146_17627 = state_15129__$1;
(statearr_15146_17627[(2)] = inst_15124);

(statearr_15146_17627[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15130 === (20))){
var inst_15017 = (state_15129[(7)]);
var inst_15032 = cljs.core.first(inst_15017);
var inst_15033 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_15032,(0),null);
var inst_15034 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_15032,(1),null);
var state_15129__$1 = (function (){var statearr_15150 = state_15129;
(statearr_15150[(8)] = inst_15033);

return statearr_15150;
})();
if(cljs.core.truth_(inst_15034)){
var statearr_15154_17628 = state_15129__$1;
(statearr_15154_17628[(1)] = (22));

} else {
var statearr_15155_17629 = state_15129__$1;
(statearr_15155_17629[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15130 === (27))){
var inst_14974 = (state_15129[(9)]);
var inst_15063 = (state_15129[(10)]);
var inst_15065 = (state_15129[(11)]);
var inst_15070 = (state_15129[(12)]);
var inst_15070__$1 = cljs.core._nth(inst_15063,inst_15065);
var inst_15073 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_15070__$1,inst_14974,done);
var state_15129__$1 = (function (){var statearr_15160 = state_15129;
(statearr_15160[(12)] = inst_15070__$1);

return statearr_15160;
})();
if(cljs.core.truth_(inst_15073)){
var statearr_15163_17633 = state_15129__$1;
(statearr_15163_17633[(1)] = (30));

} else {
var statearr_15165_17636 = state_15129__$1;
(statearr_15165_17636[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15130 === (1))){
var state_15129__$1 = state_15129;
var statearr_15172_17637 = state_15129__$1;
(statearr_15172_17637[(2)] = null);

(statearr_15172_17637[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15130 === (24))){
var inst_15017 = (state_15129[(7)]);
var inst_15039 = (state_15129[(2)]);
var inst_15040 = cljs.core.next(inst_15017);
var inst_14983 = inst_15040;
var inst_14984 = null;
var inst_14985 = (0);
var inst_14986 = (0);
var state_15129__$1 = (function (){var statearr_15173 = state_15129;
(statearr_15173[(13)] = inst_15039);

(statearr_15173[(14)] = inst_14983);

(statearr_15173[(15)] = inst_14984);

(statearr_15173[(16)] = inst_14985);

(statearr_15173[(17)] = inst_14986);

return statearr_15173;
})();
var statearr_15174_17638 = state_15129__$1;
(statearr_15174_17638[(2)] = null);

(statearr_15174_17638[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15130 === (39))){
var state_15129__$1 = state_15129;
var statearr_15181_17639 = state_15129__$1;
(statearr_15181_17639[(2)] = null);

(statearr_15181_17639[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15130 === (4))){
var inst_14974 = (state_15129[(9)]);
var inst_14974__$1 = (state_15129[(2)]);
var inst_14975 = (inst_14974__$1 == null);
var state_15129__$1 = (function (){var statearr_15184 = state_15129;
(statearr_15184[(9)] = inst_14974__$1);

return statearr_15184;
})();
if(cljs.core.truth_(inst_14975)){
var statearr_15185_17645 = state_15129__$1;
(statearr_15185_17645[(1)] = (5));

} else {
var statearr_15187_17646 = state_15129__$1;
(statearr_15187_17646[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15130 === (15))){
var inst_14983 = (state_15129[(14)]);
var inst_14984 = (state_15129[(15)]);
var inst_14985 = (state_15129[(16)]);
var inst_14986 = (state_15129[(17)]);
var inst_15013 = (state_15129[(2)]);
var inst_15014 = (inst_14986 + (1));
var tmp15177 = inst_14983;
var tmp15178 = inst_14984;
var tmp15179 = inst_14985;
var inst_14983__$1 = tmp15177;
var inst_14984__$1 = tmp15178;
var inst_14985__$1 = tmp15179;
var inst_14986__$1 = inst_15014;
var state_15129__$1 = (function (){var statearr_15188 = state_15129;
(statearr_15188[(14)] = inst_14983__$1);

(statearr_15188[(18)] = inst_15013);

(statearr_15188[(15)] = inst_14984__$1);

(statearr_15188[(16)] = inst_14985__$1);

(statearr_15188[(17)] = inst_14986__$1);

return statearr_15188;
})();
var statearr_15189_17651 = state_15129__$1;
(statearr_15189_17651[(2)] = null);

(statearr_15189_17651[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15130 === (21))){
var inst_15043 = (state_15129[(2)]);
var state_15129__$1 = state_15129;
var statearr_15195_17655 = state_15129__$1;
(statearr_15195_17655[(2)] = inst_15043);

(statearr_15195_17655[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15130 === (31))){
var inst_15070 = (state_15129[(12)]);
var inst_15079 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null, inst_15070);
var state_15129__$1 = state_15129;
var statearr_15198_17656 = state_15129__$1;
(statearr_15198_17656[(2)] = inst_15079);

(statearr_15198_17656[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15130 === (32))){
var inst_15064 = (state_15129[(19)]);
var inst_15062 = (state_15129[(20)]);
var inst_15063 = (state_15129[(10)]);
var inst_15065 = (state_15129[(11)]);
var inst_15081 = (state_15129[(2)]);
var inst_15082 = (inst_15065 + (1));
var tmp15192 = inst_15064;
var tmp15193 = inst_15062;
var tmp15194 = inst_15063;
var inst_15062__$1 = tmp15193;
var inst_15063__$1 = tmp15194;
var inst_15064__$1 = tmp15192;
var inst_15065__$1 = inst_15082;
var state_15129__$1 = (function (){var statearr_15201 = state_15129;
(statearr_15201[(19)] = inst_15064__$1);

(statearr_15201[(20)] = inst_15062__$1);

(statearr_15201[(10)] = inst_15063__$1);

(statearr_15201[(11)] = inst_15065__$1);

(statearr_15201[(21)] = inst_15081);

return statearr_15201;
})();
var statearr_15204_17661 = state_15129__$1;
(statearr_15204_17661[(2)] = null);

(statearr_15204_17661[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15130 === (40))){
var inst_15094 = (state_15129[(22)]);
var inst_15098 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null, inst_15094);
var state_15129__$1 = state_15129;
var statearr_15206_17662 = state_15129__$1;
(statearr_15206_17662[(2)] = inst_15098);

(statearr_15206_17662[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15130 === (33))){
var inst_15085 = (state_15129[(23)]);
var inst_15087 = cljs.core.chunked_seq_QMARK_(inst_15085);
var state_15129__$1 = state_15129;
if(inst_15087){
var statearr_15208_17664 = state_15129__$1;
(statearr_15208_17664[(1)] = (36));

} else {
var statearr_15209_17668 = state_15129__$1;
(statearr_15209_17668[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15130 === (13))){
var inst_15003 = (state_15129[(24)]);
var inst_15010 = cljs.core.async.close_BANG_(inst_15003);
var state_15129__$1 = state_15129;
var statearr_15211_17669 = state_15129__$1;
(statearr_15211_17669[(2)] = inst_15010);

(statearr_15211_17669[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15130 === (22))){
var inst_15033 = (state_15129[(8)]);
var inst_15036 = cljs.core.async.close_BANG_(inst_15033);
var state_15129__$1 = state_15129;
var statearr_15214_17670 = state_15129__$1;
(statearr_15214_17670[(2)] = inst_15036);

(statearr_15214_17670[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15130 === (36))){
var inst_15085 = (state_15129[(23)]);
var inst_15089 = cljs.core.chunk_first(inst_15085);
var inst_15090 = cljs.core.chunk_rest(inst_15085);
var inst_15091 = cljs.core.count(inst_15089);
var inst_15062 = inst_15090;
var inst_15063 = inst_15089;
var inst_15064 = inst_15091;
var inst_15065 = (0);
var state_15129__$1 = (function (){var statearr_15216 = state_15129;
(statearr_15216[(19)] = inst_15064);

(statearr_15216[(20)] = inst_15062);

(statearr_15216[(10)] = inst_15063);

(statearr_15216[(11)] = inst_15065);

return statearr_15216;
})();
var statearr_15217_17674 = state_15129__$1;
(statearr_15217_17674[(2)] = null);

(statearr_15217_17674[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15130 === (41))){
var inst_15085 = (state_15129[(23)]);
var inst_15100 = (state_15129[(2)]);
var inst_15101 = cljs.core.next(inst_15085);
var inst_15062 = inst_15101;
var inst_15063 = null;
var inst_15064 = (0);
var inst_15065 = (0);
var state_15129__$1 = (function (){var statearr_15219 = state_15129;
(statearr_15219[(19)] = inst_15064);

(statearr_15219[(20)] = inst_15062);

(statearr_15219[(10)] = inst_15063);

(statearr_15219[(11)] = inst_15065);

(statearr_15219[(25)] = inst_15100);

return statearr_15219;
})();
var statearr_15224_17678 = state_15129__$1;
(statearr_15224_17678[(2)] = null);

(statearr_15224_17678[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15130 === (43))){
var state_15129__$1 = state_15129;
var statearr_15225_17679 = state_15129__$1;
(statearr_15225_17679[(2)] = null);

(statearr_15225_17679[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15130 === (29))){
var inst_15111 = (state_15129[(2)]);
var state_15129__$1 = state_15129;
var statearr_15226_17680 = state_15129__$1;
(statearr_15226_17680[(2)] = inst_15111);

(statearr_15226_17680[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15130 === (44))){
var inst_15121 = (state_15129[(2)]);
var state_15129__$1 = (function (){var statearr_15227 = state_15129;
(statearr_15227[(26)] = inst_15121);

return statearr_15227;
})();
var statearr_15228_17681 = state_15129__$1;
(statearr_15228_17681[(2)] = null);

(statearr_15228_17681[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15130 === (6))){
var inst_15054 = (state_15129[(27)]);
var inst_15053 = cljs.core.deref(cs);
var inst_15054__$1 = cljs.core.keys(inst_15053);
var inst_15055 = cljs.core.count(inst_15054__$1);
var inst_15056 = cljs.core.reset_BANG_(dctr,inst_15055);
var inst_15061 = cljs.core.seq(inst_15054__$1);
var inst_15062 = inst_15061;
var inst_15063 = null;
var inst_15064 = (0);
var inst_15065 = (0);
var state_15129__$1 = (function (){var statearr_15229 = state_15129;
(statearr_15229[(19)] = inst_15064);

(statearr_15229[(27)] = inst_15054__$1);

(statearr_15229[(20)] = inst_15062);

(statearr_15229[(10)] = inst_15063);

(statearr_15229[(11)] = inst_15065);

(statearr_15229[(28)] = inst_15056);

return statearr_15229;
})();
var statearr_15230_17696 = state_15129__$1;
(statearr_15230_17696[(2)] = null);

(statearr_15230_17696[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15130 === (28))){
var inst_15062 = (state_15129[(20)]);
var inst_15085 = (state_15129[(23)]);
var inst_15085__$1 = cljs.core.seq(inst_15062);
var state_15129__$1 = (function (){var statearr_15232 = state_15129;
(statearr_15232[(23)] = inst_15085__$1);

return statearr_15232;
})();
if(inst_15085__$1){
var statearr_15233_17698 = state_15129__$1;
(statearr_15233_17698[(1)] = (33));

} else {
var statearr_15234_17699 = state_15129__$1;
(statearr_15234_17699[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15130 === (25))){
var inst_15064 = (state_15129[(19)]);
var inst_15065 = (state_15129[(11)]);
var inst_15067 = (inst_15065 < inst_15064);
var inst_15068 = inst_15067;
var state_15129__$1 = state_15129;
if(cljs.core.truth_(inst_15068)){
var statearr_15235_17700 = state_15129__$1;
(statearr_15235_17700[(1)] = (27));

} else {
var statearr_15236_17701 = state_15129__$1;
(statearr_15236_17701[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15130 === (34))){
var state_15129__$1 = state_15129;
var statearr_15237_17702 = state_15129__$1;
(statearr_15237_17702[(2)] = null);

(statearr_15237_17702[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15130 === (17))){
var state_15129__$1 = state_15129;
var statearr_15240_17703 = state_15129__$1;
(statearr_15240_17703[(2)] = null);

(statearr_15240_17703[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15130 === (3))){
var inst_15126 = (state_15129[(2)]);
var state_15129__$1 = state_15129;
return cljs.core.async.impl.ioc_helpers.return_chan(state_15129__$1,inst_15126);
} else {
if((state_val_15130 === (12))){
var inst_15049 = (state_15129[(2)]);
var state_15129__$1 = state_15129;
var statearr_15246_17710 = state_15129__$1;
(statearr_15246_17710[(2)] = inst_15049);

(statearr_15246_17710[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15130 === (2))){
var state_15129__$1 = state_15129;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_15129__$1,(4),ch);
} else {
if((state_val_15130 === (23))){
var state_15129__$1 = state_15129;
var statearr_15247_17711 = state_15129__$1;
(statearr_15247_17711[(2)] = null);

(statearr_15247_17711[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15130 === (35))){
var inst_15109 = (state_15129[(2)]);
var state_15129__$1 = state_15129;
var statearr_15248_17715 = state_15129__$1;
(statearr_15248_17715[(2)] = inst_15109);

(statearr_15248_17715[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15130 === (19))){
var inst_15017 = (state_15129[(7)]);
var inst_15024 = cljs.core.chunk_first(inst_15017);
var inst_15025 = cljs.core.chunk_rest(inst_15017);
var inst_15026 = cljs.core.count(inst_15024);
var inst_14983 = inst_15025;
var inst_14984 = inst_15024;
var inst_14985 = inst_15026;
var inst_14986 = (0);
var state_15129__$1 = (function (){var statearr_15249 = state_15129;
(statearr_15249[(14)] = inst_14983);

(statearr_15249[(15)] = inst_14984);

(statearr_15249[(16)] = inst_14985);

(statearr_15249[(17)] = inst_14986);

return statearr_15249;
})();
var statearr_15254_17716 = state_15129__$1;
(statearr_15254_17716[(2)] = null);

(statearr_15254_17716[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15130 === (11))){
var inst_14983 = (state_15129[(14)]);
var inst_15017 = (state_15129[(7)]);
var inst_15017__$1 = cljs.core.seq(inst_14983);
var state_15129__$1 = (function (){var statearr_15257 = state_15129;
(statearr_15257[(7)] = inst_15017__$1);

return statearr_15257;
})();
if(inst_15017__$1){
var statearr_15258_17721 = state_15129__$1;
(statearr_15258_17721[(1)] = (16));

} else {
var statearr_15261_17722 = state_15129__$1;
(statearr_15261_17722[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15130 === (9))){
var inst_15051 = (state_15129[(2)]);
var state_15129__$1 = state_15129;
var statearr_15262_17729 = state_15129__$1;
(statearr_15262_17729[(2)] = inst_15051);

(statearr_15262_17729[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15130 === (5))){
var inst_14981 = cljs.core.deref(cs);
var inst_14982 = cljs.core.seq(inst_14981);
var inst_14983 = inst_14982;
var inst_14984 = null;
var inst_14985 = (0);
var inst_14986 = (0);
var state_15129__$1 = (function (){var statearr_15266 = state_15129;
(statearr_15266[(14)] = inst_14983);

(statearr_15266[(15)] = inst_14984);

(statearr_15266[(16)] = inst_14985);

(statearr_15266[(17)] = inst_14986);

return statearr_15266;
})();
var statearr_15267_17730 = state_15129__$1;
(statearr_15267_17730[(2)] = null);

(statearr_15267_17730[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15130 === (14))){
var state_15129__$1 = state_15129;
var statearr_15268_17731 = state_15129__$1;
(statearr_15268_17731[(2)] = null);

(statearr_15268_17731[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15130 === (45))){
var inst_15118 = (state_15129[(2)]);
var state_15129__$1 = state_15129;
var statearr_15269_17732 = state_15129__$1;
(statearr_15269_17732[(2)] = inst_15118);

(statearr_15269_17732[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15130 === (26))){
var inst_15054 = (state_15129[(27)]);
var inst_15113 = (state_15129[(2)]);
var inst_15114 = cljs.core.seq(inst_15054);
var state_15129__$1 = (function (){var statearr_15270 = state_15129;
(statearr_15270[(29)] = inst_15113);

return statearr_15270;
})();
if(inst_15114){
var statearr_15271_17739 = state_15129__$1;
(statearr_15271_17739[(1)] = (42));

} else {
var statearr_15273_17740 = state_15129__$1;
(statearr_15273_17740[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15130 === (16))){
var inst_15017 = (state_15129[(7)]);
var inst_15019 = cljs.core.chunked_seq_QMARK_(inst_15017);
var state_15129__$1 = state_15129;
if(inst_15019){
var statearr_15274_17741 = state_15129__$1;
(statearr_15274_17741[(1)] = (19));

} else {
var statearr_15275_17742 = state_15129__$1;
(statearr_15275_17742[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15130 === (38))){
var inst_15106 = (state_15129[(2)]);
var state_15129__$1 = state_15129;
var statearr_15276_17743 = state_15129__$1;
(statearr_15276_17743[(2)] = inst_15106);

(statearr_15276_17743[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15130 === (30))){
var state_15129__$1 = state_15129;
var statearr_15277_17744 = state_15129__$1;
(statearr_15277_17744[(2)] = null);

(statearr_15277_17744[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15130 === (10))){
var inst_14984 = (state_15129[(15)]);
var inst_14986 = (state_15129[(17)]);
var inst_14998 = cljs.core._nth(inst_14984,inst_14986);
var inst_15003 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_14998,(0),null);
var inst_15004 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_14998,(1),null);
var state_15129__$1 = (function (){var statearr_15284 = state_15129;
(statearr_15284[(24)] = inst_15003);

return statearr_15284;
})();
if(cljs.core.truth_(inst_15004)){
var statearr_15285_17751 = state_15129__$1;
(statearr_15285_17751[(1)] = (13));

} else {
var statearr_15286_17752 = state_15129__$1;
(statearr_15286_17752[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15130 === (18))){
var inst_15046 = (state_15129[(2)]);
var state_15129__$1 = state_15129;
var statearr_15287_17753 = state_15129__$1;
(statearr_15287_17753[(2)] = inst_15046);

(statearr_15287_17753[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15130 === (42))){
var state_15129__$1 = state_15129;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_15129__$1,(45),dchan);
} else {
if((state_val_15130 === (37))){
var inst_14974 = (state_15129[(9)]);
var inst_15094 = (state_15129[(22)]);
var inst_15085 = (state_15129[(23)]);
var inst_15094__$1 = cljs.core.first(inst_15085);
var inst_15095 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_15094__$1,inst_14974,done);
var state_15129__$1 = (function (){var statearr_15290 = state_15129;
(statearr_15290[(22)] = inst_15094__$1);

return statearr_15290;
})();
if(cljs.core.truth_(inst_15095)){
var statearr_15291_17754 = state_15129__$1;
(statearr_15291_17754[(1)] = (39));

} else {
var statearr_15292_17755 = state_15129__$1;
(statearr_15292_17755[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15130 === (8))){
var inst_14985 = (state_15129[(16)]);
var inst_14986 = (state_15129[(17)]);
var inst_14988 = (inst_14986 < inst_14985);
var inst_14989 = inst_14988;
var state_15129__$1 = state_15129;
if(cljs.core.truth_(inst_14989)){
var statearr_15293_17757 = state_15129__$1;
(statearr_15293_17757[(1)] = (10));

} else {
var statearr_15294_17758 = state_15129__$1;
(statearr_15294_17758[(1)] = (11));

}

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
}
}
}
}
}
});
return (function() {
var cljs$core$async$mult_$_state_machine__13479__auto__ = null;
var cljs$core$async$mult_$_state_machine__13479__auto____0 = (function (){
var statearr_15300 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_15300[(0)] = cljs$core$async$mult_$_state_machine__13479__auto__);

(statearr_15300[(1)] = (1));

return statearr_15300;
});
var cljs$core$async$mult_$_state_machine__13479__auto____1 = (function (state_15129){
while(true){
var ret_value__13480__auto__ = (function (){try{while(true){
var result__13481__auto__ = switch__13478__auto__(state_15129);
if(cljs.core.keyword_identical_QMARK_(result__13481__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__13481__auto__;
}
break;
}
}catch (e15305){var ex__13482__auto__ = e15305;
var statearr_15306_17763 = state_15129;
(statearr_15306_17763[(2)] = ex__13482__auto__);


if(cljs.core.seq((state_15129[(4)]))){
var statearr_15307_17764 = state_15129;
(statearr_15307_17764[(1)] = cljs.core.first((state_15129[(4)])));

} else {
throw ex__13482__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__13480__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__17765 = state_15129;
state_15129 = G__17765;
continue;
} else {
return ret_value__13480__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__13479__auto__ = function(state_15129){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__13479__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__13479__auto____1.call(this,state_15129);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__13479__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__13479__auto____0;
cljs$core$async$mult_$_state_machine__13479__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__13479__auto____1;
return cljs$core$async$mult_$_state_machine__13479__auto__;
})()
})();
var state__13771__auto__ = (function (){var statearr_15309 = f__13770__auto__();
(statearr_15309[(6)] = c__13768__auto___17626);

return statearr_15309;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__13771__auto__);
}));


return m;
});
/**
 * Copies the mult source onto the supplied channel.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.tap = (function cljs$core$async$tap(var_args){
var G__15313 = arguments.length;
switch (G__15313) {
case 2:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2 = (function (mult,ch){
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(mult,ch,true);
}));

(cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3 = (function (mult,ch,close_QMARK_){
cljs.core.async.tap_STAR_(mult,ch,close_QMARK_);

return ch;
}));

(cljs.core.async.tap.cljs$lang$maxFixedArity = 3);

/**
 * Disconnects a target channel from a mult
 */
cljs.core.async.untap = (function cljs$core$async$untap(mult,ch){
return cljs.core.async.untap_STAR_(mult,ch);
});
/**
 * Disconnects all target channels from a mult
 */
cljs.core.async.untap_all = (function cljs$core$async$untap_all(mult){
return cljs.core.async.untap_all_STAR_(mult);
});

/**
 * @interface
 */
cljs.core.async.Mix = function(){};

var cljs$core$async$Mix$admix_STAR_$dyn_17772 = (function (m,ch){
var x__5350__auto__ = (((m == null))?null:m);
var m__5351__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__5350__auto__)]);
if((!((m__5351__auto__ == null)))){
return (m__5351__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5351__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__5351__auto__.call(null, m,ch));
} else {
var m__5349__auto__ = (cljs.core.async.admix_STAR_["_"]);
if((!((m__5349__auto__ == null)))){
return (m__5349__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5349__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__5349__auto__.call(null, m,ch));
} else {
throw cljs.core.missing_protocol("Mix.admix*",m);
}
}
});
cljs.core.async.admix_STAR_ = (function cljs$core$async$admix_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$admix_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else {
return cljs$core$async$Mix$admix_STAR_$dyn_17772(m,ch);
}
});

var cljs$core$async$Mix$unmix_STAR_$dyn_17784 = (function (m,ch){
var x__5350__auto__ = (((m == null))?null:m);
var m__5351__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__5350__auto__)]);
if((!((m__5351__auto__ == null)))){
return (m__5351__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5351__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__5351__auto__.call(null, m,ch));
} else {
var m__5349__auto__ = (cljs.core.async.unmix_STAR_["_"]);
if((!((m__5349__auto__ == null)))){
return (m__5349__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5349__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__5349__auto__.call(null, m,ch));
} else {
throw cljs.core.missing_protocol("Mix.unmix*",m);
}
}
});
cljs.core.async.unmix_STAR_ = (function cljs$core$async$unmix_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$unmix_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else {
return cljs$core$async$Mix$unmix_STAR_$dyn_17784(m,ch);
}
});

var cljs$core$async$Mix$unmix_all_STAR_$dyn_17786 = (function (m){
var x__5350__auto__ = (((m == null))?null:m);
var m__5351__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__5350__auto__)]);
if((!((m__5351__auto__ == null)))){
return (m__5351__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5351__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__5351__auto__.call(null, m));
} else {
var m__5349__auto__ = (cljs.core.async.unmix_all_STAR_["_"]);
if((!((m__5349__auto__ == null)))){
return (m__5349__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5349__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__5349__auto__.call(null, m));
} else {
throw cljs.core.missing_protocol("Mix.unmix-all*",m);
}
}
});
cljs.core.async.unmix_all_STAR_ = (function cljs$core$async$unmix_all_STAR_(m){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$unmix_all_STAR_$arity$1 == null)))))){
return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else {
return cljs$core$async$Mix$unmix_all_STAR_$dyn_17786(m);
}
});

var cljs$core$async$Mix$toggle_STAR_$dyn_17788 = (function (m,state_map){
var x__5350__auto__ = (((m == null))?null:m);
var m__5351__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__5350__auto__)]);
if((!((m__5351__auto__ == null)))){
return (m__5351__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5351__auto__.cljs$core$IFn$_invoke$arity$2(m,state_map) : m__5351__auto__.call(null, m,state_map));
} else {
var m__5349__auto__ = (cljs.core.async.toggle_STAR_["_"]);
if((!((m__5349__auto__ == null)))){
return (m__5349__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5349__auto__.cljs$core$IFn$_invoke$arity$2(m,state_map) : m__5349__auto__.call(null, m,state_map));
} else {
throw cljs.core.missing_protocol("Mix.toggle*",m);
}
}
});
cljs.core.async.toggle_STAR_ = (function cljs$core$async$toggle_STAR_(m,state_map){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$toggle_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else {
return cljs$core$async$Mix$toggle_STAR_$dyn_17788(m,state_map);
}
});

var cljs$core$async$Mix$solo_mode_STAR_$dyn_17793 = (function (m,mode){
var x__5350__auto__ = (((m == null))?null:m);
var m__5351__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__5350__auto__)]);
if((!((m__5351__auto__ == null)))){
return (m__5351__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5351__auto__.cljs$core$IFn$_invoke$arity$2(m,mode) : m__5351__auto__.call(null, m,mode));
} else {
var m__5349__auto__ = (cljs.core.async.solo_mode_STAR_["_"]);
if((!((m__5349__auto__ == null)))){
return (m__5349__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5349__auto__.cljs$core$IFn$_invoke$arity$2(m,mode) : m__5349__auto__.call(null, m,mode));
} else {
throw cljs.core.missing_protocol("Mix.solo-mode*",m);
}
}
});
cljs.core.async.solo_mode_STAR_ = (function cljs$core$async$solo_mode_STAR_(m,mode){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$solo_mode_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else {
return cljs$core$async$Mix$solo_mode_STAR_$dyn_17793(m,mode);
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__5732__auto__ = [];
var len__5726__auto___17795 = arguments.length;
var i__5727__auto___17799 = (0);
while(true){
if((i__5727__auto___17799 < len__5726__auto___17795)){
args__5732__auto__.push((arguments[i__5727__auto___17799]));

var G__17800 = (i__5727__auto___17799 + (1));
i__5727__auto___17799 = G__17800;
continue;
} else {
}
break;
}

var argseq__5733__auto__ = ((((3) < args__5732__auto__.length))?(new cljs.core.IndexedSeq(args__5732__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__5733__auto__);
});

(cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__15343){
var map__15344 = p__15343;
var map__15344__$1 = cljs.core.__destructure_map(map__15344);
var opts = map__15344__$1;
var statearr_15345_17806 = state;
(statearr_15345_17806[(1)] = cont_block);


var temp__5804__auto__ = cljs.core.async.do_alts((function (val){
var statearr_15346_17807 = state;
(statearr_15346_17807[(2)] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state);
}),ports,opts);
if(cljs.core.truth_(temp__5804__auto__)){
var cb = temp__5804__auto__;
var statearr_15347_17808 = state;
(statearr_15347_17808[(2)] = cljs.core.deref(cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}));

(cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3));

/** @this {Function} */
(cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq15332){
var G__15333 = cljs.core.first(seq15332);
var seq15332__$1 = cljs.core.next(seq15332);
var G__15334 = cljs.core.first(seq15332__$1);
var seq15332__$2 = cljs.core.next(seq15332__$1);
var G__15335 = cljs.core.first(seq15332__$2);
var seq15332__$3 = cljs.core.next(seq15332__$2);
var self__5711__auto__ = this;
return self__5711__auto__.cljs$core$IFn$_invoke$arity$variadic(G__15333,G__15334,G__15335,seq15332__$3);
}));


/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async15363 = (function (change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta15364){
this.change = change;
this.solo_mode = solo_mode;
this.pick = pick;
this.cs = cs;
this.calc_state = calc_state;
this.out = out;
this.changed = changed;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.meta15364 = meta15364;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async15363.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_15365,meta15364__$1){
var self__ = this;
var _15365__$1 = this;
return (new cljs.core.async.t_cljs$core$async15363(self__.change,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta15364__$1));
}));

(cljs.core.async.t_cljs$core$async15363.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_15365){
var self__ = this;
var _15365__$1 = this;
return self__.meta15364;
}));

(cljs.core.async.t_cljs$core$async15363.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async15363.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
}));

(cljs.core.async.t_cljs$core$async15363.prototype.cljs$core$async$Mix$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async15363.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null, ));
}));

(cljs.core.async.t_cljs$core$async15363.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null, ));
}));

(cljs.core.async.t_cljs$core$async15363.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null, ));
}));

(cljs.core.async.t_cljs$core$async15363.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.merge_with,cljs.core.merge),state_map);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null, ));
}));

(cljs.core.async.t_cljs$core$async15363.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.solo_modes.cljs$core$IFn$_invoke$arity$1 ? self__.solo_modes.cljs$core$IFn$_invoke$arity$1(mode) : self__.solo_modes.call(null, mode)))){
} else {
throw (new Error(["Assert failed: ",["mode must be one of: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.solo_modes)].join(''),"\n","(solo-modes mode)"].join('')));
}

cljs.core.reset_BANG_(self__.solo_mode,mode);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null, ));
}));

(cljs.core.async.t_cljs$core$async15363.getBasis = (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"change","change",477485025,null),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"meta15364","meta15364",1426810233,null)], null);
}));

(cljs.core.async.t_cljs$core$async15363.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async15363.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async15363");

(cljs.core.async.t_cljs$core$async15363.cljs$lang$ctorPrWriter = (function (this__5287__auto__,writer__5288__auto__,opt__5289__auto__){
return cljs.core._write(writer__5288__auto__,"cljs.core.async/t_cljs$core$async15363");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async15363.
 */
cljs.core.async.__GT_t_cljs$core$async15363 = (function cljs$core$async$__GT_t_cljs$core$async15363(change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta15364){
return (new cljs.core.async.t_cljs$core$async15363(change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta15364));
});


/**
 * Creates and returns a mix of one or more input channels which will
 *   be put on the supplied out channel. Input sources can be added to
 *   the mix with 'admix', and removed with 'unmix'. A mix supports
 *   soloing, muting and pausing multiple inputs atomically using
 *   'toggle', and can solo using either muting or pausing as determined
 *   by 'solo-mode'.
 * 
 *   Each channel can have zero or more boolean modes set via 'toggle':
 * 
 *   :solo - when true, only this (ond other soloed) channel(s) will appear
 *        in the mix output channel. :mute and :pause states of soloed
 *        channels are ignored. If solo-mode is :mute, non-soloed
 *        channels are muted, if :pause, non-soloed channels are
 *        paused.
 * 
 *   :mute - muted channels will have their contents consumed but not included in the mix
 *   :pause - paused channels will not have their contents consumed (and thus also not included in the mix)
 */
cljs.core.async.mix = (function cljs$core$async$mix(out){
var cs = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var solo_modes = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pause","pause",-2095325672),null,new cljs.core.Keyword(null,"mute","mute",1151223646),null], null), null);
var attrs = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(solo_modes,new cljs.core.Keyword(null,"solo","solo",-316350075));
var solo_mode = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"mute","mute",1151223646));
var change = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(cljs.core.async.sliding_buffer((1)));
var changed = (function (){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(change,true);
});
var pick = (function (attr,chs){
return cljs.core.reduce_kv((function (ret,c,v){
if(cljs.core.truth_((attr.cljs$core$IFn$_invoke$arity$1 ? attr.cljs$core$IFn$_invoke$arity$1(v) : attr.call(null, v)))){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ret,c);
} else {
return ret;
}
}),cljs.core.PersistentHashSet.EMPTY,chs);
});
var calc_state = (function (){
var chs = cljs.core.deref(cs);
var mode = cljs.core.deref(solo_mode);
var solos = pick(new cljs.core.Keyword(null,"solo","solo",-316350075),chs);
var pauses = pick(new cljs.core.Keyword(null,"pause","pause",-2095325672),chs);
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"solos","solos",1441458643),solos,new cljs.core.Keyword(null,"mutes","mutes",1068806309),pick(new cljs.core.Keyword(null,"mute","mute",1151223646),chs),new cljs.core.Keyword(null,"reads","reads",-1215067361),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(((((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(mode,new cljs.core.Keyword(null,"pause","pause",-2095325672))) && ((!(cljs.core.empty_QMARK_(solos))))))?cljs.core.vec(solos):cljs.core.vec(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(pauses,cljs.core.keys(chs)))),change)], null);
});
var m = (new cljs.core.async.t_cljs$core$async15363(change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
var c__13768__auto___17857 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__13770__auto__ = (function (){var switch__13478__auto__ = (function (state_15472){
var state_val_15473 = (state_15472[(1)]);
if((state_val_15473 === (7))){
var inst_15428 = (state_15472[(2)]);
var state_15472__$1 = state_15472;
if(cljs.core.truth_(inst_15428)){
var statearr_15483_17858 = state_15472__$1;
(statearr_15483_17858[(1)] = (8));

} else {
var statearr_15485_17859 = state_15472__$1;
(statearr_15485_17859[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15473 === (20))){
var inst_15418 = (state_15472[(7)]);
var state_15472__$1 = state_15472;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_15472__$1,(23),out,inst_15418);
} else {
if((state_val_15473 === (1))){
var inst_15395 = calc_state();
var inst_15399 = cljs.core.__destructure_map(inst_15395);
var inst_15401 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_15399,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_15402 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_15399,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_15403 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_15399,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_15404 = inst_15395;
var state_15472__$1 = (function (){var statearr_15490 = state_15472;
(statearr_15490[(8)] = inst_15401);

(statearr_15490[(9)] = inst_15403);

(statearr_15490[(10)] = inst_15404);

(statearr_15490[(11)] = inst_15402);

return statearr_15490;
})();
var statearr_15492_17860 = state_15472__$1;
(statearr_15492_17860[(2)] = null);

(statearr_15492_17860[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15473 === (24))){
var inst_15407 = (state_15472[(12)]);
var inst_15404 = inst_15407;
var state_15472__$1 = (function (){var statearr_15497 = state_15472;
(statearr_15497[(10)] = inst_15404);

return statearr_15497;
})();
var statearr_15499_17873 = state_15472__$1;
(statearr_15499_17873[(2)] = null);

(statearr_15499_17873[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15473 === (4))){
var inst_15423 = (state_15472[(13)]);
var inst_15418 = (state_15472[(7)]);
var inst_15415 = (state_15472[(2)]);
var inst_15418__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_15415,(0),null);
var inst_15420 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_15415,(1),null);
var inst_15423__$1 = (inst_15418__$1 == null);
var state_15472__$1 = (function (){var statearr_15503 = state_15472;
(statearr_15503[(13)] = inst_15423__$1);

(statearr_15503[(7)] = inst_15418__$1);

(statearr_15503[(14)] = inst_15420);

return statearr_15503;
})();
if(cljs.core.truth_(inst_15423__$1)){
var statearr_15504_17877 = state_15472__$1;
(statearr_15504_17877[(1)] = (5));

} else {
var statearr_15505_17878 = state_15472__$1;
(statearr_15505_17878[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15473 === (15))){
var inst_15408 = (state_15472[(15)]);
var inst_15445 = (state_15472[(16)]);
var inst_15445__$1 = cljs.core.empty_QMARK_(inst_15408);
var state_15472__$1 = (function (){var statearr_15513 = state_15472;
(statearr_15513[(16)] = inst_15445__$1);

return statearr_15513;
})();
if(inst_15445__$1){
var statearr_15515_17885 = state_15472__$1;
(statearr_15515_17885[(1)] = (17));

} else {
var statearr_15516_17886 = state_15472__$1;
(statearr_15516_17886[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15473 === (21))){
var inst_15407 = (state_15472[(12)]);
var inst_15404 = inst_15407;
var state_15472__$1 = (function (){var statearr_15517 = state_15472;
(statearr_15517[(10)] = inst_15404);

return statearr_15517;
})();
var statearr_15518_17887 = state_15472__$1;
(statearr_15518_17887[(2)] = null);

(statearr_15518_17887[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15473 === (13))){
var inst_15435 = (state_15472[(2)]);
var inst_15439 = calc_state();
var inst_15404 = inst_15439;
var state_15472__$1 = (function (){var statearr_15520 = state_15472;
(statearr_15520[(10)] = inst_15404);

(statearr_15520[(17)] = inst_15435);

return statearr_15520;
})();
var statearr_15521_17888 = state_15472__$1;
(statearr_15521_17888[(2)] = null);

(statearr_15521_17888[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15473 === (22))){
var inst_15466 = (state_15472[(2)]);
var state_15472__$1 = state_15472;
var statearr_15525_17889 = state_15472__$1;
(statearr_15525_17889[(2)] = inst_15466);

(statearr_15525_17889[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15473 === (6))){
var inst_15420 = (state_15472[(14)]);
var inst_15426 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_15420,change);
var state_15472__$1 = state_15472;
var statearr_15529_17890 = state_15472__$1;
(statearr_15529_17890[(2)] = inst_15426);

(statearr_15529_17890[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15473 === (25))){
var state_15472__$1 = state_15472;
var statearr_15531_17891 = state_15472__$1;
(statearr_15531_17891[(2)] = null);

(statearr_15531_17891[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15473 === (17))){
var inst_15409 = (state_15472[(18)]);
var inst_15420 = (state_15472[(14)]);
var inst_15447 = (inst_15409.cljs$core$IFn$_invoke$arity$1 ? inst_15409.cljs$core$IFn$_invoke$arity$1(inst_15420) : inst_15409.call(null, inst_15420));
var inst_15448 = cljs.core.not(inst_15447);
var state_15472__$1 = state_15472;
var statearr_15536_17892 = state_15472__$1;
(statearr_15536_17892[(2)] = inst_15448);

(statearr_15536_17892[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15473 === (3))){
var inst_15470 = (state_15472[(2)]);
var state_15472__$1 = state_15472;
return cljs.core.async.impl.ioc_helpers.return_chan(state_15472__$1,inst_15470);
} else {
if((state_val_15473 === (12))){
var state_15472__$1 = state_15472;
var statearr_15549_17893 = state_15472__$1;
(statearr_15549_17893[(2)] = null);

(statearr_15549_17893[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15473 === (2))){
var inst_15407 = (state_15472[(12)]);
var inst_15404 = (state_15472[(10)]);
var inst_15407__$1 = cljs.core.__destructure_map(inst_15404);
var inst_15408 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_15407__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_15409 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_15407__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_15410 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_15407__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_15472__$1 = (function (){var statearr_15555 = state_15472;
(statearr_15555[(18)] = inst_15409);

(statearr_15555[(15)] = inst_15408);

(statearr_15555[(12)] = inst_15407__$1);

return statearr_15555;
})();
return cljs.core.async.ioc_alts_BANG_(state_15472__$1,(4),inst_15410);
} else {
if((state_val_15473 === (23))){
var inst_15457 = (state_15472[(2)]);
var state_15472__$1 = state_15472;
if(cljs.core.truth_(inst_15457)){
var statearr_15566_17894 = state_15472__$1;
(statearr_15566_17894[(1)] = (24));

} else {
var statearr_15567_17895 = state_15472__$1;
(statearr_15567_17895[(1)] = (25));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15473 === (19))){
var inst_15451 = (state_15472[(2)]);
var state_15472__$1 = state_15472;
var statearr_15573_17896 = state_15472__$1;
(statearr_15573_17896[(2)] = inst_15451);

(statearr_15573_17896[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15473 === (11))){
var inst_15420 = (state_15472[(14)]);
var inst_15432 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(cs,cljs.core.dissoc,inst_15420);
var state_15472__$1 = state_15472;
var statearr_15575_17897 = state_15472__$1;
(statearr_15575_17897[(2)] = inst_15432);

(statearr_15575_17897[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15473 === (9))){
var inst_15442 = (state_15472[(19)]);
var inst_15408 = (state_15472[(15)]);
var inst_15420 = (state_15472[(14)]);
var inst_15442__$1 = (inst_15408.cljs$core$IFn$_invoke$arity$1 ? inst_15408.cljs$core$IFn$_invoke$arity$1(inst_15420) : inst_15408.call(null, inst_15420));
var state_15472__$1 = (function (){var statearr_15580 = state_15472;
(statearr_15580[(19)] = inst_15442__$1);

return statearr_15580;
})();
if(cljs.core.truth_(inst_15442__$1)){
var statearr_15583_17898 = state_15472__$1;
(statearr_15583_17898[(1)] = (14));

} else {
var statearr_15586_17899 = state_15472__$1;
(statearr_15586_17899[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15473 === (5))){
var inst_15423 = (state_15472[(13)]);
var state_15472__$1 = state_15472;
var statearr_15588_17900 = state_15472__$1;
(statearr_15588_17900[(2)] = inst_15423);

(statearr_15588_17900[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15473 === (14))){
var inst_15442 = (state_15472[(19)]);
var state_15472__$1 = state_15472;
var statearr_15592_17901 = state_15472__$1;
(statearr_15592_17901[(2)] = inst_15442);

(statearr_15592_17901[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15473 === (26))){
var inst_15462 = (state_15472[(2)]);
var state_15472__$1 = state_15472;
var statearr_15596_17908 = state_15472__$1;
(statearr_15596_17908[(2)] = inst_15462);

(statearr_15596_17908[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15473 === (16))){
var inst_15453 = (state_15472[(2)]);
var state_15472__$1 = state_15472;
if(cljs.core.truth_(inst_15453)){
var statearr_15601_17909 = state_15472__$1;
(statearr_15601_17909[(1)] = (20));

} else {
var statearr_15602_17910 = state_15472__$1;
(statearr_15602_17910[(1)] = (21));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15473 === (10))){
var inst_15468 = (state_15472[(2)]);
var state_15472__$1 = state_15472;
var statearr_15604_17911 = state_15472__$1;
(statearr_15604_17911[(2)] = inst_15468);

(statearr_15604_17911[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15473 === (18))){
var inst_15445 = (state_15472[(16)]);
var state_15472__$1 = state_15472;
var statearr_15608_17912 = state_15472__$1;
(statearr_15608_17912[(2)] = inst_15445);

(statearr_15608_17912[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15473 === (8))){
var inst_15418 = (state_15472[(7)]);
var inst_15430 = (inst_15418 == null);
var state_15472__$1 = state_15472;
if(cljs.core.truth_(inst_15430)){
var statearr_15611_17913 = state_15472__$1;
(statearr_15611_17913[(1)] = (11));

} else {
var statearr_15613_17914 = state_15472__$1;
(statearr_15613_17914[(1)] = (12));

}

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
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$mix_$_state_machine__13479__auto__ = null;
var cljs$core$async$mix_$_state_machine__13479__auto____0 = (function (){
var statearr_15625 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_15625[(0)] = cljs$core$async$mix_$_state_machine__13479__auto__);

(statearr_15625[(1)] = (1));

return statearr_15625;
});
var cljs$core$async$mix_$_state_machine__13479__auto____1 = (function (state_15472){
while(true){
var ret_value__13480__auto__ = (function (){try{while(true){
var result__13481__auto__ = switch__13478__auto__(state_15472);
if(cljs.core.keyword_identical_QMARK_(result__13481__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__13481__auto__;
}
break;
}
}catch (e15628){var ex__13482__auto__ = e15628;
var statearr_15630_17915 = state_15472;
(statearr_15630_17915[(2)] = ex__13482__auto__);


if(cljs.core.seq((state_15472[(4)]))){
var statearr_15633_17916 = state_15472;
(statearr_15633_17916[(1)] = cljs.core.first((state_15472[(4)])));

} else {
throw ex__13482__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__13480__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__17917 = state_15472;
state_15472 = G__17917;
continue;
} else {
return ret_value__13480__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__13479__auto__ = function(state_15472){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__13479__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__13479__auto____1.call(this,state_15472);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__13479__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__13479__auto____0;
cljs$core$async$mix_$_state_machine__13479__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__13479__auto____1;
return cljs$core$async$mix_$_state_machine__13479__auto__;
})()
})();
var state__13771__auto__ = (function (){var statearr_15637 = f__13770__auto__();
(statearr_15637[(6)] = c__13768__auto___17857);

return statearr_15637;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__13771__auto__);
}));


return m;
});
/**
 * Adds ch as an input to the mix
 */
cljs.core.async.admix = (function cljs$core$async$admix(mix,ch){
return cljs.core.async.admix_STAR_(mix,ch);
});
/**
 * Removes ch as an input to the mix
 */
cljs.core.async.unmix = (function cljs$core$async$unmix(mix,ch){
return cljs.core.async.unmix_STAR_(mix,ch);
});
/**
 * removes all inputs from the mix
 */
cljs.core.async.unmix_all = (function cljs$core$async$unmix_all(mix){
return cljs.core.async.unmix_all_STAR_(mix);
});
/**
 * Atomically sets the state(s) of one or more channels in a mix. The
 *   state map is a map of channels -> channel-state-map. A
 *   channel-state-map is a map of attrs -> boolean, where attr is one or
 *   more of :mute, :pause or :solo. Any states supplied are merged with
 *   the current state.
 * 
 *   Note that channels can be added to a mix via toggle, which can be
 *   used to add channels in a particular (e.g. paused) state.
 */
cljs.core.async.toggle = (function cljs$core$async$toggle(mix,state_map){
return cljs.core.async.toggle_STAR_(mix,state_map);
});
/**
 * Sets the solo mode of the mix. mode must be one of :mute or :pause
 */
cljs.core.async.solo_mode = (function cljs$core$async$solo_mode(mix,mode){
return cljs.core.async.solo_mode_STAR_(mix,mode);
});

/**
 * @interface
 */
cljs.core.async.Pub = function(){};

var cljs$core$async$Pub$sub_STAR_$dyn_17918 = (function (p,v,ch,close_QMARK_){
var x__5350__auto__ = (((p == null))?null:p);
var m__5351__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__5350__auto__)]);
if((!((m__5351__auto__ == null)))){
return (m__5351__auto__.cljs$core$IFn$_invoke$arity$4 ? m__5351__auto__.cljs$core$IFn$_invoke$arity$4(p,v,ch,close_QMARK_) : m__5351__auto__.call(null, p,v,ch,close_QMARK_));
} else {
var m__5349__auto__ = (cljs.core.async.sub_STAR_["_"]);
if((!((m__5349__auto__ == null)))){
return (m__5349__auto__.cljs$core$IFn$_invoke$arity$4 ? m__5349__auto__.cljs$core$IFn$_invoke$arity$4(p,v,ch,close_QMARK_) : m__5349__auto__.call(null, p,v,ch,close_QMARK_));
} else {
throw cljs.core.missing_protocol("Pub.sub*",p);
}
}
});
cljs.core.async.sub_STAR_ = (function cljs$core$async$sub_STAR_(p,v,ch,close_QMARK_){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$sub_STAR_$arity$4 == null)))))){
return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else {
return cljs$core$async$Pub$sub_STAR_$dyn_17918(p,v,ch,close_QMARK_);
}
});

var cljs$core$async$Pub$unsub_STAR_$dyn_17919 = (function (p,v,ch){
var x__5350__auto__ = (((p == null))?null:p);
var m__5351__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__5350__auto__)]);
if((!((m__5351__auto__ == null)))){
return (m__5351__auto__.cljs$core$IFn$_invoke$arity$3 ? m__5351__auto__.cljs$core$IFn$_invoke$arity$3(p,v,ch) : m__5351__auto__.call(null, p,v,ch));
} else {
var m__5349__auto__ = (cljs.core.async.unsub_STAR_["_"]);
if((!((m__5349__auto__ == null)))){
return (m__5349__auto__.cljs$core$IFn$_invoke$arity$3 ? m__5349__auto__.cljs$core$IFn$_invoke$arity$3(p,v,ch) : m__5349__auto__.call(null, p,v,ch));
} else {
throw cljs.core.missing_protocol("Pub.unsub*",p);
}
}
});
cljs.core.async.unsub_STAR_ = (function cljs$core$async$unsub_STAR_(p,v,ch){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_STAR_$arity$3 == null)))))){
return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else {
return cljs$core$async$Pub$unsub_STAR_$dyn_17919(p,v,ch);
}
});

var cljs$core$async$Pub$unsub_all_STAR_$dyn_17927 = (function() {
var G__17928 = null;
var G__17928__1 = (function (p){
var x__5350__auto__ = (((p == null))?null:p);
var m__5351__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__5350__auto__)]);
if((!((m__5351__auto__ == null)))){
return (m__5351__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5351__auto__.cljs$core$IFn$_invoke$arity$1(p) : m__5351__auto__.call(null, p));
} else {
var m__5349__auto__ = (cljs.core.async.unsub_all_STAR_["_"]);
if((!((m__5349__auto__ == null)))){
return (m__5349__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5349__auto__.cljs$core$IFn$_invoke$arity$1(p) : m__5349__auto__.call(null, p));
} else {
throw cljs.core.missing_protocol("Pub.unsub-all*",p);
}
}
});
var G__17928__2 = (function (p,v){
var x__5350__auto__ = (((p == null))?null:p);
var m__5351__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__5350__auto__)]);
if((!((m__5351__auto__ == null)))){
return (m__5351__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5351__auto__.cljs$core$IFn$_invoke$arity$2(p,v) : m__5351__auto__.call(null, p,v));
} else {
var m__5349__auto__ = (cljs.core.async.unsub_all_STAR_["_"]);
if((!((m__5349__auto__ == null)))){
return (m__5349__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5349__auto__.cljs$core$IFn$_invoke$arity$2(p,v) : m__5349__auto__.call(null, p,v));
} else {
throw cljs.core.missing_protocol("Pub.unsub-all*",p);
}
}
});
G__17928 = function(p,v){
switch(arguments.length){
case 1:
return G__17928__1.call(this,p);
case 2:
return G__17928__2.call(this,p,v);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__17928.cljs$core$IFn$_invoke$arity$1 = G__17928__1;
G__17928.cljs$core$IFn$_invoke$arity$2 = G__17928__2;
return G__17928;
})()
;
cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var G__15701 = arguments.length;
switch (G__15701) {
case 1:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (p){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$1 == null)))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else {
return cljs$core$async$Pub$unsub_all_STAR_$dyn_17927(p);
}
}));

(cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (p,v){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$2 == null)))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else {
return cljs$core$async$Pub$unsub_all_STAR_$dyn_17927(p,v);
}
}));

(cljs.core.async.unsub_all_STAR_.cljs$lang$maxFixedArity = 2);



/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async15720 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta15721){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta15721 = meta15721;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async15720.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_15722,meta15721__$1){
var self__ = this;
var _15722__$1 = this;
return (new cljs.core.async.t_cljs$core$async15720(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta15721__$1));
}));

(cljs.core.async.t_cljs$core$async15720.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_15722){
var self__ = this;
var _15722__$1 = this;
return self__.meta15721;
}));

(cljs.core.async.t_cljs$core$async15720.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async15720.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async15720.prototype.cljs$core$async$Pub$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async15720.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = (self__.ensure_mult.cljs$core$IFn$_invoke$arity$1 ? self__.ensure_mult.cljs$core$IFn$_invoke$arity$1(topic) : self__.ensure_mult.call(null, topic));
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(m,ch__$1,close_QMARK_);
}));

(cljs.core.async.t_cljs$core$async15720.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = (function (p,topic,ch__$1){
var self__ = this;
var p__$1 = this;
var temp__5804__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(self__.mults),topic);
if(cljs.core.truth_(temp__5804__auto__)){
var m = temp__5804__auto__;
return cljs.core.async.untap(m,ch__$1);
} else {
return null;
}
}));

(cljs.core.async.t_cljs$core$async15720.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_(self__.mults,cljs.core.PersistentArrayMap.EMPTY);
}));

(cljs.core.async.t_cljs$core$async15720.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.mults,cljs.core.dissoc,topic);
}));

(cljs.core.async.t_cljs$core$async15720.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta15721","meta15721",174841331,null)], null);
}));

(cljs.core.async.t_cljs$core$async15720.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async15720.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async15720");

(cljs.core.async.t_cljs$core$async15720.cljs$lang$ctorPrWriter = (function (this__5287__auto__,writer__5288__auto__,opt__5289__auto__){
return cljs.core._write(writer__5288__auto__,"cljs.core.async/t_cljs$core$async15720");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async15720.
 */
cljs.core.async.__GT_t_cljs$core$async15720 = (function cljs$core$async$__GT_t_cljs$core$async15720(ch,topic_fn,buf_fn,mults,ensure_mult,meta15721){
return (new cljs.core.async.t_cljs$core$async15720(ch,topic_fn,buf_fn,mults,ensure_mult,meta15721));
});


/**
 * Creates and returns a pub(lication) of the supplied channel,
 *   partitioned into topics by the topic-fn. topic-fn will be applied to
 *   each value on the channel and the result will determine the 'topic'
 *   on which that value will be put. Channels can be subscribed to
 *   receive copies of topics using 'sub', and unsubscribed using
 *   'unsub'. Each topic will be handled by an internal mult on a
 *   dedicated channel. By default these internal channels are
 *   unbuffered, but a buf-fn can be supplied which, given a topic,
 *   creates a buffer with desired properties.
 * 
 *   Each item is distributed to all subs in parallel and synchronously,
 *   i.e. each sub must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow subs from holding up the pub.
 * 
 *   Items received when there are no matching subs get dropped.
 * 
 *   Note that if buf-fns are used then each topic is handled
 *   asynchronously, i.e. if a channel is subscribed to more than one
 *   topic it should not expect them to be interleaved identically with
 *   the source.
 */
cljs.core.async.pub = (function cljs$core$async$pub(var_args){
var G__15716 = arguments.length;
switch (G__15716) {
case 2:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2 = (function (ch,topic_fn){
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3(ch,topic_fn,cljs.core.constantly(null));
}));

(cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3 = (function (ch,topic_fn,buf_fn){
var mults = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var ensure_mult = (function (topic){
var or__5002__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(mults),topic);
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(mults,(function (p1__15712_SHARP_){
if(cljs.core.truth_((p1__15712_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__15712_SHARP_.cljs$core$IFn$_invoke$arity$1(topic) : p1__15712_SHARP_.call(null, topic)))){
return p1__15712_SHARP_;
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__15712_SHARP_,topic,cljs.core.async.mult(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((buf_fn.cljs$core$IFn$_invoke$arity$1 ? buf_fn.cljs$core$IFn$_invoke$arity$1(topic) : buf_fn.call(null, topic)))));
}
})),topic);
}
});
var p = (new cljs.core.async.t_cljs$core$async15720(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
var c__13768__auto___17943 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__13770__auto__ = (function (){var switch__13478__auto__ = (function (state_15850){
var state_val_15852 = (state_15850[(1)]);
if((state_val_15852 === (7))){
var inst_15845 = (state_15850[(2)]);
var state_15850__$1 = state_15850;
var statearr_15862_17944 = state_15850__$1;
(statearr_15862_17944[(2)] = inst_15845);

(statearr_15862_17944[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15852 === (20))){
var state_15850__$1 = state_15850;
var statearr_15867_17945 = state_15850__$1;
(statearr_15867_17945[(2)] = null);

(statearr_15867_17945[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15852 === (1))){
var state_15850__$1 = state_15850;
var statearr_15868_17946 = state_15850__$1;
(statearr_15868_17946[(2)] = null);

(statearr_15868_17946[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15852 === (24))){
var inst_15823 = (state_15850[(7)]);
var inst_15837 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(mults,cljs.core.dissoc,inst_15823);
var state_15850__$1 = state_15850;
var statearr_15875_17947 = state_15850__$1;
(statearr_15875_17947[(2)] = inst_15837);

(statearr_15875_17947[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15852 === (4))){
var inst_15764 = (state_15850[(8)]);
var inst_15764__$1 = (state_15850[(2)]);
var inst_15765 = (inst_15764__$1 == null);
var state_15850__$1 = (function (){var statearr_15877 = state_15850;
(statearr_15877[(8)] = inst_15764__$1);

return statearr_15877;
})();
if(cljs.core.truth_(inst_15765)){
var statearr_15882_17948 = state_15850__$1;
(statearr_15882_17948[(1)] = (5));

} else {
var statearr_15883_17949 = state_15850__$1;
(statearr_15883_17949[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15852 === (15))){
var inst_15816 = (state_15850[(2)]);
var state_15850__$1 = state_15850;
var statearr_15886_17950 = state_15850__$1;
(statearr_15886_17950[(2)] = inst_15816);

(statearr_15886_17950[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15852 === (21))){
var inst_15842 = (state_15850[(2)]);
var state_15850__$1 = (function (){var statearr_15887 = state_15850;
(statearr_15887[(9)] = inst_15842);

return statearr_15887;
})();
var statearr_15888_17951 = state_15850__$1;
(statearr_15888_17951[(2)] = null);

(statearr_15888_17951[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15852 === (13))){
var inst_15797 = (state_15850[(10)]);
var inst_15799 = cljs.core.chunked_seq_QMARK_(inst_15797);
var state_15850__$1 = state_15850;
if(inst_15799){
var statearr_15891_17952 = state_15850__$1;
(statearr_15891_17952[(1)] = (16));

} else {
var statearr_15892_17953 = state_15850__$1;
(statearr_15892_17953[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15852 === (22))){
var inst_15833 = (state_15850[(2)]);
var state_15850__$1 = state_15850;
if(cljs.core.truth_(inst_15833)){
var statearr_15893_17957 = state_15850__$1;
(statearr_15893_17957[(1)] = (23));

} else {
var statearr_15895_17958 = state_15850__$1;
(statearr_15895_17958[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15852 === (6))){
var inst_15826 = (state_15850[(11)]);
var inst_15823 = (state_15850[(7)]);
var inst_15764 = (state_15850[(8)]);
var inst_15823__$1 = (topic_fn.cljs$core$IFn$_invoke$arity$1 ? topic_fn.cljs$core$IFn$_invoke$arity$1(inst_15764) : topic_fn.call(null, inst_15764));
var inst_15825 = cljs.core.deref(mults);
var inst_15826__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_15825,inst_15823__$1);
var state_15850__$1 = (function (){var statearr_15900 = state_15850;
(statearr_15900[(11)] = inst_15826__$1);

(statearr_15900[(7)] = inst_15823__$1);

return statearr_15900;
})();
if(cljs.core.truth_(inst_15826__$1)){
var statearr_15901_17959 = state_15850__$1;
(statearr_15901_17959[(1)] = (19));

} else {
var statearr_15905_17960 = state_15850__$1;
(statearr_15905_17960[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15852 === (25))){
var inst_15839 = (state_15850[(2)]);
var state_15850__$1 = state_15850;
var statearr_15907_17961 = state_15850__$1;
(statearr_15907_17961[(2)] = inst_15839);

(statearr_15907_17961[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15852 === (17))){
var inst_15797 = (state_15850[(10)]);
var inst_15807 = cljs.core.first(inst_15797);
var inst_15808 = cljs.core.async.muxch_STAR_(inst_15807);
var inst_15809 = cljs.core.async.close_BANG_(inst_15808);
var inst_15810 = cljs.core.next(inst_15797);
var inst_15776 = inst_15810;
var inst_15777 = null;
var inst_15779 = (0);
var inst_15780 = (0);
var state_15850__$1 = (function (){var statearr_15909 = state_15850;
(statearr_15909[(12)] = inst_15777);

(statearr_15909[(13)] = inst_15809);

(statearr_15909[(14)] = inst_15776);

(statearr_15909[(15)] = inst_15779);

(statearr_15909[(16)] = inst_15780);

return statearr_15909;
})();
var statearr_15911_17962 = state_15850__$1;
(statearr_15911_17962[(2)] = null);

(statearr_15911_17962[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15852 === (3))){
var inst_15847 = (state_15850[(2)]);
var state_15850__$1 = state_15850;
return cljs.core.async.impl.ioc_helpers.return_chan(state_15850__$1,inst_15847);
} else {
if((state_val_15852 === (12))){
var inst_15818 = (state_15850[(2)]);
var state_15850__$1 = state_15850;
var statearr_15916_17963 = state_15850__$1;
(statearr_15916_17963[(2)] = inst_15818);

(statearr_15916_17963[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15852 === (2))){
var state_15850__$1 = state_15850;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_15850__$1,(4),ch);
} else {
if((state_val_15852 === (23))){
var state_15850__$1 = state_15850;
var statearr_15917_17964 = state_15850__$1;
(statearr_15917_17964[(2)] = null);

(statearr_15917_17964[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15852 === (19))){
var inst_15826 = (state_15850[(11)]);
var inst_15764 = (state_15850[(8)]);
var inst_15831 = cljs.core.async.muxch_STAR_(inst_15826);
var state_15850__$1 = state_15850;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_15850__$1,(22),inst_15831,inst_15764);
} else {
if((state_val_15852 === (11))){
var inst_15776 = (state_15850[(14)]);
var inst_15797 = (state_15850[(10)]);
var inst_15797__$1 = cljs.core.seq(inst_15776);
var state_15850__$1 = (function (){var statearr_15925 = state_15850;
(statearr_15925[(10)] = inst_15797__$1);

return statearr_15925;
})();
if(inst_15797__$1){
var statearr_15926_17969 = state_15850__$1;
(statearr_15926_17969[(1)] = (13));

} else {
var statearr_15927_17970 = state_15850__$1;
(statearr_15927_17970[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15852 === (9))){
var inst_15820 = (state_15850[(2)]);
var state_15850__$1 = state_15850;
var statearr_15928_17971 = state_15850__$1;
(statearr_15928_17971[(2)] = inst_15820);

(statearr_15928_17971[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15852 === (5))){
var inst_15773 = cljs.core.deref(mults);
var inst_15774 = cljs.core.vals(inst_15773);
var inst_15775 = cljs.core.seq(inst_15774);
var inst_15776 = inst_15775;
var inst_15777 = null;
var inst_15779 = (0);
var inst_15780 = (0);
var state_15850__$1 = (function (){var statearr_15936 = state_15850;
(statearr_15936[(12)] = inst_15777);

(statearr_15936[(14)] = inst_15776);

(statearr_15936[(15)] = inst_15779);

(statearr_15936[(16)] = inst_15780);

return statearr_15936;
})();
var statearr_15937_17972 = state_15850__$1;
(statearr_15937_17972[(2)] = null);

(statearr_15937_17972[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15852 === (14))){
var state_15850__$1 = state_15850;
var statearr_15944_17973 = state_15850__$1;
(statearr_15944_17973[(2)] = null);

(statearr_15944_17973[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15852 === (16))){
var inst_15797 = (state_15850[(10)]);
var inst_15801 = cljs.core.chunk_first(inst_15797);
var inst_15802 = cljs.core.chunk_rest(inst_15797);
var inst_15803 = cljs.core.count(inst_15801);
var inst_15776 = inst_15802;
var inst_15777 = inst_15801;
var inst_15779 = inst_15803;
var inst_15780 = (0);
var state_15850__$1 = (function (){var statearr_15946 = state_15850;
(statearr_15946[(12)] = inst_15777);

(statearr_15946[(14)] = inst_15776);

(statearr_15946[(15)] = inst_15779);

(statearr_15946[(16)] = inst_15780);

return statearr_15946;
})();
var statearr_15947_17975 = state_15850__$1;
(statearr_15947_17975[(2)] = null);

(statearr_15947_17975[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15852 === (10))){
var inst_15777 = (state_15850[(12)]);
var inst_15776 = (state_15850[(14)]);
var inst_15779 = (state_15850[(15)]);
var inst_15780 = (state_15850[(16)]);
var inst_15787 = cljs.core._nth(inst_15777,inst_15780);
var inst_15789 = cljs.core.async.muxch_STAR_(inst_15787);
var inst_15790 = cljs.core.async.close_BANG_(inst_15789);
var inst_15791 = (inst_15780 + (1));
var tmp15940 = inst_15777;
var tmp15941 = inst_15776;
var tmp15942 = inst_15779;
var inst_15776__$1 = tmp15941;
var inst_15777__$1 = tmp15940;
var inst_15779__$1 = tmp15942;
var inst_15780__$1 = inst_15791;
var state_15850__$1 = (function (){var statearr_15950 = state_15850;
(statearr_15950[(12)] = inst_15777__$1);

(statearr_15950[(14)] = inst_15776__$1);

(statearr_15950[(15)] = inst_15779__$1);

(statearr_15950[(17)] = inst_15790);

(statearr_15950[(16)] = inst_15780__$1);

return statearr_15950;
})();
var statearr_15951_17980 = state_15850__$1;
(statearr_15951_17980[(2)] = null);

(statearr_15951_17980[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15852 === (18))){
var inst_15813 = (state_15850[(2)]);
var state_15850__$1 = state_15850;
var statearr_15956_17981 = state_15850__$1;
(statearr_15956_17981[(2)] = inst_15813);

(statearr_15956_17981[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15852 === (8))){
var inst_15779 = (state_15850[(15)]);
var inst_15780 = (state_15850[(16)]);
var inst_15782 = (inst_15780 < inst_15779);
var inst_15783 = inst_15782;
var state_15850__$1 = state_15850;
if(cljs.core.truth_(inst_15783)){
var statearr_15961_17982 = state_15850__$1;
(statearr_15961_17982[(1)] = (10));

} else {
var statearr_15962_17983 = state_15850__$1;
(statearr_15962_17983[(1)] = (11));

}

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
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__13479__auto__ = null;
var cljs$core$async$state_machine__13479__auto____0 = (function (){
var statearr_15967 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_15967[(0)] = cljs$core$async$state_machine__13479__auto__);

(statearr_15967[(1)] = (1));

return statearr_15967;
});
var cljs$core$async$state_machine__13479__auto____1 = (function (state_15850){
while(true){
var ret_value__13480__auto__ = (function (){try{while(true){
var result__13481__auto__ = switch__13478__auto__(state_15850);
if(cljs.core.keyword_identical_QMARK_(result__13481__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__13481__auto__;
}
break;
}
}catch (e15972){var ex__13482__auto__ = e15972;
var statearr_15977_17984 = state_15850;
(statearr_15977_17984[(2)] = ex__13482__auto__);


if(cljs.core.seq((state_15850[(4)]))){
var statearr_15978_17989 = state_15850;
(statearr_15978_17989[(1)] = cljs.core.first((state_15850[(4)])));

} else {
throw ex__13482__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__13480__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__17990 = state_15850;
state_15850 = G__17990;
continue;
} else {
return ret_value__13480__auto__;
}
break;
}
});
cljs$core$async$state_machine__13479__auto__ = function(state_15850){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__13479__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__13479__auto____1.call(this,state_15850);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__13479__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__13479__auto____0;
cljs$core$async$state_machine__13479__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__13479__auto____1;
return cljs$core$async$state_machine__13479__auto__;
})()
})();
var state__13771__auto__ = (function (){var statearr_15986 = f__13770__auto__();
(statearr_15986[(6)] = c__13768__auto___17943);

return statearr_15986;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__13771__auto__);
}));


return p;
}));

(cljs.core.async.pub.cljs$lang$maxFixedArity = 3);

/**
 * Subscribes a channel to a topic of a pub.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.sub = (function cljs$core$async$sub(var_args){
var G__15992 = arguments.length;
switch (G__15992) {
case 3:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3 = (function (p,topic,ch){
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4(p,topic,ch,true);
}));

(cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4 = (function (p,topic,ch,close_QMARK_){
return cljs.core.async.sub_STAR_(p,topic,ch,close_QMARK_);
}));

(cljs.core.async.sub.cljs$lang$maxFixedArity = 4);

/**
 * Unsubscribes a channel from a topic of a pub
 */
cljs.core.async.unsub = (function cljs$core$async$unsub(p,topic,ch){
return cljs.core.async.unsub_STAR_(p,topic,ch);
});
/**
 * Unsubscribes all channels from a pub, or a topic of a pub
 */
cljs.core.async.unsub_all = (function cljs$core$async$unsub_all(var_args){
var G__16004 = arguments.length;
switch (G__16004) {
case 1:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1 = (function (p){
return cljs.core.async.unsub_all_STAR_(p);
}));

(cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2 = (function (p,topic){
return cljs.core.async.unsub_all_STAR_(p,topic);
}));

(cljs.core.async.unsub_all.cljs$lang$maxFixedArity = 2);

/**
 * Takes a function and a collection of source channels, and returns a
 *   channel which contains the values produced by applying f to the set
 *   of first items taken from each source channel, followed by applying
 *   f to the set of second items from each channel, until any one of the
 *   channels is closed, at which point the output channel will be
 *   closed. The returned channel will be unbuffered by default, or a
 *   buf-or-n can be supplied
 */
cljs.core.async.map = (function cljs$core$async$map(var_args){
var G__16021 = arguments.length;
switch (G__16021) {
case 2:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.map.cljs$core$IFn$_invoke$arity$2 = (function (f,chs){
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3(f,chs,null);
}));

(cljs.core.async.map.cljs$core$IFn$_invoke$arity$3 = (function (f,chs,buf_or_n){
var chs__$1 = cljs.core.vec(chs);
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var cnt = cljs.core.count(chs__$1);
var rets = cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(cnt);
var dchan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var dctr = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
var done = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (i){
return (function (ret){
(rets[i] = ret);

if((cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(dchan,rets.slice((0)));
} else {
return null;
}
});
}),cljs.core.range.cljs$core$IFn$_invoke$arity$1(cnt));
if((cnt === (0))){
cljs.core.async.close_BANG_(out);
} else {
var c__13768__auto___18000 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__13770__auto__ = (function (){var switch__13478__auto__ = (function (state_16157){
var state_val_16158 = (state_16157[(1)]);
if((state_val_16158 === (7))){
var state_16157__$1 = state_16157;
var statearr_16160_18001 = state_16157__$1;
(statearr_16160_18001[(2)] = null);

(statearr_16160_18001[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16158 === (1))){
var state_16157__$1 = state_16157;
var statearr_16161_18002 = state_16157__$1;
(statearr_16161_18002[(2)] = null);

(statearr_16161_18002[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16158 === (4))){
var inst_16045 = (state_16157[(7)]);
var inst_16046 = (state_16157[(8)]);
var inst_16048 = (inst_16046 < inst_16045);
var state_16157__$1 = state_16157;
if(cljs.core.truth_(inst_16048)){
var statearr_16163_18003 = state_16157__$1;
(statearr_16163_18003[(1)] = (6));

} else {
var statearr_16164_18004 = state_16157__$1;
(statearr_16164_18004[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16158 === (15))){
var inst_16143 = (state_16157[(9)]);
var inst_16148 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,inst_16143);
var state_16157__$1 = state_16157;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_16157__$1,(17),out,inst_16148);
} else {
if((state_val_16158 === (13))){
var inst_16143 = (state_16157[(9)]);
var inst_16143__$1 = (state_16157[(2)]);
var inst_16144 = cljs.core.some(cljs.core.nil_QMARK_,inst_16143__$1);
var state_16157__$1 = (function (){var statearr_16166 = state_16157;
(statearr_16166[(9)] = inst_16143__$1);

return statearr_16166;
})();
if(cljs.core.truth_(inst_16144)){
var statearr_16168_18005 = state_16157__$1;
(statearr_16168_18005[(1)] = (14));

} else {
var statearr_16169_18009 = state_16157__$1;
(statearr_16169_18009[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16158 === (6))){
var state_16157__$1 = state_16157;
var statearr_16170_18010 = state_16157__$1;
(statearr_16170_18010[(2)] = null);

(statearr_16170_18010[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16158 === (17))){
var inst_16150 = (state_16157[(2)]);
var state_16157__$1 = (function (){var statearr_16176 = state_16157;
(statearr_16176[(10)] = inst_16150);

return statearr_16176;
})();
var statearr_16177_18011 = state_16157__$1;
(statearr_16177_18011[(2)] = null);

(statearr_16177_18011[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16158 === (3))){
var inst_16155 = (state_16157[(2)]);
var state_16157__$1 = state_16157;
return cljs.core.async.impl.ioc_helpers.return_chan(state_16157__$1,inst_16155);
} else {
if((state_val_16158 === (12))){
var _ = (function (){var statearr_16178 = state_16157;
(statearr_16178[(4)] = cljs.core.rest((state_16157[(4)])));

return statearr_16178;
})();
var state_16157__$1 = state_16157;
var ex16173 = (state_16157__$1[(2)]);
var statearr_16179_18013 = state_16157__$1;
(statearr_16179_18013[(5)] = ex16173);


if((ex16173 instanceof Object)){
var statearr_16180_18014 = state_16157__$1;
(statearr_16180_18014[(1)] = (11));

(statearr_16180_18014[(5)] = null);

} else {
throw ex16173;

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16158 === (2))){
var inst_16043 = cljs.core.reset_BANG_(dctr,cnt);
var inst_16045 = cnt;
var inst_16046 = (0);
var state_16157__$1 = (function (){var statearr_16184 = state_16157;
(statearr_16184[(11)] = inst_16043);

(statearr_16184[(7)] = inst_16045);

(statearr_16184[(8)] = inst_16046);

return statearr_16184;
})();
var statearr_16187_18016 = state_16157__$1;
(statearr_16187_18016[(2)] = null);

(statearr_16187_18016[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16158 === (11))){
var inst_16119 = (state_16157[(2)]);
var inst_16121 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec);
var state_16157__$1 = (function (){var statearr_16188 = state_16157;
(statearr_16188[(12)] = inst_16119);

return statearr_16188;
})();
var statearr_16192_18017 = state_16157__$1;
(statearr_16192_18017[(2)] = inst_16121);

(statearr_16192_18017[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16158 === (9))){
var inst_16046 = (state_16157[(8)]);
var _ = (function (){var statearr_16196 = state_16157;
(statearr_16196[(4)] = cljs.core.cons((12),(state_16157[(4)])));

return statearr_16196;
})();
var inst_16128 = (chs__$1.cljs$core$IFn$_invoke$arity$1 ? chs__$1.cljs$core$IFn$_invoke$arity$1(inst_16046) : chs__$1.call(null, inst_16046));
var inst_16129 = (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(inst_16046) : done.call(null, inst_16046));
var inst_16130 = cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2(inst_16128,inst_16129);
var ___$1 = (function (){var statearr_16197 = state_16157;
(statearr_16197[(4)] = cljs.core.rest((state_16157[(4)])));

return statearr_16197;
})();
var state_16157__$1 = state_16157;
var statearr_16200_18021 = state_16157__$1;
(statearr_16200_18021[(2)] = inst_16130);

(statearr_16200_18021[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16158 === (5))){
var inst_16141 = (state_16157[(2)]);
var state_16157__$1 = (function (){var statearr_16201 = state_16157;
(statearr_16201[(13)] = inst_16141);

return statearr_16201;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_16157__$1,(13),dchan);
} else {
if((state_val_16158 === (14))){
var inst_16146 = cljs.core.async.close_BANG_(out);
var state_16157__$1 = state_16157;
var statearr_16202_18022 = state_16157__$1;
(statearr_16202_18022[(2)] = inst_16146);

(statearr_16202_18022[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16158 === (16))){
var inst_16153 = (state_16157[(2)]);
var state_16157__$1 = state_16157;
var statearr_16203_18023 = state_16157__$1;
(statearr_16203_18023[(2)] = inst_16153);

(statearr_16203_18023[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16158 === (10))){
var inst_16046 = (state_16157[(8)]);
var inst_16133 = (state_16157[(2)]);
var inst_16135 = (inst_16046 + (1));
var inst_16046__$1 = inst_16135;
var state_16157__$1 = (function (){var statearr_16205 = state_16157;
(statearr_16205[(14)] = inst_16133);

(statearr_16205[(8)] = inst_16046__$1);

return statearr_16205;
})();
var statearr_16206_18026 = state_16157__$1;
(statearr_16206_18026[(2)] = null);

(statearr_16206_18026[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16158 === (8))){
var inst_16139 = (state_16157[(2)]);
var state_16157__$1 = state_16157;
var statearr_16207_18027 = state_16157__$1;
(statearr_16207_18027[(2)] = inst_16139);

(statearr_16207_18027[(1)] = (5));


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
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__13479__auto__ = null;
var cljs$core$async$state_machine__13479__auto____0 = (function (){
var statearr_16210 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_16210[(0)] = cljs$core$async$state_machine__13479__auto__);

(statearr_16210[(1)] = (1));

return statearr_16210;
});
var cljs$core$async$state_machine__13479__auto____1 = (function (state_16157){
while(true){
var ret_value__13480__auto__ = (function (){try{while(true){
var result__13481__auto__ = switch__13478__auto__(state_16157);
if(cljs.core.keyword_identical_QMARK_(result__13481__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__13481__auto__;
}
break;
}
}catch (e16212){var ex__13482__auto__ = e16212;
var statearr_16214_18028 = state_16157;
(statearr_16214_18028[(2)] = ex__13482__auto__);


if(cljs.core.seq((state_16157[(4)]))){
var statearr_16215_18029 = state_16157;
(statearr_16215_18029[(1)] = cljs.core.first((state_16157[(4)])));

} else {
throw ex__13482__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__13480__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__18030 = state_16157;
state_16157 = G__18030;
continue;
} else {
return ret_value__13480__auto__;
}
break;
}
});
cljs$core$async$state_machine__13479__auto__ = function(state_16157){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__13479__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__13479__auto____1.call(this,state_16157);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__13479__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__13479__auto____0;
cljs$core$async$state_machine__13479__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__13479__auto____1;
return cljs$core$async$state_machine__13479__auto__;
})()
})();
var state__13771__auto__ = (function (){var statearr_16218 = f__13770__auto__();
(statearr_16218[(6)] = c__13768__auto___18000);

return statearr_16218;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__13771__auto__);
}));

}

return out;
}));

(cljs.core.async.map.cljs$lang$maxFixedArity = 3);

/**
 * Takes a collection of source channels and returns a channel which
 *   contains all values taken from them. The returned channel will be
 *   unbuffered by default, or a buf-or-n can be supplied. The channel
 *   will close after all the source channels have closed.
 */
cljs.core.async.merge = (function cljs$core$async$merge(var_args){
var G__16224 = arguments.length;
switch (G__16224) {
case 1:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1 = (function (chs){
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2(chs,null);
}));

(cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__13768__auto___18032 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__13770__auto__ = (function (){var switch__13478__auto__ = (function (state_16273){
var state_val_16274 = (state_16273[(1)]);
if((state_val_16274 === (7))){
var inst_16249 = (state_16273[(7)]);
var inst_16250 = (state_16273[(8)]);
var inst_16249__$1 = (state_16273[(2)]);
var inst_16250__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_16249__$1,(0),null);
var inst_16251 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_16249__$1,(1),null);
var inst_16252 = (inst_16250__$1 == null);
var state_16273__$1 = (function (){var statearr_16281 = state_16273;
(statearr_16281[(7)] = inst_16249__$1);

(statearr_16281[(9)] = inst_16251);

(statearr_16281[(8)] = inst_16250__$1);

return statearr_16281;
})();
if(cljs.core.truth_(inst_16252)){
var statearr_16282_18033 = state_16273__$1;
(statearr_16282_18033[(1)] = (8));

} else {
var statearr_16284_18034 = state_16273__$1;
(statearr_16284_18034[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16274 === (1))){
var inst_16234 = cljs.core.vec(chs);
var inst_16235 = inst_16234;
var state_16273__$1 = (function (){var statearr_16287 = state_16273;
(statearr_16287[(10)] = inst_16235);

return statearr_16287;
})();
var statearr_16290_18035 = state_16273__$1;
(statearr_16290_18035[(2)] = null);

(statearr_16290_18035[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16274 === (4))){
var inst_16235 = (state_16273[(10)]);
var state_16273__$1 = state_16273;
return cljs.core.async.ioc_alts_BANG_(state_16273__$1,(7),inst_16235);
} else {
if((state_val_16274 === (6))){
var inst_16269 = (state_16273[(2)]);
var state_16273__$1 = state_16273;
var statearr_16296_18036 = state_16273__$1;
(statearr_16296_18036[(2)] = inst_16269);

(statearr_16296_18036[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16274 === (3))){
var inst_16271 = (state_16273[(2)]);
var state_16273__$1 = state_16273;
return cljs.core.async.impl.ioc_helpers.return_chan(state_16273__$1,inst_16271);
} else {
if((state_val_16274 === (2))){
var inst_16235 = (state_16273[(10)]);
var inst_16239 = cljs.core.count(inst_16235);
var inst_16240 = (inst_16239 > (0));
var state_16273__$1 = state_16273;
if(cljs.core.truth_(inst_16240)){
var statearr_16302_18037 = state_16273__$1;
(statearr_16302_18037[(1)] = (4));

} else {
var statearr_16303_18038 = state_16273__$1;
(statearr_16303_18038[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16274 === (11))){
var inst_16235 = (state_16273[(10)]);
var inst_16262 = (state_16273[(2)]);
var tmp16300 = inst_16235;
var inst_16235__$1 = tmp16300;
var state_16273__$1 = (function (){var statearr_16312 = state_16273;
(statearr_16312[(11)] = inst_16262);

(statearr_16312[(10)] = inst_16235__$1);

return statearr_16312;
})();
var statearr_16313_18043 = state_16273__$1;
(statearr_16313_18043[(2)] = null);

(statearr_16313_18043[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16274 === (9))){
var inst_16250 = (state_16273[(8)]);
var state_16273__$1 = state_16273;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_16273__$1,(11),out,inst_16250);
} else {
if((state_val_16274 === (5))){
var inst_16267 = cljs.core.async.close_BANG_(out);
var state_16273__$1 = state_16273;
var statearr_16319_18045 = state_16273__$1;
(statearr_16319_18045[(2)] = inst_16267);

(statearr_16319_18045[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16274 === (10))){
var inst_16265 = (state_16273[(2)]);
var state_16273__$1 = state_16273;
var statearr_16324_18046 = state_16273__$1;
(statearr_16324_18046[(2)] = inst_16265);

(statearr_16324_18046[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16274 === (8))){
var inst_16249 = (state_16273[(7)]);
var inst_16251 = (state_16273[(9)]);
var inst_16235 = (state_16273[(10)]);
var inst_16250 = (state_16273[(8)]);
var inst_16256 = (function (){var cs = inst_16235;
var vec__16245 = inst_16249;
var v = inst_16250;
var c = inst_16251;
return (function (p1__16219_SHARP_){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(c,p1__16219_SHARP_);
});
})();
var inst_16258 = cljs.core.filterv(inst_16256,inst_16235);
var inst_16235__$1 = inst_16258;
var state_16273__$1 = (function (){var statearr_16335 = state_16273;
(statearr_16335[(10)] = inst_16235__$1);

return statearr_16335;
})();
var statearr_16338_18047 = state_16273__$1;
(statearr_16338_18047[(2)] = null);

(statearr_16338_18047[(1)] = (2));


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
}
});
return (function() {
var cljs$core$async$state_machine__13479__auto__ = null;
var cljs$core$async$state_machine__13479__auto____0 = (function (){
var statearr_16342 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_16342[(0)] = cljs$core$async$state_machine__13479__auto__);

(statearr_16342[(1)] = (1));

return statearr_16342;
});
var cljs$core$async$state_machine__13479__auto____1 = (function (state_16273){
while(true){
var ret_value__13480__auto__ = (function (){try{while(true){
var result__13481__auto__ = switch__13478__auto__(state_16273);
if(cljs.core.keyword_identical_QMARK_(result__13481__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__13481__auto__;
}
break;
}
}catch (e16350){var ex__13482__auto__ = e16350;
var statearr_16355_18048 = state_16273;
(statearr_16355_18048[(2)] = ex__13482__auto__);


if(cljs.core.seq((state_16273[(4)]))){
var statearr_16360_18049 = state_16273;
(statearr_16360_18049[(1)] = cljs.core.first((state_16273[(4)])));

} else {
throw ex__13482__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__13480__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__18053 = state_16273;
state_16273 = G__18053;
continue;
} else {
return ret_value__13480__auto__;
}
break;
}
});
cljs$core$async$state_machine__13479__auto__ = function(state_16273){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__13479__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__13479__auto____1.call(this,state_16273);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__13479__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__13479__auto____0;
cljs$core$async$state_machine__13479__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__13479__auto____1;
return cljs$core$async$state_machine__13479__auto__;
})()
})();
var state__13771__auto__ = (function (){var statearr_16361 = f__13770__auto__();
(statearr_16361[(6)] = c__13768__auto___18032);

return statearr_16361;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__13771__auto__);
}));


return out;
}));

(cljs.core.async.merge.cljs$lang$maxFixedArity = 2);

/**
 * Returns a channel containing the single (collection) result of the
 *   items taken from the channel conjoined to the supplied
 *   collection. ch must close before into produces a result.
 */
cljs.core.async.into = (function cljs$core$async$into(coll,ch){
return cljs.core.async.reduce(cljs.core.conj,coll,ch);
});
/**
 * Returns a channel that will return, at most, n items from ch. After n items
 * have been returned, or ch has been closed, the return chanel will close.
 * 
 *   The output channel is unbuffered by default, unless buf-or-n is given.
 */
cljs.core.async.take = (function cljs$core$async$take(var_args){
var G__16385 = arguments.length;
switch (G__16385) {
case 2:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.take.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3(n,ch,null);
}));

(cljs.core.async.take.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__13768__auto___18055 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__13770__auto__ = (function (){var switch__13478__auto__ = (function (state_16428){
var state_val_16432 = (state_16428[(1)]);
if((state_val_16432 === (7))){
var inst_16402 = (state_16428[(7)]);
var inst_16402__$1 = (state_16428[(2)]);
var inst_16403 = (inst_16402__$1 == null);
var inst_16404 = cljs.core.not(inst_16403);
var state_16428__$1 = (function (){var statearr_16438 = state_16428;
(statearr_16438[(7)] = inst_16402__$1);

return statearr_16438;
})();
if(inst_16404){
var statearr_16440_18056 = state_16428__$1;
(statearr_16440_18056[(1)] = (8));

} else {
var statearr_16442_18057 = state_16428__$1;
(statearr_16442_18057[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16432 === (1))){
var inst_16394 = (0);
var state_16428__$1 = (function (){var statearr_16444 = state_16428;
(statearr_16444[(8)] = inst_16394);

return statearr_16444;
})();
var statearr_16445_18058 = state_16428__$1;
(statearr_16445_18058[(2)] = null);

(statearr_16445_18058[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16432 === (4))){
var state_16428__$1 = state_16428;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_16428__$1,(7),ch);
} else {
if((state_val_16432 === (6))){
var inst_16419 = (state_16428[(2)]);
var state_16428__$1 = state_16428;
var statearr_16456_18059 = state_16428__$1;
(statearr_16456_18059[(2)] = inst_16419);

(statearr_16456_18059[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16432 === (3))){
var inst_16421 = (state_16428[(2)]);
var inst_16422 = cljs.core.async.close_BANG_(out);
var state_16428__$1 = (function (){var statearr_16461 = state_16428;
(statearr_16461[(9)] = inst_16421);

return statearr_16461;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_16428__$1,inst_16422);
} else {
if((state_val_16432 === (2))){
var inst_16394 = (state_16428[(8)]);
var inst_16396 = (inst_16394 < n);
var state_16428__$1 = state_16428;
if(cljs.core.truth_(inst_16396)){
var statearr_16463_18060 = state_16428__$1;
(statearr_16463_18060[(1)] = (4));

} else {
var statearr_16464_18061 = state_16428__$1;
(statearr_16464_18061[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16432 === (11))){
var inst_16394 = (state_16428[(8)]);
var inst_16407 = (state_16428[(2)]);
var inst_16408 = (inst_16394 + (1));
var inst_16394__$1 = inst_16408;
var state_16428__$1 = (function (){var statearr_16468 = state_16428;
(statearr_16468[(8)] = inst_16394__$1);

(statearr_16468[(10)] = inst_16407);

return statearr_16468;
})();
var statearr_16469_18062 = state_16428__$1;
(statearr_16469_18062[(2)] = null);

(statearr_16469_18062[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16432 === (9))){
var state_16428__$1 = state_16428;
var statearr_16472_18063 = state_16428__$1;
(statearr_16472_18063[(2)] = null);

(statearr_16472_18063[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16432 === (5))){
var state_16428__$1 = state_16428;
var statearr_16474_18065 = state_16428__$1;
(statearr_16474_18065[(2)] = null);

(statearr_16474_18065[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16432 === (10))){
var inst_16412 = (state_16428[(2)]);
var state_16428__$1 = state_16428;
var statearr_16475_18066 = state_16428__$1;
(statearr_16475_18066[(2)] = inst_16412);

(statearr_16475_18066[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16432 === (8))){
var inst_16402 = (state_16428[(7)]);
var state_16428__$1 = state_16428;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_16428__$1,(11),out,inst_16402);
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
}
});
return (function() {
var cljs$core$async$state_machine__13479__auto__ = null;
var cljs$core$async$state_machine__13479__auto____0 = (function (){
var statearr_16486 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_16486[(0)] = cljs$core$async$state_machine__13479__auto__);

(statearr_16486[(1)] = (1));

return statearr_16486;
});
var cljs$core$async$state_machine__13479__auto____1 = (function (state_16428){
while(true){
var ret_value__13480__auto__ = (function (){try{while(true){
var result__13481__auto__ = switch__13478__auto__(state_16428);
if(cljs.core.keyword_identical_QMARK_(result__13481__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__13481__auto__;
}
break;
}
}catch (e16487){var ex__13482__auto__ = e16487;
var statearr_16488_18067 = state_16428;
(statearr_16488_18067[(2)] = ex__13482__auto__);


if(cljs.core.seq((state_16428[(4)]))){
var statearr_16489_18068 = state_16428;
(statearr_16489_18068[(1)] = cljs.core.first((state_16428[(4)])));

} else {
throw ex__13482__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__13480__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__18069 = state_16428;
state_16428 = G__18069;
continue;
} else {
return ret_value__13480__auto__;
}
break;
}
});
cljs$core$async$state_machine__13479__auto__ = function(state_16428){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__13479__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__13479__auto____1.call(this,state_16428);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__13479__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__13479__auto____0;
cljs$core$async$state_machine__13479__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__13479__auto____1;
return cljs$core$async$state_machine__13479__auto__;
})()
})();
var state__13771__auto__ = (function (){var statearr_16496 = f__13770__auto__();
(statearr_16496[(6)] = c__13768__auto___18055);

return statearr_16496;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__13771__auto__);
}));


return out;
}));

(cljs.core.async.take.cljs$lang$maxFixedArity = 3);


/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async16509 = (function (f,ch,meta16505,_,fn1,meta16510){
this.f = f;
this.ch = ch;
this.meta16505 = meta16505;
this._ = _;
this.fn1 = fn1;
this.meta16510 = meta16510;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async16509.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_16511,meta16510__$1){
var self__ = this;
var _16511__$1 = this;
return (new cljs.core.async.t_cljs$core$async16509(self__.f,self__.ch,self__.meta16505,self__._,self__.fn1,meta16510__$1));
}));

(cljs.core.async.t_cljs$core$async16509.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_16511){
var self__ = this;
var _16511__$1 = this;
return self__.meta16510;
}));

(cljs.core.async.t_cljs$core$async16509.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async16509.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.fn1);
}));

(cljs.core.async.t_cljs$core$async16509.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async16509.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit(self__.fn1);
return (function (p1__16502_SHARP_){
var G__16516 = (((p1__16502_SHARP_ == null))?null:(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(p1__16502_SHARP_) : self__.f.call(null, p1__16502_SHARP_)));
return (f1.cljs$core$IFn$_invoke$arity$1 ? f1.cljs$core$IFn$_invoke$arity$1(G__16516) : f1.call(null, G__16516));
});
}));

(cljs.core.async.t_cljs$core$async16509.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta16505","meta16505",701688141,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async16504","cljs.core.async/t_cljs$core$async16504",-420813034,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta16510","meta16510",2019880549,null)], null);
}));

(cljs.core.async.t_cljs$core$async16509.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async16509.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async16509");

(cljs.core.async.t_cljs$core$async16509.cljs$lang$ctorPrWriter = (function (this__5287__auto__,writer__5288__auto__,opt__5289__auto__){
return cljs.core._write(writer__5288__auto__,"cljs.core.async/t_cljs$core$async16509");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async16509.
 */
cljs.core.async.__GT_t_cljs$core$async16509 = (function cljs$core$async$__GT_t_cljs$core$async16509(f,ch,meta16505,_,fn1,meta16510){
return (new cljs.core.async.t_cljs$core$async16509(f,ch,meta16505,_,fn1,meta16510));
});



/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async16504 = (function (f,ch,meta16505){
this.f = f;
this.ch = ch;
this.meta16505 = meta16505;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async16504.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_16506,meta16505__$1){
var self__ = this;
var _16506__$1 = this;
return (new cljs.core.async.t_cljs$core$async16504(self__.f,self__.ch,meta16505__$1));
}));

(cljs.core.async.t_cljs$core$async16504.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_16506){
var self__ = this;
var _16506__$1 = this;
return self__.meta16505;
}));

(cljs.core.async.t_cljs$core$async16504.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async16504.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async16504.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async16504.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async16504.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_(self__.ch,(new cljs.core.async.t_cljs$core$async16509(self__.f,self__.ch,self__.meta16505,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY)));
if(cljs.core.truth_((function (){var and__5000__auto__ = ret;
if(cljs.core.truth_(and__5000__auto__)){
return (!((cljs.core.deref(ret) == null)));
} else {
return and__5000__auto__;
}
})())){
return cljs.core.async.impl.channels.box((function (){var G__16523 = cljs.core.deref(ret);
return (self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(G__16523) : self__.f.call(null, G__16523));
})());
} else {
return ret;
}
}));

(cljs.core.async.t_cljs$core$async16504.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async16504.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
}));

(cljs.core.async.t_cljs$core$async16504.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta16505","meta16505",701688141,null)], null);
}));

(cljs.core.async.t_cljs$core$async16504.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async16504.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async16504");

(cljs.core.async.t_cljs$core$async16504.cljs$lang$ctorPrWriter = (function (this__5287__auto__,writer__5288__auto__,opt__5289__auto__){
return cljs.core._write(writer__5288__auto__,"cljs.core.async/t_cljs$core$async16504");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async16504.
 */
cljs.core.async.__GT_t_cljs$core$async16504 = (function cljs$core$async$__GT_t_cljs$core$async16504(f,ch,meta16505){
return (new cljs.core.async.t_cljs$core$async16504(f,ch,meta16505));
});


/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
return (new cljs.core.async.t_cljs$core$async16504(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async16548 = (function (f,ch,meta16549){
this.f = f;
this.ch = ch;
this.meta16549 = meta16549;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async16548.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_16550,meta16549__$1){
var self__ = this;
var _16550__$1 = this;
return (new cljs.core.async.t_cljs$core$async16548(self__.f,self__.ch,meta16549__$1));
}));

(cljs.core.async.t_cljs$core$async16548.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_16550){
var self__ = this;
var _16550__$1 = this;
return self__.meta16549;
}));

(cljs.core.async.t_cljs$core$async16548.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async16548.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async16548.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async16548.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async16548.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async16548.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(val) : self__.f.call(null, val)),fn1);
}));

(cljs.core.async.t_cljs$core$async16548.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta16549","meta16549",-506285575,null)], null);
}));

(cljs.core.async.t_cljs$core$async16548.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async16548.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async16548");

(cljs.core.async.t_cljs$core$async16548.cljs$lang$ctorPrWriter = (function (this__5287__auto__,writer__5288__auto__,opt__5289__auto__){
return cljs.core._write(writer__5288__auto__,"cljs.core.async/t_cljs$core$async16548");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async16548.
 */
cljs.core.async.__GT_t_cljs$core$async16548 = (function cljs$core$async$__GT_t_cljs$core$async16548(f,ch,meta16549){
return (new cljs.core.async.t_cljs$core$async16548(f,ch,meta16549));
});


/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
return (new cljs.core.async.t_cljs$core$async16548(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async16566 = (function (p,ch,meta16567){
this.p = p;
this.ch = ch;
this.meta16567 = meta16567;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async16566.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_16568,meta16567__$1){
var self__ = this;
var _16568__$1 = this;
return (new cljs.core.async.t_cljs$core$async16566(self__.p,self__.ch,meta16567__$1));
}));

(cljs.core.async.t_cljs$core$async16566.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_16568){
var self__ = this;
var _16568__$1 = this;
return self__.meta16567;
}));

(cljs.core.async.t_cljs$core$async16566.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async16566.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async16566.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async16566.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async16566.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async16566.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async16566.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.p.cljs$core$IFn$_invoke$arity$1 ? self__.p.cljs$core$IFn$_invoke$arity$1(val) : self__.p.call(null, val)))){
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box(cljs.core.not(cljs.core.async.impl.protocols.closed_QMARK_(self__.ch)));
}
}));

(cljs.core.async.t_cljs$core$async16566.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta16567","meta16567",-273721580,null)], null);
}));

(cljs.core.async.t_cljs$core$async16566.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async16566.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async16566");

(cljs.core.async.t_cljs$core$async16566.cljs$lang$ctorPrWriter = (function (this__5287__auto__,writer__5288__auto__,opt__5289__auto__){
return cljs.core._write(writer__5288__auto__,"cljs.core.async/t_cljs$core$async16566");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async16566.
 */
cljs.core.async.__GT_t_cljs$core$async16566 = (function cljs$core$async$__GT_t_cljs$core$async16566(p,ch,meta16567){
return (new cljs.core.async.t_cljs$core$async16566(p,ch,meta16567));
});


/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
return (new cljs.core.async.t_cljs$core$async16566(p,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_GT_ = (function cljs$core$async$remove_GT_(p,ch){
return cljs.core.async.filter_GT_(cljs.core.complement(p),ch);
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_LT_ = (function cljs$core$async$filter_LT_(var_args){
var G__16584 = arguments.length;
switch (G__16584) {
case 2:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3(p,ch,null);
}));

(cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__13768__auto___18089 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__13770__auto__ = (function (){var switch__13478__auto__ = (function (state_16616){
var state_val_16617 = (state_16616[(1)]);
if((state_val_16617 === (7))){
var inst_16611 = (state_16616[(2)]);
var state_16616__$1 = state_16616;
var statearr_16620_18093 = state_16616__$1;
(statearr_16620_18093[(2)] = inst_16611);

(statearr_16620_18093[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16617 === (1))){
var state_16616__$1 = state_16616;
var statearr_16621_18094 = state_16616__$1;
(statearr_16621_18094[(2)] = null);

(statearr_16621_18094[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16617 === (4))){
var inst_16597 = (state_16616[(7)]);
var inst_16597__$1 = (state_16616[(2)]);
var inst_16598 = (inst_16597__$1 == null);
var state_16616__$1 = (function (){var statearr_16622 = state_16616;
(statearr_16622[(7)] = inst_16597__$1);

return statearr_16622;
})();
if(cljs.core.truth_(inst_16598)){
var statearr_16623_18095 = state_16616__$1;
(statearr_16623_18095[(1)] = (5));

} else {
var statearr_16625_18096 = state_16616__$1;
(statearr_16625_18096[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16617 === (6))){
var inst_16597 = (state_16616[(7)]);
var inst_16602 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_16597) : p.call(null, inst_16597));
var state_16616__$1 = state_16616;
if(cljs.core.truth_(inst_16602)){
var statearr_16627_18097 = state_16616__$1;
(statearr_16627_18097[(1)] = (8));

} else {
var statearr_16628_18098 = state_16616__$1;
(statearr_16628_18098[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16617 === (3))){
var inst_16613 = (state_16616[(2)]);
var state_16616__$1 = state_16616;
return cljs.core.async.impl.ioc_helpers.return_chan(state_16616__$1,inst_16613);
} else {
if((state_val_16617 === (2))){
var state_16616__$1 = state_16616;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_16616__$1,(4),ch);
} else {
if((state_val_16617 === (11))){
var inst_16605 = (state_16616[(2)]);
var state_16616__$1 = state_16616;
var statearr_16634_18102 = state_16616__$1;
(statearr_16634_18102[(2)] = inst_16605);

(statearr_16634_18102[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16617 === (9))){
var state_16616__$1 = state_16616;
var statearr_16637_18103 = state_16616__$1;
(statearr_16637_18103[(2)] = null);

(statearr_16637_18103[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16617 === (5))){
var inst_16600 = cljs.core.async.close_BANG_(out);
var state_16616__$1 = state_16616;
var statearr_16641_18104 = state_16616__$1;
(statearr_16641_18104[(2)] = inst_16600);

(statearr_16641_18104[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16617 === (10))){
var inst_16608 = (state_16616[(2)]);
var state_16616__$1 = (function (){var statearr_16642 = state_16616;
(statearr_16642[(8)] = inst_16608);

return statearr_16642;
})();
var statearr_16643_18109 = state_16616__$1;
(statearr_16643_18109[(2)] = null);

(statearr_16643_18109[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16617 === (8))){
var inst_16597 = (state_16616[(7)]);
var state_16616__$1 = state_16616;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_16616__$1,(11),out,inst_16597);
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
}
});
return (function() {
var cljs$core$async$state_machine__13479__auto__ = null;
var cljs$core$async$state_machine__13479__auto____0 = (function (){
var statearr_16645 = [null,null,null,null,null,null,null,null,null];
(statearr_16645[(0)] = cljs$core$async$state_machine__13479__auto__);

(statearr_16645[(1)] = (1));

return statearr_16645;
});
var cljs$core$async$state_machine__13479__auto____1 = (function (state_16616){
while(true){
var ret_value__13480__auto__ = (function (){try{while(true){
var result__13481__auto__ = switch__13478__auto__(state_16616);
if(cljs.core.keyword_identical_QMARK_(result__13481__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__13481__auto__;
}
break;
}
}catch (e16651){var ex__13482__auto__ = e16651;
var statearr_16652_18113 = state_16616;
(statearr_16652_18113[(2)] = ex__13482__auto__);


if(cljs.core.seq((state_16616[(4)]))){
var statearr_16654_18114 = state_16616;
(statearr_16654_18114[(1)] = cljs.core.first((state_16616[(4)])));

} else {
throw ex__13482__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__13480__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__18115 = state_16616;
state_16616 = G__18115;
continue;
} else {
return ret_value__13480__auto__;
}
break;
}
});
cljs$core$async$state_machine__13479__auto__ = function(state_16616){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__13479__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__13479__auto____1.call(this,state_16616);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__13479__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__13479__auto____0;
cljs$core$async$state_machine__13479__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__13479__auto____1;
return cljs$core$async$state_machine__13479__auto__;
})()
})();
var state__13771__auto__ = (function (){var statearr_16659 = f__13770__auto__();
(statearr_16659[(6)] = c__13768__auto___18089);

return statearr_16659;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__13771__auto__);
}));


return out;
}));

(cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var G__16661 = arguments.length;
switch (G__16661) {
case 2:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3(p,ch,null);
}));

(cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3(cljs.core.complement(p),ch,buf_or_n);
}));

(cljs.core.async.remove_LT_.cljs$lang$maxFixedArity = 3);

cljs.core.async.mapcat_STAR_ = (function cljs$core$async$mapcat_STAR_(f,in$,out){
var c__13768__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__13770__auto__ = (function (){var switch__13478__auto__ = (function (state_16735){
var state_val_16736 = (state_16735[(1)]);
if((state_val_16736 === (7))){
var inst_16730 = (state_16735[(2)]);
var state_16735__$1 = state_16735;
var statearr_16765_18128 = state_16735__$1;
(statearr_16765_18128[(2)] = inst_16730);

(statearr_16765_18128[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16736 === (20))){
var inst_16697 = (state_16735[(7)]);
var inst_16711 = (state_16735[(2)]);
var inst_16712 = cljs.core.next(inst_16697);
var inst_16682 = inst_16712;
var inst_16683 = null;
var inst_16684 = (0);
var inst_16685 = (0);
var state_16735__$1 = (function (){var statearr_16777 = state_16735;
(statearr_16777[(8)] = inst_16682);

(statearr_16777[(9)] = inst_16684);

(statearr_16777[(10)] = inst_16685);

(statearr_16777[(11)] = inst_16711);

(statearr_16777[(12)] = inst_16683);

return statearr_16777;
})();
var statearr_16788_18129 = state_16735__$1;
(statearr_16788_18129[(2)] = null);

(statearr_16788_18129[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16736 === (1))){
var state_16735__$1 = state_16735;
var statearr_16789_18130 = state_16735__$1;
(statearr_16789_18130[(2)] = null);

(statearr_16789_18130[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16736 === (4))){
var inst_16670 = (state_16735[(13)]);
var inst_16670__$1 = (state_16735[(2)]);
var inst_16672 = (inst_16670__$1 == null);
var state_16735__$1 = (function (){var statearr_16791 = state_16735;
(statearr_16791[(13)] = inst_16670__$1);

return statearr_16791;
})();
if(cljs.core.truth_(inst_16672)){
var statearr_16792_18131 = state_16735__$1;
(statearr_16792_18131[(1)] = (5));

} else {
var statearr_16793_18132 = state_16735__$1;
(statearr_16793_18132[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16736 === (15))){
var state_16735__$1 = state_16735;
var statearr_16800_18133 = state_16735__$1;
(statearr_16800_18133[(2)] = null);

(statearr_16800_18133[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16736 === (21))){
var state_16735__$1 = state_16735;
var statearr_16802_18134 = state_16735__$1;
(statearr_16802_18134[(2)] = null);

(statearr_16802_18134[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16736 === (13))){
var inst_16682 = (state_16735[(8)]);
var inst_16684 = (state_16735[(9)]);
var inst_16685 = (state_16735[(10)]);
var inst_16683 = (state_16735[(12)]);
var inst_16693 = (state_16735[(2)]);
var inst_16694 = (inst_16685 + (1));
var tmp16795 = inst_16682;
var tmp16796 = inst_16684;
var tmp16797 = inst_16683;
var inst_16682__$1 = tmp16795;
var inst_16683__$1 = tmp16797;
var inst_16684__$1 = tmp16796;
var inst_16685__$1 = inst_16694;
var state_16735__$1 = (function (){var statearr_16804 = state_16735;
(statearr_16804[(8)] = inst_16682__$1);

(statearr_16804[(9)] = inst_16684__$1);

(statearr_16804[(14)] = inst_16693);

(statearr_16804[(10)] = inst_16685__$1);

(statearr_16804[(12)] = inst_16683__$1);

return statearr_16804;
})();
var statearr_16805_18138 = state_16735__$1;
(statearr_16805_18138[(2)] = null);

(statearr_16805_18138[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16736 === (22))){
var state_16735__$1 = state_16735;
var statearr_16806_18139 = state_16735__$1;
(statearr_16806_18139[(2)] = null);

(statearr_16806_18139[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16736 === (6))){
var inst_16670 = (state_16735[(13)]);
var inst_16680 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_16670) : f.call(null, inst_16670));
var inst_16681 = cljs.core.seq(inst_16680);
var inst_16682 = inst_16681;
var inst_16683 = null;
var inst_16684 = (0);
var inst_16685 = (0);
var state_16735__$1 = (function (){var statearr_16808 = state_16735;
(statearr_16808[(8)] = inst_16682);

(statearr_16808[(9)] = inst_16684);

(statearr_16808[(10)] = inst_16685);

(statearr_16808[(12)] = inst_16683);

return statearr_16808;
})();
var statearr_16812_18140 = state_16735__$1;
(statearr_16812_18140[(2)] = null);

(statearr_16812_18140[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16736 === (17))){
var inst_16697 = (state_16735[(7)]);
var inst_16701 = cljs.core.chunk_first(inst_16697);
var inst_16702 = cljs.core.chunk_rest(inst_16697);
var inst_16703 = cljs.core.count(inst_16701);
var inst_16682 = inst_16702;
var inst_16683 = inst_16701;
var inst_16684 = inst_16703;
var inst_16685 = (0);
var state_16735__$1 = (function (){var statearr_16817 = state_16735;
(statearr_16817[(8)] = inst_16682);

(statearr_16817[(9)] = inst_16684);

(statearr_16817[(10)] = inst_16685);

(statearr_16817[(12)] = inst_16683);

return statearr_16817;
})();
var statearr_16819_18144 = state_16735__$1;
(statearr_16819_18144[(2)] = null);

(statearr_16819_18144[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16736 === (3))){
var inst_16733 = (state_16735[(2)]);
var state_16735__$1 = state_16735;
return cljs.core.async.impl.ioc_helpers.return_chan(state_16735__$1,inst_16733);
} else {
if((state_val_16736 === (12))){
var inst_16720 = (state_16735[(2)]);
var state_16735__$1 = state_16735;
var statearr_16821_18154 = state_16735__$1;
(statearr_16821_18154[(2)] = inst_16720);

(statearr_16821_18154[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16736 === (2))){
var state_16735__$1 = state_16735;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_16735__$1,(4),in$);
} else {
if((state_val_16736 === (23))){
var inst_16728 = (state_16735[(2)]);
var state_16735__$1 = state_16735;
var statearr_16822_18161 = state_16735__$1;
(statearr_16822_18161[(2)] = inst_16728);

(statearr_16822_18161[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16736 === (19))){
var inst_16715 = (state_16735[(2)]);
var state_16735__$1 = state_16735;
var statearr_16826_18167 = state_16735__$1;
(statearr_16826_18167[(2)] = inst_16715);

(statearr_16826_18167[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16736 === (11))){
var inst_16697 = (state_16735[(7)]);
var inst_16682 = (state_16735[(8)]);
var inst_16697__$1 = cljs.core.seq(inst_16682);
var state_16735__$1 = (function (){var statearr_16830 = state_16735;
(statearr_16830[(7)] = inst_16697__$1);

return statearr_16830;
})();
if(inst_16697__$1){
var statearr_16831_18178 = state_16735__$1;
(statearr_16831_18178[(1)] = (14));

} else {
var statearr_16832_18179 = state_16735__$1;
(statearr_16832_18179[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16736 === (9))){
var inst_16722 = (state_16735[(2)]);
var inst_16723 = cljs.core.async.impl.protocols.closed_QMARK_(out);
var state_16735__$1 = (function (){var statearr_16836 = state_16735;
(statearr_16836[(15)] = inst_16722);

return statearr_16836;
})();
if(cljs.core.truth_(inst_16723)){
var statearr_16839_18180 = state_16735__$1;
(statearr_16839_18180[(1)] = (21));

} else {
var statearr_16840_18181 = state_16735__$1;
(statearr_16840_18181[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16736 === (5))){
var inst_16674 = cljs.core.async.close_BANG_(out);
var state_16735__$1 = state_16735;
var statearr_16842_18183 = state_16735__$1;
(statearr_16842_18183[(2)] = inst_16674);

(statearr_16842_18183[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16736 === (14))){
var inst_16697 = (state_16735[(7)]);
var inst_16699 = cljs.core.chunked_seq_QMARK_(inst_16697);
var state_16735__$1 = state_16735;
if(inst_16699){
var statearr_16843_18184 = state_16735__$1;
(statearr_16843_18184[(1)] = (17));

} else {
var statearr_16844_18186 = state_16735__$1;
(statearr_16844_18186[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16736 === (16))){
var inst_16718 = (state_16735[(2)]);
var state_16735__$1 = state_16735;
var statearr_16847_18187 = state_16735__$1;
(statearr_16847_18187[(2)] = inst_16718);

(statearr_16847_18187[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16736 === (10))){
var inst_16685 = (state_16735[(10)]);
var inst_16683 = (state_16735[(12)]);
var inst_16690 = cljs.core._nth(inst_16683,inst_16685);
var state_16735__$1 = state_16735;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_16735__$1,(13),out,inst_16690);
} else {
if((state_val_16736 === (18))){
var inst_16697 = (state_16735[(7)]);
var inst_16706 = cljs.core.first(inst_16697);
var state_16735__$1 = state_16735;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_16735__$1,(20),out,inst_16706);
} else {
if((state_val_16736 === (8))){
var inst_16684 = (state_16735[(9)]);
var inst_16685 = (state_16735[(10)]);
var inst_16687 = (inst_16685 < inst_16684);
var inst_16688 = inst_16687;
var state_16735__$1 = state_16735;
if(cljs.core.truth_(inst_16688)){
var statearr_16859_18194 = state_16735__$1;
(statearr_16859_18194[(1)] = (10));

} else {
var statearr_16860_18198 = state_16735__$1;
(statearr_16860_18198[(1)] = (11));

}

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
}
}
}
});
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__13479__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__13479__auto____0 = (function (){
var statearr_16863 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_16863[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__13479__auto__);

(statearr_16863[(1)] = (1));

return statearr_16863;
});
var cljs$core$async$mapcat_STAR__$_state_machine__13479__auto____1 = (function (state_16735){
while(true){
var ret_value__13480__auto__ = (function (){try{while(true){
var result__13481__auto__ = switch__13478__auto__(state_16735);
if(cljs.core.keyword_identical_QMARK_(result__13481__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__13481__auto__;
}
break;
}
}catch (e16865){var ex__13482__auto__ = e16865;
var statearr_16866_18199 = state_16735;
(statearr_16866_18199[(2)] = ex__13482__auto__);


if(cljs.core.seq((state_16735[(4)]))){
var statearr_16867_18200 = state_16735;
(statearr_16867_18200[(1)] = cljs.core.first((state_16735[(4)])));

} else {
throw ex__13482__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__13480__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__18201 = state_16735;
state_16735 = G__18201;
continue;
} else {
return ret_value__13480__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__13479__auto__ = function(state_16735){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__13479__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__13479__auto____1.call(this,state_16735);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__13479__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__13479__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__13479__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__13479__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__13479__auto__;
})()
})();
var state__13771__auto__ = (function (){var statearr_16869 = f__13770__auto__();
(statearr_16869[(6)] = c__13768__auto__);

return statearr_16869;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__13771__auto__);
}));

return c__13768__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var G__16875 = arguments.length;
switch (G__16875) {
case 2:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2 = (function (f,in$){
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3(f,in$,null);
}));

(cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3 = (function (f,in$,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
cljs.core.async.mapcat_STAR_(f,in$,out);

return out;
}));

(cljs.core.async.mapcat_LT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_GT_ = (function cljs$core$async$mapcat_GT_(var_args){
var G__16886 = arguments.length;
switch (G__16886) {
case 2:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2 = (function (f,out){
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3(f,out,null);
}));

(cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3 = (function (f,out,buf_or_n){
var in$ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
cljs.core.async.mapcat_STAR_(f,in$,out);

return in$;
}));

(cljs.core.async.mapcat_GT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.unique = (function cljs$core$async$unique(var_args){
var G__16902 = arguments.length;
switch (G__16902) {
case 1:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1 = (function (ch){
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2(ch,null);
}));

(cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__13768__auto___18205 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__13770__auto__ = (function (){var switch__13478__auto__ = (function (state_16953){
var state_val_16954 = (state_16953[(1)]);
if((state_val_16954 === (7))){
var inst_16948 = (state_16953[(2)]);
var state_16953__$1 = state_16953;
var statearr_16959_18206 = state_16953__$1;
(statearr_16959_18206[(2)] = inst_16948);

(statearr_16959_18206[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16954 === (1))){
var inst_16926 = null;
var state_16953__$1 = (function (){var statearr_16961 = state_16953;
(statearr_16961[(7)] = inst_16926);

return statearr_16961;
})();
var statearr_16963_18207 = state_16953__$1;
(statearr_16963_18207[(2)] = null);

(statearr_16963_18207[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16954 === (4))){
var inst_16929 = (state_16953[(8)]);
var inst_16929__$1 = (state_16953[(2)]);
var inst_16931 = (inst_16929__$1 == null);
var inst_16932 = cljs.core.not(inst_16931);
var state_16953__$1 = (function (){var statearr_16965 = state_16953;
(statearr_16965[(8)] = inst_16929__$1);

return statearr_16965;
})();
if(inst_16932){
var statearr_16966_18208 = state_16953__$1;
(statearr_16966_18208[(1)] = (5));

} else {
var statearr_16967_18209 = state_16953__$1;
(statearr_16967_18209[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16954 === (6))){
var state_16953__$1 = state_16953;
var statearr_16969_18210 = state_16953__$1;
(statearr_16969_18210[(2)] = null);

(statearr_16969_18210[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16954 === (3))){
var inst_16950 = (state_16953[(2)]);
var inst_16951 = cljs.core.async.close_BANG_(out);
var state_16953__$1 = (function (){var statearr_16970 = state_16953;
(statearr_16970[(9)] = inst_16950);

return statearr_16970;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_16953__$1,inst_16951);
} else {
if((state_val_16954 === (2))){
var state_16953__$1 = state_16953;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_16953__$1,(4),ch);
} else {
if((state_val_16954 === (11))){
var inst_16929 = (state_16953[(8)]);
var inst_16942 = (state_16953[(2)]);
var inst_16926 = inst_16929;
var state_16953__$1 = (function (){var statearr_16975 = state_16953;
(statearr_16975[(10)] = inst_16942);

(statearr_16975[(7)] = inst_16926);

return statearr_16975;
})();
var statearr_16976_18211 = state_16953__$1;
(statearr_16976_18211[(2)] = null);

(statearr_16976_18211[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16954 === (9))){
var inst_16929 = (state_16953[(8)]);
var state_16953__$1 = state_16953;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_16953__$1,(11),out,inst_16929);
} else {
if((state_val_16954 === (5))){
var inst_16926 = (state_16953[(7)]);
var inst_16929 = (state_16953[(8)]);
var inst_16937 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_16929,inst_16926);
var state_16953__$1 = state_16953;
if(inst_16937){
var statearr_16978_18212 = state_16953__$1;
(statearr_16978_18212[(1)] = (8));

} else {
var statearr_16979_18213 = state_16953__$1;
(statearr_16979_18213[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16954 === (10))){
var inst_16945 = (state_16953[(2)]);
var state_16953__$1 = state_16953;
var statearr_16980_18214 = state_16953__$1;
(statearr_16980_18214[(2)] = inst_16945);

(statearr_16980_18214[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16954 === (8))){
var inst_16926 = (state_16953[(7)]);
var tmp16977 = inst_16926;
var inst_16926__$1 = tmp16977;
var state_16953__$1 = (function (){var statearr_16982 = state_16953;
(statearr_16982[(7)] = inst_16926__$1);

return statearr_16982;
})();
var statearr_16983_18215 = state_16953__$1;
(statearr_16983_18215[(2)] = null);

(statearr_16983_18215[(1)] = (2));


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
}
});
return (function() {
var cljs$core$async$state_machine__13479__auto__ = null;
var cljs$core$async$state_machine__13479__auto____0 = (function (){
var statearr_16990 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_16990[(0)] = cljs$core$async$state_machine__13479__auto__);

(statearr_16990[(1)] = (1));

return statearr_16990;
});
var cljs$core$async$state_machine__13479__auto____1 = (function (state_16953){
while(true){
var ret_value__13480__auto__ = (function (){try{while(true){
var result__13481__auto__ = switch__13478__auto__(state_16953);
if(cljs.core.keyword_identical_QMARK_(result__13481__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__13481__auto__;
}
break;
}
}catch (e16994){var ex__13482__auto__ = e16994;
var statearr_16995_18220 = state_16953;
(statearr_16995_18220[(2)] = ex__13482__auto__);


if(cljs.core.seq((state_16953[(4)]))){
var statearr_16997_18221 = state_16953;
(statearr_16997_18221[(1)] = cljs.core.first((state_16953[(4)])));

} else {
throw ex__13482__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__13480__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__18222 = state_16953;
state_16953 = G__18222;
continue;
} else {
return ret_value__13480__auto__;
}
break;
}
});
cljs$core$async$state_machine__13479__auto__ = function(state_16953){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__13479__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__13479__auto____1.call(this,state_16953);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__13479__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__13479__auto____0;
cljs$core$async$state_machine__13479__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__13479__auto____1;
return cljs$core$async$state_machine__13479__auto__;
})()
})();
var state__13771__auto__ = (function (){var statearr_16998 = f__13770__auto__();
(statearr_16998[(6)] = c__13768__auto___18205);

return statearr_16998;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__13771__auto__);
}));


return out;
}));

(cljs.core.async.unique.cljs$lang$maxFixedArity = 2);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var G__17003 = arguments.length;
switch (G__17003) {
case 2:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3(n,ch,null);
}));

(cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__13768__auto___18226 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__13770__auto__ = (function (){var switch__13478__auto__ = (function (state_17041){
var state_val_17042 = (state_17041[(1)]);
if((state_val_17042 === (7))){
var inst_17037 = (state_17041[(2)]);
var state_17041__$1 = state_17041;
var statearr_17046_18228 = state_17041__$1;
(statearr_17046_18228[(2)] = inst_17037);

(statearr_17046_18228[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17042 === (1))){
var inst_17004 = (new Array(n));
var inst_17005 = inst_17004;
var inst_17006 = (0);
var state_17041__$1 = (function (){var statearr_17047 = state_17041;
(statearr_17047[(7)] = inst_17006);

(statearr_17047[(8)] = inst_17005);

return statearr_17047;
})();
var statearr_17048_18229 = state_17041__$1;
(statearr_17048_18229[(2)] = null);

(statearr_17048_18229[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17042 === (4))){
var inst_17009 = (state_17041[(9)]);
var inst_17009__$1 = (state_17041[(2)]);
var inst_17010 = (inst_17009__$1 == null);
var inst_17011 = cljs.core.not(inst_17010);
var state_17041__$1 = (function (){var statearr_17049 = state_17041;
(statearr_17049[(9)] = inst_17009__$1);

return statearr_17049;
})();
if(inst_17011){
var statearr_17050_18230 = state_17041__$1;
(statearr_17050_18230[(1)] = (5));

} else {
var statearr_17051_18231 = state_17041__$1;
(statearr_17051_18231[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17042 === (15))){
var inst_17031 = (state_17041[(2)]);
var state_17041__$1 = state_17041;
var statearr_17052_18232 = state_17041__$1;
(statearr_17052_18232[(2)] = inst_17031);

(statearr_17052_18232[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17042 === (13))){
var state_17041__$1 = state_17041;
var statearr_17053_18233 = state_17041__$1;
(statearr_17053_18233[(2)] = null);

(statearr_17053_18233[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17042 === (6))){
var inst_17006 = (state_17041[(7)]);
var inst_17027 = (inst_17006 > (0));
var state_17041__$1 = state_17041;
if(cljs.core.truth_(inst_17027)){
var statearr_17055_18234 = state_17041__$1;
(statearr_17055_18234[(1)] = (12));

} else {
var statearr_17056_18235 = state_17041__$1;
(statearr_17056_18235[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17042 === (3))){
var inst_17039 = (state_17041[(2)]);
var state_17041__$1 = state_17041;
return cljs.core.async.impl.ioc_helpers.return_chan(state_17041__$1,inst_17039);
} else {
if((state_val_17042 === (12))){
var inst_17005 = (state_17041[(8)]);
var inst_17029 = cljs.core.vec(inst_17005);
var state_17041__$1 = state_17041;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_17041__$1,(15),out,inst_17029);
} else {
if((state_val_17042 === (2))){
var state_17041__$1 = state_17041;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_17041__$1,(4),ch);
} else {
if((state_val_17042 === (11))){
var inst_17021 = (state_17041[(2)]);
var inst_17022 = (new Array(n));
var inst_17005 = inst_17022;
var inst_17006 = (0);
var state_17041__$1 = (function (){var statearr_17058 = state_17041;
(statearr_17058[(10)] = inst_17021);

(statearr_17058[(7)] = inst_17006);

(statearr_17058[(8)] = inst_17005);

return statearr_17058;
})();
var statearr_17059_18243 = state_17041__$1;
(statearr_17059_18243[(2)] = null);

(statearr_17059_18243[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17042 === (9))){
var inst_17005 = (state_17041[(8)]);
var inst_17019 = cljs.core.vec(inst_17005);
var state_17041__$1 = state_17041;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_17041__$1,(11),out,inst_17019);
} else {
if((state_val_17042 === (5))){
var inst_17006 = (state_17041[(7)]);
var inst_17014 = (state_17041[(11)]);
var inst_17009 = (state_17041[(9)]);
var inst_17005 = (state_17041[(8)]);
var inst_17013 = (inst_17005[inst_17006] = inst_17009);
var inst_17014__$1 = (inst_17006 + (1));
var inst_17015 = (inst_17014__$1 < n);
var state_17041__$1 = (function (){var statearr_17068 = state_17041;
(statearr_17068[(11)] = inst_17014__$1);

(statearr_17068[(12)] = inst_17013);

return statearr_17068;
})();
if(cljs.core.truth_(inst_17015)){
var statearr_17069_18245 = state_17041__$1;
(statearr_17069_18245[(1)] = (8));

} else {
var statearr_17073_18246 = state_17041__$1;
(statearr_17073_18246[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17042 === (14))){
var inst_17034 = (state_17041[(2)]);
var inst_17035 = cljs.core.async.close_BANG_(out);
var state_17041__$1 = (function (){var statearr_17075 = state_17041;
(statearr_17075[(13)] = inst_17034);

return statearr_17075;
})();
var statearr_17076_18247 = state_17041__$1;
(statearr_17076_18247[(2)] = inst_17035);

(statearr_17076_18247[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17042 === (10))){
var inst_17025 = (state_17041[(2)]);
var state_17041__$1 = state_17041;
var statearr_17077_18248 = state_17041__$1;
(statearr_17077_18248[(2)] = inst_17025);

(statearr_17077_18248[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17042 === (8))){
var inst_17014 = (state_17041[(11)]);
var inst_17005 = (state_17041[(8)]);
var tmp17074 = inst_17005;
var inst_17005__$1 = tmp17074;
var inst_17006 = inst_17014;
var state_17041__$1 = (function (){var statearr_17078 = state_17041;
(statearr_17078[(7)] = inst_17006);

(statearr_17078[(8)] = inst_17005__$1);

return statearr_17078;
})();
var statearr_17079_18249 = state_17041__$1;
(statearr_17079_18249[(2)] = null);

(statearr_17079_18249[(1)] = (2));


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
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__13479__auto__ = null;
var cljs$core$async$state_machine__13479__auto____0 = (function (){
var statearr_17081 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_17081[(0)] = cljs$core$async$state_machine__13479__auto__);

(statearr_17081[(1)] = (1));

return statearr_17081;
});
var cljs$core$async$state_machine__13479__auto____1 = (function (state_17041){
while(true){
var ret_value__13480__auto__ = (function (){try{while(true){
var result__13481__auto__ = switch__13478__auto__(state_17041);
if(cljs.core.keyword_identical_QMARK_(result__13481__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__13481__auto__;
}
break;
}
}catch (e17082){var ex__13482__auto__ = e17082;
var statearr_17083_18255 = state_17041;
(statearr_17083_18255[(2)] = ex__13482__auto__);


if(cljs.core.seq((state_17041[(4)]))){
var statearr_17084_18256 = state_17041;
(statearr_17084_18256[(1)] = cljs.core.first((state_17041[(4)])));

} else {
throw ex__13482__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__13480__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__18257 = state_17041;
state_17041 = G__18257;
continue;
} else {
return ret_value__13480__auto__;
}
break;
}
});
cljs$core$async$state_machine__13479__auto__ = function(state_17041){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__13479__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__13479__auto____1.call(this,state_17041);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__13479__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__13479__auto____0;
cljs$core$async$state_machine__13479__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__13479__auto____1;
return cljs$core$async$state_machine__13479__auto__;
})()
})();
var state__13771__auto__ = (function (){var statearr_17088 = f__13770__auto__();
(statearr_17088[(6)] = c__13768__auto___18226);

return statearr_17088;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__13771__auto__);
}));


return out;
}));

(cljs.core.async.partition.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var G__17090 = arguments.length;
switch (G__17090) {
case 2:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2 = (function (f,ch){
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3(f,ch,null);
}));

(cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__13768__auto___18259 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__13770__auto__ = (function (){var switch__13478__auto__ = (function (state_17135){
var state_val_17136 = (state_17135[(1)]);
if((state_val_17136 === (7))){
var inst_17131 = (state_17135[(2)]);
var state_17135__$1 = state_17135;
var statearr_17138_18260 = state_17135__$1;
(statearr_17138_18260[(2)] = inst_17131);

(statearr_17138_18260[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17136 === (1))){
var inst_17091 = [];
var inst_17092 = inst_17091;
var inst_17093 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_17135__$1 = (function (){var statearr_17140 = state_17135;
(statearr_17140[(7)] = inst_17093);

(statearr_17140[(8)] = inst_17092);

return statearr_17140;
})();
var statearr_17141_18261 = state_17135__$1;
(statearr_17141_18261[(2)] = null);

(statearr_17141_18261[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17136 === (4))){
var inst_17096 = (state_17135[(9)]);
var inst_17096__$1 = (state_17135[(2)]);
var inst_17097 = (inst_17096__$1 == null);
var inst_17098 = cljs.core.not(inst_17097);
var state_17135__$1 = (function (){var statearr_17142 = state_17135;
(statearr_17142[(9)] = inst_17096__$1);

return statearr_17142;
})();
if(inst_17098){
var statearr_17144_18262 = state_17135__$1;
(statearr_17144_18262[(1)] = (5));

} else {
var statearr_17145_18263 = state_17135__$1;
(statearr_17145_18263[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17136 === (15))){
var inst_17092 = (state_17135[(8)]);
var inst_17123 = cljs.core.vec(inst_17092);
var state_17135__$1 = state_17135;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_17135__$1,(18),out,inst_17123);
} else {
if((state_val_17136 === (13))){
var inst_17118 = (state_17135[(2)]);
var state_17135__$1 = state_17135;
var statearr_17147_18264 = state_17135__$1;
(statearr_17147_18264[(2)] = inst_17118);

(statearr_17147_18264[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17136 === (6))){
var inst_17092 = (state_17135[(8)]);
var inst_17120 = inst_17092.length;
var inst_17121 = (inst_17120 > (0));
var state_17135__$1 = state_17135;
if(cljs.core.truth_(inst_17121)){
var statearr_17148_18265 = state_17135__$1;
(statearr_17148_18265[(1)] = (15));

} else {
var statearr_17149_18266 = state_17135__$1;
(statearr_17149_18266[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17136 === (17))){
var inst_17128 = (state_17135[(2)]);
var inst_17129 = cljs.core.async.close_BANG_(out);
var state_17135__$1 = (function (){var statearr_17151 = state_17135;
(statearr_17151[(10)] = inst_17128);

return statearr_17151;
})();
var statearr_17152_18267 = state_17135__$1;
(statearr_17152_18267[(2)] = inst_17129);

(statearr_17152_18267[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17136 === (3))){
var inst_17133 = (state_17135[(2)]);
var state_17135__$1 = state_17135;
return cljs.core.async.impl.ioc_helpers.return_chan(state_17135__$1,inst_17133);
} else {
if((state_val_17136 === (12))){
var inst_17092 = (state_17135[(8)]);
var inst_17111 = cljs.core.vec(inst_17092);
var state_17135__$1 = state_17135;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_17135__$1,(14),out,inst_17111);
} else {
if((state_val_17136 === (2))){
var state_17135__$1 = state_17135;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_17135__$1,(4),ch);
} else {
if((state_val_17136 === (11))){
var inst_17100 = (state_17135[(11)]);
var inst_17096 = (state_17135[(9)]);
var inst_17092 = (state_17135[(8)]);
var inst_17108 = inst_17092.push(inst_17096);
var tmp17154 = inst_17092;
var inst_17092__$1 = tmp17154;
var inst_17093 = inst_17100;
var state_17135__$1 = (function (){var statearr_17155 = state_17135;
(statearr_17155[(12)] = inst_17108);

(statearr_17155[(7)] = inst_17093);

(statearr_17155[(8)] = inst_17092__$1);

return statearr_17155;
})();
var statearr_17156_18272 = state_17135__$1;
(statearr_17156_18272[(2)] = null);

(statearr_17156_18272[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17136 === (9))){
var inst_17093 = (state_17135[(7)]);
var inst_17104 = cljs.core.keyword_identical_QMARK_(inst_17093,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var state_17135__$1 = state_17135;
var statearr_17159_18273 = state_17135__$1;
(statearr_17159_18273[(2)] = inst_17104);

(statearr_17159_18273[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17136 === (5))){
var inst_17101 = (state_17135[(13)]);
var inst_17100 = (state_17135[(11)]);
var inst_17096 = (state_17135[(9)]);
var inst_17093 = (state_17135[(7)]);
var inst_17100__$1 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_17096) : f.call(null, inst_17096));
var inst_17101__$1 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_17100__$1,inst_17093);
var state_17135__$1 = (function (){var statearr_17160 = state_17135;
(statearr_17160[(13)] = inst_17101__$1);

(statearr_17160[(11)] = inst_17100__$1);

return statearr_17160;
})();
if(inst_17101__$1){
var statearr_17161_18278 = state_17135__$1;
(statearr_17161_18278[(1)] = (8));

} else {
var statearr_17163_18279 = state_17135__$1;
(statearr_17163_18279[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17136 === (14))){
var inst_17100 = (state_17135[(11)]);
var inst_17096 = (state_17135[(9)]);
var inst_17113 = (state_17135[(2)]);
var inst_17114 = [];
var inst_17115 = inst_17114.push(inst_17096);
var inst_17092 = inst_17114;
var inst_17093 = inst_17100;
var state_17135__$1 = (function (){var statearr_17164 = state_17135;
(statearr_17164[(14)] = inst_17113);

(statearr_17164[(15)] = inst_17115);

(statearr_17164[(7)] = inst_17093);

(statearr_17164[(8)] = inst_17092);

return statearr_17164;
})();
var statearr_17165_18281 = state_17135__$1;
(statearr_17165_18281[(2)] = null);

(statearr_17165_18281[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17136 === (16))){
var state_17135__$1 = state_17135;
var statearr_17166_18282 = state_17135__$1;
(statearr_17166_18282[(2)] = null);

(statearr_17166_18282[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17136 === (10))){
var inst_17106 = (state_17135[(2)]);
var state_17135__$1 = state_17135;
if(cljs.core.truth_(inst_17106)){
var statearr_17167_18283 = state_17135__$1;
(statearr_17167_18283[(1)] = (11));

} else {
var statearr_17168_18284 = state_17135__$1;
(statearr_17168_18284[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17136 === (18))){
var inst_17125 = (state_17135[(2)]);
var state_17135__$1 = state_17135;
var statearr_17169_18285 = state_17135__$1;
(statearr_17169_18285[(2)] = inst_17125);

(statearr_17169_18285[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17136 === (8))){
var inst_17101 = (state_17135[(13)]);
var state_17135__$1 = state_17135;
var statearr_17170_18289 = state_17135__$1;
(statearr_17170_18289[(2)] = inst_17101);

(statearr_17170_18289[(1)] = (10));


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
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__13479__auto__ = null;
var cljs$core$async$state_machine__13479__auto____0 = (function (){
var statearr_17172 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_17172[(0)] = cljs$core$async$state_machine__13479__auto__);

(statearr_17172[(1)] = (1));

return statearr_17172;
});
var cljs$core$async$state_machine__13479__auto____1 = (function (state_17135){
while(true){
var ret_value__13480__auto__ = (function (){try{while(true){
var result__13481__auto__ = switch__13478__auto__(state_17135);
if(cljs.core.keyword_identical_QMARK_(result__13481__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__13481__auto__;
}
break;
}
}catch (e17173){var ex__13482__auto__ = e17173;
var statearr_17174_18290 = state_17135;
(statearr_17174_18290[(2)] = ex__13482__auto__);


if(cljs.core.seq((state_17135[(4)]))){
var statearr_17178_18291 = state_17135;
(statearr_17178_18291[(1)] = cljs.core.first((state_17135[(4)])));

} else {
throw ex__13482__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__13480__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__18292 = state_17135;
state_17135 = G__18292;
continue;
} else {
return ret_value__13480__auto__;
}
break;
}
});
cljs$core$async$state_machine__13479__auto__ = function(state_17135){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__13479__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__13479__auto____1.call(this,state_17135);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__13479__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__13479__auto____0;
cljs$core$async$state_machine__13479__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__13479__auto____1;
return cljs$core$async$state_machine__13479__auto__;
})()
})();
var state__13771__auto__ = (function (){var statearr_17179 = f__13770__auto__();
(statearr_17179[(6)] = c__13768__auto___18259);

return statearr_17179;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__13771__auto__);
}));


return out;
}));

(cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3);


//# sourceMappingURL=cljs.core.async.js.map
