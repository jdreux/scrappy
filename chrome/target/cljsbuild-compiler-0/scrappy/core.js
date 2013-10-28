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
jayq.core.document_ready.call(null,(function (){jayq.core.append.call(null,jayq.core.$.call(null,new cljs.core.Keyword(null,"body","body",1016933652)),new cljs.core.Keyword(null,"sidebar-template","sidebar-template",2800238397).call(null,scrappy.core.templates).call(null));
jayq.core.on.call(null,jayq.core.$.call(null,"input[name='scrap-type']"),new cljs.core.Keyword(null,"change","change",3947235106),(function (){if(cljs.core._EQ_.call(null,"multi",jayq.core.val.call(null,jayq.core.$.call(null,"input[name='scrap-type']:checked"))))
{return jayq.core.show.call(null,jayq.core.$.call(null,new cljs.core.Keyword(null,"#next-page-div","#next-page-div",1657772572)));
} else
{return jayq.core.hide.call(null,jayq.core.$.call(null,new cljs.core.Keyword(null,"#next-page-div","#next-page-div",1657772572)));
}
}));
scrappy.core.$current = jayq.core.$.call(null,"div.select b.selector");
jayq.core.on.call(null,jayq.core.$.call(null,".key button"),new cljs.core.Keyword(null,"click","click",1108654330),(function (e){jayq.core.remove_class.call(null,jayq.core.$.call(null,".scrappy-hover, .scrappy-matched"),"scrappy-hover scrappy-matched");
return scrappy.core.hover.call(null,scrappy.core.jq_not.call(null,jayq.core.$.call(null,"body *:visible"),".scrappy, .scrappy *"),(function (e__$1){var $el = jayq.core.$.call(null,e__$1.currentTarget);var classes = cljs.core.filter.call(null,((function ($el){
return (function (p1__4812_SHARP_){var or__3943__auto__ = cljs.core.not_EQ_.call(null,"scrappy-matched",p1__4812_SHARP_);if(or__3943__auto__)
{return or__3943__auto__;
} else
{return cljs.core.not_EQ_.call(null,"scrappy-hover",p1__4812_SHARP_);
}
});})($el))
,clojure.string.split.call(null,(function (){var or__3943__auto__ = jayq.core.attr.call(null,$el,"class");if(cljs.core.truth_(or__3943__auto__))
{return or__3943__auto__;
} else
{return "";
}
})(),/\s/));var tag_name = clojure.string.lower_case.call(null,jayq.core.prop.call(null,$el,"tagName"));var selector = clojure.string.join.call(null,".",cljs.core.into.call(null,cljs.core.PersistentVector.fromArray([tag_name], true),classes));var matched = scrappy.core.jq_not.call(null,scrappy.core.jq_not.call(null,jayq.core.$.call(null,selector),".scrappy, .scrappy *"),$el);jayq.core.text.call(null,scrappy.core.$current,selector);
jayq.core.remove_class.call(null,jayq.core.$.call(null,".scrappy-hover, .scrappy-matched"),"scrappy-hover scrappy-matched");
jayq.core.add_class.call(null,$el,new cljs.core.Keyword(null,"scrappy-hover","scrappy-hover",3701955259));
return jayq.core.add_class.call(null,matched,new cljs.core.Keyword(null,"scrappy-matched","scrappy-matched",2695416675));
}));
}));
jayq.core.$.call(null,".key button").click();
return jayq.core.on.call(null,jayq.core.$.call(null,document),new cljs.core.Keyword(null,"click","click",1108654330),new cljs.core.Keyword(null,".scrappy-hover",".scrappy-hover",1921094989),(function (e){jayq.core.prevent.call(null,e);
return jayq.core.off.call(null,jayq.core.$.call(null,"body *:visible"),"mouseenter mouseleave");
}));
}));
