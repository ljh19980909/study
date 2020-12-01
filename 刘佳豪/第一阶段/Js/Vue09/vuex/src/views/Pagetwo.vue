<template>
	<fieldset class="pagetwo">
		<legend>
			<h2>页面二</h2>
		</legend>
		<ul>
			<li v-for="v in a">
				<span>{{v.name}}</span>
				----
				<span>{{v.score}}分</span>
			</li>
		</ul>
		<hr>
		<!-- <ul>
			<li v-for="v in JSScore">
				<span>{{v.name}}</span>
				----
				<span>{{v.score}}分</span>
			</li>
		</ul> -->
		<hr>
		<ul>
			<li v-for="v in abc">
				<span>{{v.name}}</span>
				----
				<span>{{v.score}}分</span>
			</li>
		</ul>
		<hr>
		<!-- <ul>
			<li v-for="v in b">
				<span>{{v.name}}</span>
				----
				<span>{{v.score}}分</span>
			</li>
		</ul> -->
		<hr>
		<!-- <ul>
			<li v-for="v in getJS">
				<span>{{v.name}}</span>
				----
				<span>{{v.score}}分</span>
			</li>
		</ul>
		<ul>
			<h2>得分优秀的人</h2>
			<li v-for="v in veryGood">
				<span>{{v.name}}</span>
				----
				<span>{{v.score}}分</span>
			</li>
		</ul>
		<ul>
			<h2>得分良好的人</h2>
			<li v-for="v in soGood">
				<span>{{v.name}}</span>
				----
				<span>{{v.score}}分</span>
			</li>
		</ul>
		<ul>
			<h2>得分通过的人</h2>
			<li v-for="v in passGood">
				<span>{{v.name}}</span>
				----
				<span>{{v.score}}分</span>
			</li>
		</ul> -->
	</fieldset>
</template>

<script>
	import {
		mapState,
		mapGetters
	} from 'vuex'
	export default {
		name: "Pagetwo",
		computed: {
			...mapState({
				a: "stuScore",
			}),
			// getJS() {
			// 	// 获取vuex里的getters里的计算属性值 语法:store.getters.属性名
			// 	return this.$store.getters.JSScore;
			// },
			// //优秀
			// veryGood(){
			// 	return this.$store.getters.scoreGrand("A");
			// },
			// //良好
			// soGood(){
			// 	return this.$store.getters.scoreGrand("B");
			// },
			// passGood(){
			// 	return this.$store.getters.scoreGrand("P");
			// },
			// mapGetters辅助函数,使用对象展开运算符将getter混入computed对象中
			//写法一:传入的值是一个数组,这种写法,组件的计算属性和名字和getters的计算属性的名字相同
			// ...mapGetters(["JSScore"]
			// 写法二:传入的值是一个对象,这种写法,可以将组件的计算属性的名字和getters的计算属性的名字七成不一样的
			...mapGetters({
				abc:"JSScore",
			})
		}
	}
</script>

<style scoped>

</style>
