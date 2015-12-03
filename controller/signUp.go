package controller

import (
	"html/template"
	"net/http"
	"oj/models"
	//"gopkg.in/boj/redistore.v1"
)

type Tip struct {
	UnameTip  string
	UemailTip string
}

func HandlSignUp(w http.ResponseWriter, r *http.Request) {
	tip := Tip{UnameTip: "", UemailTip: ""}
	// tip.UemailTip = ""
	// tip.UnameTip = ""
	if r.Method == "GET" {
		Get(w, r, tip)
		return
	}

	if r.Method == "POST" {
		r.ParseForm()
		uinfo := new(models.UserInfo)
		uinfo.Uname = r.FormValue("uname")
		uinfo.Pwd = r.FormValue("pwd")
		uinfo.Uemail = r.FormValue("uemail")
		//检查用户名是否已经存在
		if models.IsunameTaken(uinfo.Uname, w) {
			tip.UnameTip = "此用户名已被占用"
			tip.UemailTip = ""
			Get(w, r, tip)
			return
		}
		//检查邮箱是否已经注册过了
		if models.IsuemailTaken(uinfo.Uemail, w) {

			tip.UnameTip = ""
			tip.UemailTip = "此邮箱名已注册"
			Get(w, r, tip)
			return
		}
		//在数据库中进行注册
		if err := uinfo.SignUpInDB(); err != nil {
			http.Error(w, err.Error(), http.StatusInternalServerError)
			return
		}

	}

}

//对页面进行渲染，unameTip，uemailTip为关于用户输入的用户名，邮箱的占有情况的提示，
func Get(w http.ResponseWriter, r *http.Request, tip Tip) {
	tmpl, err := template.ParseFiles("templates/signUp.html", "templates/base.tpl")
	if err != nil {
		http.Error(w, err.Error(), http.StatusInternalServerError)
		return
	}
	if err := tmpl.Execute(w, tip); err != nil {
		http.Error(w, err.Error(), http.StatusInternalServerError)
	}
}
