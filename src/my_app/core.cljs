(ns my-app.core
  (:require [ajax.core :refer [GET]]
            [goog.string :as gstring]
            [goog.string.format]
            [hickory.core :refer [parse parse-fragment as-hiccup]]
            [hickory.core :as hickory]
            [hickory.convert :as convert]
            [markdown.core :as markdown :refer [md->html]]
            [reagent.core :as reagent]
            [reagent.dom :as rdom]))

(defn download-resume []
  (let [link (.createElement js/document "a")]
    (set! (.-href link) "/resume.pdf")
    (set! (.-download link) "Daniel_Baez_Resume.pdf")
    (.appendChild (.-body js/document) link)
    (.click link)
    (.removeChild (.-body js/document) link)))

(defn download-resume-click-handler [evt]
  (.preventDefault evt)
  (download-resume))

(def resume-structure (reagent/atom []))

(reset! resume-structure [:div.container
                          [:div.header
                           [:h1 "Daniel Baez"]
                           [:p
                            [:strong "Senior Software Engineer | Google Cloud Certified"]
                            [:br] "San Francisco, California, United States"
                            [:br] "LinkedIn: " [:a {:href "https://www.linkedin.com/in/baezdaniel"} "LinkedIn"] " | " "Resume: " [:a {:href "#" :on-click download-resume-click-handler } "pdf"]
                            ]]
                          [:div.section
                           [:h2 "Professional Summary"]
                           [:p "Accomplished Senior Software Engineer with over 10 years of experience..."]]
                          [:div.section
                           [:h2 "Professional Experience"]
                           [:h3 "Senior Software Engineer, Motive (formerly KeepTruckin) — San Francisco"]
                           [:p [:em "October 2019 - Present"]]
                           [:ul
                            [:li "Led IoT platform enhancements, focusing on scalability, reliability, and extensibility, driving key competitive advantages."]
                            [:li "Championed architectural updates and the development of a unified code search portal, significantly improving system performance and developer collaboration."]
                            [:li "Introduced agile practices and educational programs, boosting engineering standards and team productivity."]]
                           [:h3 "Senior Software Engineer, Fitbit (now part of Google) — San Francisco Bay Area"]
                           [:p [:em "January 2018 - September 2019"]]
                           [:ul
                            [:li "Managed and optimized critical services during peak periods, ensuring robust system performance and scalability."]
                            [:li "Spearheaded the integration of Google Cloud Platform services, enhancing cloud adaptability and service reliability."]]
                           [:h3 "Senior Software Engineer, The Meet Group — San Francisco Bay Area"]
                           [:p [:em "October 2016 - December 2017"]]
                           [:ul
                            [:li "Key player in the integration and overhaul of systems post-acquisition, improving system interoperability and user experience."]
                            [:li "Led technical recruitment and training efforts, significantly enhancing team capabilities and integration processes."]]]
                          [:div.section
                           [:h2 "Technical Skills"]
                           [:ul
                            [:li [:strong "Languages:"] " Java, JavaScript, Ruby, Go"]]]])

(defn pr2 [x]
  (println x)
  (js/console.log x)
  x)

(defn wrap [x]
  (gstring/format "<div>%s</div>" x))

(defn markdown-to-hiccup [md]
  (-> md
      markdown/md->html
      #_pr2
      wrap
      #_pr2
      hickory/parse
      #_as-hiccup
      hickory/as-hickory
      convert/hickory-to-hiccup))

(defn fetch-json []
  (GET "/resume.md"
       {:handler (fn [response]
                   (println 1 response)
                   (try
                     (println (markdown-to-hiccup response))
                     (catch js/Error e
                       (println "Error parsing HTML:" e))))
        :error-handler (fn [error]
                         (println "Error fetching JSON:" error))}))

(defn fork-me-ribbon []
  [:div.github-fork-ribbon
   [:a {:href "https://github.com/daniel-baez/daniel-baez.github.io" :title "Fork me on GitHub"} "Fork me on GitHub"]])

(defn resume []
  @resume-structure)

(defn app []
  [:div
   [fork-me-ribbon]
   [resume]])

(defn init []
  (fetch-json)
  (rdom/render [app]
               (.getElementById js/document "root")))

(init)
