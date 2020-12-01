<template>
  <div id="app">
   <Header></Header>
   <router-view></router-view>
  </div>
</template>

<style>

</style>

<script>
	import Header from"./views/Header.vue"
	export default{
		components:{
			Header,
		}
	}
</script>
