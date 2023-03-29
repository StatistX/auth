<template>
  <v-row class="text-center">
    <v-col cols="10">
      <nav class="header__links d-flex">
        <li v-for="link in links" :key="link">
          <v-btn :to="link.href">
            {{ link.text.toUpperCase() }}
          </v-btn>
        </li>
      </nav>
    </v-col>
    <v-col class="d-flex justify-end" cols="2">
      <v-btn @click="logout">{{ "Log out".toUpperCase() }}</v-btn>
    </v-col>
  </v-row>
</template>

<script>
export default {
  name: "HeaderLayout",

  data: () => ({
    links: [
      {
        text: "home",
        href: "/",
      },
      {
        text: "table",
        href: "/table",
      },
      {
        text: "contacts",
        href: "/contacts",
      },
    ],
  }),
  methods: {
    async logout() {
      try {
        await this.$store.dispatch("logOut");
        this.$router.push("/auth");
      } catch (error) {
        console.log(error);
      }
    },
  },
};
</script>
<style>
.header__links {
  list-style-type: none;
  gap: 15px;
}
</style>
