import { DrawerListItem } from "@/utils/types";
import * as sources from "@/utils/sources";

export const drawerListItem: Array<DrawerListItem> = [
  {
    label: "Accueil",
    icon: "mdi-home",
    href: sources.home,
  },
  {
    label: "Les nouveautés",
    icon: "mdi-star",
    href: sources.news,
  },
  {
    label: "Les plus populaires",
    icon: "mdi-star",
    href: sources.populars,
  },
  {
    label: "Les entrées",
    icon: "mdi-food-fork-drink",
    href: sources.starters,
  },
  {
    label: "Les plats",
    icon: "mdi-food-turkey",
    href: sources.mainCourses,
  },
  {
    label: "Les desserts",
    icon: "mdi-cupcake",
    href: sources.deserts,
  },
];
