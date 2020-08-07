goog.provide('shadow.dom');
shadow.dom.transition_supported_QMARK_ = (((typeof window !== 'undefined'))?goog.style.transition.isSupported():null);

/**
 * @interface
 */
shadow.dom.IElement = function(){};

var shadow$dom$IElement$_to_dom$dyn_35561 = (function (this$){
var x__4428__auto__ = (((this$ == null))?null:this$);
var m__4429__auto__ = (shadow.dom._to_dom[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4429__auto__.call(null,this$));
} else {
var m__4426__auto__ = (shadow.dom._to_dom["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4426__auto__.call(null,this$));
} else {
throw cljs.core.missing_protocol("IElement.-to-dom",this$);
}
}
});
shadow.dom._to_dom = (function shadow$dom$_to_dom(this$){
if((((!((this$ == null)))) && ((!((this$.shadow$dom$IElement$_to_dom$arity$1 == null)))))){
return this$.shadow$dom$IElement$_to_dom$arity$1(this$);
} else {
return shadow$dom$IElement$_to_dom$dyn_35561(this$);
}
});


/**
 * @interface
 */
shadow.dom.SVGElement = function(){};

var shadow$dom$SVGElement$_to_svg$dyn_35562 = (function (this$){
var x__4428__auto__ = (((this$ == null))?null:this$);
var m__4429__auto__ = (shadow.dom._to_svg[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4429__auto__.call(null,this$));
} else {
var m__4426__auto__ = (shadow.dom._to_svg["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4426__auto__.call(null,this$));
} else {
throw cljs.core.missing_protocol("SVGElement.-to-svg",this$);
}
}
});
shadow.dom._to_svg = (function shadow$dom$_to_svg(this$){
if((((!((this$ == null)))) && ((!((this$.shadow$dom$SVGElement$_to_svg$arity$1 == null)))))){
return this$.shadow$dom$SVGElement$_to_svg$arity$1(this$);
} else {
return shadow$dom$SVGElement$_to_svg$dyn_35562(this$);
}
});

shadow.dom.lazy_native_coll_seq = (function shadow$dom$lazy_native_coll_seq(coll,idx){
if((idx < coll.length)){
return (new cljs.core.LazySeq(null,(function (){
return cljs.core.cons((coll[idx]),(function (){var G__34989 = coll;
var G__34990 = (idx + (1));
return (shadow.dom.lazy_native_coll_seq.cljs$core$IFn$_invoke$arity$2 ? shadow.dom.lazy_native_coll_seq.cljs$core$IFn$_invoke$arity$2(G__34989,G__34990) : shadow.dom.lazy_native_coll_seq.call(null,G__34989,G__34990));
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
var or__4126__auto__ = (self__.coll[n]);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
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

(shadow.dom.NativeColl.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"shadow.dom/NativeColl");
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
return el.shadow$dom$IElement$_to_dom$arity$1(null);
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
var G__34999 = arguments.length;
switch (G__34999) {
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
var G__35006 = arguments.length;
switch (G__35006) {
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
var G__35015 = arguments.length;
switch (G__35015) {
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
var G__35022 = arguments.length;
switch (G__35022) {
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
var G__35025 = arguments.length;
switch (G__35025) {
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
var G__35037 = arguments.length;
switch (G__35037) {
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

shadow.dom.dom_listen = (cljs.core.truth_((function (){var or__4126__auto__ = (!((typeof document !== 'undefined')));
if(or__4126__auto__){
return or__4126__auto__;
} else {
return document.addEventListener;
}
})())?(function shadow$dom$dom_listen_good(el,ev,handler){
return el.addEventListener(ev,handler,false);
}):(function shadow$dom$dom_listen_ie(el,ev,handler){
try{return el.attachEvent(["on",cljs.core.str.cljs$core$IFn$_invoke$arity$1(ev)].join(''),(function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
}));
}catch (e35044){if((e35044 instanceof Object)){
var e = e35044;
return console.log("didnt support attachEvent",el,e);
} else {
throw e35044;

}
}}));
shadow.dom.dom_listen_remove = (cljs.core.truth_((function (){var or__4126__auto__ = (!((typeof document !== 'undefined')));
if(or__4126__auto__){
return or__4126__auto__;
} else {
return document.removeEventListener;
}
})())?(function shadow$dom$dom_listen_remove_good(el,ev,handler){
return el.removeEventListener(ev,handler,false);
}):(function shadow$dom$dom_listen_remove_ie(el,ev,handler){
return el.detachEvent(["on",cljs.core.str.cljs$core$IFn$_invoke$arity$1(ev)].join(''),handler);
}));
shadow.dom.on_query = (function shadow$dom$on_query(root_el,ev,selector,handler){
var seq__35052 = cljs.core.seq(shadow.dom.query.cljs$core$IFn$_invoke$arity$2(selector,root_el));
var chunk__35053 = null;
var count__35054 = (0);
var i__35055 = (0);
while(true){
if((i__35055 < count__35054)){
var el = chunk__35053.cljs$core$IIndexed$_nth$arity$2(null,i__35055);
var handler_35624__$1 = ((function (seq__35052,chunk__35053,count__35054,i__35055,el){
return (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});})(seq__35052,chunk__35053,count__35054,i__35055,el))
;
shadow.dom.dom_listen(el,cljs.core.name(ev),handler_35624__$1);


var G__35625 = seq__35052;
var G__35626 = chunk__35053;
var G__35627 = count__35054;
var G__35628 = (i__35055 + (1));
seq__35052 = G__35625;
chunk__35053 = G__35626;
count__35054 = G__35627;
i__35055 = G__35628;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__35052);
if(temp__5735__auto__){
var seq__35052__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__35052__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__35052__$1);
var G__35629 = cljs.core.chunk_rest(seq__35052__$1);
var G__35630 = c__4556__auto__;
var G__35631 = cljs.core.count(c__4556__auto__);
var G__35632 = (0);
seq__35052 = G__35629;
chunk__35053 = G__35630;
count__35054 = G__35631;
i__35055 = G__35632;
continue;
} else {
var el = cljs.core.first(seq__35052__$1);
var handler_35633__$1 = ((function (seq__35052,chunk__35053,count__35054,i__35055,el,seq__35052__$1,temp__5735__auto__){
return (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});})(seq__35052,chunk__35053,count__35054,i__35055,el,seq__35052__$1,temp__5735__auto__))
;
shadow.dom.dom_listen(el,cljs.core.name(ev),handler_35633__$1);


var G__35635 = cljs.core.next(seq__35052__$1);
var G__35636 = null;
var G__35637 = (0);
var G__35638 = (0);
seq__35052 = G__35635;
chunk__35053 = G__35636;
count__35054 = G__35637;
i__35055 = G__35638;
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
var G__35068 = arguments.length;
switch (G__35068) {
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
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});
return shadow.dom.dom_listen(shadow.dom.dom_node(el),cljs.core.name(ev),handler__$1);
}
}));

(shadow.dom.on.cljs$lang$maxFixedArity = 4);

shadow.dom.remove_event_handler = (function shadow$dom$remove_event_handler(el,ev,handler){
return shadow.dom.dom_listen_remove(shadow.dom.dom_node(el),cljs.core.name(ev),handler);
});
shadow.dom.add_event_listeners = (function shadow$dom$add_event_listeners(el,events){
var seq__35074 = cljs.core.seq(events);
var chunk__35075 = null;
var count__35076 = (0);
var i__35077 = (0);
while(true){
if((i__35077 < count__35076)){
var vec__35089 = chunk__35075.cljs$core$IIndexed$_nth$arity$2(null,i__35077);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35089,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35089,(1),null);
shadow.dom.on.cljs$core$IFn$_invoke$arity$3(el,k,v);


var G__35644 = seq__35074;
var G__35645 = chunk__35075;
var G__35646 = count__35076;
var G__35647 = (i__35077 + (1));
seq__35074 = G__35644;
chunk__35075 = G__35645;
count__35076 = G__35646;
i__35077 = G__35647;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__35074);
if(temp__5735__auto__){
var seq__35074__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__35074__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__35074__$1);
var G__35686 = cljs.core.chunk_rest(seq__35074__$1);
var G__35687 = c__4556__auto__;
var G__35688 = cljs.core.count(c__4556__auto__);
var G__35689 = (0);
seq__35074 = G__35686;
chunk__35075 = G__35687;
count__35076 = G__35688;
i__35077 = G__35689;
continue;
} else {
var vec__35094 = cljs.core.first(seq__35074__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35094,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35094,(1),null);
shadow.dom.on.cljs$core$IFn$_invoke$arity$3(el,k,v);


var G__35690 = cljs.core.next(seq__35074__$1);
var G__35691 = null;
var G__35692 = (0);
var G__35693 = (0);
seq__35074 = G__35690;
chunk__35075 = G__35691;
count__35076 = G__35692;
i__35077 = G__35693;
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
var seq__35100 = cljs.core.seq(styles);
var chunk__35101 = null;
var count__35102 = (0);
var i__35103 = (0);
while(true){
if((i__35103 < count__35102)){
var vec__35117 = chunk__35101.cljs$core$IIndexed$_nth$arity$2(null,i__35103);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35117,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35117,(1),null);
goog.style.setStyle(dom,cljs.core.name(k),(((v == null))?"":v));


var G__35694 = seq__35100;
var G__35695 = chunk__35101;
var G__35696 = count__35102;
var G__35697 = (i__35103 + (1));
seq__35100 = G__35694;
chunk__35101 = G__35695;
count__35102 = G__35696;
i__35103 = G__35697;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__35100);
if(temp__5735__auto__){
var seq__35100__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__35100__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__35100__$1);
var G__35698 = cljs.core.chunk_rest(seq__35100__$1);
var G__35699 = c__4556__auto__;
var G__35700 = cljs.core.count(c__4556__auto__);
var G__35701 = (0);
seq__35100 = G__35698;
chunk__35101 = G__35699;
count__35102 = G__35700;
i__35103 = G__35701;
continue;
} else {
var vec__35123 = cljs.core.first(seq__35100__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35123,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35123,(1),null);
goog.style.setStyle(dom,cljs.core.name(k),(((v == null))?"":v));


var G__35702 = cljs.core.next(seq__35100__$1);
var G__35703 = null;
var G__35704 = (0);
var G__35705 = (0);
seq__35100 = G__35702;
chunk__35101 = G__35703;
count__35102 = G__35704;
i__35103 = G__35705;
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
var G__35129_35706 = key;
var G__35129_35707__$1 = (((G__35129_35706 instanceof cljs.core.Keyword))?G__35129_35706.fqn:null);
switch (G__35129_35707__$1) {
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
var ks_35709 = cljs.core.name(key);
if(cljs.core.truth_((function (){var or__4126__auto__ = goog.string.startsWith(ks_35709,"data-");
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return goog.string.startsWith(ks_35709,"aria-");
}
})())){
el.setAttribute(ks_35709,value);
} else {
(el[ks_35709] = value);
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
shadow.dom.create_dom_node = (function shadow$dom$create_dom_node(tag_def,p__35144){
var map__35146 = p__35144;
var map__35146__$1 = (((((!((map__35146 == null))))?(((((map__35146.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35146.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__35146):map__35146);
var props = map__35146__$1;
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35146__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
var tag_props = ({});
var vec__35151 = shadow.dom.parse_tag(tag_def);
var tag_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35151,(0),null);
var tag_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35151,(1),null);
var tag_classes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35151,(2),null);
if(cljs.core.truth_(tag_id)){
(tag_props["id"] = tag_id);
} else {
}

if(cljs.core.truth_(tag_classes)){
(tag_props["class"] = shadow.dom.merge_class_string(class$,tag_classes));
} else {
}

var G__35154 = goog.dom.createDom(tag_name,tag_props);
shadow.dom.set_attrs(G__35154,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(props,new cljs.core.Keyword(null,"class","class",-2030961996)));

return G__35154;
});
shadow.dom.append = (function shadow$dom$append(var_args){
var G__35159 = arguments.length;
switch (G__35159) {
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
var temp__5735__auto__ = shadow.dom.dom_node(node);
if(cljs.core.truth_(temp__5735__auto__)){
var n = temp__5735__auto__;
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
var temp__5735__auto__ = shadow.dom.dom_node(node);
if(cljs.core.truth_(temp__5735__auto__)){
var n = temp__5735__auto__;
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

shadow.dom.destructure_node = (function shadow$dom$destructure_node(create_fn,p__35166){
var vec__35167 = p__35166;
var seq__35168 = cljs.core.seq(vec__35167);
var first__35169 = cljs.core.first(seq__35168);
var seq__35168__$1 = cljs.core.next(seq__35168);
var nn = first__35169;
var first__35169__$1 = cljs.core.first(seq__35168__$1);
var seq__35168__$2 = cljs.core.next(seq__35168__$1);
var np = first__35169__$1;
var nc = seq__35168__$2;
var node = vec__35167;
if((nn instanceof cljs.core.Keyword)){
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("invalid dom node",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"node","node",581201198),node], null));
}

if((((np == null)) && ((nc == null)))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__35172 = nn;
var G__35173 = cljs.core.PersistentArrayMap.EMPTY;
return (create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(G__35172,G__35173) : create_fn.call(null,G__35172,G__35173));
})(),cljs.core.List.EMPTY], null);
} else {
if(cljs.core.map_QMARK_(np)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(nn,np) : create_fn.call(null,nn,np)),nc], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__35175 = nn;
var G__35176 = cljs.core.PersistentArrayMap.EMPTY;
return (create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(G__35175,G__35176) : create_fn.call(null,G__35175,G__35176));
})(),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(nc,np)], null);

}
}
});
shadow.dom.make_dom_node = (function shadow$dom$make_dom_node(structure){
var vec__35178 = shadow.dom.destructure_node(shadow.dom.create_dom_node,structure);
var node = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35178,(0),null);
var node_children = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35178,(1),null);
var seq__35182_35723 = cljs.core.seq(node_children);
var chunk__35183_35724 = null;
var count__35184_35725 = (0);
var i__35185_35726 = (0);
while(true){
if((i__35185_35726 < count__35184_35725)){
var child_struct_35727 = chunk__35183_35724.cljs$core$IIndexed$_nth$arity$2(null,i__35185_35726);
var children_35729 = shadow.dom.dom_node(child_struct_35727);
if(cljs.core.seq_QMARK_(children_35729)){
var seq__35214_35731 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom.dom_node,children_35729));
var chunk__35217_35732 = null;
var count__35218_35733 = (0);
var i__35219_35734 = (0);
while(true){
if((i__35219_35734 < count__35218_35733)){
var child_35736 = chunk__35217_35732.cljs$core$IIndexed$_nth$arity$2(null,i__35219_35734);
if(cljs.core.truth_(child_35736)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_35736);


var G__35737 = seq__35214_35731;
var G__35738 = chunk__35217_35732;
var G__35739 = count__35218_35733;
var G__35740 = (i__35219_35734 + (1));
seq__35214_35731 = G__35737;
chunk__35217_35732 = G__35738;
count__35218_35733 = G__35739;
i__35219_35734 = G__35740;
continue;
} else {
var G__35741 = seq__35214_35731;
var G__35742 = chunk__35217_35732;
var G__35743 = count__35218_35733;
var G__35744 = (i__35219_35734 + (1));
seq__35214_35731 = G__35741;
chunk__35217_35732 = G__35742;
count__35218_35733 = G__35743;
i__35219_35734 = G__35744;
continue;
}
} else {
var temp__5735__auto___35745 = cljs.core.seq(seq__35214_35731);
if(temp__5735__auto___35745){
var seq__35214_35746__$1 = temp__5735__auto___35745;
if(cljs.core.chunked_seq_QMARK_(seq__35214_35746__$1)){
var c__4556__auto___35747 = cljs.core.chunk_first(seq__35214_35746__$1);
var G__35748 = cljs.core.chunk_rest(seq__35214_35746__$1);
var G__35749 = c__4556__auto___35747;
var G__35750 = cljs.core.count(c__4556__auto___35747);
var G__35751 = (0);
seq__35214_35731 = G__35748;
chunk__35217_35732 = G__35749;
count__35218_35733 = G__35750;
i__35219_35734 = G__35751;
continue;
} else {
var child_35754 = cljs.core.first(seq__35214_35746__$1);
if(cljs.core.truth_(child_35754)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_35754);


var G__35755 = cljs.core.next(seq__35214_35746__$1);
var G__35756 = null;
var G__35757 = (0);
var G__35758 = (0);
seq__35214_35731 = G__35755;
chunk__35217_35732 = G__35756;
count__35218_35733 = G__35757;
i__35219_35734 = G__35758;
continue;
} else {
var G__35759 = cljs.core.next(seq__35214_35746__$1);
var G__35760 = null;
var G__35761 = (0);
var G__35762 = (0);
seq__35214_35731 = G__35759;
chunk__35217_35732 = G__35760;
count__35218_35733 = G__35761;
i__35219_35734 = G__35762;
continue;
}
}
} else {
}
}
break;
}
} else {
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,children_35729);
}


var G__35763 = seq__35182_35723;
var G__35764 = chunk__35183_35724;
var G__35765 = count__35184_35725;
var G__35766 = (i__35185_35726 + (1));
seq__35182_35723 = G__35763;
chunk__35183_35724 = G__35764;
count__35184_35725 = G__35765;
i__35185_35726 = G__35766;
continue;
} else {
var temp__5735__auto___35769 = cljs.core.seq(seq__35182_35723);
if(temp__5735__auto___35769){
var seq__35182_35771__$1 = temp__5735__auto___35769;
if(cljs.core.chunked_seq_QMARK_(seq__35182_35771__$1)){
var c__4556__auto___35772 = cljs.core.chunk_first(seq__35182_35771__$1);
var G__35773 = cljs.core.chunk_rest(seq__35182_35771__$1);
var G__35774 = c__4556__auto___35772;
var G__35775 = cljs.core.count(c__4556__auto___35772);
var G__35776 = (0);
seq__35182_35723 = G__35773;
chunk__35183_35724 = G__35774;
count__35184_35725 = G__35775;
i__35185_35726 = G__35776;
continue;
} else {
var child_struct_35777 = cljs.core.first(seq__35182_35771__$1);
var children_35778 = shadow.dom.dom_node(child_struct_35777);
if(cljs.core.seq_QMARK_(children_35778)){
var seq__35228_35779 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom.dom_node,children_35778));
var chunk__35230_35780 = null;
var count__35231_35781 = (0);
var i__35232_35782 = (0);
while(true){
if((i__35232_35782 < count__35231_35781)){
var child_35783 = chunk__35230_35780.cljs$core$IIndexed$_nth$arity$2(null,i__35232_35782);
if(cljs.core.truth_(child_35783)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_35783);


var G__35784 = seq__35228_35779;
var G__35785 = chunk__35230_35780;
var G__35786 = count__35231_35781;
var G__35787 = (i__35232_35782 + (1));
seq__35228_35779 = G__35784;
chunk__35230_35780 = G__35785;
count__35231_35781 = G__35786;
i__35232_35782 = G__35787;
continue;
} else {
var G__35789 = seq__35228_35779;
var G__35790 = chunk__35230_35780;
var G__35791 = count__35231_35781;
var G__35792 = (i__35232_35782 + (1));
seq__35228_35779 = G__35789;
chunk__35230_35780 = G__35790;
count__35231_35781 = G__35791;
i__35232_35782 = G__35792;
continue;
}
} else {
var temp__5735__auto___35794__$1 = cljs.core.seq(seq__35228_35779);
if(temp__5735__auto___35794__$1){
var seq__35228_35799__$1 = temp__5735__auto___35794__$1;
if(cljs.core.chunked_seq_QMARK_(seq__35228_35799__$1)){
var c__4556__auto___35800 = cljs.core.chunk_first(seq__35228_35799__$1);
var G__35801 = cljs.core.chunk_rest(seq__35228_35799__$1);
var G__35802 = c__4556__auto___35800;
var G__35803 = cljs.core.count(c__4556__auto___35800);
var G__35804 = (0);
seq__35228_35779 = G__35801;
chunk__35230_35780 = G__35802;
count__35231_35781 = G__35803;
i__35232_35782 = G__35804;
continue;
} else {
var child_35806 = cljs.core.first(seq__35228_35799__$1);
if(cljs.core.truth_(child_35806)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_35806);


var G__35808 = cljs.core.next(seq__35228_35799__$1);
var G__35809 = null;
var G__35810 = (0);
var G__35811 = (0);
seq__35228_35779 = G__35808;
chunk__35230_35780 = G__35809;
count__35231_35781 = G__35810;
i__35232_35782 = G__35811;
continue;
} else {
var G__35812 = cljs.core.next(seq__35228_35799__$1);
var G__35813 = null;
var G__35814 = (0);
var G__35815 = (0);
seq__35228_35779 = G__35812;
chunk__35230_35780 = G__35813;
count__35231_35781 = G__35814;
i__35232_35782 = G__35815;
continue;
}
}
} else {
}
}
break;
}
} else {
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,children_35778);
}


var G__35816 = cljs.core.next(seq__35182_35771__$1);
var G__35817 = null;
var G__35818 = (0);
var G__35819 = (0);
seq__35182_35723 = G__35816;
chunk__35183_35724 = G__35817;
count__35184_35725 = G__35818;
i__35185_35726 = G__35819;
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
var seq__35240 = cljs.core.seq(node);
var chunk__35241 = null;
var count__35242 = (0);
var i__35243 = (0);
while(true){
if((i__35243 < count__35242)){
var n = chunk__35241.cljs$core$IIndexed$_nth$arity$2(null,i__35243);
(shadow.dom.remove.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.remove.cljs$core$IFn$_invoke$arity$1(n) : shadow.dom.remove.call(null,n));


var G__35823 = seq__35240;
var G__35824 = chunk__35241;
var G__35825 = count__35242;
var G__35826 = (i__35243 + (1));
seq__35240 = G__35823;
chunk__35241 = G__35824;
count__35242 = G__35825;
i__35243 = G__35826;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__35240);
if(temp__5735__auto__){
var seq__35240__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__35240__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__35240__$1);
var G__35827 = cljs.core.chunk_rest(seq__35240__$1);
var G__35828 = c__4556__auto__;
var G__35829 = cljs.core.count(c__4556__auto__);
var G__35830 = (0);
seq__35240 = G__35827;
chunk__35241 = G__35828;
count__35242 = G__35829;
i__35243 = G__35830;
continue;
} else {
var n = cljs.core.first(seq__35240__$1);
(shadow.dom.remove.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.remove.cljs$core$IFn$_invoke$arity$1(n) : shadow.dom.remove.call(null,n));


var G__35831 = cljs.core.next(seq__35240__$1);
var G__35832 = null;
var G__35833 = (0);
var G__35834 = (0);
seq__35240 = G__35831;
chunk__35241 = G__35832;
count__35242 = G__35833;
i__35243 = G__35834;
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
var G__35255 = arguments.length;
switch (G__35255) {
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
var G__35260 = arguments.length;
switch (G__35260) {
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
var G__35269 = arguments.length;
switch (G__35269) {
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
var or__4126__auto__ = shadow.dom.dom_node(el).getAttribute(cljs.core.name(key));
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
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
var args__4742__auto__ = [];
var len__4736__auto___35851 = arguments.length;
var i__4737__auto___35852 = (0);
while(true){
if((i__4737__auto___35852 < len__4736__auto___35851)){
args__4742__auto__.push((arguments[i__4737__auto___35852]));

var G__35853 = (i__4737__auto___35852 + (1));
i__4737__auto___35852 = G__35853;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((0) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((0)),(0),null)):null);
return shadow.dom.fragment.cljs$core$IFn$_invoke$arity$variadic(argseq__4743__auto__);
});

(shadow.dom.fragment.cljs$core$IFn$_invoke$arity$variadic = (function (nodes){
var fragment = document.createDocumentFragment();
var seq__35285_35854 = cljs.core.seq(nodes);
var chunk__35286_35855 = null;
var count__35287_35856 = (0);
var i__35288_35857 = (0);
while(true){
if((i__35288_35857 < count__35287_35856)){
var node_35858 = chunk__35286_35855.cljs$core$IIndexed$_nth$arity$2(null,i__35288_35857);
fragment.appendChild(shadow.dom._to_dom(node_35858));


var G__35859 = seq__35285_35854;
var G__35860 = chunk__35286_35855;
var G__35861 = count__35287_35856;
var G__35862 = (i__35288_35857 + (1));
seq__35285_35854 = G__35859;
chunk__35286_35855 = G__35860;
count__35287_35856 = G__35861;
i__35288_35857 = G__35862;
continue;
} else {
var temp__5735__auto___35863 = cljs.core.seq(seq__35285_35854);
if(temp__5735__auto___35863){
var seq__35285_35864__$1 = temp__5735__auto___35863;
if(cljs.core.chunked_seq_QMARK_(seq__35285_35864__$1)){
var c__4556__auto___35865 = cljs.core.chunk_first(seq__35285_35864__$1);
var G__35866 = cljs.core.chunk_rest(seq__35285_35864__$1);
var G__35867 = c__4556__auto___35865;
var G__35868 = cljs.core.count(c__4556__auto___35865);
var G__35869 = (0);
seq__35285_35854 = G__35866;
chunk__35286_35855 = G__35867;
count__35287_35856 = G__35868;
i__35288_35857 = G__35869;
continue;
} else {
var node_35870 = cljs.core.first(seq__35285_35864__$1);
fragment.appendChild(shadow.dom._to_dom(node_35870));


var G__35871 = cljs.core.next(seq__35285_35864__$1);
var G__35872 = null;
var G__35873 = (0);
var G__35874 = (0);
seq__35285_35854 = G__35871;
chunk__35286_35855 = G__35872;
count__35287_35856 = G__35873;
i__35288_35857 = G__35874;
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
(shadow.dom.fragment.cljs$lang$applyTo = (function (seq35281){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq35281));
}));

/**
 * given a html string, eval all <script> tags and return the html without the scripts
 * don't do this for everything, only content you trust.
 */
shadow.dom.eval_scripts = (function shadow$dom$eval_scripts(s){
var scripts = cljs.core.re_seq(/<script[^>]*?>(.+?)<\/script>/,s);
var seq__35300_35876 = cljs.core.seq(scripts);
var chunk__35301_35877 = null;
var count__35302_35878 = (0);
var i__35303_35879 = (0);
while(true){
if((i__35303_35879 < count__35302_35878)){
var vec__35315_35880 = chunk__35301_35877.cljs$core$IIndexed$_nth$arity$2(null,i__35303_35879);
var script_tag_35881 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35315_35880,(0),null);
var script_body_35882 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35315_35880,(1),null);
eval(script_body_35882);


var G__35884 = seq__35300_35876;
var G__35885 = chunk__35301_35877;
var G__35886 = count__35302_35878;
var G__35887 = (i__35303_35879 + (1));
seq__35300_35876 = G__35884;
chunk__35301_35877 = G__35885;
count__35302_35878 = G__35886;
i__35303_35879 = G__35887;
continue;
} else {
var temp__5735__auto___35888 = cljs.core.seq(seq__35300_35876);
if(temp__5735__auto___35888){
var seq__35300_35889__$1 = temp__5735__auto___35888;
if(cljs.core.chunked_seq_QMARK_(seq__35300_35889__$1)){
var c__4556__auto___35890 = cljs.core.chunk_first(seq__35300_35889__$1);
var G__35892 = cljs.core.chunk_rest(seq__35300_35889__$1);
var G__35893 = c__4556__auto___35890;
var G__35894 = cljs.core.count(c__4556__auto___35890);
var G__35895 = (0);
seq__35300_35876 = G__35892;
chunk__35301_35877 = G__35893;
count__35302_35878 = G__35894;
i__35303_35879 = G__35895;
continue;
} else {
var vec__35322_35896 = cljs.core.first(seq__35300_35889__$1);
var script_tag_35897 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35322_35896,(0),null);
var script_body_35898 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35322_35896,(1),null);
eval(script_body_35898);


var G__35900 = cljs.core.next(seq__35300_35889__$1);
var G__35901 = null;
var G__35902 = (0);
var G__35903 = (0);
seq__35300_35876 = G__35900;
chunk__35301_35877 = G__35901;
count__35302_35878 = G__35902;
i__35303_35879 = G__35903;
continue;
}
} else {
}
}
break;
}

return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (s__$1,p__35325){
var vec__35326 = p__35325;
var script_tag = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35326,(0),null);
var script_body = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35326,(1),null);
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
var G__35335 = arguments.length;
switch (G__35335) {
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
var seq__35340 = cljs.core.seq(style_keys);
var chunk__35341 = null;
var count__35342 = (0);
var i__35343 = (0);
while(true){
if((i__35343 < count__35342)){
var it = chunk__35341.cljs$core$IIndexed$_nth$arity$2(null,i__35343);
shadow.dom.remove_style_STAR_(el__$1,it);


var G__35923 = seq__35340;
var G__35924 = chunk__35341;
var G__35925 = count__35342;
var G__35926 = (i__35343 + (1));
seq__35340 = G__35923;
chunk__35341 = G__35924;
count__35342 = G__35925;
i__35343 = G__35926;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__35340);
if(temp__5735__auto__){
var seq__35340__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__35340__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__35340__$1);
var G__35927 = cljs.core.chunk_rest(seq__35340__$1);
var G__35928 = c__4556__auto__;
var G__35929 = cljs.core.count(c__4556__auto__);
var G__35930 = (0);
seq__35340 = G__35927;
chunk__35341 = G__35928;
count__35342 = G__35929;
i__35343 = G__35930;
continue;
} else {
var it = cljs.core.first(seq__35340__$1);
shadow.dom.remove_style_STAR_(el__$1,it);


var G__35931 = cljs.core.next(seq__35340__$1);
var G__35932 = null;
var G__35933 = (0);
var G__35934 = (0);
seq__35340 = G__35931;
chunk__35341 = G__35932;
count__35342 = G__35933;
i__35343 = G__35934;
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
(shadow.dom.Coordinate.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4380__auto__,k__4381__auto__){
var self__ = this;
var this__4380__auto____$1 = this;
return this__4380__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4381__auto__,null);
}));

(shadow.dom.Coordinate.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4382__auto__,k35351,else__4383__auto__){
var self__ = this;
var this__4382__auto____$1 = this;
var G__35355 = k35351;
var G__35355__$1 = (((G__35355 instanceof cljs.core.Keyword))?G__35355.fqn:null);
switch (G__35355__$1) {
case "x":
return self__.x;

break;
case "y":
return self__.y;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k35351,else__4383__auto__);

}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4399__auto__,f__4400__auto__,init__4401__auto__){
var self__ = this;
var this__4399__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__4402__auto__,p__35356){
var vec__35357 = p__35356;
var k__4403__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35357,(0),null);
var v__4404__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35357,(1),null);
return (f__4400__auto__.cljs$core$IFn$_invoke$arity$3 ? f__4400__auto__.cljs$core$IFn$_invoke$arity$3(ret__4402__auto__,k__4403__auto__,v__4404__auto__) : f__4400__auto__.call(null,ret__4402__auto__,k__4403__auto__,v__4404__auto__));
}),init__4401__auto__,this__4399__auto____$1);
}));

