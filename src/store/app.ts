// Utilities
import router from "@/router";
import { baseColor } from "@/utils/colors";
import * as sources from "@/utils/sources";
import type { Product, ProductGroup, State } from "@/utils/types";
import { defineStore } from "pinia";

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
        price: 20.1,
        // price: 19.99,
        score: 5,
        isNew: false,
        isPopular: true,
        keyWords: [
          "plats",
          "Pizza au pepperoni",
          "populaires",
          "fromage",
          "parmesan",
          "pain",
          "...",
        ],
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
        keyWords: [
          "plats",
          "Spaghetti Bolognaise",
          "nouveautés",
          "news",
          "populaires",
          "pates",
          "pâtes",
          "pasta",
          "...",
        ],
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
        keyWords: [
          "plats",
          "Brochettes de poulet mariné",
          "populaires",
          "viandes",
          "grillades",
          "...",
        ],
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
        keyWords: [
          "plats",
          "Bigger mac",
          "nouveautés",
          "news",
          "populaires",
          "burger",
          "hamburger",
          "steack",
          "viandes",
          "pain",
          "...",
        ],
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
        keyWords: [
          "plats",
          "Pizza savoyarde",
          "populaires",
          "fromage",
          "parmesan",
          "pain",
          "...",
        ],
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
        keyWords: [
          "desserts",
          "Pancakes aux fruits rouges",
          "nouveautés",
          "news",
          "populaires",
          "sucre",
          "sirop",
          "gateau",
          "farine",
          "...",
        ],
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
        keyWords: [
          "plats",
          "Rigatoni au basilic",
          "nouveautés",
          "news",
          "populaires",
          "pates",
          "pâtes",
          "pasta",
          "...",
        ],
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
        keyWords: [
          "entrées",
          "Salade Sauveur",
          "populaires",
          "salade verte",
          "légumes",
          "...",
        ],
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
        keyWords: [
          "desserts",
          "Dessert collection",
          "populaires",
          "sucre",
          "sirop",
          "gateau",
          "farine",
          "...",
        ],
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
        isPopular: false,
        keyWords: [
          "plats",
          "Ragout à la réunionaise",
          "Ragoût à la réunionaise",
          "nouveautés",
          "news",
          "sauces",
          "réunion",
          "viandes",
          "...",
        ],
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
        keyWords: [
          "plats",
          "Triple mix collection",
          "populaires",
          "burger",
          "hamburger",
          "steack",
          "viandes",
          "pain",
          "...",
        ],
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
        keyWords: [
          "desserts",
          "Nuages de Donuts",
          "nouveautés",
          "news",
          "populaires",
          "sucre",
          "sirop",
          "gateau",
          "farine",
          "...",
        ],
      },
    ],
    productCurrent: {},
    productsFound: [],
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
      labelButtonAction: baseColor.black,
      labelSearchBar: baseColor.black,
      backgroundTitleHero: baseColor.transparent,
      appBar: baseColor.transparent,
      searchBar: baseColor.white,
      drawer: baseColor.dark,
      footer: baseColor.blackThin,
      buttonTag: baseColor.red,
      buttonAction: baseColor.orange,
      buttonLink: baseColor.orange,
      caption: baseColor.white,
      score: baseColor.orange,
    },
    cart: [],
    hintSearchBar: "",
    snackbar: false,
    timeout: 2000,
    modelDialog: true,
    modelSlider: 1,
    drawer: false,
    switcher: false,
    navigationSide: false,
  }),
  getters: {
    currentItem: (state) => {
      return state.productCurrent as Product;
    },
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
  actions: {
    toTop(scrollingType: ScrollBehavior): void {
      window.scrollTo({
        behavior: scrollingType,
        top: 0,
      });
    },
    checkLocalStorage(): boolean {
      const storage = window.localStorage;
      const x = "__storage_test__";
      try {
        storage.setItem(x, x);
        storage.removeItem(x);
        return true;
      } catch (e) {
        return (
          e instanceof DOMException &&
          // everything except Firefox
          (e.name === "QuotaExceededError" ||
            // Firefox
            e.name === "NS_ERROR_DOM_QUOTA_REACHED") &&
          // acknowledge QuotaExceededError only if there's something already stored
          storage.length !== 0
        );
      }
    },
    addToCart(productGroup?: ProductGroup): void {
      if (productGroup) this.cart.push(productGroup);
    },
    addToCartHandler(id: number, quantity: number, totalPrice: string): void {
      const productGroup: ProductGroup = {
        ...this.currentItem,
        id: Date.now(),
        quantity,
        totalPrice,
      };

      this.addToCart(productGroup);
      this.closeSlider();
    },
    removeFromCart(productGroup: ProductGroup) {
      const index = this.cart.indexOf(productGroup);
      if (index > -1) this.cart.splice(index, 1);
    },
    clearCart(): void {
      this.cart = [];
      this.toTop("instant");
    },
    searchByKeyword(keyword: string): void {
      if (keyword) {
        keyword = keyword.trim();
        const regex: RegExp = new RegExp(keyword, "gi");
        this.productsFound = this.products.filter((e: Product) => {
          const match = e.keyWords.filter((keyword: string) =>
            keyword.match(regex)
          );
          if (match.length) return e;
        });
      }
      if (this.productsFound.length < 1) {
        this.snackbar = true;
        this.hintSearchBar = "Aucune correspondance trouvée";
        setTimeout(() => {
          this.hintSearchBar = "";
        }, this.timeout);
      } else {
        router.push(`${sources.search}/${keyword}`);
      }
    },
    openDialog(product: Product | undefined) {
      if (product) {
        this.productCurrent = product;
        this.modelDialog = true;
      }
    },
    closeSlider(): void {
      this.modelSlider = 1;
      this.modelDialog = false;
    },
  },
  persist: true,
});
