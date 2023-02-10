<template>
  <v-container>
    <HeaderLayout />
    <slot></slot>
  </v-container>
</template>

<script>
import HeaderLayout from "./HeaderLayout.vue";

export default {
  setup() {
    return {};
  },
  components: { HeaderLayout },
};
</script>

<style lang="scss" scoped></style>