(shadow.dom.Coordinate.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4394__auto__,writer__4395__auto__,opts__4396__auto__){
var self__ = this;
var this__4394__auto____$1 = this;
var pr_pair__4397__auto__ = (function (keyval__4398__auto__){
return cljs.core.pr_sequential_writer(writer__4395__auto__,cljs.core.pr_writer,""," ","",opts__4396__auto__,keyval__4398__auto__);
});
return cljs.core.pr_sequential_writer(writer__4395__auto__,pr_pair__4397__auto__,"#shadow.dom.Coordinate{",", ","}",opts__4396__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"x","x",2099068185),self__.x],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"y","y",-1757859776),self__.y],null))], null),self__.__extmap));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__35350){
var self__ = this;
var G__35350__$1 = this;
return (new cljs.core.RecordIter((0),G__35350__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"y","y",-1757859776)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4378__auto__){
var self__ = this;
var this__4378__auto____$1 = this;
return self__.__meta;
}));

(shadow.dom.Coordinate.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4375__auto__){
var self__ = this;
var this__4375__auto____$1 = this;
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,self__.__extmap,self__.__hash));
}));

(shadow.dom.Coordinate.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4384__auto__){
var self__ = this;
var this__4384__auto____$1 = this;
return (2 + cljs.core.count(self__.__extmap));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4376__auto__){
var self__ = this;
var this__4376__auto____$1 = this;
var h__4238__auto__ = self__.__hash;
if((!((h__4238__auto__ == null)))){
return h__4238__auto__;
} else {
var h__4238__auto____$1 = (function (coll__4377__auto__){
return (145542109 ^ cljs.core.hash_unordered_coll(coll__4377__auto__));
})(this__4376__auto____$1);
(self__.__hash = h__4238__auto____$1);

return h__4238__auto____$1;
}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this35352,other35353){
var self__ = this;
var this35352__$1 = this;
return (((!((other35353 == null)))) && ((this35352__$1.constructor === other35353.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this35352__$1.x,other35353.x)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this35352__$1.y,other35353.y)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this35352__$1.__extmap,other35353.__extmap)));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4389__auto__,k__4390__auto__){
var self__ = this;
var this__4389__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"y","y",-1757859776),null,new cljs.core.Keyword(null,"x","x",2099068185),null], null), null),k__4390__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__4389__auto____$1),self__.__meta),k__4390__auto__);
} else {
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__4390__auto__)),null));
}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4387__auto__,k__4388__auto__,G__35350){
var self__ = this;
var this__4387__auto____$1 = this;
var pred__35363 = cljs.core.keyword_identical_QMARK_;
var expr__35364 = k__4388__auto__;
if(cljs.core.truth_((pred__35363.cljs$core$IFn$_invoke$arity$2 ? pred__35363.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"x","x",2099068185),expr__35364) : pred__35363.call(null,new cljs.core.Keyword(null,"x","x",2099068185),expr__35364)))){
return (new shadow.dom.Coordinate(G__35350,self__.y,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__35363.cljs$core$IFn$_invoke$arity$2 ? pred__35363.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"y","y",-1757859776),expr__35364) : pred__35363.call(null,new cljs.core.Keyword(null,"y","y",-1757859776),expr__35364)))){
return (new shadow.dom.Coordinate(self__.x,G__35350,self__.__meta,self__.__extmap,null));
} else {
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4388__auto__,G__35350),null));
}
}
}));

