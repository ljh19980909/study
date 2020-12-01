import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
	{
		path: "/home",
		component: () => import("../views/Header.vue")
	},
	{
		path: "/login",
		component: () => import("../components/Login.vue")
	},
	{
		path: "/citys",
		component: () => import("../components/Citys.vue")
	}
]

const router = new VueRouter({
	routes
})

export default router
