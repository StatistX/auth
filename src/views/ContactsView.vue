<template>
  <v-container>
    <HeaderLayout />
    <v-row>
      <v-col>
        <p>Contacts</p>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import HeaderLayout from "@/components/HeaderLayout.vue";

export default {
  setup() {
    return {};
  },
  components: { HeaderLayout },
};
</script>

<style lang="scss" scoped></style>
