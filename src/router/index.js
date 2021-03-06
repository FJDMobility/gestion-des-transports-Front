import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Covoiturage from '../views/Covoiturage.vue'
import CovoiturageResa from '../views/CovoiturageResa.vue'
import login from '../views/login.vue'
import test from '../views/Test.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/listecovoiturage',
    name: 'listecovoiturage',
    component: Covoiturage
  },
  {
    path: '/covoiturageresa',
    name: 'CovoiturageResa',
    component: CovoiturageResa
  },
  {
    path: '/login',
    name: 'login',
    component: login
  },
  {
    path: '/test',
    name: 'test',
    component: test
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
