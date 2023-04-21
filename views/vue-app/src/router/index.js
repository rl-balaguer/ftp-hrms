import { createWebHistory, createRouter } from "vue-router"
import HomeTest from "@/views/HomeTest.vue"

const routes = [
  {
    path: "/",
    name: "HomeTest",
    component: HomeTest,
  },
]

const router = createRouter({
    history: createWebHistory(),
    routes
  })
export default router