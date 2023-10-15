// Utilities
import { defineStore } from "pinia";
import * as sources from "@/utils/sources";
import type { State, Product } from "@/utils/types";
import { baseColor } from "@/utils/colors";

export const useAppStore = defineStore("app", {
  state: (): State => ({
    products: [
      {
        id: 1,
        category: "main courses",
        label: "Pizza au pepperoni",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. \
            Sed non risus. Suspendisse lectus tortor, dignissim sit amet, adipiscing nec,\
            ultricies sed, dolor. Cras elementum ultrices diam. Maecenas ligula massa, ",
        img: `${sources.pepperoniImg}`,
        price: 19.99,
        score: 5,
        isNew: false,
        isPopular: true,
      },
      {
        id: 2,
        category: "main courses",
        label: "Spaghetti Bolognaise",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. \
            Sed non risus. Suspendisse lectus tortor, dignissim sit amet, adipiscing nec,\
            ultricies sed, dolor. Cras elementum ultrices diam. Maecenas ligula massa, ",
        img: `${sources.spaghettiImg}`,
        price: 14.24,
        score: 3,
        isNew: true,
        isPopular: true,
      },
      {
        id: 3,
        category: "main courses",
        label: "Brochettes de poulet mariné",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. \
            Sed non risus. Suspendisse lectus tortor, dignissim sit amet, adipiscing nec,\
            ultricies sed, dolor. Cras elementum ultrices diam. Maecenas ligula massa, ",
        img: `${sources.broachImg}`,
        price: 12.77,
        score: 4,
        isNew: false,
        isPopular: true,
      },
      {
        id: 4,
        category: "main courses",
        label: "Bigger Mac",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. \
            Sed non risus. Suspendisse lectus tortor, dignissim sit amet, adipiscing nec,\
            ultricies sed, dolor. Cras elementum ultrices diam. Maecenas ligula massa, ",
        img: `${sources.biggerImg}`,
        price: 18.54,
        score: 6,
        isNew: true,
        isPopular: true,
      },
      {
        id: 5,
        category: "main courses",
        label: "Pizza savoyarde",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. \
            Sed non risus. Suspendisse lectus tortor, dignissim sit amet, adipiscing nec,\
            ultricies sed, dolor. Cras elementum ultrices diam. Maecenas ligula massa, ",
        img: `${sources.savoyardeImg}`,
        price: 17.89,
        score: 4,
        isNew: false,
        isPopular: true,
      },
      {
        id: 6,
        category: "deserts",
        label: "Pancakes aux fruits rouges",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. \
            Sed non risus. Suspendisse lectus tortor, dignissim sit amet, adipiscing nec,\
            ultricies sed, dolor. Cras elementum ultrices diam. Maecenas ligula massa, ",
        img: `${sources.pancakesImg}`,
        price: 12.24,
        score: 3,
        isNew: true,
        isPopular: true,
      },
      {
        id: 7,
        category: "main courses",
        label: "Rigatoni au basilic",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. \
            Sed non risus. Suspendisse lectus tortor, dignissim sit amet, adipiscing nec,\
            ultricies sed, dolor. Cras elementum ultrices diam. Maecenas ligula massa, ",
        img: `${sources.rigatoniImg}`,
        price: 12.05,
        score: 3,
        isNew: true,
        isPopular: true,
      },
      {
        id: 8,
        category: "starters",
        label: "Salade Sauveur",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. \
            Sed non risus. Suspendisse lectus tortor, dignissim sit amet, adipiscing nec,\
            ultricies sed, dolor. Cras elementum ultrices diam. Maecenas ligula massa, ",
        img: `${sources.saladeImg}`,
        price: 10.79,
        score: 2,
        isNew: false,
        isPopular: true,
      },
      {
        id: 9,
        category: "deserts",
        label: "Dessert collection",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. \
            Sed non risus. Suspendisse lectus tortor, dignissim sit amet, adipiscing nec,\
            ultricies sed, dolor. Cras elementum ultrices diam. Maecenas ligula massa, ",
        img: `${sources.dessertImg}`,
        price: 28.34,
        score: 6,
        isNew: false,
        isPopular: true,
      },
      {
        id: 10,
        category: "main courses",
        label: "Ragout à la réunionaise",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. \
            Sed non risus. Suspendisse lectus tortor, dignissim sit amet, adipiscing nec,\
            ultricies sed, dolor. Cras elementum ultrices diam. Maecenas ligula massa, ",
        img: `${sources.ragoutImg}`,
        price: 3.18,
        score: 1,
        isNew: true,
        isPopular: true,
      },
      {
        id: 11,
        category: "main courses",
        label: "Triple mix collection",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. \
            Sed non risus. Suspendisse lectus tortor, dignissim sit amet, adipiscing nec,\
            ultricies sed, dolor. Cras elementum ultrices diam. Maecenas ligula massa, ",
        img: `${sources.tripleImg}`,
        price: 27.35,
        score: 4,
        isNew: false,
        isPopular: true,
      },
      {
        id: 12,
        category: "deserts",
        label: "Nuages de Donuts",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. \
            Sed non risus. Suspendisse lectus tortor, dignissim sit amet, adipiscing nec,\
            ultricies sed, dolor. Cras elementum ultrices diam. Maecenas ligula massa, ",
        img: `${sources.donutsImg}`,
        price: 17.15,
        score: 6,
        isNew: true,
        isPopular: true,
      },
    ],
    productFilter: "all",
    slideshows: [
      sources.slideshowImg1,
      sources.slideshowImg2,
      sources.slideshowImg3,
      sources.slideshowImg4,
      sources.slideshowImg5,
      sources.slideshowImg6,
      sources.slideshowImg7,
      sources.slideshowImg8,
    ],
    colors: {
      textBase: baseColor.black,
      backgroundBase: baseColor.white,
      textAppBar: baseColor.black,
      textHero: baseColor.black,
      textLinkHero: baseColor.blue,
      labelButtonTag: baseColor.white,
      labelButtonOrder: baseColor.black,
      labelSearchBar: baseColor.black,
      backgroundTitleHero: baseColor.transparent,
      appBar: baseColor.transparent,
      searchBar: baseColor.white,
      drawer: baseColor.dark,
      footer: baseColor.blackThin,
      buttonTag: baseColor.red,
      buttonOrder: baseColor.orange,
      buttonLink: baseColor.orange,
      caption: baseColor.white,
      score: baseColor.orange,
    },
  }),
  getters: {
    filteredProducts: (state) => {
      if (state.productFilter == "news")
        return state.products.filter((e: Product) => e.isNew);
      else if (state.productFilter == "populars")
        return state.products.filter((e: Product) => e.isPopular);
      else if (state.productFilter == "all") return state.products;
      else
        return state.products.filter(
          (e: Product) => e.category == state.productFilter
        );
    },
    translatedProductTitle: (state) => {
      switch (state.productFilter) {
        case "news":
          return "Les nouveautés";
        case "populars":
          return "Les plus populaires";
        case "starters":
          return "Les entrées";
        case "main courses":
          return "Les plats";
        case "deserts":
          return "Les desserts";
        default:
          return "Unknown";
      }
    },
  },
});
