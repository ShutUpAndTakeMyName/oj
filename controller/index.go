package controller

import (
	"html/template"
	"net/http"
)

func HandlHome(w http.ResponseWriter, req *http.Request) {
	tmpl, err := template.ParseFiles("templates/index.html", "templates/base.tpl")
	if err != nil {
		http.Error(w, err.Error(), http.StatusInternalServerError)
		return
	}
	if err := tmpl.Execute(w, nil); err != nil {
		http.Error(w, err.Error(), http.StatusInternalServerError)
	}
}
