goog.provide('shadow.remote.runtime.tap_support');
shadow.remote.runtime.tap_support.tap_subscribe = (function shadow$remote$runtime$tap_support$tap_subscribe(p__37312,p__37313){
var map__37314 = p__37312;
var map__37314__$1 = (((((!((map__37314 == null))))?(((((map__37314.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37314.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__37314):map__37314);
var svc = map__37314__$1;
var subs_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37314__$1,new cljs.core.Keyword(null,"subs-ref","subs-ref",-1355989911));
var obj_support = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37314__$1,new cljs.core.Keyword(null,"obj-support","obj-support",1522559229));
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37314__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
var map__37315 = p__37313;
var map__37315__$1 = (((((!((map__37315 == null))))?(((((map__37315.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37315.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__37315):map__37315);
var msg = map__37315__$1;
var from = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37315__$1,new cljs.core.Keyword(null,"from","from",1815293044));
var summary = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37315__$1,new cljs.core.Keyword(null,"summary","summary",380847952));
var history = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37315__$1,new cljs.core.Keyword(null,"history","history",-247395220));
var num = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__37315__$1,new cljs.core.Keyword(null,"num","num",1985240673),(10));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(subs_ref,cljs.core.assoc,from,msg);

if(cljs.core.truth_(history)){
return shadow.remote.runtime.shared.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"tap-subscribed","tap-subscribed",-1882247432),new cljs.core.Keyword(null,"history","history",-247395220),cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (oid){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"oid","oid",-768692334),oid,new cljs.core.Keyword(null,"summary","summary",380847952),shadow.remote.runtime.obj_support.obj_describe_STAR_(obj_support,oid)], null);
}),shadow.remote.runtime.obj_support.get_tap_history(obj_support,num)))], null));
} else {
return null;
}
});
shadow.remote.runtime.tap_support.tap_unsubscribe = (function shadow$remote$runtime$tap_support$tap_unsubscribe(p__37327,p__37328){
var map__37329 = p__37327;
var map__37329__$1 = (((((!((map__37329 == null))))?(((((map__37329.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37329.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__37329):map__37329);
var subs_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37329__$1,new cljs.core.Keyword(null,"subs-ref","subs-ref",-1355989911));
var map__37330 = p__37328;
var map__37330__$1 = (((((!((map__37330 == null))))?(((((map__37330.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37330.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__37330):map__37330);
var from = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37330__$1,new cljs.core.Keyword(null,"from","from",1815293044));
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(subs_ref,cljs.core.dissoc,from);
});
shadow.remote.runtime.tap_support.request_tap_history = (function shadow$remote$runtime$tap_support$request_tap_history(p__37336,p__37337){
var map__37338 = p__37336;
var map__37338__$1 = (((((!((map__37338 == null))))?(((((map__37338.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37338.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__37338):map__37338);
var obj_support = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37338__$1,new cljs.core.Keyword(null,"obj-support","obj-support",1522559229));
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37338__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
var map__37339 = p__37337;
var map__37339__$1 = (((((!((map__37339 == null))))?(((((map__37339.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37339.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__37339):map__37339);
var msg = map__37339__$1;
var num = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__37339__$1,new cljs.core.Keyword(null,"num","num",1985240673),(10));
var tap_ids = shadow.remote.runtime.obj_support.get_tap_history(obj_support,num);
return shadow.remote.runtime.shared.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"tap-history","tap-history",-282803347),new cljs.core.Keyword(null,"oids","oids",-1580877688),tap_ids], null));
});
shadow.remote.runtime.tap_support.tool_disconnect = (function shadow$remote$runtime$tap_support$tool_disconnect(p__37348,tid){
var map__37349 = p__37348;
var map__37349__$1 = (((((!((map__37349 == null))))?(((((map__37349.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37349.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__37349):map__37349);
var svc = map__37349__$1;
var subs_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37349__$1,new cljs.core.Keyword(null,"subs-ref","subs-ref",-1355989911));
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(subs_ref,cljs.core.dissoc,tid);
});
shadow.remote.runtime.tap_support.start = (function shadow$remote$runtime$tap_support$start(runtime,obj_support){
var subs_ref = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var tap_fn = (function shadow$remote$runtime$tap_support$start_$_runtime_tap(obj){
if((!((obj == null)))){
var oid = shadow.remote.runtime.obj_support.register(obj_support,obj,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"from","from",1815293044),new cljs.core.Keyword(null,"tap","tap",-1086702463)], null));
var seq__37357 = cljs.core.seq(cljs.core.deref(subs_ref));
var chunk__37358 = null;
var count__37359 = (0);
var i__37360 = (0);
while(true){
if((i__37360 < count__37359)){
var vec__37372 = chunk__37358.cljs$core$IIndexed$_nth$arity$2(null,i__37360);
var tid = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37372,(0),null);
var tap_config = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37372,(1),null);
shadow.remote.runtime.api.relay_msg(runtime,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"tap","tap",-1086702463),new cljs.core.Keyword(null,"to","to",192099007),tid,new cljs.core.Keyword(null,"oid","oid",-768692334),oid], null));


var G__37387 = seq__37357;
var G__37388 = chunk__37358;
var G__37389 = count__37359;
var G__37390 = (i__37360 + (1));
seq__37357 = G__37387;
chunk__37358 = G__37388;
count__37359 = G__37389;
i__37360 = G__37390;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__37357);
if(temp__5735__auto__){
var seq__37357__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__37357__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__37357__$1);
var G__37391 = cljs.core.chunk_rest(seq__37357__$1);
var G__37392 = c__4556__auto__;
var G__37393 = cljs.core.count(c__4556__auto__);
var G__37394 = (0);
seq__37357 = G__37391;
chunk__37358 = G__37392;
count__37359 = G__37393;
i__37360 = G__37394;
continue;
} else {
var vec__37377 = cljs.core.first(seq__37357__$1);
var tid = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37377,(0),null);
var tap_config = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37377,(1),null);
shadow.remote.runtime.api.relay_msg(runtime,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"tap","tap",-1086702463),new cljs.core.Keyword(null,"to","to",192099007),tid,new cljs.core.Keyword(null,"oid","oid",-768692334),oid], null));


var G__37395 = cljs.core.next(seq__37357__$1);
var G__37396 = null;
var G__37397 = (0);
var G__37398 = (0);
seq__37357 = G__37395;
chunk__37358 = G__37396;
count__37359 = G__37397;
i__37360 = G__37398;
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
});
var svc = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"runtime","runtime",-1331573996),runtime,new cljs.core.Keyword(null,"obj-support","obj-support",1522559229),obj_support,new cljs.core.Keyword(null,"tap-fn","tap-fn",1573556461),tap_fn,new cljs.core.Keyword(null,"subs-ref","subs-ref",-1355989911),subs_ref], null);
shadow.remote.runtime.api.add_extension(runtime,new cljs.core.Keyword("shadow.remote.runtime.tap-support","ext","shadow.remote.runtime.tap-support/ext",1019069674),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"ops","ops",1237330063),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"tap-subscribe","tap-subscribe",411179050),(function (p1__37351_SHARP_){
return shadow.remote.runtime.tap_support.tap_subscribe(svc,p1__37351_SHARP_);
}),new cljs.core.Keyword(null,"tap-unsubscribe","tap-unsubscribe",1183890755),(function (p1__37352_SHARP_){
return shadow.remote.runtime.tap_support.tap_unsubscribe(svc,p1__37352_SHARP_);
}),new cljs.core.Keyword(null,"request-tap-history","request-tap-history",-670837812),(function (p1__37353_SHARP_){
return shadow.remote.runtime.tap_support.request_tap_history(svc,p1__37353_SHARP_);
})], null),new cljs.core.Keyword(null,"on-tool-disconnect","on-tool-disconnect",693464366),(function (p1__37354_SHARP_){
return shadow.remote.runtime.tap_support.tool_disconnect(svc,p1__37354_SHARP_);
})], null));

cljs.core.add_tap(tap_fn);

return svc;
});
shadow.remote.runtime.tap_support.stop = (function shadow$remote$runtime$tap_support$stop(p__37383){
var map__37384 = p__37383;
var map__37384__$1 = (((((!((map__37384 == null))))?(((((map__37384.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37384.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__37384):map__37384);
var svc = map__37384__$1;
var tap_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37384__$1,new cljs.core.Keyword(null,"tap-fn","tap-fn",1573556461));
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37384__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
cljs.core.remove_tap(tap_fn);

return shadow.remote.runtime.api.del_extension(runtime,new cljs.core.Keyword("shadow.remote.runtime.tap-support","ext","shadow.remote.runtime.tap-support/ext",1019069674));
});

//# sourceMappingURL=shadow.remote.runtime.tap_support.js.map
