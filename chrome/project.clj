(defproject scrappy-chrome "0.0.1"
  :dependencies [
    [org.clojure/clojure "1.5.1"]
    [org.clojure/clojurescript "0.0-1934" :exclusions [org.apache.ant/ant]]
    [prismatic/dommy "0.1.1"]]
  :plugins [[lein-cljsbuild "0.3.4"]]
  :hooks [leiningen.cljsbuild]
  :cljsbuild {
    :builds [{
        :source-paths ["src-cljs"]
        :compiler {
          :output-to "src/inject/main-cljs.js"
;          :source-map "src/inject/main-cljs.js.map"
          :optimizations :whitespace
          ;:externs ["js/handlebars.js"]
          :foreign-libs [
            {:file "js/handlebars.js" :provides ["Handlebars"]}
            {:file "src/inject/compiled-hbs.js" :provides ["Handlebars.templates"]}
          ]
          :pretty-print true}}]})