import { createRouter, createWebHashHistory } from "vue-router"

const login = () => import("../views/login.vue")

const router = createRouter({
  history: createWebHashHistory(),
  routes: [
    {
      path: "/",
      redirect: "/login",
    },
    {
      path: "/login",
      component: login,
    },
  ],
})

export default router
