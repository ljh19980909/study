<template>
  <div id="app">
	 <Headers></Headers>
	 <router-view></router-view>
	 <Footer></Footer>
  </div>
</template>

<style>

</style>

<script>
	import Headers from"./views/Headers.vue"
	import Footer from"./views/Footer.vue"
	export default{
		components:{
			Headers,
			Footer
		}
	}
</script>
