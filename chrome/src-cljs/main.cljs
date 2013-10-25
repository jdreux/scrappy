(ns scrappy.core
	(:require
		[Handlebars]
		[jayq.util])
	(:use [jayq.core :only [$ html append attr on prevent val
                          show hide prop remove-class add-class
                          document-ready text]]))


(defn log [a]
	(. js/console log (clj->js a)))

(def templates
	(reduce (fn [acc $el]
		(assoc acc (keyword (attr $el :id)) (. js/Handlebars compile (html $el))))
		{}
		($ "script[type='template/handlebars']")))

;Missing jQuery methods:

(defn jq-not [$el sel]
  (.not $el sel))

(defn hover [$el handler]
  (.hover $el handler))

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

   (def $current ($ "div.select b.selector"))


   (hover (jq-not ($ "body *:visible") ".scrappy, .scrappy *")
       (fn [e]
         (let [$el ($ (.-currentTarget e))
               classes (into
                        [" "]
                        (filter #(or (not= "scrappy-matched" %) (not= "scrappy-hover" %))
                                (clojure.string/split (or (attr $el "class") "") #"\s"))    )
               selector (str (clojure.string/join "." classes))
               matched (jq-not (jq-not ($ selector) ".scrappy, .scrappy *") $el)]
           (log selector)
           (log (.-length matched))
           (text $current selector)
           (remove-class ($ ".scrappy-hover, .scrappy-matched") "scrappy-hover scrappy-matched")
           (add-class $el :scrappy-hover)
           (add-class matched :scrappy-matched)
            )))

   ))
