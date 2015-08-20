(ns oj.handler
  (:use [hiccup.middleware :only (wrap-base-url)]
        oj.view)
  (:require [compojure.core :refer :all]
            [compojure.route :as route]
            [ring.middleware.defaults :refer [wrap-defaults site-defaults]]
            [ring.middleware.reload :refer [wrap-reload]]
            [aleph.http :as http]))

(def dev-env true)                                              ;;;; This a dev env

(defroutes app-routes
           (GET "/" [] (index-page))
           (route/not-found "Not Found"))

(defn start
  "Start our server in the specified port"
  [port]
  (http/start-server (wrap-defaults (wrap-base-url (if (= dev-env true) (wrap-reload #'app-routes) #'app-routes))
                                    site-defaults) {:port port}))


(defn -main [& args]
  (println "listening port 3000")
  (start 3000))
