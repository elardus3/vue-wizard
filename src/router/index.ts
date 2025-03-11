import { createRouter, createWebHistory } from 'vue-router'
import { useLoginStore } from "@/stores/login.ts";
import LoginView from '../views/LoginView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'login',
      component: LoginView,
    },
    {
      path: '/houses',
      name: 'houses',
      component: () => import('../views/HousesView.vue'),
    },
    {
      path: '/spells',
      name: 'spells',
      component: () => import('../views/SpellsView.vue'),
    },
    {
      path: '/elixirs',
      name: 'elixirs',
      component: () => import('../views/ElixirsView.vue'),
    }
  ],
});

router.beforeEach((to, from, next) => {
  const login = useLoginStore();

  if (to.name === 'elixirs') {
    if (login.admin) {
      next();
    } else {
      next({name: 'login'});
    }
  } else if (to.name === 'spells') {
    if (login.loggedIn) {
      next();
    } else {
      next({name: 'login'});
    }
  } else {
    next();
  }
});

export default router
