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



(defn index-page []
  (html5
    [:head
     [:title "Hello world."]
     (include-css "http://cdn.bootcss.com/semantic-ui/2.0.8/semantic.min.css")]
    [:body
     (header)]))