(shadow.dom.Coordinate.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4392__auto__){
var self__ = this;
var this__4392__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"x","x",2099068185),self__.x,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"y","y",-1757859776),self__.y,null))], null),self__.__extmap));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4379__auto__,G__35350){
var self__ = this;
var this__4379__auto____$1 = this;
return (new shadow.dom.Coordinate(self__.x,self__.y,G__35350,self__.__extmap,self__.__hash));
}));

(shadow.dom.Coordinate.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4385__auto__,entry__4386__auto__){
var self__ = this;
var this__4385__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__4386__auto__)){
return this__4385__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth(entry__4386__auto__,(0)),cljs.core._nth(entry__4386__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__4385__auto____$1,entry__4386__auto__);
}
}));

(shadow.dom.Coordinate.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"x","x",-555367584,null),new cljs.core.Symbol(null,"y","y",-117328249,null)], null);
}));

(shadow.dom.Coordinate.cljs$lang$type = true);

(shadow.dom.Coordinate.cljs$lang$ctorPrSeq = (function (this__4423__auto__){
return (new cljs.core.List(null,"shadow.dom/Coordinate",null,(1),null));
}));

(shadow.dom.Coordinate.cljs$lang$ctorPrWriter = (function (this__4423__auto__,writer__4424__auto__){
return cljs.core._write(writer__4424__auto__,"shadow.dom/Coordinate");
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
shadow.dom.map__GT_Coordinate = (function shadow$dom$map__GT_Coordinate(G__35354){
var extmap__4419__auto__ = (function (){var G__35369 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__35354,new cljs.core.Keyword(null,"x","x",2099068185),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"y","y",-1757859776)], 0));
if(cljs.core.record_QMARK_(G__35354)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__35369);
} else {
return G__35369;
}
})();
return (new shadow.dom.Coordinate(new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(G__35354),new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(G__35354),null,cljs.core.not_empty(extmap__4419__auto__),null));
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
(shadow.dom.Size.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4380__auto__,k__4381__auto__){
var self__ = this;
var this__4380__auto____$1 = this;
return this__4380__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4381__auto__,null);
}));

