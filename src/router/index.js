import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Shop from '../views/Shop.vue'
import Product from '../views/Product.vue'
import Care from '../views/Care.vue'
import Contact from '../views/Contact.vue'
import About from '../views/About.vue'

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
  {
    path: '/Care',
    name: 'Care',
    component: Care
  },
  {
    path: '/Contact',
    name: 'Contact',
    component: Contact
  },
  {
    path: '/About',
    name: 'About',
    component: About
  },
  {
    path: '/Product/:productId',
    name: 'Product',
    component: Product
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
