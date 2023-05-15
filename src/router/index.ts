import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'

const routes: Array<RouteRecordRaw> = [
  {
    path:'/',
    name:'index',
    component: () => import('../views/index.vue')
  },
  {
    path:"/articleDetails",
    name:"articleDetails",
    component:()=> import('../views/articleDetails.vue')
  },
  {
    path:"/GPTchat",
    name:"GPTchat",
    component:()=>import('../views/GPTchat.vue'),
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
