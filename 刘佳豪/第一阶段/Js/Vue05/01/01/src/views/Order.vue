<template>
	<div class="order">
		<h1>个人订单页面</h1>
		<h2>{{paramsV}}</h2>
	</div>
</template>

<script>
	export default {
		name: "Order",
		computed:{
			paramsV(){
				return`名字:${this.$route.params.proCount},价格:${this.$route.params.totalPrice}`
			}
		}
	}
</script>

<style scoped>
	.order {
		width: 100%;
		height: 100%;
		background-color: lightseagreen;
	}
</style>
