import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
	{
		path: "/",
		redject: "/login",
		component: () => import("../components/Login.vue")
	},
	{
		path: "/login",
		component: () => import("../components/Login.vue")
	},
	{
		path: "/product",
		component: () => import("../components/Product.vue")
	},
	{
		path: "/cart",
		component: () => import("../components/Cart.vue")
	},
]

const router = new VueRouter({
	routes
})

export default router
