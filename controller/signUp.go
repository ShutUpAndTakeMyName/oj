package controller

import (
	"net/http"
	"oj/models"
)

type SignTip struct {
	UnameTip  string
	UemailTip string
}

func HandlSignUp(w http.ResponseWriter, r *http.Request) {
	tip := SignTip{UnameTip: "", UemailTip: ""}

	if r.Method == "GET" {
		Render.HTML(w, http.StatusOK, "signUp", tip)
	}

	if r.Method == "POST" {
		r.ParseForm()
		uinfo := &models.UserInfo{
			Uname:  r.FormValue("uname"),
			Pwd:    r.FormValue("pwd"),
			Uemail: r.FormValue("uemail")}
		//检查用户名是否已经存在
		if models.IsunameTaken(uinfo.Uname, w) {
			tip.UnameTip = "此用户名已被占用"
			tip.UemailTip = ""
			Render.HTML(w, http.StatusOK, "signUp", tip)
			return
		}
		//检查邮箱是否已经注册过了
		if models.IsuemailTaken(uinfo.Uemail, w) {

			tip.UnameTip = ""
			tip.UemailTip = "此邮箱名已注册"
			Render.HTML(w, http.StatusOK, "signUp", tip)
			return
		}
		//在数据库中进行注册
		if err := uinfo.SignUpInDB(); err != nil {
			http.Error(w, err.Error(), http.StatusInternalServerError)
			return
		} else {
			Render.HTML(w, http.StatusOK, "signUpSecusess", nil)
		}

	}

}
