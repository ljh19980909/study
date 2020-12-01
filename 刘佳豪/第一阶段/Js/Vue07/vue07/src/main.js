import Vue from 'vue'
import router from './router'
import App from './App.vue'
import "./axios/axios"
Vue.config.productionTip = false

Vue.prototype.totalVue = new Vue();
new Vue({
	router,
	render: h => h(App)
}).$mount('#app')

console.log(process.env.NODE_ENV)
