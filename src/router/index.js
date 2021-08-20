import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Shop from '../views/Shop.vue'
import Product from '../views/Product.vue'
import Care from '../views/Care.vue'
import Contact from '../views/Contact.vue'
import About from '../views/About.vue'
import Admin from '../views/Admin.vue'
import Register from '../views/Register.vue'
import Login from '../views/Login.vue'
import store from '../store'



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
    path: '/Login',
    name: 'Login',
    component: Login,
  },
  {
    path: '/Register',
    name: 'Register',
    component: Register
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
  {
    path: '/Admin',
    name: 'Admin',
    component: Admin,
    meta: {
      requiresAdmin: true
    }
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

router.beforeEach(async(to,from,next) => {
  const user= store.state.User.user;
  const cart= store.state.Cart.cart;

  if (!user) {
    await store.dispatch('setUser', store.state.User.username)
    // await store.dispatch('User/setUser', 'GET_USER')
  }
  if (cart){
    await store.dispatch('addCart', store.state.Cart.cart)
  }

  const isAdmin = true;
  const requiresAdmin = to.matched.some(record => record.meta.requiresAdmin);

  if (requiresAdmin && !isAdmin) next({ name: 'Home'});

  else next();
})

export default router
