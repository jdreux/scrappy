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
scrappy.core.jq_not = (function jq_not($el,sel){return $el.not(cljs.core.name.call(null,sel));
});
jayq.core.document_ready.call(null,(function (){jayq.core.append.call(null,jayq.core.$.call(null,new cljs.core.Keyword(null,"body","body",1016933652)),new cljs.core.Keyword(null,"sidebar-template","sidebar-template",2800238397).call(null,scrappy.core.templates).call(null));
jayq.core.on.call(null,jayq.core.$.call(null,"input[name='scrap-type']"),new cljs.core.Keyword(null,"change","change",3947235106),(function (){if(cljs.core._EQ_.call(null,"multi",jayq.core.val.call(null,jayq.core.$.call(null,"input[name='scrap-type']:checked"))))
{return jayq.core.show.call(null,jayq.core.$.call(null,new cljs.core.Keyword(null,"#next-page-div","#next-page-div",1657772572)));
} else
{return jayq.core.hide.call(null,jayq.core.$.call(null,new cljs.core.Keyword(null,"#next-page-div","#next-page-div",1657772572)));
}
}));
scrappy.core.log.call(null,cljs.core.count.call(null,jayq.core.$.call(null,"body *:visible")));
scrappy.core.log.call(null,cljs.core.count.call(null,scrappy.core.jq_not.call(null,jayq.core.$.call(null,"body *:visible"),".scrappy, .scrappy *")));
return jayq.core.on.call(null,scrappy.core.jq_not.call(null,jayq.core.$.call(null,"body *:visible"),".scrappy, .scrappy *"),"hover",(function (e){return scrappy.core.log.call(null,"hover!!");
}));
}));
