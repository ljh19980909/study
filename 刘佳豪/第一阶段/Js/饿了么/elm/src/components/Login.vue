<template>
	<el-container>
		<el-header style="height: 50px;">
			<router-link to="/home" class="el-icon-arrow-left"></router-link>
			<router-link to="/login">密码登录</router-link>
		</el-header>
		<el-input placeholder="账号" v-model="input" clearable></el-input>
		<el-input placeholder="密码" v-model="input" show-password></el-input>
		<el-input placeholder="验证码" v-model="input" show-password></el-input>
	</el-container>
</template>

<script>
	export default {
		name: "Login",
		data() {
			return {
				input: ''
			}
		}
	}
</script>

<style>
	* {
		margin: 0;
		padding: 0;
	}

	body {
		background-color: #f5f5f5;
	}

	.el-header {
		width: 100%;
		background-color: #3190e8;
		color: #333;
		line-height: 50px;
	}

	a {
		color: #fff;
		text-decoration: none;
		font-size: 20px;
	}

	a:nth-child(2) {
		position: absolute;
		left: 50%;
		transform: translateX(-50%);
	}

	.el-icon-arrow-left {
		margin-left: -1rem;
		font-size: 25px;
		fill: #999;
	}

	.el-footer {
		background-color: #FFFFFF;
		border: 1px solid #F5F5F5;
		color: #333;
		text-align: center;
		line-height: 60px;
	}
	.el-input{
		width: 100%;
	}
</style>
