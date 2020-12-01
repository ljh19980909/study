<template>
	<fieldset class="footer">
		<legend>
			<h2>底部商品栏</h2>
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
			</li>
		</ul>
		<p>总价：{{total}}</p>
	</fieldset>
</template>

<script>
	import { mapState,mapGetters } from 'vuex'
	export default {
		name: "Footer",
		computed:{
			...mapState({a:"product"}),
			...mapGetters({
				total:"total",
			})
		},
	}
</script>

<style scoped>

</style>
