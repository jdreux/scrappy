goog.provide('dommy.core');
goog.require('cljs.core');
goog.require('dommy.template');
goog.require('dommy.template');
goog.require('dommy.attrs');
goog.require('dommy.attrs');
goog.require('dommy.utils');
goog.require('dommy.utils');
goog.require('clojure.string');
goog.require('clojure.string');
dommy.core.has_class_QMARK_ = dommy.attrs.has_class_QMARK_;
dommy.core.add_class_BANG_ = dommy.attrs.add_class_BANG_;
dommy.core.remove_class_BANG_ = dommy.attrs.remove_class_BANG_;
dommy.core.toggle_class_BANG_ = dommy.attrs.toggle_class_BANG_;
dommy.core.set_attr_BANG_ = dommy.attrs.set_attr_BANG_;
dommy.core.set_style_BANG_ = dommy.attrs.set_style_BANG_;
dommy.core.set_px_BANG_ = dommy.attrs.set_px_BANG_;
dommy.core.px = dommy.attrs.px;
dommy.core.style_str = dommy.attrs.style_str;
dommy.core.style = dommy.attrs.style;
dommy.core.remove_attr_BANG_ = dommy.attrs.remove_attr_BANG_;
dommy.core.attr = dommy.attrs.attr;
dommy.core.hidden_QMARK_ = dommy.attrs.hidden_QMARK_;
dommy.core.toggle_BANG_ = dommy.attrs.toggle_BANG_;
dommy.core.hide_BANG_ = dommy.attrs.hide_BANG_;
dommy.core.show_BANG_ = dommy.attrs.show_BANG_;
dommy.core.bounding_client_rect = dommy.attrs.bounding_client_rect;
dommy.core.dissoc_in = dommy.utils.dissoc_in;
dommy.core.__GT_Array = dommy.utils.__GT_Array;
dommy.core.set_html_BANG_ = (function set_html_BANG_(elem,html){var elem__$1 = dommy.template.__GT_node_like.call(null,elem);elem__$1.innerHTML = html;
return elem__$1;
});
dommy.core.html = (function html(elem){return dommy.template.__GT_node_like.call(null,elem).innerHTML;
});
dommy.core.set_text_BANG_ = (function set_text_BANG_(elem,text){var elem__$1 = dommy.template.__GT_node_like.call(null,elem);var prop = (cljs.core.truth_(elem__$1.textContent)?"textContent":"innerText");(elem__$1[prop] = text);
return elem__$1;
});
dommy.core.text = (function text(elem){var elem__$1 = dommy.template.__GT_node_like.call(null,elem);var or__3943__auto__ = elem__$1.textContent;if(cljs.core.truth_(or__3943__auto__))
{return or__3943__auto__;
} else
{return elem__$1.innerText;
}
});
dommy.core.value = (function value(elem){return dommy.template.__GT_node_like.call(null,elem).value;
});
dommy.core.set_value_BANG_ = (function set_value_BANG_(elem,value){var elem__$1 = dommy.template.__GT_node_like.call(null,elem);elem__$1.value = value;
return elem__$1;
});
/**
* append `child` to `parent`. 'parent' and 'child' should be node-like
* (work with dommy.template/->node-like). The node-like projection
* of parent is returned after appending child.
* @param {...*} var_args
*/
dommy.core.append_BANG_ = (function() {
var append_BANG_ = null;
var append_BANG___2 = (function (parent,child){var G__5610 = dommy.template.__GT_node_like.call(null,parent);G__5610.appendChild(dommy.template.__GT_node_like.call(null,child));
return G__5610;
});
var append_BANG___3 = (function() { 
var G__5615__delegate = function (parent,child,more_children){var parent__$1 = dommy.template.__GT_node_like.call(null,parent);var seq__5611_5616 = cljs.core.seq.call(null,cljs.core.cons.call(null,child,more_children));var chunk__5612_5617 = null;var count__5613_5618 = 0;var i__5614_5619 = 0;while(true){
if((i__5614_5619 < count__5613_5618))
{var c_5620 = cljs.core._nth.call(null,chunk__5612_5617,i__5614_5619);append_BANG_.call(null,parent__$1,c_5620);
{
var G__5621 = seq__5611_5616;
var G__5622 = chunk__5612_5617;
var G__5623 = count__5613_5618;
var G__5624 = (i__5614_5619 + 1);
seq__5611_5616 = G__5621;
chunk__5612_5617 = G__5622;
count__5613_5618 = G__5623;
i__5614_5619 = G__5624;
continue;
}
} else
{var temp__4092__auto___5625 = cljs.core.seq.call(null,seq__5611_5616);if(temp__4092__auto___5625)
{var seq__5611_5626__$1 = temp__4092__auto___5625;if(cljs.core.chunked_seq_QMARK_.call(null,seq__5611_5626__$1))
{var c__3613__auto___5627 = cljs.core.chunk_first.call(null,seq__5611_5626__$1);{
var G__5628 = cljs.core.chunk_rest.call(null,seq__5611_5626__$1);
var G__5629 = c__3613__auto___5627;
var G__5630 = cljs.core.count.call(null,c__3613__auto___5627);
var G__5631 = 0;
seq__5611_5616 = G__5628;
chunk__5612_5617 = G__5629;
count__5613_5618 = G__5630;
i__5614_5619 = G__5631;
continue;
}
} else
{var c_5632 = cljs.core.first.call(null,seq__5611_5626__$1);append_BANG_.call(null,parent__$1,c_5632);
{
var G__5633 = cljs.core.next.call(null,seq__5611_5626__$1);
var G__5634 = null;
var G__5635 = 0;
var G__5636 = 0;
seq__5611_5616 = G__5633;
chunk__5612_5617 = G__5634;
count__5613_5618 = G__5635;
i__5614_5619 = G__5636;
continue;
}
}
} else
{}
}
break;
}
return parent__$1;
};
var G__5615 = function (parent,child,var_args){
var more_children = null;if (arguments.length > 2) {
  more_children = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return G__5615__delegate.call(this,parent,child,more_children);};
G__5615.cljs$lang$maxFixedArity = 2;
G__5615.cljs$lang$applyTo = (function (arglist__5637){
var parent = cljs.core.first(arglist__5637);
arglist__5637 = cljs.core.next(arglist__5637);
var child = cljs.core.first(arglist__5637);
var more_children = cljs.core.rest(arglist__5637);
return G__5615__delegate(parent,child,more_children);
});
G__5615.cljs$core$IFn$_invoke$arity$variadic = G__5615__delegate;
return G__5615;
})()
;
append_BANG_ = function(parent,child,var_args){
var more_children = var_args;
switch(arguments.length){
case 2:
return append_BANG___2.call(this,parent,child);
default:
return append_BANG___3.cljs$core$IFn$_invoke$arity$variadic(parent,child, cljs.core.array_seq(arguments, 2));
}
throw(new Error('Invalid arity: ' + arguments.length));
};
append_BANG_.cljs$lang$maxFixedArity = 2;
append_BANG_.cljs$lang$applyTo = append_BANG___3.cljs$lang$applyTo;
append_BANG_.cljs$core$IFn$_invoke$arity$2 = append_BANG___2;
append_BANG_.cljs$core$IFn$_invoke$arity$variadic = append_BANG___3.cljs$core$IFn$_invoke$arity$variadic;
return append_BANG_;
})()
;
/**
* prepend `child` to `parent`, both node-like
* return ->node-like projection of `parent`
* @param {...*} var_args
*/
dommy.core.prepend_BANG_ = (function() {
var prepend_BANG_ = null;
var prepend_BANG___2 = (function (parent,child){var G__5643 = dommy.template.__GT_node_like.call(null,parent);G__5643.insertBefore(dommy.template.__GT_node_like.call(null,child),parent.firstChild);
return G__5643;
});
var prepend_BANG___3 = (function() { 
var G__5648__delegate = function (parent,child,more_children){var parent__$1 = dommy.template.__GT_node_like.call(null,parent);var seq__5644_5649 = cljs.core.seq.call(null,cljs.core.cons.call(null,child,more_children));var chunk__5645_5650 = null;var count__5646_5651 = 0;var i__5647_5652 = 0;while(true){
if((i__5647_5652 < count__5646_5651))
{var c_5653 = cljs.core._nth.call(null,chunk__5645_5650,i__5647_5652);prepend_BANG_.call(null,parent__$1,c_5653);
{
var G__5654 = seq__5644_5649;
var G__5655 = chunk__5645_5650;
var G__5656 = count__5646_5651;
var G__5657 = (i__5647_5652 + 1);
seq__5644_5649 = G__5654;
chunk__5645_5650 = G__5655;
count__5646_5651 = G__5656;
i__5647_5652 = G__5657;
continue;
}
} else
{var temp__4092__auto___5658 = cljs.core.seq.call(null,seq__5644_5649);if(temp__4092__auto___5658)
{var seq__5644_5659__$1 = temp__4092__auto___5658;if(cljs.core.chunked_seq_QMARK_.call(null,seq__5644_5659__$1))
{var c__3613__auto___5660 = cljs.core.chunk_first.call(null,seq__5644_5659__$1);{
var G__5661 = cljs.core.chunk_rest.call(null,seq__5644_5659__$1);
var G__5662 = c__3613__auto___5660;
var G__5663 = cljs.core.count.call(null,c__3613__auto___5660);
var G__5664 = 0;
seq__5644_5649 = G__5661;
chunk__5645_5650 = G__5662;
count__5646_5651 = G__5663;
i__5647_5652 = G__5664;
continue;
}
} else
{var c_5665 = cljs.core.first.call(null,seq__5644_5659__$1);prepend_BANG_.call(null,parent__$1,c_5665);
{
var G__5666 = cljs.core.next.call(null,seq__5644_5659__$1);
var G__5667 = null;
var G__5668 = 0;
var G__5669 = 0;
seq__5644_5649 = G__5666;
chunk__5645_5650 = G__5667;
count__5646_5651 = G__5668;
i__5647_5652 = G__5669;
continue;
}
}
} else
{}
}
break;
}
return parent__$1;
};
var G__5648 = function (parent,child,var_args){
var more_children = null;if (arguments.length > 2) {
  more_children = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return G__5648__delegate.call(this,parent,child,more_children);};
G__5648.cljs$lang$maxFixedArity = 2;
G__5648.cljs$lang$applyTo = (function (arglist__5670){
var parent = cljs.core.first(arglist__5670);
arglist__5670 = cljs.core.next(arglist__5670);
var child = cljs.core.first(arglist__5670);
var more_children = cljs.core.rest(arglist__5670);
return G__5648__delegate(parent,child,more_children);
});
G__5648.cljs$core$IFn$_invoke$arity$variadic = G__5648__delegate;
return G__5648;
})()
;
prepend_BANG_ = function(parent,child,var_args){
var more_children = var_args;
switch(arguments.length){
case 2:
return prepend_BANG___2.call(this,parent,child);
default:
return prepend_BANG___3.cljs$core$IFn$_invoke$arity$variadic(parent,child, cljs.core.array_seq(arguments, 2));
}
throw(new Error('Invalid arity: ' + arguments.length));
};
prepend_BANG_.cljs$lang$maxFixedArity = 2;
prepend_BANG_.cljs$lang$applyTo = prepend_BANG___3.cljs$lang$applyTo;
prepend_BANG_.cljs$core$IFn$_invoke$arity$2 = prepend_BANG___2;
prepend_BANG_.cljs$core$IFn$_invoke$arity$variadic = prepend_BANG___3.cljs$core$IFn$_invoke$arity$variadic;
return prepend_BANG_;
})()
;
/**
* insert `node` before `other`, both node-like,
* `other` must have a parent. return `node`
*/
dommy.core.insert_before_BANG_ = (function insert_before_BANG_(elem,other){var actual_node = dommy.template.__GT_node_like.call(null,elem);var other__$1 = dommy.template.__GT_node_like.call(null,other);if(cljs.core.truth_(other__$1.parentNode))
{} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,".-parentNode",".-parentNode",499016324,null),new cljs.core.Symbol(null,"other","other",-1534461751,null))))].join('')));
}
other__$1.parentNode.insertBefore(actual_node,other__$1);
return actual_node;
});
/**
* insert `node` after `other`, both node-like,
* `other` must have a parent. return `node`
*/
dommy.core.insert_after_BANG_ = (function insert_after_BANG_(elem,other){var actual_node = dommy.template.__GT_node_like.call(null,elem);var other__$1 = dommy.template.__GT_node_like.call(null,other);var parent = other__$1.parentNode;var temp__4090__auto___5671 = other__$1.nextSibling;if(cljs.core.truth_(temp__4090__auto___5671))
{var next_5672 = temp__4090__auto___5671;parent.insertBefore(actual_node,next_5672);
} else
{parent.appendChild(actual_node);
}
return actual_node;
});
/**
* replace `elem` with `new`, both node-like, return node-like projection of new.
* node-like projection of elem must have parent.
*/
dommy.core.replace_BANG_ = (function replace_BANG_(elem,new$){var new$__$1 = dommy.template.__GT_node_like.call(null,new$);var elem__$1 = dommy.template.__GT_node_like.call(null,elem);if(cljs.core.truth_(elem__$1.parentNode))
{} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,".-parentNode",".-parentNode",499016324,null),new cljs.core.Symbol(null,"elem","elem",-1637415608,null))))].join('')));
}
elem__$1.parentNode.replaceChild(new$__$1,elem__$1);
return new$__$1;
});
dommy.core.replace_contents_BANG_ = (function replace_contents_BANG_(parent,node_like){var G__5674 = dommy.template.__GT_node_like.call(null,parent);G__5674.innerHTML = "";
dommy.core.append_BANG_.call(null,G__5674,node_like);
return G__5674;
});
/**
* remove node-like `elem` from parent, return node-like projection of elem
*/
dommy.core.remove_BANG_ = (function remove_BANG_(elem){var elem__$1 = dommy.template.__GT_node_like.call(null,elem);var G__5676 = elem__$1.parentNode;G__5676.removeChild(elem__$1);
return G__5676;
});
dommy.core.selector = (function selector(data){if(cljs.core.coll_QMARK_.call(null,data))
{return clojure.string.join.call(null," ",cljs.core.map.call(null,selector,data));
} else
{if((function (){var or__3943__auto__ = typeof data === 'string';if(or__3943__auto__)
{return or__3943__auto__;
} else
{return (data instanceof cljs.core.Keyword);
}
})())
{return cljs.core.name.call(null,data);
} else
{return null;
}
}
});
/**
* a lazy seq of the ancestors of `node`
*/
dommy.core.ancestor_nodes = (function ancestor_nodes(elem){return cljs.core.take_while.call(null,cljs.core.identity,cljs.core.iterate.call(null,(function (p1__5677_SHARP_){return p1__5677_SHARP_.parentNode;
}),dommy.template.__GT_node_like.call(null,elem)));
});
/**
* returns a predicate on nodes that match `selector` at the
* time of this `matches-pred` call (may return outdated results
* if you fuck with the DOM)
*/
dommy.core.matches_pred = (function() {
var matches_pred = null;
var matches_pred__1 = (function (selector){return matches_pred.call(null,document,selector);
});
var matches_pred__2 = (function (base,selector){var matches = dommy.utils.__GT_Array.call(null,dommy.template.__GT_node_like.call(null,dommy.template.__GT_node_like.call(null,base)).querySelectorAll(dommy.core.selector.call(null,selector)));return (function (elem){return (matches.indexOf(elem) >= 0);
});
});
matches_pred = function(base,selector){
switch(arguments.length){
case 1:
return matches_pred__1.call(this,base);
case 2:
return matches_pred__2.call(this,base,selector);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
matches_pred.cljs$core$IFn$_invoke$arity$1 = matches_pred__1;
matches_pred.cljs$core$IFn$_invoke$arity$2 = matches_pred__2;
return matches_pred;
})()
;
/**
* closest ancestor of `node` (up to `base`, if provided)
* that matches `selector`
*/
dommy.core.closest = (function() {
var closest = null;
var closest__2 = (function (elem,selector){return cljs.core.first.call(null,cljs.core.filter.call(null,dommy.core.matches_pred.call(null,selector),dommy.core.ancestor_nodes.call(null,dommy.template.__GT_node_like.call(null,elem))));
});
var closest__3 = (function (base,elem,selector){var base__$1 = dommy.template.__GT_node_like.call(null,base);var elem__$1 = dommy.template.__GT_node_like.call(null,elem);return cljs.core.first.call(null,cljs.core.filter.call(null,dommy.core.matches_pred.call(null,base__$1,selector),cljs.core.take_while.call(null,(function (p1__5678_SHARP_){return !((p1__5678_SHARP_ === base__$1));
}),dommy.core.ancestor_nodes.call(null,elem__$1))));
});
closest = function(base,elem,selector){
switch(arguments.length){
case 2:
return closest__2.call(this,base,elem);
case 3:
return closest__3.call(this,base,elem,selector);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
closest.cljs$core$IFn$_invoke$arity$2 = closest__2;
closest.cljs$core$IFn$_invoke$arity$3 = closest__3;
return closest;
})()
;
/**
* is `descendant` a descendant of `ancestor`?
*/
dommy.core.descendant_QMARK_ = (function descendant_QMARK_(descendant,ancestor){var descendant__$1 = dommy.template.__GT_node_like.call(null,descendant);var ancestor__$1 = dommy.template.__GT_node_like.call(null,ancestor);if(cljs.core.truth_(ancestor__$1.contains))
{return ancestor__$1.contains(descendant__$1);
} else
{if(cljs.core.truth_(ancestor__$1.compareDocumentPosition))
{return ((ancestor__$1.compareDocumentPosition(descendant__$1) & (1 << 4)) != 0);
} else
{return null;
}
}
});
dommy.core.special_listener_makers = cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.call(null,(function (p__5679){var vec__5680 = p__5679;var special_mouse_event = cljs.core.nth.call(null,vec__5680,0,null);var real_mouse_event = cljs.core.nth.call(null,vec__5680,1,null);return cljs.core.PersistentVector.fromArray([special_mouse_event,cljs.core.PersistentArrayMap.fromArray([real_mouse_event,(function (f){return (function (event){var related_target = event.relatedTarget;var listener_target = (function (){var or__3943__auto__ = event.selectedTarget;if(cljs.core.truth_(or__3943__auto__))
{return or__3943__auto__;
} else
{return event.currentTarget;
}
})();if(cljs.core.truth_((function (){var and__3941__auto__ = related_target;if(cljs.core.truth_(and__3941__auto__))
{return dommy.core.descendant_QMARK_.call(null,related_target,listener_target);
} else
{return and__3941__auto__;
}
})()))
{return null;
} else
{return f.call(null,event);
}
});
})], true)], true);
}),cljs.core.PersistentArrayMap.fromArray([new cljs.core.Keyword(null,"mouseenter","mouseenter",2027084997),new cljs.core.Keyword(null,"mouseover","mouseover",1601081963),new cljs.core.Keyword(null,"mouseleave","mouseleave",2033263780),new cljs.core.Keyword(null,"mouseout","mouseout",894298107)], true)));
/**
* fires f if event.target is found with `selector`
*/
dommy.core.live_listener = (function live_listener(elem,selector,f){return (function (event){var temp__4092__auto__ = dommy.core.closest.call(null,dommy.template.__GT_node_like.call(null,elem),event.target,selector);if(cljs.core.truth_(temp__4092__auto__))
{var selected_target = temp__4092__auto__;event.selectedTarget = selected_target;
return f.call(null,event);
} else
{return null;
}
});
});
/**
* Returns a nested map of event listeners on `nodes`
*/
dommy.core.event_listeners = (function event_listeners(elem){var or__3943__auto__ = dommy.template.__GT_node_like.call(null,elem).dommyEventListeners;if(cljs.core.truth_(or__3943__auto__))
{return or__3943__auto__;
} else
{return cljs.core.PersistentArrayMap.EMPTY;
}
});
/**
* @param {...*} var_args
*/
dommy.core.update_event_listeners_BANG_ = (function() { 
var update_event_listeners_BANG___delegate = function (elem,f,args){var elem__$1 = dommy.template.__GT_node_like.call(null,elem);return elem__$1.dommyEventListeners = cljs.core.apply.call(null,f,dommy.core.event_listeners.call(null,elem__$1),args);
};
var update_event_listeners_BANG_ = function (elem,f,var_args){
var args = null;if (arguments.length > 2) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return update_event_listeners_BANG___delegate.call(this,elem,f,args);};
update_event_listeners_BANG_.cljs$lang$maxFixedArity = 2;
update_event_listeners_BANG_.cljs$lang$applyTo = (function (arglist__5681){
var elem = cljs.core.first(arglist__5681);
arglist__5681 = cljs.core.next(arglist__5681);
var f = cljs.core.first(arglist__5681);
var args = cljs.core.rest(arglist__5681);
return update_event_listeners_BANG___delegate(elem,f,args);
});
update_event_listeners_BANG_.cljs$core$IFn$_invoke$arity$variadic = update_event_listeners_BANG___delegate;
return update_event_listeners_BANG_;
})()
;
dommy.core.elem_and_selector = (function elem_and_selector(elem_sel){if(cljs.core.sequential_QMARK_.call(null,elem_sel))
{return cljs.core.juxt.call(null,(function (p1__5682_SHARP_){return dommy.template.__GT_node_like.call(null,cljs.core.first.call(null,p1__5682_SHARP_));
}),cljs.core.rest).call(null,elem_sel);
} else
{return cljs.core.PersistentVector.fromArray([dommy.template.__GT_node_like.call(null,elem_sel),null], true);
}
});
/**
* Adds `f` as a listener for events of type `event-type` on
* `elem-sel`, which must either be a DOM node, or a sequence
* whose first item is a DOM node.
* 
* In other words, the call to `listen!` can take two forms:
* 
* If `elem-sel` is a DOM node, i.e., you're doing something like:
* 
* (listen! elem :click click-handler)
* 
* then `click-handler` will be set as a listener for `click` events
* on the `elem`.
* 
* If `elem-sel` is a sequence:
* 
* (listen! [elem :.selector.for :.some.descendants] :click click-handler)
* 
* then `click-handler` will be set as a listener for `click` events
* on descendants of `elem` that match the selector
* 
* Also accepts any number of event-type and handler pairs for setting
* multiple listeners at once:
* 
* (listen! some-elem :click click-handler :hover hover-handler)
* @param {...*} var_args
*/
dommy.core.listen_BANG_ = (function() { 
var listen_BANG___delegate = function (elem_sel,type_fs){if(cljs.core.even_QMARK_.call(null,cljs.core.count.call(null,type_fs)))
{} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"even?","even?",-1543640034,null),cljs.core.list(new cljs.core.Symbol(null,"count","count",-1545680184,null),new cljs.core.Symbol(null,"type-fs","type-fs",1801297401,null)))))].join('')));
}
var vec__5706_5729 = dommy.core.elem_and_selector.call(null,elem_sel);var elem_5730 = cljs.core.nth.call(null,vec__5706_5729,0,null);var selector_5731 = cljs.core.nth.call(null,vec__5706_5729,1,null);var seq__5707_5732 = cljs.core.seq.call(null,cljs.core.partition.call(null,2,type_fs));var chunk__5714_5733 = null;var count__5715_5734 = 0;var i__5716_5735 = 0;while(true){
if((i__5716_5735 < count__5715_5734))
{var vec__5723_5736 = cljs.core._nth.call(null,chunk__5714_5733,i__5716_5735);var orig_type_5737 = cljs.core.nth.call(null,vec__5723_5736,0,null);var f_5738 = cljs.core.nth.call(null,vec__5723_5736,1,null);var seq__5717_5739 = cljs.core.seq.call(null,cljs.core.get.call(null,dommy.core.special_listener_makers,orig_type_5737,cljs.core.PersistentArrayMap.fromArray([orig_type_5737,cljs.core.identity], true)));var chunk__5719_5740 = null;var count__5720_5741 = 0;var i__5721_5742 = 0;while(true){
if((i__5721_5742 < count__5720_5741))
{var vec__5724_5743 = cljs.core._nth.call(null,chunk__5719_5740,i__5721_5742);var actual_type_5744 = cljs.core.nth.call(null,vec__5724_5743,0,null);var factory_5745 = cljs.core.nth.call(null,vec__5724_5743,1,null);var canonical_f_5746 = (cljs.core.truth_(selector_5731)?cljs.core.partial.call(null,dommy.core.live_listener,elem_5730,selector_5731):cljs.core.identity).call(null,factory_5745.call(null,f_5738));dommy.core.update_event_listeners_BANG_.call(null,elem_5730,cljs.core.assoc_in,cljs.core.PersistentVector.fromArray([selector_5731,actual_type_5744,f_5738], true),canonical_f_5746);
if(cljs.core.truth_(elem_5730.addEventListener))
{elem_5730.addEventListener(cljs.core.name.call(null,actual_type_5744),canonical_f_5746);
} else
{elem_5730.attachEvent(cljs.core.name.call(null,actual_type_5744),canonical_f_5746);
}
{
var G__5747 = seq__5717_5739;
var G__5748 = chunk__5719_5740;
var G__5749 = count__5720_5741;
var G__5750 = (i__5721_5742 + 1);
seq__5717_5739 = G__5747;
chunk__5719_5740 = G__5748;
count__5720_5741 = G__5749;
i__5721_5742 = G__5750;
continue;
}
} else
{var temp__4092__auto___5751 = cljs.core.seq.call(null,seq__5717_5739);if(temp__4092__auto___5751)
{var seq__5717_5752__$1 = temp__4092__auto___5751;if(cljs.core.chunked_seq_QMARK_.call(null,seq__5717_5752__$1))
{var c__3613__auto___5753 = cljs.core.chunk_first.call(null,seq__5717_5752__$1);{
var G__5754 = cljs.core.chunk_rest.call(null,seq__5717_5752__$1);
var G__5755 = c__3613__auto___5753;
var G__5756 = cljs.core.count.call(null,c__3613__auto___5753);
var G__5757 = 0;
seq__5717_5739 = G__5754;
chunk__5719_5740 = G__5755;
count__5720_5741 = G__5756;
i__5721_5742 = G__5757;
continue;
}
} else
{var vec__5725_5758 = cljs.core.first.call(null,seq__5717_5752__$1);var actual_type_5759 = cljs.core.nth.call(null,vec__5725_5758,0,null);var factory_5760 = cljs.core.nth.call(null,vec__5725_5758,1,null);var canonical_f_5761 = (cljs.core.truth_(selector_5731)?cljs.core.partial.call(null,dommy.core.live_listener,elem_5730,selector_5731):cljs.core.identity).call(null,factory_5760.call(null,f_5738));dommy.core.update_event_listeners_BANG_.call(null,elem_5730,cljs.core.assoc_in,cljs.core.PersistentVector.fromArray([selector_5731,actual_type_5759,f_5738], true),canonical_f_5761);
if(cljs.core.truth_(elem_5730.addEventListener))
{elem_5730.addEventListener(cljs.core.name.call(null,actual_type_5759),canonical_f_5761);
} else
{elem_5730.attachEvent(cljs.core.name.call(null,actual_type_5759),canonical_f_5761);
}
{
var G__5762 = cljs.core.next.call(null,seq__5717_5752__$1);
var G__5763 = null;
var G__5764 = 0;
var G__5765 = 0;
seq__5717_5739 = G__5762;
chunk__5719_5740 = G__5763;
count__5720_5741 = G__5764;
i__5721_5742 = G__5765;
continue;
}
}
} else
{}
}
break;
}
{
var G__5766 = seq__5707_5732;
var G__5767 = chunk__5714_5733;
var G__5768 = count__5715_5734;
var G__5769 = (i__5716_5735 + 1);
seq__5707_5732 = G__5766;
chunk__5714_5733 = G__5767;
count__5715_5734 = G__5768;
i__5716_5735 = G__5769;
continue;
}
} else
{var temp__4092__auto___5770 = cljs.core.seq.call(null,seq__5707_5732);if(temp__4092__auto___5770)
{var seq__5707_5771__$1 = temp__4092__auto___5770;if(cljs.core.chunked_seq_QMARK_.call(null,seq__5707_5771__$1))
{var c__3613__auto___5772 = cljs.core.chunk_first.call(null,seq__5707_5771__$1);{
var G__5773 = cljs.core.chunk_rest.call(null,seq__5707_5771__$1);
var G__5774 = c__3613__auto___5772;
var G__5775 = cljs.core.count.call(null,c__3613__auto___5772);
var G__5776 = 0;
seq__5707_5732 = G__5773;
chunk__5714_5733 = G__5774;
count__5715_5734 = G__5775;
i__5716_5735 = G__5776;
continue;
}
} else
{var vec__5726_5777 = cljs.core.first.call(null,seq__5707_5771__$1);var orig_type_5778 = cljs.core.nth.call(null,vec__5726_5777,0,null);var f_5779 = cljs.core.nth.call(null,vec__5726_5777,1,null);var seq__5708_5780 = cljs.core.seq.call(null,cljs.core.get.call(null,dommy.core.special_listener_makers,orig_type_5778,cljs.core.PersistentArrayMap.fromArray([orig_type_5778,cljs.core.identity], true)));var chunk__5710_5781 = null;var count__5711_5782 = 0;var i__5712_5783 = 0;while(true){
if((i__5712_5783 < count__5711_5782))
{var vec__5727_5784 = cljs.core._nth.call(null,chunk__5710_5781,i__5712_5783);var actual_type_5785 = cljs.core.nth.call(null,vec__5727_5784,0,null);var factory_5786 = cljs.core.nth.call(null,vec__5727_5784,1,null);var canonical_f_5787 = (cljs.core.truth_(selector_5731)?cljs.core.partial.call(null,dommy.core.live_listener,elem_5730,selector_5731):cljs.core.identity).call(null,factory_5786.call(null,f_5779));dommy.core.update_event_listeners_BANG_.call(null,elem_5730,cljs.core.assoc_in,cljs.core.PersistentVector.fromArray([selector_5731,actual_type_5785,f_5779], true),canonical_f_5787);
if(cljs.core.truth_(elem_5730.addEventListener))
{elem_5730.addEventListener(cljs.core.name.call(null,actual_type_5785),canonical_f_5787);
} else
{elem_5730.attachEvent(cljs.core.name.call(null,actual_type_5785),canonical_f_5787);
}
{
var G__5788 = seq__5708_5780;
var G__5789 = chunk__5710_5781;
var G__5790 = count__5711_5782;
var G__5791 = (i__5712_5783 + 1);
seq__5708_5780 = G__5788;
chunk__5710_5781 = G__5789;
count__5711_5782 = G__5790;
i__5712_5783 = G__5791;
continue;
}
} else
{var temp__4092__auto___5792__$1 = cljs.core.seq.call(null,seq__5708_5780);if(temp__4092__auto___5792__$1)
{var seq__5708_5793__$1 = temp__4092__auto___5792__$1;if(cljs.core.chunked_seq_QMARK_.call(null,seq__5708_5793__$1))
{var c__3613__auto___5794 = cljs.core.chunk_first.call(null,seq__5708_5793__$1);{
var G__5795 = cljs.core.chunk_rest.call(null,seq__5708_5793__$1);
var G__5796 = c__3613__auto___5794;
var G__5797 = cljs.core.count.call(null,c__3613__auto___5794);
var G__5798 = 0;
seq__5708_5780 = G__5795;
chunk__5710_5781 = G__5796;
count__5711_5782 = G__5797;
i__5712_5783 = G__5798;
continue;
}
} else
{var vec__5728_5799 = cljs.core.first.call(null,seq__5708_5793__$1);var actual_type_5800 = cljs.core.nth.call(null,vec__5728_5799,0,null);var factory_5801 = cljs.core.nth.call(null,vec__5728_5799,1,null);var canonical_f_5802 = (cljs.core.truth_(selector_5731)?cljs.core.partial.call(null,dommy.core.live_listener,elem_5730,selector_5731):cljs.core.identity).call(null,factory_5801.call(null,f_5779));dommy.core.update_event_listeners_BANG_.call(null,elem_5730,cljs.core.assoc_in,cljs.core.PersistentVector.fromArray([selector_5731,actual_type_5800,f_5779], true),canonical_f_5802);
if(cljs.core.truth_(elem_5730.addEventListener))
{elem_5730.addEventListener(cljs.core.name.call(null,actual_type_5800),canonical_f_5802);
} else
{elem_5730.attachEvent(cljs.core.name.call(null,actual_type_5800),canonical_f_5802);
}
{
var G__5803 = cljs.core.next.call(null,seq__5708_5793__$1);
var G__5804 = null;
var G__5805 = 0;
var G__5806 = 0;
seq__5708_5780 = G__5803;
chunk__5710_5781 = G__5804;
count__5711_5782 = G__5805;
i__5712_5783 = G__5806;
continue;
}
}
} else
{}
}
break;
}
{
var G__5807 = cljs.core.next.call(null,seq__5707_5771__$1);
var G__5808 = null;
var G__5809 = 0;
var G__5810 = 0;
seq__5707_5732 = G__5807;
chunk__5714_5733 = G__5808;
count__5715_5734 = G__5809;
i__5716_5735 = G__5810;
continue;
}
}
} else
{}
}
break;
}
return elem_sel;
};
var listen_BANG_ = function (elem_sel,var_args){
var type_fs = null;if (arguments.length > 1) {
  type_fs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return listen_BANG___delegate.call(this,elem_sel,type_fs);};
listen_BANG_.cljs$lang$maxFixedArity = 1;
listen_BANG_.cljs$lang$applyTo = (function (arglist__5811){
var elem_sel = cljs.core.first(arglist__5811);
var type_fs = cljs.core.rest(arglist__5811);
return listen_BANG___delegate(elem_sel,type_fs);
});
listen_BANG_.cljs$core$IFn$_invoke$arity$variadic = listen_BANG___delegate;
return listen_BANG_;
})()
;
/**
* Removes event listener for the element defined in `elem-sel`,
* which is the same format as listen!.
* 
* The following forms are allowed, and will remove all handlers
* that match the parameters passed in:
* 
* (unlisten! [elem :.selector] :click event-listener)
* 
* (unlisten! [elem :.selector]
* :click event-listener
* :mouseover other-event-listener)
* @param {...*} var_args
*/
dommy.core.unlisten_BANG_ = (function() { 
var unlisten_BANG___delegate = function (elem_sel,type_fs){if(cljs.core.even_QMARK_.call(null,cljs.core.count.call(null,type_fs)))
{} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"even?","even?",-1543640034,null),cljs.core.list(new cljs.core.Symbol(null,"count","count",-1545680184,null),new cljs.core.Symbol(null,"type-fs","type-fs",1801297401,null)))))].join('')));
}
var vec__5835_5858 = dommy.core.elem_and_selector.call(null,elem_sel);var elem_5859 = cljs.core.nth.call(null,vec__5835_5858,0,null);var selector_5860 = cljs.core.nth.call(null,vec__5835_5858,1,null);var seq__5836_5861 = cljs.core.seq.call(null,cljs.core.partition.call(null,2,type_fs));var chunk__5843_5862 = null;var count__5844_5863 = 0;var i__5845_5864 = 0;while(true){
if((i__5845_5864 < count__5844_5863))
{var vec__5852_5865 = cljs.core._nth.call(null,chunk__5843_5862,i__5845_5864);var orig_type_5866 = cljs.core.nth.call(null,vec__5852_5865,0,null);var f_5867 = cljs.core.nth.call(null,vec__5852_5865,1,null);var seq__5846_5868 = cljs.core.seq.call(null,cljs.core.get.call(null,dommy.core.special_listener_makers,orig_type_5866,cljs.core.PersistentArrayMap.fromArray([orig_type_5866,cljs.core.identity], true)));var chunk__5848_5869 = null;var count__5849_5870 = 0;var i__5850_5871 = 0;while(true){
if((i__5850_5871 < count__5849_5870))
{var vec__5853_5872 = cljs.core._nth.call(null,chunk__5848_5869,i__5850_5871);var actual_type_5873 = cljs.core.nth.call(null,vec__5853_5872,0,null);var __5874 = cljs.core.nth.call(null,vec__5853_5872,1,null);var keys_5875 = cljs.core.PersistentVector.fromArray([selector_5860,actual_type_5873,f_5867], true);var canonical_f_5876 = cljs.core.get_in.call(null,dommy.core.event_listeners.call(null,elem_5859),keys_5875);dommy.core.update_event_listeners_BANG_.call(null,elem_5859,dommy.utils.dissoc_in,keys_5875);
if(cljs.core.truth_(elem_5859.removeEventListener))
{elem_5859.removeEventListener(cljs.core.name.call(null,actual_type_5873),canonical_f_5876);
} else
{elem_5859.detachEvent(cljs.core.name.call(null,actual_type_5873),canonical_f_5876);
}
{
var G__5877 = seq__5846_5868;
var G__5878 = chunk__5848_5869;
var G__5879 = count__5849_5870;
var G__5880 = (i__5850_5871 + 1);
seq__5846_5868 = G__5877;
chunk__5848_5869 = G__5878;
count__5849_5870 = G__5879;
i__5850_5871 = G__5880;
continue;
}
} else
{var temp__4092__auto___5881 = cljs.core.seq.call(null,seq__5846_5868);if(temp__4092__auto___5881)
{var seq__5846_5882__$1 = temp__4092__auto___5881;if(cljs.core.chunked_seq_QMARK_.call(null,seq__5846_5882__$1))
{var c__3613__auto___5883 = cljs.core.chunk_first.call(null,seq__5846_5882__$1);{
var G__5884 = cljs.core.chunk_rest.call(null,seq__5846_5882__$1);
var G__5885 = c__3613__auto___5883;
var G__5886 = cljs.core.count.call(null,c__3613__auto___5883);
var G__5887 = 0;
seq__5846_5868 = G__5884;
chunk__5848_5869 = G__5885;
count__5849_5870 = G__5886;
i__5850_5871 = G__5887;
continue;
}
} else
{var vec__5854_5888 = cljs.core.first.call(null,seq__5846_5882__$1);var actual_type_5889 = cljs.core.nth.call(null,vec__5854_5888,0,null);var __5890 = cljs.core.nth.call(null,vec__5854_5888,1,null);var keys_5891 = cljs.core.PersistentVector.fromArray([selector_5860,actual_type_5889,f_5867], true);var canonical_f_5892 = cljs.core.get_in.call(null,dommy.core.event_listeners.call(null,elem_5859),keys_5891);dommy.core.update_event_listeners_BANG_.call(null,elem_5859,dommy.utils.dissoc_in,keys_5891);
if(cljs.core.truth_(elem_5859.removeEventListener))
{elem_5859.removeEventListener(cljs.core.name.call(null,actual_type_5889),canonical_f_5892);
} else
{elem_5859.detachEvent(cljs.core.name.call(null,actual_type_5889),canonical_f_5892);
}
{
var G__5893 = cljs.core.next.call(null,seq__5846_5882__$1);
var G__5894 = null;
var G__5895 = 0;
var G__5896 = 0;
seq__5846_5868 = G__5893;
chunk__5848_5869 = G__5894;
count__5849_5870 = G__5895;
i__5850_5871 = G__5896;
continue;
}
}
} else
{}
}
break;
}
{
var G__5897 = seq__5836_5861;
var G__5898 = chunk__5843_5862;
var G__5899 = count__5844_5863;
var G__5900 = (i__5845_5864 + 1);
seq__5836_5861 = G__5897;
chunk__5843_5862 = G__5898;
count__5844_5863 = G__5899;
i__5845_5864 = G__5900;
continue;
}
} else
{var temp__4092__auto___5901 = cljs.core.seq.call(null,seq__5836_5861);if(temp__4092__auto___5901)
{var seq__5836_5902__$1 = temp__4092__auto___5901;if(cljs.core.chunked_seq_QMARK_.call(null,seq__5836_5902__$1))
{var c__3613__auto___5903 = cljs.core.chunk_first.call(null,seq__5836_5902__$1);{
var G__5904 = cljs.core.chunk_rest.call(null,seq__5836_5902__$1);
var G__5905 = c__3613__auto___5903;
var G__5906 = cljs.core.count.call(null,c__3613__auto___5903);
var G__5907 = 0;
seq__5836_5861 = G__5904;
chunk__5843_5862 = G__5905;
count__5844_5863 = G__5906;
i__5845_5864 = G__5907;
continue;
}
} else
{var vec__5855_5908 = cljs.core.first.call(null,seq__5836_5902__$1);var orig_type_5909 = cljs.core.nth.call(null,vec__5855_5908,0,null);var f_5910 = cljs.core.nth.call(null,vec__5855_5908,1,null);var seq__5837_5911 = cljs.core.seq.call(null,cljs.core.get.call(null,dommy.core.special_listener_makers,orig_type_5909,cljs.core.PersistentArrayMap.fromArray([orig_type_5909,cljs.core.identity], true)));var chunk__5839_5912 = null;var count__5840_5913 = 0;var i__5841_5914 = 0;while(true){
if((i__5841_5914 < count__5840_5913))
{var vec__5856_5915 = cljs.core._nth.call(null,chunk__5839_5912,i__5841_5914);var actual_type_5916 = cljs.core.nth.call(null,vec__5856_5915,0,null);var __5917 = cljs.core.nth.call(null,vec__5856_5915,1,null);var keys_5918 = cljs.core.PersistentVector.fromArray([selector_5860,actual_type_5916,f_5910], true);var canonical_f_5919 = cljs.core.get_in.call(null,dommy.core.event_listeners.call(null,elem_5859),keys_5918);dommy.core.update_event_listeners_BANG_.call(null,elem_5859,dommy.utils.dissoc_in,keys_5918);
if(cljs.core.truth_(elem_5859.removeEventListener))
{elem_5859.removeEventListener(cljs.core.name.call(null,actual_type_5916),canonical_f_5919);
} else
{elem_5859.detachEvent(cljs.core.name.call(null,actual_type_5916),canonical_f_5919);
}
{
var G__5920 = seq__5837_5911;
var G__5921 = chunk__5839_5912;
var G__5922 = count__5840_5913;
var G__5923 = (i__5841_5914 + 1);
seq__5837_5911 = G__5920;
chunk__5839_5912 = G__5921;
count__5840_5913 = G__5922;
i__5841_5914 = G__5923;
continue;
}
} else
{var temp__4092__auto___5924__$1 = cljs.core.seq.call(null,seq__5837_5911);if(temp__4092__auto___5924__$1)
{var seq__5837_5925__$1 = temp__4092__auto___5924__$1;if(cljs.core.chunked_seq_QMARK_.call(null,seq__5837_5925__$1))
{var c__3613__auto___5926 = cljs.core.chunk_first.call(null,seq__5837_5925__$1);{
var G__5927 = cljs.core.chunk_rest.call(null,seq__5837_5925__$1);
var G__5928 = c__3613__auto___5926;
var G__5929 = cljs.core.count.call(null,c__3613__auto___5926);
var G__5930 = 0;
seq__5837_5911 = G__5927;
chunk__5839_5912 = G__5928;
count__5840_5913 = G__5929;
i__5841_5914 = G__5930;
continue;
}
} else
{var vec__5857_5931 = cljs.core.first.call(null,seq__5837_5925__$1);var actual_type_5932 = cljs.core.nth.call(null,vec__5857_5931,0,null);var __5933 = cljs.core.nth.call(null,vec__5857_5931,1,null);var keys_5934 = cljs.core.PersistentVector.fromArray([selector_5860,actual_type_5932,f_5910], true);var canonical_f_5935 = cljs.core.get_in.call(null,dommy.core.event_listeners.call(null,elem_5859),keys_5934);dommy.core.update_event_listeners_BANG_.call(null,elem_5859,dommy.utils.dissoc_in,keys_5934);
if(cljs.core.truth_(elem_5859.removeEventListener))
{elem_5859.removeEventListener(cljs.core.name.call(null,actual_type_5932),canonical_f_5935);
} else
{elem_5859.detachEvent(cljs.core.name.call(null,actual_type_5932),canonical_f_5935);
}
{
var G__5936 = cljs.core.next.call(null,seq__5837_5925__$1);
var G__5937 = null;
var G__5938 = 0;
var G__5939 = 0;
seq__5837_5911 = G__5936;
chunk__5839_5912 = G__5937;
count__5840_5913 = G__5938;
i__5841_5914 = G__5939;
continue;
}
}
} else
{}
}
break;
}
{
var G__5940 = cljs.core.next.call(null,seq__5836_5902__$1);
var G__5941 = null;
var G__5942 = 0;
var G__5943 = 0;
seq__5836_5861 = G__5940;
chunk__5843_5862 = G__5941;
count__5844_5863 = G__5942;
i__5845_5864 = G__5943;
continue;
}
}
} else
{}
}
break;
}
return elem_sel;
};
var unlisten_BANG_ = function (elem_sel,var_args){
var type_fs = null;if (arguments.length > 1) {
  type_fs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return unlisten_BANG___delegate.call(this,elem_sel,type_fs);};
unlisten_BANG_.cljs$lang$maxFixedArity = 1;
unlisten_BANG_.cljs$lang$applyTo = (function (arglist__5944){
var elem_sel = cljs.core.first(arglist__5944);
var type_fs = cljs.core.rest(arglist__5944);
return unlisten_BANG___delegate(elem_sel,type_fs);
});
unlisten_BANG_.cljs$core$IFn$_invoke$arity$variadic = unlisten_BANG___delegate;
return unlisten_BANG_;
})()
;
/**
* @param {...*} var_args
*/
dommy.core.listen_once_BANG_ = (function() { 
var listen_once_BANG___delegate = function (elem_sel,type_fs){if(cljs.core.even_QMARK_.call(null,cljs.core.count.call(null,type_fs)))
{} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"even?","even?",-1543640034,null),cljs.core.list(new cljs.core.Symbol(null,"count","count",-1545680184,null),new cljs.core.Symbol(null,"type-fs","type-fs",1801297401,null)))))].join('')));
}
var vec__5952_5959 = dommy.core.elem_and_selector.call(null,elem_sel);var elem_5960 = cljs.core.nth.call(null,vec__5952_5959,0,null);var selector_5961 = cljs.core.nth.call(null,vec__5952_5959,1,null);var seq__5953_5962 = cljs.core.seq.call(null,cljs.core.partition.call(null,2,type_fs));var chunk__5954_5963 = null;var count__5955_5964 = 0;var i__5956_5965 = 0;while(true){
if((i__5956_5965 < count__5955_5964))
{var vec__5957_5966 = cljs.core._nth.call(null,chunk__5954_5963,i__5956_5965);var type_5967 = cljs.core.nth.call(null,vec__5957_5966,0,null);var f_5968 = cljs.core.nth.call(null,vec__5957_5966,1,null);dommy.core.listen_BANG_.call(null,elem_sel,type_5967,((function (seq__5953_5962,chunk__5954_5963,count__5955_5964,i__5956_5965,vec__5957_5966,type_5967,f_5968){
return (function this_fn(e){dommy.core.unlisten_BANG_.call(null,elem_sel,type_5967,this_fn);
return f_5968.call(null,e);
});})(seq__5953_5962,chunk__5954_5963,count__5955_5964,i__5956_5965,vec__5957_5966,type_5967,f_5968))
);
{
var G__5969 = seq__5953_5962;
var G__5970 = chunk__5954_5963;
var G__5971 = count__5955_5964;
var G__5972 = (i__5956_5965 + 1);
seq__5953_5962 = G__5969;
chunk__5954_5963 = G__5970;
count__5955_5964 = G__5971;
i__5956_5965 = G__5972;
continue;
}
} else
{var temp__4092__auto___5973 = cljs.core.seq.call(null,seq__5953_5962);if(temp__4092__auto___5973)
{var seq__5953_5974__$1 = temp__4092__auto___5973;if(cljs.core.chunked_seq_QMARK_.call(null,seq__5953_5974__$1))
{var c__3613__auto___5975 = cljs.core.chunk_first.call(null,seq__5953_5974__$1);{
var G__5976 = cljs.core.chunk_rest.call(null,seq__5953_5974__$1);
var G__5977 = c__3613__auto___5975;
var G__5978 = cljs.core.count.call(null,c__3613__auto___5975);
var G__5979 = 0;
seq__5953_5962 = G__5976;
chunk__5954_5963 = G__5977;
count__5955_5964 = G__5978;
i__5956_5965 = G__5979;
continue;
}
} else
{var vec__5958_5980 = cljs.core.first.call(null,seq__5953_5974__$1);var type_5981 = cljs.core.nth.call(null,vec__5958_5980,0,null);var f_5982 = cljs.core.nth.call(null,vec__5958_5980,1,null);dommy.core.listen_BANG_.call(null,elem_sel,type_5981,((function (seq__5953_5962,chunk__5954_5963,count__5955_5964,i__5956_5965,vec__5958_5980,type_5981,f_5982,seq__5953_5974__$1,temp__4092__auto___5973){
return (function this_fn(e){dommy.core.unlisten_BANG_.call(null,elem_sel,type_5981,this_fn);
return f_5982.call(null,e);
});})(seq__5953_5962,chunk__5954_5963,count__5955_5964,i__5956_5965,vec__5958_5980,type_5981,f_5982,seq__5953_5974__$1,temp__4092__auto___5973))
);
{
var G__5983 = cljs.core.next.call(null,seq__5953_5974__$1);
var G__5984 = null;
var G__5985 = 0;
var G__5986 = 0;
seq__5953_5962 = G__5983;
chunk__5954_5963 = G__5984;
count__5955_5964 = G__5985;
i__5956_5965 = G__5986;
continue;
}
}
} else
{}
}
break;
}
return elem_sel;
};
var listen_once_BANG_ = function (elem_sel,var_args){
var type_fs = null;if (arguments.length > 1) {
  type_fs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return listen_once_BANG___delegate.call(this,elem_sel,type_fs);};
listen_once_BANG_.cljs$lang$maxFixedArity = 1;
listen_once_BANG_.cljs$lang$applyTo = (function (arglist__5987){
var elem_sel = cljs.core.first(arglist__5987);
var type_fs = cljs.core.rest(arglist__5987);
return listen_once_BANG___delegate(elem_sel,type_fs);
});
listen_once_BANG_.cljs$core$IFn$_invoke$arity$variadic = listen_once_BANG___delegate;
return listen_once_BANG_;
})()
;
/**
* NOTE: ONLY TO BE USED FOR TESTS. May not work at mocking many
* event types or their bubbling behaviours
* 
* Creates an event of type `event-type`, optionally having
* `update-event!` mutate and return an updated event object,
* and fires it on `node`.
* Only works when `node` is in the DOM
* @param {...*} var_args
*/
dommy.core.fire_BANG_ = (function() { 
var fire_BANG___delegate = function (node,event_type,p__5988){var vec__5990 = p__5988;var update_event_BANG_ = cljs.core.nth.call(null,vec__5990,0,null);if(dommy.core.descendant_QMARK_.call(null,node,document.documentElement))
{} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"descendant?","descendant?",-1886221157,null),new cljs.core.Symbol(null,"node","node",-1637144645,null),new cljs.core.Symbol("js","document.documentElement","js/document.documentElement",-1449696112,null))))].join('')));
}
var update_event_BANG___$1 = (function (){var or__3943__auto__ = update_event_BANG_;if(cljs.core.truth_(or__3943__auto__))
{return or__3943__auto__;
} else
{return cljs.core.identity;
}
})();if(cljs.core.truth_(document.createEvent))
{var event = document.createEvent("Event");event.initEvent(cljs.core.name.call(null,event_type),true,true);
return node.dispatchEvent(update_event_BANG___$1.call(null,event));
} else
{return node.fireEvent([cljs.core.str("on"),cljs.core.str(cljs.core.name.call(null,event_type))].join(''),update_event_BANG___$1.call(null,document.createEventObject()));
}
};
var fire_BANG_ = function (node,event_type,var_args){
var p__5988 = null;if (arguments.length > 2) {
  p__5988 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return fire_BANG___delegate.call(this,node,event_type,p__5988);};
fire_BANG_.cljs$lang$maxFixedArity = 2;
fire_BANG_.cljs$lang$applyTo = (function (arglist__5991){
var node = cljs.core.first(arglist__5991);
arglist__5991 = cljs.core.next(arglist__5991);
var event_type = cljs.core.first(arglist__5991);
var p__5988 = cljs.core.rest(arglist__5991);
return fire_BANG___delegate(node,event_type,p__5988);
});
fire_BANG_.cljs$core$IFn$_invoke$arity$variadic = fire_BANG___delegate;
return fire_BANG_;
})()
;
