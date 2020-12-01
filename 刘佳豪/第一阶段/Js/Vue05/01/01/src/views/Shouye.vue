<template>
	<div class="shouye">
		<h1>home信息</h1>
		<router-link to="/homework/shouye/latest" active-class="news">最新Home</router-link>		
		<router-link to="/homework/shouye/guoji" active-class="news">国际home</router-link>
		<router-view></router-view>
	</div>
</template>

<script>
	export default {
		name:"Shouye"
	}
</script>

<style scoped>
	.news{
		color: red;
	}
</style>