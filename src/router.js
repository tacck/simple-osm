import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/map/:zoom/:lat/:lon',
      name: 'map',
      component: () => import('./views/Map.vue')
    },
    {
      path: '/map/:zoom/:lat',
      redirect: '/map/:zoom/:lat/141'
    },
    {
      path: '/map/:zoom',
      redirect: '/map/:zoom/43/141'
    },
    {
      path: '/map',
      redirect: '/map/10/43/141'
    },
    {
      path: '*',
      redirect: '/map'
    }
  ]
})
