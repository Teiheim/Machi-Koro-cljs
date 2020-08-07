goog.provide('cljs.core.async');
cljs.core.async.fn_handler = (function cljs$core$async$fn_handler(var_args){
var G__33258 = arguments.length;
switch (G__33258) {
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
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async33259 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async33259 = (function (f,blockable,meta33260){
this.f = f;
this.blockable = blockable;
this.meta33260 = meta33260;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async33259.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_33261,meta33260__$1){
var self__ = this;
var _33261__$1 = this;
return (new cljs.core.async.t_cljs$core$async33259(self__.f,self__.blockable,meta33260__$1));
}));

(cljs.core.async.t_cljs$core$async33259.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_33261){
var self__ = this;
var _33261__$1 = this;
return self__.meta33260;
}));

(cljs.core.async.t_cljs$core$async33259.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async33259.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async33259.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
}));

(cljs.core.async.t_cljs$core$async33259.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
}));

(cljs.core.async.t_cljs$core$async33259.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta33260","meta33260",1606032625,null)], null);
}));

(cljs.core.async.t_cljs$core$async33259.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async33259.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async33259");

(cljs.core.async.t_cljs$core$async33259.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async33259");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async33259.
 */
cljs.core.async.__GT_t_cljs$core$async33259 = (function cljs$core$async$__GT_t_cljs$core$async33259(f__$1,blockable__$1,meta33260){
return (new cljs.core.async.t_cljs$core$async33259(f__$1,blockable__$1,meta33260));
});

}

return (new cljs.core.async.t_cljs$core$async33259(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
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
var G__33264 = arguments.length;
switch (G__33264) {
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
var G__33266 = arguments.length;
switch (G__33266) {
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
var G__33268 = arguments.length;
switch (G__33268) {
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
var val_34984 = cljs.core.deref(ret);
if(cljs.core.truth_(on_caller_QMARK_)){
(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_34984) : fn1.call(null,val_34984));
} else {
cljs.core.async.impl.dispatch.run((function (){
return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_34984) : fn1.call(null,val_34984));
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
var G__33270 = arguments.length;
switch (G__33270) {
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
var temp__5733__auto__ = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fhnop);
if(cljs.core.truth_(temp__5733__auto__)){
var ret = temp__5733__auto__;
return cljs.core.deref(ret);
} else {
return true;
}
}));

(cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,val,fn1){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4(port,val,fn1,true);
}));

(cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (port,val,fn1,on_caller_QMARK_){
var temp__5733__auto__ = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(fn1));
if(cljs.core.truth_(temp__5733__auto__)){
var retb = temp__5733__auto__;
var ret = cljs.core.deref(retb);
if(cljs.core.truth_(on_caller_QMARK_)){
(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(ret) : fn1.call(null,ret));
} else {
cljs.core.async.impl.dispatch.run((function (){
return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(ret) : fn1.call(null,ret));
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
var n__4613__auto___34986 = n;
var x_34987 = (0);
while(true){
if((x_34987 < n__4613__auto___34986)){
(a[x_34987] = x_34987);

var G__34988 = (x_34987 + (1));
x_34987 = G__34988;
continue;
} else {
}
break;
}

goog.array.shuffle(a);

return a;
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(true);
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async33271 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async33271 = (function (flag,meta33272){
this.flag = flag;
this.meta33272 = meta33272;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async33271.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_33273,meta33272__$1){
var self__ = this;
var _33273__$1 = this;
return (new cljs.core.async.t_cljs$core$async33271(self__.flag,meta33272__$1));
}));

(cljs.core.async.t_cljs$core$async33271.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_33273){
var self__ = this;
var _33273__$1 = this;
return self__.meta33272;
}));

(cljs.core.async.t_cljs$core$async33271.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async33271.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref(self__.flag);
}));

(cljs.core.async.t_cljs$core$async33271.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async33271.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.flag,null);

return true;
}));

(cljs.core.async.t_cljs$core$async33271.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta33272","meta33272",1185083518,null)], null);
}));

(cljs.core.async.t_cljs$core$async33271.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async33271.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async33271");

(cljs.core.async.t_cljs$core$async33271.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async33271");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async33271.
 */
cljs.core.async.__GT_t_cljs$core$async33271 = (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async33271(flag__$1,meta33272){
return (new cljs.core.async.t_cljs$core$async33271(flag__$1,meta33272));
});

}

return (new cljs.core.async.t_cljs$core$async33271(flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async33274 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async33274 = (function (flag,cb,meta33275){
this.flag = flag;
this.cb = cb;
this.meta33275 = meta33275;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async33274.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_33276,meta33275__$1){
var self__ = this;
var _33276__$1 = this;
return (new cljs.core.async.t_cljs$core$async33274(self__.flag,self__.cb,meta33275__$1));
}));

(cljs.core.async.t_cljs$core$async33274.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_33276){
var self__ = this;
var _33276__$1 = this;
return self__.meta33275;
}));

(cljs.core.async.t_cljs$core$async33274.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async33274.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.flag);
}));

(cljs.core.async.t_cljs$core$async33274.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async33274.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit(self__.flag);

return self__.cb;
}));

(cljs.core.async.t_cljs$core$async33274.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta33275","meta33275",1787861320,null)], null);
}));

(cljs.core.async.t_cljs$core$async33274.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async33274.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async33274");

(cljs.core.async.t_cljs$core$async33274.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async33274");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async33274.
 */
cljs.core.async.__GT_t_cljs$core$async33274 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async33274(flag__$1,cb__$1,meta33275){
return (new cljs.core.async.t_cljs$core$async33274(flag__$1,cb__$1,meta33275));
});

}

