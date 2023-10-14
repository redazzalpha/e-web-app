// Composables
import { createRouter, createWebHistory } from "vue-router";

const routes = [
  {
    path: "/",
    name: "layoutHome",
    component: () => import("@/layouts/VLHome.vue"),
    children: [
      {
        path: "",
        name: "home",
        component: () => import("@/views/Home.vue"),
      },
    ],
  },
  {
    path: "/products",
    name: "layoutProducts",
    component: () => import("@/layouts/VLProducts.vue"),
    children: [
      {
        path: ":category",
        name: "products",
        component: () => import("@/views/Products.vue"),
      },
    ],
  },
  {
    path: "/:notFound(.*)",
    name: "NotFound",
    redirect: "/",
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
