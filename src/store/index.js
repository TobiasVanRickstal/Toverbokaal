import { createStore } from 'vuex';
import { UserModule } from './User';
import { CartList } from './Cart';
import { ProductList } from './Products';

export default createStore({
  state: {},
  //mutations are functions that effect the state
  mutations: {},
  //actions are functions that you call throughout your application that call mutations
  actions: {},

  modules: {
    User: UserModule,
    Cart: CartList,
    Products: ProductList,

  }
})
