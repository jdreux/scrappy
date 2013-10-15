(ns scrappy.core
	(:require 
		[Handlebars :as hbs]
		[dommy.utils :as utils]
    	[dommy.core :as dommy])
	(:use-macros
    [dommy.macros :only [node sel sel1]]))

;(js/alert "Hello from ClojureScript!!!")
(. js/console log "ANOTHER TEST:" js/Handlebars js/window (aget js/window "Templates"))

(def sidebar (node [:p.left "TEST"]))

(dommy/append! (sel1 :body) sidebar)


