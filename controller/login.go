package controller

import (
	//"github.com/gorilla/sessions"
	"html/template"
	"net/http"
)

//var store = sessions.NewCookieStore([]byte("something-very-secret"))

func HandlLogin(w http.ResponseWriter, r *http.Request) {

	if r.Method == "GET" {
		//fp := path.Join("templates", "login.html")

		tmpl, err := template.ParseFiles("templates/login.html", "templates/base.tpl")
		if err != nil {
			http.Error(w, err.Error(), http.StatusInternalServerError)
			return
		}
		if err := tmpl.Execute(w, nil); err != nil {
			http.Error(w, err.Error(), http.StatusInternalServerError)
		}
	}

	// if r.Method == "POST" {
	// 	uname := r.FormValue("uname")
	// 	upwd := r.FormValue("pwd")
	// 	r.Cookie(name)
	// }

}
