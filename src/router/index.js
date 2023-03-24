import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import AuthView from "@/views/AuthView.vue";
import RegisterView from "@/views/RegisterView.vue";
import ContactsView from "../views/ContactsView.vue";
import TableViewVue from "@/views/TableView.vue";
import PostItem from "@/views/PostItem.vue";

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/table",
    name: "table",
    component: TableViewVue,
  },
  {
    path: "/table/:id",
    component: PostItem,
  },
  {
    path: "/auth",
    name: "auth",
    component: AuthView,
  },
  {
    path: "/register",
    name: "register",
    component: RegisterView,
  },
  {
    path: "/contacts",
    name: "contacts",
    component: ContactsView,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
