package models

//用于给页面反馈状态信息，比如用户是否登录，或者该激活导航栏哪个状态
type TmplState struct {
	State map[interface{}]interface{}
}
