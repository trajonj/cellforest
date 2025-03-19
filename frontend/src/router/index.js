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
    // {
    //   path: '/2D',
    //   name: '2D',
    //   component: () => import('../views/2Dview.vue')
    // },
    // {
    //   path: '/3D',
    //   name: '3D',
    //   component: () => import('../views/3Dview.vue')
    // },
    // {
    //   path: '/2Dprices',
    //   name: '2Dprices',
    //   component: () => import('../views/2DpricesView.vue')
    // },
    // {
    //   path: '/3Dprices',
    //   name: '3Dprices',
    //   component: () => import('../views/3DpricesView.vue')
    // },
    // {
    //   path: '/T.O.S',
    //   name: 'T.O.S',
    //   component: () => import('../views/T.O.Sview.vue')
    // },
    // {
    //   path: '/form',
    //   name: 'form',
    //   component: () => import('../views/formView.vue')
    // }
  ]
})

export default router;
