import type { DrawerListItem } from "@/utils/types";
import * as sources from "@/utils/sources";

export const drawerListItem: Array<DrawerListItem> = [
  {
    label: "Accueil",
    icon: "mdi-home",
    href: sources.home,
    children: [],
  },
  {
    label: "Nos articles",
    icon: "mdi-silverware-variant",
    href: sources.product,
    children: [
      {
        label: "Les nouveautés",
        icon: "mdi-new-box",
        href: sources.news,
        children: [],
      },
      {
        label: "Les plus populaires",
        icon: "mdi-star",
        href: sources.populars,
        children: [],
      },
      {
        label: "Les entrées",
        icon: "mdi-food-fork-drink",
        href: sources.starters,
        children: [],
      },
      {
        label: "Les plats",
        icon: "mdi-food-turkey",
        href: sources.mainCourses,
        children: [],
      },
      {
        label: "Les desserts",
        icon: "mdi-cupcake",
        href: sources.deserts,
        children: [],
      },
    ],
  },
  {
    label: "Mon panier",
    icon: "mdi-cart",
    href: sources.cart,
    children: [],
  },
  {
    label: "Ma commande",
    icon: "mdi-file-sign",
    href: sources.order,
    children: [],
  },
];
