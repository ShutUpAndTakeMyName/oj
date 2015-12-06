package controller

import (
	"net/http"
	"oj/models"
)

type LoginTip struct {
	UnameTip string
	PwdTip   string
	TmplData models.TmplState
}

func HandlLogin(w http.ResponseWriter, r *http.Request) {
	lgTip := LoginTip{UnameTip: "",
		PwdTip: ""}
	if r.Method == "GET" {
		if r.FormValue("exit") == "true" {
			session, _ := store.Get(r, "normLogin")
			session.Values["uname"] = r.FormValue("uname")
			session.Values["IsLogin"] = false
			lgTip.TmplData.State["IsLogin"] = session.Values["IsLogin"]
			session.Options.MaxAge = -1
			session.Save(r, w)
		}
		Render.HTML(w, http.StatusOK, "login", lgTip)
		return
	}

	if r.Method == "POST" {
		r.ParseForm()
		if !models.IsunameTaken(r.FormValue("uname"), w) {
			lgTip.UnameTip = "用户名不存在"
			lgTip.PwdTip = ""
			Render.HTML(w, http.StatusOK, "login", lgTip)
		}
		if !models.VerifyPwd(r.FormValue("uname"), r.FormValue("pwd")) {
			lgTip.UnameTip = ""
			lgTip.PwdTip = "密码错误"
			Render.HTML(w, http.StatusOK, "login", lgTip)
		}
		session, _ := store.Get(r, "normLogin")
		session.Values["Uname"] = r.FormValue("uname")
		session.Values["IsLogin"] = true
		lgTip.TmplData.State["IsLogin"] = session.Values["IsLogin"]
		session.Options.MaxAge = 0
		session.Save(r, w)
		return

	}
}
