<template>
  <v-container>
    <HeaderLayout />
    <v-row>
      <v-col>
        <p>Home</p>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import HeaderLayout from "@/components/HeaderLayout.vue";
import { defineComponent } from "vue";

// Components

export default defineComponent({
  name: "HomeView",
  components: { HeaderLayout },
  mounted() {
    console.log(this.$router);
  },
});
</script>