(shadow.dom.Size.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4382__auto__,k35371,else__4383__auto__){
var self__ = this;
var this__4382__auto____$1 = this;
var G__35376 = k35371;
var G__35376__$1 = (((G__35376 instanceof cljs.core.Keyword))?G__35376.fqn:null);
switch (G__35376__$1) {
case "w":
return self__.w;

break;
case "h":
return self__.h;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k35371,else__4383__auto__);

}
}));

(shadow.dom.Size.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4399__auto__,f__4400__auto__,init__4401__auto__){
var self__ = this;
var this__4399__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__4402__auto__,p__35382){
var vec__35383 = p__35382;
var k__4403__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35383,(0),null);
var v__4404__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35383,(1),null);
return (f__4400__auto__.cljs$core$IFn$_invoke$arity$3 ? f__4400__auto__.cljs$core$IFn$_invoke$arity$3(ret__4402__auto__,k__4403__auto__,v__4404__auto__) : f__4400__auto__.call(null,ret__4402__auto__,k__4403__auto__,v__4404__auto__));
}),init__4401__auto__,this__4399__auto____$1);
}));

(shadow.dom.Size.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4394__auto__,writer__4395__auto__,opts__4396__auto__){
var self__ = this;
var this__4394__auto____$1 = this;
var pr_pair__4397__auto__ = (function (keyval__4398__auto__){
return cljs.core.pr_sequential_writer(writer__4395__auto__,cljs.core.pr_writer,""," ","",opts__4396__auto__,keyval__4398__auto__);
});
return cljs.core.pr_sequential_writer(writer__4395__auto__,pr_pair__4397__auto__,"#shadow.dom.Size{",", ","}",opts__4396__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"w","w",354169001),self__.w],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"h","h",1109658740),self__.h],null))], null),self__.__extmap));
}));

