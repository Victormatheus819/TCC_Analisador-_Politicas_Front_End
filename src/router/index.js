import Vue from 'vue'
import VueRouter from 'vue-router'
import InitialPage from '../components/InitialPage/InitialPage.vue'
import LoadingPage from '../components/LoadingPage/LoadingPage.vue'
import ResultPage from '../components/ResultPage/ResultPage.vue'
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'InitialPage',
    component: InitialPage
  },
  {
    path: '/loading-page',
    name: 'LoadingPage',
    component: LoadingPage
  },
  {
    path: '/result-page',
    name: 'ResultPage',
    component: ResultPage
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
