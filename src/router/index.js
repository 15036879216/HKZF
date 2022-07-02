import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect: '/home'
  },
  {
    path: '/home',
    component: () => import('@/views/Home'),
    children: [
      {
        path: '/home/news',
        component: () => import('@/views/Home')
      },
      {
        path: '/home/list',
        component: () => import('@/views/Home')
      },
      {
        path: '/home/profile',
        component: () => import('@/views/Home')
      }
    ]
  }
]

const router = new VueRouter({
  routes
})

export default router
