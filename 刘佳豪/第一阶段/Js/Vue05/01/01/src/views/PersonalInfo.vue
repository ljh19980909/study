<template>
	<div class="info">
		<h1>个人信息页面</h1>
		<h2>{{a}}</h2>
	</div>
</template>

<script>
	export default {
		name: "PersonalInfo",
		computed:{
			a(){
				return`Who:${this.$route.query.a},So:${this.$route.query.b}`
			}
		}
	}
</script>

<style scoped>
	.info {
		width: 100%;
		height: 100%;
		background-color: lightsalmon;
	}
</style>
