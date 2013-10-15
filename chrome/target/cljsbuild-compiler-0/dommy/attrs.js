goog.provide('dommy.attrs');
goog.require('cljs.core');
goog.require('clojure.string');
goog.require('clojure.string');
/**
* does class-name string have class starting at index idx.
* only will be used when Element::classList doesn't exist
*/
dommy.attrs.class_match_QMARK_ = (function class_match_QMARK_(class_name,class$,idx){var and__3941__auto__ = (function (){var or__3943__auto__ = (idx === 0);if(or__3943__auto__)
{return or__3943__auto__;
} else
{return (" " === class_name.charAt((idx - 1)));
}
})();if(cljs.core.truth_(and__3941__auto__))
{var total_len = class_name.length;var stop = (idx + class$.length);if((stop <= total_len))
{var or__3943__auto__ = (stop === total_len);if(or__3943__auto__)
{return or__3943__auto__;
} else
{return (" " === class_name.charAt(stop));
}
} else
{return null;
}
} else
{return and__3941__auto__;
}
});
/**
* Finds the index of class in a space-delimited class-name
* only will be used when Element::classList doesn't exist
*/
dommy.attrs.class_index = (function class_index(class_name,class$){var start_from = 0;while(true){
var i = class_name.indexOf(class$,start_from);if((i >= 0))
{if(dommy.attrs.class_match_QMARK_.call(null,class_name,class$,i))
{return i;
} else
{{
var G__6142 = (i + class$.length);
start_from = G__6142;
continue;
}
}
} else
{return null;
}
break;
}
});
/**
* Does an HTML element have a class. Uses Element::classList if
* available and otherwise does fast parse of className string
*/
dommy.attrs.has_class_QMARK_ = (function has_class_QMARK_(elem,class$){var elem__$1 = dommy.template.__GT_node_like.call(null,elem);var class$__$1 = cljs.core.name.call(null,class$);var temp__4090__auto__ = elem__$1.classList;if(cljs.core.truth_(temp__4090__auto__))
{var class_list = temp__4090__auto__;return class_list.contains(class$__$1);
} else
{var temp__4092__auto__ = elem__$1.className;if(cljs.core.truth_(temp__4092__auto__))
{var class_name = temp__4092__auto__;var temp__4092__auto____$1 = dommy.attrs.class_index.call(null,class_name,class$__$1);if(cljs.core.truth_(temp__4092__auto____$1))
{var i = temp__4092__auto____$1;return (i >= 0);
} else
{return null;
}
} else
{return null;
}
}
});
/**
* add class to element
* @param {...*} var_args
*/
dommy.attrs.add_class_BANG_ = (function() {
var add_class_BANG_ = null;
var add_class_BANG___2 = (function (elem,classes){var elem__$1 = dommy.template.__GT_node_like.call(null,elem);var classes__$1 = clojure.string.trim.call(null,cljs.core.name.call(null,classes));if(cljs.core.seq.call(null,classes__$1))
{var temp__4090__auto___6167 = elem__$1.classList;if(cljs.core.truth_(temp__4090__auto___6167))
{var class_list_6168 = temp__4090__auto___6167;var seq__6155_6169 = cljs.core.seq.call(null,classes__$1.split(/\s+/));var chunk__6156_6170 = null;var count__6157_6171 = 0;var i__6158_6172 = 0;while(true){
if((i__6158_6172 < count__6157_6171))
{var class_6173 = cljs.core._nth.call(null,chunk__6156_6170,i__6158_6172);class_list_6168.add(class_6173);
{
var G__6174 = seq__6155_6169;
var G__6175 = chunk__6156_6170;
var G__6176 = count__6157_6171;
var G__6177 = (i__6158_6172 + 1);
seq__6155_6169 = G__6174;
chunk__6156_6170 = G__6175;
count__6157_6171 = G__6176;
i__6158_6172 = G__6177;
continue;
}
} else
{var temp__4092__auto___6178 = cljs.core.seq.call(null,seq__6155_6169);if(temp__4092__auto___6178)
{var seq__6155_6179__$1 = temp__4092__auto___6178;if(cljs.core.chunked_seq_QMARK_.call(null,seq__6155_6179__$1))
{var c__3613__auto___6180 = cljs.core.chunk_first.call(null,seq__6155_6179__$1);{
var G__6181 = cljs.core.chunk_rest.call(null,seq__6155_6179__$1);
var G__6182 = c__3613__auto___6180;
var G__6183 = cljs.core.count.call(null,c__3613__auto___6180);
var G__6184 = 0;
seq__6155_6169 = G__6181;
chunk__6156_6170 = G__6182;
count__6157_6171 = G__6183;
i__6158_6172 = G__6184;
continue;
}
} else
{var class_6185 = cljs.core.first.call(null,seq__6155_6179__$1);class_list_6168.add(class_6185);
{
var G__6186 = cljs.core.next.call(null,seq__6155_6179__$1);
var G__6187 = null;
var G__6188 = 0;
var G__6189 = 0;
seq__6155_6169 = G__6186;
chunk__6156_6170 = G__6187;
count__6157_6171 = G__6188;
i__6158_6172 = G__6189;
continue;
}
}
} else
{}
}
break;
}
} else
{var class_name_6190 = elem__$1.className;var seq__6159_6191 = cljs.core.seq.call(null,classes__$1.split(/\s+/));var chunk__6160_6192 = null;var count__6161_6193 = 0;var i__6162_6194 = 0;while(true){
if((i__6162_6194 < count__6161_6193))
{var class_6195 = cljs.core._nth.call(null,chunk__6160_6192,i__6162_6194);if(cljs.core.truth_(dommy.attrs.class_index.call(null,class_name_6190,class_6195)))
{} else
{elem__$1.className = (((class_name_6190 === ""))?class_6195:[cljs.core.str(class_name_6190),cljs.core.str(" "),cljs.core.str(class_6195)].join(''));
}
{
var G__6196 = seq__6159_6191;
var G__6197 = chunk__6160_6192;
var G__6198 = count__6161_6193;
var G__6199 = (i__6162_6194 + 1);
seq__6159_6191 = G__6196;
chunk__6160_6192 = G__6197;
count__6161_6193 = G__6198;
i__6162_6194 = G__6199;
continue;
}
} else
{var temp__4092__auto___6200 = cljs.core.seq.call(null,seq__6159_6191);if(temp__4092__auto___6200)
{var seq__6159_6201__$1 = temp__4092__auto___6200;if(cljs.core.chunked_seq_QMARK_.call(null,seq__6159_6201__$1))
{var c__3613__auto___6202 = cljs.core.chunk_first.call(null,seq__6159_6201__$1);{
var G__6203 = cljs.core.chunk_rest.call(null,seq__6159_6201__$1);
var G__6204 = c__3613__auto___6202;
var G__6205 = cljs.core.count.call(null,c__3613__auto___6202);
var G__6206 = 0;
seq__6159_6191 = G__6203;
chunk__6160_6192 = G__6204;
count__6161_6193 = G__6205;
i__6162_6194 = G__6206;
continue;
}
} else
{var class_6207 = cljs.core.first.call(null,seq__6159_6201__$1);if(cljs.core.truth_(dommy.attrs.class_index.call(null,class_name_6190,class_6207)))
{} else
{elem__$1.className = (((class_name_6190 === ""))?class_6207:[cljs.core.str(class_name_6190),cljs.core.str(" "),cljs.core.str(class_6207)].join(''));
}
{
var G__6208 = cljs.core.next.call(null,seq__6159_6201__$1);
var G__6209 = null;
var G__6210 = 0;
var G__6211 = 0;
seq__6159_6191 = G__6208;
chunk__6160_6192 = G__6209;
count__6161_6193 = G__6210;
i__6162_6194 = G__6211;
continue;
}
}
} else
{}
}
break;
}
}
} else
{}
return elem__$1;
});
var add_class_BANG___3 = (function() { 
var G__6212__delegate = function (elem,classes,more_classes){var elem__$1 = dommy.template.__GT_node_like.call(null,elem);var seq__6163_6213 = cljs.core.seq.call(null,cljs.core.conj.call(null,more_classes,classes));var chunk__6164_6214 = null;var count__6165_6215 = 0;var i__6166_6216 = 0;while(true){
if((i__6166_6216 < count__6165_6215))
{var c_6217 = cljs.core._nth.call(null,chunk__6164_6214,i__6166_6216);add_class_BANG_.call(null,elem__$1,c_6217);
{
var G__6218 = seq__6163_6213;
var G__6219 = chunk__6164_6214;
var G__6220 = count__6165_6215;
var G__6221 = (i__6166_6216 + 1);
seq__6163_6213 = G__6218;
chunk__6164_6214 = G__6219;
count__6165_6215 = G__6220;
i__6166_6216 = G__6221;
continue;
}
} else
{var temp__4092__auto___6222 = cljs.core.seq.call(null,seq__6163_6213);if(temp__4092__auto___6222)
{var seq__6163_6223__$1 = temp__4092__auto___6222;if(cljs.core.chunked_seq_QMARK_.call(null,seq__6163_6223__$1))
{var c__3613__auto___6224 = cljs.core.chunk_first.call(null,seq__6163_6223__$1);{
var G__6225 = cljs.core.chunk_rest.call(null,seq__6163_6223__$1);
var G__6226 = c__3613__auto___6224;
var G__6227 = cljs.core.count.call(null,c__3613__auto___6224);
var G__6228 = 0;
seq__6163_6213 = G__6225;
chunk__6164_6214 = G__6226;
count__6165_6215 = G__6227;
i__6166_6216 = G__6228;
continue;
}
} else
{var c_6229 = cljs.core.first.call(null,seq__6163_6223__$1);add_class_BANG_.call(null,elem__$1,c_6229);
{
var G__6230 = cljs.core.next.call(null,seq__6163_6223__$1);
var G__6231 = null;
var G__6232 = 0;
var G__6233 = 0;
seq__6163_6213 = G__6230;
chunk__6164_6214 = G__6231;
count__6165_6215 = G__6232;
i__6166_6216 = G__6233;
continue;
}
}
} else
{}
}
break;
}
return elem__$1;
};
var G__6212 = function (elem,classes,var_args){
var more_classes = null;if (arguments.length > 2) {
  more_classes = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return G__6212__delegate.call(this,elem,classes,more_classes);};
G__6212.cljs$lang$maxFixedArity = 2;
G__6212.cljs$lang$applyTo = (function (arglist__6234){
var elem = cljs.core.first(arglist__6234);
arglist__6234 = cljs.core.next(arglist__6234);
var classes = cljs.core.first(arglist__6234);
var more_classes = cljs.core.rest(arglist__6234);
return G__6212__delegate(elem,classes,more_classes);
});
G__6212.cljs$core$IFn$_invoke$arity$variadic = G__6212__delegate;
return G__6212;
})()
;
add_class_BANG_ = function(elem,classes,var_args){
var more_classes = var_args;
switch(arguments.length){
case 2:
return add_class_BANG___2.call(this,elem,classes);
default:
return add_class_BANG___3.cljs$core$IFn$_invoke$arity$variadic(elem,classes, cljs.core.array_seq(arguments, 2));
}
throw(new Error('Invalid arity: ' + arguments.length));
};
add_class_BANG_.cljs$lang$maxFixedArity = 2;
add_class_BANG_.cljs$lang$applyTo = add_class_BANG___3.cljs$lang$applyTo;
add_class_BANG_.cljs$core$IFn$_invoke$arity$2 = add_class_BANG___2;
add_class_BANG_.cljs$core$IFn$_invoke$arity$variadic = add_class_BANG___3.cljs$core$IFn$_invoke$arity$variadic;
return add_class_BANG_;
})()
;
dommy.attrs.remove_class_str = (function remove_class_str(init_class_name,class$){var class_name = init_class_name;while(true){
var class_len = class_name.length;var temp__4090__auto__ = dommy.attrs.class_index.call(null,class_name,class$);if(cljs.core.truth_(temp__4090__auto__))
{var i = temp__4090__auto__;{
var G__6235 = (function (){var end = (i + class$.length);return [cljs.core.str((((end < class_len))?[cljs.core.str(class_name.substring(0,i)),cljs.core.str(class_name.substr((end + 1)))].join(''):class_name.substring(0,(i - 1))))].join('');
})();
class_name = G__6235;
continue;
}
} else
{return class_name;
}
break;
}
});
/**
* remove class from and returns `elem`
* @param {...*} var_args
*/
dommy.attrs.remove_class_BANG_ = (function() {
var remove_class_BANG_ = null;
var remove_class_BANG___2 = (function (elem,class$){var elem__$1 = dommy.template.__GT_node_like.call(null,elem);var class$__$1 = cljs.core.name.call(null,class$);var temp__4090__auto___6244 = elem__$1.classList;if(cljs.core.truth_(temp__4090__auto___6244))
{var class_list_6245 = temp__4090__auto___6244;class_list_6245.remove(class$__$1);
} else
{var class_name_6246 = elem__$1.className;var new_class_name_6247 = dommy.attrs.remove_class_str.call(null,class_name_6246,class$__$1);if((class_name_6246 === new_class_name_6247))
{} else
{elem__$1.className = new_class_name_6247;
}
}
return elem__$1;
});
var remove_class_BANG___3 = (function() { 
var G__6248__delegate = function (elem,class$,classes){var elem__$1 = dommy.template.__GT_node_like.call(null,elem);var seq__6240 = cljs.core.seq.call(null,cljs.core.conj.call(null,classes,class$));var chunk__6241 = null;var count__6242 = 0;var i__6243 = 0;while(true){
if((i__6243 < count__6242))
{var c = cljs.core._nth.call(null,chunk__6241,i__6243);remove_class_BANG_.call(null,elem__$1,c);
{
var G__6249 = seq__6240;
var G__6250 = chunk__6241;
var G__6251 = count__6242;
var G__6252 = (i__6243 + 1);
seq__6240 = G__6249;
chunk__6241 = G__6250;
count__6242 = G__6251;
i__6243 = G__6252;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__6240);if(temp__4092__auto__)
{var seq__6240__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__6240__$1))
{var c__3613__auto__ = cljs.core.chunk_first.call(null,seq__6240__$1);{
var G__6253 = cljs.core.chunk_rest.call(null,seq__6240__$1);
var G__6254 = c__3613__auto__;
var G__6255 = cljs.core.count.call(null,c__3613__auto__);
var G__6256 = 0;
seq__6240 = G__6253;
chunk__6241 = G__6254;
count__6242 = G__6255;
i__6243 = G__6256;
continue;
}
} else
{var c = cljs.core.first.call(null,seq__6240__$1);remove_class_BANG_.call(null,elem__$1,c);
{
var G__6257 = cljs.core.next.call(null,seq__6240__$1);
var G__6258 = null;
var G__6259 = 0;
var G__6260 = 0;
seq__6240 = G__6257;
chunk__6241 = G__6258;
count__6242 = G__6259;
i__6243 = G__6260;
continue;
}
}
} else
{return null;
}
}
break;
}
};
var G__6248 = function (elem,class$,var_args){
var classes = null;if (arguments.length > 2) {
  classes = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return G__6248__delegate.call(this,elem,class$,classes);};
G__6248.cljs$lang$maxFixedArity = 2;
G__6248.cljs$lang$applyTo = (function (arglist__6261){
var elem = cljs.core.first(arglist__6261);
arglist__6261 = cljs.core.next(arglist__6261);
var class$ = cljs.core.first(arglist__6261);
var classes = cljs.core.rest(arglist__6261);
return G__6248__delegate(elem,class$,classes);
});
G__6248.cljs$core$IFn$_invoke$arity$variadic = G__6248__delegate;
return G__6248;
})()
;
remove_class_BANG_ = function(elem,class$,var_args){
var classes = var_args;
switch(arguments.length){
case 2:
return remove_class_BANG___2.call(this,elem,class$);
default:
return remove_class_BANG___3.cljs$core$IFn$_invoke$arity$variadic(elem,class$, cljs.core.array_seq(arguments, 2));
}
throw(new Error('Invalid arity: ' + arguments.length));
};
remove_class_BANG_.cljs$lang$maxFixedArity = 2;
remove_class_BANG_.cljs$lang$applyTo = remove_class_BANG___3.cljs$lang$applyTo;
remove_class_BANG_.cljs$core$IFn$_invoke$arity$2 = remove_class_BANG___2;
remove_class_BANG_.cljs$core$IFn$_invoke$arity$variadic = remove_class_BANG___3.cljs$core$IFn$_invoke$arity$variadic;
return remove_class_BANG_;
})()
;
/**
* (toggle-class! elem class) will add-class! if elem does not have class
* and remove-class! otherwise.
* (toggle-class! elem class add?) will add-class! if add? is truthy,
* otherwise it will remove-class!
*/
dommy.attrs.toggle_class_BANG_ = (function() {
var toggle_class_BANG_ = null;
var toggle_class_BANG___2 = (function (elem,class$){var elem__$1 = dommy.template.__GT_node_like.call(null,elem);var temp__4090__auto___6262 = elem__$1.classList;if(cljs.core.truth_(temp__4090__auto___6262))
{var class_list_6263 = temp__4090__auto___6262;class_list_6263.toggle(class$);
} else
{toggle_class_BANG_.call(null,elem__$1,class$,!(dommy.attrs.has_class_QMARK_.call(null,elem__$1,class$)));
}
return elem__$1;
});
var toggle_class_BANG___3 = (function (elem,class$,add_QMARK_){var elem__$1 = dommy.template.__GT_node_like.call(null,elem);if(add_QMARK_)
{dommy.attrs.add_class_BANG_.call(null,elem__$1,class$);
} else
{dommy.attrs.remove_class_BANG_.call(null,elem__$1,class$);
}
return elem__$1;
});
toggle_class_BANG_ = function(elem,class$,add_QMARK_){
switch(arguments.length){
case 2:
return toggle_class_BANG___2.call(this,elem,class$);
case 3:
return toggle_class_BANG___3.call(this,elem,class$,add_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
toggle_class_BANG_.cljs$core$IFn$_invoke$arity$2 = toggle_class_BANG___2;
toggle_class_BANG_.cljs$core$IFn$_invoke$arity$3 = toggle_class_BANG___3;
return toggle_class_BANG_;
})()
;
dommy.attrs.style_str = (function style_str(x){if(typeof x === 'string')
{return x;
} else
{return clojure.string.join.call(null," ",cljs.core.map.call(null,(function (p__6266){var vec__6267 = p__6266;var k = cljs.core.nth.call(null,vec__6267,0,null);var v = cljs.core.nth.call(null,vec__6267,1,null);return [cljs.core.str(cljs.core.name.call(null,k)),cljs.core.str(":"),cljs.core.str(cljs.core.name.call(null,v)),cljs.core.str(";")].join('');
}),x));
}
});
/**
* @param {...*} var_args
*/
dommy.attrs.set_style_BANG_ = (function() { 
var set_style_BANG___delegate = function (elem,kvs){if(cljs.core.even_QMARK_.call(null,cljs.core.count.call(null,kvs)))
{} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"even?","even?",-1543640034,null),cljs.core.list(new cljs.core.Symbol(null,"count","count",-1545680184,null),new cljs.core.Symbol(null,"kvs","kvs",-1640424927,null)))))].join('')));
}
var elem__$1 = dommy.template.__GT_node_like.call(null,elem);var style = elem__$1.style;var seq__6274_6280 = cljs.core.seq.call(null,cljs.core.partition.call(null,2,kvs));var chunk__6275_6281 = null;var count__6276_6282 = 0;var i__6277_6283 = 0;while(true){
if((i__6277_6283 < count__6276_6282))
{var vec__6278_6284 = cljs.core._nth.call(null,chunk__6275_6281,i__6277_6283);var k_6285 = cljs.core.nth.call(null,vec__6278_6284,0,null);var v_6286 = cljs.core.nth.call(null,vec__6278_6284,1,null);(style[cljs.core.name.call(null,k_6285)] = v_6286);
{
var G__6287 = seq__6274_6280;
var G__6288 = chunk__6275_6281;
var G__6289 = count__6276_6282;
var G__6290 = (i__6277_6283 + 1);
seq__6274_6280 = G__6287;
chunk__6275_6281 = G__6288;
count__6276_6282 = G__6289;
i__6277_6283 = G__6290;
continue;
}
} else
{var temp__4092__auto___6291 = cljs.core.seq.call(null,seq__6274_6280);if(temp__4092__auto___6291)
{var seq__6274_6292__$1 = temp__4092__auto___6291;if(cljs.core.chunked_seq_QMARK_.call(null,seq__6274_6292__$1))
{var c__3613__auto___6293 = cljs.core.chunk_first.call(null,seq__6274_6292__$1);{
var G__6294 = cljs.core.chunk_rest.call(null,seq__6274_6292__$1);
var G__6295 = c__3613__auto___6293;
var G__6296 = cljs.core.count.call(null,c__3613__auto___6293);
var G__6297 = 0;
seq__6274_6280 = G__6294;
chunk__6275_6281 = G__6295;
count__6276_6282 = G__6296;
i__6277_6283 = G__6297;
continue;
}
} else
{var vec__6279_6298 = cljs.core.first.call(null,seq__6274_6292__$1);var k_6299 = cljs.core.nth.call(null,vec__6279_6298,0,null);var v_6300 = cljs.core.nth.call(null,vec__6279_6298,1,null);(style[cljs.core.name.call(null,k_6299)] = v_6300);
{
var G__6301 = cljs.core.next.call(null,seq__6274_6292__$1);
var G__6302 = null;
var G__6303 = 0;
var G__6304 = 0;
seq__6274_6280 = G__6301;
chunk__6275_6281 = G__6302;
count__6276_6282 = G__6303;
i__6277_6283 = G__6304;
continue;
}
}
} else
{}
}
break;
}
return elem__$1;
};
var set_style_BANG_ = function (elem,var_args){
var kvs = null;if (arguments.length > 1) {
  kvs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return set_style_BANG___delegate.call(this,elem,kvs);};
set_style_BANG_.cljs$lang$maxFixedArity = 1;
set_style_BANG_.cljs$lang$applyTo = (function (arglist__6305){
var elem = cljs.core.first(arglist__6305);
var kvs = cljs.core.rest(arglist__6305);
return set_style_BANG___delegate(elem,kvs);
});
set_style_BANG_.cljs$core$IFn$_invoke$arity$variadic = set_style_BANG___delegate;
return set_style_BANG_;
})()
;
dommy.attrs.style = (function style(elem,k){if(cljs.core.truth_(k))
{} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,new cljs.core.Symbol(null,"k","k",-1640531420,null)))].join('')));
}
return (window.getComputedStyle(dommy.template.__GT_node_like.call(null,elem))[cljs.core.name.call(null,k)]);
});
/**
* @param {...*} var_args
*/
dommy.attrs.set_px_BANG_ = (function() { 
var set_px_BANG___delegate = function (elem,kvs){if(cljs.core.even_QMARK_.call(null,cljs.core.count.call(null,kvs)))
{} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"even?","even?",-1543640034,null),cljs.core.list(new cljs.core.Symbol(null,"count","count",-1545680184,null),new cljs.core.Symbol(null,"kvs","kvs",-1640424927,null)))))].join('')));
}
var elem__$1 = dommy.template.__GT_node_like.call(null,elem);var seq__6312_6318 = cljs.core.seq.call(null,cljs.core.partition.call(null,2,kvs));var chunk__6313_6319 = null;var count__6314_6320 = 0;var i__6315_6321 = 0;while(true){
if((i__6315_6321 < count__6314_6320))
{var vec__6316_6322 = cljs.core._nth.call(null,chunk__6313_6319,i__6315_6321);var k_6323 = cljs.core.nth.call(null,vec__6316_6322,0,null);var v_6324 = cljs.core.nth.call(null,vec__6316_6322,1,null);dommy.attrs.set_style_BANG_.call(null,elem__$1,k_6323,[cljs.core.str(v_6324),cljs.core.str("px")].join(''));
{
var G__6325 = seq__6312_6318;
var G__6326 = chunk__6313_6319;
var G__6327 = count__6314_6320;
var G__6328 = (i__6315_6321 + 1);
seq__6312_6318 = G__6325;
chunk__6313_6319 = G__6326;
count__6314_6320 = G__6327;
i__6315_6321 = G__6328;
continue;
}
} else
{var temp__4092__auto___6329 = cljs.core.seq.call(null,seq__6312_6318);if(temp__4092__auto___6329)
{var seq__6312_6330__$1 = temp__4092__auto___6329;if(cljs.core.chunked_seq_QMARK_.call(null,seq__6312_6330__$1))
{var c__3613__auto___6331 = cljs.core.chunk_first.call(null,seq__6312_6330__$1);{
var G__6332 = cljs.core.chunk_rest.call(null,seq__6312_6330__$1);
var G__6333 = c__3613__auto___6331;
var G__6334 = cljs.core.count.call(null,c__3613__auto___6331);
var G__6335 = 0;
seq__6312_6318 = G__6332;
chunk__6313_6319 = G__6333;
count__6314_6320 = G__6334;
i__6315_6321 = G__6335;
continue;
}
} else
{var vec__6317_6336 = cljs.core.first.call(null,seq__6312_6330__$1);var k_6337 = cljs.core.nth.call(null,vec__6317_6336,0,null);var v_6338 = cljs.core.nth.call(null,vec__6317_6336,1,null);dommy.attrs.set_style_BANG_.call(null,elem__$1,k_6337,[cljs.core.str(v_6338),cljs.core.str("px")].join(''));
{
var G__6339 = cljs.core.next.call(null,seq__6312_6330__$1);
var G__6340 = null;
var G__6341 = 0;
var G__6342 = 0;
seq__6312_6318 = G__6339;
chunk__6313_6319 = G__6340;
count__6314_6320 = G__6341;
i__6315_6321 = G__6342;
continue;
}
}
} else
{}
}
break;
}
return elem__$1;
};
var set_px_BANG_ = function (elem,var_args){
var kvs = null;if (arguments.length > 1) {
  kvs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return set_px_BANG___delegate.call(this,elem,kvs);};
set_px_BANG_.cljs$lang$maxFixedArity = 1;
set_px_BANG_.cljs$lang$applyTo = (function (arglist__6343){
var elem = cljs.core.first(arglist__6343);
var kvs = cljs.core.rest(arglist__6343);
return set_px_BANG___delegate(elem,kvs);
});
set_px_BANG_.cljs$core$IFn$_invoke$arity$variadic = set_px_BANG___delegate;
return set_px_BANG_;
})()
;
dommy.attrs.px = (function px(elem,k){var pixels = dommy.attrs.style.call(null,dommy.template.__GT_node_like.call(null,elem),k);if(cljs.core.seq.call(null,pixels))
{return parseInt(pixels);
} else
{return null;
}
});
/**
* Sets dom attributes on and returns `elem`.
* Attributes without values will be set to "true":
* 
* (set-attr! elem :disabled)
* 
* With values, the function takes variadic kv pairs:
* 
* (set-attr! elem :id "some-id"
* :name "some-name")
* @param {...*} var_args
*/
dommy.attrs.set_attr_BANG_ = (function() {
var set_attr_BANG_ = null;
var set_attr_BANG___2 = (function (elem,k){return set_attr_BANG_.call(null,dommy.template.__GT_node_like.call(null,elem),k,"true");
});
var set_attr_BANG___3 = (function (elem,k,v){if(cljs.core.truth_(v))
{if(cljs.core.fn_QMARK_.call(null,v))
{var G__6352 = dommy.template.__GT_node_like.call(null,elem);(G__6352[cljs.core.name.call(null,k)] = v);
return G__6352;
} else
{var G__6353 = dommy.template.__GT_node_like.call(null,elem);G__6353.setAttribute(cljs.core.name.call(null,k),(((k === new cljs.core.Keyword(null,"style","style",1123684643)))?dommy.attrs.style_str.call(null,v):v));
return G__6353;
}
} else
{return null;
}
});
var set_attr_BANG___4 = (function() { 
var G__6360__delegate = function (elem,k,v,kvs){if(cljs.core.even_QMARK_.call(null,cljs.core.count.call(null,kvs)))
{} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"even?","even?",-1543640034,null),cljs.core.list(new cljs.core.Symbol(null,"count","count",-1545680184,null),new cljs.core.Symbol(null,"kvs","kvs",-1640424927,null)))))].join('')));
}
var elem__$1 = dommy.template.__GT_node_like.call(null,elem);var seq__6354_6361 = cljs.core.seq.call(null,cljs.core.cons.call(null,cljs.core.PersistentVector.fromArray([k,v], true),cljs.core.partition.call(null,2,kvs)));var chunk__6355_6362 = null;var count__6356_6363 = 0;var i__6357_6364 = 0;while(true){
if((i__6357_6364 < count__6356_6363))
{var vec__6358_6365 = cljs.core._nth.call(null,chunk__6355_6362,i__6357_6364);var k_6366__$1 = cljs.core.nth.call(null,vec__6358_6365,0,null);var v_6367__$1 = cljs.core.nth.call(null,vec__6358_6365,1,null);set_attr_BANG_.call(null,elem__$1,k_6366__$1,v_6367__$1);
{
var G__6368 = seq__6354_6361;
var G__6369 = chunk__6355_6362;
var G__6370 = count__6356_6363;
var G__6371 = (i__6357_6364 + 1);
seq__6354_6361 = G__6368;
chunk__6355_6362 = G__6369;
count__6356_6363 = G__6370;
i__6357_6364 = G__6371;
continue;
}
} else
{var temp__4092__auto___6372 = cljs.core.seq.call(null,seq__6354_6361);if(temp__4092__auto___6372)
{var seq__6354_6373__$1 = temp__4092__auto___6372;if(cljs.core.chunked_seq_QMARK_.call(null,seq__6354_6373__$1))
{var c__3613__auto___6374 = cljs.core.chunk_first.call(null,seq__6354_6373__$1);{
var G__6375 = cljs.core.chunk_rest.call(null,seq__6354_6373__$1);
var G__6376 = c__3613__auto___6374;
var G__6377 = cljs.core.count.call(null,c__3613__auto___6374);
var G__6378 = 0;
seq__6354_6361 = G__6375;
chunk__6355_6362 = G__6376;
count__6356_6363 = G__6377;
i__6357_6364 = G__6378;
continue;
}
} else
{var vec__6359_6379 = cljs.core.first.call(null,seq__6354_6373__$1);var k_6380__$1 = cljs.core.nth.call(null,vec__6359_6379,0,null);var v_6381__$1 = cljs.core.nth.call(null,vec__6359_6379,1,null);set_attr_BANG_.call(null,elem__$1,k_6380__$1,v_6381__$1);
{
var G__6382 = cljs.core.next.call(null,seq__6354_6373__$1);
var G__6383 = null;
var G__6384 = 0;
var G__6385 = 0;
seq__6354_6361 = G__6382;
chunk__6355_6362 = G__6383;
count__6356_6363 = G__6384;
i__6357_6364 = G__6385;
continue;
}
}
} else
{}
}
break;
}
return elem__$1;
};
var G__6360 = function (elem,k,v,var_args){
var kvs = null;if (arguments.length > 3) {
  kvs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);} 
