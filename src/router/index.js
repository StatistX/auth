import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import AuthView from "@/views/AuthView.vue";
import RegisterView from "@/views/RegisterView.vue";
import ContactsView from "../views/ContactsView.vue";
import TableViewVue from "@/views/TableView.vue";
import PostItem from "@/views/PostItem.vue";
import { auth } from "../firebaseConfig";

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
    meta: {
      requiedAuth: true,
    },
  },
  {
    path: "/table",
    name: "table",
    component: TableViewVue,
    meta: {
      requiedAuth: true,
    },
  },
  {
    path: "/table/:id",
    component: PostItem,
    meta: {
      requiedAuth: true,
    },
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
    meta: {
      requiedAuth: true,
    },
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

router.beforeEach((to, from, next) => {
  console.log(auth.currentUser);

  if (to.matched.some((path) => path.meta.requiedAuth)) {
    if (!auth.currentUser) {
      next("/auth");
      return;
    }
  }

  next();
});

export default router;