(shadow.dom.Size.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__35370){
var self__ = this;
var G__35370__$1 = this;
return (new cljs.core.RecordIter((0),G__35370__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"w","w",354169001),new cljs.core.Keyword(null,"h","h",1109658740)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(shadow.dom.Size.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4378__auto__){
var self__ = this;
var this__4378__auto____$1 = this;
return self__.__meta;
}));

(shadow.dom.Size.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4375__auto__){
var self__ = this;
var this__4375__auto____$1 = this;
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,self__.__extmap,self__.__hash));
}));

(shadow.dom.Size.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4384__auto__){
var self__ = this;
var this__4384__auto____$1 = this;
return (2 + cljs.core.count(self__.__extmap));
}));

(shadow.dom.Size.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4376__auto__){
var self__ = this;
var this__4376__auto____$1 = this;
var h__4238__auto__ = self__.__hash;
if((!((h__4238__auto__ == null)))){
return h__4238__auto__;
} else {
var h__4238__auto____$1 = (function (coll__4377__auto__){
return (-1228019642 ^ cljs.core.hash_unordered_coll(coll__4377__auto__));
})(this__4376__auto____$1);
(self__.__hash = h__4238__auto____$1);

return h__4238__auto____$1;
}
}));

(shadow.dom.Size.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this35372,other35373){
var self__ = this;
var this35372__$1 = this;
return (((!((other35373 == null)))) && ((this35372__$1.constructor === other35373.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this35372__$1.w,other35373.w)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this35372__$1.h,other35373.h)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this35372__$1.__extmap,other35373.__extmap)));
}));

