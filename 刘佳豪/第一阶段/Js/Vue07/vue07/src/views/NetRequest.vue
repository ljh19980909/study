<template>
	<fieldset>
		<legend>
			<h2>网络请求</h2>
		</legend>
		<input type="text" placeholder="用户名" v-model="v1">
		<input type="text" placeholder="密码" v-model="v2">
		<button @click="getReq">get请求</button>
		<button @click="postReq">post请求</button>
	</fieldset>
</template>

<script>
	import qs from "../../node_modules/querystring";
	export default {
		name: "NetRequest",
		data() {
			return {
				v1: "",
				v2: ""
			}
		},
		methods: {
			getReq() {
				/*
					get(请求地址,传递的参数对象)
				*/
				this.axios.get("/api/get", {
					params: {
						username: this.v1,
						password: this.v2
					}
				}).then(data => {
					//then回调函数里的参数不是后台返回的数据,而是封装好的一个完整的数据对象,真正的数据,在该对象里的data字段里
					console.log(data)
				}).catch(err => {
					console.log(err)
				});
			},
			postReq() {
				// post请求: 如果传递数据,数据的格式默认是json数据格式
				// 如果后台 只解析键值对的数据,axios在发起post请求时需要对数据格式做转化,可以通过querystring模块
				this.axios.post("/api/post", qs.stringify({
					username: this.v1,
					password: this.v2
				})).then(result => {
					console.log(result.data)
				}).catch(error => {
					console.log(error)
				});
			},
		}
	}
	
	/*
		vue项目在开发阶段,如果发起网络请求,会出现跨域问题,vue-cli可以让我们通过proxy代理发起请求,暂时解决开发期间遇到的跨域问题
		proxy代理的配置步骤:
			1.需要在当前项目的根目录位置新建一个文件,文件名:vue.config.js
			
		
	*/
</script>

<style scoped>

</style>
