import { DrawerListItem } from "@/utils/types";
import * as Hrefs from "@/utils/sources";

export const drawerListItem: Array<DrawerListItem> = [
  {
    label: "Accueil",
    icon: "mdi-home",
    href: Hrefs.home,
  },
  {
    label: "Les nouveautés",
    icon: "mdi-star",
    href: Hrefs.news,
  },
  {
    label: "Les plus populaires",
    icon: "mdi-star",
    href: Hrefs.populars,
  },
  {
    label: "Les entrées",
    icon: "mdi-food-fork-drink",
    href: Hrefs.starters,
  },
  {
    label: "Les plats",
    icon: "mdi-food-turkey",
    href: Hrefs.mainCourses,
  },
  {
    label: "Les desserts",
    icon: "mdi-cupcake",
    href: Hrefs.deserts,
  },
];
