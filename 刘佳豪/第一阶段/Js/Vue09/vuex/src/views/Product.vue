<template>
	<fieldset>
		<legend>
			<h1>这是商品</h1>
		</legend>
		<router-link to="/cart">购物车</router-link>
		<ul v-for="v in product">
			<li>
				<span>商品：{{v.name}}</span>
				-----
				<span>价格：{{v.price}}</span>
				-----
				<button @click="add(v)">加入购物车</button>
			</li>
		</ul>
	</fieldset>
</template>

<script>
	import {
		mapState,
		mapMutations
	} from 'vuex'
	export default {
		name: "Product",
		data() {
			return {
				product: [{
						"name": "猪排骨",
						"price": 89,
						count:1
					},
					{
						"name": "驴腿肉",
						"price": 70,
						count:1
					},
					{
						"name": "鲁西黄牛肉",
						"price": 108,
						count:1
					},
					{
						"name": "牛尾骨",
						"price": 59,
						count:1
					},
					{
						"name": "牛肋条肉",
						"price": 109,
						count:1
					},
					{
						"name": "牛腱子肉",
						"price": 109,
						count:1
					},
					{
						"name": "牛腩块",
						"price": 69,
						count:1
					},
					{
						"name": "牛排",
						"price": 169,
						count:1
					},
					{
						"name": "肥牛卷",
						"price": 35,
						count:1
					},
					{
						"name": "鹿腿肉",
						"price": 329,
						count:1
					}

				]
			}
		},
		methods: {
			add(v) {
				this.$store.commit('add',v)
			}
		}
	}
</script>

<style scoped>

</style>
