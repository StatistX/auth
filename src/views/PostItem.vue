<template>
  <BaseLayoutWithHeader>
    <v-row>
      <v-col>
        <v-card>
          <v-btn @click="$router.back()">Back</v-btn>
          <v-card-title> Post № {{ $route.params.id }} </v-card-title>
          <v-card-text>Title:{{ post.title }}</v-card-text>
          <v-card-text>Body: {{ post.body }}</v-card-text>
          <v-card-title>
            Comments
            <v-text-field
              v-model="search"
              append-icon="mdi-magnify"
              label="Search"
              single-line
              hide-details
            ></v-text-field>
          </v-card-title>

          <v-progress-linear v-if="loading" indeterminate></v-progress-linear>

          <p v-if="errorMessage">
            {{ errorMessage }}
          </p>

          <v-data-table
            v-else
            v-model:items-per-page="itemsPerPage"
            :headers="headers"
            :items="comments"
            :search="search"
            item-value="name"
            class="elevation-1"
            hide-default-footer
          ></v-data-table>
        </v-card>
      </v-col>
    </v-row>
  </BaseLayoutWithHeader>
</template>

<script>
import BaseLayoutWithHeader from "../components/BaseLayoutWithHeader.vue";
import * as labs from "vuetify/labs/components";
import { setTableHeaders } from "../utils";
import { getComments, getPost } from "@/utils/api";

export default {
  data() {
    return {
      post: [],
      comments: [],
      headers: [],
      itemsPerPage: 10,
      errorMessage: "",
      loading: true,
      search: "",
    };
  },
  components: { BaseLayoutWithHeader, ...labs },
  methods: {
    async getDataFromApi(id) {
      this.loading = true;

      await Promise.allSettled([getComments(id), getPost(id)])
        .then(([resp1, resp2]) => {
          console.log(resp1, resp2);
          this.comments = resp1.value.data;
          this.post = resp2.value.data;
        })
        .catch((err) => {
          console.log(`error: ${err}`);
          throw new Error(err);
        })
        .finally(() => {
          this.loading = false;
        });
    },
  },
  watch: {
    comments() {
      this.headers = setTableHeaders(this.comments, { sortable: true });
    },
  },
  created() {
    this.getDataFromApi(this.$route.params.id);
  },
};
</script>

<style lang="scss" scoped></style>
