<template>
	<div class="login">
		<div class="page-header">
			<h1>登陆页面<small>请输入用户名和密码</small></h1>
		</div>
		<div class="jumbotron">
			<div class="input-group input-group-lg center-block text-center">
				<input type="text" placeholder="请输入用户名" class="input-lg" v-model="username">
				<br><br>
				<input type="text" placeholder="请输入密码" class="input-lg" v-model="password">
				<br><br>
				<button class="btn btn-primary btn-lg" @click="userLogin">登录</button>
			</div>
		</div>
	</div>
</template>

<script>
	/*
		用户自动登录，设置登录时效
			通过token检查用户登录是否过期
			token：令牌，证明，票据，由服务端生成，是一个字符串，大部分情况下为加密过后的字符串，作为用户访问服务器的标识
			思路：
				1、首次用户登录时，服务端检查用户名密码是否正确，如果正确，登陆成功，生成token，连同本次登录信息一起返回给前端，前端拿到token之后将其持久存储
				2、以后用户 只要访问服务器，就会携带token，服务端每次都会检查token是否过期，如果过期，返回token过期失败状态码，没有过期，正常返回数据；前端拿到服务器返回的值后判断如何展示页面（正常展示数据or让用户重新登陆）
	*/
	export default {
		name: "Login",
		data() {
			return {
				username: "",
				password: ""
			}
		},
		methods: {
			userLogin() {
				let url="/login"
				//发起网络请求
				this.axios.post(url, {
					username: this.username,
					password: this.password
				}).then(res => {
					console.log(res)
					if(res.status=="ok"){
						let redPath;
						if(this.$route.query.redirect){
							redPath=this.$route.query.redirect;
						}else{
							redPath="/product"
						}
						this.$router.push(redPath)
					}else{
						alert("登录失败!")
					}
				}).catch(err => {
					console.log(err)
				})
			}
		}
	}
</script>

<style scoped>

</style>
