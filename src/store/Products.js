export const ProductList = {
    namespace: true,

    state: {
        products: [ {id: 1, name: 'Waterfall V 1.0', price: 70, available: true},
        {id: 2, name: 'Angels from above', price: 150, available: true},
        {id: 3, name: 'Grow round', price: 86, available: true},
        {id: 4, name: 'Terrarium (medium)', price: 25, available: false}],
      },
      //mutations are functions that effect the state
      mutations: {
        ADD_PRODUCT(state, product){
          state.products.push(product);
        },
      },
      //actions are functions that you call throughout your application that call mutations
      actions: {
        addProduct({ commit }, product){
          commit('ADD_PRODUCT', product);
        },
      },
      getters: {
        products: state => {return state.products}
      }
}