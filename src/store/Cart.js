export const CartList = {
    namespace: true,

    state: {
        cart: [ {id: 1, name: 'Waterfall V 1.0', price: 70, available: true},
        {id: 2, name: 'Angels from above', price: 150, available: true},
        {id: 3, name: 'Grow round', price: 86, available: true},
        {id: 4, name: 'Terrarium (medium)', price: 25, available: false}],
      },
      //mutations are functions that effect the state
      mutations: {
        ADD_PRODUCT_TO_CART(state, product){
          state.cart.push(product);
        },
      },
      //actions are functions that you call throughout your application that call mutations
      actions: {
        addProductToCart({ commit }, product){
          commit('ADD_PRODUCT_TO_CART', product);
        },
      },
      getters: {
        cart: state => {return state.products}
      }
}