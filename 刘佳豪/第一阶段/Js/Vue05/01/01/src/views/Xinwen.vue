<template>
	<div class="xinwen">
		<h1>新闻信息</h1>
		<router-link to="/homework/xinwen/latestnews" active-class="news">最新news</router-link>
		<router-link to="/homework/xinwen/guojinews" active-class="news">国际news</router-link>
		<router-view></router-view>
	</div>
</template>

<script>
	export default {
		name:"Xinwen"
	}
</script>

<style scoped>
.news{
	color: red;
}
</style>