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

    const displayName = computed(() => {
      return user?.value?.data?.displayName || "Unnamed";
    });

    auth.onAuthStateChanged((user) => {
      store.dispatch("fetchUser", user);
    });

    return { user, displayName };
  },
  components: { HeaderLayout },
};
</script>
