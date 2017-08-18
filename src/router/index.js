import Vue from 'vue'
import Router from 'vue-router'

import Home from '../views/Home'

Vue.use(Router);

export default new Router({
  routes: [
    {path: '/index/:tab',name: 'Home',component: Home},
    {path: '*', redirect: '/index/all'}
  ]
})
