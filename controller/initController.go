package controller

import (
	//"github.com/gorilla/sessions"
	"github.com/unrolled/render"
	"gopkg.in/boj/redistore.v1"
)

//Render :render data var
var Render *render.Render

var store *redistore.RediStore

// Init :init controller methods
func Init() {
	Render = render.New(render.Options{
		Directory: "templates",
		Layout:    "layout",
	})
	var err error
	store, err = redistore.NewRediStore(10, "tcp", ":6379", "", []byte("secret-key"))
	if err != nil {
		//write in log maybe
	}
}
