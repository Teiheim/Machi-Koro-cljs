goog.provide('shadow.cljs.devtools.client.browser');
shadow.cljs.devtools.client.browser.devtools_msg = (function shadow$cljs$devtools$client$browser$devtools_msg(var_args){
var args__4742__auto__ = [];
var len__4736__auto___37688 = arguments.length;
var i__4737__auto___37689 = (0);
while(true){
if((i__4737__auto___37689 < len__4736__auto___37688)){
args__4742__auto__.push((arguments[i__4737__auto___37689]));

var G__37690 = (i__4737__auto___37689 + (1));
i__4737__auto___37689 = G__37690;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((1) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((1)),(0),null)):null);
return shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4743__auto__);
});

(shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic = (function (msg,args){
if(cljs.core.seq(shadow.cljs.devtools.client.env.log_style)){
return console.log.apply(console,cljs.core.into_array.cljs$core$IFn$_invoke$arity$1(cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [["%cshadow-cljs: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg)].join(''),shadow.cljs.devtools.client.env.log_style], null),args)));
} else {
return console.log.apply(console,cljs.core.into_array.cljs$core$IFn$_invoke$arity$1(cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [["shadow-cljs: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg)].join('')], null),args)));
}
}));

(shadow.cljs.devtools.client.browser.devtools_msg.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(shadow.cljs.devtools.client.browser.devtools_msg.cljs$lang$applyTo = (function (seq37511){
var G__37512 = cljs.core.first(seq37511);
var seq37511__$1 = cljs.core.next(seq37511);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__37512,seq37511__$1);
}));

shadow.cljs.devtools.client.browser.script_eval = (function shadow$cljs$devtools$client$browser$script_eval(code){
return goog.globalEval(code);
});
shadow.cljs.devtools.client.browser.do_js_load = (function shadow$cljs$devtools$client$browser$do_js_load(sources){
var seq__37522 = cljs.core.seq(sources);
var chunk__37523 = null;
var count__37524 = (0);
var i__37525 = (0);
while(true){
if((i__37525 < count__37524)){
var map__37532 = chunk__37523.cljs$core$IIndexed$_nth$arity$2(null,i__37525);
var map__37532__$1 = (((((!((map__37532 == null))))?(((((map__37532.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37532.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__37532):map__37532);
var src = map__37532__$1;
var resource_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37532__$1,new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582));
var output_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37532__$1,new cljs.core.Keyword(null,"output-name","output-name",-1769107767));
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37532__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37532__$1,new cljs.core.Keyword(null,"js","js",1768080579));
$CLJS.SHADOW_ENV.setLoaded(output_name);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load JS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([resource_name], 0));

shadow.cljs.devtools.client.env.before_load_src(src);

try{shadow.cljs.devtools.client.browser.script_eval([cljs.core.str.cljs$core$IFn$_invoke$arity$1(js),"\n//# sourceURL=",cljs.core.str.cljs$core$IFn$_invoke$arity$1($CLJS.SHADOW_ENV.scriptBase),cljs.core.str.cljs$core$IFn$_invoke$arity$1(output_name)].join(''));
}catch (e37534){var e_37692 = e37534;
console.error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name)].join(''),e_37692);

throw (new Error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name),": ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(e_37692.message)].join('')));
}

var G__37693 = seq__37522;
var G__37694 = chunk__37523;
var G__37695 = count__37524;
var G__37696 = (i__37525 + (1));
seq__37522 = G__37693;
chunk__37523 = G__37694;
count__37524 = G__37695;
i__37525 = G__37696;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__37522);
if(temp__5735__auto__){
var seq__37522__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__37522__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__37522__$1);
var G__37697 = cljs.core.chunk_rest(seq__37522__$1);
var G__37698 = c__4556__auto__;
var G__37699 = cljs.core.count(c__4556__auto__);
var G__37700 = (0);
seq__37522 = G__37697;
chunk__37523 = G__37698;
count__37524 = G__37699;
i__37525 = G__37700;
continue;
} else {
var map__37535 = cljs.core.first(seq__37522__$1);
var map__37535__$1 = (((((!((map__37535 == null))))?(((((map__37535.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37535.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__37535):map__37535);
var src = map__37535__$1;
var resource_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37535__$1,new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582));
var output_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37535__$1,new cljs.core.Keyword(null,"output-name","output-name",-1769107767));
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37535__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37535__$1,new cljs.core.Keyword(null,"js","js",1768080579));
$CLJS.SHADOW_ENV.setLoaded(output_name);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load JS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([resource_name], 0));

shadow.cljs.devtools.client.env.before_load_src(src);

try{shadow.cljs.devtools.client.browser.script_eval([cljs.core.str.cljs$core$IFn$_invoke$arity$1(js),"\n//# sourceURL=",cljs.core.str.cljs$core$IFn$_invoke$arity$1($CLJS.SHADOW_ENV.scriptBase),cljs.core.str.cljs$core$IFn$_invoke$arity$1(output_name)].join(''));
}catch (e37537){var e_37703 = e37537;
console.error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name)].join(''),e_37703);

throw (new Error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name),": ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(e_37703.message)].join('')));
}

var G__37704 = cljs.core.next(seq__37522__$1);
var G__37705 = null;
var G__37706 = (0);
var G__37707 = (0);
seq__37522 = G__37704;
chunk__37523 = G__37705;
count__37524 = G__37706;
i__37525 = G__37707;
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
var seq__37539 = cljs.core.seq(js_requires);
var chunk__37540 = null;
var count__37541 = (0);
var i__37542 = (0);
while(true){
if((i__37542 < count__37541)){
var js_ns = chunk__37540.cljs$core$IIndexed$_nth$arity$2(null,i__37542);
var require_str_37708 = ["var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns)," = shadow.js.require(\"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns),"\");"].join('');
shadow.cljs.devtools.client.browser.script_eval(require_str_37708);


var G__37709 = seq__37539;
var G__37710 = chunk__37540;
var G__37711 = count__37541;
var G__37712 = (i__37542 + (1));
seq__37539 = G__37709;
chunk__37540 = G__37710;
count__37541 = G__37711;
i__37542 = G__37712;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__37539);
if(temp__5735__auto__){
var seq__37539__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__37539__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__37539__$1);
var G__37713 = cljs.core.chunk_rest(seq__37539__$1);
var G__37714 = c__4556__auto__;
var G__37715 = cljs.core.count(c__4556__auto__);
var G__37716 = (0);
seq__37539 = G__37713;
chunk__37540 = G__37714;
count__37541 = G__37715;
i__37542 = G__37716;
continue;
} else {
var js_ns = cljs.core.first(seq__37539__$1);
var require_str_37717 = ["var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns)," = shadow.js.require(\"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns),"\");"].join('');
shadow.cljs.devtools.client.browser.script_eval(require_str_37717);


var G__37718 = cljs.core.next(seq__37539__$1);
var G__37719 = null;
var G__37720 = (0);
var G__37721 = (0);
seq__37539 = G__37718;
chunk__37540 = G__37719;
count__37541 = G__37720;
i__37542 = G__37721;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.cljs.devtools.client.browser.handle_build_complete = (function shadow$cljs$devtools$client$browser$handle_build_complete(runtime,p__37545){
var map__37546 = p__37545;
var map__37546__$1 = (((((!((map__37546 == null))))?(((((map__37546.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37546.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__37546):map__37546);
var msg = map__37546__$1;
var info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37546__$1,new cljs.core.Keyword(null,"info","info",-317069002));
var reload_info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37546__$1,new cljs.core.Keyword(null,"reload-info","reload-info",1648088086));
var warnings = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.distinct.cljs$core$IFn$_invoke$arity$1((function (){var iter__4529__auto__ = (function shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__37548(s__37549){
return (new cljs.core.LazySeq(null,(function (){
var s__37549__$1 = s__37549;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__37549__$1);
if(temp__5735__auto__){
var xs__6292__auto__ = temp__5735__auto__;
var map__37554 = cljs.core.first(xs__6292__auto__);
var map__37554__$1 = (((((!((map__37554 == null))))?(((((map__37554.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37554.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__37554):map__37554);
var src = map__37554__$1;
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37554__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var warnings = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37554__$1,new cljs.core.Keyword(null,"warnings","warnings",-735437651));
if(cljs.core.not(new cljs.core.Keyword(null,"from-jar","from-jar",1050932827).cljs$core$IFn$_invoke$arity$1(src))){
var iterys__4525__auto__ = ((function (s__37549__$1,map__37554,map__37554__$1,src,resource_name,warnings,xs__6292__auto__,temp__5735__auto__,map__37546,map__37546__$1,msg,info,reload_info){
return (function shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__37548_$_iter__37550(s__37551){
return (new cljs.core.LazySeq(null,((function (s__37549__$1,map__37554,map__37554__$1,src,resource_name,warnings,xs__6292__auto__,temp__5735__auto__,map__37546,map__37546__$1,msg,info,reload_info){
return (function (){
var s__37551__$1 = s__37551;
while(true){
var temp__5735__auto____$1 = cljs.core.seq(s__37551__$1);
if(temp__5735__auto____$1){
var s__37551__$2 = temp__5735__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__37551__$2)){
var c__4527__auto__ = cljs.core.chunk_first(s__37551__$2);
var size__4528__auto__ = cljs.core.count(c__4527__auto__);
var b__37553 = cljs.core.chunk_buffer(size__4528__auto__);
if((function (){var i__37552 = (0);
while(true){
if((i__37552 < size__4528__auto__)){
var warning = cljs.core._nth(c__4527__auto__,i__37552);
cljs.core.chunk_append(b__37553,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(warning,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100),resource_name));

var G__37722 = (i__37552 + (1));
i__37552 = G__37722;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__37553),shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__37548_$_iter__37550(cljs.core.chunk_rest(s__37551__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__37553),null);
}
} else {
var warning = cljs.core.first(s__37551__$2);
return cljs.core.cons(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(warning,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100),resource_name),shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__37548_$_iter__37550(cljs.core.rest(s__37551__$2)));
}
} else {
return null;
}
break;
}
});})(s__37549__$1,map__37554,map__37554__$1,src,resource_name,warnings,xs__6292__auto__,temp__5735__auto__,map__37546,map__37546__$1,msg,info,reload_info))
,null,null));
});})(s__37549__$1,map__37554,map__37554__$1,src,resource_name,warnings,xs__6292__auto__,temp__5735__auto__,map__37546,map__37546__$1,msg,info,reload_info))
;
var fs__4526__auto__ = cljs.core.seq(iterys__4525__auto__(warnings));
if(fs__4526__auto__){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(fs__4526__auto__,shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__37548(cljs.core.rest(s__37549__$1)));
} else {
var G__37735 = cljs.core.rest(s__37549__$1);
s__37549__$1 = G__37735;
continue;
}
} else {
var G__37736 = cljs.core.rest(s__37549__$1);
s__37549__$1 = G__37736;
continue;
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4529__auto__(new cljs.core.Keyword(null,"sources","sources",-321166424).cljs$core$IFn$_invoke$arity$1(info));
})()));
var seq__37562_37737 = cljs.core.seq(warnings);
var chunk__37563_37738 = null;
var count__37564_37739 = (0);
var i__37565_37740 = (0);
while(true){
if((i__37565_37740 < count__37564_37739)){
var map__37574_37742 = chunk__37563_37738.cljs$core$IIndexed$_nth$arity$2(null,i__37565_37740);
var map__37574_37743__$1 = (((((!((map__37574_37742 == null))))?(((((map__37574_37742.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37574_37742.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__37574_37742):map__37574_37742);
var w_37744 = map__37574_37743__$1;
var msg_37745__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37574_37743__$1,new cljs.core.Keyword(null,"msg","msg",-1386103444));
var line_37746 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37574_37743__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column_37747 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37574_37743__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var resource_name_37748 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37574_37743__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
console.warn(["BUILD-WARNING in ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name_37748)," at [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line_37746),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column_37747),"]\n\t",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg_37745__$1)].join(''));


var G__37750 = seq__37562_37737;
var G__37751 = chunk__37563_37738;
var G__37752 = count__37564_37739;
var G__37753 = (i__37565_37740 + (1));
seq__37562_37737 = G__37750;
chunk__37563_37738 = G__37751;
count__37564_37739 = G__37752;
i__37565_37740 = G__37753;
continue;
} else {
var temp__5735__auto___37754 = cljs.core.seq(seq__37562_37737);
if(temp__5735__auto___37754){
var seq__37562_37755__$1 = temp__5735__auto___37754;
if(cljs.core.chunked_seq_QMARK_(seq__37562_37755__$1)){
var c__4556__auto___37756 = cljs.core.chunk_first(seq__37562_37755__$1);
var G__37757 = cljs.core.chunk_rest(seq__37562_37755__$1);
var G__37758 = c__4556__auto___37756;
var G__37759 = cljs.core.count(c__4556__auto___37756);
var G__37760 = (0);
seq__37562_37737 = G__37757;
chunk__37563_37738 = G__37758;
count__37564_37739 = G__37759;
i__37565_37740 = G__37760;
continue;
} else {
var map__37576_37761 = cljs.core.first(seq__37562_37755__$1);
var map__37576_37762__$1 = (((((!((map__37576_37761 == null))))?(((((map__37576_37761.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37576_37761.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__37576_37761):map__37576_37761);
var w_37763 = map__37576_37762__$1;
var msg_37764__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37576_37762__$1,new cljs.core.Keyword(null,"msg","msg",-1386103444));
var line_37765 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37576_37762__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column_37766 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37576_37762__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var resource_name_37767 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37576_37762__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
console.warn(["BUILD-WARNING in ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name_37767)," at [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line_37765),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column_37766),"]\n\t",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg_37764__$1)].join(''));


var G__37768 = cljs.core.next(seq__37562_37755__$1);
var G__37769 = null;
var G__37770 = (0);
var G__37771 = (0);
seq__37562_37737 = G__37768;
chunk__37563_37738 = G__37769;
count__37564_37739 = G__37770;
i__37565_37740 = G__37771;
continue;
}
} else {
}
}
break;
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

return shadow.cljs.devtools.client.shared.load_sources(runtime,sources_to_get,(function (p1__37544_SHARP_){
return shadow.cljs.devtools.client.browser.do_js_reload(msg,p1__37544_SHARP_,shadow.cljs.devtools.client.hud.load_end_success,shadow.cljs.devtools.client.hud.load_failure);
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
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$1(shadow.cljs.devtools.client.browser.page_load_uri.hasSameDomainAs(node_uri))) || (cljs.core.not(node_uri.hasDomain())))){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(node_abs,new$)){
return new$;
} else {
return false;
}
} else {
return false;
}
}
});
shadow.cljs.devtools.client.browser.handle_asset_update = (function shadow$cljs$devtools$client$browser$handle_asset_update(p__37585){
var map__37586 = p__37585;
var map__37586__$1 = (((((!((map__37586 == null))))?(((((map__37586.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37586.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__37586):map__37586);
var msg = map__37586__$1;
var updates = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37586__$1,new cljs.core.Keyword(null,"updates","updates",2013983452));
var seq__37588 = cljs.core.seq(updates);
var chunk__37590 = null;
var count__37591 = (0);
var i__37592 = (0);
while(true){
if((i__37592 < count__37591)){
var path = chunk__37590.cljs$core$IIndexed$_nth$arity$2(null,i__37592);
if(clojure.string.ends_with_QMARK_(path,"css")){
var seq__37618_37772 = cljs.core.seq(cljs.core.array_seq.cljs$core$IFn$_invoke$arity$1(document.querySelectorAll("link[rel=\"stylesheet\"]")));
var chunk__37621_37773 = null;
var count__37622_37774 = (0);
var i__37623_37775 = (0);
while(true){
if((i__37623_37775 < count__37622_37774)){
var node_37776 = chunk__37621_37773.cljs$core$IIndexed$_nth$arity$2(null,i__37623_37775);
var path_match_37777 = shadow.cljs.devtools.client.browser.match_paths(node_37776.getAttribute("href"),path);
if(cljs.core.truth_(path_match_37777)){
var new_link_37779 = (function (){var G__37628 = node_37776.cloneNode(true);
G__37628.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_37777),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__37628;
})();
shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_37777], 0));

goog.dom.insertSiblingAfter(new_link_37779,node_37776);

goog.dom.removeNode(node_37776);


var G__37780 = seq__37618_37772;
var G__37781 = chunk__37621_37773;
var G__37782 = count__37622_37774;
var G__37783 = (i__37623_37775 + (1));
seq__37618_37772 = G__37780;
chunk__37621_37773 = G__37781;
count__37622_37774 = G__37782;
i__37623_37775 = G__37783;
continue;
} else {
var G__37784 = seq__37618_37772;
var G__37785 = chunk__37621_37773;
var G__37786 = count__37622_37774;
var G__37787 = (i__37623_37775 + (1));
seq__37618_37772 = G__37784;
chunk__37621_37773 = G__37785;
count__37622_37774 = G__37786;
i__37623_37775 = G__37787;
continue;
}
} else {
var temp__5735__auto___37788 = cljs.core.seq(seq__37618_37772);
if(temp__5735__auto___37788){
var seq__37618_37789__$1 = temp__5735__auto___37788;
if(cljs.core.chunked_seq_QMARK_(seq__37618_37789__$1)){
var c__4556__auto___37790 = cljs.core.chunk_first(seq__37618_37789__$1);
var G__37791 = cljs.core.chunk_rest(seq__37618_37789__$1);
var G__37792 = c__4556__auto___37790;
var G__37793 = cljs.core.count(c__4556__auto___37790);
var G__37794 = (0);
seq__37618_37772 = G__37791;
chunk__37621_37773 = G__37792;
count__37622_37774 = G__37793;
i__37623_37775 = G__37794;
continue;
} else {
var node_37795 = cljs.core.first(seq__37618_37789__$1);
var path_match_37796 = shadow.cljs.devtools.client.browser.match_paths(node_37795.getAttribute("href"),path);
if(cljs.core.truth_(path_match_37796)){
var new_link_37797 = (function (){var G__37629 = node_37795.cloneNode(true);
G__37629.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_37796),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__37629;
})();
shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_37796], 0));

goog.dom.insertSiblingAfter(new_link_37797,node_37795);

goog.dom.removeNode(node_37795);


var G__37798 = cljs.core.next(seq__37618_37789__$1);
var G__37799 = null;
var G__37800 = (0);
var G__37801 = (0);
seq__37618_37772 = G__37798;
chunk__37621_37773 = G__37799;
count__37622_37774 = G__37800;
i__37623_37775 = G__37801;
continue;
} else {
var G__37802 = cljs.core.next(seq__37618_37789__$1);
var G__37803 = null;
var G__37804 = (0);
var G__37805 = (0);
seq__37618_37772 = G__37802;
chunk__37621_37773 = G__37803;
count__37622_37774 = G__37804;
i__37623_37775 = G__37805;
continue;
}
}
} else {
}
}
break;
}


var G__37806 = seq__37588;
var G__37807 = chunk__37590;
var G__37808 = count__37591;
var G__37809 = (i__37592 + (1));
seq__37588 = G__37806;
chunk__37590 = G__37807;
count__37591 = G__37808;
i__37592 = G__37809;
continue;
} else {
var G__37810 = seq__37588;
var G__37811 = chunk__37590;
var G__37812 = count__37591;
var G__37813 = (i__37592 + (1));
seq__37588 = G__37810;
chunk__37590 = G__37811;
count__37591 = G__37812;
i__37592 = G__37813;
continue;
}
} else {
var temp__5735__auto__ = cljs.core.seq(seq__37588);
if(temp__5735__auto__){
var seq__37588__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__37588__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__37588__$1);
var G__37814 = cljs.core.chunk_rest(seq__37588__$1);
var G__37815 = c__4556__auto__;
var G__37816 = cljs.core.count(c__4556__auto__);
var G__37817 = (0);
seq__37588 = G__37814;
chunk__37590 = G__37815;
count__37591 = G__37816;
i__37592 = G__37817;
continue;
} else {
var path = cljs.core.first(seq__37588__$1);
if(clojure.string.ends_with_QMARK_(path,"css")){
var seq__37630_37818 = cljs.core.seq(cljs.core.array_seq.cljs$core$IFn$_invoke$arity$1(document.querySelectorAll("link[rel=\"stylesheet\"]")));
var chunk__37633_37819 = null;
var count__37634_37820 = (0);
var i__37635_37821 = (0);
while(true){
if((i__37635_37821 < count__37634_37820)){
var node_37822 = chunk__37633_37819.cljs$core$IIndexed$_nth$arity$2(null,i__37635_37821);
var path_match_37823 = shadow.cljs.devtools.client.browser.match_paths(node_37822.getAttribute("href"),path);
if(cljs.core.truth_(path_match_37823)){
var new_link_37824 = (function (){var G__37640 = node_37822.cloneNode(true);
G__37640.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_37823),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__37640;
})();
shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_37823], 0));

goog.dom.insertSiblingAfter(new_link_37824,node_37822);

goog.dom.removeNode(node_37822);


var G__37825 = seq__37630_37818;
var G__37826 = chunk__37633_37819;
var G__37827 = count__37634_37820;
var G__37828 = (i__37635_37821 + (1));
seq__37630_37818 = G__37825;
chunk__37633_37819 = G__37826;
count__37634_37820 = G__37827;
i__37635_37821 = G__37828;
continue;
} else {
var G__37829 = seq__37630_37818;
var G__37830 = chunk__37633_37819;
var G__37831 = count__37634_37820;
var G__37832 = (i__37635_37821 + (1));
seq__37630_37818 = G__37829;
chunk__37633_37819 = G__37830;
count__37634_37820 = G__37831;
i__37635_37821 = G__37832;
continue;
}
} else {
var temp__5735__auto___37833__$1 = cljs.core.seq(seq__37630_37818);
if(temp__5735__auto___37833__$1){
var seq__37630_37834__$1 = temp__5735__auto___37833__$1;
if(cljs.core.chunked_seq_QMARK_(seq__37630_37834__$1)){
var c__4556__auto___37835 = cljs.core.chunk_first(seq__37630_37834__$1);
var G__37836 = cljs.core.chunk_rest(seq__37630_37834__$1);
var G__37837 = c__4556__auto___37835;
var G__37838 = cljs.core.count(c__4556__auto___37835);
var G__37839 = (0);
seq__37630_37818 = G__37836;
chunk__37633_37819 = G__37837;
count__37634_37820 = G__37838;
i__37635_37821 = G__37839;
continue;
} else {
var node_37840 = cljs.core.first(seq__37630_37834__$1);
var path_match_37841 = shadow.cljs.devtools.client.browser.match_paths(node_37840.getAttribute("href"),path);
if(cljs.core.truth_(path_match_37841)){
var new_link_37842 = (function (){var G__37642 = node_37840.cloneNode(true);
G__37642.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_37841),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__37642;
})();
shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_37841], 0));

goog.dom.insertSiblingAfter(new_link_37842,node_37840);

goog.dom.removeNode(node_37840);


var G__37843 = cljs.core.next(seq__37630_37834__$1);
var G__37844 = null;
var G__37845 = (0);
var G__37846 = (0);
seq__37630_37818 = G__37843;
chunk__37633_37819 = G__37844;
count__37634_37820 = G__37845;
i__37635_37821 = G__37846;
continue;
} else {
var G__37847 = cljs.core.next(seq__37630_37834__$1);
var G__37848 = null;
var G__37849 = (0);
var G__37850 = (0);
seq__37630_37818 = G__37847;
chunk__37633_37819 = G__37848;
count__37634_37820 = G__37849;
i__37635_37821 = G__37850;
continue;
}
}
} else {
}
}
break;
}


var G__37851 = cljs.core.next(seq__37588__$1);
var G__37852 = null;
var G__37853 = (0);
var G__37854 = (0);
seq__37588 = G__37851;
chunk__37590 = G__37852;
count__37591 = G__37853;
i__37592 = G__37854;
continue;
} else {
var G__37855 = cljs.core.next(seq__37588__$1);
var G__37856 = null;
var G__37857 = (0);
var G__37858 = (0);
seq__37588 = G__37855;
chunk__37590 = G__37856;
count__37591 = G__37857;
i__37592 = G__37858;
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
shadow.cljs.devtools.client.browser.repl_init = (function shadow$cljs$devtools$client$browser$repl_init(runtime,p__37645){
var map__37646 = p__37645;
var map__37646__$1 = (((((!((map__37646 == null))))?(((((map__37646.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37646.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__37646):map__37646);
var repl_state = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37646__$1,new cljs.core.Keyword(null,"repl-state","repl-state",-1733780387));
return shadow.cljs.devtools.client.shared.load_sources(runtime,cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2(shadow.cljs.devtools.client.env.src_is_loaded_QMARK_,new cljs.core.Keyword(null,"repl-sources","repl-sources",723867535).cljs$core$IFn$_invoke$arity$1(repl_state))),(function (sources){
shadow.cljs.devtools.client.browser.do_js_load(sources);

return shadow.cljs.devtools.client.browser.devtools_msg("ready!");
}));
});
shadow.cljs.devtools.client.browser.client_info = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"host","host",-1558485167),(cljs.core.truth_(goog.global.document)?new cljs.core.Keyword(null,"browser","browser",828191719):new cljs.core.Keyword(null,"browser-worker","browser-worker",1638998282)),new cljs.core.Keyword(null,"user-agent","user-agent",1220426212),[(cljs.core.truth_(goog.userAgent.OPERA)?"Opera":(cljs.core.truth_(goog.userAgent.product.CHROME)?"Chrome":(cljs.core.truth_(goog.userAgent.IE)?"MSIE":(cljs.core.truth_(goog.userAgent.EDGE)?"Edge":(cljs.core.truth_(goog.userAgent.GECKO)?"Firefox":(cljs.core.truth_(goog.userAgent.SAFARI)?"Safari":(cljs.core.truth_(goog.userAgent.WEBKIT)?"Webkit":null)))))))," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(goog.userAgent.VERSION)," [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(goog.userAgent.PLATFORM),"]"].join(''),new cljs.core.Keyword(null,"dom","dom",-1236537922),(!((goog.global.document == null)))], null);
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

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$do_invoke$arity$2 = (function (this$,p__37654){
var map__37655 = p__37654;
var map__37655__$1 = (((((!((map__37655 == null))))?(((((map__37655.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37655.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__37655):map__37655);
var _ = map__37655__$1;
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37655__$1,new cljs.core.Keyword(null,"js","js",1768080579));
var this$__$1 = this;
return shadow.cljs.devtools.client.browser.global_eval(js);
}));

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$do_repl_init$arity$4 = (function (runtime,p__37659,done,error){
var map__37660 = p__37659;
var map__37660__$1 = (((((!((map__37660 == null))))?(((((map__37660.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37660.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__37660):map__37660);
var repl_sources = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37660__$1,new cljs.core.Keyword(null,"repl-sources","repl-sources",723867535));
var runtime__$1 = this;
return shadow.cljs.devtools.client.shared.load_sources(runtime__$1,cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2(shadow.cljs.devtools.client.env.src_is_loaded_QMARK_,repl_sources)),(function (sources){
shadow.cljs.devtools.client.browser.do_js_load(sources);

return (done.cljs$core$IFn$_invoke$arity$0 ? done.cljs$core$IFn$_invoke$arity$0() : done.call(null));
}));
}));

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$do_repl_require$arity$4 = (function (runtime,p__37662,done,error){
var map__37663 = p__37662;
var map__37663__$1 = (((((!((map__37663 == null))))?(((((map__37663.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37663.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__37663):map__37663);
var msg = map__37663__$1;
var sources = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37663__$1,new cljs.core.Keyword(null,"sources","sources",-321166424));
var reload_namespaces = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37663__$1,new cljs.core.Keyword(null,"reload-namespaces","reload-namespaces",250210134));
var js_requires = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37663__$1,new cljs.core.Keyword(null,"js-requires","js-requires",-1311472051));
var runtime__$1 = this;
var sources_to_load = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p__37665){
var map__37666 = p__37665;
var map__37666__$1 = (((((!((map__37666 == null))))?(((((map__37666.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37666.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__37666):map__37666);
var src = map__37666__$1;
var provides = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37666__$1,new cljs.core.Keyword(null,"provides","provides",-1634397992));
var and__4115__auto__ = shadow.cljs.devtools.client.env.src_is_loaded_QMARK_(src);
if(cljs.core.truth_(and__4115__auto__)){
return cljs.core.not(cljs.core.some(reload_namespaces,provides));
} else {
return and__4115__auto__;
}
}),sources));
if(cljs.core.not(cljs.core.seq(sources_to_load))){
var G__37669 = cljs.core.PersistentVector.EMPTY;
return (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(G__37669) : done.call(null,G__37669));
} else {
return shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$3(runtime__$1,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"cljs-load-sources","cljs-load-sources",-1458295962),new cljs.core.Keyword(null,"to","to",192099007),shadow.cljs.devtools.client.env.worker_client_id,new cljs.core.Keyword(null,"sources","sources",-321166424),cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentVector.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582)),sources_to_load)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cljs-sources","cljs-sources",31121610),(function (p__37670){
var map__37671 = p__37670;
var map__37671__$1 = (((((!((map__37671 == null))))?(((((map__37671.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37671.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__37671):map__37671);
var msg__$1 = map__37671__$1;
var sources__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37671__$1,new cljs.core.Keyword(null,"sources","sources",-321166424));
try{shadow.cljs.devtools.client.browser.do_js_load(sources__$1);

if(cljs.core.seq(js_requires)){
shadow.cljs.devtools.client.browser.do_js_requires(js_requires);
} else {
}

return (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(sources_to_load) : done.call(null,sources_to_load));
}catch (e37673){var ex = e37673;
return (error.cljs$core$IFn$_invoke$arity$1 ? error.cljs$core$IFn$_invoke$arity$1(ex) : error.call(null,ex));
}})], null));
}
}));

shadow.cljs.devtools.client.shared.add_plugin_BANG_(new cljs.core.Keyword("shadow.cljs.devtools.client.browser","client","shadow.cljs.devtools.client.browser/client",-1461019282),cljs.core.PersistentHashSet.EMPTY,(function (p__37674){
var map__37675 = p__37674;
var map__37675__$1 = (((((!((map__37675 == null))))?(((((map__37675.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37675.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__37675):map__37675);
var env = map__37675__$1;
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37675__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
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
}),new cljs.core.Keyword(null,"ops","ops",1237330063),new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"access-denied","access-denied",959449406),(function (msg){
cljs.core.reset_BANG_(shadow.cljs.devtools.client.browser.ws_was_welcome_ref,false);

return shadow.cljs.devtools.client.hud.connection_error(["Stale Output! Your loaded JS was not produced by the running shadow-cljs instance."," Is the watch for this build running?"].join(''));
}),new cljs.core.Keyword(null,"cljs-runtime-init","cljs-runtime-init",1305890232),(function (msg){
return shadow.cljs.devtools.client.browser.repl_init(runtime,msg);
}),new cljs.core.Keyword(null,"cljs-asset-update","cljs-asset-update",1224093028),(function (p__37679){
var map__37680 = p__37679;
var map__37680__$1 = (((((!((map__37680 == null))))?(((((map__37680.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37680.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__37680):map__37680);
var msg = map__37680__$1;
var updates = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37680__$1,new cljs.core.Keyword(null,"updates","updates",2013983452));
return shadow.cljs.devtools.client.browser.handle_asset_update(msg);
}),new cljs.core.Keyword(null,"cljs-build-configure","cljs-build-configure",-2089891268),(function (msg){
return null;
}),new cljs.core.Keyword(null,"cljs-build-start","cljs-build-start",-725781241),(function (msg){
shadow.cljs.devtools.client.hud.hud_hide();

shadow.cljs.devtools.client.hud.load_start();

return shadow.cljs.devtools.client.env.run_custom_notify_BANG_(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(msg,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"build-start","build-start",-959649480)));
}),new cljs.core.Keyword(null,"cljs-build-complete","cljs-build-complete",273626153),(function (msg){
var msg__$1 = shadow.cljs.devtools.client.env.add_warnings_to_info(msg);
shadow.cljs.devtools.client.hud.hud_warnings(msg__$1);

shadow.cljs.devtools.client.browser.handle_build_complete(runtime,msg__$1);

return shadow.cljs.devtools.client.env.run_custom_notify_BANG_(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(msg__$1,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"build-complete","build-complete",-501868472)));
}),new cljs.core.Keyword(null,"cljs-build-failure","cljs-build-failure",1718154990),(function (msg){
shadow.cljs.devtools.client.hud.load_end();

shadow.cljs.devtools.client.hud.hud_error(msg);

return shadow.cljs.devtools.client.env.run_custom_notify_BANG_(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(msg,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"build-failure","build-failure",-2107487466)));
}),new cljs.core.Keyword("shadow.cljs.devtools.client.env","worker-notify","shadow.cljs.devtools.client.env/worker-notify",-1456820670),(function (p__37682){
var map__37683 = p__37682;
var map__37683__$1 = (((((!((map__37683 == null))))?(((((map__37683.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37683.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__37683):map__37683);
var event_op = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37683__$1,new cljs.core.Keyword(null,"event-op","event-op",200358057));
var client_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37683__$1,new cljs.core.Keyword(null,"client-id","client-id",-464622140));
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
}),(function (p__37685){
var map__37686 = p__37685;
var map__37686__$1 = (((((!((map__37686 == null))))?(((((map__37686.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37686.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__37686):map__37686);
var svc = map__37686__$1;
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37686__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
return shadow.remote.runtime.api.del_extension(runtime,new cljs.core.Keyword("shadow.cljs.devtools.client.browser","client","shadow.cljs.devtools.client.browser/client",-1461019282));
}));

shadow.cljs.devtools.client.shared.init_runtime_BANG_(shadow.cljs.devtools.client.browser.client_info,shadow.cljs.devtools.client.websocket.start,shadow.cljs.devtools.client.websocket.send,shadow.cljs.devtools.client.websocket.stop);
} else {
}

//# sourceMappingURL=shadow.cljs.devtools.client.browser.js.map
