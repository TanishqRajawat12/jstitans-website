import store from '@/store'
import axios from 'axios'
import { createRouter, createWebHistory } from 'vue-router'

const guard = async function (to, from, next) {
	if (store.getters.isRestored) {
		var tkopopcbH = store.state.isAuthenticated;
		if (tkopopcbH) {
			next()
			/*/axios.post('https://api.zaqecosystem.com/auth/token/refresh/', { refresh: store.state.refresh })
				.then(response => {
					if (response.status === 200 && tkopopcbH) {
						console.log(response.data.access)
						store.commit('setAToken', response.data.access)
						next()
					}
				}).catch(e => {
					store.commit('clear', '')
					sessionStorage.clear()
					localStorage.removeItem('PassSchema')
					if (localStorage.getItem('ZeS_Status') === 'OPERATIONSACTIVE') { localStorage.setItem("ZaqFH", "LOIPS") }
					next('/login')
				})/*/
		}
		else {
			window.location.href = '/login'
		}
	} else {
		// Wait for the state to be restored and checked again
		store.watch(
			state => state, // Modify this based on your state structure
			isRestored => {
				if (isRestored.isready) {
					var tkopopcbH = store.state.isAuthenticated;
					if (tkopopcbH) {
						next()
						/*/axios.post('https://api.zaqecosystem.com/auth/token/refresh/', { refresh: store.state.refresh })
							.then(response => {
								if (response.status === 200 && tkopopcbH) {
									console.log(response.data.access)
									store.commit('setAToken', response.data.access)
									next()
								}
							}).catch(e => {
								store.commit('clear', '')
								sessionStorage.clear()
								localStorage.removeItem('PassSchema')
								if (localStorage.getItem('ZeS_Status') === 'OPERATIONSACTIVE') { localStorage.setItem("ZaqFH", "LOIPS") }
								next('/login')
							})/*/
					}
					else {
						window.location.href = '/login'
					}
				}
				else {
					next('/login')
				}
			}
		);
	}
}

const router = createRouter({
	history: createWebHistory(),
	routes: [
		{
			path: '/',
			name: 'Home',
			component: () => import('../views/home.vue'),
		},
		{
			path: '/auction',
			name: 'Auction',
			component: () => import('../views/auction.vue'),
		},
		{
			path: '/vote',
			name: 'Vote',
			component: () => import('../views/vote.vue'),
		},
		{
			path: '/events',
			name: 'Events',
			component: () => import('../views/events.vue'),
		},
		{
			path: '/gallery',
			name: 'Gallery',
			component: () => import('../views/gallery.vue'),
		},
		{
			path: '/teams',
			name: 'Teams',
			component: () => import('../views/teams.vue'),
		},{
		path: '/teammembers',
		name: 'TeamsMembers',
		component: () => import('../views/teamsmem.vue'),
	},
	],
})
export default router