return G__6360__delegate.call(this,elem,k,v,kvs);};
G__6360.cljs$lang$maxFixedArity = 3;
G__6360.cljs$lang$applyTo = (function (arglist__6386){
var elem = cljs.core.first(arglist__6386);
arglist__6386 = cljs.core.next(arglist__6386);
var k = cljs.core.first(arglist__6386);
arglist__6386 = cljs.core.next(arglist__6386);
var v = cljs.core.first(arglist__6386);
var kvs = cljs.core.rest(arglist__6386);
return G__6360__delegate(elem,k,v,kvs);
});
G__6360.cljs$core$IFn$_invoke$arity$variadic = G__6360__delegate;
return G__6360;
})()
;
set_attr_BANG_ = function(elem,k,v,var_args){
var kvs = var_args;
switch(arguments.length){
case 2:
return set_attr_BANG___2.call(this,elem,k);
case 3:
return set_attr_BANG___3.call(this,elem,k,v);
default:
return set_attr_BANG___4.cljs$core$IFn$_invoke$arity$variadic(elem,k,v, cljs.core.array_seq(arguments, 3));
}
throw(new Error('Invalid arity: ' + arguments.length));
};
set_attr_BANG_.cljs$lang$maxFixedArity = 3;
set_attr_BANG_.cljs$lang$applyTo = set_attr_BANG___4.cljs$lang$applyTo;
set_attr_BANG_.cljs$core$IFn$_invoke$arity$2 = set_attr_BANG___2;
set_attr_BANG_.cljs$core$IFn$_invoke$arity$3 = set_attr_BANG___3;
set_attr_BANG_.cljs$core$IFn$_invoke$arity$variadic = set_attr_BANG___4.cljs$core$IFn$_invoke$arity$variadic;
return set_attr_BANG_;
})()
;
/**
* @param {...*} var_args
*/
dommy.attrs.remove_attr_BANG_ = (function() {
var remove_attr_BANG_ = null;
var remove_attr_BANG___2 = (function (elem,k){var elem__$1 = dommy.template.__GT_node_like.call(null,elem);if(cljs.core.truth_(cljs.core.PersistentHashSet.fromArray([new cljs.core.Keyword(null,"class","class",1108647146),null,new cljs.core.Keyword(null,"classes","classes",1867525016),null], true).call(null,k)))
{elem__$1.className = "";
} else
{elem__$1.removeAttribute(cljs.core.name.call(null,k));
}
return elem__$1;
});
var remove_attr_BANG___3 = (function() { 
var G__6395__delegate = function (elem,k,ks){var elem__$1 = dommy.template.__GT_node_like.call(null,elem);var seq__6391_6396 = cljs.core.seq.call(null,cljs.core.cons.call(null,k,ks));var chunk__6392_6397 = null;var count__6393_6398 = 0;var i__6394_6399 = 0;while(true){
if((i__6394_6399 < count__6393_6398))
{var k_6400__$1 = cljs.core._nth.call(null,chunk__6392_6397,i__6394_6399);remove_attr_BANG_.call(null,elem__$1,k_6400__$1);
{
var G__6401 = seq__6391_6396;
var G__6402 = chunk__6392_6397;
var G__6403 = count__6393_6398;
var G__6404 = (i__6394_6399 + 1);
seq__6391_6396 = G__6401;
chunk__6392_6397 = G__6402;
count__6393_6398 = G__6403;
i__6394_6399 = G__6404;
continue;
}
} else
{var temp__4092__auto___6405 = cljs.core.seq.call(null,seq__6391_6396);if(temp__4092__auto___6405)
{var seq__6391_6406__$1 = temp__4092__auto___6405;if(cljs.core.chunked_seq_QMARK_.call(null,seq__6391_6406__$1))
{var c__3613__auto___6407 = cljs.core.chunk_first.call(null,seq__6391_6406__$1);{
var G__6408 = cljs.core.chunk_rest.call(null,seq__6391_6406__$1);
var G__6409 = c__3613__auto___6407;
var G__6410 = cljs.core.count.call(null,c__3613__auto___6407);
var G__6411 = 0;
seq__6391_6396 = G__6408;
chunk__6392_6397 = G__6409;
count__6393_6398 = G__6410;
i__6394_6399 = G__6411;
continue;
}
} else
{var k_6412__$1 = cljs.core.first.call(null,seq__6391_6406__$1);remove_attr_BANG_.call(null,elem__$1,k_6412__$1);
{
var G__6413 = cljs.core.next.call(null,seq__6391_6406__$1);
var G__6414 = null;
var G__6415 = 0;
var G__6416 = 0;
seq__6391_6396 = G__6413;
chunk__6392_6397 = G__6414;
count__6393_6398 = G__6415;
i__6394_6399 = G__6416;
continue;
}
}
} else
{}
}
break;
}
return elem__$1;
};
var G__6395 = function (elem,k,var_args){
var ks = null;if (arguments.length > 2) {
  ks = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return G__6395__delegate.call(this,elem,k,ks);};
G__6395.cljs$lang$maxFixedArity = 2;
G__6395.cljs$lang$applyTo = (function (arglist__6417){
var elem = cljs.core.first(arglist__6417);
arglist__6417 = cljs.core.next(arglist__6417);
var k = cljs.core.first(arglist__6417);
var ks = cljs.core.rest(arglist__6417);
return G__6395__delegate(elem,k,ks);
});
G__6395.cljs$core$IFn$_invoke$arity$variadic = G__6395__delegate;
return G__6395;
})()
;
remove_attr_BANG_ = function(elem,k,var_args){
var ks = var_args;
switch(arguments.length){
case 2:
return remove_attr_BANG___2.call(this,elem,k);
default:
return remove_attr_BANG___3.cljs$core$IFn$_invoke$arity$variadic(elem,k, cljs.core.array_seq(arguments, 2));
}
throw(new Error('Invalid arity: ' + arguments.length));
};
remove_attr_BANG_.cljs$lang$maxFixedArity = 2;
remove_attr_BANG_.cljs$lang$applyTo = remove_attr_BANG___3.cljs$lang$applyTo;
remove_attr_BANG_.cljs$core$IFn$_invoke$arity$2 = remove_attr_BANG___2;
remove_attr_BANG_.cljs$core$IFn$_invoke$arity$variadic = remove_attr_BANG___3.cljs$core$IFn$_invoke$arity$variadic;
return remove_attr_BANG_;
})()
;
dommy.attrs.attr = (function attr(elem,k){if(cljs.core.truth_(k))
{return dommy.template.__GT_node_like.call(null,elem).getAttribute(cljs.core.name.call(null,k));
} else
{return null;
}
});
dommy.attrs.hidden_QMARK_ = (function hidden_QMARK_(elem){return ("none" === dommy.template.__GT_node_like.call(null,elem).style.display);
});
/**
* Display or hide the given `elem`. Takes an optional boolean `show?`
* indicating whether to show or hide `elem`.
*/
dommy.attrs.toggle_BANG_ = (function() {
var toggle_BANG_ = null;
var toggle_BANG___1 = (function (elem){var elem__$1 = dommy.template.__GT_node_like.call(null,elem);toggle_BANG_.call(null,elem__$1,dommy.attrs.hidden_QMARK_.call(null,elem__$1));
return elem__$1;
});
var toggle_BANG___2 = (function (elem,show_QMARK_){var G__6419 = dommy.template.__GT_node_like.call(null,elem);G__6419.style.display = ((show_QMARK_)?"":"none");
return G__6419;
});
toggle_BANG_ = function(elem,show_QMARK_){
switch(arguments.length){
case 1:
return toggle_BANG___1.call(this,elem);
case 2:
return toggle_BANG___2.call(this,elem,show_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
toggle_BANG_.cljs$core$IFn$_invoke$arity$1 = toggle_BANG___1;
toggle_BANG_.cljs$core$IFn$_invoke$arity$2 = toggle_BANG___2;
return toggle_BANG_;
})()
;
dommy.attrs.hide_BANG_ = (function hide_BANG_(elem){var G__6421 = dommy.template.__GT_node_like.call(null,elem);dommy.attrs.toggle_BANG_.call(null,G__6421,false);
return G__6421;
});
dommy.attrs.show_BANG_ = (function show_BANG_(elem){var G__6423 = dommy.template.__GT_node_like.call(null,elem);dommy.attrs.toggle_BANG_.call(null,G__6423,true);
return G__6423;
});
/**
* Returns a map of the bounding client rect of `elem`
* as a map with [:top :left :right :bottom :width :height]
*/
dommy.attrs.bounding_client_rect = (function bounding_client_rect(elem){return cljs.core.js__GT_clj.call(null,(function (){var G__6425 = dommy.template.__GT_node_like.call(null,elem).getBoundingClientRect();(G__6425["constructor"] = Object);
return G__6425;
})(),new cljs.core.Keyword(null,"keywordize-keys","keywordize-keys",4191781672),true);
});
