import Vue from 'vue'
import Router from 'vue-router'
import LeftLink from '@/components/leftLink'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'LeftLink',
      component: LeftLink
    }
  ]
})
