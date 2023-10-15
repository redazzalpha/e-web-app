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
        name: "category",
        component: () => import("@/views/Products.vue"),
      },
      {
        path: "description/:id",
        name: "description",
        component: () => import("@/views/Description.vue"),
      },
      {
        path: "search",
        name: "search",
        component: () => import("@/views/Search.vue"),
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

router.beforeEach(() => {
  window.scrollTo({
    behavior: "instant",
    top: 0,
  });
});

export default router;
