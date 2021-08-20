export const CartList = {
    namespace: true,

    state: {
        user: null,
        product: [],
        cart: ['CartItem'],
      },
      //mutations are functions that effect the state
      mutations: {
        SET_USER(state, user){
          state.user = user;
        },
        GET_PRODUCT(state, product){
          state.product += product;
        },
        ADD_CART(state, product){
          state.cart += product;
        }
      },
      //actions are functions that you call throughout your application that call mutations
      actions: {
        setUser({ commit }, user){
          commit('SET_USER', user);
        },
        getProduct({ commit }, product){
          commit('GET_PRODUCT', product);
        },
        addCart({ commit }, cart){
          commit('ADD_CART', cart);
        }
      }
}