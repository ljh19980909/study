<template>
	<el-container>
		<el-header>
			<router-link to="/home">ele.me</router-link>
			<router-link to="/login">登录|注册</router-link>
		</el-header>
		<el-footer style="height: 50px;">
			<span>当前定位城市:</span>
			<span>定位不准时，请在城市列表中选择</span>
		</el-footer>
		<el-footer style="height: 40px;border-bottom: 1px solid #999;">
			<router-link to="/citys" class="a">郑州</router-link>
			<span class="el-icon-arrow-right"></span>
		</el-footer>
		<el-row style="margin-top: 10px;border-top: 1px solid #999;">
			<el-footer style="height: 40px;"><span>热门城市</span></el-footer>
			<el-col v-for="v in hot" :span="6">{{v.name}}</el-col>
		</el-row>
		<el-main style="border-top: 1px solid #999;">
			<el-row style="height: 2rem;line-height: 2rem;font-size: .475rem;color: #999;margin-top: -1rem;" v-for="(v,i) in group"
			 :gutter="20">
				<el-col :span="24" style="text-align: left;padding-left: 10px;color:#666;margin-top: .8rem;">{{v}}</el-col>
				<el-col v-for="v in groups[group[i]]" :span="6" style="color:#666;overflow: hidden;">{{v.name}}</el-col>
			</el-row>
		</el-main>
	</el-container>
</template>

<script>
	import 'element-ui/lib/theme-chalk/display.css';
	export default {
		name: "Header",
		data() {
			return {
				hot: "",
				group: '',
				groups: ""
			}
		},
		created() {
			this.axios.get('/v1/cities?type=hot', {}).
			then(data => {
				this.hot = data.data
			}).catch(err => {
				console.log(err)
			});
			this.axios.get('/v1/cities?type=group', {}).
			then(data => {
				this.group = Object.keys(data.data).sort()
				this.groups = data.data
			}).catch(err => {
				console.log(err)
			});
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

	.el-container {
		margin: -10px;
	}

	.el-header {
		background-color: #3190e8;
		color: #333;
		line-height: 70px;
	}

	.el-footer {
		background-color: #FFFFFF;
		line-height: 40px;
		border-bottom: 1px solid #e4e4e4;
	}

	a {
		color: #fff;
		text-decoration: none;
	}

	a:nth-child(2) {
		float: right;
	}

	span {
		font-size: .475rem;
	}

	span:nth-child(2) {
		color: #9f9f9f;
		font-weight: 900;
		float: right;
	}

	.a {
		color: #3190e8;
		font-size: 20px;
	}

	.el-icon-arrow-right {
		margin: 10px 0;
		font-size: 20px;
		fill: #999;
	}

	.el-col {
		color: #3190e8;
		border-bottom: .025rem solid #e4e4e4;
		border-right: .025rem solid #e4e4e4;
		height: 2.5rem;
		font: .9rem/1.75rem Microsoft YaHei;
		font-weight: 700;
		line-height: 2.5rem;
		text-align: center;
		background-color: #FFFFFF;
		box-sizing: border-box;
	}
</style>
