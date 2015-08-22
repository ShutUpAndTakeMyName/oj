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
       [:th {:class "one wide"} "Solved"]
       [:th {:class "one wide"} "ID"]
       [:th {:class "ten wide"} "Title"]
       [:th {:class "four wide"} "Ratio"]]]
     [:tbody
      [:tr
       [:td {:class "center aligned"}
         [:i {:class "checkmark icon"}]]
       [:td
        [:a {:href "#"} "1000"]]
       [:td
        [:a {:href "#"} "A + B Problem"]]
       [:td "31.70%(155389/490216)"]]
      [:tr
       [:td  ]
       [:td
        [:a {:href "#"} "1001"]]
       [:td
        [:a {:href "#"} "Sum Problem"]]
       [:td "25.23%(86921/344535)"]]
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


