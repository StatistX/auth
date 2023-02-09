import { createStore } from "vuex";

export default createStore({
  state: {
    user: {
      auth: false,
      data: null,
    },
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
