(ns scrappy.core
	(:require
		[Handlebars]
		[jayq.util])
	(:use [jayq.core :only [$ html append attr on prevent val
                          show hide prop remove-class add-class
                          document-ready]]))


(defn log [a]
	(. js/console log (clj->js a)))

(def templates
	(reduce (fn [acc $el]
		(assoc acc (keyword (attr $el :id)) (. js/Handlebars compile (html $el))))
		{}
		($ "script[type='template/handlebars']")))

;Missing jQuery methods:

(defn jq-not [$el sel]
  (.not $el (name sel)))


(document-ready
 (fn []

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

   (log (count ($ "body *:visible")))
   (log (count (jq-not ($ "body *:visible") ".scrappy, .scrappy *")))


   (on (jq-not ($ "body *:visible") ".scrappy, .scrappy *") "hover"
       (fn [e]
         (log "hover!!")))

;;   (on (jq-not ($ "body *:visible")  :hover
;;       (fn [e]
;;         (this-as
;;          [elem]
;;          (log elem))))

;;   (on ($ "body *:visible") :hover
;;     (fn [e]
;;       (this-as [elem]
;;         (log elem))))

;;   (on ($ js/document) :click (fn [e]
;;                                (prevent e)
;;                                (-> ($ :.scrappy-hover) (add-class :scrappy-matched) (remove-class :scrappy-hover)))
;;       :.scrappy-hover)



   ))
