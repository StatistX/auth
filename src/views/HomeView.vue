<template>
  <v-container>
    <HeaderLayout />
    <v-row>
      <v-col>
        <p>Home</p>
        <p>Hello, {{ displayName }}</p>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import HeaderLayout from "@/components/HeaderLayout.vue";
import { useStore } from "vuex";
import { computed } from "vue";
import { auth } from "../firebaseConfig";

export default {
  setup() {
    const store = useStore();

    const user = computed(() => {
      return store.getters.user;
    });

    console.log("home, user from store", user);

    console.log("home, user from auth.currentUser", auth.currentUser);

    const displayName = computed(() => {
      return user?.value?.data?.displayName || "";
    });

    auth.onAuthStateChanged((user) => {
      store.dispatch("fetchUser", user);
    });

    // localStorage.setItem("currentUser", JSON.stringify(user.value));

    return { user, displayName };
  },
  components: { HeaderLayout },
};
</script>
