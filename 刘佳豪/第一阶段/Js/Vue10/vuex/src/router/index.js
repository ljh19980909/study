import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)

const routes = [{
		path: '/page1',
		component: () => import("../views/Pageone.vue")
	},
	{
		path: '/page2',
		component: () => import("../views/Pagetwo.vue")
	},
]

const router = new VueRouter({
	routes
})

export default router
