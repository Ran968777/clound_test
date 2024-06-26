import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: ()=>import('@/pages/index/App.vue')
    },
    {
      path: '/test',
      alias:'/test',
      name: 'test',
      component: ()=>import('@/pages/fx/app.vue')
    },
    {
      path: '/demo1',
      name: 'demo1',
      component: ()=>import('@/pages/demo1/app.vue')
    },

  ]
})

export default router
