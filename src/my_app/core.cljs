(ns my-app.core
  (:require 
   [cljs.core.async :refer [go]]
   [my-app.ajax :refer [fetch-markdown]]
   [my-app.ejemplo :refer [ejemplo]]
   [my-app.ghribbon :refer [fork-me-ribbon]]
   [markdown-to-hiccup.core :as m]
   [reagent.core :as reagent]
   [reagent.dom :as rdom]))

;; Usage
;; (fetch-markdown "/content/resume.md")

(defn container [& children]
  [:div.container children])

#_[cljs.core.async :refer [chan put! take! <! >! timeout]]

(defn header []
  #_(let [content (reagent/atom [])]
    (go
      (fetch-markdown "/content/header.md" (fn [response]
                                             (->> response
                                                  m/md->hiccup
                                                  m/component
                                                  (reset! content)))))
    [:div.header (if (empty? @content) nil @content)]))

(defn app []
  [:div
   [fork-me-ribbon]
   [container [header]]
   [:hr]
   [ejemplo]])

(defn init []
  (rdom/render [app]
               (.getElementById js/document "root")))

(init)
