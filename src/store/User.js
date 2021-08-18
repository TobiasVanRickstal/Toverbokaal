export const UserModule = {
    namespace: true,

    state: {
        user: null,
        username: "Frederik"
      },
      //mutations are functions that effect the state
      mutations: {
        SET_USER(state, user){
          state.user = user;
        }
      },
      //actions are functions that you call throughout your application that call mutations
      actions: {
        setUser({ commit }, user){
          commit('SET_USER', user);
        }
      }
}