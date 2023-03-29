<template>
  <v-container>
    <HeaderLayout />
    <v-row>
      <v-col>
        <v-card>
          <v-card-title>
            Posts
            <v-spacer></v-spacer>
          </v-card-title>

          <p v-if="errorMessage">
            {{ errorMessage }}
          </p>
          <v-data-table-server
            v-else
            :headers="headers"
            :items="posts"
            :items-length="totalItems"
            :loading="loading"
            :items-per-page="itemsPerPage"
            class="elevation-1"
            item-title="id"
            item-value="id"
            @update:options="getDataFromApi"
          >
            <template v-slot:[`item.id`]="{ item }">
              <v-chip @click="clickMe(item)">
                {{ item.raw.id }}
              </v-chip>
            </template>
          </v-data-table-server>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import HeaderLayout from "@/components/HeaderLayout.vue";
import * as labs from "vuetify/labs/components";
import { setTableHeaders } from "../utils";
import { getPosts } from "@/utils/api";
import { auth } from "../firebaseConfig";

export default {
  data() {
    return {
      itemsPerPage: 10,
      headers: [],
      posts: [],
      loading: true,
      totalItems: 100,
      errorMessage: "",
    };
  },
  components: { HeaderLayout, ...labs },
  methods: {
    clickMe(item) {
      this.$router.push(`/table/${item.raw.id}`);
    },
    async getDataFromApi({ page, itemsPerPage }) {
      this.loading = true;

      const start = (page - 1) * itemsPerPage;

      try {
        await getPosts({ start, itemsPerPage }).then((body) => {
          this.totalItems = body.headers["x-total-count"];
          this.posts = body.data;
        });
      } catch (error) {
        this.errorMessage = `An error has occured: ${error}`;
        throw new Error(this.errorMessage);
      } finally {
        this.loading = false;
      }
    },
  },
  watch: {
    posts() {
      this.headers = setTableHeaders(this.posts, { sortable: false });
    },
  },
  created() {
    console.log(auth.currentUser);
  },
};
</script>

<style lang="scss" scoped></style>
