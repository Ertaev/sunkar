import { createRouter, createWebHistory } from 'vue-router'

import Home from '@/pages/Home'

const routes = [
  {
    path: '/',
    component: Home
  },
  {
    path: '/about',
    component: () => import("@/pages/About")
  },
  {
    path: '/online-credit',
    component: () => import("@/pages/Online-Credit")
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router