<template>
	<div class="header">
		<nav class="nav navbar navbar-inverse">
			<a href="###" class="navbar-brand">购物车</a>
			<p class="pull-right navbar-text">
				购物车一共{{totalCount}}件，总价{{totalPrice}}元
				<button class="btn btn-danger" @click="$router.push('/cart').catch(()=>{})">购物车</button>
			</p>
		</nav>
	</div>
</template>

<script>
	import Product from "../components/Product.vue";
	export default {
		name: "Header",
		data() {
			return {
				a: [],
			}
		},
		components: {
			Product,
		},
		created() {
			this.totalVue.$on("pro_event", (arr) => {
				this.a = arr;
			})
		},
		computed: {
			//总件数
			totalCount() {
				return this.a.reduce((total, v) => {
					total += v.count;
					return total
				}, 0)
			},
			// 总价格
			totalPrice() {
				return this.a.reduce((total, v) => {
					total += v.count*v.product.price;
					return total
				}, 0)
			}
		}
	}
</script>

<style scoped>
</style>