(shadow.dom.Size.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4389__auto__,k__4390__auto__){
var self__ = this;
var this__4389__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"w","w",354169001),null,new cljs.core.Keyword(null,"h","h",1109658740),null], null), null),k__4390__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__4389__auto____$1),self__.__meta),k__4390__auto__);
} else {
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__4390__auto__)),null));
}
}));

(shadow.dom.Size.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4387__auto__,k__4388__auto__,G__35370){
var self__ = this;
var this__4387__auto____$1 = this;
var pred__35396 = cljs.core.keyword_identical_QMARK_;
var expr__35397 = k__4388__auto__;
if(cljs.core.truth_((pred__35396.cljs$core$IFn$_invoke$arity$2 ? pred__35396.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"w","w",354169001),expr__35397) : pred__35396.call(null,new cljs.core.Keyword(null,"w","w",354169001),expr__35397)))){
return (new shadow.dom.Size(G__35370,self__.h,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__35396.cljs$core$IFn$_invoke$arity$2 ? pred__35396.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"h","h",1109658740),expr__35397) : pred__35396.call(null,new cljs.core.Keyword(null,"h","h",1109658740),expr__35397)))){
return (new shadow.dom.Size(self__.w,G__35370,self__.__meta,self__.__extmap,null));
} else {
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4388__auto__,G__35370),null));
}
}
}));

(shadow.dom.Size.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4392__auto__){
var self__ = this;
var this__4392__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"w","w",354169001),self__.w,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"h","h",1109658740),self__.h,null))], null),self__.__extmap));
}));

(shadow.dom.Size.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4379__auto__,G__35370){
var self__ = this;
var this__4379__auto____$1 = this;
return (new shadow.dom.Size(self__.w,self__.h,G__35370,self__.__extmap,self__.__hash));
}));

(shadow.dom.Size.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4385__auto__,entry__4386__auto__){
var self__ = this;
var this__4385__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__4386__auto__)){
return this__4385__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth(entry__4386__auto__,(0)),cljs.core._nth(entry__4386__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__4385__auto____$1,entry__4386__auto__);
}
}));

(shadow.dom.Size.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"w","w",1994700528,null),new cljs.core.Symbol(null,"h","h",-1544777029,null)], null);
}));

(shadow.dom.Size.cljs$lang$type = true);

(shadow.dom.Size.cljs$lang$ctorPrSeq = (function (this__4423__auto__){
return (new cljs.core.List(null,"shadow.dom/Size",null,(1),null));
}));

(shadow.dom.Size.cljs$lang$ctorPrWriter = (function (this__4423__auto__,writer__4424__auto__){
return cljs.core._write(writer__4424__auto__,"shadow.dom/Size");
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
shadow.dom.map__GT_Size = (function shadow$dom$map__GT_Size(G__35374){
var extmap__4419__auto__ = (function (){var G__35410 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__35374,new cljs.core.Keyword(null,"w","w",354169001),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"h","h",1109658740)], 0));
if(cljs.core.record_QMARK_(G__35374)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__35410);
} else {
return G__35410;
}
})();
return (new shadow.dom.Size(new cljs.core.Keyword(null,"w","w",354169001).cljs$core$IFn$_invoke$arity$1(G__35374),new cljs.core.Keyword(null,"h","h",1109658740).cljs$core$IFn$_invoke$arity$1(G__35374),null,cljs.core.not_empty(extmap__4419__auto__),null));
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
var a__4610__auto__ = opts;
var l__4611__auto__ = a__4610__auto__.length;
var i = (0);
var ret = cljs.core.PersistentVector.EMPTY;
while(true){
if((i < l__4611__auto__)){
var G__35992 = (i + (1));
var G__35993 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ret,(opts[i]["value"]));
i = G__35992;
ret = G__35993;
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
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(path),"?",clojure.string.join.cljs$core$IFn$_invoke$arity$2("&",cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__35428){
var vec__35429 = p__35428;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35429,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35429,(1),null);
return [cljs.core.name(k),"=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(encodeURIComponent(cljs.core.str.cljs$core$IFn$_invoke$arity$1(v)))].join('');
}),query_params))].join('');
}
});
shadow.dom.redirect = (function shadow$dom$redirect(var_args){
var G__35436 = arguments.length;
switch (G__35436) {
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
var temp__5733__auto__ = shadow.dom.dom_node(ref).firstChild;
if(cljs.core.truth_(temp__5733__auto__)){
var child = temp__5733__auto__;
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
var G__36005 = ps;
var G__36006 = (i + (1));
el__$1 = G__36005;
i = G__36006;
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
return (shadow.dom.parents.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.parents.cljs$core$IFn$_invoke$arity$1(parent) : shadow.dom.parents.call(null,parent));
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
var vec__35443 = shadow.dom.parse_tag(tag_def);
var tag_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35443,(0),null);
var tag_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35443,(1),null);
var tag_classes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35443,(2),null);
var el = document.createElementNS("http://www.w3.org/2000/svg",tag_name);
if(cljs.core.truth_(tag_id)){
el.setAttribute("id",tag_id);
} else {
}

if(cljs.core.truth_(tag_classes)){
el.setAttribute("class",shadow.dom.merge_class_string(new cljs.core.Keyword(null,"class","class",-2030961996).cljs$core$IFn$_invoke$arity$1(props),tag_classes));
} else {
}

var seq__35447_36011 = cljs.core.seq(props);
var chunk__35448_36012 = null;
var count__35449_36013 = (0);
var i__35450_36014 = (0);
while(true){
if((i__35450_36014 < count__35449_36013)){
var vec__35457_36016 = chunk__35448_36012.cljs$core$IIndexed$_nth$arity$2(null,i__35450_36014);
var k_36017 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35457_36016,(0),null);
var v_36018 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35457_36016,(1),null);
el.setAttributeNS((function (){var temp__5735__auto__ = cljs.core.namespace(k_36017);
if(cljs.core.truth_(temp__5735__auto__)){
var ns = temp__5735__auto__;
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(shadow.dom.xmlns),ns);
} else {
return null;
}
})(),cljs.core.name(k_36017),v_36018);


