goog.provide('scrappy.core');
goog.require('cljs.core');
goog.require('jayq.core');
goog.require('jayq.core');
goog.require('jayq.util');
goog.require('Handlebars');
scrappy.core.log = (function log(a){return console.log(cljs.core.clj__GT_js.call(null,a));
});
scrappy.core.templates = cljs.core.reduce.call(null,(function (acc,$el){return cljs.core.assoc.call(null,acc,cljs.core.keyword.call(null,jayq.core.attr.call(null,$el,new cljs.core.Keyword(null,"id","id",1013907597))),Handlebars.compile(jayq.core.html.call(null,$el)));
}),cljs.core.PersistentArrayMap.EMPTY,jayq.core.$.call(null,"script[type='template/handlebars']"));
scrappy.core.jq_not = (function jq_not($el,sel){return $el.not(sel);
});
scrappy.core.hover = (function hover($el,handler){return $el.hover(handler);
});
scrappy.core.click = (function() {
var click = null;
var click__1 = (function ($el){return $el.click();
});
var click__2 = (function ($el,handler){return $el.click(handler);
});
click = function($el,handler){
switch(arguments.length){
case 1:
return click__1.call(this,$el);
case 2:
return click__2.call(this,$el,handler);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
click.cljs$core$IFn$_invoke$arity$1 = click__1;
click.cljs$core$IFn$_invoke$arity$2 = click__2;
return click;
})()
;
jayq.core.document_ready.call(null,(function (){jayq.core.append.call(null,jayq.core.$.call(null,new cljs.core.Keyword(null,"body","body",1016933652)),new cljs.core.Keyword(null,"sidebar-template","sidebar-template",2800238397).call(null,scrappy.core.templates).call(null));
jayq.core.on.call(null,jayq.core.$.call(null,"input[name='scrap-type']"),new cljs.core.Keyword(null,"change","change",3947235106),(function (){if(cljs.core._EQ_.call(null,"multi",jayq.core.val.call(null,jayq.core.$.call(null,"input[name='scrap-type']:checked"))))
{return jayq.core.show.call(null,jayq.core.$.call(null,new cljs.core.Keyword(null,"#next-page-div","#next-page-div",1657772572)));
} else
{return jayq.core.hide.call(null,jayq.core.$.call(null,new cljs.core.Keyword(null,"#next-page-div","#next-page-div",1657772572)));
}
}));
scrappy.core.$current = jayq.core.$.call(null,"div.matches b.selector");
scrappy.core.$matches_pre = jayq.core.$.call(null,"div.scrappy div.matches pre");
scrappy.core.$match_button = jayq.core.$.call(null,"div.scrappy div.matches button");
scrappy.core.$results_list = jayq.core.$.call(null,"div.scrappy div.results ul");
scrappy.core.$download_button = jayq.core.$.call(null,"div.scrappy div.results button");
scrappy.core.matches = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
jayq.core.on.call(null,jayq.core.$.call(null,".key button"),new cljs.core.Keyword(null,"click","click",1108654330),(function (e){jayq.core.remove_class.call(null,jayq.core.$.call(null,".scrappy-hover, .scrappy-matched"),"scrappy-hover scrappy-matched");
return scrappy.core.hover.call(null,scrappy.core.jq_not.call(null,jayq.core.$.call(null,"body *:visible"),".scrappy, .scrappy *"),(function (e__$1){var $el = jayq.core.$.call(null,e__$1.currentTarget);var classes = cljs.core.filter.call(null,((function ($el){
return (function (p1__4980_SHARP_){var or__3943__auto__ = cljs.core.not_EQ_.call(null,"scrappy-matched",p1__4980_SHARP_);if(or__3943__auto__)
{return or__3943__auto__;
} else
{return cljs.core.not_EQ_.call(null,"scrappy-hover",p1__4980_SHARP_);
}
});})($el))
,clojure.string.split.call(null,(function (){var or__3943__auto__ = jayq.core.attr.call(null,$el,"class");if(cljs.core.truth_(or__3943__auto__))
{return or__3943__auto__;
} else
{return "";
}
})(),/\s/));var tag_name = clojure.string.lower_case.call(null,jayq.core.prop.call(null,$el,"tagName"));var selector = clojure.string.join.call(null,".",cljs.core.into.call(null,cljs.core.PersistentVector.fromArray([tag_name], true),cljs.core.remove.call(null,cljs.core.PersistentHashSet.fromArray(["scrappy-hover",null], true),classes)));var matched = scrappy.core.jq_not.call(null,jayq.core.$.call(null,selector),".scrappy, .scrappy *");jayq.core.text.call(null,scrappy.core.$current,selector);
jayq.core.remove_class.call(null,jayq.core.$.call(null,".scrappy-hover, .scrappy-matched"),"scrappy-hover scrappy-matched");
jayq.core.add_class.call(null,$el,new cljs.core.Keyword(null,"scrappy-hover","scrappy-hover",3701955259));
jayq.core.add_class.call(null,scrappy.core.jq_not.call(null,matched,$el),new cljs.core.Keyword(null,"scrappy-matched","scrappy-matched",2695416675));
return jayq.core.text.call(null,jayq.core.$.call(null,"div.matches b.count"),[cljs.core.str(cljs.core.count.call(null,matched)),cljs.core.str(" Matches")].join(''));
}));
}));
jayq.core.val.call(null,jayq.core.$.call(null,".matches input"),"Questions");
scrappy.core.click.call(null,jayq.core.$.call(null,".key button"));
jayq.core.on.call(null,jayq.core.$.call(null,document),new cljs.core.Keyword(null,"click","click",1108654330),new cljs.core.Keyword(null,".scrappy-hover",".scrappy-hover",1921094989),(function (e){var matched = jayq.core.$.call(null,jayq.core.text.call(null,scrappy.core.$current));jayq.core.prevent.call(null,e);
jayq.core.off.call(null,jayq.core.$.call(null,"body *:visible"),"mouseenter mouseleave");
jayq.core.text.call(null,jayq.core.$.call(null,"div.matches b.count"),[cljs.core.str(cljs.core.count.call(null,matched)),cljs.core.str(" Matches")].join(''));
jayq.core.html.call(null,scrappy.core.$matches_pre,"");
scrappy.core.$match_button.removeAttr("disabled");
var seq__4985 = cljs.core.seq.call(null,matched);var chunk__4986 = null;var count__4987 = 0;var i__4988 = 0;while(true){
if((i__4988 < count__4987))
{var el = cljs.core._nth.call(null,chunk__4986,i__4988);scrappy.core.log.call(null,el);
jayq.core.append.call(null,scrappy.core.$matches_pre,[cljs.core.str("<p>"),cljs.core.str(jayq.core.text.call(null,jayq.core.$.call(null,el))),cljs.core.str("</p>")].join(''));
{
var G__4989 = seq__4985;
var G__4990 = chunk__4986;
var G__4991 = count__4987;
var G__4992 = (i__4988 + 1);
seq__4985 = G__4989;
chunk__4986 = G__4990;
count__4987 = G__4991;
i__4988 = G__4992;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__4985);if(temp__4092__auto__)
{var seq__4985__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__4985__$1))
{var c__3613__auto__ = cljs.core.chunk_first.call(null,seq__4985__$1);{
var G__4993 = cljs.core.chunk_rest.call(null,seq__4985__$1);
var G__4994 = c__3613__auto__;
var G__4995 = cljs.core.count.call(null,c__3613__auto__);
var G__4996 = 0;
seq__4985 = G__4993;
chunk__4986 = G__4994;
count__4987 = G__4995;
i__4988 = G__4996;
continue;
}
} else
{var el = cljs.core.first.call(null,seq__4985__$1);scrappy.core.log.call(null,el);
jayq.core.append.call(null,scrappy.core.$matches_pre,[cljs.core.str("<p>"),cljs.core.str(jayq.core.text.call(null,jayq.core.$.call(null,el))),cljs.core.str("</p>")].join(''));
{
var G__4997 = cljs.core.next.call(null,seq__4985__$1);
var G__4998 = null;
var G__4999 = 0;
var G__5000 = 0;
seq__4985 = G__4997;
chunk__4986 = G__4998;
count__4987 = G__4999;
i__4988 = G__5000;
continue;
}
}
} else
{return null;
}
}
break;
}
}));
return scrappy.core.click.call(null,scrappy.core.$match_button,(function (e){var key = jayq.core.val.call(null,jayq.core.$.call(null,".matches input"));var values = jayq.core.$.call(null,jayq.core.text.call(null,scrappy.core.$current));jayq.core.prevent.call(null,e);
cljs.core.reset_BANG_.call(null,scrappy.core.matches,cljs.core.assoc.call(null,cljs.core.deref.call(null,scrappy.core.matches),key,values));
scrappy.core.log.call(null,cljs.core.deref.call(null,scrappy.core.matches));
scrappy.core.log.call(null,cljs.core.map.call(null,(function (p1__4981_SHARP_,p2__4982_SHARP_){return [cljs.core.str("<li>"),cljs.core.str(p1__4981_SHARP_),cljs.core.str(": "),cljs.core.str(cljs.core.count.call(null,p2__4982_SHARP_)),cljs.core.str(" matches</li>")].join('');
}),cljs.core.keys.call(null,cljs.core.deref.call(null,scrappy.core.matches)),cljs.core.vals.call(null,cljs.core.deref.call(null,scrappy.core.matches))));
return jayq.core.html.call(null,scrappy.core.$results_list,clojure.string.join.call(null,cljs.core.map.call(null,(function (p1__4983_SHARP_,p2__4984_SHARP_){return [cljs.core.str("<li>"),cljs.core.str(p1__4983_SHARP_),cljs.core.str(": "),cljs.core.str(cljs.core.count.call(null,p2__4984_SHARP_)),cljs.core.str(" matches</li>")].join('');
}),cljs.core.keys.call(null,cljs.core.deref.call(null,scrappy.core.matches)),cljs.core.vals.call(null,cljs.core.deref.call(null,scrappy.core.matches)))));
}));
}));
