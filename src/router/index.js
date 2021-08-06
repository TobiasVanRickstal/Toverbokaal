import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Shop from '../views/Shop.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/Home',
    name: 'Home',
    component: Home
  },
  {
    path: '/Shop',
    name: 'Shop',
    component: Shop
  },
  // {
  //   path: 'product/:productId',
  //   name : 'Product',
  //   component: 'Product'
  // }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
