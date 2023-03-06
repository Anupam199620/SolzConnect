import { createRouter, createWebHistory } from "vue-router";
import { useInitialStore } from "@/stores/counter";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "login",
      component: () => import("../components/LoginPage.vue"),
      meta: { guest: true }
    },
    {
      path: "/home",
      name: "home",
      component: () => import("../components/HomePage.vue"),
      meta: { isSecure: true }
    },
  ],
});

router.beforeEach((to, from, next) => {
  if (to.meta.isSecure) {
    if (localStorage.getItem("isAuthenticated")) {
        next();
    } else {
      router.push("/");
    }
  }
  else if (to.meta.guest) {
    if (localStorage.getItem("isAuthenticated")) {
      router.push("/home");
    } else {
      next();
    }
  }
  else {
    next();
  }
});

export default router;
