<template>
  <v-container>
    <HeaderLayout />
    <v-row>
      <v-col>
        <p>Home</p>
        <p>Hello, {{ user?.data.displayName }}</p>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import HeaderLayout from "@/components/HeaderLayout.vue";
import { useStore } from "vuex";
import { computed } from "vue";

export default {
  setup() {
    const store = useStore();
    const user = computed(() => {
      return store.getters.user;
    });
    console.log(user);
    return { user };
  },
  components: { HeaderLayout },
};
</script>
