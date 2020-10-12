import Vue from 'vue'
import VueRouter from 'vue-router'
import Index from '../views/Index.vue'
import IntelligentDigitalTeaching from '../views/IntelligentDigitalTeaching.vue'
import Cooperation from '../views/Cooperation.vue'
import Empty from '../views/404.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Index',
    component: Index
  },
  {
    path: '/intelligentDigitalTeaching',
    name: 'IntelligentDigitalTeaching',
    component: IntelligentDigitalTeaching
  },
  {
    path: '/cooperation',
    name: 'Cooperation',
    component: Cooperation
  },
  {
    path: '/404',
    name: '404',
    component: Empty
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
