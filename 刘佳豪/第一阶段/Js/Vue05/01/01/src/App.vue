<template>
	<div id="app">
		<!-- <p>接收到child传递的数据:{{a}}</p>
		<Child1 :c1="appV" @c2="setsend"></Child1> -->
		<Header></Header>
		<transition :name="a" mode="out-in">
			<router-view></router-view>
		</transition>
	</div>
</template>
<script>
	import Header from "./views/Header.vue";
	export default {
		components: {
			Header
		},
		data(){
			return{
				a:""
			}
		},
		watch:{
			'$route'(to,from){
				console.log("路由切换了",to,from)
				if(to.path=="/news"){
					this.a="a2";
				}else{
					this.a="a1"
				}
			}
		}
	}
	// import Child1 from "./views/Child1.vue";
	// export default {
	// 	components: {
	// 		Child1
	// 	},
	// 	data() {
	// 		return {
	// 			appV: "你是个大逗逼",
	// 			a: ''
	// 		}
	// 	},
	// 	methods: {
	// 		setsend(v) {
	// 			this.a = v
	// 		}
	// 	}
	// }
</script>

<style>
	*{
		margin: 0px;
		padding: 0px;
	}
	html,body{
		width: 100%;
		height: 100%;
	}
	#app{
		width: 100%;
		height: 100%;
	}
	@keyframes a1A{
		0%{
			transform: rotateZ(0);
			opacity: 1;
		}
		100%{
			transform: rotateZ(3600deg);
			opacity: 0;
		}
	}
	.a1-enter-active{
		animation: a1A 1s;
	}
	.a1-leave-active{
		animation: a1A 2s reverse;
	}
	@keyframes a2A{
		0%{
			transform: translateX(0);
			opacity: 1;
		}
		100%{
			transform: translateX(2000px);
			opacity: 0;
		}
	}
	.a2-enter-active{
		animation: a2A 1s;
	}
	.a2-leave-active{
		animation: a2A 2s reverse;
	}
</style>