var G__36025 = seq__35447_36011;
var G__36026 = chunk__35448_36012;
var G__36027 = count__35449_36013;
var G__36028 = (i__35450_36014 + (1));
seq__35447_36011 = G__36025;
chunk__35448_36012 = G__36026;
count__35449_36013 = G__36027;
i__35450_36014 = G__36028;
continue;
} else {
var temp__5735__auto___36029 = cljs.core.seq(seq__35447_36011);
if(temp__5735__auto___36029){
var seq__35447_36030__$1 = temp__5735__auto___36029;
if(cljs.core.chunked_seq_QMARK_(seq__35447_36030__$1)){
var c__4556__auto___36031 = cljs.core.chunk_first(seq__35447_36030__$1);
var G__36032 = cljs.core.chunk_rest(seq__35447_36030__$1);
var G__36033 = c__4556__auto___36031;
var G__36034 = cljs.core.count(c__4556__auto___36031);
var G__36035 = (0);
seq__35447_36011 = G__36032;
chunk__35448_36012 = G__36033;
count__35449_36013 = G__36034;
i__35450_36014 = G__36035;
continue;
} else {
var vec__35461_36039 = cljs.core.first(seq__35447_36030__$1);
var k_36040 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35461_36039,(0),null);
var v_36041 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35461_36039,(1),null);
el.setAttributeNS((function (){var temp__5735__auto____$1 = cljs.core.namespace(k_36040);
if(cljs.core.truth_(temp__5735__auto____$1)){
var ns = temp__5735__auto____$1;
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(shadow.dom.xmlns),ns);
} else {
return null;
}
})(),cljs.core.name(k_36040),v_36041);


