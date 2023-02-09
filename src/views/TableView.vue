<template>
  <v-container>
    <HeaderLayout />
    <v-row>
      <v-col>
        <p>table</p>
        <v-btn @click="getUsersList">Get users</v-btn>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import HeaderLayout from "@/components/HeaderLayout.vue";

export default {
  data() {
    return {
      users: [],
      isLoading: false,
    };
  },
  methods: {
    async getUsersList() {
      this.isLoading = true;
      const result = await fetch(
        "http://www.filltext.com/?rows=5&id={number|1000}&firstName={firstName}&lastName={lastName}&email={email}&phone={phone|(xxx)xxx-xx-xx}&description={lorem|32}"
      );
      if (!result.ok) {
        throw new Error("could not fetch");
      }
      const body = await result.json();
      this.users = await body;
      this.isLoading = false;
      console.log(this.users);
    },
  },
  components: { HeaderLayout },
};
</script>

<style lang="scss" scoped></style>
