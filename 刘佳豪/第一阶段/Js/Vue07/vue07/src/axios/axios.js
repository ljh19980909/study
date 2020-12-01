import Vue from 'vue'
import axios from 'axios'
import VueAxios from 'vue-axios'
import router from "../router/index.js"

Vue.use(VueAxios, axios)
/*
	前端目前常用的网络请求
		1. ajax
		2. axios
		3. fetch
		
			axios网络请求，基于Promise的网络请求
			1.内部实现还是基于XMLHttpRequest
			2.支持Promise 语法
			3.可以实现对请求和响应的拦截
			
			4.转换请求和响应请求的数据
			5.自动转化数据为json
			
			注意：axios是一个前端的网络请求库，并不是vue独有的，当然vue里有专门支持axios的插件
			vue里使用vue-axios的步骤
				npm i axios vue-axios
			1.下载 axios和vue-axios
			2.再main.js里配置axios
				import axios from 'axios'
				import VueAxios from 'vue-axios'
				Vue.use(VueAxios, axios)
			3.书写对应于法,发起网络请求
			
*/

/*
	axios可以为每次请求和响应设置拦截,达到添加数据或者预处理数据的需求
*/
//设置请求拦截器
axios.interceptors.request.use(function(config) {
	//请求拦截成功的函数
	// console.log("请求拦截成功!",config)
	// 每次请求服务器时,携带上token,我们选择将token存储请求头,不放到data数据里
	if (localStorage.getItem("user_token")) {
		config.headers.userAuth = localStorage.getItem("user_token");
	}
	return config;
}, function(error) {
	//请求拦截发生错误的函数
	console.log("请求拦截失败!", config)
	return Promise.reject(error);
})
//设置响应拦截器
axios.interceptors.response.use(function(response) {
	//请求拦截成功的函数
	// console.log("响应拦截成功!",response)
	if (response.status == 200 && response.data.status == "ok") {
		localStorage.setItem("user_token", response.data.userToken)
	}
	return response.data;
}, (error) => {
	if (error.response.status == 409) {
		//token过期，清除token并跳转至Login页面
		localStorage.removeItem("user_token");
		router.push({
			path: "/login",
			query: {
				redirect: router.currentRoute.fullPath
			}
		});
	}
	//请求拦截发生错误的函数
	// console.log("响应拦截失败!",config)
	return Promise.reject(error);
})

//设置请求的baseUrl
// axios.defaults.baseURL="https://elm.cangdu.org";
 axios.defaults.baseURL=process.env.VUE_APP_BASE_URL;

/*
	vue-cli3 多环境开发
	在项目的根目录新建两个文件，文件名
	.env.dev  ---开发时的配置文件
	.env.prod   ---生产时的配置文件
	
	在配置文件里可以书写一些配置常量
	NODE_ENV 环境标识
	用户还可以自定义常量,但是如果要自定义,必须以VUE_APP_开头
	
	如果想要vue-cli脚手架 在对应的环境启动时加载对应的配置文件,我们需要去修改package.json文件的启动命令
	
*/
