(ns oj.view
  (:use [hiccup core page]))

(defn header []
  (html
    [:div {:class "ui borderless menu"}
     [:div {:class "ui text container"}
      [:div {:class "item"}
       [:img {:src "http://ac-06fhfsm0.clouddn.com/14c4e432dc6e2b58.png" :class "ui image" :height "30em" }]]
      [:a {:class "item"} "Problems"]
      [:a {:class "item"} "Contests"]
      [:a {:class "item"} "Statue"]]]))

(defn problems-table []
  (html
    [:h4 {:class "ui horizontal divider header" :style "margin-top:20px"}
     [:i {:class "bomb icon"}] "Problems"]
    [:table {:class "ui celled striped blue table" :style "margin-top:20px"}
     [:thead
      [:tr
       [:th {:colspan "3"} "Git Repository"]]]
     [:tbody
      [:tr
       [:td {:class "collapsing"}
        [:i {:class "folder icon"}] "node_modules"]
       [:td
        [:a {:href "#"} "Initial commit"]]
       [:td {:class "right aligned collapsing"} "10 hours ago"]]
      ]]))

(defn index-grid []
  (html
    [:div {:class "ui internally grid"}
     [:div {:class "row"}
      [:div {:class "three wide column"}]
      [:div {:class "ten wide column"}
       (problems-table)]
      [:div {:class "three wide column"}]]]))

(defn index-page []
  (html5
    [:head
     [:title "Hello world."]
     (include-css "http://cdn.bootcss.com/semantic-ui/2.0.8/semantic.min.css")
     (include-js "http://cdn.bootcss.com/jquery/1.11.3/jquery.min.js")
     (include-js "http://cdn.bootcss.com/semantic-ui/2.0.8/semantic.min.js")]
    [:body
     (header)
     (index-grid)]))


