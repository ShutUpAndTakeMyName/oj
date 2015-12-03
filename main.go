package main

import (
	"net/http"
	"oj/controller"

	"github.com/codegangsta/negroni"
)

func main() {
	mux := http.NewServeMux()
	mux.HandleFunc("/", controller.HandlHome)
	mux.HandleFunc("/login", controller.HandlLogin)
	mux.HandleFunc("/signUp", controller.HandlSignUp)

	n := negroni.New(
		negroni.NewRecovery(),
		negroni.NewLogger(),
	)
	n.UseHandler(mux)
	n.Run(":8080")

}
