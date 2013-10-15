goog.provide('dommy.template');
goog.require('cljs.core');
goog.require('dommy.attrs');
goog.require('dommy.attrs');
goog.require('clojure.string');
goog.require('clojure.string');
dommy.template.PElement = {};
dommy.template._elem = (function _elem(this$){if((function (){var and__3941__auto__ = this$;if(and__3941__auto__)
{return this$.dommy$template$PElement$_elem$arity$1;
} else
{return and__3941__auto__;
}
})())
{return this$.dommy$template$PElement$_elem$arity$1(this$);
} else
{var x__3500__auto__ = (((this$ == null))?null:this$);return (function (){var or__3943__auto__ = (dommy.template._elem[goog.typeOf(x__3500__auto__)]);if(or__3943__auto__)
{return or__3943__auto__;
} else
{var or__3943__auto____$1 = (dommy.template._elem["_"]);if(or__3943__auto____$1)
{return or__3943__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"PElement.-elem",this$);
}
}
})().call(null,this$);
}
});
/**
* index of css character (#,.) in base-element. bottleneck
*/
dommy.template.next_css_index = (function next_css_index(s,start_idx){var id_idx = s.indexOf("#",start_idx);var class_idx = s.indexOf(".",start_idx);var idx = Math.min(id_idx,class_idx);if((idx < 0))
{return Math.max(id_idx,class_idx);
} else
{return idx;
}
});
/**
* dom element from css-style keyword like :a.class1 or :span#my-span.class
*/
dommy.template.base_element = (function base_element(node_key){var node_str = cljs.core.name.call(null,node_key);var base_idx = dommy.template.next_css_index.call(null,node_str,0);var tag = (((base_idx > 0))?node_str.substring(0,base_idx):(((base_idx === 0))?"div":((new cljs.core.Keyword(null,"else","else",1017020587))?node_str:null)));var node = document.createElement(tag);if((base_idx >= 0))
{var str_5994 = node_str.substring(base_idx);while(true){
var next_idx_5995 = dommy.template.next_css_index.call(null,str_5994,1);var frag_5996 = (((next_idx_5995 >= 0))?str_5994.substring(0,next_idx_5995):str_5994);var G__5993_5997 = frag_5996.charAt(0);if(cljs.core._EQ_.call(null,"#",G__5993_5997))
{node.setAttribute("id",frag_5996.substring(1));
} else
{if(cljs.core._EQ_.call(null,".",G__5993_5997))
{dommy.attrs.add_class_BANG_.call(null,node,frag_5996.substring(1));
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(frag_5996.charAt(0))].join('')));
} else
{}
}
}
if((next_idx_5995 >= 0))
{{
var G__5998 = str_5994.substring(next_idx_5995);
str_5994 = G__5998;
continue;
}
} else
{}
break;
}
} else
{}
return node;
});
dommy.template.throw_unable_to_make_node = (function throw_unable_to_make_node(node_data){throw [cljs.core.str("Don't know how to make node from: "),cljs.core.str(cljs.core.pr_str.call(null,node_data))].join('');
});
/**
* take data and return a document fragment
*/
dommy.template.__GT_document_fragment = (function() {
var __GT_document_fragment = null;
var __GT_document_fragment__1 = (function (data){return __GT_document_fragment.call(null,document.createDocumentFragment(),data);
});
var __GT_document_fragment__2 = (function (result_frag,data){if((function (){var G__6004 = data;if(G__6004)
{if(cljs.core.truth_((function (){var or__3943__auto__ = null;if(cljs.core.truth_(or__3943__auto__))
{return or__3943__auto__;
} else
{return G__6004.dommy$template$PElement$;
}
})()))
{return true;
} else
{if((!G__6004.cljs$lang$protocol_mask$partition$))
{return cljs.core.type_satisfies_.call(null,dommy.template.PElement,G__6004);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,dommy.template.PElement,G__6004);
}
})())
{result_frag.appendChild(dommy.template._elem.call(null,data));
return result_frag;
} else
{if(cljs.core.seq_QMARK_.call(null,data))
{var seq__6005_6009 = cljs.core.seq.call(null,data);var chunk__6006_6010 = null;var count__6007_6011 = 0;var i__6008_6012 = 0;while(true){
if((i__6008_6012 < count__6007_6011))
{var child_6013 = cljs.core._nth.call(null,chunk__6006_6010,i__6008_6012);__GT_document_fragment.call(null,result_frag,child_6013);
{
var G__6014 = seq__6005_6009;
var G__6015 = chunk__6006_6010;
var G__6016 = count__6007_6011;
var G__6017 = (i__6008_6012 + 1);
seq__6005_6009 = G__6014;
chunk__6006_6010 = G__6015;
count__6007_6011 = G__6016;
i__6008_6012 = G__6017;
continue;
}
} else
{var temp__4092__auto___6018 = cljs.core.seq.call(null,seq__6005_6009);if(temp__4092__auto___6018)
{var seq__6005_6019__$1 = temp__4092__auto___6018;if(cljs.core.chunked_seq_QMARK_.call(null,seq__6005_6019__$1))
{var c__3613__auto___6020 = cljs.core.chunk_first.call(null,seq__6005_6019__$1);{
var G__6021 = cljs.core.chunk_rest.call(null,seq__6005_6019__$1);
var G__6022 = c__3613__auto___6020;
var G__6023 = cljs.core.count.call(null,c__3613__auto___6020);
var G__6024 = 0;
seq__6005_6009 = G__6021;
chunk__6006_6010 = G__6022;
count__6007_6011 = G__6023;
i__6008_6012 = G__6024;
continue;
}
} else
{var child_6025 = cljs.core.first.call(null,seq__6005_6019__$1);__GT_document_fragment.call(null,result_frag,child_6025);
{
var G__6026 = cljs.core.next.call(null,seq__6005_6019__$1);
var G__6027 = null;
var G__6028 = 0;
var G__6029 = 0;
seq__6005_6009 = G__6026;
chunk__6006_6010 = G__6027;
count__6007_6011 = G__6028;
i__6008_6012 = G__6029;
continue;
}
}
} else
{}
}
break;
}
return result_frag;
} else
{if((data == null))
{return result_frag;
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{return dommy.template.throw_unable_to_make_node.call(null,data);
} else
{return null;
}
}
}
}
});
__GT_document_fragment = function(result_frag,data){
switch(arguments.length){
case 1:
return __GT_document_fragment__1.call(this,result_frag);
case 2:
return __GT_document_fragment__2.call(this,result_frag,data);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
__GT_document_fragment.cljs$core$IFn$_invoke$arity$1 = __GT_document_fragment__1;
__GT_document_fragment.cljs$core$IFn$_invoke$arity$2 = __GT_document_fragment__2;
return __GT_document_fragment;
})()
;
/**
* take data and return DOM node if it satisfies PElement and tries to
* make a document fragment otherwise
*/
dommy.template.__GT_node_like = (function __GT_node_like(data){if((function (){var G__6031 = data;if(G__6031)
{if(cljs.core.truth_((function (){var or__3943__auto__ = null;if(cljs.core.truth_(or__3943__auto__))
{return or__3943__auto__;
} else
{return G__6031.dommy$template$PElement$;
}
})()))
{return true;
} else
{if((!G__6031.cljs$lang$protocol_mask$partition$))
{return cljs.core.type_satisfies_.call(null,dommy.template.PElement,G__6031);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,dommy.template.PElement,G__6031);
}
})())
{return dommy.template._elem.call(null,data);
} else
{return dommy.template.__GT_document_fragment.call(null,data);
}
});
/**
* element with either attrs or nested children [:div [:span "Hello"]]
*/
dommy.template.compound_element = (function compound_element(p__6032){var vec__6051 = p__6032;var tag_name = cljs.core.nth.call(null,vec__6051,0,null);var maybe_attrs = cljs.core.nth.call(null,vec__6051,1,null);var children = cljs.core.nthnext.call(null,vec__6051,2);var n = dommy.template.base_element.call(null,tag_name);var attrs = (((function (){var and__3941__auto__ = cljs.core.map_QMARK_.call(null,maybe_attrs);if(and__3941__auto__)
{return !((function (){var G__6052 = maybe_attrs;if(G__6052)
{if(cljs.core.truth_((function (){var or__3943__auto__ = null;if(cljs.core.truth_(or__3943__auto__))
{return or__3943__auto__;
} else
{return G__6052.dommy$template$PElement$;
}
})()))
{return true;
} else
{if((!G__6052.cljs$lang$protocol_mask$partition$))
{return cljs.core.type_satisfies_.call(null,dommy.template.PElement,G__6052);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,dommy.template.PElement,G__6052);
}
})());
} else
{return and__3941__auto__;
}
})())?maybe_attrs:null);var children__$1 = (cljs.core.truth_(attrs)?children:cljs.core.cons.call(null,maybe_attrs,children));var seq__6053_6069 = cljs.core.seq.call(null,attrs);var chunk__6054_6070 = null;var count__6055_6071 = 0;var i__6056_6072 = 0;while(true){
if((i__6056_6072 < count__6055_6071))
{var vec__6057_6073 = cljs.core._nth.call(null,chunk__6054_6070,i__6056_6072);var k_6074 = cljs.core.nth.call(null,vec__6057_6073,0,null);var v_6075 = cljs.core.nth.call(null,vec__6057_6073,1,null);var G__6058_6076 = k_6074;if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"classes","classes",1867525016),G__6058_6076))
{var seq__6059_6077 = cljs.core.seq.call(null,v_6075);var chunk__6060_6078 = null;var count__6061_6079 = 0;var i__6062_6080 = 0;while(true){
if((i__6062_6080 < count__6061_6079))
{var c_6081 = cljs.core._nth.call(null,chunk__6060_6078,i__6062_6080);dommy.attrs.add_class_BANG_.call(null,n,c_6081);
{
var G__6082 = seq__6059_6077;
var G__6083 = chunk__6060_6078;
var G__6084 = count__6061_6079;
var G__6085 = (i__6062_6080 + 1);
seq__6059_6077 = G__6082;
chunk__6060_6078 = G__6083;
count__6061_6079 = G__6084;
i__6062_6080 = G__6085;
continue;
}
} else
{var temp__4092__auto___6086 = cljs.core.seq.call(null,seq__6059_6077);if(temp__4092__auto___6086)
{var seq__6059_6087__$1 = temp__4092__auto___6086;if(cljs.core.chunked_seq_QMARK_.call(null,seq__6059_6087__$1))
{var c__3613__auto___6088 = cljs.core.chunk_first.call(null,seq__6059_6087__$1);{
var G__6089 = cljs.core.chunk_rest.call(null,seq__6059_6087__$1);
var G__6090 = c__3613__auto___6088;
var G__6091 = cljs.core.count.call(null,c__3613__auto___6088);
var G__6092 = 0;
seq__6059_6077 = G__6089;
chunk__6060_6078 = G__6090;
count__6061_6079 = G__6091;
i__6062_6080 = G__6092;
continue;
}
} else
{var c_6093 = cljs.core.first.call(null,seq__6059_6087__$1);dommy.attrs.add_class_BANG_.call(null,n,c_6093);
{
var G__6094 = cljs.core.next.call(null,seq__6059_6087__$1);
var G__6095 = null;
var G__6096 = 0;
var G__6097 = 0;
seq__6059_6077 = G__6094;
chunk__6060_6078 = G__6095;
count__6061_6079 = G__6096;
i__6062_6080 = G__6097;
continue;
}
}
} else
{}
}
break;
}
} else
{if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"class","class",1108647146),G__6058_6076))
{dommy.attrs.add_class_BANG_.call(null,n,v_6075);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{dommy.attrs.set_attr_BANG_.call(null,n,k_6074,v_6075);
} else
{}
}
}
{
var G__6098 = seq__6053_6069;
var G__6099 = chunk__6054_6070;
var G__6100 = count__6055_6071;
var G__6101 = (i__6056_6072 + 1);
seq__6053_6069 = G__6098;
chunk__6054_6070 = G__6099;
count__6055_6071 = G__6100;
i__6056_6072 = G__6101;
continue;
}
} else
{var temp__4092__auto___6102 = cljs.core.seq.call(null,seq__6053_6069);if(temp__4092__auto___6102)
{var seq__6053_6103__$1 = temp__4092__auto___6102;if(cljs.core.chunked_seq_QMARK_.call(null,seq__6053_6103__$1))
{var c__3613__auto___6104 = cljs.core.chunk_first.call(null,seq__6053_6103__$1);{
var G__6105 = cljs.core.chunk_rest.call(null,seq__6053_6103__$1);
var G__6106 = c__3613__auto___6104;
var G__6107 = cljs.core.count.call(null,c__3613__auto___6104);
var G__6108 = 0;
seq__6053_6069 = G__6105;
chunk__6054_6070 = G__6106;
count__6055_6071 = G__6107;
i__6056_6072 = G__6108;
continue;
}
} else
{var vec__6063_6109 = cljs.core.first.call(null,seq__6053_6103__$1);var k_6110 = cljs.core.nth.call(null,vec__6063_6109,0,null);var v_6111 = cljs.core.nth.call(null,vec__6063_6109,1,null);var G__6064_6112 = k_6110;if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"classes","classes",1867525016),G__6064_6112))
{var seq__6065_6113 = cljs.core.seq.call(null,v_6111);var chunk__6066_6114 = null;var count__6067_6115 = 0;var i__6068_6116 = 0;while(true){
if((i__6068_6116 < count__6067_6115))
{var c_6117 = cljs.core._nth.call(null,chunk__6066_6114,i__6068_6116);dommy.attrs.add_class_BANG_.call(null,n,c_6117);
{
var G__6118 = seq__6065_6113;
var G__6119 = chunk__6066_6114;
var G__6120 = count__6067_6115;
var G__6121 = (i__6068_6116 + 1);
seq__6065_6113 = G__6118;
chunk__6066_6114 = G__6119;
count__6067_6115 = G__6120;
i__6068_6116 = G__6121;
continue;
}
} else
{var temp__4092__auto___6122__$1 = cljs.core.seq.call(null,seq__6065_6113);if(temp__4092__auto___6122__$1)
{var seq__6065_6123__$1 = temp__4092__auto___6122__$1;if(cljs.core.chunked_seq_QMARK_.call(null,seq__6065_6123__$1))
{var c__3613__auto___6124 = cljs.core.chunk_first.call(null,seq__6065_6123__$1);{
var G__6125 = cljs.core.chunk_rest.call(null,seq__6065_6123__$1);
var G__6126 = c__3613__auto___6124;
var G__6127 = cljs.core.count.call(null,c__3613__auto___6124);
var G__6128 = 0;
seq__6065_6113 = G__6125;
chunk__6066_6114 = G__6126;
count__6067_6115 = G__6127;
i__6068_6116 = G__6128;
continue;
}
} else
{var c_6129 = cljs.core.first.call(null,seq__6065_6123__$1);dommy.attrs.add_class_BANG_.call(null,n,c_6129);
{
var G__6130 = cljs.core.next.call(null,seq__6065_6123__$1);
var G__6131 = null;
var G__6132 = 0;
var G__6133 = 0;
seq__6065_6113 = G__6130;
chunk__6066_6114 = G__6131;
count__6067_6115 = G__6132;
i__6068_6116 = G__6133;
continue;
}
}
} else
{}
}
break;
}
} else
{if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"class","class",1108647146),G__6064_6112))
{dommy.attrs.add_class_BANG_.call(null,n,v_6111);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{dommy.attrs.set_attr_BANG_.call(null,n,k_6110,v_6111);
} else
{}
}
}
{
var G__6134 = cljs.core.next.call(null,seq__6053_6103__$1);
var G__6135 = null;
var G__6136 = 0;
var G__6137 = 0;
seq__6053_6069 = G__6134;
chunk__6054_6070 = G__6135;
count__6055_6071 = G__6136;
i__6056_6072 = G__6137;
continue;
}
}
} else
{}
}
break;
}
n.appendChild(dommy.template.__GT_node_like.call(null,children__$1));
return n;
});
(dommy.template.PElement["string"] = true);
(dommy.template._elem["string"] = (function (this$){if((this$ instanceof cljs.core.Keyword))
{return dommy.template.base_element.call(null,this$);
} else
{return document.createTextNode([cljs.core.str(this$)].join(''));
}
}));
(dommy.template.PElement["number"] = true);
(dommy.template._elem["number"] = (function (this$){return document.createTextNode([cljs.core.str(this$)].join(''));
}));
cljs.core.PersistentVector.prototype.dommy$template$PElement$ = true;
cljs.core.PersistentVector.prototype.dommy$template$PElement$_elem$arity$1 = (function (this$){return dommy.template.compound_element.call(null,this$);
});
Document.prototype.dommy$template$PElement$ = true;
Document.prototype.dommy$template$PElement$_elem$arity$1 = (function (this$){return this$;
});
Text.prototype.dommy$template$PElement$ = true;
Text.prototype.dommy$template$PElement$_elem$arity$1 = (function (this$){return this$;
});
DocumentFragment.prototype.dommy$template$PElement$ = true;
DocumentFragment.prototype.dommy$template$PElement$_elem$arity$1 = (function (this$){return this$;
});
HTMLElement.prototype.dommy$template$PElement$ = true;
HTMLElement.prototype.dommy$template$PElement$_elem$arity$1 = (function (this$){return this$;
});
try{Window.prototype.dommy$template$PElement$ = true;
Window.prototype.dommy$template$PElement$_elem$arity$1 = (function (this$){return this$;
});
}catch (e6138){if((e6138 instanceof ReferenceError))
{var __6139 = e6138;console.log("PElement: js/Window not defined by browser, skipping it... (running on phantomjs?)");
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e6138;
} else
{}
}
}dommy.template.node = (function node(data){if((function (){var G__6141 = data;if(G__6141)
{if(cljs.core.truth_((function (){var or__3943__auto__ = null;if(cljs.core.truth_(or__3943__auto__))
{return or__3943__auto__;
} else
{return G__6141.dommy$template$PElement$;
}
})()))
{return true;
} else
{if((!G__6141.cljs$lang$protocol_mask$partition$))
{return cljs.core.type_satisfies_.call(null,dommy.template.PElement,G__6141);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,dommy.template.PElement,G__6141);
}
})())
{return dommy.template._elem.call(null,data);
} else
{return dommy.template.throw_unable_to_make_node.call(null,data);
}
});
dommy.template.html__GT_nodes = (function html__GT_nodes(html){var parent = document.createElement("div");parent.insertAdjacentHTML("beforeend",html);
return cljs.core.seq.call(null,Array.prototype.slice.call(parent.childNodes));
});
