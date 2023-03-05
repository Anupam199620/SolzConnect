import { createRouter, createWebHistory } from "vue-router";
 
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "login",
      component: () => import("../components/LoginPage.vue"),
    },
    {
      path: "/home",
      name: "Home",
      component: () => import("../components/HomePage.vue"),
    },
  ],
});

export default router;
