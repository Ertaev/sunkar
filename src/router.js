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
  {
    path: '/programs',
    component: () => import("@/pages/ProgramsPage")
  },
  {
    path: '/ken-dala',
    component: () => import("@/pages/Ken-Dala")
  },
  {
    path: '/agro-business',
    component: () => import("@/pages/Agro-Business")
  },
  {
    path: '/isker',
    component: () => import("@/pages/Isker")
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router