var G__36042 = cljs.core.next(seq__35447_36030__$1);
var G__36043 = null;
var G__36044 = (0);
var G__36045 = (0);
seq__35447_36011 = G__36042;
chunk__35448_36012 = G__36043;
count__35449_36013 = G__36044;
i__35450_36014 = G__36045;
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
return el.shadow$dom$SVGElement$_to_svg$arity$1(null);
} else {
return el;

}
}
});
shadow.dom.make_svg_node = (function shadow$dom$make_svg_node(structure){
var vec__35472 = shadow.dom.destructure_node(shadow.dom.create_svg_node,structure);
var node = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35472,(0),null);
var node_children = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35472,(1),null);
var seq__35476_36058 = cljs.core.seq(node_children);
var chunk__35478_36059 = null;
var count__35479_36060 = (0);
var i__35480_36061 = (0);
while(true){
if((i__35480_36061 < count__35479_36060)){
var child_struct_36063 = chunk__35478_36059.cljs$core$IIndexed$_nth$arity$2(null,i__35480_36061);
if((!((child_struct_36063 == null)))){
if(typeof child_struct_36063 === 'string'){
var text_36066 = (node["textContent"]);
(node["textContent"] = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(text_36066),child_struct_36063].join(''));
} else {
var children_36067 = shadow.dom.svg_node(child_struct_36063);
if(cljs.core.seq_QMARK_(children_36067)){
var seq__35508_36068 = cljs.core.seq(children_36067);
var chunk__35510_36069 = null;
var count__35511_36070 = (0);
var i__35512_36071 = (0);
while(true){
if((i__35512_36071 < count__35511_36070)){
var child_36073 = chunk__35510_36069.cljs$core$IIndexed$_nth$arity$2(null,i__35512_36071);
if(cljs.core.truth_(child_36073)){
node.appendChild(child_36073);


var G__36074 = seq__35508_36068;
var G__36075 = chunk__35510_36069;
var G__36076 = count__35511_36070;
var G__36077 = (i__35512_36071 + (1));
seq__35508_36068 = G__36074;
chunk__35510_36069 = G__36075;
count__35511_36070 = G__36076;
i__35512_36071 = G__36077;
continue;
} else {
var G__36078 = seq__35508_36068;
var G__36079 = chunk__35510_36069;
var G__36080 = count__35511_36070;
var G__36081 = (i__35512_36071 + (1));
seq__35508_36068 = G__36078;
chunk__35510_36069 = G__36079;
count__35511_36070 = G__36080;
i__35512_36071 = G__36081;
continue;
}
} else {
var temp__5735__auto___36082 = cljs.core.seq(seq__35508_36068);
if(temp__5735__auto___36082){
var seq__35508_36083__$1 = temp__5735__auto___36082;
if(cljs.core.chunked_seq_QMARK_(seq__35508_36083__$1)){
var c__4556__auto___36084 = cljs.core.chunk_first(seq__35508_36083__$1);
var G__36085 = cljs.core.chunk_rest(seq__35508_36083__$1);
var G__36086 = c__4556__auto___36084;
var G__36087 = cljs.core.count(c__4556__auto___36084);
var G__36088 = (0);
seq__35508_36068 = G__36085;
chunk__35510_36069 = G__36086;
count__35511_36070 = G__36087;
i__35512_36071 = G__36088;
continue;
} else {
var child_36090 = cljs.core.first(seq__35508_36083__$1);
if(cljs.core.truth_(child_36090)){
node.appendChild(child_36090);


var G__36091 = cljs.core.next(seq__35508_36083__$1);
var G__36092 = null;
var G__36093 = (0);
var G__36094 = (0);
seq__35508_36068 = G__36091;
chunk__35510_36069 = G__36092;
count__35511_36070 = G__36093;
i__35512_36071 = G__36094;
continue;
} else {
var G__36096 = cljs.core.next(seq__35508_36083__$1);
var G__36097 = null;
var G__36098 = (0);
var G__36099 = (0);
seq__35508_36068 = G__36096;
chunk__35510_36069 = G__36097;
count__35511_36070 = G__36098;
i__35512_36071 = G__36099;
continue;
}
}
} else {
}
}
break;
}
} else {
node.appendChild(children_36067);
}
}


var G__36100 = seq__35476_36058;
var G__36101 = chunk__35478_36059;
var G__36102 = count__35479_36060;
var G__36103 = (i__35480_36061 + (1));
seq__35476_36058 = G__36100;
chunk__35478_36059 = G__36101;
count__35479_36060 = G__36102;
i__35480_36061 = G__36103;
continue;
} else {
var G__36104 = seq__35476_36058;
var G__36105 = chunk__35478_36059;
var G__36106 = count__35479_36060;
var G__36107 = (i__35480_36061 + (1));
seq__35476_36058 = G__36104;
chunk__35478_36059 = G__36105;
count__35479_36060 = G__36106;
i__35480_36061 = G__36107;
continue;
}
} else {
var temp__5735__auto___36108 = cljs.core.seq(seq__35476_36058);
if(temp__5735__auto___36108){
var seq__35476_36109__$1 = temp__5735__auto___36108;
if(cljs.core.chunked_seq_QMARK_(seq__35476_36109__$1)){
var c__4556__auto___36110 = cljs.core.chunk_first(seq__35476_36109__$1);
var G__36111 = cljs.core.chunk_rest(seq__35476_36109__$1);
var G__36112 = c__4556__auto___36110;
var G__36113 = cljs.core.count(c__4556__auto___36110);
var G__36114 = (0);
seq__35476_36058 = G__36111;
chunk__35478_36059 = G__36112;
count__35479_36060 = G__36113;
i__35480_36061 = G__36114;
continue;
} else {
var child_struct_36115 = cljs.core.first(seq__35476_36109__$1);
if((!((child_struct_36115 == null)))){
if(typeof child_struct_36115 === 'string'){
var text_36116 = (node["textContent"]);
(node["textContent"] = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(text_36116),child_struct_36115].join(''));
} else {
var children_36117 = shadow.dom.svg_node(child_struct_36115);
if(cljs.core.seq_QMARK_(children_36117)){
var seq__35517_36118 = cljs.core.seq(children_36117);
var chunk__35519_36119 = null;
var count__35520_36120 = (0);
var i__35521_36121 = (0);
while(true){
if((i__35521_36121 < count__35520_36120)){
var child_36122 = chunk__35519_36119.cljs$core$IIndexed$_nth$arity$2(null,i__35521_36121);
if(cljs.core.truth_(child_36122)){
node.appendChild(child_36122);


var G__36123 = seq__35517_36118;
var G__36124 = chunk__35519_36119;
var G__36125 = count__35520_36120;
var G__36126 = (i__35521_36121 + (1));
seq__35517_36118 = G__36123;
chunk__35519_36119 = G__36124;
count__35520_36120 = G__36125;
i__35521_36121 = G__36126;
continue;
} else {
var G__36128 = seq__35517_36118;
var G__36129 = chunk__35519_36119;
var G__36130 = count__35520_36120;
var G__36131 = (i__35521_36121 + (1));
seq__35517_36118 = G__36128;
chunk__35519_36119 = G__36129;
count__35520_36120 = G__36130;
i__35521_36121 = G__36131;
continue;
}
} else {
var temp__5735__auto___36132__$1 = cljs.core.seq(seq__35517_36118);
if(temp__5735__auto___36132__$1){
var seq__35517_36133__$1 = temp__5735__auto___36132__$1;
if(cljs.core.chunked_seq_QMARK_(seq__35517_36133__$1)){
var c__4556__auto___36134 = cljs.core.chunk_first(seq__35517_36133__$1);
var G__36135 = cljs.core.chunk_rest(seq__35517_36133__$1);
var G__36136 = c__4556__auto___36134;
var G__36137 = cljs.core.count(c__4556__auto___36134);
var G__36138 = (0);
seq__35517_36118 = G__36135;
chunk__35519_36119 = G__36136;
count__35520_36120 = G__36137;
i__35521_36121 = G__36138;
continue;
} else {
var child_36139 = cljs.core.first(seq__35517_36133__$1);
if(cljs.core.truth_(child_36139)){
node.appendChild(child_36139);


var G__36140 = cljs.core.next(seq__35517_36133__$1);
var G__36141 = null;
var G__36142 = (0);
var G__36143 = (0);
seq__35517_36118 = G__36140;
chunk__35519_36119 = G__36141;
count__35520_36120 = G__36142;
i__35521_36121 = G__36143;
continue;
} else {
var G__36144 = cljs.core.next(seq__35517_36133__$1);
var G__36145 = null;
var G__36146 = (0);
var G__36147 = (0);
seq__35517_36118 = G__36144;
chunk__35519_36119 = G__36145;
count__35520_36120 = G__36146;
i__35521_36121 = G__36147;
continue;
}
}
} else {
}
}
break;
}
} else {
node.appendChild(children_36117);
}
}


var G__36148 = cljs.core.next(seq__35476_36109__$1);
var G__36149 = null;
var G__36150 = (0);
var G__36151 = (0);
seq__35476_36058 = G__36148;
chunk__35478_36059 = G__36149;
count__35479_36060 = G__36150;
i__35480_36061 = G__36151;
continue;
} else {
var G__36152 = cljs.core.next(seq__35476_36109__$1);
var G__36153 = null;
var G__36154 = (0);
var G__36155 = (0);
seq__35476_36058 = G__36152;
chunk__35478_36059 = G__36153;
count__35479_36060 = G__36154;
i__35480_36061 = G__36155;
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
goog.object.set(shadow.dom.SVGElement,"string",true);

goog.object.set(shadow.dom._to_svg,"string",(function (this$){
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

goog.object.set(shadow.dom.SVGElement,"null",true);

goog.object.set(shadow.dom._to_svg,"null",(function (_){
return null;
}));
shadow.dom.svg = (function shadow$dom$svg(var_args){
var args__4742__auto__ = [];
var len__4736__auto___36156 = arguments.length;
var i__4737__auto___36157 = (0);
while(true){
if((i__4737__auto___36157 < len__4736__auto___36156)){
args__4742__auto__.push((arguments[i__4737__auto___36157]));

var G__36158 = (i__4737__auto___36157 + (1));
i__4737__auto___36157 = G__36158;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((1) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((1)),(0),null)):null);
return shadow.dom.svg.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4743__auto__);
});

(shadow.dom.svg.cljs$core$IFn$_invoke$arity$variadic = (function (attrs,children){
return shadow.dom._to_svg(cljs.core.vec(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"svg","svg",856789142),attrs], null),children)));
}));

(shadow.dom.svg.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(shadow.dom.svg.cljs$lang$applyTo = (function (seq35526){
var G__35527 = cljs.core.first(seq35526);
var seq35526__$1 = cljs.core.next(seq35526);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__35527,seq35526__$1);
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
var G__35533 = arguments.length;
switch (G__35533) {
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

if(cljs.core.truth_((function (){var and__4115__auto__ = once_or_cleanup;
if(cljs.core.truth_(and__4115__auto__)){
return (!(once_or_cleanup === true));
} else {
return and__4115__auto__;
}
})())){
var c__33200__auto___36164 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__33201__auto__ = (function (){var switch__33164__auto__ = (function (state_35540){
var state_val_35541 = (state_35540[(1)]);
if((state_val_35541 === (1))){
var state_35540__$1 = state_35540;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_35540__$1,(2),once_or_cleanup);
} else {
if((state_val_35541 === (2))){
var inst_35537 = (state_35540[(2)]);
var inst_35538 = shadow.dom.remove_event_handler(el,event,event_fn);
var state_35540__$1 = (function (){var statearr_35547 = state_35540;
(statearr_35547[(7)] = inst_35537);

return statearr_35547;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_35540__$1,inst_35538);
} else {
return null;
}
}
});
return (function() {
var shadow$dom$state_machine__33165__auto__ = null;
var shadow$dom$state_machine__33165__auto____0 = (function (){
var statearr_35548 = [null,null,null,null,null,null,null,null];
(statearr_35548[(0)] = shadow$dom$state_machine__33165__auto__);

(statearr_35548[(1)] = (1));

return statearr_35548;
});
var shadow$dom$state_machine__33165__auto____1 = (function (state_35540){
while(true){
var ret_value__33166__auto__ = (function (){try{while(true){
var result__33167__auto__ = switch__33164__auto__(state_35540);
if(cljs.core.keyword_identical_QMARK_(result__33167__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33167__auto__;
}
break;
}
}catch (e35549){var ex__33168__auto__ = e35549;
var statearr_35551_36165 = state_35540;
(statearr_35551_36165[(2)] = ex__33168__auto__);


if(cljs.core.seq((state_35540[(4)]))){
var statearr_35553_36166 = state_35540;
(statearr_35553_36166[(1)] = cljs.core.first((state_35540[(4)])));

} else {
throw ex__33168__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__33166__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36167 = state_35540;
state_35540 = G__36167;
continue;
} else {
return ret_value__33166__auto__;
}
break;
}
});
shadow$dom$state_machine__33165__auto__ = function(state_35540){
switch(arguments.length){
case 0:
return shadow$dom$state_machine__33165__auto____0.call(this);
case 1:
return shadow$dom$state_machine__33165__auto____1.call(this,state_35540);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
shadow$dom$state_machine__33165__auto__.cljs$core$IFn$_invoke$arity$0 = shadow$dom$state_machine__33165__auto____0;
shadow$dom$state_machine__33165__auto__.cljs$core$IFn$_invoke$arity$1 = shadow$dom$state_machine__33165__auto____1;
return shadow$dom$state_machine__33165__auto__;
})()
})();
var state__33202__auto__ = (function (){var statearr_35556 = f__33201__auto__();
(statearr_35556[(6)] = c__33200__auto___36164);

return statearr_35556;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__33202__auto__);
}));

} else {
}

return chan;
}));

(shadow.dom.event_chan.cljs$lang$maxFixedArity = 4);


//# sourceMappingURL=shadow.dom.js.map
