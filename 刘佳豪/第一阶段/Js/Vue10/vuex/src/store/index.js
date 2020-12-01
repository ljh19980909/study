import Vue from 'vue'
import Vuex from 'vuex'
import cart from './cart/cart.js'
import student from './student/cart.js'

Vue.use(Vuex)

export default new Vuex.Store({
	/*
		由于使用单一状态树，应用的所有状态会集中到一个比较大的对象。当应用变得非常复杂时，store 对象就有可能变得相当臃肿。
		为了解决以上问题，Vuex 允许我们将 store 分割成模块（module）。
	*/
	modules: {
		cart,
		student
	}
})
