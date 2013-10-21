(ns scrappy.core
  (:require
    [Handlebars]
    [dommy.utils :as utils]
    [dommy.core :as d])
  (:use-macros
    [dommy.macros :only [node sel sel1]]))

;Utility Methods
(defn log [a]
	(. js/console log a))

(defn toggle-text [el texts]
  (let [i ]))

;Load all templates
(def templates
	(reduce (fn [acc el]
		(assoc acc (keyword (d/attr el :id)) (. js/Handlebars compile (d/html el))))
		{}
		(sel "script[type='template/handlebars']")))

;Append the sidebar
(d/set-html! (sel1 :body) ((:sidebar-template templates)))

;Bind events

;Scrap type toggle
(doseq [el (sel "input[name='scrap-type']")]
  (d/listen! el :change
     (fn [e]
       (let [value (d/value (.-currentTarget e))]
         (if (= value "multi")
           (d/show! (sel1 :#next-page-div))
           (d/hide! (sel1 :#next-page-div)))))))

;Start matching button
;; (d/listen! (sel1 ".key button") :click
;;   )

(log (take 10 (repeatedly [1 2])))

(defn start-matching!
  )
