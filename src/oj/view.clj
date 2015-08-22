(ns oj.view
  (:use [hiccup core page]))

(defn head []
  (html
    [:head
     [:title "Hello world."]
     (include-css "//cdn.bootcss.com/semantic-ui/2.0.8/semantic.min.css")
     (include-css "/font.css")
     (include-js "//cdn.bootcss.com/jquery/1.11.3/jquery.min.js")
     (include-js "//cdn.bootcss.com/semantic-ui/2.0.8/semantic.min.js")
     (:link {:href "'http://fonts.googleapis.com/css?family=Roboto" :rel "stylesheet" :type "text/css"})]))

(defn header []
  (html
    [:div {:class "ui borderless menu"}
     [:div {:class "ui text container"}
      [:div {:class "item"}
       [:img {:src "http://ac-06fhfsm0.clouddn.com/14c4e432dc6e2b58.png" :class "ui image" :height "30em" }]]
      [:a {:class "item"} "Problems"]
      [:a {:class "item"} "Contests"]
      [:a {:class "item"} "Statues"]]]))

(defn problems-table []
  (html
    [:h4 {:class "ui horizontal divider header" :style "margin-top:20px"}
     [:i {:class "bomb icon"}] "Problems"]
    [:table {:class "ui celled striped blue table" :style "margin-top:20px"}
     [:thead
      [:tr
       [:th {:class "one wide"} "Solved"]
       [:th {:class "one wide"} "ID"]
       [:th {:class "nine wide"} "Title"]
       [:th {:class "five wide"} "Ratio"]]]
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

(defn body-grid [content]
  (html
    [:div {:class "ui internally grid"}
     [:div {:class "row"}
      [:div {:class "three wide column"}]
      [:div {:class "ten wide column"}
       (content)]
      [:div {:class "three wide column"}]]]))

(defn index-grid []
  (body-grid problems-table))

(defn index-page []
  (html5
    (head)
    [:body
     (header)
     (index-grid)]))

(defn problem []
  (html
    [:div {:class "ui raised blue segment" :style "margin-top: 20px"}
     [:div {:style "margin-top: 20px"}
      [:h1 "A and B and Operators "]]
     [:br]
     [:div
      [:small "CPU: 1s"] [:br]
      [:small "MEMORY: 65535KB"]]
     [:br]
     [:p "Given two integers A and B and one of the following operators {+,\u00AD-,%,/,*}. You have to perform A {operator} B and output its result. For example, if you are given 5 and 3 as two numbers and + as the operators, then you have to give the answer of 5 + 3."]
     [:h2 "Input Specification"]
     [:p "The first line contains a positive integer T ( T <= 100 ). In the following T lines, you will be given two integers A, B and a character. The absolute value of A and B will not exceed 10^9."]
     [:h2 "Output Specification"]
     [:p "For each case print the case number, and then A {operator} B result. Check the sample input and output for further details."]
     [:h2 "Sample Input"]
     [:pre "1 1"]
     [:h2 "Sample Output"]
     [:pre "2"]
     ]))

(defn problem-grid []
  (body-grid problem))

(defn problem-page []
  (html5
    (head)
    [:body
     (header)
     (problem-grid)]))


