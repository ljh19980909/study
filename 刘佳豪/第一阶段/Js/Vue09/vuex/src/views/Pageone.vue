<template>
	<fieldset class="pageone">
		<legend>
			<h2>页面一</h2>
		</legend>
		<ul>
			<li v-for="v in getCart">
				<span>{{v.pName}}</span>
				----
				<span>{{v.pPrice}}</span>
			</li>
		</ul>
		<hr>
		<p>计算过后的数值:{{getOneCount}}</p>
	</fieldset>
</template>

<script>
	import { mapState } from 'vuex'
	export default {
		name: "Pageone",
		data(){
			return{
				oneCount:333,
				oneMsg:"hello,pageOne"
			}
		},
		// computed:{
		// 	// getCart(){
		// 	// 	//获取vueX里state里的数据，语法：this.$store.state.变量名
		// 	// 	return this.$store.state.cart;
		// 	// }
		// }
		// mapState:辅助函数
		// computed:mapState({
		// 	// 写法1:
		// 	// getCart:state=>state.cart
		// 	//写法二
		// 	getCart:"cart",
		// 	// 写法三  如果想要获取局部this,必须写成普通函数
		// 	a(state){
		// 		return state.count+this.oneCount
		// 	}
		// }),
		//展开操作符 混入mapState辅助函数
		computed:{
			getOneCount(){
				return this.oneMsg+this.oneCount
			},
			...mapState({
				getCart:"cart",
				pageOneCount(state){
					return state.count+this.oneCount
				}			
			})
		}
	}
</script>

<style scoped>

</style>
