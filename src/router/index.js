import { createRouter, createWebHashHistory } from 'vue-router'

import Home from '../view/home.vue'
import ScamsType from '../view/scamsType.vue'
import ScamsTypeDetail from '../view/scamsTypeDetail.vue'

const routes = [
  { path: '/', component: Home },
  { path: '/scamsType', component: ScamsType },
  { path: '/scamsTypeDetail', component: ScamsTypeDetail },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes,
})

export default router