(ns scrappy.core
	(:require
		[Handlebars]
		[jayq.util])
	(:use [jayq.core :only [$ html append attr on off prevent val
                          show hide prop remove-class add-class
                          document-ready text prop unbind]]))


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


;Start
(document-ready (fn []

  ;Append the sidebar
  (append ($ :body) ((:sidebar-template templates)))

  ;Bind events
  (on ($ "input[name='scrap-type']") :change
      #(if (= "multi" (val ($ "input[name='scrap-type']:checked")))
         (show ($ :#next-page-div))
         (hide ($ :#next-page-div))))

  (def $current ($ "div.select b.selector"))

  (on ($ ".key button") :click (fn [e]

    (remove-class ($ ".scrappy-hover, .scrappy-matched") "scrappy-hover scrappy-matched")

    (hover (jq-not ($ "body *:visible") ".scrappy, .scrappy *")
      (fn [e]
        (let [$el ($ (.-currentTarget e))
              classes (filter #(or (not= "scrappy-matched" %) (not= "scrappy-hover" %))
                        (clojure.string/split (or (attr $el "class") "") #"\s"))
              tag-name (clojure.string/lower-case (prop $el "tagName"))
              selector (clojure.string/join "." (into [tag-name] classes))
              matched (jq-not (jq-not ($ selector) ".scrappy, .scrappy *") $el)]

          ;(log selector)
          ;(log tag-name)
          (text $current selector)
          (remove-class ($ ".scrappy-hover, .scrappy-matched") "scrappy-hover scrappy-matched")
          (add-class $el :scrappy-hover)
          (add-class matched :scrappy-matched))))))

  ;for testing
  (.click ($ ".key button"))

  (on ($ js/document) :click :.scrappy-hover
    (fn [e]
      (prevent e)
      ;Stop matching
      (off ($ "body *:visible") "mouseenter mouseleave")))))



