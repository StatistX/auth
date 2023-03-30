import { createStore } from "vuex";
import { auth } from "../firebaseConfig";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  updateProfile,
} from "firebase/auth";
// import router from "@/router";

const store = createStore({
  state: {
    user: {
      loggedIn: false,
      data: null,
    },
  },

  getters: {
    user(state) {
      return state.user;
    },
  },
  mutations: {
    SET_USER(state, payload) {
      state.user.data = payload;
    },
    SET_LOGGED_IN(state, value) {
      state.user.loggedIn = value;
    },
  },
  actions: {
    async register(context, { email, password, name }) {
      const response = await createUserWithEmailAndPassword(
        auth,
        email,
        password,
        name
      );
      if (response) {
        context.commit("SET_USER", response.user);
        const { user } = response;
        await updateProfile(user, { displayName: name });
        localStorage.setItem("userToken", response.user.accessToken);
      } else {
        throw new Error("Unable to register user");
      }
    },

    async logIn(context, { email, password }) {
      const response = await signInWithEmailAndPassword(auth, email, password);

      if (response) {
        context.commit("SET_USER", response.user);
        localStorage.setItem("userToken", response.user.accessToken);
      } else {
        throw new Error("login failed");
      }
    },

    async logOut(context) {
      await signOut(auth);
      context.commit("SET_USER", null);
      context.commit("SET_LOGGED_IN", false);
      localStorage.removeItem("userToken");
    },

    async fetchUser(context) {
      auth.onAuthStateChanged(async (user) => {
        if (user === null) {
          context.commit("SET_USER", null);
        } else {
          context.commit("SET_USER", {
            displayName: user.displayName,
            email: user.email,
          });
          context.commit("SET_LOGGED_IN", true);
        }
      });
    },
  },
});

export default store;
