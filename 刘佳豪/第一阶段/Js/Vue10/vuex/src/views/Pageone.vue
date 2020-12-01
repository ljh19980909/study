<template>
	<fieldset>
		<legend>
			<h2>这是Pageone</h2>
		</legend>
		<ul>
			<li v-for="v in cart">
				<span>{{v.pName}}</span>
				-----
				<span>{{v.pPrice}}</span>
			</li>
		</ul>
		<hr>
		<ul>
			<li v-for="v in getPricePro">
				<span>{{v.pName}}</span>
				-----
				<span>{{v.pPrice}}</span>
			</li>
		</ul>
		<p>总价:{{totalPrice}}</p>
		<button @click="raisePrice">涨价</button>
		<button @click="discount">打折</button>
		<button @click="upPrice">打折</button>
		<button @click="salePrice(.7)">打七折</button>
		<hr>
		<ul>
			<li v-for="v in student">
				<span>{{v.name}}</span>
				-----
				<span>{{v.score}}</span>
			</li>
		</ul>
		<button @click="rand">随加改分数</button>
	</fieldset>
</template>

<script>
	import {
		mapState,
		mapGetters,
		mapMutations,
		mapActions
	} from 'vuex';
	export default {
		name: "Pageone",
		computed: {
			// getCart(){
			// 	// 获取模块里的state数据 语法:this.$store.state.模块名.数据名
			// 	return this.$store.state.cart.cart
			// },
			//如果使用辅助函数，语法：
			// ...mapState("模块名",[]/{})
			// 前提:需要给对应的模块添加namespaced:true值
			...mapState("cart", ["cart"]),
			...mapState("student", ["student"]),
			getPricePro(){
				/*
					获取模块里的getters
					语法:
						this.$store.getters.["模块名/计算属性名"]
				*/
				return this.$store.getters.["cart/filterPrice"];
			},
			/*
				mapGetters获取模块里的getters
				语法: 
					mapGetters("模块名",数组||对象)
			*/
			...mapGetters("cart",["totalPrice"])
		},
		methods:{
			raisePrice(){
				/*
					模块中提交mutation
						语法:
							this.$store.commit("模块名/mutation方法",payload)
				*/
				this.$store.commit("cart/upPrice")
			},
			discount(){
				this.$store.commit("cart/salePrice",.5)
			},
			/*
				在模块里使用mapMutations提交mutations
				语法:
					mapMutation("模块名",数组||对象)
			*/
			...mapMutations("cart",["upPrice","salePrice"]),
			// rand(){
			// 	this.$store.dispatch("student/rand")
			// }
			...mapActions("student",["rand"]),
		}
	}
</script>

<style scoped>

</style>
