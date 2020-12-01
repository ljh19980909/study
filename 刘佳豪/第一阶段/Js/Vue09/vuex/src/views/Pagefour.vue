<template>
	<fieldset>
		<legend><h2>页面四</h2></legend>
		<ul>
			<li v-for="v in a">
				<span>{{v.name}}</span>
				-----
				<span>{{v.score}}</span>
			</li>
		</ul>
		<button @click="LuckyStu">点击抽取幸运观众</button>
		<div class="countDown"></div>
	</fieldset>
</template>

<script>
	import { mapState,mapMutations} from 'vuex'
	export default {
		name: "Pagefour",
		computed:{
			...mapState({
				a:"stuScore"
			})
		},
		methods:{
			LuckyStu(){
				// this.$store.commit('luckStudent')
				//触发actions
				this.$store.dispatch('luckyStudent').then()
			}
		}
	}
</script>

<style scoped>

</style>
