import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Shop from '../views/Shop.vue'

const routes = [
  {
    path: '/',
    redirect: '/Home'
    // https://www.codemag.com/Article/2101051/Routing-in-Vue3-Navigating-the-Options
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
