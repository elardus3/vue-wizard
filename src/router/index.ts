import { createRouter, createWebHistory } from 'vue-router'
import HousesView from '../views/HousesView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'houses',
      component: HousesView,
    },
    {
      path: '/elixirs',
      name: 'elixirs',
      component: () => import('../views/ElixirsView.vue'),
    },
    {
      path: '/spells',
      name: 'spells',
      component: () => import('../views/SpellsView.vue'),
    }
  ],
})

export default router
