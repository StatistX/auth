<template>
  <BaseLayoutWithHeader>
    <v-row>
      <v-col>
        <div>
          <p>User</p>
          <p>{{ $route.params.id }}</p>
        </div>
      </v-col>
    </v-row>
  </BaseLayoutWithHeader>
</template>

<script>
import BaseLayoutWithHeader from "./BaseLayoutWithHeader.vue";

export default {
  setup() {
    return {};
  },
  components: { BaseLayoutWithHeader },
};
</script>

<style lang="scss" scoped></style>
