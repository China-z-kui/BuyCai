import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'

Vue.use(VueRouter)

const routes = [
  // {
  //   path: '/login',
  //   name: 'routeName',
  //   component: () => import('../views/Login.vue'),
  // },
  
  // {
  //   path: '/register',
  //   name: 'routeName',
  //   component: () => import('../views/Register.vue'),
  // },
  {
    path: '/detail',
    name: 'routeName',
    component: () => import('../views/Detail.vue'),
  },
  {
    path: '/report',
    name: 'routeName',
    component: () => import('../views/Report.vue'),
  },
  {
    path: '/ranking',
    name: 'routeName',
    component: () => import('../views/RanKing.vue'),
  },
  {
    path: '/listcar',
    name: 'routeName',
    component: () => import('../views/ListCar.vue'),
  },
  {
    path: '/',
    // redirect:'/login',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
