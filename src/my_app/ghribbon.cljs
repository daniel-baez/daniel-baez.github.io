(ns my-app.ghribbon)


(defn fork-me-ribbon []
  (let [atts {:href "https://github.com/daniel-baez/daniel-baez.github.io"
              :title "Fork me on GitHub"}]
    [:div.github-fork-ribbon
     [:a atts "Fork me on GitHub"]]))


