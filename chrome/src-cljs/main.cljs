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

(defn click
  ([$el] (.click $el))
  ([$el handler] (.click $el handler)))


;Start
(document-ready (fn []

  ;Append the sidebar
  (append ($ :body) ((:sidebar-template templates)))

  ;Bind events
  (on ($ "input[name='scrap-type']") :change
      #(if (= "multi" (val ($ "input[name='scrap-type']:checked")))
         (show ($ :#next-page-div))
         (hide ($ :#next-page-div))))

  ;DOM elements
  (def $current ($ "div.matches b.selector"))

  (def $matches-pre ($ "div.scrappy div.matches pre"))

  (def $match-button ($ "div.scrappy div.matches button"))

  (def $results-list ($ "div.scrappy div.results ul"))

  (def $download-button ($ "div.scrappy div.results button"))

  (def matches (atom {}))

  ;Setup the start matching
  (on ($ ".key button") :click (fn [e]

    (remove-class ($ ".scrappy-hover, .scrappy-matched") "scrappy-hover scrappy-matched")

    (hover (jq-not ($ "body *:visible") ".scrappy, .scrappy *")
      (fn [e]
        (let [$el ($ (.-currentTarget e))
              classes (filter #(or (not= "scrappy-matched" %) (not= "scrappy-hover" %))
                        (clojure.string/split (or (attr $el "class") "") #"\s"))
              tag-name (clojure.string/lower-case (prop $el "tagName"))
              selector (clojure.string/join "." (into [tag-name] (remove #{"scrappy-hover"} classes)))
              matched (jq-not ($ selector) ".scrappy, .scrappy *")]

          ;(log selector)
          ;(log tag-name)
          (text $current selector)
          (remove-class ($ ".scrappy-hover, .scrappy-matched") "scrappy-hover scrappy-matched")
          (add-class $el :scrappy-hover)
          (add-class (jq-not matched $el) :scrappy-matched)
          (text ($ "div.matches b.count") (str (count matched) " Matches")))))))

  ;for testing
  (val ($ ".matches input") "Questions")
  (click ($ ".key button"))

  ;On match selection
  (on ($ js/document) :click :.scrappy-hover
    (fn [e]
      (let [matched ($ (text $current))]
        (prevent e)
        ;Stop matching
        (off ($ "body *:visible") "mouseenter mouseleave")
        (text ($ "div.matches b.count") (str (count matched) " Matches"))
        (html $matches-pre "")
        ;Enable matching action
        (.removeAttr $match-button "disabled")
        (doseq [el matched]
          (log el)
          (append $matches-pre (str "<p>" (text ($ el)) "</p>"))))))

  ;On match button click
  (click $match-button (fn [e]
                             (let [key (val ($ ".matches input"))
                                   values ($ (text $current))]
                               (prevent e)
                               (reset! matches (assoc @matches key values))
                               (log @matches)
                               (log (map #(str "<li>" %1 ": " (count %2) " matches</li>") (keys @matches) (vals @matches)))
                               (html $results-list (clojure.string/join (map #(str "<li>" %1 ": " (count %2) " matches</li>") (keys @matches) (vals @matches))))
                                       )))


                ))






