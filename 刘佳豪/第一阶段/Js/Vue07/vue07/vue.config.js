// vue.config.js,在vue-cli工程启动的时候,脚手架会查询根目录里是否有该文件,如果有,引入;该文件里语法为CommonJS
// 导出的对象里是对当前项目的配置
module.exports = {
	//为该项目设置代理,请求127.0.0.1:3434服务器
	//该字段用于对vue-cli的开发时的服务器作出的配置
	devServer: {
		port:"8123",
		//服务器运行完毕之后是否自动打开浏览器
		open:true,
		//配置开发服务器的代理
		// proxy:"http://localhost:3434"
		proxy:{
			'/api':{
				target:"http://localhost:3434",
				changeOrigin:true,
				//真正发起请求时,将触发代理的标识去掉,不让其成为路由的一部分,还保持之前的路由
				pathRewrite:{
					"^/api":""
				}
			},
		},
	},
	publicPath:'./',
}
