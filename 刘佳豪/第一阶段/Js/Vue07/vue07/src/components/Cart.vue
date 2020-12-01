<template>
	<div class="container-fluid">
		<h2>购物车</h2>
		<div class="alert alert-warning" role="alert">
			<router-link to="/product">点击返回商品列表</router-link>
			<table class="table table-striped">
				<thead>
					<td>商品名称</td>
					<td>单价</td>
					<td>数量</td>
					<td>小计</td>
					<td>操作</td>
				</thead>
				<tbody>
					<tr v-for="(pro,i) in c">
						<td>{{pro.name}}</td>
						<td>{{pro.price}}</td>
						<td>{{pro.count}}</td>
						<td>{{pro.count*pro.price}}</td>
						<td><button class="btn btn-danger" @click="del(pro,i)">删除</button></td>
					</tr>
				</tbody>
			</table>
		</div>
	</div>
</template>

<script>
	export default {
		name: "Cart",
		data() {
			return {
				cartPros: [],
				c: []
			}
		},
		created() {
			this.cartPros = this.$parent.sendCartPros();
			this.axios.get("/cart", {}).then(data => {
				this.c = data
			}).catch(err => {
				console.log(err)
			})
		},
		methods: {
			del(i, v) {
				this.axios.get("/delete", {
					params: {
						name: i.name,
						price: i.price,
						count: 1
					}
				}).then(this.axios.get("/cart", {}).then(data => {
					this.c = data
					console.log(this.c)
				})).catch(err => {
					console.log(err)
				})
			},
		},
	}
</script>

<style scoped>

</style>
