<template>
	<div id="app">
		<!-- <NetRequest></NetRequest> -->
		<Header />
		<router-view />
	</div>
</template>

<style>
	@import url("../node_modules/bootstrap/dist/css/bootstrap.min.css");
</style>
<script>
	import Header from "./views/Header.vue";
	export default {
		components: {
			Header
		},
		data() {
			return {
				cartArr: []
			}
		},
		methods: {
			//添加商品
			addPros(pro) {
				const pObj = {
					product: pro,
					count: 1
				}
				if (!this.cartArr.length) {
					//第一次添加
					this.cartArr.push(pObj)
				} else {
					//之后添加商品,需要先判断是否重复
					let isHas = this.cartArr.some(v => {
						return v.product._id == pro._id
					});
					if (isHas) { //加过,count+1
						let proArr = this.cartArr.filter(v => {
							return v.product._id == pro._id;
						});
						proArr[0].count++;
					} else {
						this.cartArr.push(pObj)
					}
				}
			},
			//获取购物车商品
			sendCartPros() {
				return this.cartArr;
			}
		}
	}
</script>
