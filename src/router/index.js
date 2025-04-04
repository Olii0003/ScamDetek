import { createRouter, createWebHashHistory } from 'vue-router'

import Home from '../view/home.vue'
import ScamsType from '../view/scamsType.vue'

const routes = [
  { path: '/', component: Home },
  { path: '/scamsType', component: ScamsType },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes,
})

export default router