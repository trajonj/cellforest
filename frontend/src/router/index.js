import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('../views/homeView.vue')
    },
    {
      path: '/about',
      name: 'about',
      component: () => import('../views/aboutView.vue')
    },
    {
      path: '/contact',
      name: 'contact',
      component: () => import('../views/contactView.vue')
    },
    {
      path: '/resources',
      name: 'resources',
      component: () => import('../views/resourcesView.vue')
    },
    {
      path: '/portfolio',
      name: 'portfolio',
      component: () => import('../views/portfolioView.vue')
    },
  ]
})

export default router;
