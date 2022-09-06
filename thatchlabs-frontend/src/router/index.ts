import { createRouter, createWebHistory } from 'vue-router'
//import { storageService } from './../services/storage.service'

const routes = [
	{
		path: '/',
		name: 'HomePage',
		component: () => import('../views/index.vue'),
		meta: {
			isPublic: true,
			showWhileLogin: true
		}
	},
	{
		path: '/dashboard',
		name: 'Dashboard',
		component: () => import('../views/dashboard.vue'),
		meta: {
			isPublic: false,
			showWhileLogin: true
		}
	},
	{
		path: '/persona',
		name: 'Persona',
		component: () => import('../views/persona.vue'),
		meta: {
			isPublic: false,
			showWhileLogin: true
		}
	},
	{
		path: '/mint-persona',
		name: 'Mint Persona',
		component: () => import('../views/create-persona.vue'),
		meta: {
			isPublic: false,
			showWhileLogin: true
		}
	},
	{
		path: '/gang',
		name: 'Gang',
		component: () => import('../views/gang.vue'),
		meta: {
			isPublic: false,
			showWhileLogin: true
		}
	},
	{
		path: '/mint-gang',
		name: 'Mint Gang',
		component: () => import('../views/gangs/create-gang.vue'),
		meta: {
			isPublic: false,
			showWhileLogin: true
		}
	},
	{
		path: '/token',
		name: 'Token',
		component: () => import('../views/token.vue'),
		meta: {
			isPublic: false,
			showWhileLogin: true
		}
	}, 
]

const router = createRouter({
	history: createWebHistory(),
	routes
})

router.beforeEach( async (to, from, next) =>{
	// const isLoggedIn = await storageService.doLoginExist()
	// const isPublic = to.matched.some(rec => rec.meta.isPublic)
	// const showWhileLogin = to.matched.some(rec => rec.meta.showWhileLogin)

	// if(!isLoggedIn && !isPublic){
	// 	window.scrollTo(0, 0)
	// 	return next({
	// 		path: '/'
	// 	})
	// }

	// if(isLoggedIn && isPublic){
	// 	if(!showWhileLogin){
	// 		window.scrollTo(0, 0)
	// 		return next({
	// 			path: '/account'
	// 		})
	// 	}
	// }
	window.scrollTo(0, 0)
	next()
})
export default router
