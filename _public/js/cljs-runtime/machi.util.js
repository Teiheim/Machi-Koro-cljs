goog.provide('machi.util');
machi.util.create_deck = (function machi$util$create_deck(){
return cljs.core.PersistentHashMap.fromArrays(["Cheese Factory","Forest","Furniture Factory","Fruit and Vegetable Market","Wheat Field","Cafe","Mine","Family Restaurant","Convenience Store","Apple Orchard","Bakery","Ranch"],[(6),(6),(6),(6),(6),(6),(6),(6),(6),(6),(6),(6)]);
});
machi.util.create_game = (function machi$util$create_game(players){
if((cljs.core.count(players) < (2))){
return cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Not Enough Players"], 0));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (game,p){
var pl = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(cljs.core.get.cljs$core$IFn$_invoke$arity$2(game,new cljs.core.Keyword(null,"players","players",-1361554569)),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),cljs.core.get.cljs$core$IFn$_invoke$arity$2(p,(1)),new cljs.core.Keyword(null,"position","position",-2011731912),cljs.core.get.cljs$core$IFn$_invoke$arity$2(p,(0)),new cljs.core.Keyword(null,"cards","cards",169174038),new cljs.core.PersistentArrayMap(null, 2, ["Wheat Field",new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"amount","amount",364489504),(1),new cljs.core.Keyword(null,"coin","coin",-227557189),(1),new cljs.core.Keyword(null,"color","color",1011675173),"b",new cljs.core.Keyword(null,"activation","activation",2128521072),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1)], null)], null),"Bakery",new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"amount","amount",364489504),(1),new cljs.core.Keyword(null,"coin","coin",-227557189),(1),new cljs.core.Keyword(null,"color","color",1011675173),"g",new cljs.core.Keyword(null,"activation","activation",2128521072),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(2),(3)], null)], null)], null),new cljs.core.Keyword(null,"money","money",250333921),(3),new cljs.core.Keyword(null,"landmarks","landmarks",-239280043),cljs.core.PersistentHashSet.EMPTY], null));
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(game,new cljs.core.Keyword(null,"players","players",-1361554569),pl);
}),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"card-stack","card-stack",-776617377),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"player-in-turn","player-in-turn",-1755161849),(1),new cljs.core.Keyword(null,"deck","deck",1145325705),machi.util.create_deck(),new cljs.core.Keyword(null,"num-player","num-player",-1895632782),(0),new cljs.core.Keyword(null,"players","players",-1361554569),cljs.core.PersistentVector.EMPTY], null),players);
}
});
machi.util.get_player_in_turn = (function machi$util$get_player_in_turn(game){
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(game,new cljs.core.Keyword(null,"player-in-turn","player-in-turn",-1755161849));
});
machi.util.swap_values = (function machi$util$swap_values(game,key,val){
return "Nothing";
});
machi.util.get_player_money = (function machi$util$get_player_money(game,player){
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(game,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"players","players",-1361554569),player,new cljs.core.Keyword(null,"money","money",250333921)], null));
});
machi.util.get_card = (function machi$util$get_card(card_name){
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(machi.definitions.machi_cards,card_name);
});
machi.util.get_money = (function machi$util$get_money(game,player){
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(game,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"players","players",-1361554569),(0)], null));
});
machi.util.remove_add_cash_from_player = (function machi$util$remove_add_cash_from_player(game,player,amt){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(game,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"players","players",-1361554569),player,new cljs.core.Keyword(null,"money","money",250333921)], null),cljs.core._PLUS_,amt);
});
machi.util.get_players = (function machi$util$get_players(game){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (stack,player){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(stack,(function (){var fexpr__37538 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(player,new cljs.core.Keyword(null,"position","position",-2011731912));
return (fexpr__37538.cljs$core$IFn$_invoke$arity$1 ? fexpr__37538.cljs$core$IFn$_invoke$arity$1(player) : fexpr__37538.call(null,player));
})());
}),cljs.core.PersistentVector.EMPTY,game);
});
machi.util.get_cards_from_game = (function machi$util$get_cards_from_game(game){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (stack,pcards){
return cljs.core.into.cljs$core$IFn$_invoke$arity$1(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(stack,cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (card_stack,card){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(card_stack,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.get.cljs$core$IFn$_invoke$arity$2(pcards,new cljs.core.Keyword(null,"position","position",-2011731912)),card], null));
}),cljs.core.PersistentVector.EMPTY,cljs.core.get.cljs$core$IFn$_invoke$arity$2(pcards,new cljs.core.Keyword(null,"cards","cards",169174038)))));
}),cljs.core.PersistentVector.EMPTY,cljs.core.get.cljs$core$IFn$_invoke$arity$2(game,new cljs.core.Keyword(null,"players","players",-1361554569)));
});
machi.util.activate_QMARK_ = (function machi$util$activate_QMARK_(card,dice){
var activate = cljs.core.get.cljs$core$IFn$_invoke$arity$2(card,new cljs.core.Keyword(null,"activation","activation",2128521072));
if((cljs.core.count(activate) < (2))){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.get.cljs$core$IFn$_invoke$arity$2(activate,(0)),dice)){
return true;
} else {
return false;
}
} else {
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.get.cljs$core$IFn$_invoke$arity$2(activate,(0)),dice)) || (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.get.cljs$core$IFn$_invoke$arity$2(activate,(1)),dice)))){
return true;
} else {
return false;
}
}
});
machi.util.card_to_player = (function machi$util$card_to_player(game,player,card_name){
if(cljs.core.contains_QMARK_(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(game,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"players","players",-1361554569),player,new cljs.core.Keyword(null,"cards","cards",169174038)], null)),card_name)){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(game,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"players","players",-1361554569),player,new cljs.core.Keyword(null,"cards","cards",169174038),card_name,new cljs.core.Keyword(null,"amount","amount",364489504)], null),cljs.core.inc);
} else {
var card = machi.util.get_card(card_name);
return cljs.core.assoc_in(game,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"players","players",-1361554569),player,new cljs.core.Keyword(null,"cards","cards",169174038),card_name], null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"amount","amount",364489504),(1),new cljs.core.Keyword(null,"color","color",1011675173),cljs.core.get.cljs$core$IFn$_invoke$arity$2(card,new cljs.core.Keyword(null,"color","color",1011675173)),new cljs.core.Keyword(null,"coin","coin",-227557189),cljs.core.get.cljs$core$IFn$_invoke$arity$2(card,new cljs.core.Keyword(null,"coin","coin",-227557189)),new cljs.core.Keyword(null,"activation","activation",2128521072),cljs.core.get.cljs$core$IFn$_invoke$arity$2(card,new cljs.core.Keyword(null,"activation","activation",2128521072))], null));
}
});
machi.util.remove_card_from_deck = (function machi$util$remove_card_from_deck(game,card_name){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(game,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"deck","deck",1145325705),card_name], null),cljs.core.dec);
});
machi.util.create_card_stack = (function machi$util$create_card_stack(game,player,d1,d2){
var mall = cljs.core.contains_QMARK_(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(game,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [player,new cljs.core.Keyword(null,"landmarks","landmarks",-239280043)], null)),"Shopping Mall");
var pit = (cljs.core.get.cljs$core$IFn$_invoke$arity$2(game,new cljs.core.Keyword(null,"player-in-turn","player-in-turn",-1755161849)) - (1));
var cards = machi.util.get_cards_from_game(game);
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (game__$1,card){
var col = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(card,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(1),new cljs.core.Keyword(null,"color","color",1011675173)], null));
var n = cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([card], 0));
var o = cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([col], 0));
var money = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(card,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(1),new cljs.core.Keyword(null,"coin","coin",-227557189)], null));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(col,"r")){
var g = game__$1;
var g__$1 = machi.util.remove_add_cash_from_player(g,pit,(- money));
return machi.util.remove_add_cash_from_player(g__$1,(cljs.core.get.cljs$core$IFn$_invoke$arity$2(card,(0)) - (1)),money);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(col,"b")){
return machi.util.remove_add_cash_from_player(game__$1,(cljs.core.get.cljs$core$IFn$_invoke$arity$2(card,(0)) - (1)),money);
} else {
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(col,"g")) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((cljs.core.get.cljs$core$IFn$_invoke$arity$2(card,(0)) - (1)),cljs.core.get.cljs$core$IFn$_invoke$arity$2(game__$1,new cljs.core.Keyword(null,"player-in-turn","player-in-turn",-1755161849)))))){
return machi.util.remove_add_cash_from_player(game__$1,pit,money);
} else {
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(col,"p")) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(player,cljs.core.get.cljs$core$IFn$_invoke$arity$2(game__$1,new cljs.core.Keyword(null,"player-in-turn","player-in-turn",-1755161849)))))){
var pn = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (stack,p){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(stack,(cljs.core.get.cljs$core$IFn$_invoke$arity$2(p,new cljs.core.Keyword(null,"position","position",-2011731912)) - (1)));
}),cljs.core.PersistentVector.EMPTY,cljs.core.get.cljs$core$IFn$_invoke$arity$2(game__$1,new cljs.core.Keyword(null,"players","players",-1361554569)));
var ga = game__$1;
var ga__$1 = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (g,p){
return machi.util.remove_add_cash_from_player(g,p,money);
}),ga,pn);
return machi.util.remove_add_cash_from_player(game__$1,pit,((cljs.core.count(cljs.core.get.cljs$core$IFn$_invoke$arity$2(ga__$1,new cljs.core.Keyword(null,"players","players",-1361554569))) + (1)) * money));
} else {
return game__$1;

}
}
}
}
}),game,cards);
});
machi.util.can_buy_QMARK_ = (function machi$util$can_buy_QMARK_(game,player_name,card_name){
return "Nothing";
});
machi.util.switch_turn = (function machi$util$switch_turn(game){
if((machi.util.get_player_in_turn(game) < cljs.core.count(cljs.core.get.cljs$core$IFn$_invoke$arity$2(game,new cljs.core.Keyword(null,"players","players",-1361554569))))){
return cljs.core.update.cljs$core$IFn$_invoke$arity$4(game,new cljs.core.Keyword(null,"player-in-turn","player-in-turn",-1755161849),cljs.core._PLUS_,(1));
} else {
return cljs.core.update.cljs$core$IFn$_invoke$arity$4(game,new cljs.core.Keyword(null,"player-in-turn","player-in-turn",-1755161849),cljs.core._,cljs.core.count(cljs.core.get.cljs$core$IFn$_invoke$arity$2(game,new cljs.core.Keyword(null,"players","players",-1361554569))));
}
});

//# sourceMappingURL=machi.util.js.map