return (new cljs.core.async.t_cljs$core$async33274(flag,cb,cljs.core.PersistentArrayMap.EMPTY));
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
var wport = ((cljs.core.vector_QMARK_(port))?(port.cljs$core$IFn$_invoke$arity$1 ? port.cljs$core$IFn$_invoke$arity$1((0)) : port.call(null,(0))):null);
var vbox = (cljs.core.truth_(wport)?(function (){var val = (port.cljs$core$IFn$_invoke$arity$1 ? port.cljs$core$IFn$_invoke$arity$1((1)) : port.call(null,(1)));
return cljs.core.async.impl.protocols.put_BANG_(wport,val,cljs.core.async.alt_handler(flag,((function (i,val,idx,port,wport,flag,n,idxs,priority){
return (function (p1__33277_SHARP_){
var G__33279 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__33277_SHARP_,wport], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__33279) : fret.call(null,G__33279));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.alt_handler(flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__33278_SHARP_){
var G__33280 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__33278_SHARP_,port], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__33280) : fret.call(null,G__33280));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref(vbox),(function (){var or__4126__auto__ = wport;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return port;
}
})()], null));
} else {
var G__34991 = (i + (1));
i = G__34991;
continue;
}
} else {
return null;
}
break;
}
})();
var or__4126__auto__ = ret;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
if(cljs.core.contains_QMARK_(opts,new cljs.core.Keyword(null,"default","default",-1987822328))){
var temp__5735__auto__ = (function (){var and__4115__auto__ = flag.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1(null);
if(cljs.core.truth_(and__4115__auto__)){
return flag.cljs$core$async$impl$protocols$Handler$commit$arity$1(null);
} else {
return and__4115__auto__;
}
})();
if(cljs.core.truth_(temp__5735__auto__)){
var got = temp__5735__auto__;
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
var args__4742__auto__ = [];
var len__4736__auto___34992 = arguments.length;
var i__4737__auto___34993 = (0);
while(true){
if((i__4737__auto___34993 < len__4736__auto___34992)){
args__4742__auto__.push((arguments[i__4737__auto___34993]));

var G__34994 = (i__4737__auto___34993 + (1));
i__4737__auto___34993 = G__34994;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((1) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4743__auto__);
});

(cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__33283){
var map__33284 = p__33283;
var map__33284__$1 = (((((!((map__33284 == null))))?(((((map__33284.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__33284.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__33284):map__33284);
var opts = map__33284__$1;
throw (new Error("alts! used not in (go ...) block"));
}));

(cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq33281){
var G__33282 = cljs.core.first(seq33281);
var seq33281__$1 = cljs.core.next(seq33281);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__33282,seq33281__$1);
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
var G__33289 = arguments.length;
switch (G__33289) {
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
var c__33200__auto___34998 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__33201__auto__ = (function (){var switch__33164__auto__ = (function (state_33320){
var state_val_33321 = (state_33320[(1)]);
if((state_val_33321 === (7))){
var inst_33316 = (state_33320[(2)]);
var state_33320__$1 = state_33320;
var statearr_33322_35000 = state_33320__$1;
(statearr_33322_35000[(2)] = inst_33316);

(statearr_33322_35000[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33321 === (1))){
var state_33320__$1 = state_33320;
var statearr_33323_35001 = state_33320__$1;
(statearr_33323_35001[(2)] = null);

(statearr_33323_35001[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33321 === (4))){
var inst_33299 = (state_33320[(7)]);
var inst_33299__$1 = (state_33320[(2)]);
var inst_33300 = (inst_33299__$1 == null);
var state_33320__$1 = (function (){var statearr_33324 = state_33320;
(statearr_33324[(7)] = inst_33299__$1);

return statearr_33324;
})();
if(cljs.core.truth_(inst_33300)){
var statearr_33325_35002 = state_33320__$1;
(statearr_33325_35002[(1)] = (5));

} else {
var statearr_33326_35003 = state_33320__$1;
(statearr_33326_35003[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33321 === (13))){
var state_33320__$1 = state_33320;
var statearr_33327_35004 = state_33320__$1;
(statearr_33327_35004[(2)] = null);

(statearr_33327_35004[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33321 === (6))){
var inst_33299 = (state_33320[(7)]);
var state_33320__$1 = state_33320;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_33320__$1,(11),to,inst_33299);
} else {
if((state_val_33321 === (3))){
var inst_33318 = (state_33320[(2)]);
var state_33320__$1 = state_33320;
return cljs.core.async.impl.ioc_helpers.return_chan(state_33320__$1,inst_33318);
} else {
if((state_val_33321 === (12))){
var state_33320__$1 = state_33320;
var statearr_33328_35007 = state_33320__$1;
(statearr_33328_35007[(2)] = null);

(statearr_33328_35007[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33321 === (2))){
var state_33320__$1 = state_33320;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_33320__$1,(4),from);
} else {
if((state_val_33321 === (11))){
var inst_33309 = (state_33320[(2)]);
var state_33320__$1 = state_33320;
if(cljs.core.truth_(inst_33309)){
var statearr_33329_35008 = state_33320__$1;
(statearr_33329_35008[(1)] = (12));

} else {
var statearr_33330_35009 = state_33320__$1;
(statearr_33330_35009[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33321 === (9))){
var state_33320__$1 = state_33320;
var statearr_33331_35010 = state_33320__$1;
(statearr_33331_35010[(2)] = null);

(statearr_33331_35010[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33321 === (5))){
var state_33320__$1 = state_33320;
if(cljs.core.truth_(close_QMARK_)){
var statearr_33332_35011 = state_33320__$1;
(statearr_33332_35011[(1)] = (8));

} else {
var statearr_33333_35012 = state_33320__$1;
(statearr_33333_35012[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33321 === (14))){
var inst_33314 = (state_33320[(2)]);
var state_33320__$1 = state_33320;
var statearr_33334_35014 = state_33320__$1;
(statearr_33334_35014[(2)] = inst_33314);

(statearr_33334_35014[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33321 === (10))){
var inst_33306 = (state_33320[(2)]);
var state_33320__$1 = state_33320;
var statearr_33335_35016 = state_33320__$1;
(statearr_33335_35016[(2)] = inst_33306);

(statearr_33335_35016[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33321 === (8))){
var inst_33303 = cljs.core.async.close_BANG_(to);
var state_33320__$1 = state_33320;
var statearr_33339_35017 = state_33320__$1;
(statearr_33339_35017[(2)] = inst_33303);

(statearr_33339_35017[(1)] = (10));


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
var cljs$core$async$state_machine__33165__auto__ = null;
var cljs$core$async$state_machine__33165__auto____0 = (function (){
var statearr_33340 = [null,null,null,null,null,null,null,null];
(statearr_33340[(0)] = cljs$core$async$state_machine__33165__auto__);

(statearr_33340[(1)] = (1));

return statearr_33340;
});
var cljs$core$async$state_machine__33165__auto____1 = (function (state_33320){
while(true){
var ret_value__33166__auto__ = (function (){try{while(true){
var result__33167__auto__ = switch__33164__auto__(state_33320);
if(cljs.core.keyword_identical_QMARK_(result__33167__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33167__auto__;
}
break;
}
}catch (e33341){var ex__33168__auto__ = e33341;
var statearr_33342_35018 = state_33320;
(statearr_33342_35018[(2)] = ex__33168__auto__);


if(cljs.core.seq((state_33320[(4)]))){
var statearr_33343_35019 = state_33320;
(statearr_33343_35019[(1)] = cljs.core.first((state_33320[(4)])));

} else {
throw ex__33168__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__33166__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35021 = state_33320;
state_33320 = G__35021;
continue;
} else {
return ret_value__33166__auto__;
}
break;
}
});
cljs$core$async$state_machine__33165__auto__ = function(state_33320){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__33165__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__33165__auto____1.call(this,state_33320);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__33165__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__33165__auto____0;
cljs$core$async$state_machine__33165__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__33165__auto____1;
return cljs$core$async$state_machine__33165__auto__;
})()
})();
var state__33202__auto__ = (function (){var statearr_33349 = f__33201__auto__();
(statearr_33349[(6)] = c__33200__auto___34998);

return statearr_33349;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__33202__auto__);
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
var process = (function (p__33350){
var vec__33354 = p__33350;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33354,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33354,(1),null);
var job = vec__33354;
if((job == null)){
cljs.core.async.close_BANG_(results);

return null;
} else {
var res = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((1),xf,ex_handler);
var c__33200__auto___35023 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__33201__auto__ = (function (){var switch__33164__auto__ = (function (state_33361){
var state_val_33362 = (state_33361[(1)]);
if((state_val_33362 === (1))){
var state_33361__$1 = state_33361;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_33361__$1,(2),res,v);
} else {
if((state_val_33362 === (2))){
var inst_33358 = (state_33361[(2)]);
var inst_33359 = cljs.core.async.close_BANG_(res);
var state_33361__$1 = (function (){var statearr_33363 = state_33361;
(statearr_33363[(7)] = inst_33358);

return statearr_33363;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_33361__$1,inst_33359);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__33165__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__33165__auto____0 = (function (){
var statearr_33364 = [null,null,null,null,null,null,null,null];
(statearr_33364[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__33165__auto__);

(statearr_33364[(1)] = (1));

return statearr_33364;
});
var cljs$core$async$pipeline_STAR__$_state_machine__33165__auto____1 = (function (state_33361){
while(true){
var ret_value__33166__auto__ = (function (){try{while(true){
var result__33167__auto__ = switch__33164__auto__(state_33361);
if(cljs.core.keyword_identical_QMARK_(result__33167__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33167__auto__;
}
break;
}
}catch (e33365){var ex__33168__auto__ = e33365;
var statearr_33366_35026 = state_33361;
(statearr_33366_35026[(2)] = ex__33168__auto__);


if(cljs.core.seq((state_33361[(4)]))){
var statearr_33367_35027 = state_33361;
(statearr_33367_35027[(1)] = cljs.core.first((state_33361[(4)])));

} else {
throw ex__33168__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__33166__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35028 = state_33361;
state_33361 = G__35028;
continue;
} else {
return ret_value__33166__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__33165__auto__ = function(state_33361){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__33165__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__33165__auto____1.call(this,state_33361);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__33165__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__33165__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__33165__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__33165__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__33165__auto__;
})()
})();
var state__33202__auto__ = (function (){var statearr_33369 = f__33201__auto__();
(statearr_33369[(6)] = c__33200__auto___35023);

return statearr_33369;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__33202__auto__);
}));


cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(p,res);

return true;
}
});
var async = (function (p__33371){
var vec__33372 = p__33371;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33372,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33372,(1),null);
var job = vec__33372;
if((job == null)){
cljs.core.async.close_BANG_(results);

return null;
} else {
var res = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
(xf.cljs$core$IFn$_invoke$arity$2 ? xf.cljs$core$IFn$_invoke$arity$2(v,res) : xf.call(null,v,res));

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(p,res);

return true;
}
});
var n__4613__auto___35029 = n;
var __35030 = (0);
while(true){
if((__35030 < n__4613__auto___35029)){
var G__33375_35031 = type;
var G__33375_35032__$1 = (((G__33375_35031 instanceof cljs.core.Keyword))?G__33375_35031.fqn:null);
switch (G__33375_35032__$1) {
case "compute":
var c__33200__auto___35034 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__35030,c__33200__auto___35034,G__33375_35031,G__33375_35032__$1,n__4613__auto___35029,jobs,results,process,async){
return (function (){
var f__33201__auto__ = (function (){var switch__33164__auto__ = ((function (__35030,c__33200__auto___35034,G__33375_35031,G__33375_35032__$1,n__4613__auto___35029,jobs,results,process,async){
return (function (state_33389){
var state_val_33390 = (state_33389[(1)]);
if((state_val_33390 === (1))){
var state_33389__$1 = state_33389;
var statearr_33391_35036 = state_33389__$1;
(statearr_33391_35036[(2)] = null);

(statearr_33391_35036[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33390 === (2))){
var state_33389__$1 = state_33389;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_33389__$1,(4),jobs);
} else {
if((state_val_33390 === (3))){
var inst_33387 = (state_33389[(2)]);
var state_33389__$1 = state_33389;
return cljs.core.async.impl.ioc_helpers.return_chan(state_33389__$1,inst_33387);
} else {
if((state_val_33390 === (4))){
var inst_33379 = (state_33389[(2)]);
var inst_33380 = process(inst_33379);
var state_33389__$1 = state_33389;
if(cljs.core.truth_(inst_33380)){
var statearr_33394_35038 = state_33389__$1;
(statearr_33394_35038[(1)] = (5));

} else {
var statearr_33396_35039 = state_33389__$1;
(statearr_33396_35039[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33390 === (5))){
var state_33389__$1 = state_33389;
var statearr_33398_35040 = state_33389__$1;
(statearr_33398_35040[(2)] = null);

(statearr_33398_35040[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33390 === (6))){
var state_33389__$1 = state_33389;
var statearr_33399_35041 = state_33389__$1;
(statearr_33399_35041[(2)] = null);

(statearr_33399_35041[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33390 === (7))){
var inst_33385 = (state_33389[(2)]);
var state_33389__$1 = state_33389;
var statearr_33400_35042 = state_33389__$1;
(statearr_33400_35042[(2)] = inst_33385);

(statearr_33400_35042[(1)] = (3));


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
});})(__35030,c__33200__auto___35034,G__33375_35031,G__33375_35032__$1,n__4613__auto___35029,jobs,results,process,async))
;
return ((function (__35030,switch__33164__auto__,c__33200__auto___35034,G__33375_35031,G__33375_35032__$1,n__4613__auto___35029,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__33165__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__33165__auto____0 = (function (){
var statearr_33401 = [null,null,null,null,null,null,null];
(statearr_33401[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__33165__auto__);

(statearr_33401[(1)] = (1));

return statearr_33401;
});
var cljs$core$async$pipeline_STAR__$_state_machine__33165__auto____1 = (function (state_33389){
while(true){
var ret_value__33166__auto__ = (function (){try{while(true){
var result__33167__auto__ = switch__33164__auto__(state_33389);
if(cljs.core.keyword_identical_QMARK_(result__33167__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33167__auto__;
}
break;
}
}catch (e33402){var ex__33168__auto__ = e33402;
var statearr_33403_35043 = state_33389;
(statearr_33403_35043[(2)] = ex__33168__auto__);


if(cljs.core.seq((state_33389[(4)]))){
var statearr_33404_35045 = state_33389;
(statearr_33404_35045[(1)] = cljs.core.first((state_33389[(4)])));

} else {
throw ex__33168__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__33166__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35046 = state_33389;
state_33389 = G__35046;
continue;
} else {
return ret_value__33166__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__33165__auto__ = function(state_33389){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__33165__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__33165__auto____1.call(this,state_33389);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__33165__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__33165__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__33165__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__33165__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__33165__auto__;
})()
;})(__35030,switch__33164__auto__,c__33200__auto___35034,G__33375_35031,G__33375_35032__$1,n__4613__auto___35029,jobs,results,process,async))
})();
var state__33202__auto__ = (function (){var statearr_33405 = f__33201__auto__();
(statearr_33405[(6)] = c__33200__auto___35034);

return statearr_33405;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__33202__auto__);
});})(__35030,c__33200__auto___35034,G__33375_35031,G__33375_35032__$1,n__4613__auto___35029,jobs,results,process,async))
);


break;
case "async":
var c__33200__auto___35047 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__35030,c__33200__auto___35047,G__33375_35031,G__33375_35032__$1,n__4613__auto___35029,jobs,results,process,async){
return (function (){
var f__33201__auto__ = (function (){var switch__33164__auto__ = ((function (__35030,c__33200__auto___35047,G__33375_35031,G__33375_35032__$1,n__4613__auto___35029,jobs,results,process,async){
return (function (state_33418){
var state_val_33419 = (state_33418[(1)]);
if((state_val_33419 === (1))){
var state_33418__$1 = state_33418;
var statearr_33420_35048 = state_33418__$1;
(statearr_33420_35048[(2)] = null);

(statearr_33420_35048[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33419 === (2))){
var state_33418__$1 = state_33418;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_33418__$1,(4),jobs);
} else {
if((state_val_33419 === (3))){
var inst_33416 = (state_33418[(2)]);
var state_33418__$1 = state_33418;
return cljs.core.async.impl.ioc_helpers.return_chan(state_33418__$1,inst_33416);
} else {
if((state_val_33419 === (4))){
var inst_33408 = (state_33418[(2)]);
var inst_33409 = async(inst_33408);
var state_33418__$1 = state_33418;
if(cljs.core.truth_(inst_33409)){
var statearr_33421_35049 = state_33418__$1;
(statearr_33421_35049[(1)] = (5));

} else {
var statearr_33422_35050 = state_33418__$1;
(statearr_33422_35050[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33419 === (5))){
var state_33418__$1 = state_33418;
var statearr_33423_35051 = state_33418__$1;
(statearr_33423_35051[(2)] = null);

(statearr_33423_35051[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33419 === (6))){
var state_33418__$1 = state_33418;
var statearr_33425_35056 = state_33418__$1;
(statearr_33425_35056[(2)] = null);

(statearr_33425_35056[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33419 === (7))){
var inst_33414 = (state_33418[(2)]);
var state_33418__$1 = state_33418;
var statearr_33426_35057 = state_33418__$1;
(statearr_33426_35057[(2)] = inst_33414);

(statearr_33426_35057[(1)] = (3));


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
});})(__35030,c__33200__auto___35047,G__33375_35031,G__33375_35032__$1,n__4613__auto___35029,jobs,results,process,async))
;
return ((function (__35030,switch__33164__auto__,c__33200__auto___35047,G__33375_35031,G__33375_35032__$1,n__4613__auto___35029,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__33165__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__33165__auto____0 = (function (){
var statearr_33427 = [null,null,null,null,null,null,null];
(statearr_33427[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__33165__auto__);

(statearr_33427[(1)] = (1));

return statearr_33427;
});
var cljs$core$async$pipeline_STAR__$_state_machine__33165__auto____1 = (function (state_33418){
while(true){
var ret_value__33166__auto__ = (function (){try{while(true){
var result__33167__auto__ = switch__33164__auto__(state_33418);
if(cljs.core.keyword_identical_QMARK_(result__33167__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33167__auto__;
}
break;
}
}catch (e33428){var ex__33168__auto__ = e33428;
var statearr_33429_35058 = state_33418;
(statearr_33429_35058[(2)] = ex__33168__auto__);


if(cljs.core.seq((state_33418[(4)]))){
var statearr_33430_35059 = state_33418;
(statearr_33430_35059[(1)] = cljs.core.first((state_33418[(4)])));

} else {
throw ex__33168__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__33166__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35060 = state_33418;
state_33418 = G__35060;
continue;
} else {
return ret_value__33166__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__33165__auto__ = function(state_33418){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__33165__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__33165__auto____1.call(this,state_33418);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__33165__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__33165__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__33165__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__33165__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__33165__auto__;
})()
;})(__35030,switch__33164__auto__,c__33200__auto___35047,G__33375_35031,G__33375_35032__$1,n__4613__auto___35029,jobs,results,process,async))
})();
var state__33202__auto__ = (function (){var statearr_33431 = f__33201__auto__();
(statearr_33431[(6)] = c__33200__auto___35047);

return statearr_33431;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__33202__auto__);
});})(__35030,c__33200__auto___35047,G__33375_35031,G__33375_35032__$1,n__4613__auto___35029,jobs,results,process,async))
);


break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__33375_35032__$1)].join('')));

}

var G__35061 = (__35030 + (1));
__35030 = G__35061;
continue;
} else {
}
break;
}

var c__33200__auto___35062 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__33201__auto__ = (function (){var switch__33164__auto__ = (function (state_33453){
var state_val_33454 = (state_33453[(1)]);
if((state_val_33454 === (7))){
var inst_33449 = (state_33453[(2)]);
var state_33453__$1 = state_33453;
var statearr_33455_35063 = state_33453__$1;
(statearr_33455_35063[(2)] = inst_33449);

(statearr_33455_35063[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33454 === (1))){
var state_33453__$1 = state_33453;
var statearr_33456_35064 = state_33453__$1;
(statearr_33456_35064[(2)] = null);

(statearr_33456_35064[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33454 === (4))){
var inst_33434 = (state_33453[(7)]);
var inst_33434__$1 = (state_33453[(2)]);
var inst_33435 = (inst_33434__$1 == null);
var state_33453__$1 = (function (){var statearr_33457 = state_33453;
(statearr_33457[(7)] = inst_33434__$1);

return statearr_33457;
})();
if(cljs.core.truth_(inst_33435)){
var statearr_33458_35065 = state_33453__$1;
(statearr_33458_35065[(1)] = (5));

} else {
var statearr_33459_35066 = state_33453__$1;
(statearr_33459_35066[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33454 === (6))){
var inst_33439 = (state_33453[(8)]);
var inst_33434 = (state_33453[(7)]);
var inst_33439__$1 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var inst_33440 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_33441 = [inst_33434,inst_33439__$1];
var inst_33442 = (new cljs.core.PersistentVector(null,2,(5),inst_33440,inst_33441,null));
var state_33453__$1 = (function (){var statearr_33460 = state_33453;
(statearr_33460[(8)] = inst_33439__$1);

return statearr_33460;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_33453__$1,(8),jobs,inst_33442);
} else {
if((state_val_33454 === (3))){
var inst_33451 = (state_33453[(2)]);
var state_33453__$1 = state_33453;
return cljs.core.async.impl.ioc_helpers.return_chan(state_33453__$1,inst_33451);
} else {
if((state_val_33454 === (2))){
var state_33453__$1 = state_33453;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_33453__$1,(4),from);
} else {
if((state_val_33454 === (9))){
var inst_33446 = (state_33453[(2)]);
var state_33453__$1 = (function (){var statearr_33461 = state_33453;
(statearr_33461[(9)] = inst_33446);

return statearr_33461;
})();
var statearr_33462_35069 = state_33453__$1;
(statearr_33462_35069[(2)] = null);

(statearr_33462_35069[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33454 === (5))){
var inst_33437 = cljs.core.async.close_BANG_(jobs);
var state_33453__$1 = state_33453;
var statearr_33463_35070 = state_33453__$1;
(statearr_33463_35070[(2)] = inst_33437);

(statearr_33463_35070[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33454 === (8))){
var inst_33439 = (state_33453[(8)]);
var inst_33444 = (state_33453[(2)]);
var state_33453__$1 = (function (){var statearr_33464 = state_33453;
(statearr_33464[(10)] = inst_33444);

return statearr_33464;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_33453__$1,(9),results,inst_33439);
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
var cljs$core$async$pipeline_STAR__$_state_machine__33165__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__33165__auto____0 = (function (){
var statearr_33465 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_33465[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__33165__auto__);

(statearr_33465[(1)] = (1));

return statearr_33465;
});
var cljs$core$async$pipeline_STAR__$_state_machine__33165__auto____1 = (function (state_33453){
while(true){
var ret_value__33166__auto__ = (function (){try{while(true){
var result__33167__auto__ = switch__33164__auto__(state_33453);
if(cljs.core.keyword_identical_QMARK_(result__33167__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33167__auto__;
}
break;
}
}catch (e33466){var ex__33168__auto__ = e33466;
var statearr_33467_35071 = state_33453;
(statearr_33467_35071[(2)] = ex__33168__auto__);


if(cljs.core.seq((state_33453[(4)]))){
var statearr_33468_35072 = state_33453;
(statearr_33468_35072[(1)] = cljs.core.first((state_33453[(4)])));

} else {
throw ex__33168__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__33166__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35073 = state_33453;
state_33453 = G__35073;
continue;
} else {
return ret_value__33166__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__33165__auto__ = function(state_33453){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__33165__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__33165__auto____1.call(this,state_33453);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__33165__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__33165__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__33165__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__33165__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__33165__auto__;
})()
})();
var state__33202__auto__ = (function (){var statearr_33470 = f__33201__auto__();
(statearr_33470[(6)] = c__33200__auto___35062);

return statearr_33470;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__33202__auto__);
}));


var c__33200__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__33201__auto__ = (function (){var switch__33164__auto__ = (function (state_33509){
var state_val_33510 = (state_33509[(1)]);
if((state_val_33510 === (7))){
var inst_33505 = (state_33509[(2)]);
var state_33509__$1 = state_33509;
var statearr_33511_35081 = state_33509__$1;
(statearr_33511_35081[(2)] = inst_33505);

(statearr_33511_35081[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33510 === (20))){
var state_33509__$1 = state_33509;
var statearr_33512_35082 = state_33509__$1;
(statearr_33512_35082[(2)] = null);

(statearr_33512_35082[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33510 === (1))){
var state_33509__$1 = state_33509;
var statearr_33513_35083 = state_33509__$1;
(statearr_33513_35083[(2)] = null);

(statearr_33513_35083[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33510 === (4))){
var inst_33473 = (state_33509[(7)]);
var inst_33473__$1 = (state_33509[(2)]);
var inst_33474 = (inst_33473__$1 == null);
var state_33509__$1 = (function (){var statearr_33514 = state_33509;
(statearr_33514[(7)] = inst_33473__$1);

return statearr_33514;
})();
if(cljs.core.truth_(inst_33474)){
var statearr_33516_35087 = state_33509__$1;
(statearr_33516_35087[(1)] = (5));

} else {
var statearr_33517_35088 = state_33509__$1;
(statearr_33517_35088[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33510 === (15))){
var inst_33487 = (state_33509[(8)]);
var state_33509__$1 = state_33509;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_33509__$1,(18),to,inst_33487);
} else {
if((state_val_33510 === (21))){
var inst_33500 = (state_33509[(2)]);
var state_33509__$1 = state_33509;
var statearr_33518_35092 = state_33509__$1;
(statearr_33518_35092[(2)] = inst_33500);

(statearr_33518_35092[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33510 === (13))){
var inst_33502 = (state_33509[(2)]);
var state_33509__$1 = (function (){var statearr_33520 = state_33509;
(statearr_33520[(9)] = inst_33502);

return statearr_33520;
})();
var statearr_33521_35093 = state_33509__$1;
(statearr_33521_35093[(2)] = null);

(statearr_33521_35093[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33510 === (6))){
var inst_33473 = (state_33509[(7)]);
var state_33509__$1 = state_33509;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_33509__$1,(11),inst_33473);
} else {
if((state_val_33510 === (17))){
var inst_33495 = (state_33509[(2)]);
var state_33509__$1 = state_33509;
if(cljs.core.truth_(inst_33495)){
var statearr_33522_35097 = state_33509__$1;
(statearr_33522_35097[(1)] = (19));

} else {
var statearr_33523_35098 = state_33509__$1;
(statearr_33523_35098[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33510 === (3))){
var inst_33507 = (state_33509[(2)]);
var state_33509__$1 = state_33509;
return cljs.core.async.impl.ioc_helpers.return_chan(state_33509__$1,inst_33507);
} else {
if((state_val_33510 === (12))){
var inst_33484 = (state_33509[(10)]);
var state_33509__$1 = state_33509;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_33509__$1,(14),inst_33484);
} else {
if((state_val_33510 === (2))){
var state_33509__$1 = state_33509;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_33509__$1,(4),results);
} else {
if((state_val_33510 === (19))){
var state_33509__$1 = state_33509;
var statearr_33525_35099 = state_33509__$1;
(statearr_33525_35099[(2)] = null);

(statearr_33525_35099[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33510 === (11))){
var inst_33484 = (state_33509[(2)]);
var state_33509__$1 = (function (){var statearr_33526 = state_33509;
(statearr_33526[(10)] = inst_33484);

return statearr_33526;
})();
var statearr_33527_35107 = state_33509__$1;
(statearr_33527_35107[(2)] = null);

(statearr_33527_35107[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33510 === (9))){
var state_33509__$1 = state_33509;
var statearr_33528_35108 = state_33509__$1;
(statearr_33528_35108[(2)] = null);

(statearr_33528_35108[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33510 === (5))){
var state_33509__$1 = state_33509;
if(cljs.core.truth_(close_QMARK_)){
var statearr_33529_35109 = state_33509__$1;
(statearr_33529_35109[(1)] = (8));

} else {
var statearr_33530_35110 = state_33509__$1;
(statearr_33530_35110[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33510 === (14))){
var inst_33487 = (state_33509[(8)]);
var inst_33487__$1 = (state_33509[(2)]);
var inst_33488 = (inst_33487__$1 == null);
var inst_33489 = cljs.core.not(inst_33488);
var state_33509__$1 = (function (){var statearr_33531 = state_33509;
(statearr_33531[(8)] = inst_33487__$1);

return statearr_33531;
})();
if(inst_33489){
var statearr_33532_35114 = state_33509__$1;
(statearr_33532_35114[(1)] = (15));

} else {
var statearr_33533_35115 = state_33509__$1;
(statearr_33533_35115[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33510 === (16))){
var state_33509__$1 = state_33509;
var statearr_33534_35116 = state_33509__$1;
(statearr_33534_35116[(2)] = false);

(statearr_33534_35116[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33510 === (10))){
var inst_33480 = (state_33509[(2)]);
var state_33509__$1 = state_33509;
var statearr_33536_35120 = state_33509__$1;
(statearr_33536_35120[(2)] = inst_33480);

(statearr_33536_35120[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33510 === (18))){
var inst_33492 = (state_33509[(2)]);
var state_33509__$1 = state_33509;
var statearr_33538_35121 = state_33509__$1;
(statearr_33538_35121[(2)] = inst_33492);

(statearr_33538_35121[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33510 === (8))){
var inst_33477 = cljs.core.async.close_BANG_(to);
var state_33509__$1 = state_33509;
var statearr_33539_35122 = state_33509__$1;
(statearr_33539_35122[(2)] = inst_33477);

(statearr_33539_35122[(1)] = (10));


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
var cljs$core$async$pipeline_STAR__$_state_machine__33165__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__33165__auto____0 = (function (){
var statearr_33540 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_33540[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__33165__auto__);

(statearr_33540[(1)] = (1));

return statearr_33540;
});
var cljs$core$async$pipeline_STAR__$_state_machine__33165__auto____1 = (function (state_33509){
while(true){
var ret_value__33166__auto__ = (function (){try{while(true){
var result__33167__auto__ = switch__33164__auto__(state_33509);
if(cljs.core.keyword_identical_QMARK_(result__33167__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33167__auto__;
}
break;
}
}catch (e33543){var ex__33168__auto__ = e33543;
var statearr_33545_35126 = state_33509;
(statearr_33545_35126[(2)] = ex__33168__auto__);


if(cljs.core.seq((state_33509[(4)]))){
var statearr_33546_35127 = state_33509;
(statearr_33546_35127[(1)] = cljs.core.first((state_33509[(4)])));

} else {
throw ex__33168__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__33166__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35128 = state_33509;
state_33509 = G__35128;
continue;
} else {
return ret_value__33166__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__33165__auto__ = function(state_33509){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__33165__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__33165__auto____1.call(this,state_33509);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__33165__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__33165__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__33165__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__33165__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__33165__auto__;
})()
})();
var state__33202__auto__ = (function (){var statearr_33548 = f__33201__auto__();
(statearr_33548[(6)] = c__33200__auto__);

return statearr_33548;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__33202__auto__);
}));

return c__33200__auto__;
});
/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the async function af, with parallelism n. af
 *   must be a function of two arguments, the first an input value and
 *   the second a channel on which to place the result(s). af must close!
 *   the channel before returning.  The presumption is that af will
 *   return immediately, having launched some asynchronous operation
 *   whose completion/callback will manipulate the result channel. Outputs
 *   will be returned in order relative to  the inputs. By default, the to
 *   channel will be closed when the from channel closes, but can be
 *   determined by the close?  parameter. Will stop consuming the from
 *   channel if the to channel closes.
 */
cljs.core.async.pipeline_async = (function cljs$core$async$pipeline_async(var_args){
var G__33550 = arguments.length;
switch (G__33550) {
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
var G__33552 = arguments.length;
switch (G__33552) {
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
var G__33554 = arguments.length;
switch (G__33554) {
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
var c__33200__auto___35133 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__33201__auto__ = (function (){var switch__33164__auto__ = (function (state_33582){
var state_val_33583 = (state_33582[(1)]);
if((state_val_33583 === (7))){
var inst_33578 = (state_33582[(2)]);
var state_33582__$1 = state_33582;
var statearr_33584_35134 = state_33582__$1;
(statearr_33584_35134[(2)] = inst_33578);

(statearr_33584_35134[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33583 === (1))){
var state_33582__$1 = state_33582;
var statearr_33585_35135 = state_33582__$1;
(statearr_33585_35135[(2)] = null);

(statearr_33585_35135[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33583 === (4))){
var inst_33559 = (state_33582[(7)]);
var inst_33559__$1 = (state_33582[(2)]);
var inst_33560 = (inst_33559__$1 == null);
var state_33582__$1 = (function (){var statearr_33586 = state_33582;
(statearr_33586[(7)] = inst_33559__$1);

return statearr_33586;
})();
if(cljs.core.truth_(inst_33560)){
var statearr_33587_35136 = state_33582__$1;
(statearr_33587_35136[(1)] = (5));

} else {
var statearr_33588_35137 = state_33582__$1;
(statearr_33588_35137[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33583 === (13))){
var state_33582__$1 = state_33582;
var statearr_33589_35138 = state_33582__$1;
(statearr_33589_35138[(2)] = null);

(statearr_33589_35138[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33583 === (6))){
var inst_33559 = (state_33582[(7)]);
var inst_33565 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_33559) : p.call(null,inst_33559));
var state_33582__$1 = state_33582;
if(cljs.core.truth_(inst_33565)){
var statearr_33590_35139 = state_33582__$1;
(statearr_33590_35139[(1)] = (9));

} else {
var statearr_33591_35140 = state_33582__$1;
(statearr_33591_35140[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33583 === (3))){
var inst_33580 = (state_33582[(2)]);
var state_33582__$1 = state_33582;
return cljs.core.async.impl.ioc_helpers.return_chan(state_33582__$1,inst_33580);
} else {
if((state_val_33583 === (12))){
var state_33582__$1 = state_33582;
var statearr_33592_35141 = state_33582__$1;
(statearr_33592_35141[(2)] = null);

(statearr_33592_35141[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33583 === (2))){
var state_33582__$1 = state_33582;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_33582__$1,(4),ch);
} else {
if((state_val_33583 === (11))){
var inst_33559 = (state_33582[(7)]);
var inst_33569 = (state_33582[(2)]);
var state_33582__$1 = state_33582;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_33582__$1,(8),inst_33569,inst_33559);
} else {
if((state_val_33583 === (9))){
var state_33582__$1 = state_33582;
var statearr_33594_35142 = state_33582__$1;
(statearr_33594_35142[(2)] = tc);

(statearr_33594_35142[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33583 === (5))){
var inst_33562 = cljs.core.async.close_BANG_(tc);
var inst_33563 = cljs.core.async.close_BANG_(fc);
var state_33582__$1 = (function (){var statearr_33595 = state_33582;
(statearr_33595[(8)] = inst_33562);

return statearr_33595;
})();
var statearr_33596_35143 = state_33582__$1;
(statearr_33596_35143[(2)] = inst_33563);

(statearr_33596_35143[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33583 === (14))){
var inst_33576 = (state_33582[(2)]);
var state_33582__$1 = state_33582;
var statearr_33597_35145 = state_33582__$1;
(statearr_33597_35145[(2)] = inst_33576);

(statearr_33597_35145[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33583 === (10))){
var state_33582__$1 = state_33582;
var statearr_33598_35148 = state_33582__$1;
(statearr_33598_35148[(2)] = fc);

(statearr_33598_35148[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33583 === (8))){
var inst_33571 = (state_33582[(2)]);
var state_33582__$1 = state_33582;
if(cljs.core.truth_(inst_33571)){
var statearr_33599_35149 = state_33582__$1;
(statearr_33599_35149[(1)] = (12));

} else {
var statearr_33600_35150 = state_33582__$1;
(statearr_33600_35150[(1)] = (13));

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
var cljs$core$async$state_machine__33165__auto__ = null;
var cljs$core$async$state_machine__33165__auto____0 = (function (){
var statearr_33603 = [null,null,null,null,null,null,null,null,null];
(statearr_33603[(0)] = cljs$core$async$state_machine__33165__auto__);

(statearr_33603[(1)] = (1));

return statearr_33603;
});
var cljs$core$async$state_machine__33165__auto____1 = (function (state_33582){
while(true){
var ret_value__33166__auto__ = (function (){try{while(true){
var result__33167__auto__ = switch__33164__auto__(state_33582);
if(cljs.core.keyword_identical_QMARK_(result__33167__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33167__auto__;
}
break;
}
}catch (e33606){var ex__33168__auto__ = e33606;
var statearr_33607_35155 = state_33582;
(statearr_33607_35155[(2)] = ex__33168__auto__);


if(cljs.core.seq((state_33582[(4)]))){
var statearr_33608_35156 = state_33582;
(statearr_33608_35156[(1)] = cljs.core.first((state_33582[(4)])));

} else {
throw ex__33168__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__33166__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35157 = state_33582;
state_33582 = G__35157;
continue;
} else {
return ret_value__33166__auto__;
}
break;
}
});
cljs$core$async$state_machine__33165__auto__ = function(state_33582){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__33165__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__33165__auto____1.call(this,state_33582);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__33165__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__33165__auto____0;
cljs$core$async$state_machine__33165__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__33165__auto____1;
return cljs$core$async$state_machine__33165__auto__;
})()
})();
var state__33202__auto__ = (function (){var statearr_33610 = f__33201__auto__();
(statearr_33610[(6)] = c__33200__auto___35133);

return statearr_33610;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__33202__auto__);
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
var c__33200__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__33201__auto__ = (function (){var switch__33164__auto__ = (function (state_33638){
var state_val_33639 = (state_33638[(1)]);
if((state_val_33639 === (7))){
var inst_33634 = (state_33638[(2)]);
var state_33638__$1 = state_33638;
var statearr_33642_35160 = state_33638__$1;
(statearr_33642_35160[(2)] = inst_33634);

(statearr_33642_35160[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33639 === (1))){
var inst_33615 = init;
var inst_33618 = inst_33615;
var state_33638__$1 = (function (){var statearr_33643 = state_33638;
(statearr_33643[(7)] = inst_33618);

return statearr_33643;
})();
var statearr_33644_35161 = state_33638__$1;
(statearr_33644_35161[(2)] = null);

(statearr_33644_35161[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33639 === (4))){
var inst_33621 = (state_33638[(8)]);
var inst_33621__$1 = (state_33638[(2)]);
var inst_33622 = (inst_33621__$1 == null);
var state_33638__$1 = (function (){var statearr_33646 = state_33638;
(statearr_33646[(8)] = inst_33621__$1);

return statearr_33646;
})();
if(cljs.core.truth_(inst_33622)){
var statearr_33648_35162 = state_33638__$1;
(statearr_33648_35162[(1)] = (5));

} else {
var statearr_33649_35163 = state_33638__$1;
(statearr_33649_35163[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33639 === (6))){
var inst_33618 = (state_33638[(7)]);
var inst_33625 = (state_33638[(9)]);
var inst_33621 = (state_33638[(8)]);
var inst_33625__$1 = (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(inst_33618,inst_33621) : f.call(null,inst_33618,inst_33621));
var inst_33626 = cljs.core.reduced_QMARK_(inst_33625__$1);
var state_33638__$1 = (function (){var statearr_33652 = state_33638;
(statearr_33652[(9)] = inst_33625__$1);

return statearr_33652;
})();
if(inst_33626){
var statearr_33653_35164 = state_33638__$1;
(statearr_33653_35164[(1)] = (8));

} else {
var statearr_33654_35165 = state_33638__$1;
(statearr_33654_35165[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33639 === (3))){
var inst_33636 = (state_33638[(2)]);
var state_33638__$1 = state_33638;
return cljs.core.async.impl.ioc_helpers.return_chan(state_33638__$1,inst_33636);
} else {
if((state_val_33639 === (2))){
var state_33638__$1 = state_33638;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_33638__$1,(4),ch);
} else {
if((state_val_33639 === (9))){
var inst_33625 = (state_33638[(9)]);
var inst_33618 = inst_33625;
var state_33638__$1 = (function (){var statearr_33661 = state_33638;
(statearr_33661[(7)] = inst_33618);

return statearr_33661;
})();
var statearr_33662_35170 = state_33638__$1;
(statearr_33662_35170[(2)] = null);

(statearr_33662_35170[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33639 === (5))){
var inst_33618 = (state_33638[(7)]);
var state_33638__$1 = state_33638;
var statearr_33664_35171 = state_33638__$1;
(statearr_33664_35171[(2)] = inst_33618);

(statearr_33664_35171[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33639 === (10))){
var inst_33632 = (state_33638[(2)]);
var state_33638__$1 = state_33638;
var statearr_33665_35174 = state_33638__$1;
(statearr_33665_35174[(2)] = inst_33632);

(statearr_33665_35174[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33639 === (8))){
var inst_33625 = (state_33638[(9)]);
var inst_33628 = cljs.core.deref(inst_33625);
var state_33638__$1 = state_33638;
var statearr_33667_35177 = state_33638__$1;
(statearr_33667_35177[(2)] = inst_33628);

(statearr_33667_35177[(1)] = (10));


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
var cljs$core$async$reduce_$_state_machine__33165__auto__ = null;
var cljs$core$async$reduce_$_state_machine__33165__auto____0 = (function (){
var statearr_33668 = [null,null,null,null,null,null,null,null,null,null];
(statearr_33668[(0)] = cljs$core$async$reduce_$_state_machine__33165__auto__);

(statearr_33668[(1)] = (1));

return statearr_33668;
});
var cljs$core$async$reduce_$_state_machine__33165__auto____1 = (function (state_33638){
while(true){
var ret_value__33166__auto__ = (function (){try{while(true){
var result__33167__auto__ = switch__33164__auto__(state_33638);
if(cljs.core.keyword_identical_QMARK_(result__33167__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33167__auto__;
}
break;
}
}catch (e33669){var ex__33168__auto__ = e33669;
var statearr_33670_35181 = state_33638;
(statearr_33670_35181[(2)] = ex__33168__auto__);


if(cljs.core.seq((state_33638[(4)]))){
var statearr_33671_35186 = state_33638;
(statearr_33671_35186[(1)] = cljs.core.first((state_33638[(4)])));

} else {
throw ex__33168__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__33166__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35187 = state_33638;
state_33638 = G__35187;
continue;
} else {
return ret_value__33166__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__33165__auto__ = function(state_33638){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__33165__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__33165__auto____1.call(this,state_33638);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__33165__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__33165__auto____0;
cljs$core$async$reduce_$_state_machine__33165__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__33165__auto____1;
return cljs$core$async$reduce_$_state_machine__33165__auto__;
})()
})();
var state__33202__auto__ = (function (){var statearr_33676 = f__33201__auto__();
(statearr_33676[(6)] = c__33200__auto__);

return statearr_33676;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__33202__auto__);
}));

return c__33200__auto__;
});
/**
 * async/reduces a channel with a transformation (xform f).
 *   Returns a channel containing the result.  ch must close before
 *   transduce produces a result.
 */
cljs.core.async.transduce = (function cljs$core$async$transduce(xform,f,init,ch){
var f__$1 = (xform.cljs$core$IFn$_invoke$arity$1 ? xform.cljs$core$IFn$_invoke$arity$1(f) : xform.call(null,f));
var c__33200__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__33201__auto__ = (function (){var switch__33164__auto__ = (function (state_33682){
var state_val_33683 = (state_33682[(1)]);
if((state_val_33683 === (1))){
var inst_33677 = cljs.core.async.reduce(f__$1,init,ch);
var state_33682__$1 = state_33682;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_33682__$1,(2),inst_33677);
} else {
if((state_val_33683 === (2))){
var inst_33679 = (state_33682[(2)]);
var inst_33680 = (f__$1.cljs$core$IFn$_invoke$arity$1 ? f__$1.cljs$core$IFn$_invoke$arity$1(inst_33679) : f__$1.call(null,inst_33679));
var state_33682__$1 = state_33682;
return cljs.core.async.impl.ioc_helpers.return_chan(state_33682__$1,inst_33680);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$transduce_$_state_machine__33165__auto__ = null;
var cljs$core$async$transduce_$_state_machine__33165__auto____0 = (function (){
var statearr_33685 = [null,null,null,null,null,null,null];
(statearr_33685[(0)] = cljs$core$async$transduce_$_state_machine__33165__auto__);

(statearr_33685[(1)] = (1));

return statearr_33685;
});
var cljs$core$async$transduce_$_state_machine__33165__auto____1 = (function (state_33682){
while(true){
var ret_value__33166__auto__ = (function (){try{while(true){
var result__33167__auto__ = switch__33164__auto__(state_33682);
if(cljs.core.keyword_identical_QMARK_(result__33167__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33167__auto__;
}
break;
}
}catch (e33687){var ex__33168__auto__ = e33687;
var statearr_33688_35194 = state_33682;
(statearr_33688_35194[(2)] = ex__33168__auto__);


if(cljs.core.seq((state_33682[(4)]))){
var statearr_33689_35195 = state_33682;
(statearr_33689_35195[(1)] = cljs.core.first((state_33682[(4)])));

} else {
throw ex__33168__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__33166__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35196 = state_33682;
state_33682 = G__35196;
continue;
} else {
return ret_value__33166__auto__;
}
break;
}
});
cljs$core$async$transduce_$_state_machine__33165__auto__ = function(state_33682){
switch(arguments.length){
case 0:
return cljs$core$async$transduce_$_state_machine__33165__auto____0.call(this);
case 1:
return cljs$core$async$transduce_$_state_machine__33165__auto____1.call(this,state_33682);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$transduce_$_state_machine__33165__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$transduce_$_state_machine__33165__auto____0;
cljs$core$async$transduce_$_state_machine__33165__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$transduce_$_state_machine__33165__auto____1;
return cljs$core$async$transduce_$_state_machine__33165__auto__;
})()
})();
var state__33202__auto__ = (function (){var statearr_33690 = f__33201__auto__();
(statearr_33690[(6)] = c__33200__auto__);

return statearr_33690;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__33202__auto__);
}));

return c__33200__auto__;
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
var G__33692 = arguments.length;
switch (G__33692) {
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
var c__33200__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__33201__auto__ = (function (){var switch__33164__auto__ = (function (state_33728){
var state_val_33729 = (state_33728[(1)]);
if((state_val_33729 === (7))){
var inst_33710 = (state_33728[(2)]);
var state_33728__$1 = state_33728;
var statearr_33730_35204 = state_33728__$1;
(statearr_33730_35204[(2)] = inst_33710);

(statearr_33730_35204[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33729 === (1))){
var inst_33704 = cljs.core.seq(coll);
var inst_33705 = inst_33704;
var state_33728__$1 = (function (){var statearr_33731 = state_33728;
(statearr_33731[(7)] = inst_33705);

return statearr_33731;
})();
var statearr_33732_35205 = state_33728__$1;
(statearr_33732_35205[(2)] = null);

(statearr_33732_35205[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33729 === (4))){
var inst_33705 = (state_33728[(7)]);
var inst_33708 = cljs.core.first(inst_33705);
var state_33728__$1 = state_33728;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_33728__$1,(7),ch,inst_33708);
} else {
if((state_val_33729 === (13))){
var inst_33722 = (state_33728[(2)]);
var state_33728__$1 = state_33728;
var statearr_33733_35206 = state_33728__$1;
(statearr_33733_35206[(2)] = inst_33722);

(statearr_33733_35206[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33729 === (6))){
var inst_33713 = (state_33728[(2)]);
var state_33728__$1 = state_33728;
if(cljs.core.truth_(inst_33713)){
var statearr_33734_35207 = state_33728__$1;
(statearr_33734_35207[(1)] = (8));

} else {
var statearr_33735_35208 = state_33728__$1;
(statearr_33735_35208[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33729 === (3))){
var inst_33726 = (state_33728[(2)]);
var state_33728__$1 = state_33728;
return cljs.core.async.impl.ioc_helpers.return_chan(state_33728__$1,inst_33726);
} else {
if((state_val_33729 === (12))){
var state_33728__$1 = state_33728;
var statearr_33736_35209 = state_33728__$1;
(statearr_33736_35209[(2)] = null);

(statearr_33736_35209[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33729 === (2))){
var inst_33705 = (state_33728[(7)]);
var state_33728__$1 = state_33728;
if(cljs.core.truth_(inst_33705)){
var statearr_33737_35210 = state_33728__$1;
(statearr_33737_35210[(1)] = (4));

} else {
var statearr_33738_35211 = state_33728__$1;
(statearr_33738_35211[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33729 === (11))){
var inst_33719 = cljs.core.async.close_BANG_(ch);
var state_33728__$1 = state_33728;
var statearr_33739_35212 = state_33728__$1;
(statearr_33739_35212[(2)] = inst_33719);

(statearr_33739_35212[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33729 === (9))){
var state_33728__$1 = state_33728;
if(cljs.core.truth_(close_QMARK_)){
var statearr_33743_35213 = state_33728__$1;
(statearr_33743_35213[(1)] = (11));

} else {
var statearr_33744_35215 = state_33728__$1;
(statearr_33744_35215[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33729 === (5))){
var inst_33705 = (state_33728[(7)]);
var state_33728__$1 = state_33728;
var statearr_33745_35221 = state_33728__$1;
(statearr_33745_35221[(2)] = inst_33705);

(statearr_33745_35221[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33729 === (10))){
var inst_33724 = (state_33728[(2)]);
var state_33728__$1 = state_33728;
var statearr_33746_35222 = state_33728__$1;
(statearr_33746_35222[(2)] = inst_33724);

(statearr_33746_35222[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33729 === (8))){
var inst_33705 = (state_33728[(7)]);
var inst_33715 = cljs.core.next(inst_33705);
var inst_33705__$1 = inst_33715;
var state_33728__$1 = (function (){var statearr_33747 = state_33728;
(statearr_33747[(7)] = inst_33705__$1);

return statearr_33747;
})();
var statearr_33748_35223 = state_33728__$1;
(statearr_33748_35223[(2)] = null);

(statearr_33748_35223[(1)] = (2));


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
var cljs$core$async$state_machine__33165__auto__ = null;
var cljs$core$async$state_machine__33165__auto____0 = (function (){
var statearr_33749 = [null,null,null,null,null,null,null,null];
(statearr_33749[(0)] = cljs$core$async$state_machine__33165__auto__);

(statearr_33749[(1)] = (1));

return statearr_33749;
});
var cljs$core$async$state_machine__33165__auto____1 = (function (state_33728){
while(true){
var ret_value__33166__auto__ = (function (){try{while(true){
var result__33167__auto__ = switch__33164__auto__(state_33728);
if(cljs.core.keyword_identical_QMARK_(result__33167__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33167__auto__;
}
break;
}
}catch (e33750){var ex__33168__auto__ = e33750;
var statearr_33751_35224 = state_33728;
(statearr_33751_35224[(2)] = ex__33168__auto__);


if(cljs.core.seq((state_33728[(4)]))){
var statearr_33753_35225 = state_33728;
(statearr_33753_35225[(1)] = cljs.core.first((state_33728[(4)])));

} else {
throw ex__33168__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__33166__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35226 = state_33728;
state_33728 = G__35226;
continue;
} else {
return ret_value__33166__auto__;
}
break;
}
});
cljs$core$async$state_machine__33165__auto__ = function(state_33728){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__33165__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__33165__auto____1.call(this,state_33728);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__33165__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__33165__auto____0;
cljs$core$async$state_machine__33165__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__33165__auto____1;
return cljs$core$async$state_machine__33165__auto__;
})()
})();
var state__33202__auto__ = (function (){var statearr_33755 = f__33201__auto__();
(statearr_33755[(6)] = c__33200__auto__);

return statearr_33755;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__33202__auto__);
}));

return c__33200__auto__;
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
var G__33761 = arguments.length;
switch (G__33761) {
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

var cljs$core$async$Mux$muxch_STAR_$dyn_35234 = (function (_){
var x__4428__auto__ = (((_ == null))?null:_);
var m__4429__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__4429__auto__.call(null,_));
} else {
var m__4426__auto__ = (cljs.core.async.muxch_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__4426__auto__.call(null,_));
} else {
throw cljs.core.missing_protocol("Mux.muxch*",_);
}
}
});
cljs.core.async.muxch_STAR_ = (function cljs$core$async$muxch_STAR_(_){
if((((!((_ == null)))) && ((!((_.cljs$core$async$Mux$muxch_STAR_$arity$1 == null)))))){
return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else {
return cljs$core$async$Mux$muxch_STAR_$dyn_35234(_);
}
});


/**
 * @interface
 */
cljs.core.async.Mult = function(){};

var cljs$core$async$Mult$tap_STAR_$dyn_35235 = (function (m,ch,close_QMARK_){
var x__4428__auto__ = (((m == null))?null:m);
var m__4429__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$3(m,ch,close_QMARK_) : m__4429__auto__.call(null,m,ch,close_QMARK_));
} else {
var m__4426__auto__ = (cljs.core.async.tap_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$3(m,ch,close_QMARK_) : m__4426__auto__.call(null,m,ch,close_QMARK_));
} else {
throw cljs.core.missing_protocol("Mult.tap*",m);
}
}
});
cljs.core.async.tap_STAR_ = (function cljs$core$async$tap_STAR_(m,ch,close_QMARK_){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$tap_STAR_$arity$3 == null)))))){
return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else {
return cljs$core$async$Mult$tap_STAR_$dyn_35235(m,ch,close_QMARK_);
}
});

var cljs$core$async$Mult$untap_STAR_$dyn_35236 = (function (m,ch){
var x__4428__auto__ = (((m == null))?null:m);
var m__4429__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4429__auto__.call(null,m,ch));
} else {
var m__4426__auto__ = (cljs.core.async.untap_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4426__auto__.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mult.untap*",m);
}
}
});
cljs.core.async.untap_STAR_ = (function cljs$core$async$untap_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$untap_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else {
return cljs$core$async$Mult$untap_STAR_$dyn_35236(m,ch);
}
});

var cljs$core$async$Mult$untap_all_STAR_$dyn_35237 = (function (m){
var x__4428__auto__ = (((m == null))?null:m);
var m__4429__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__4429__auto__.call(null,m));
} else {
var m__4426__auto__ = (cljs.core.async.untap_all_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__4426__auto__.call(null,m));
} else {
throw cljs.core.missing_protocol("Mult.untap-all*",m);
}
}
});
cljs.core.async.untap_all_STAR_ = (function cljs$core$async$untap_all_STAR_(m){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$untap_all_STAR_$arity$1 == null)))))){
return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else {
return cljs$core$async$Mult$untap_all_STAR_$dyn_35237(m);
}
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
var m = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async33787 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async33787 = (function (ch,cs,meta33788){
this.ch = ch;
this.cs = cs;
this.meta33788 = meta33788;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async33787.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_33789,meta33788__$1){
var self__ = this;
var _33789__$1 = this;
return (new cljs.core.async.t_cljs$core$async33787(self__.ch,self__.cs,meta33788__$1));
}));

(cljs.core.async.t_cljs$core$async33787.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_33789){
var self__ = this;
var _33789__$1 = this;
return self__.meta33788;
}));

(cljs.core.async.t_cljs$core$async33787.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async33787.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async33787.prototype.cljs$core$async$Mult$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async33787.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
}));

(cljs.core.async.t_cljs$core$async33787.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch__$1);

return null;
}));

(cljs.core.async.t_cljs$core$async33787.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
}));

(cljs.core.async.t_cljs$core$async33787.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta33788","meta33788",-1060865590,null)], null);
}));

(cljs.core.async.t_cljs$core$async33787.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async33787.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async33787");

(cljs.core.async.t_cljs$core$async33787.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async33787");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async33787.
 */
cljs.core.async.__GT_t_cljs$core$async33787 = (function cljs$core$async$mult_$___GT_t_cljs$core$async33787(ch__$1,cs__$1,meta33788){
return (new cljs.core.async.t_cljs$core$async33787(ch__$1,cs__$1,meta33788));
});

}

return (new cljs.core.async.t_cljs$core$async33787(ch,cs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var dchan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var dctr = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
var done = (function (_){
if((cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(dchan,true);
} else {
return null;
}
});
var c__33200__auto___35239 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__33201__auto__ = (function (){var switch__33164__auto__ = (function (state_33967){
var state_val_33968 = (state_33967[(1)]);
if((state_val_33968 === (7))){
var inst_33963 = (state_33967[(2)]);
var state_33967__$1 = state_33967;
var statearr_33973_35244 = state_33967__$1;
(statearr_33973_35244[(2)] = inst_33963);

(statearr_33973_35244[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33968 === (20))){
var inst_33826 = (state_33967[(7)]);
var inst_33838 = cljs.core.first(inst_33826);
var inst_33839 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_33838,(0),null);
var inst_33840 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_33838,(1),null);
var state_33967__$1 = (function (){var statearr_33976 = state_33967;
(statearr_33976[(8)] = inst_33839);

return statearr_33976;
})();
if(cljs.core.truth_(inst_33840)){
var statearr_33977_35245 = state_33967__$1;
(statearr_33977_35245[(1)] = (22));

} else {
var statearr_33978_35246 = state_33967__$1;
(statearr_33978_35246[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33968 === (27))){
var inst_33875 = (state_33967[(9)]);
var inst_33868 = (state_33967[(10)]);
var inst_33795 = (state_33967[(11)]);
var inst_33870 = (state_33967[(12)]);
var inst_33875__$1 = cljs.core._nth(inst_33868,inst_33870);
var inst_33876 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_33875__$1,inst_33795,done);
var state_33967__$1 = (function (){var statearr_33979 = state_33967;
(statearr_33979[(9)] = inst_33875__$1);

return statearr_33979;
})();
if(cljs.core.truth_(inst_33876)){
var statearr_33980_35247 = state_33967__$1;
(statearr_33980_35247[(1)] = (30));

} else {
var statearr_33981_35248 = state_33967__$1;
(statearr_33981_35248[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33968 === (1))){
var state_33967__$1 = state_33967;
var statearr_33982_35249 = state_33967__$1;
(statearr_33982_35249[(2)] = null);

(statearr_33982_35249[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33968 === (24))){
var inst_33826 = (state_33967[(7)]);
var inst_33845 = (state_33967[(2)]);
var inst_33846 = cljs.core.next(inst_33826);
var inst_33804 = inst_33846;
var inst_33805 = null;
var inst_33806 = (0);
var inst_33807 = (0);
var state_33967__$1 = (function (){var statearr_33983 = state_33967;
(statearr_33983[(13)] = inst_33806);

(statearr_33983[(14)] = inst_33805);

(statearr_33983[(15)] = inst_33807);

(statearr_33983[(16)] = inst_33845);

(statearr_33983[(17)] = inst_33804);

return statearr_33983;
})();
var statearr_33984_35250 = state_33967__$1;
(statearr_33984_35250[(2)] = null);

(statearr_33984_35250[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33968 === (39))){
var state_33967__$1 = state_33967;
var statearr_33988_35251 = state_33967__$1;
(statearr_33988_35251[(2)] = null);

(statearr_33988_35251[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33968 === (4))){
var inst_33795 = (state_33967[(11)]);
var inst_33795__$1 = (state_33967[(2)]);
var inst_33796 = (inst_33795__$1 == null);
var state_33967__$1 = (function (){var statearr_33989 = state_33967;
(statearr_33989[(11)] = inst_33795__$1);

return statearr_33989;
})();
if(cljs.core.truth_(inst_33796)){
var statearr_33990_35252 = state_33967__$1;
(statearr_33990_35252[(1)] = (5));

} else {
var statearr_33991_35254 = state_33967__$1;
(statearr_33991_35254[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33968 === (15))){
var inst_33806 = (state_33967[(13)]);
var inst_33805 = (state_33967[(14)]);
var inst_33807 = (state_33967[(15)]);
var inst_33804 = (state_33967[(17)]);
var inst_33822 = (state_33967[(2)]);
var inst_33823 = (inst_33807 + (1));
var tmp33985 = inst_33806;
var tmp33986 = inst_33805;
var tmp33987 = inst_33804;
var inst_33804__$1 = tmp33987;
var inst_33805__$1 = tmp33986;
var inst_33806__$1 = tmp33985;
var inst_33807__$1 = inst_33823;
var state_33967__$1 = (function (){var statearr_33992 = state_33967;
(statearr_33992[(13)] = inst_33806__$1);

(statearr_33992[(14)] = inst_33805__$1);

(statearr_33992[(15)] = inst_33807__$1);

(statearr_33992[(18)] = inst_33822);

(statearr_33992[(17)] = inst_33804__$1);

return statearr_33992;
})();
var statearr_33993_35256 = state_33967__$1;
(statearr_33993_35256[(2)] = null);

(statearr_33993_35256[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33968 === (21))){
var inst_33849 = (state_33967[(2)]);
var state_33967__$1 = state_33967;
var statearr_33997_35257 = state_33967__$1;
(statearr_33997_35257[(2)] = inst_33849);

(statearr_33997_35257[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33968 === (31))){
var inst_33875 = (state_33967[(9)]);
var inst_33879 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_33875);
var state_33967__$1 = state_33967;
var statearr_33998_35259 = state_33967__$1;
(statearr_33998_35259[(2)] = inst_33879);

(statearr_33998_35259[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33968 === (32))){
var inst_33869 = (state_33967[(19)]);
var inst_33868 = (state_33967[(10)]);
var inst_33870 = (state_33967[(12)]);
var inst_33867 = (state_33967[(20)]);
var inst_33881 = (state_33967[(2)]);
var inst_33882 = (inst_33870 + (1));
var tmp33994 = inst_33869;
var tmp33995 = inst_33868;
var tmp33996 = inst_33867;
var inst_33867__$1 = tmp33996;
var inst_33868__$1 = tmp33995;
var inst_33869__$1 = tmp33994;
var inst_33870__$1 = inst_33882;
var state_33967__$1 = (function (){var statearr_33999 = state_33967;
(statearr_33999[(21)] = inst_33881);

(statearr_33999[(19)] = inst_33869__$1);

(statearr_33999[(10)] = inst_33868__$1);

(statearr_33999[(12)] = inst_33870__$1);

(statearr_33999[(20)] = inst_33867__$1);

return statearr_33999;
})();
var statearr_34000_35261 = state_33967__$1;
(statearr_34000_35261[(2)] = null);

(statearr_34000_35261[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33968 === (40))){
var inst_33933 = (state_33967[(22)]);
var inst_33940 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_33933);
var state_33967__$1 = state_33967;
var statearr_34001_35262 = state_33967__$1;
(statearr_34001_35262[(2)] = inst_33940);

(statearr_34001_35262[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33968 === (33))){
var inst_33885 = (state_33967[(23)]);
var inst_33887 = cljs.core.chunked_seq_QMARK_(inst_33885);
var state_33967__$1 = state_33967;
if(inst_33887){
var statearr_34002_35263 = state_33967__$1;
(statearr_34002_35263[(1)] = (36));

} else {
var statearr_34003_35264 = state_33967__$1;
(statearr_34003_35264[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33968 === (13))){
var inst_33816 = (state_33967[(24)]);
var inst_33819 = cljs.core.async.close_BANG_(inst_33816);
var state_33967__$1 = state_33967;
var statearr_34004_35265 = state_33967__$1;
(statearr_34004_35265[(2)] = inst_33819);

(statearr_34004_35265[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33968 === (22))){
var inst_33839 = (state_33967[(8)]);
var inst_33842 = cljs.core.async.close_BANG_(inst_33839);
var state_33967__$1 = state_33967;
var statearr_34005_35266 = state_33967__$1;
(statearr_34005_35266[(2)] = inst_33842);

(statearr_34005_35266[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33968 === (36))){
var inst_33885 = (state_33967[(23)]);
var inst_33889 = cljs.core.chunk_first(inst_33885);
var inst_33890 = cljs.core.chunk_rest(inst_33885);
var inst_33891 = cljs.core.count(inst_33889);
var inst_33867 = inst_33890;
var inst_33868 = inst_33889;
var inst_33869 = inst_33891;
var inst_33870 = (0);
var state_33967__$1 = (function (){var statearr_34006 = state_33967;
(statearr_34006[(19)] = inst_33869);

(statearr_34006[(10)] = inst_33868);

(statearr_34006[(12)] = inst_33870);

(statearr_34006[(20)] = inst_33867);

return statearr_34006;
})();
var statearr_34007_35267 = state_33967__$1;
(statearr_34007_35267[(2)] = null);

(statearr_34007_35267[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33968 === (41))){
var inst_33885 = (state_33967[(23)]);
var inst_33942 = (state_33967[(2)]);
var inst_33943 = cljs.core.next(inst_33885);
var inst_33867 = inst_33943;
var inst_33868 = null;
var inst_33869 = (0);
var inst_33870 = (0);
var state_33967__$1 = (function (){var statearr_34008 = state_33967;
(statearr_34008[(19)] = inst_33869);

(statearr_34008[(25)] = inst_33942);

(statearr_34008[(10)] = inst_33868);

(statearr_34008[(12)] = inst_33870);

(statearr_34008[(20)] = inst_33867);

return statearr_34008;
})();
var statearr_34009_35270 = state_33967__$1;
(statearr_34009_35270[(2)] = null);

(statearr_34009_35270[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33968 === (43))){
var state_33967__$1 = state_33967;
var statearr_34010_35271 = state_33967__$1;
(statearr_34010_35271[(2)] = null);

(statearr_34010_35271[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33968 === (29))){
var inst_33951 = (state_33967[(2)]);
var state_33967__$1 = state_33967;
var statearr_34013_35272 = state_33967__$1;
(statearr_34013_35272[(2)] = inst_33951);

(statearr_34013_35272[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33968 === (44))){
var inst_33960 = (state_33967[(2)]);
var state_33967__$1 = (function (){var statearr_34014 = state_33967;
(statearr_34014[(26)] = inst_33960);

return statearr_34014;
})();
var statearr_34016_35273 = state_33967__$1;
(statearr_34016_35273[(2)] = null);

(statearr_34016_35273[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33968 === (6))){
var inst_33859 = (state_33967[(27)]);
var inst_33858 = cljs.core.deref(cs);
var inst_33859__$1 = cljs.core.keys(inst_33858);
var inst_33860 = cljs.core.count(inst_33859__$1);
var inst_33861 = cljs.core.reset_BANG_(dctr,inst_33860);
var inst_33866 = cljs.core.seq(inst_33859__$1);
var inst_33867 = inst_33866;
var inst_33868 = null;
var inst_33869 = (0);
var inst_33870 = (0);
var state_33967__$1 = (function (){var statearr_34020 = state_33967;
(statearr_34020[(27)] = inst_33859__$1);

(statearr_34020[(19)] = inst_33869);

(statearr_34020[(28)] = inst_33861);

(statearr_34020[(10)] = inst_33868);

(statearr_34020[(12)] = inst_33870);

(statearr_34020[(20)] = inst_33867);

return statearr_34020;
})();
var statearr_34021_35274 = state_33967__$1;
(statearr_34021_35274[(2)] = null);

(statearr_34021_35274[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33968 === (28))){
var inst_33885 = (state_33967[(23)]);
var inst_33867 = (state_33967[(20)]);
var inst_33885__$1 = cljs.core.seq(inst_33867);
var state_33967__$1 = (function (){var statearr_34022 = state_33967;
(statearr_34022[(23)] = inst_33885__$1);

return statearr_34022;
})();
if(inst_33885__$1){
var statearr_34023_35275 = state_33967__$1;
(statearr_34023_35275[(1)] = (33));

} else {
var statearr_34024_35276 = state_33967__$1;
(statearr_34024_35276[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33968 === (25))){
var inst_33869 = (state_33967[(19)]);
var inst_33870 = (state_33967[(12)]);
var inst_33872 = (inst_33870 < inst_33869);
var inst_33873 = inst_33872;
var state_33967__$1 = state_33967;
if(cljs.core.truth_(inst_33873)){
var statearr_34027_35277 = state_33967__$1;
(statearr_34027_35277[(1)] = (27));

} else {
var statearr_34029_35278 = state_33967__$1;
(statearr_34029_35278[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33968 === (34))){
var state_33967__$1 = state_33967;
var statearr_34031_35279 = state_33967__$1;
(statearr_34031_35279[(2)] = null);

(statearr_34031_35279[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33968 === (17))){
var state_33967__$1 = state_33967;
var statearr_34032_35280 = state_33967__$1;
(statearr_34032_35280[(2)] = null);

(statearr_34032_35280[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33968 === (3))){
var inst_33965 = (state_33967[(2)]);
var state_33967__$1 = state_33967;
return cljs.core.async.impl.ioc_helpers.return_chan(state_33967__$1,inst_33965);
} else {
if((state_val_33968 === (12))){
var inst_33854 = (state_33967[(2)]);
var state_33967__$1 = state_33967;
var statearr_34038_35282 = state_33967__$1;
(statearr_34038_35282[(2)] = inst_33854);

(statearr_34038_35282[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33968 === (2))){
var state_33967__$1 = state_33967;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_33967__$1,(4),ch);
} else {
if((state_val_33968 === (23))){
var state_33967__$1 = state_33967;
var statearr_34041_35283 = state_33967__$1;
(statearr_34041_35283[(2)] = null);

(statearr_34041_35283[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33968 === (35))){
var inst_33949 = (state_33967[(2)]);
var state_33967__$1 = state_33967;
var statearr_34043_35284 = state_33967__$1;
(statearr_34043_35284[(2)] = inst_33949);

(statearr_34043_35284[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33968 === (19))){
var inst_33826 = (state_33967[(7)]);
var inst_33830 = cljs.core.chunk_first(inst_33826);
var inst_33831 = cljs.core.chunk_rest(inst_33826);
var inst_33832 = cljs.core.count(inst_33830);
var inst_33804 = inst_33831;
var inst_33805 = inst_33830;
var inst_33806 = inst_33832;
var inst_33807 = (0);
var state_33967__$1 = (function (){var statearr_34049 = state_33967;
(statearr_34049[(13)] = inst_33806);

(statearr_34049[(14)] = inst_33805);

(statearr_34049[(15)] = inst_33807);

(statearr_34049[(17)] = inst_33804);

return statearr_34049;
})();
var statearr_34051_35289 = state_33967__$1;
(statearr_34051_35289[(2)] = null);

(statearr_34051_35289[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33968 === (11))){
var inst_33826 = (state_33967[(7)]);
var inst_33804 = (state_33967[(17)]);
var inst_33826__$1 = cljs.core.seq(inst_33804);
var state_33967__$1 = (function (){var statearr_34054 = state_33967;
(statearr_34054[(7)] = inst_33826__$1);

return statearr_34054;
})();
if(inst_33826__$1){
var statearr_34055_35290 = state_33967__$1;
(statearr_34055_35290[(1)] = (16));

} else {
var statearr_34056_35291 = state_33967__$1;
(statearr_34056_35291[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33968 === (9))){
var inst_33856 = (state_33967[(2)]);
var state_33967__$1 = state_33967;
var statearr_34057_35292 = state_33967__$1;
(statearr_34057_35292[(2)] = inst_33856);

(statearr_34057_35292[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33968 === (5))){
var inst_33802 = cljs.core.deref(cs);
var inst_33803 = cljs.core.seq(inst_33802);
var inst_33804 = inst_33803;
var inst_33805 = null;
var inst_33806 = (0);
var inst_33807 = (0);
var state_33967__$1 = (function (){var statearr_34058 = state_33967;
(statearr_34058[(13)] = inst_33806);

(statearr_34058[(14)] = inst_33805);

(statearr_34058[(15)] = inst_33807);

(statearr_34058[(17)] = inst_33804);

return statearr_34058;
})();
var statearr_34061_35293 = state_33967__$1;
(statearr_34061_35293[(2)] = null);

(statearr_34061_35293[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33968 === (14))){
var state_33967__$1 = state_33967;
var statearr_34062_35294 = state_33967__$1;
(statearr_34062_35294[(2)] = null);

(statearr_34062_35294[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33968 === (45))){
var inst_33957 = (state_33967[(2)]);
var state_33967__$1 = state_33967;
var statearr_34063_35295 = state_33967__$1;
(statearr_34063_35295[(2)] = inst_33957);

(statearr_34063_35295[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33968 === (26))){
var inst_33859 = (state_33967[(27)]);
var inst_33953 = (state_33967[(2)]);
var inst_33954 = cljs.core.seq(inst_33859);
var state_33967__$1 = (function (){var statearr_34064 = state_33967;
(statearr_34064[(29)] = inst_33953);

return statearr_34064;
})();
if(inst_33954){
var statearr_34065_35296 = state_33967__$1;
(statearr_34065_35296[(1)] = (42));

} else {
var statearr_34068_35297 = state_33967__$1;
(statearr_34068_35297[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33968 === (16))){
var inst_33826 = (state_33967[(7)]);
var inst_33828 = cljs.core.chunked_seq_QMARK_(inst_33826);
var state_33967__$1 = state_33967;
if(inst_33828){
var statearr_34071_35298 = state_33967__$1;
(statearr_34071_35298[(1)] = (19));

} else {
var statearr_34072_35299 = state_33967__$1;
(statearr_34072_35299[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33968 === (38))){
var inst_33946 = (state_33967[(2)]);
var state_33967__$1 = state_33967;
var statearr_34074_35304 = state_33967__$1;
(statearr_34074_35304[(2)] = inst_33946);

(statearr_34074_35304[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33968 === (30))){
var state_33967__$1 = state_33967;
var statearr_34075_35308 = state_33967__$1;
(statearr_34075_35308[(2)] = null);

(statearr_34075_35308[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33968 === (10))){
var inst_33805 = (state_33967[(14)]);
var inst_33807 = (state_33967[(15)]);
var inst_33815 = cljs.core._nth(inst_33805,inst_33807);
var inst_33816 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_33815,(0),null);
var inst_33817 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_33815,(1),null);
var state_33967__$1 = (function (){var statearr_34076 = state_33967;
(statearr_34076[(24)] = inst_33816);

return statearr_34076;
})();
if(cljs.core.truth_(inst_33817)){
var statearr_34077_35309 = state_33967__$1;
(statearr_34077_35309[(1)] = (13));

} else {
var statearr_34078_35310 = state_33967__$1;
(statearr_34078_35310[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33968 === (18))){
var inst_33852 = (state_33967[(2)]);
var state_33967__$1 = state_33967;
var statearr_34079_35314 = state_33967__$1;
(statearr_34079_35314[(2)] = inst_33852);

(statearr_34079_35314[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33968 === (42))){
var state_33967__$1 = state_33967;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_33967__$1,(45),dchan);
} else {
if((state_val_33968 === (37))){
var inst_33885 = (state_33967[(23)]);
var inst_33795 = (state_33967[(11)]);
var inst_33933 = (state_33967[(22)]);
var inst_33933__$1 = cljs.core.first(inst_33885);
var inst_33937 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_33933__$1,inst_33795,done);
var state_33967__$1 = (function (){var statearr_34080 = state_33967;
(statearr_34080[(22)] = inst_33933__$1);

return statearr_34080;
})();
if(cljs.core.truth_(inst_33937)){
var statearr_34081_35318 = state_33967__$1;
(statearr_34081_35318[(1)] = (39));

} else {
var statearr_34082_35319 = state_33967__$1;
(statearr_34082_35319[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33968 === (8))){
var inst_33806 = (state_33967[(13)]);
var inst_33807 = (state_33967[(15)]);
var inst_33809 = (inst_33807 < inst_33806);
var inst_33810 = inst_33809;
var state_33967__$1 = state_33967;
if(cljs.core.truth_(inst_33810)){
var statearr_34083_35320 = state_33967__$1;
(statearr_34083_35320[(1)] = (10));

} else {
var statearr_34086_35321 = state_33967__$1;
(statearr_34086_35321[(1)] = (11));

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
var cljs$core$async$mult_$_state_machine__33165__auto__ = null;
var cljs$core$async$mult_$_state_machine__33165__auto____0 = (function (){
var statearr_34094 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_34094[(0)] = cljs$core$async$mult_$_state_machine__33165__auto__);

(statearr_34094[(1)] = (1));

return statearr_34094;
});
var cljs$core$async$mult_$_state_machine__33165__auto____1 = (function (state_33967){
while(true){
var ret_value__33166__auto__ = (function (){try{while(true){
var result__33167__auto__ = switch__33164__auto__(state_33967);
if(cljs.core.keyword_identical_QMARK_(result__33167__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33167__auto__;
}
break;
}
}catch (e34095){var ex__33168__auto__ = e34095;
var statearr_34096_35329 = state_33967;
(statearr_34096_35329[(2)] = ex__33168__auto__);


if(cljs.core.seq((state_33967[(4)]))){
var statearr_34098_35330 = state_33967;
(statearr_34098_35330[(1)] = cljs.core.first((state_33967[(4)])));

} else {
throw ex__33168__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__33166__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35331 = state_33967;
state_33967 = G__35331;
continue;
} else {
return ret_value__33166__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__33165__auto__ = function(state_33967){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__33165__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__33165__auto____1.call(this,state_33967);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__33165__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__33165__auto____0;
cljs$core$async$mult_$_state_machine__33165__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__33165__auto____1;
return cljs$core$async$mult_$_state_machine__33165__auto__;
})()
})();
var state__33202__auto__ = (function (){var statearr_34100 = f__33201__auto__();
(statearr_34100[(6)] = c__33200__auto___35239);

return statearr_34100;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__33202__auto__);
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
var G__34105 = arguments.length;
switch (G__34105) {
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

var cljs$core$async$Mix$admix_STAR_$dyn_35333 = (function (m,ch){
var x__4428__auto__ = (((m == null))?null:m);
var m__4429__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4429__auto__.call(null,m,ch));
} else {
var m__4426__auto__ = (cljs.core.async.admix_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4426__auto__.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mix.admix*",m);
}
}
});
cljs.core.async.admix_STAR_ = (function cljs$core$async$admix_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$admix_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else {
return cljs$core$async$Mix$admix_STAR_$dyn_35333(m,ch);
}
});

var cljs$core$async$Mix$unmix_STAR_$dyn_35336 = (function (m,ch){
var x__4428__auto__ = (((m == null))?null:m);
var m__4429__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4429__auto__.call(null,m,ch));
} else {
var m__4426__auto__ = (cljs.core.async.unmix_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4426__auto__.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mix.unmix*",m);
}
}
});
cljs.core.async.unmix_STAR_ = (function cljs$core$async$unmix_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$unmix_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else {
return cljs$core$async$Mix$unmix_STAR_$dyn_35336(m,ch);
}
});

var cljs$core$async$Mix$unmix_all_STAR_$dyn_35337 = (function (m){
var x__4428__auto__ = (((m == null))?null:m);
var m__4429__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__4429__auto__.call(null,m));
} else {
var m__4426__auto__ = (cljs.core.async.unmix_all_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__4426__auto__.call(null,m));
} else {
throw cljs.core.missing_protocol("Mix.unmix-all*",m);
}
}
});
cljs.core.async.unmix_all_STAR_ = (function cljs$core$async$unmix_all_STAR_(m){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$unmix_all_STAR_$arity$1 == null)))))){
return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else {
return cljs$core$async$Mix$unmix_all_STAR_$dyn_35337(m);
}
});

var cljs$core$async$Mix$toggle_STAR_$dyn_35338 = (function (m,state_map){
var x__4428__auto__ = (((m == null))?null:m);
var m__4429__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$2(m,state_map) : m__4429__auto__.call(null,m,state_map));
} else {
var m__4426__auto__ = (cljs.core.async.toggle_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$2(m,state_map) : m__4426__auto__.call(null,m,state_map));
} else {
throw cljs.core.missing_protocol("Mix.toggle*",m);
}
}
});
cljs.core.async.toggle_STAR_ = (function cljs$core$async$toggle_STAR_(m,state_map){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$toggle_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else {
return cljs$core$async$Mix$toggle_STAR_$dyn_35338(m,state_map);
}
});

var cljs$core$async$Mix$solo_mode_STAR_$dyn_35339 = (function (m,mode){
var x__4428__auto__ = (((m == null))?null:m);
var m__4429__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$2(m,mode) : m__4429__auto__.call(null,m,mode));
} else {
var m__4426__auto__ = (cljs.core.async.solo_mode_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$2(m,mode) : m__4426__auto__.call(null,m,mode));
} else {
throw cljs.core.missing_protocol("Mix.solo-mode*",m);
}
}
});
cljs.core.async.solo_mode_STAR_ = (function cljs$core$async$solo_mode_STAR_(m,mode){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$solo_mode_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else {
return cljs$core$async$Mix$solo_mode_STAR_$dyn_35339(m,mode);
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__4742__auto__ = [];
var len__4736__auto___35344 = arguments.length;
var i__4737__auto___35345 = (0);
while(true){
if((i__4737__auto___35345 < len__4736__auto___35344)){
args__4742__auto__.push((arguments[i__4737__auto___35345]));

var G__35346 = (i__4737__auto___35345 + (1));
i__4737__auto___35345 = G__35346;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((3) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4743__auto__);
});

(cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__34120){
var map__34121 = p__34120;
var map__34121__$1 = (((((!((map__34121 == null))))?(((((map__34121.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__34121.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__34121):map__34121);
var opts = map__34121__$1;
var statearr_34123_35347 = state;
(statearr_34123_35347[(1)] = cont_block);


var temp__5735__auto__ = cljs.core.async.do_alts((function (val){
var statearr_34124_35348 = state;
(statearr_34124_35348[(2)] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state);
}),ports,opts);
if(cljs.core.truth_(temp__5735__auto__)){
var cb = temp__5735__auto__;
var statearr_34125_35349 = state;
(statearr_34125_35349[(2)] = cljs.core.deref(cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}));

(cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3));

/** @this {Function} */
(cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq34116){
var G__34117 = cljs.core.first(seq34116);
var seq34116__$1 = cljs.core.next(seq34116);
var G__34118 = cljs.core.first(seq34116__$1);
var seq34116__$2 = cljs.core.next(seq34116__$1);
var G__34119 = cljs.core.first(seq34116__$2);
var seq34116__$3 = cljs.core.next(seq34116__$2);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__34117,G__34118,G__34119,seq34116__$3);
}));

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
if(cljs.core.truth_((attr.cljs$core$IFn$_invoke$arity$1 ? attr.cljs$core$IFn$_invoke$arity$1(v) : attr.call(null,v)))){
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
var m = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async34134 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async34134 = (function (change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta34135){
this.change = change;
this.solo_mode = solo_mode;
this.pick = pick;
this.cs = cs;
this.calc_state = calc_state;
this.out = out;
this.changed = changed;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.meta34135 = meta34135;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async34134.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_34136,meta34135__$1){
var self__ = this;
var _34136__$1 = this;
return (new cljs.core.async.t_cljs$core$async34134(self__.change,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta34135__$1));
}));

(cljs.core.async.t_cljs$core$async34134.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_34136){
var self__ = this;
var _34136__$1 = this;
return self__.meta34135;
}));

(cljs.core.async.t_cljs$core$async34134.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async34134.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
}));

(cljs.core.async.t_cljs$core$async34134.prototype.cljs$core$async$Mix$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async34134.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async34134.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async34134.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async34134.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.merge_with,cljs.core.merge),state_map);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async34134.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.solo_modes.cljs$core$IFn$_invoke$arity$1 ? self__.solo_modes.cljs$core$IFn$_invoke$arity$1(mode) : self__.solo_modes.call(null,mode)))){
} else {
throw (new Error(["Assert failed: ",["mode must be one of: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.solo_modes)].join(''),"\n","(solo-modes mode)"].join('')));
}

cljs.core.reset_BANG_(self__.solo_mode,mode);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async34134.getBasis = (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"change","change",477485025,null),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"meta34135","meta34135",1267019723,null)], null);
}));

(cljs.core.async.t_cljs$core$async34134.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async34134.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async34134");

(cljs.core.async.t_cljs$core$async34134.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async34134");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async34134.
 */
cljs.core.async.__GT_t_cljs$core$async34134 = (function cljs$core$async$mix_$___GT_t_cljs$core$async34134(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta34135){
return (new cljs.core.async.t_cljs$core$async34134(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta34135));
});

}

return (new cljs.core.async.t_cljs$core$async34134(change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__33200__auto___35360 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__33201__auto__ = (function (){var switch__33164__auto__ = (function (state_34241){
var state_val_34242 = (state_34241[(1)]);
if((state_val_34242 === (7))){
var inst_34156 = (state_34241[(2)]);
var state_34241__$1 = state_34241;
var statearr_34243_35361 = state_34241__$1;
(statearr_34243_35361[(2)] = inst_34156);

(statearr_34243_35361[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34242 === (20))){
var inst_34168 = (state_34241[(7)]);
var state_34241__$1 = state_34241;
var statearr_34244_35362 = state_34241__$1;
(statearr_34244_35362[(2)] = inst_34168);

(statearr_34244_35362[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34242 === (27))){
var state_34241__$1 = state_34241;
var statearr_34245_35366 = state_34241__$1;
(statearr_34245_35366[(2)] = null);

(statearr_34245_35366[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34242 === (1))){
var inst_34143 = (state_34241[(8)]);
var inst_34143__$1 = calc_state();
var inst_34145 = (inst_34143__$1 == null);
var inst_34146 = cljs.core.not(inst_34145);
var state_34241__$1 = (function (){var statearr_34246 = state_34241;
(statearr_34246[(8)] = inst_34143__$1);

return statearr_34246;
})();
if(inst_34146){
var statearr_34247_35367 = state_34241__$1;
(statearr_34247_35367[(1)] = (2));

} else {
var statearr_34248_35368 = state_34241__$1;
(statearr_34248_35368[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34242 === (24))){
var inst_34201 = (state_34241[(9)]);
var inst_34192 = (state_34241[(10)]);
var inst_34215 = (state_34241[(11)]);
var inst_34215__$1 = (inst_34192.cljs$core$IFn$_invoke$arity$1 ? inst_34192.cljs$core$IFn$_invoke$arity$1(inst_34201) : inst_34192.call(null,inst_34201));
var state_34241__$1 = (function (){var statearr_34249 = state_34241;
(statearr_34249[(11)] = inst_34215__$1);

return statearr_34249;
})();
if(cljs.core.truth_(inst_34215__$1)){
var statearr_34250_35375 = state_34241__$1;
(statearr_34250_35375[(1)] = (29));

} else {
var statearr_34251_35377 = state_34241__$1;
(statearr_34251_35377[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34242 === (4))){
var inst_34159 = (state_34241[(2)]);
var state_34241__$1 = state_34241;
if(cljs.core.truth_(inst_34159)){
var statearr_34252_35378 = state_34241__$1;
(statearr_34252_35378[(1)] = (8));

} else {
var statearr_34253_35379 = state_34241__$1;
(statearr_34253_35379[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34242 === (15))){
var inst_34186 = (state_34241[(2)]);
var state_34241__$1 = state_34241;
if(cljs.core.truth_(inst_34186)){
var statearr_34254_35380 = state_34241__$1;
(statearr_34254_35380[(1)] = (19));

} else {
var statearr_34255_35381 = state_34241__$1;
(statearr_34255_35381[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34242 === (21))){
var inst_34191 = (state_34241[(12)]);
var inst_34191__$1 = (state_34241[(2)]);
var inst_34192 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_34191__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_34193 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_34191__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_34194 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_34191__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_34241__$1 = (function (){var statearr_34256 = state_34241;
(statearr_34256[(13)] = inst_34193);

(statearr_34256[(10)] = inst_34192);

(statearr_34256[(12)] = inst_34191__$1);

return statearr_34256;
})();
return cljs.core.async.ioc_alts_BANG_(state_34241__$1,(22),inst_34194);
} else {
if((state_val_34242 === (31))){
var inst_34223 = (state_34241[(2)]);
var state_34241__$1 = state_34241;
if(cljs.core.truth_(inst_34223)){
var statearr_34257_35386 = state_34241__$1;
(statearr_34257_35386[(1)] = (32));

} else {
var statearr_34258_35387 = state_34241__$1;
(statearr_34258_35387[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34242 === (32))){
var inst_34200 = (state_34241[(14)]);
var state_34241__$1 = state_34241;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_34241__$1,(35),out,inst_34200);
} else {
if((state_val_34242 === (33))){
var inst_34191 = (state_34241[(12)]);
var inst_34168 = inst_34191;
var state_34241__$1 = (function (){var statearr_34259 = state_34241;
(statearr_34259[(7)] = inst_34168);

return statearr_34259;
})();
var statearr_34260_35388 = state_34241__$1;
(statearr_34260_35388[(2)] = null);

(statearr_34260_35388[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34242 === (13))){
var inst_34168 = (state_34241[(7)]);
var inst_34175 = inst_34168.cljs$lang$protocol_mask$partition0$;
var inst_34176 = (inst_34175 & (64));
var inst_34177 = inst_34168.cljs$core$ISeq$;
var inst_34178 = (cljs.core.PROTOCOL_SENTINEL === inst_34177);
var inst_34179 = ((inst_34176) || (inst_34178));
var state_34241__$1 = state_34241;
if(cljs.core.truth_(inst_34179)){
var statearr_34261_35389 = state_34241__$1;
(statearr_34261_35389[(1)] = (16));

} else {
var statearr_34262_35390 = state_34241__$1;
(statearr_34262_35390[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34242 === (22))){
var inst_34200 = (state_34241[(14)]);
var inst_34201 = (state_34241[(9)]);
var inst_34199 = (state_34241[(2)]);
var inst_34200__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_34199,(0),null);
var inst_34201__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_34199,(1),null);
var inst_34202 = (inst_34200__$1 == null);
var inst_34203 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_34201__$1,change);
var inst_34204 = ((inst_34202) || (inst_34203));
var state_34241__$1 = (function (){var statearr_34263 = state_34241;
(statearr_34263[(14)] = inst_34200__$1);

(statearr_34263[(9)] = inst_34201__$1);

return statearr_34263;
})();
if(cljs.core.truth_(inst_34204)){
var statearr_34264_35391 = state_34241__$1;
(statearr_34264_35391[(1)] = (23));

} else {
var statearr_34265_35392 = state_34241__$1;
(statearr_34265_35392[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34242 === (36))){
var inst_34191 = (state_34241[(12)]);
var inst_34168 = inst_34191;
var state_34241__$1 = (function (){var statearr_34266 = state_34241;
(statearr_34266[(7)] = inst_34168);

return statearr_34266;
})();
var statearr_34267_35393 = state_34241__$1;
(statearr_34267_35393[(2)] = null);

(statearr_34267_35393[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34242 === (29))){
var inst_34215 = (state_34241[(11)]);
var state_34241__$1 = state_34241;
var statearr_34268_35394 = state_34241__$1;
(statearr_34268_35394[(2)] = inst_34215);

(statearr_34268_35394[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34242 === (6))){
var state_34241__$1 = state_34241;
var statearr_34269_35395 = state_34241__$1;
(statearr_34269_35395[(2)] = false);

(statearr_34269_35395[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34242 === (28))){
var inst_34211 = (state_34241[(2)]);
var inst_34212 = calc_state();
var inst_34168 = inst_34212;
var state_34241__$1 = (function (){var statearr_34270 = state_34241;
(statearr_34270[(15)] = inst_34211);

(statearr_34270[(7)] = inst_34168);

return statearr_34270;
})();
var statearr_34271_35399 = state_34241__$1;
(statearr_34271_35399[(2)] = null);

(statearr_34271_35399[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34242 === (25))){
var inst_34237 = (state_34241[(2)]);
var state_34241__$1 = state_34241;
var statearr_34272_35400 = state_34241__$1;
(statearr_34272_35400[(2)] = inst_34237);

(statearr_34272_35400[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34242 === (34))){
var inst_34235 = (state_34241[(2)]);
var state_34241__$1 = state_34241;
var statearr_34273_35401 = state_34241__$1;
(statearr_34273_35401[(2)] = inst_34235);

(statearr_34273_35401[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34242 === (17))){
var state_34241__$1 = state_34241;
var statearr_34274_35402 = state_34241__$1;
(statearr_34274_35402[(2)] = false);

(statearr_34274_35402[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34242 === (3))){
var state_34241__$1 = state_34241;
var statearr_34275_35403 = state_34241__$1;
(statearr_34275_35403[(2)] = false);

(statearr_34275_35403[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34242 === (12))){
var inst_34239 = (state_34241[(2)]);
var state_34241__$1 = state_34241;
return cljs.core.async.impl.ioc_helpers.return_chan(state_34241__$1,inst_34239);
} else {
if((state_val_34242 === (2))){
var inst_34143 = (state_34241[(8)]);
var inst_34148 = inst_34143.cljs$lang$protocol_mask$partition0$;
var inst_34149 = (inst_34148 & (64));
var inst_34150 = inst_34143.cljs$core$ISeq$;
var inst_34151 = (cljs.core.PROTOCOL_SENTINEL === inst_34150);
var inst_34152 = ((inst_34149) || (inst_34151));
var state_34241__$1 = state_34241;
if(cljs.core.truth_(inst_34152)){
var statearr_34276_35404 = state_34241__$1;
(statearr_34276_35404[(1)] = (5));

} else {
var statearr_34277_35405 = state_34241__$1;
(statearr_34277_35405[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34242 === (23))){
var inst_34200 = (state_34241[(14)]);
var inst_34206 = (inst_34200 == null);
var state_34241__$1 = state_34241;
if(cljs.core.truth_(inst_34206)){
var statearr_34278_35406 = state_34241__$1;
(statearr_34278_35406[(1)] = (26));

} else {
var statearr_34279_35407 = state_34241__$1;
(statearr_34279_35407[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34242 === (35))){
var inst_34226 = (state_34241[(2)]);
var state_34241__$1 = state_34241;
if(cljs.core.truth_(inst_34226)){
var statearr_34280_35408 = state_34241__$1;
(statearr_34280_35408[(1)] = (36));

} else {
var statearr_34281_35409 = state_34241__$1;
(statearr_34281_35409[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34242 === (19))){
var inst_34168 = (state_34241[(7)]);
var inst_34188 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_34168);
var state_34241__$1 = state_34241;
var statearr_34282_35411 = state_34241__$1;
(statearr_34282_35411[(2)] = inst_34188);

(statearr_34282_35411[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34242 === (11))){
var inst_34168 = (state_34241[(7)]);
var inst_34172 = (inst_34168 == null);
var inst_34173 = cljs.core.not(inst_34172);
var state_34241__$1 = state_34241;
if(inst_34173){
var statearr_34283_35412 = state_34241__$1;
(statearr_34283_35412[(1)] = (13));

} else {
var statearr_34284_35413 = state_34241__$1;
(statearr_34284_35413[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34242 === (9))){
var inst_34143 = (state_34241[(8)]);
var state_34241__$1 = state_34241;
var statearr_34285_35414 = state_34241__$1;
(statearr_34285_35414[(2)] = inst_34143);

(statearr_34285_35414[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34242 === (5))){
var state_34241__$1 = state_34241;
var statearr_34286_35415 = state_34241__$1;
(statearr_34286_35415[(2)] = true);

(statearr_34286_35415[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34242 === (14))){
var state_34241__$1 = state_34241;
var statearr_34287_35416 = state_34241__$1;
(statearr_34287_35416[(2)] = false);

(statearr_34287_35416[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34242 === (26))){
var inst_34201 = (state_34241[(9)]);
var inst_34208 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(cs,cljs.core.dissoc,inst_34201);
var state_34241__$1 = state_34241;
var statearr_34288_35417 = state_34241__$1;
(statearr_34288_35417[(2)] = inst_34208);

(statearr_34288_35417[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34242 === (16))){
var state_34241__$1 = state_34241;
var statearr_34289_35418 = state_34241__$1;
(statearr_34289_35418[(2)] = true);

(statearr_34289_35418[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34242 === (38))){
var inst_34231 = (state_34241[(2)]);
var state_34241__$1 = state_34241;
var statearr_34290_35419 = state_34241__$1;
(statearr_34290_35419[(2)] = inst_34231);

(statearr_34290_35419[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34242 === (30))){
var inst_34193 = (state_34241[(13)]);
var inst_34201 = (state_34241[(9)]);
var inst_34192 = (state_34241[(10)]);
var inst_34218 = cljs.core.empty_QMARK_(inst_34192);
var inst_34219 = (inst_34193.cljs$core$IFn$_invoke$arity$1 ? inst_34193.cljs$core$IFn$_invoke$arity$1(inst_34201) : inst_34193.call(null,inst_34201));
var inst_34220 = cljs.core.not(inst_34219);
var inst_34221 = ((inst_34218) && (inst_34220));
var state_34241__$1 = state_34241;
var statearr_34291_35420 = state_34241__$1;
(statearr_34291_35420[(2)] = inst_34221);

(statearr_34291_35420[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34242 === (10))){
var inst_34143 = (state_34241[(8)]);
var inst_34164 = (state_34241[(2)]);
var inst_34165 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_34164,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_34166 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_34164,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_34167 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_34164,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_34168 = inst_34143;
var state_34241__$1 = (function (){var statearr_34292 = state_34241;
(statearr_34292[(16)] = inst_34165);

(statearr_34292[(17)] = inst_34167);

(statearr_34292[(18)] = inst_34166);

(statearr_34292[(7)] = inst_34168);

return statearr_34292;
})();
var statearr_34293_35425 = state_34241__$1;
(statearr_34293_35425[(2)] = null);

(statearr_34293_35425[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34242 === (18))){
var inst_34183 = (state_34241[(2)]);
var state_34241__$1 = state_34241;
var statearr_34294_35426 = state_34241__$1;
(statearr_34294_35426[(2)] = inst_34183);

(statearr_34294_35426[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34242 === (37))){
var state_34241__$1 = state_34241;
var statearr_34295_35427 = state_34241__$1;
(statearr_34295_35427[(2)] = null);

(statearr_34295_35427[(1)] = (38));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34242 === (8))){
var inst_34143 = (state_34241[(8)]);
var inst_34161 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_34143);
var state_34241__$1 = state_34241;
var statearr_34296_35432 = state_34241__$1;
(statearr_34296_35432[(2)] = inst_34161);

(statearr_34296_35432[(1)] = (10));


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
});
return (function() {
var cljs$core$async$mix_$_state_machine__33165__auto__ = null;
var cljs$core$async$mix_$_state_machine__33165__auto____0 = (function (){
var statearr_34297 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_34297[(0)] = cljs$core$async$mix_$_state_machine__33165__auto__);

(statearr_34297[(1)] = (1));

return statearr_34297;
});
var cljs$core$async$mix_$_state_machine__33165__auto____1 = (function (state_34241){
while(true){
var ret_value__33166__auto__ = (function (){try{while(true){
var result__33167__auto__ = switch__33164__auto__(state_34241);
if(cljs.core.keyword_identical_QMARK_(result__33167__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33167__auto__;
}
break;
}
}catch (e34298){var ex__33168__auto__ = e34298;
var statearr_34299_35434 = state_34241;
(statearr_34299_35434[(2)] = ex__33168__auto__);


if(cljs.core.seq((state_34241[(4)]))){
var statearr_34300_35435 = state_34241;
(statearr_34300_35435[(1)] = cljs.core.first((state_34241[(4)])));

} else {
throw ex__33168__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__33166__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35437 = state_34241;
state_34241 = G__35437;
continue;
} else {
return ret_value__33166__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__33165__auto__ = function(state_34241){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__33165__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__33165__auto____1.call(this,state_34241);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__33165__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__33165__auto____0;
cljs$core$async$mix_$_state_machine__33165__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__33165__auto____1;
return cljs$core$async$mix_$_state_machine__33165__auto__;
})()
})();
var state__33202__auto__ = (function (){var statearr_34301 = f__33201__auto__();
(statearr_34301[(6)] = c__33200__auto___35360);

return statearr_34301;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__33202__auto__);
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

var cljs$core$async$Pub$sub_STAR_$dyn_35438 = (function (p,v,ch,close_QMARK_){
var x__4428__auto__ = (((p == null))?null:p);
var m__4429__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$4 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$4(p,v,ch,close_QMARK_) : m__4429__auto__.call(null,p,v,ch,close_QMARK_));
} else {
var m__4426__auto__ = (cljs.core.async.sub_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$4 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$4(p,v,ch,close_QMARK_) : m__4426__auto__.call(null,p,v,ch,close_QMARK_));
} else {
throw cljs.core.missing_protocol("Pub.sub*",p);
}
}
});
cljs.core.async.sub_STAR_ = (function cljs$core$async$sub_STAR_(p,v,ch,close_QMARK_){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$sub_STAR_$arity$4 == null)))))){
return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else {
return cljs$core$async$Pub$sub_STAR_$dyn_35438(p,v,ch,close_QMARK_);
}
});

var cljs$core$async$Pub$unsub_STAR_$dyn_35439 = (function (p,v,ch){
var x__4428__auto__ = (((p == null))?null:p);
var m__4429__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$3(p,v,ch) : m__4429__auto__.call(null,p,v,ch));
} else {
var m__4426__auto__ = (cljs.core.async.unsub_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$3(p,v,ch) : m__4426__auto__.call(null,p,v,ch));
} else {
throw cljs.core.missing_protocol("Pub.unsub*",p);
}
}
});
cljs.core.async.unsub_STAR_ = (function cljs$core$async$unsub_STAR_(p,v,ch){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_STAR_$arity$3 == null)))))){
return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else {
return cljs$core$async$Pub$unsub_STAR_$dyn_35439(p,v,ch);
}
});

var cljs$core$async$Pub$unsub_all_STAR_$dyn_35440 = (function() {
var G__35441 = null;
var G__35441__1 = (function (p){
var x__4428__auto__ = (((p == null))?null:p);
var m__4429__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$1(p) : m__4429__auto__.call(null,p));
} else {
var m__4426__auto__ = (cljs.core.async.unsub_all_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$1(p) : m__4426__auto__.call(null,p));
} else {
throw cljs.core.missing_protocol("Pub.unsub-all*",p);
}
}
});
var G__35441__2 = (function (p,v){
var x__4428__auto__ = (((p == null))?null:p);
var m__4429__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$2(p,v) : m__4429__auto__.call(null,p,v));
} else {
var m__4426__auto__ = (cljs.core.async.unsub_all_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$2(p,v) : m__4426__auto__.call(null,p,v));
} else {
throw cljs.core.missing_protocol("Pub.unsub-all*",p);
}
}
});
G__35441 = function(p,v){
switch(arguments.length){
case 1:
return G__35441__1.call(this,p);
case 2:
return G__35441__2.call(this,p,v);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__35441.cljs$core$IFn$_invoke$arity$1 = G__35441__1;
G__35441.cljs$core$IFn$_invoke$arity$2 = G__35441__2;
return G__35441;
})()
;
cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var G__34303 = arguments.length;
switch (G__34303) {
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
return cljs$core$async$Pub$unsub_all_STAR_$dyn_35440(p);
}
}));

(cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (p,v){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$2 == null)))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else {
return cljs$core$async$Pub$unsub_all_STAR_$dyn_35440(p,v);
}
}));

(cljs.core.async.unsub_all_STAR_.cljs$lang$maxFixedArity = 2);


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
var G__34306 = arguments.length;
switch (G__34306) {
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
var or__4126__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(mults),topic);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(mults,(function (p1__34304_SHARP_){
if(cljs.core.truth_((p1__34304_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__34304_SHARP_.cljs$core$IFn$_invoke$arity$1(topic) : p1__34304_SHARP_.call(null,topic)))){
return p1__34304_SHARP_;
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__34304_SHARP_,topic,cljs.core.async.mult(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((buf_fn.cljs$core$IFn$_invoke$arity$1 ? buf_fn.cljs$core$IFn$_invoke$arity$1(topic) : buf_fn.call(null,topic)))));
}
})),topic);
}
});
var p = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async34307 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async34307 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta34308){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta34308 = meta34308;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async34307.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_34309,meta34308__$1){
var self__ = this;
var _34309__$1 = this;
return (new cljs.core.async.t_cljs$core$async34307(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta34308__$1));
}));

(cljs.core.async.t_cljs$core$async34307.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_34309){
var self__ = this;
var _34309__$1 = this;
return self__.meta34308;
}));

(cljs.core.async.t_cljs$core$async34307.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async34307.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async34307.prototype.cljs$core$async$Pub$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async34307.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = (self__.ensure_mult.cljs$core$IFn$_invoke$arity$1 ? self__.ensure_mult.cljs$core$IFn$_invoke$arity$1(topic) : self__.ensure_mult.call(null,topic));
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(m,ch__$1,close_QMARK_);
}));

(cljs.core.async.t_cljs$core$async34307.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = (function (p,topic,ch__$1){
var self__ = this;
var p__$1 = this;
var temp__5735__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(self__.mults),topic);
if(cljs.core.truth_(temp__5735__auto__)){
var m = temp__5735__auto__;
return cljs.core.async.untap(m,ch__$1);
} else {
return null;
}
}));

(cljs.core.async.t_cljs$core$async34307.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_(self__.mults,cljs.core.PersistentArrayMap.EMPTY);
}));

(cljs.core.async.t_cljs$core$async34307.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.mults,cljs.core.dissoc,topic);
}));

(cljs.core.async.t_cljs$core$async34307.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta34308","meta34308",-176810753,null)], null);
}));

(cljs.core.async.t_cljs$core$async34307.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async34307.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async34307");

(cljs.core.async.t_cljs$core$async34307.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async34307");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async34307.
 */
cljs.core.async.__GT_t_cljs$core$async34307 = (function cljs$core$async$__GT_t_cljs$core$async34307(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta34308){
return (new cljs.core.async.t_cljs$core$async34307(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta34308));
});

}

return (new cljs.core.async.t_cljs$core$async34307(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__33200__auto___35460 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__33201__auto__ = (function (){var switch__33164__auto__ = (function (state_34381){
var state_val_34382 = (state_34381[(1)]);
if((state_val_34382 === (7))){
var inst_34377 = (state_34381[(2)]);
var state_34381__$1 = state_34381;
var statearr_34383_35464 = state_34381__$1;
(statearr_34383_35464[(2)] = inst_34377);

(statearr_34383_35464[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34382 === (20))){
var state_34381__$1 = state_34381;
var statearr_34384_35465 = state_34381__$1;
(statearr_34384_35465[(2)] = null);

(statearr_34384_35465[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34382 === (1))){
var state_34381__$1 = state_34381;
var statearr_34385_35466 = state_34381__$1;
(statearr_34385_35466[(2)] = null);

(statearr_34385_35466[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34382 === (24))){
var inst_34360 = (state_34381[(7)]);
var inst_34369 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(mults,cljs.core.dissoc,inst_34360);
var state_34381__$1 = state_34381;
var statearr_34386_35467 = state_34381__$1;
(statearr_34386_35467[(2)] = inst_34369);

(statearr_34386_35467[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34382 === (4))){
var inst_34312 = (state_34381[(8)]);
var inst_34312__$1 = (state_34381[(2)]);
var inst_34313 = (inst_34312__$1 == null);
var state_34381__$1 = (function (){var statearr_34387 = state_34381;
(statearr_34387[(8)] = inst_34312__$1);

return statearr_34387;
})();
if(cljs.core.truth_(inst_34313)){
var statearr_34388_35469 = state_34381__$1;
(statearr_34388_35469[(1)] = (5));

} else {
var statearr_34389_35470 = state_34381__$1;
(statearr_34389_35470[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34382 === (15))){
var inst_34354 = (state_34381[(2)]);
var state_34381__$1 = state_34381;
var statearr_34390_35471 = state_34381__$1;
(statearr_34390_35471[(2)] = inst_34354);

(statearr_34390_35471[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34382 === (21))){
var inst_34374 = (state_34381[(2)]);
var state_34381__$1 = (function (){var statearr_34391 = state_34381;
(statearr_34391[(9)] = inst_34374);

return statearr_34391;
})();
var statearr_34392_35475 = state_34381__$1;
(statearr_34392_35475[(2)] = null);

(statearr_34392_35475[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34382 === (13))){
var inst_34336 = (state_34381[(10)]);
var inst_34338 = cljs.core.chunked_seq_QMARK_(inst_34336);
var state_34381__$1 = state_34381;
if(inst_34338){
var statearr_34393_35482 = state_34381__$1;
(statearr_34393_35482[(1)] = (16));

} else {
var statearr_34394_35483 = state_34381__$1;
(statearr_34394_35483[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34382 === (22))){
var inst_34366 = (state_34381[(2)]);
var state_34381__$1 = state_34381;
if(cljs.core.truth_(inst_34366)){
var statearr_34395_35484 = state_34381__$1;
(statearr_34395_35484[(1)] = (23));

} else {
var statearr_34396_35487 = state_34381__$1;
(statearr_34396_35487[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34382 === (6))){
var inst_34362 = (state_34381[(11)]);
var inst_34360 = (state_34381[(7)]);
var inst_34312 = (state_34381[(8)]);
var inst_34360__$1 = (topic_fn.cljs$core$IFn$_invoke$arity$1 ? topic_fn.cljs$core$IFn$_invoke$arity$1(inst_34312) : topic_fn.call(null,inst_34312));
var inst_34361 = cljs.core.deref(mults);
var inst_34362__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_34361,inst_34360__$1);
var state_34381__$1 = (function (){var statearr_34397 = state_34381;
(statearr_34397[(11)] = inst_34362__$1);

(statearr_34397[(7)] = inst_34360__$1);

return statearr_34397;
})();
if(cljs.core.truth_(inst_34362__$1)){
var statearr_34398_35492 = state_34381__$1;
(statearr_34398_35492[(1)] = (19));

} else {
var statearr_34399_35493 = state_34381__$1;
(statearr_34399_35493[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34382 === (25))){
var inst_34371 = (state_34381[(2)]);
var state_34381__$1 = state_34381;
var statearr_34400_35494 = state_34381__$1;
(statearr_34400_35494[(2)] = inst_34371);

(statearr_34400_35494[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34382 === (17))){
var inst_34336 = (state_34381[(10)]);
var inst_34345 = cljs.core.first(inst_34336);
var inst_34346 = cljs.core.async.muxch_STAR_(inst_34345);
var inst_34347 = cljs.core.async.close_BANG_(inst_34346);
var inst_34348 = cljs.core.next(inst_34336);
var inst_34322 = inst_34348;
var inst_34323 = null;
var inst_34324 = (0);
var inst_34325 = (0);
var state_34381__$1 = (function (){var statearr_34401 = state_34381;
(statearr_34401[(12)] = inst_34325);

(statearr_34401[(13)] = inst_34347);

(statearr_34401[(14)] = inst_34324);

(statearr_34401[(15)] = inst_34323);

(statearr_34401[(16)] = inst_34322);

return statearr_34401;
})();
var statearr_34402_35495 = state_34381__$1;
(statearr_34402_35495[(2)] = null);

(statearr_34402_35495[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34382 === (3))){
var inst_34379 = (state_34381[(2)]);
var state_34381__$1 = state_34381;
return cljs.core.async.impl.ioc_helpers.return_chan(state_34381__$1,inst_34379);
} else {
if((state_val_34382 === (12))){
var inst_34356 = (state_34381[(2)]);
var state_34381__$1 = state_34381;
var statearr_34403_35502 = state_34381__$1;
(statearr_34403_35502[(2)] = inst_34356);

(statearr_34403_35502[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34382 === (2))){
var state_34381__$1 = state_34381;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_34381__$1,(4),ch);
} else {
if((state_val_34382 === (23))){
var state_34381__$1 = state_34381;
var statearr_34404_35503 = state_34381__$1;
(statearr_34404_35503[(2)] = null);

(statearr_34404_35503[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34382 === (19))){
var inst_34362 = (state_34381[(11)]);
var inst_34312 = (state_34381[(8)]);
var inst_34364 = cljs.core.async.muxch_STAR_(inst_34362);
var state_34381__$1 = state_34381;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_34381__$1,(22),inst_34364,inst_34312);
} else {
if((state_val_34382 === (11))){
var inst_34336 = (state_34381[(10)]);
var inst_34322 = (state_34381[(16)]);
var inst_34336__$1 = cljs.core.seq(inst_34322);
var state_34381__$1 = (function (){var statearr_34405 = state_34381;
(statearr_34405[(10)] = inst_34336__$1);

return statearr_34405;
})();
if(inst_34336__$1){
var statearr_34406_35504 = state_34381__$1;
(statearr_34406_35504[(1)] = (13));

} else {
var statearr_34407_35505 = state_34381__$1;
(statearr_34407_35505[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34382 === (9))){
var inst_34358 = (state_34381[(2)]);
var state_34381__$1 = state_34381;
var statearr_34408_35506 = state_34381__$1;
(statearr_34408_35506[(2)] = inst_34358);

(statearr_34408_35506[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34382 === (5))){
var inst_34319 = cljs.core.deref(mults);
var inst_34320 = cljs.core.vals(inst_34319);
var inst_34321 = cljs.core.seq(inst_34320);
var inst_34322 = inst_34321;
var inst_34323 = null;
var inst_34324 = (0);
var inst_34325 = (0);
var state_34381__$1 = (function (){var statearr_34409 = state_34381;
(statearr_34409[(12)] = inst_34325);

(statearr_34409[(14)] = inst_34324);

(statearr_34409[(15)] = inst_34323);

(statearr_34409[(16)] = inst_34322);

return statearr_34409;
})();
var statearr_34410_35507 = state_34381__$1;
(statearr_34410_35507[(2)] = null);

(statearr_34410_35507[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34382 === (14))){
var state_34381__$1 = state_34381;
var statearr_34414_35514 = state_34381__$1;
(statearr_34414_35514[(2)] = null);

(statearr_34414_35514[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34382 === (16))){
var inst_34336 = (state_34381[(10)]);
var inst_34340 = cljs.core.chunk_first(inst_34336);
var inst_34341 = cljs.core.chunk_rest(inst_34336);
var inst_34342 = cljs.core.count(inst_34340);
var inst_34322 = inst_34341;
var inst_34323 = inst_34340;
var inst_34324 = inst_34342;
var inst_34325 = (0);
var state_34381__$1 = (function (){var statearr_34415 = state_34381;
(statearr_34415[(12)] = inst_34325);

(statearr_34415[(14)] = inst_34324);

(statearr_34415[(15)] = inst_34323);

(statearr_34415[(16)] = inst_34322);

return statearr_34415;
})();
var statearr_34416_35515 = state_34381__$1;
(statearr_34416_35515[(2)] = null);

(statearr_34416_35515[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34382 === (10))){
var inst_34325 = (state_34381[(12)]);
var inst_34324 = (state_34381[(14)]);
var inst_34323 = (state_34381[(15)]);
var inst_34322 = (state_34381[(16)]);
var inst_34330 = cljs.core._nth(inst_34323,inst_34325);
var inst_34331 = cljs.core.async.muxch_STAR_(inst_34330);
var inst_34332 = cljs.core.async.close_BANG_(inst_34331);
var inst_34333 = (inst_34325 + (1));
var tmp34411 = inst_34324;
var tmp34412 = inst_34323;
var tmp34413 = inst_34322;
var inst_34322__$1 = tmp34413;
var inst_34323__$1 = tmp34412;
var inst_34324__$1 = tmp34411;
var inst_34325__$1 = inst_34333;
var state_34381__$1 = (function (){var statearr_34417 = state_34381;
(statearr_34417[(12)] = inst_34325__$1);

(statearr_34417[(17)] = inst_34332);

(statearr_34417[(14)] = inst_34324__$1);

(statearr_34417[(15)] = inst_34323__$1);

(statearr_34417[(16)] = inst_34322__$1);

return statearr_34417;
})();
var statearr_34418_35516 = state_34381__$1;
(statearr_34418_35516[(2)] = null);

(statearr_34418_35516[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34382 === (18))){
var inst_34351 = (state_34381[(2)]);
var state_34381__$1 = state_34381;
var statearr_34419_35523 = state_34381__$1;
(statearr_34419_35523[(2)] = inst_34351);

(statearr_34419_35523[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34382 === (8))){
var inst_34325 = (state_34381[(12)]);
var inst_34324 = (state_34381[(14)]);
var inst_34327 = (inst_34325 < inst_34324);
var inst_34328 = inst_34327;
var state_34381__$1 = state_34381;
if(cljs.core.truth_(inst_34328)){
var statearr_34420_35524 = state_34381__$1;
(statearr_34420_35524[(1)] = (10));

} else {
var statearr_34421_35525 = state_34381__$1;
(statearr_34421_35525[(1)] = (11));

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
var cljs$core$async$state_machine__33165__auto__ = null;
var cljs$core$async$state_machine__33165__auto____0 = (function (){
var statearr_34422 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_34422[(0)] = cljs$core$async$state_machine__33165__auto__);

(statearr_34422[(1)] = (1));

return statearr_34422;
});
var cljs$core$async$state_machine__33165__auto____1 = (function (state_34381){
while(true){
var ret_value__33166__auto__ = (function (){try{while(true){
var result__33167__auto__ = switch__33164__auto__(state_34381);
if(cljs.core.keyword_identical_QMARK_(result__33167__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33167__auto__;
}
break;
}
}catch (e34423){var ex__33168__auto__ = e34423;
var statearr_34424_35528 = state_34381;
(statearr_34424_35528[(2)] = ex__33168__auto__);


if(cljs.core.seq((state_34381[(4)]))){
var statearr_34425_35529 = state_34381;
(statearr_34425_35529[(1)] = cljs.core.first((state_34381[(4)])));

} else {
throw ex__33168__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__33166__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35530 = state_34381;
state_34381 = G__35530;
continue;
} else {
return ret_value__33166__auto__;
}
break;
}
});
cljs$core$async$state_machine__33165__auto__ = function(state_34381){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__33165__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__33165__auto____1.call(this,state_34381);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__33165__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__33165__auto____0;
cljs$core$async$state_machine__33165__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__33165__auto____1;
return cljs$core$async$state_machine__33165__auto__;
})()
})();
var state__33202__auto__ = (function (){var statearr_34426 = f__33201__auto__();
(statearr_34426[(6)] = c__33200__auto___35460);

return statearr_34426;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__33202__auto__);
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
var G__34428 = arguments.length;
switch (G__34428) {
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
var G__34430 = arguments.length;
switch (G__34430) {
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
var G__34432 = arguments.length;
switch (G__34432) {
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
var c__33200__auto___35542 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__33201__auto__ = (function (){var switch__33164__auto__ = (function (state_34475){
var state_val_34476 = (state_34475[(1)]);
if((state_val_34476 === (7))){
var state_34475__$1 = state_34475;
var statearr_34477_35543 = state_34475__$1;
(statearr_34477_35543[(2)] = null);

(statearr_34477_35543[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34476 === (1))){
var state_34475__$1 = state_34475;
var statearr_34478_35544 = state_34475__$1;
(statearr_34478_35544[(2)] = null);

(statearr_34478_35544[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34476 === (4))){
var inst_34435 = (state_34475[(7)]);
var inst_34436 = (state_34475[(8)]);
var inst_34438 = (inst_34436 < inst_34435);
var state_34475__$1 = state_34475;
if(cljs.core.truth_(inst_34438)){
var statearr_34479_35545 = state_34475__$1;
(statearr_34479_35545[(1)] = (6));

} else {
var statearr_34480_35546 = state_34475__$1;
(statearr_34480_35546[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34476 === (15))){
var inst_34461 = (state_34475[(9)]);
var inst_34466 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,inst_34461);
var state_34475__$1 = state_34475;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_34475__$1,(17),out,inst_34466);
} else {
if((state_val_34476 === (13))){
var inst_34461 = (state_34475[(9)]);
var inst_34461__$1 = (state_34475[(2)]);
var inst_34462 = cljs.core.some(cljs.core.nil_QMARK_,inst_34461__$1);
var state_34475__$1 = (function (){var statearr_34481 = state_34475;
(statearr_34481[(9)] = inst_34461__$1);

return statearr_34481;
})();
if(cljs.core.truth_(inst_34462)){
var statearr_34482_35550 = state_34475__$1;
(statearr_34482_35550[(1)] = (14));

} else {
var statearr_34483_35552 = state_34475__$1;
(statearr_34483_35552[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34476 === (6))){
var state_34475__$1 = state_34475;
var statearr_34484_35554 = state_34475__$1;
(statearr_34484_35554[(2)] = null);

(statearr_34484_35554[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34476 === (17))){
var inst_34468 = (state_34475[(2)]);
var state_34475__$1 = (function (){var statearr_34486 = state_34475;
(statearr_34486[(10)] = inst_34468);

return statearr_34486;
})();
var statearr_34487_35555 = state_34475__$1;
(statearr_34487_35555[(2)] = null);

(statearr_34487_35555[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34476 === (3))){
var inst_34473 = (state_34475[(2)]);
var state_34475__$1 = state_34475;
return cljs.core.async.impl.ioc_helpers.return_chan(state_34475__$1,inst_34473);
} else {
if((state_val_34476 === (12))){
var _ = (function (){var statearr_34488 = state_34475;
(statearr_34488[(4)] = cljs.core.rest((state_34475[(4)])));

return statearr_34488;
})();
var state_34475__$1 = state_34475;
var ex34485 = (state_34475__$1[(2)]);
var statearr_34489_35557 = state_34475__$1;
(statearr_34489_35557[(5)] = ex34485);


if((ex34485 instanceof Object)){
var statearr_34490_35558 = state_34475__$1;
(statearr_34490_35558[(1)] = (11));

(statearr_34490_35558[(5)] = null);

} else {
throw ex34485;

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34476 === (2))){
var inst_34434 = cljs.core.reset_BANG_(dctr,cnt);
var inst_34435 = cnt;
var inst_34436 = (0);
var state_34475__$1 = (function (){var statearr_34491 = state_34475;
(statearr_34491[(11)] = inst_34434);

(statearr_34491[(7)] = inst_34435);

(statearr_34491[(8)] = inst_34436);

return statearr_34491;
})();
var statearr_34492_35559 = state_34475__$1;
(statearr_34492_35559[(2)] = null);

(statearr_34492_35559[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34476 === (11))){
var inst_34440 = (state_34475[(2)]);
var inst_34441 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec);
var state_34475__$1 = (function (){var statearr_34493 = state_34475;
(statearr_34493[(12)] = inst_34440);

return statearr_34493;
})();
var statearr_34494_35560 = state_34475__$1;
(statearr_34494_35560[(2)] = inst_34441);

(statearr_34494_35560[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34476 === (9))){
var inst_34436 = (state_34475[(8)]);
var _ = (function (){var statearr_34495 = state_34475;
(statearr_34495[(4)] = cljs.core.cons((12),(state_34475[(4)])));

return statearr_34495;
})();
var inst_34447 = (chs__$1.cljs$core$IFn$_invoke$arity$1 ? chs__$1.cljs$core$IFn$_invoke$arity$1(inst_34436) : chs__$1.call(null,inst_34436));
var inst_34448 = (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(inst_34436) : done.call(null,inst_34436));
var inst_34449 = cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2(inst_34447,inst_34448);
var ___$1 = (function (){var statearr_34496 = state_34475;
(statearr_34496[(4)] = cljs.core.rest((state_34475[(4)])));

return statearr_34496;
})();
var state_34475__$1 = state_34475;
var statearr_34497_35563 = state_34475__$1;
(statearr_34497_35563[(2)] = inst_34449);

(statearr_34497_35563[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34476 === (5))){
var inst_34459 = (state_34475[(2)]);
var state_34475__$1 = (function (){var statearr_34498 = state_34475;
(statearr_34498[(13)] = inst_34459);

return statearr_34498;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_34475__$1,(13),dchan);
} else {
if((state_val_34476 === (14))){
var inst_34464 = cljs.core.async.close_BANG_(out);
var state_34475__$1 = state_34475;
var statearr_34499_35564 = state_34475__$1;
(statearr_34499_35564[(2)] = inst_34464);

(statearr_34499_35564[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34476 === (16))){
var inst_34471 = (state_34475[(2)]);
var state_34475__$1 = state_34475;
var statearr_34500_35566 = state_34475__$1;
(statearr_34500_35566[(2)] = inst_34471);

(statearr_34500_35566[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34476 === (10))){
var inst_34436 = (state_34475[(8)]);
var inst_34452 = (state_34475[(2)]);
var inst_34453 = (inst_34436 + (1));
var inst_34436__$1 = inst_34453;
var state_34475__$1 = (function (){var statearr_34501 = state_34475;
(statearr_34501[(8)] = inst_34436__$1);

(statearr_34501[(14)] = inst_34452);

return statearr_34501;
})();
var statearr_34502_35568 = state_34475__$1;
(statearr_34502_35568[(2)] = null);

(statearr_34502_35568[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34476 === (8))){
var inst_34457 = (state_34475[(2)]);
var state_34475__$1 = state_34475;
var statearr_34503_35569 = state_34475__$1;
(statearr_34503_35569[(2)] = inst_34457);

(statearr_34503_35569[(1)] = (5));


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
var cljs$core$async$state_machine__33165__auto__ = null;
var cljs$core$async$state_machine__33165__auto____0 = (function (){
var statearr_34504 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_34504[(0)] = cljs$core$async$state_machine__33165__auto__);

(statearr_34504[(1)] = (1));

return statearr_34504;
});
var cljs$core$async$state_machine__33165__auto____1 = (function (state_34475){
while(true){
var ret_value__33166__auto__ = (function (){try{while(true){
var result__33167__auto__ = switch__33164__auto__(state_34475);
if(cljs.core.keyword_identical_QMARK_(result__33167__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33167__auto__;
}
break;
}
}catch (e34505){var ex__33168__auto__ = e34505;
var statearr_34506_35570 = state_34475;
(statearr_34506_35570[(2)] = ex__33168__auto__);


if(cljs.core.seq((state_34475[(4)]))){
var statearr_34507_35571 = state_34475;
(statearr_34507_35571[(1)] = cljs.core.first((state_34475[(4)])));

} else {
throw ex__33168__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__33166__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35572 = state_34475;
state_34475 = G__35572;
continue;
} else {
return ret_value__33166__auto__;
}
break;
}
});
cljs$core$async$state_machine__33165__auto__ = function(state_34475){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__33165__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__33165__auto____1.call(this,state_34475);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__33165__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__33165__auto____0;
cljs$core$async$state_machine__33165__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__33165__auto____1;
return cljs$core$async$state_machine__33165__auto__;
})()
})();
var state__33202__auto__ = (function (){var statearr_34508 = f__33201__auto__();
(statearr_34508[(6)] = c__33200__auto___35542);

return statearr_34508;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__33202__auto__);
}));


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
var G__34511 = arguments.length;
switch (G__34511) {
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
var c__33200__auto___35576 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__33201__auto__ = (function (){var switch__33164__auto__ = (function (state_34543){
var state_val_34544 = (state_34543[(1)]);
if((state_val_34544 === (7))){
var inst_34523 = (state_34543[(7)]);
var inst_34522 = (state_34543[(8)]);
var inst_34522__$1 = (state_34543[(2)]);
var inst_34523__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_34522__$1,(0),null);
var inst_34524 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_34522__$1,(1),null);
var inst_34525 = (inst_34523__$1 == null);
var state_34543__$1 = (function (){var statearr_34545 = state_34543;
(statearr_34545[(9)] = inst_34524);

(statearr_34545[(7)] = inst_34523__$1);

(statearr_34545[(8)] = inst_34522__$1);

return statearr_34545;
})();
if(cljs.core.truth_(inst_34525)){
var statearr_34546_35577 = state_34543__$1;
(statearr_34546_35577[(1)] = (8));

} else {
var statearr_34547_35578 = state_34543__$1;
(statearr_34547_35578[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34544 === (1))){
var inst_34512 = cljs.core.vec(chs);
var inst_34513 = inst_34512;
var state_34543__$1 = (function (){var statearr_34548 = state_34543;
(statearr_34548[(10)] = inst_34513);

return statearr_34548;
})();
var statearr_34549_35580 = state_34543__$1;
(statearr_34549_35580[(2)] = null);

(statearr_34549_35580[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34544 === (4))){
var inst_34513 = (state_34543[(10)]);
var state_34543__$1 = state_34543;
return cljs.core.async.ioc_alts_BANG_(state_34543__$1,(7),inst_34513);
} else {
if((state_val_34544 === (6))){
var inst_34539 = (state_34543[(2)]);
var state_34543__$1 = state_34543;
var statearr_34550_35613 = state_34543__$1;
(statearr_34550_35613[(2)] = inst_34539);

(statearr_34550_35613[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34544 === (3))){
var inst_34541 = (state_34543[(2)]);
var state_34543__$1 = state_34543;
return cljs.core.async.impl.ioc_helpers.return_chan(state_34543__$1,inst_34541);
} else {
if((state_val_34544 === (2))){
var inst_34513 = (state_34543[(10)]);
var inst_34515 = cljs.core.count(inst_34513);
var inst_34516 = (inst_34515 > (0));
var state_34543__$1 = state_34543;
if(cljs.core.truth_(inst_34516)){
var statearr_34552_35618 = state_34543__$1;
(statearr_34552_35618[(1)] = (4));

} else {
var statearr_34553_35619 = state_34543__$1;
(statearr_34553_35619[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34544 === (11))){
var inst_34513 = (state_34543[(10)]);
var inst_34532 = (state_34543[(2)]);
var tmp34551 = inst_34513;
var inst_34513__$1 = tmp34551;
var state_34543__$1 = (function (){var statearr_34554 = state_34543;
(statearr_34554[(10)] = inst_34513__$1);

(statearr_34554[(11)] = inst_34532);

return statearr_34554;
})();
var statearr_34555_35621 = state_34543__$1;
(statearr_34555_35621[(2)] = null);

(statearr_34555_35621[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34544 === (9))){
var inst_34523 = (state_34543[(7)]);
var state_34543__$1 = state_34543;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_34543__$1,(11),out,inst_34523);
} else {
if((state_val_34544 === (5))){
var inst_34537 = cljs.core.async.close_BANG_(out);
var state_34543__$1 = state_34543;
var statearr_34556_35622 = state_34543__$1;
(statearr_34556_35622[(2)] = inst_34537);

(statearr_34556_35622[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34544 === (10))){
var inst_34535 = (state_34543[(2)]);
var state_34543__$1 = state_34543;
var statearr_34557_35623 = state_34543__$1;
(statearr_34557_35623[(2)] = inst_34535);

(statearr_34557_35623[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34544 === (8))){
var inst_34513 = (state_34543[(10)]);
var inst_34524 = (state_34543[(9)]);
var inst_34523 = (state_34543[(7)]);
var inst_34522 = (state_34543[(8)]);
var inst_34527 = (function (){var cs = inst_34513;
var vec__34518 = inst_34522;
var v = inst_34523;
var c = inst_34524;
return (function (p1__34509_SHARP_){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(c,p1__34509_SHARP_);
});
})();
var inst_34528 = cljs.core.filterv(inst_34527,inst_34513);
var inst_34513__$1 = inst_34528;
var state_34543__$1 = (function (){var statearr_34558 = state_34543;
(statearr_34558[(10)] = inst_34513__$1);

return statearr_34558;
})();
var statearr_34559_35634 = state_34543__$1;
(statearr_34559_35634[(2)] = null);

(statearr_34559_35634[(1)] = (2));


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
var cljs$core$async$state_machine__33165__auto__ = null;
var cljs$core$async$state_machine__33165__auto____0 = (function (){
var statearr_34560 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_34560[(0)] = cljs$core$async$state_machine__33165__auto__);

(statearr_34560[(1)] = (1));

return statearr_34560;
});
var cljs$core$async$state_machine__33165__auto____1 = (function (state_34543){
while(true){
var ret_value__33166__auto__ = (function (){try{while(true){
var result__33167__auto__ = switch__33164__auto__(state_34543);
if(cljs.core.keyword_identical_QMARK_(result__33167__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33167__auto__;
}
break;
}
}catch (e34561){var ex__33168__auto__ = e34561;
var statearr_34562_35648 = state_34543;
(statearr_34562_35648[(2)] = ex__33168__auto__);


if(cljs.core.seq((state_34543[(4)]))){
var statearr_34563_35649 = state_34543;
(statearr_34563_35649[(1)] = cljs.core.first((state_34543[(4)])));

} else {
throw ex__33168__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__33166__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35650 = state_34543;
state_34543 = G__35650;
continue;
} else {
return ret_value__33166__auto__;
}
break;
}
});
cljs$core$async$state_machine__33165__auto__ = function(state_34543){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__33165__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__33165__auto____1.call(this,state_34543);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__33165__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__33165__auto____0;
cljs$core$async$state_machine__33165__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__33165__auto____1;
return cljs$core$async$state_machine__33165__auto__;
})()
})();
var state__33202__auto__ = (function (){var statearr_34564 = f__33201__auto__();
(statearr_34564[(6)] = c__33200__auto___35576);

return statearr_34564;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__33202__auto__);
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
var G__34566 = arguments.length;
switch (G__34566) {
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
var c__33200__auto___35652 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__33201__auto__ = (function (){var switch__33164__auto__ = (function (state_34590){
var state_val_34591 = (state_34590[(1)]);
if((state_val_34591 === (7))){
var inst_34572 = (state_34590[(7)]);
var inst_34572__$1 = (state_34590[(2)]);
var inst_34573 = (inst_34572__$1 == null);
var inst_34574 = cljs.core.not(inst_34573);
var state_34590__$1 = (function (){var statearr_34592 = state_34590;
(statearr_34592[(7)] = inst_34572__$1);

return statearr_34592;
})();
if(inst_34574){
var statearr_34593_35653 = state_34590__$1;
(statearr_34593_35653[(1)] = (8));

} else {
var statearr_34594_35654 = state_34590__$1;
(statearr_34594_35654[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34591 === (1))){
var inst_34567 = (0);
var state_34590__$1 = (function (){var statearr_34595 = state_34590;
(statearr_34595[(8)] = inst_34567);

return statearr_34595;
})();
var statearr_34596_35655 = state_34590__$1;
(statearr_34596_35655[(2)] = null);

(statearr_34596_35655[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34591 === (4))){
var state_34590__$1 = state_34590;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_34590__$1,(7),ch);
} else {
if((state_val_34591 === (6))){
var inst_34585 = (state_34590[(2)]);
var state_34590__$1 = state_34590;
var statearr_34597_35656 = state_34590__$1;
(statearr_34597_35656[(2)] = inst_34585);

(statearr_34597_35656[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34591 === (3))){
var inst_34587 = (state_34590[(2)]);
var inst_34588 = cljs.core.async.close_BANG_(out);
var state_34590__$1 = (function (){var statearr_34598 = state_34590;
(statearr_34598[(9)] = inst_34587);

return statearr_34598;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_34590__$1,inst_34588);
} else {
if((state_val_34591 === (2))){
var inst_34567 = (state_34590[(8)]);
var inst_34569 = (inst_34567 < n);
var state_34590__$1 = state_34590;
if(cljs.core.truth_(inst_34569)){
var statearr_34599_35657 = state_34590__$1;
(statearr_34599_35657[(1)] = (4));

} else {
var statearr_34600_35658 = state_34590__$1;
(statearr_34600_35658[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34591 === (11))){
var inst_34567 = (state_34590[(8)]);
var inst_34577 = (state_34590[(2)]);
var inst_34578 = (inst_34567 + (1));
var inst_34567__$1 = inst_34578;
var state_34590__$1 = (function (){var statearr_34601 = state_34590;
(statearr_34601[(8)] = inst_34567__$1);

(statearr_34601[(10)] = inst_34577);

return statearr_34601;
})();
var statearr_34602_35672 = state_34590__$1;
(statearr_34602_35672[(2)] = null);

(statearr_34602_35672[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34591 === (9))){
var state_34590__$1 = state_34590;
var statearr_34603_35673 = state_34590__$1;
(statearr_34603_35673[(2)] = null);

(statearr_34603_35673[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34591 === (5))){
var state_34590__$1 = state_34590;
var statearr_34604_35674 = state_34590__$1;
(statearr_34604_35674[(2)] = null);

(statearr_34604_35674[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34591 === (10))){
var inst_34582 = (state_34590[(2)]);
var state_34590__$1 = state_34590;
var statearr_34605_35678 = state_34590__$1;
(statearr_34605_35678[(2)] = inst_34582);

(statearr_34605_35678[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34591 === (8))){
var inst_34572 = (state_34590[(7)]);
var state_34590__$1 = state_34590;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_34590__$1,(11),out,inst_34572);
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
var cljs$core$async$state_machine__33165__auto__ = null;
var cljs$core$async$state_machine__33165__auto____0 = (function (){
var statearr_34606 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_34606[(0)] = cljs$core$async$state_machine__33165__auto__);

(statearr_34606[(1)] = (1));

return statearr_34606;
});
var cljs$core$async$state_machine__33165__auto____1 = (function (state_34590){
while(true){
var ret_value__33166__auto__ = (function (){try{while(true){
var result__33167__auto__ = switch__33164__auto__(state_34590);
if(cljs.core.keyword_identical_QMARK_(result__33167__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33167__auto__;
}
break;
}
}catch (e34607){var ex__33168__auto__ = e34607;
var statearr_34608_35679 = state_34590;
(statearr_34608_35679[(2)] = ex__33168__auto__);


if(cljs.core.seq((state_34590[(4)]))){
var statearr_34609_35681 = state_34590;
(statearr_34609_35681[(1)] = cljs.core.first((state_34590[(4)])));

} else {
throw ex__33168__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__33166__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35685 = state_34590;
state_34590 = G__35685;
continue;
} else {
return ret_value__33166__auto__;
}
break;
}
});
cljs$core$async$state_machine__33165__auto__ = function(state_34590){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__33165__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__33165__auto____1.call(this,state_34590);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__33165__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__33165__auto____0;
cljs$core$async$state_machine__33165__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__33165__auto____1;
return cljs$core$async$state_machine__33165__auto__;
})()
})();
var state__33202__auto__ = (function (){var statearr_34610 = f__33201__auto__();
(statearr_34610[(6)] = c__33200__auto___35652);

return statearr_34610;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__33202__auto__);
}));


return out;
}));

(cljs.core.async.take.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async34612 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async34612 = (function (f,ch,meta34613){
this.f = f;
this.ch = ch;
this.meta34613 = meta34613;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async34612.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_34614,meta34613__$1){
var self__ = this;
var _34614__$1 = this;
return (new cljs.core.async.t_cljs$core$async34612(self__.f,self__.ch,meta34613__$1));
}));

(cljs.core.async.t_cljs$core$async34612.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_34614){
var self__ = this;
var _34614__$1 = this;
return self__.meta34613;
}));

(cljs.core.async.t_cljs$core$async34612.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async34612.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async34612.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async34612.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async34612.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_(self__.ch,(function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async34615 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async34615 = (function (f,ch,meta34613,_,fn1,meta34616){
this.f = f;
this.ch = ch;
this.meta34613 = meta34613;
this._ = _;
this.fn1 = fn1;
this.meta34616 = meta34616;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async34615.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_34617,meta34616__$1){
var self__ = this;
var _34617__$1 = this;
return (new cljs.core.async.t_cljs$core$async34615(self__.f,self__.ch,self__.meta34613,self__._,self__.fn1,meta34616__$1));
}));

(cljs.core.async.t_cljs$core$async34615.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_34617){
var self__ = this;
var _34617__$1 = this;
return self__.meta34616;
}));

(cljs.core.async.t_cljs$core$async34615.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async34615.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.fn1);
}));

(cljs.core.async.t_cljs$core$async34615.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async34615.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit(self__.fn1);
return (function (p1__34611_SHARP_){
var G__34618 = (((p1__34611_SHARP_ == null))?null:(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(p1__34611_SHARP_) : self__.f.call(null,p1__34611_SHARP_)));
return (f1.cljs$core$IFn$_invoke$arity$1 ? f1.cljs$core$IFn$_invoke$arity$1(G__34618) : f1.call(null,G__34618));
});
}));

(cljs.core.async.t_cljs$core$async34615.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta34613","meta34613",914794131,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async34612","cljs.core.async/t_cljs$core$async34612",524660620,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta34616","meta34616",-1063578255,null)], null);
}));

(cljs.core.async.t_cljs$core$async34615.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async34615.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async34615");

(cljs.core.async.t_cljs$core$async34615.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async34615");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async34615.
 */
cljs.core.async.__GT_t_cljs$core$async34615 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async34615(f__$1,ch__$1,meta34613__$1,___$2,fn1__$1,meta34616){
return (new cljs.core.async.t_cljs$core$async34615(f__$1,ch__$1,meta34613__$1,___$2,fn1__$1,meta34616));
});

}

return (new cljs.core.async.t_cljs$core$async34615(self__.f,self__.ch,self__.meta34613,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__4115__auto__ = ret;
if(cljs.core.truth_(and__4115__auto__)){
return (!((cljs.core.deref(ret) == null)));
} else {
return and__4115__auto__;
}
})())){
return cljs.core.async.impl.channels.box((function (){var G__34619 = cljs.core.deref(ret);
return (self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(G__34619) : self__.f.call(null,G__34619));
})());
} else {
return ret;
}
}));

(cljs.core.async.t_cljs$core$async34612.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async34612.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
}));

(cljs.core.async.t_cljs$core$async34612.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta34613","meta34613",914794131,null)], null);
}));

(cljs.core.async.t_cljs$core$async34612.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async34612.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async34612");

(cljs.core.async.t_cljs$core$async34612.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async34612");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async34612.
 */
cljs.core.async.__GT_t_cljs$core$async34612 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async34612(f__$1,ch__$1,meta34613){
return (new cljs.core.async.t_cljs$core$async34612(f__$1,ch__$1,meta34613));
});

}

return (new cljs.core.async.t_cljs$core$async34612(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async34620 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async34620 = (function (f,ch,meta34621){
this.f = f;
this.ch = ch;
this.meta34621 = meta34621;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async34620.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_34622,meta34621__$1){
var self__ = this;
var _34622__$1 = this;
return (new cljs.core.async.t_cljs$core$async34620(self__.f,self__.ch,meta34621__$1));
}));

(cljs.core.async.t_cljs$core$async34620.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_34622){
var self__ = this;
var _34622__$1 = this;
return self__.meta34621;
}));

(cljs.core.async.t_cljs$core$async34620.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async34620.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async34620.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async34620.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async34620.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async34620.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(val) : self__.f.call(null,val)),fn1);
}));

(cljs.core.async.t_cljs$core$async34620.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta34621","meta34621",-560904023,null)], null);
}));

(cljs.core.async.t_cljs$core$async34620.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async34620.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async34620");

(cljs.core.async.t_cljs$core$async34620.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async34620");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async34620.
 */
cljs.core.async.__GT_t_cljs$core$async34620 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async34620(f__$1,ch__$1,meta34621){
return (new cljs.core.async.t_cljs$core$async34620(f__$1,ch__$1,meta34621));
});

}

return (new cljs.core.async.t_cljs$core$async34620(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async34623 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async34623 = (function (p,ch,meta34624){
this.p = p;
this.ch = ch;
this.meta34624 = meta34624;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async34623.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_34625,meta34624__$1){
var self__ = this;
var _34625__$1 = this;
return (new cljs.core.async.t_cljs$core$async34623(self__.p,self__.ch,meta34624__$1));
}));

(cljs.core.async.t_cljs$core$async34623.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_34625){
var self__ = this;
var _34625__$1 = this;
return self__.meta34624;
}));

(cljs.core.async.t_cljs$core$async34623.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async34623.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async34623.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async34623.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async34623.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async34623.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async34623.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.p.cljs$core$IFn$_invoke$arity$1 ? self__.p.cljs$core$IFn$_invoke$arity$1(val) : self__.p.call(null,val)))){
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box(cljs.core.not(cljs.core.async.impl.protocols.closed_QMARK_(self__.ch)));
}
}));

(cljs.core.async.t_cljs$core$async34623.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta34624","meta34624",695064564,null)], null);
}));

(cljs.core.async.t_cljs$core$async34623.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async34623.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async34623");

(cljs.core.async.t_cljs$core$async34623.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async34623");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async34623.
 */
cljs.core.async.__GT_t_cljs$core$async34623 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async34623(p__$1,ch__$1,meta34624){
return (new cljs.core.async.t_cljs$core$async34623(p__$1,ch__$1,meta34624));
});

}

return (new cljs.core.async.t_cljs$core$async34623(p,ch,cljs.core.PersistentArrayMap.EMPTY));
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
var G__34627 = arguments.length;
switch (G__34627) {
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
var c__33200__auto___35718 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__33201__auto__ = (function (){var switch__33164__auto__ = (function (state_34648){
var state_val_34649 = (state_34648[(1)]);
if((state_val_34649 === (7))){
var inst_34644 = (state_34648[(2)]);
var state_34648__$1 = state_34648;
var statearr_34650_35728 = state_34648__$1;
(statearr_34650_35728[(2)] = inst_34644);

(statearr_34650_35728[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34649 === (1))){
var state_34648__$1 = state_34648;
var statearr_34651_35735 = state_34648__$1;
(statearr_34651_35735[(2)] = null);

(statearr_34651_35735[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34649 === (4))){
var inst_34630 = (state_34648[(7)]);
var inst_34630__$1 = (state_34648[(2)]);
var inst_34631 = (inst_34630__$1 == null);
var state_34648__$1 = (function (){var statearr_34652 = state_34648;
(statearr_34652[(7)] = inst_34630__$1);

return statearr_34652;
})();
if(cljs.core.truth_(inst_34631)){
var statearr_34653_35752 = state_34648__$1;
(statearr_34653_35752[(1)] = (5));

} else {
var statearr_34654_35753 = state_34648__$1;
(statearr_34654_35753[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34649 === (6))){
var inst_34630 = (state_34648[(7)]);
var inst_34635 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_34630) : p.call(null,inst_34630));
var state_34648__$1 = state_34648;
if(cljs.core.truth_(inst_34635)){
var statearr_34655_35767 = state_34648__$1;
(statearr_34655_35767[(1)] = (8));

} else {
var statearr_34656_35768 = state_34648__$1;
(statearr_34656_35768[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34649 === (3))){
var inst_34646 = (state_34648[(2)]);
var state_34648__$1 = state_34648;
return cljs.core.async.impl.ioc_helpers.return_chan(state_34648__$1,inst_34646);
} else {
if((state_val_34649 === (2))){
var state_34648__$1 = state_34648;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_34648__$1,(4),ch);
} else {
if((state_val_34649 === (11))){
var inst_34638 = (state_34648[(2)]);
var state_34648__$1 = state_34648;
var statearr_34657_35788 = state_34648__$1;
(statearr_34657_35788[(2)] = inst_34638);

(statearr_34657_35788[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34649 === (9))){
var state_34648__$1 = state_34648;
var statearr_34658_35795 = state_34648__$1;
(statearr_34658_35795[(2)] = null);

(statearr_34658_35795[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34649 === (5))){
var inst_34633 = cljs.core.async.close_BANG_(out);
var state_34648__$1 = state_34648;
var statearr_34659_35805 = state_34648__$1;
(statearr_34659_35805[(2)] = inst_34633);

(statearr_34659_35805[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34649 === (10))){
var inst_34641 = (state_34648[(2)]);
var state_34648__$1 = (function (){var statearr_34660 = state_34648;
(statearr_34660[(8)] = inst_34641);

return statearr_34660;
})();
var statearr_34661_35807 = state_34648__$1;
(statearr_34661_35807[(2)] = null);

(statearr_34661_35807[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34649 === (8))){
var inst_34630 = (state_34648[(7)]);
var state_34648__$1 = state_34648;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_34648__$1,(11),out,inst_34630);
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
var cljs$core$async$state_machine__33165__auto__ = null;
var cljs$core$async$state_machine__33165__auto____0 = (function (){
var statearr_34662 = [null,null,null,null,null,null,null,null,null];
(statearr_34662[(0)] = cljs$core$async$state_machine__33165__auto__);

(statearr_34662[(1)] = (1));

return statearr_34662;
});
var cljs$core$async$state_machine__33165__auto____1 = (function (state_34648){
while(true){
var ret_value__33166__auto__ = (function (){try{while(true){
var result__33167__auto__ = switch__33164__auto__(state_34648);
if(cljs.core.keyword_identical_QMARK_(result__33167__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33167__auto__;
}
break;
}
}catch (e34663){var ex__33168__auto__ = e34663;
var statearr_34664_35820 = state_34648;
(statearr_34664_35820[(2)] = ex__33168__auto__);


if(cljs.core.seq((state_34648[(4)]))){
var statearr_34665_35821 = state_34648;
(statearr_34665_35821[(1)] = cljs.core.first((state_34648[(4)])));

} else {
throw ex__33168__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__33166__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35822 = state_34648;
state_34648 = G__35822;
continue;
} else {
return ret_value__33166__auto__;
}
break;
}
});
cljs$core$async$state_machine__33165__auto__ = function(state_34648){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__33165__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__33165__auto____1.call(this,state_34648);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__33165__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__33165__auto____0;
cljs$core$async$state_machine__33165__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__33165__auto____1;
return cljs$core$async$state_machine__33165__auto__;
})()
})();
var state__33202__auto__ = (function (){var statearr_34666 = f__33201__auto__();
(statearr_34666[(6)] = c__33200__auto___35718);

return statearr_34666;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__33202__auto__);
}));


return out;
}));

(cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var G__34668 = arguments.length;
switch (G__34668) {
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
var c__33200__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__33201__auto__ = (function (){var switch__33164__auto__ = (function (state_34730){
var state_val_34731 = (state_34730[(1)]);
if((state_val_34731 === (7))){
var inst_34726 = (state_34730[(2)]);
var state_34730__$1 = state_34730;
var statearr_34732_35841 = state_34730__$1;
(statearr_34732_35841[(2)] = inst_34726);

(statearr_34732_35841[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34731 === (20))){
var inst_34696 = (state_34730[(7)]);
var inst_34707 = (state_34730[(2)]);
var inst_34708 = cljs.core.next(inst_34696);
var inst_34682 = inst_34708;
var inst_34683 = null;
var inst_34684 = (0);
var inst_34685 = (0);
var state_34730__$1 = (function (){var statearr_34733 = state_34730;
(statearr_34733[(8)] = inst_34684);

(statearr_34733[(9)] = inst_34683);

(statearr_34733[(10)] = inst_34685);

(statearr_34733[(11)] = inst_34682);

(statearr_34733[(12)] = inst_34707);

return statearr_34733;
})();
var statearr_34734_35842 = state_34730__$1;
(statearr_34734_35842[(2)] = null);

(statearr_34734_35842[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34731 === (1))){
var state_34730__$1 = state_34730;
var statearr_34735_35843 = state_34730__$1;
(statearr_34735_35843[(2)] = null);

(statearr_34735_35843[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34731 === (4))){
var inst_34671 = (state_34730[(13)]);
var inst_34671__$1 = (state_34730[(2)]);
var inst_34672 = (inst_34671__$1 == null);
var state_34730__$1 = (function (){var statearr_34736 = state_34730;
(statearr_34736[(13)] = inst_34671__$1);

return statearr_34736;
})();
if(cljs.core.truth_(inst_34672)){
var statearr_34737_35845 = state_34730__$1;
(statearr_34737_35845[(1)] = (5));

} else {
var statearr_34738_35846 = state_34730__$1;
(statearr_34738_35846[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34731 === (15))){
var state_34730__$1 = state_34730;
var statearr_34742_35847 = state_34730__$1;
(statearr_34742_35847[(2)] = null);

(statearr_34742_35847[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34731 === (21))){
var state_34730__$1 = state_34730;
var statearr_34743_35848 = state_34730__$1;
(statearr_34743_35848[(2)] = null);

(statearr_34743_35848[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34731 === (13))){
var inst_34684 = (state_34730[(8)]);
var inst_34683 = (state_34730[(9)]);
var inst_34685 = (state_34730[(10)]);
var inst_34682 = (state_34730[(11)]);
var inst_34692 = (state_34730[(2)]);
var inst_34693 = (inst_34685 + (1));
var tmp34739 = inst_34684;
var tmp34740 = inst_34683;
var tmp34741 = inst_34682;
var inst_34682__$1 = tmp34741;
var inst_34683__$1 = tmp34740;
var inst_34684__$1 = tmp34739;
var inst_34685__$1 = inst_34693;
var state_34730__$1 = (function (){var statearr_34744 = state_34730;
(statearr_34744[(8)] = inst_34684__$1);

(statearr_34744[(9)] = inst_34683__$1);

(statearr_34744[(10)] = inst_34685__$1);

(statearr_34744[(14)] = inst_34692);

(statearr_34744[(11)] = inst_34682__$1);

return statearr_34744;
})();
var statearr_34745_35849 = state_34730__$1;
(statearr_34745_35849[(2)] = null);

(statearr_34745_35849[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34731 === (22))){
var state_34730__$1 = state_34730;
var statearr_34746_35850 = state_34730__$1;
(statearr_34746_35850[(2)] = null);

(statearr_34746_35850[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34731 === (6))){
var inst_34671 = (state_34730[(13)]);
var inst_34680 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_34671) : f.call(null,inst_34671));
var inst_34681 = cljs.core.seq(inst_34680);
var inst_34682 = inst_34681;
var inst_34683 = null;
var inst_34684 = (0);
var inst_34685 = (0);
var state_34730__$1 = (function (){var statearr_34747 = state_34730;
(statearr_34747[(8)] = inst_34684);

(statearr_34747[(9)] = inst_34683);

(statearr_34747[(10)] = inst_34685);

(statearr_34747[(11)] = inst_34682);

return statearr_34747;
})();
var statearr_34748_35875 = state_34730__$1;
(statearr_34748_35875[(2)] = null);

(statearr_34748_35875[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34731 === (17))){
var inst_34696 = (state_34730[(7)]);
var inst_34700 = cljs.core.chunk_first(inst_34696);
var inst_34701 = cljs.core.chunk_rest(inst_34696);
var inst_34702 = cljs.core.count(inst_34700);
var inst_34682 = inst_34701;
var inst_34683 = inst_34700;
var inst_34684 = inst_34702;
var inst_34685 = (0);
var state_34730__$1 = (function (){var statearr_34749 = state_34730;
(statearr_34749[(8)] = inst_34684);

(statearr_34749[(9)] = inst_34683);

(statearr_34749[(10)] = inst_34685);

(statearr_34749[(11)] = inst_34682);

return statearr_34749;
})();
var statearr_34750_35883 = state_34730__$1;
(statearr_34750_35883[(2)] = null);

(statearr_34750_35883[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34731 === (3))){
var inst_34728 = (state_34730[(2)]);
var state_34730__$1 = state_34730;
return cljs.core.async.impl.ioc_helpers.return_chan(state_34730__$1,inst_34728);
} else {
if((state_val_34731 === (12))){
var inst_34716 = (state_34730[(2)]);
var state_34730__$1 = state_34730;
var statearr_34751_35891 = state_34730__$1;
(statearr_34751_35891[(2)] = inst_34716);

(statearr_34751_35891[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34731 === (2))){
var state_34730__$1 = state_34730;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_34730__$1,(4),in$);
} else {
if((state_val_34731 === (23))){
var inst_34724 = (state_34730[(2)]);
var state_34730__$1 = state_34730;
var statearr_34752_35899 = state_34730__$1;
(statearr_34752_35899[(2)] = inst_34724);

(statearr_34752_35899[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34731 === (19))){
var inst_34711 = (state_34730[(2)]);
var state_34730__$1 = state_34730;
var statearr_34753_35906 = state_34730__$1;
(statearr_34753_35906[(2)] = inst_34711);

(statearr_34753_35906[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34731 === (11))){
var inst_34696 = (state_34730[(7)]);
var inst_34682 = (state_34730[(11)]);
var inst_34696__$1 = cljs.core.seq(inst_34682);
var state_34730__$1 = (function (){var statearr_34754 = state_34730;
(statearr_34754[(7)] = inst_34696__$1);

return statearr_34754;
})();
if(inst_34696__$1){
var statearr_34755_35907 = state_34730__$1;
(statearr_34755_35907[(1)] = (14));

} else {
var statearr_34756_35908 = state_34730__$1;
(statearr_34756_35908[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34731 === (9))){
var inst_34718 = (state_34730[(2)]);
var inst_34719 = cljs.core.async.impl.protocols.closed_QMARK_(out);
var state_34730__$1 = (function (){var statearr_34757 = state_34730;
(statearr_34757[(15)] = inst_34718);

return statearr_34757;
})();
if(cljs.core.truth_(inst_34719)){
var statearr_34758_35909 = state_34730__$1;
(statearr_34758_35909[(1)] = (21));

} else {
var statearr_34759_35910 = state_34730__$1;
(statearr_34759_35910[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34731 === (5))){
var inst_34674 = cljs.core.async.close_BANG_(out);
var state_34730__$1 = state_34730;
var statearr_34760_35911 = state_34730__$1;
(statearr_34760_35911[(2)] = inst_34674);

(statearr_34760_35911[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34731 === (14))){
var inst_34696 = (state_34730[(7)]);
var inst_34698 = cljs.core.chunked_seq_QMARK_(inst_34696);
var state_34730__$1 = state_34730;
if(inst_34698){
var statearr_34761_35912 = state_34730__$1;
(statearr_34761_35912[(1)] = (17));

} else {
var statearr_34762_35913 = state_34730__$1;
(statearr_34762_35913[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34731 === (16))){
var inst_34714 = (state_34730[(2)]);
var state_34730__$1 = state_34730;
var statearr_34763_35914 = state_34730__$1;
(statearr_34763_35914[(2)] = inst_34714);

(statearr_34763_35914[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34731 === (10))){
var inst_34683 = (state_34730[(9)]);
var inst_34685 = (state_34730[(10)]);
var inst_34690 = cljs.core._nth(inst_34683,inst_34685);
var state_34730__$1 = state_34730;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_34730__$1,(13),out,inst_34690);
} else {
if((state_val_34731 === (18))){
var inst_34696 = (state_34730[(7)]);
var inst_34705 = cljs.core.first(inst_34696);
var state_34730__$1 = state_34730;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_34730__$1,(20),out,inst_34705);
} else {
if((state_val_34731 === (8))){
var inst_34684 = (state_34730[(8)]);
var inst_34685 = (state_34730[(10)]);
var inst_34687 = (inst_34685 < inst_34684);
var inst_34688 = inst_34687;
var state_34730__$1 = state_34730;
if(cljs.core.truth_(inst_34688)){
var statearr_34764_35916 = state_34730__$1;
(statearr_34764_35916[(1)] = (10));

} else {
var statearr_34765_35917 = state_34730__$1;
(statearr_34765_35917[(1)] = (11));

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
var cljs$core$async$mapcat_STAR__$_state_machine__33165__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__33165__auto____0 = (function (){
var statearr_34766 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_34766[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__33165__auto__);

(statearr_34766[(1)] = (1));

return statearr_34766;
});
var cljs$core$async$mapcat_STAR__$_state_machine__33165__auto____1 = (function (state_34730){
while(true){
var ret_value__33166__auto__ = (function (){try{while(true){
var result__33167__auto__ = switch__33164__auto__(state_34730);
if(cljs.core.keyword_identical_QMARK_(result__33167__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33167__auto__;
}
break;
}
}catch (e34767){var ex__33168__auto__ = e34767;
var statearr_34768_35918 = state_34730;
(statearr_34768_35918[(2)] = ex__33168__auto__);


if(cljs.core.seq((state_34730[(4)]))){
var statearr_34769_35919 = state_34730;
(statearr_34769_35919[(1)] = cljs.core.first((state_34730[(4)])));

} else {
throw ex__33168__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__33166__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35920 = state_34730;
state_34730 = G__35920;
continue;
} else {
return ret_value__33166__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__33165__auto__ = function(state_34730){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__33165__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__33165__auto____1.call(this,state_34730);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__33165__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__33165__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__33165__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__33165__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__33165__auto__;
})()
})();
var state__33202__auto__ = (function (){var statearr_34770 = f__33201__auto__();
(statearr_34770[(6)] = c__33200__auto__);

return statearr_34770;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__33202__auto__);
}));

return c__33200__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var G__34772 = arguments.length;
switch (G__34772) {
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
var G__34774 = arguments.length;
switch (G__34774) {
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
var G__34776 = arguments.length;
switch (G__34776) {
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
var c__33200__auto___35947 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__33201__auto__ = (function (){var switch__33164__auto__ = (function (state_34800){
var state_val_34801 = (state_34800[(1)]);
if((state_val_34801 === (7))){
var inst_34795 = (state_34800[(2)]);
var state_34800__$1 = state_34800;
var statearr_34802_35950 = state_34800__$1;
(statearr_34802_35950[(2)] = inst_34795);

(statearr_34802_35950[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34801 === (1))){
var inst_34777 = null;
var state_34800__$1 = (function (){var statearr_34803 = state_34800;
(statearr_34803[(7)] = inst_34777);

return statearr_34803;
})();
var statearr_34804_35951 = state_34800__$1;
(statearr_34804_35951[(2)] = null);

(statearr_34804_35951[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34801 === (4))){
var inst_34780 = (state_34800[(8)]);
var inst_34780__$1 = (state_34800[(2)]);
var inst_34781 = (inst_34780__$1 == null);
var inst_34782 = cljs.core.not(inst_34781);
var state_34800__$1 = (function (){var statearr_34805 = state_34800;
(statearr_34805[(8)] = inst_34780__$1);

return statearr_34805;
})();
if(inst_34782){
var statearr_34806_35956 = state_34800__$1;
(statearr_34806_35956[(1)] = (5));

} else {
var statearr_34807_35957 = state_34800__$1;
(statearr_34807_35957[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34801 === (6))){
var state_34800__$1 = state_34800;
var statearr_34808_35958 = state_34800__$1;
(statearr_34808_35958[(2)] = null);

(statearr_34808_35958[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34801 === (3))){
var inst_34797 = (state_34800[(2)]);
var inst_34798 = cljs.core.async.close_BANG_(out);
var state_34800__$1 = (function (){var statearr_34809 = state_34800;
(statearr_34809[(9)] = inst_34797);

return statearr_34809;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_34800__$1,inst_34798);
} else {
if((state_val_34801 === (2))){
var state_34800__$1 = state_34800;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_34800__$1,(4),ch);
} else {
if((state_val_34801 === (11))){
var inst_34780 = (state_34800[(8)]);
var inst_34789 = (state_34800[(2)]);
var inst_34777 = inst_34780;
var state_34800__$1 = (function (){var statearr_34810 = state_34800;
(statearr_34810[(10)] = inst_34789);

(statearr_34810[(7)] = inst_34777);

return statearr_34810;
})();
var statearr_34811_35959 = state_34800__$1;
(statearr_34811_35959[(2)] = null);

(statearr_34811_35959[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34801 === (9))){
var inst_34780 = (state_34800[(8)]);
var state_34800__$1 = state_34800;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_34800__$1,(11),out,inst_34780);
} else {
if((state_val_34801 === (5))){
var inst_34780 = (state_34800[(8)]);
var inst_34777 = (state_34800[(7)]);
var inst_34784 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_34780,inst_34777);
var state_34800__$1 = state_34800;
if(inst_34784){
var statearr_34813_35960 = state_34800__$1;
(statearr_34813_35960[(1)] = (8));

} else {
var statearr_34814_35961 = state_34800__$1;
(statearr_34814_35961[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34801 === (10))){
var inst_34792 = (state_34800[(2)]);
var state_34800__$1 = state_34800;
var statearr_34815_35962 = state_34800__$1;
(statearr_34815_35962[(2)] = inst_34792);

(statearr_34815_35962[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34801 === (8))){
var inst_34777 = (state_34800[(7)]);
var tmp34812 = inst_34777;
var inst_34777__$1 = tmp34812;
var state_34800__$1 = (function (){var statearr_34816 = state_34800;
(statearr_34816[(7)] = inst_34777__$1);

return statearr_34816;
})();
var statearr_34817_35963 = state_34800__$1;
(statearr_34817_35963[(2)] = null);

(statearr_34817_35963[(1)] = (2));


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
var cljs$core$async$state_machine__33165__auto__ = null;
var cljs$core$async$state_machine__33165__auto____0 = (function (){
var statearr_34818 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_34818[(0)] = cljs$core$async$state_machine__33165__auto__);

(statearr_34818[(1)] = (1));

return statearr_34818;
});
var cljs$core$async$state_machine__33165__auto____1 = (function (state_34800){
while(true){
var ret_value__33166__auto__ = (function (){try{while(true){
var result__33167__auto__ = switch__33164__auto__(state_34800);
if(cljs.core.keyword_identical_QMARK_(result__33167__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33167__auto__;
}
break;
}
}catch (e34819){var ex__33168__auto__ = e34819;
var statearr_34820_35964 = state_34800;
(statearr_34820_35964[(2)] = ex__33168__auto__);


if(cljs.core.seq((state_34800[(4)]))){
var statearr_34821_35965 = state_34800;
(statearr_34821_35965[(1)] = cljs.core.first((state_34800[(4)])));

} else {
throw ex__33168__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__33166__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35968 = state_34800;
state_34800 = G__35968;
continue;
} else {
return ret_value__33166__auto__;
}
break;
}
});
cljs$core$async$state_machine__33165__auto__ = function(state_34800){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__33165__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__33165__auto____1.call(this,state_34800);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__33165__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__33165__auto____0;
cljs$core$async$state_machine__33165__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__33165__auto____1;
return cljs$core$async$state_machine__33165__auto__;
})()
})();
var state__33202__auto__ = (function (){var statearr_34822 = f__33201__auto__();
(statearr_34822[(6)] = c__33200__auto___35947);

return statearr_34822;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__33202__auto__);
}));


return out;
}));

(cljs.core.async.unique.cljs$lang$maxFixedArity = 2);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var G__34824 = arguments.length;
switch (G__34824) {
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
var c__33200__auto___35971 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__33201__auto__ = (function (){var switch__33164__auto__ = (function (state_34862){
var state_val_34863 = (state_34862[(1)]);
if((state_val_34863 === (7))){
var inst_34858 = (state_34862[(2)]);
var state_34862__$1 = state_34862;
var statearr_34864_35974 = state_34862__$1;
(statearr_34864_35974[(2)] = inst_34858);

(statearr_34864_35974[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34863 === (1))){
var inst_34825 = (new Array(n));
var inst_34826 = inst_34825;
var inst_34827 = (0);
var state_34862__$1 = (function (){var statearr_34865 = state_34862;
(statearr_34865[(7)] = inst_34826);

(statearr_34865[(8)] = inst_34827);

return statearr_34865;
})();
var statearr_34866_35975 = state_34862__$1;
(statearr_34866_35975[(2)] = null);

(statearr_34866_35975[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34863 === (4))){
var inst_34830 = (state_34862[(9)]);
var inst_34830__$1 = (state_34862[(2)]);
var inst_34831 = (inst_34830__$1 == null);
var inst_34832 = cljs.core.not(inst_34831);
var state_34862__$1 = (function (){var statearr_34867 = state_34862;
(statearr_34867[(9)] = inst_34830__$1);

return statearr_34867;
})();
if(inst_34832){
var statearr_34868_35977 = state_34862__$1;
(statearr_34868_35977[(1)] = (5));

} else {
var statearr_34869_35978 = state_34862__$1;
(statearr_34869_35978[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34863 === (15))){
var inst_34852 = (state_34862[(2)]);
var state_34862__$1 = state_34862;
var statearr_34870_35979 = state_34862__$1;
(statearr_34870_35979[(2)] = inst_34852);

(statearr_34870_35979[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34863 === (13))){
var state_34862__$1 = state_34862;
var statearr_34871_35980 = state_34862__$1;
(statearr_34871_35980[(2)] = null);

(statearr_34871_35980[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34863 === (6))){
var inst_34827 = (state_34862[(8)]);
var inst_34848 = (inst_34827 > (0));
var state_34862__$1 = state_34862;
if(cljs.core.truth_(inst_34848)){
var statearr_34872_35981 = state_34862__$1;
(statearr_34872_35981[(1)] = (12));

} else {
var statearr_34873_35982 = state_34862__$1;
(statearr_34873_35982[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34863 === (3))){
var inst_34860 = (state_34862[(2)]);
var state_34862__$1 = state_34862;
return cljs.core.async.impl.ioc_helpers.return_chan(state_34862__$1,inst_34860);
} else {
if((state_val_34863 === (12))){
var inst_34826 = (state_34862[(7)]);
var inst_34850 = cljs.core.vec(inst_34826);
var state_34862__$1 = state_34862;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_34862__$1,(15),out,inst_34850);
} else {
if((state_val_34863 === (2))){
var state_34862__$1 = state_34862;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_34862__$1,(4),ch);
} else {
if((state_val_34863 === (11))){
var inst_34842 = (state_34862[(2)]);
var inst_34843 = (new Array(n));
var inst_34826 = inst_34843;
var inst_34827 = (0);
var state_34862__$1 = (function (){var statearr_34874 = state_34862;
(statearr_34874[(7)] = inst_34826);

(statearr_34874[(8)] = inst_34827);

(statearr_34874[(10)] = inst_34842);

return statearr_34874;
})();
var statearr_34875_35983 = state_34862__$1;
(statearr_34875_35983[(2)] = null);

(statearr_34875_35983[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34863 === (9))){
var inst_34826 = (state_34862[(7)]);
var inst_34840 = cljs.core.vec(inst_34826);
var state_34862__$1 = state_34862;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_34862__$1,(11),out,inst_34840);
} else {
if((state_val_34863 === (5))){
var inst_34826 = (state_34862[(7)]);
var inst_34835 = (state_34862[(11)]);
var inst_34830 = (state_34862[(9)]);
var inst_34827 = (state_34862[(8)]);
var inst_34834 = (inst_34826[inst_34827] = inst_34830);
var inst_34835__$1 = (inst_34827 + (1));
var inst_34836 = (inst_34835__$1 < n);
var state_34862__$1 = (function (){var statearr_34876 = state_34862;
(statearr_34876[(11)] = inst_34835__$1);

(statearr_34876[(12)] = inst_34834);

return statearr_34876;
})();
if(cljs.core.truth_(inst_34836)){
var statearr_34877_35987 = state_34862__$1;
(statearr_34877_35987[(1)] = (8));

} else {
var statearr_34878_35988 = state_34862__$1;
(statearr_34878_35988[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34863 === (14))){
var inst_34855 = (state_34862[(2)]);
var inst_34856 = cljs.core.async.close_BANG_(out);
var state_34862__$1 = (function (){var statearr_34880 = state_34862;
(statearr_34880[(13)] = inst_34855);

return statearr_34880;
})();
var statearr_34881_35989 = state_34862__$1;
(statearr_34881_35989[(2)] = inst_34856);

(statearr_34881_35989[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34863 === (10))){
var inst_34846 = (state_34862[(2)]);
var state_34862__$1 = state_34862;
var statearr_34882_35990 = state_34862__$1;
(statearr_34882_35990[(2)] = inst_34846);

(statearr_34882_35990[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34863 === (8))){
var inst_34826 = (state_34862[(7)]);
var inst_34835 = (state_34862[(11)]);
var tmp34879 = inst_34826;
var inst_34826__$1 = tmp34879;
var inst_34827 = inst_34835;
var state_34862__$1 = (function (){var statearr_34883 = state_34862;
(statearr_34883[(7)] = inst_34826__$1);

(statearr_34883[(8)] = inst_34827);

return statearr_34883;
})();
var statearr_34884_35991 = state_34862__$1;
(statearr_34884_35991[(2)] = null);

(statearr_34884_35991[(1)] = (2));


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
var cljs$core$async$state_machine__33165__auto__ = null;
var cljs$core$async$state_machine__33165__auto____0 = (function (){
var statearr_34885 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_34885[(0)] = cljs$core$async$state_machine__33165__auto__);

(statearr_34885[(1)] = (1));

return statearr_34885;
});
var cljs$core$async$state_machine__33165__auto____1 = (function (state_34862){
while(true){
var ret_value__33166__auto__ = (function (){try{while(true){
var result__33167__auto__ = switch__33164__auto__(state_34862);
if(cljs.core.keyword_identical_QMARK_(result__33167__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33167__auto__;
}
break;
}
}catch (e34886){var ex__33168__auto__ = e34886;
var statearr_34887_35994 = state_34862;
(statearr_34887_35994[(2)] = ex__33168__auto__);


if(cljs.core.seq((state_34862[(4)]))){
var statearr_34888_35996 = state_34862;
(statearr_34888_35996[(1)] = cljs.core.first((state_34862[(4)])));

} else {
throw ex__33168__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__33166__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35997 = state_34862;
state_34862 = G__35997;
continue;
} else {
return ret_value__33166__auto__;
}
break;
}
});
cljs$core$async$state_machine__33165__auto__ = function(state_34862){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__33165__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__33165__auto____1.call(this,state_34862);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__33165__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__33165__auto____0;
cljs$core$async$state_machine__33165__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__33165__auto____1;
return cljs$core$async$state_machine__33165__auto__;
})()
})();
var state__33202__auto__ = (function (){var statearr_34889 = f__33201__auto__();
(statearr_34889[(6)] = c__33200__auto___35971);

return statearr_34889;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__33202__auto__);
}));


return out;
}));

(cljs.core.async.partition.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var G__34891 = arguments.length;
switch (G__34891) {
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
var c__33200__auto___35999 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__33201__auto__ = (function (){var switch__33164__auto__ = (function (state_34933){
var state_val_34934 = (state_34933[(1)]);
if((state_val_34934 === (7))){
var inst_34929 = (state_34933[(2)]);
var state_34933__$1 = state_34933;
var statearr_34935_36000 = state_34933__$1;
(statearr_34935_36000[(2)] = inst_34929);

(statearr_34935_36000[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34934 === (1))){
var inst_34892 = [];
var inst_34893 = inst_34892;
var inst_34894 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_34933__$1 = (function (){var statearr_34936 = state_34933;
(statearr_34936[(7)] = inst_34893);

(statearr_34936[(8)] = inst_34894);

return statearr_34936;
})();
var statearr_34937_36001 = state_34933__$1;
(statearr_34937_36001[(2)] = null);

(statearr_34937_36001[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34934 === (4))){
var inst_34897 = (state_34933[(9)]);
var inst_34897__$1 = (state_34933[(2)]);
var inst_34898 = (inst_34897__$1 == null);
var inst_34899 = cljs.core.not(inst_34898);
var state_34933__$1 = (function (){var statearr_34938 = state_34933;
(statearr_34938[(9)] = inst_34897__$1);

return statearr_34938;
})();
if(inst_34899){
var statearr_34939_36002 = state_34933__$1;
(statearr_34939_36002[(1)] = (5));

} else {
var statearr_34940_36003 = state_34933__$1;
(statearr_34940_36003[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34934 === (15))){
var inst_34923 = (state_34933[(2)]);
var state_34933__$1 = state_34933;
var statearr_34941_36004 = state_34933__$1;
(statearr_34941_36004[(2)] = inst_34923);

(statearr_34941_36004[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34934 === (13))){
var state_34933__$1 = state_34933;
var statearr_34942_36007 = state_34933__$1;
(statearr_34942_36007[(2)] = null);

(statearr_34942_36007[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34934 === (6))){
var inst_34893 = (state_34933[(7)]);
var inst_34918 = inst_34893.length;
var inst_34919 = (inst_34918 > (0));
var state_34933__$1 = state_34933;
if(cljs.core.truth_(inst_34919)){
var statearr_34943_36008 = state_34933__$1;
(statearr_34943_36008[(1)] = (12));

} else {
var statearr_34944_36009 = state_34933__$1;
(statearr_34944_36009[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34934 === (3))){
var inst_34931 = (state_34933[(2)]);
var state_34933__$1 = state_34933;
return cljs.core.async.impl.ioc_helpers.return_chan(state_34933__$1,inst_34931);
} else {
if((state_val_34934 === (12))){
var inst_34893 = (state_34933[(7)]);
var inst_34921 = cljs.core.vec(inst_34893);
var state_34933__$1 = state_34933;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_34933__$1,(15),out,inst_34921);
} else {
if((state_val_34934 === (2))){
var state_34933__$1 = state_34933;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_34933__$1,(4),ch);
} else {
if((state_val_34934 === (11))){
var inst_34901 = (state_34933[(10)]);
var inst_34897 = (state_34933[(9)]);
var inst_34911 = (state_34933[(2)]);
var inst_34912 = [];
var inst_34913 = inst_34912.push(inst_34897);
var inst_34893 = inst_34912;
var inst_34894 = inst_34901;
var state_34933__$1 = (function (){var statearr_34945 = state_34933;
(statearr_34945[(11)] = inst_34913);

(statearr_34945[(7)] = inst_34893);

(statearr_34945[(12)] = inst_34911);

(statearr_34945[(8)] = inst_34894);

return statearr_34945;
})();
var statearr_34946_36049 = state_34933__$1;
(statearr_34946_36049[(2)] = null);

(statearr_34946_36049[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34934 === (9))){
var inst_34893 = (state_34933[(7)]);
var inst_34909 = cljs.core.vec(inst_34893);
var state_34933__$1 = state_34933;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_34933__$1,(11),out,inst_34909);
} else {
if((state_val_34934 === (5))){
var inst_34901 = (state_34933[(10)]);
var inst_34897 = (state_34933[(9)]);
var inst_34894 = (state_34933[(8)]);
var inst_34901__$1 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_34897) : f.call(null,inst_34897));
var inst_34902 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_34901__$1,inst_34894);
var inst_34903 = cljs.core.keyword_identical_QMARK_(inst_34894,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_34904 = ((inst_34902) || (inst_34903));
var state_34933__$1 = (function (){var statearr_34947 = state_34933;
(statearr_34947[(10)] = inst_34901__$1);

return statearr_34947;
})();
if(cljs.core.truth_(inst_34904)){
var statearr_34948_36050 = state_34933__$1;
(statearr_34948_36050[(1)] = (8));

} else {
var statearr_34949_36051 = state_34933__$1;
(statearr_34949_36051[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34934 === (14))){
var inst_34926 = (state_34933[(2)]);
var inst_34927 = cljs.core.async.close_BANG_(out);
var state_34933__$1 = (function (){var statearr_34951 = state_34933;
(statearr_34951[(13)] = inst_34926);

return statearr_34951;
})();
var statearr_34952_36052 = state_34933__$1;
(statearr_34952_36052[(2)] = inst_34927);

(statearr_34952_36052[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34934 === (10))){
var inst_34916 = (state_34933[(2)]);
var state_34933__$1 = state_34933;
var statearr_34953_36053 = state_34933__$1;
(statearr_34953_36053[(2)] = inst_34916);

(statearr_34953_36053[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34934 === (8))){
var inst_34901 = (state_34933[(10)]);
var inst_34897 = (state_34933[(9)]);
var inst_34893 = (state_34933[(7)]);
var inst_34906 = inst_34893.push(inst_34897);
var tmp34950 = inst_34893;
var inst_34893__$1 = tmp34950;
var inst_34894 = inst_34901;
var state_34933__$1 = (function (){var statearr_34954 = state_34933;
(statearr_34954[(14)] = inst_34906);

(statearr_34954[(7)] = inst_34893__$1);

(statearr_34954[(8)] = inst_34894);

return statearr_34954;
})();
var statearr_34955_36054 = state_34933__$1;
(statearr_34955_36054[(2)] = null);

(statearr_34955_36054[(1)] = (2));


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
var cljs$core$async$state_machine__33165__auto__ = null;
var cljs$core$async$state_machine__33165__auto____0 = (function (){
var statearr_34956 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_34956[(0)] = cljs$core$async$state_machine__33165__auto__);

(statearr_34956[(1)] = (1));

return statearr_34956;
});
var cljs$core$async$state_machine__33165__auto____1 = (function (state_34933){
while(true){
var ret_value__33166__auto__ = (function (){try{while(true){
var result__33167__auto__ = switch__33164__auto__(state_34933);
if(cljs.core.keyword_identical_QMARK_(result__33167__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33167__auto__;
}
break;
}
}catch (e34957){var ex__33168__auto__ = e34957;
var statearr_34958_36062 = state_34933;
(statearr_34958_36062[(2)] = ex__33168__auto__);


if(cljs.core.seq((state_34933[(4)]))){
var statearr_34959_36064 = state_34933;
(statearr_34959_36064[(1)] = cljs.core.first((state_34933[(4)])));

} else {
throw ex__33168__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__33166__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36065 = state_34933;
state_34933 = G__36065;
continue;
} else {
return ret_value__33166__auto__;
}
break;
}
});
cljs$core$async$state_machine__33165__auto__ = function(state_34933){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__33165__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__33165__auto____1.call(this,state_34933);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__33165__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__33165__auto____0;
cljs$core$async$state_machine__33165__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__33165__auto____1;
return cljs$core$async$state_machine__33165__auto__;
})()
})();
var state__33202__auto__ = (function (){var statearr_34960 = f__33201__auto__();
(statearr_34960[(6)] = c__33200__auto___35999);

return statearr_34960;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__33202__auto__);
}));


return out;
}));

(cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3);


//# sourceMappingURL=cljs.core.async.js.map
