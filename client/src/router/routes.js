const routes = [
	{ path: '/', component: () => import('../views/Index.vue') },
	{ path: '/delete', component: () => import('../views/DeleteConfirmation.vue') }
]

export default routes