<template>
	<fieldset class="header">
		<legend>
			<h1>这是header</h1>
		</legend>
		<router-link to="/page1">页面一</router-link>
		- 
		<router-link to="/page2">页面二</router-link>
	</fieldset>
</template>

<script>
	export default {
		name: "Header"
	}
</script>

<style scoped>

</style>
