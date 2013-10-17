(ns scrappy.core
	(:require
		[Handlebars]
		[jayq.util])
	(:use [jayq.core :only [$ html append attr on prevent val show hide]]))

(defn log [a]
	(. js/console log (clj->js a)))

(defn not [s]
  ())

(def templates
	(reduce (fn [acc $el]
		(assoc acc (keyword (attr $el :id)) (. js/Handlebars compile (html $el))))
		{}
		($ "script[type='template/handlebars']")))



;Append the sidebar
(append ($ :body) ((:sidebar-template templates)))

;Bind events
(on ($ "input[name='scrap-type']") :change
    #(if (= "multi" (val ($ "input[name='scrap-type']:checked")))
       (show ($ :#next-page-div))
       (hide ($ :#next-page-div))))


;JS equivalent, for comparaison
;$("input[name='scrap-type']").on('change', function(e){
;  if('multi' == $("input[name='scrap-type']:checked").val()){
;    $('#next-page-div').show();
;  } else {
;    $('#next-page-div').hide();
;  }
;});


(on ($ "div.key button")
    :click
    #())
