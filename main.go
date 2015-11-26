package main

import (
	"net/http"

	"github.com/codegangsta/negroni"
	"github.com/unrolled/render"
)

func main() {
	r := render.New(render.Options{})
	mux := http.NewServeMux()
	mux.HandleFunc("/", func(w http.ResponseWriter, req *http.Request) {
		r.HTML(w, http.StatusOK, "index", nil)
	})

	n := negroni.New(
		negroni.NewRecovery(),
		negroni.NewLogger(),
	)
	n.UseHandler(mux)
	n.Run(":8080")

}
