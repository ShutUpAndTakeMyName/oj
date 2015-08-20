(ns oj.view
  (:use [hiccup core page]))

(defn index-page []
  (html5
    [:head
     [:title "Hello world."]
     (include-css "http://cdn.bootcss.com/semantic-ui/2.0.8/semantic.min.css")]
    [:body
     [:div {:class "ui borderless main menu"}
      [:div {:class "ui text container"}
       [:a {:class "header item"} "Online Judge"]
       [:a {:class "item"} "Problems"]
       [:a {:class "item"} "Contests"]
       [:a {:class "item"} "Statue"]]]]))
