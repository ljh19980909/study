import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
	{
		path: "/page1",
		component: () => import("../views/Pageone.vue")
	},
	{
		path: "/page2",
		component: () => import("../views/Pagetwo.vue")
	},
	{
		path: "/page3",
		component: () => import("../views/Pagethree.vue")
	},
	{
		path: "/page4",
		component: () => import("../views/Pagefour.vue")
	},
	{
		path: "/page5",
		component: () => import("../views/Product.vue")
	},
	{
		path: "/cart",
		component: () => import("../views/Cart.vue")
	},
]

const router = new VueRouter({
	routes
})

export default router
