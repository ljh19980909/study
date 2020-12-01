<template>
	<fieldset class="pagethree">
		<legend><h2>页面三</h2></legend>
		<ul>
			<li v-for="v in a">
				<span>{{v.pName}}</span>
				----
				<span>{{v.pPrice}}</span>
			</li>
		</ul>
		<button @click="raisePrice()">点击涨价</button>
		<br>
		<button @click="$store.commit('discount',.7)">点击打7折</button>
		<br>
		<button @click="discount(.5)">点击打5折</button>
		<br>
		<button @click="increment">点击打5折</button>
		<br>
		<button @click="add">点击</button>
	</fieldset>
</template>

<script>
	import { mapState,mapMutations } from 'vuex'
	export default {
		name:"Pagethree",
		computed:{
			...mapState({
				a:"cart"
			})
		},
		methods:{
			raisePrice(){
				this.$store.commit("increment")
			},
			...mapMutations(['discount','increment']),
			...mapMutations({add:'increment'})
		}
	}
</script>

<style scoped>

</style>