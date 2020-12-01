<template>
	<div class="product">
		<h1>这是商品组件</h1>
		<!-- <h3>商品的名字是:{{pName}},价格是:{{pPrice}}</h3> -->
		<h3>{{queryV}}</h3>
	</div>
</template>

<script>
	export default{
		name:"Product",
		data(){
			return{
				pName:"",
				pPrice:""
			}
		},
		created() {
			console.log(this.$route)
			this.pName=this.$route.query.proName;
			this.pPrice=this.$route.query.proPrice
		},
		computed:{
			queryV(){
				return`商品的名字是:${this.$route.query.proName},价格是:${this.$route.query.proPrice}`
			}
		}
	}
</script>

<style scoped="scoped">
	.product{
		width: 100%;
		height: 70%;
		background-color: lightblue;
	}
</style>
