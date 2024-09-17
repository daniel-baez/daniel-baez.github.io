(ns my-app.ajax
  (:require [ajax.core :refer [GET]]))

(defn fetch-markdown [url handler]
  (GET url {:handler handler
            :error-handler (fn [error]
                             (js/console.error "Error while fetching markdown:" error))
            :response-format :text
            :keywords? true}))


