import { createStore } from "vuex";

export default createStore({
  state: {
    auth: false,
  },
  getters: {},
  mutations: {
    setSignIn(state) {
      state.auth = true;
    },
  },
  actions: {},
  modules: {},
});
