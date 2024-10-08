(ns my-app.ejemplo
  (:require [ajax.core :refer [GET]]))

(defn do-download-resume []
  (let [link (.createElement js/document "a")]
    (set! (.-href link) "/resume.pdf")
    (set! (.-download link) "Daniel_Baez_Resume.pdf")
    (.appendChild (.-body js/document) link)
    (.click link)
    (.removeChild (.-body js/document) link)))

(defn download-resume []
  ;; Send event to Google Analytics
  (js/gtag "event" "download_resume" 
           (clj->js {:event_category "button"
                     :event_label "Download Resume Button"}))
  ;; actually download the resume
  (do-download-resume))

(defn download-resume-click-handler [evt]
  (.preventDefault evt)
  (download-resume))

(defn ejemplo []
  [:div.container
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


