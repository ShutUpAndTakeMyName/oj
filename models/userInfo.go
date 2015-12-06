package models

import (
	"gopkg.in/mgo.v2"
	"gopkg.in/mgo.v2/bson"
	"net/http"
)

type UserInfo struct {
	Id_    bson.ObjectId `bson:"_id"`
	Uname  string        `bson:"uname"`
	Pwd    string        `bson:"pwd"`
	Uemail string        `bson:"uemail"`
}

const (
	URLofDB = "localhost:27017"
)

//检查用户名是否被占用,被占用返回true,w只是用来报错时候用
func IsunameTaken(uname string, w http.ResponseWriter) bool {
	con, err := mgo.Dial(URLofDB)
	if err != nil {
		http.Error(w, err.Error(), http.StatusInternalServerError)
	}
	defer con.Close()
	db := con.DB("ojDataBase")
	c := db.C("uAcountInfo")
	var res []UserInfo
	c.Find(bson.M{"uname": uname}).All(&res)
	if len(res) == 0 {
		return false
	} else {
		return true
	}
}

//检查邮箱是否被占用，被占用返回true,w只是用来报错时候用
func IsuemailTaken(uemail string, w http.ResponseWriter) bool {
	con, err := mgo.Dial(URLofDB)
	if err != nil {
		http.Error(w, err.Error(), http.StatusInternalServerError)
	}
	defer con.Close()
	db := con.DB("ojDataBase")
	c := db.C("uAcountInfo")
	var res []UserInfo
	c.Find(bson.M{"uemail": uemail}).All(&res)
	if len(res) == 0 {
		return false
	} else {
		return true
	}
}

//在数据库中注册这个用户
func (this *UserInfo) SignUpInDB() error {
	this.Id_ = bson.NewObjectId()
	con, err := mgo.Dial(URLofDB)
	defer con.Close()
	db := con.DB("ojDataBase")
	c := db.C("uAcountInfo")
	err = c.Insert(this)
	return err
}

func VerifyPwd(uname string, pwd string) bool {
	con, _ := mgo.Dial(URLofDB)
	defer con.Close()
	db := con.DB("ojDataBase")
	c := db.C("uAcountInfo")
	var res []UserInfo
	c.Find(bson.M{"uname": uname}).All(&res)
	if res[0].Pwd == pwd {
		return true
	} else {
		return false
	}
}
