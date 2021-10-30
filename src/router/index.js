import Vue from 'vue'
import Router from 'vue-router'
import debug from 'debug'

const log = debug('demo:router')

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      component: () => import('@pages/Home'),
    },
  ],
})
