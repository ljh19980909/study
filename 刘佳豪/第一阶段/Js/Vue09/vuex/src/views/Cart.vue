<template>
	<fieldset>
		<legend>
			<h1>这是商品</h1>
		</legend>
		<ul>
			<li v-for="v in a">
				<span>名字：{{v.name}}</span>
				-----
				<span>价格：{{v.price}}</span>
				-----
				<span>数量：{{v.count}}</span>
				-----
				<span>总价：{{v.price*v.count}}</span>
				-----
				<button @click="del(v)">删除</button>
			</li>
		</ul>
	</fieldset>
</template>

<script>
	import { mapState } from 'vuex'
	export default {
		name: "Cart",
		computed:{
			...mapState({a:"product"})
		},
		methods:{
			del(v){
				this.$store.commit('del',v)
			}
		}
	}
</script>

<style scoped>

</style>
