goog.provide('machi.core');
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Hello world!"], 0));
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([machi.definitions.machi_cards], 0));
machi.core.init = (function machi$core$init(){
machi.tests.mtest();

return console.log("Hewwo World");
});
goog.exportSymbol('machi.core.init', machi.core.init);
machi.core.my_template = (function machi$core$my_template(){
return "<div><a href=\"https://github.com/weavejester/hiccup\">Hiccup</a></div>";
});
machi.core.make_card = (function machi$core$make_card(card){
return ["<div",cljs.core.str.cljs$core$IFn$_invoke$arity$1(hiccups.runtime.render_attr_map(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),null,new cljs.core.Keyword(null,"class","class",-2030961996),["class ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.get.cljs$core$IFn$_invoke$arity$2(card,"color"))].join('')], null))),">",(function (){var attrs38140 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(card,"name");
if(cljs.core.map_QMARK_(attrs38140)){
return ["<p",cljs.core.str.cljs$core$IFn$_invoke$arity$1(hiccups.runtime.render_attr_map(cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),null,new cljs.core.Keyword(null,"class","class",-2030961996),"card-name"], null),attrs38140], 0))))," />"].join('');
} else {
return ["<p class=\"card-name\">",cljs.core.str.cljs$core$IFn$_invoke$arity$1(hiccups.runtime.render_html(attrs38140)),"</p>"].join('');
}
})(),(function (){var attrs38141 = (card.cljs$core$IFn$_invoke$arity$1 ? card.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"amount","amount",364489504)) : card.call(null,new cljs.core.Keyword(null,"amount","amount",364489504)));
if(cljs.core.map_QMARK_(attrs38141)){
return ["<p",cljs.core.str.cljs$core$IFn$_invoke$arity$1(hiccups.runtime.render_attr_map(cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),null,new cljs.core.Keyword(null,"class","class",-2030961996),"amount"], null),attrs38141], 0))))," />"].join('');
} else {
return ["<p class=\"amount\">",cljs.core.str.cljs$core$IFn$_invoke$arity$1(hiccups.runtime.render_html(attrs38141)),"</p>"].join('');
}
})(),(function (){var attrs38142 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.get.cljs$core$IFn$_invoke$arity$2(card,"activation"));
if(cljs.core.map_QMARK_(attrs38142)){
return ["<p",cljs.core.str.cljs$core$IFn$_invoke$arity$1(hiccups.runtime.render_attr_map(cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),null,new cljs.core.Keyword(null,"class","class",-2030961996),"worth"], null),attrs38142], 0))))," />"].join('');
} else {
return ["<p class=\"worth\">",cljs.core.str.cljs$core$IFn$_invoke$arity$1(hiccups.runtime.render_html(attrs38142)),"</p>"].join('');
}
})(),(function (){var attrs38143 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(card,"coin");
if(cljs.core.map_QMARK_(attrs38143)){
return ["<p",cljs.core.str.cljs$core$IFn$_invoke$arity$1(hiccups.runtime.render_attr_map(cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),null,new cljs.core.Keyword(null,"class","class",-2030961996),"coin"], null),attrs38143], 0))))," />"].join('');
} else {
return ["<p class=\"coin\">",cljs.core.str.cljs$core$IFn$_invoke$arity$1(hiccups.runtime.render_html(attrs38143)),"</p>"].join('');
}
})(),"</div>"].join('');
});
machi.core.hic = (function machi$core$hic(){
return window.alert(machi.core.my_template());
});

//# sourceMappingURL=machi.core.js.map
