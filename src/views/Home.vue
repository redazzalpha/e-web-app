<template>
  <HeroBanner
    tag="article"
    :image-background="sources.heroImg"
    :text-title="titleHero"
    :font-title="fontHero"
    :size-title="fontSizeHero"
    :hide-title-on-xs="$vuetify.display.mobile"
    position-title="absolute"
    :top-title="140"
    :left-title="63"
    :text-link="textHeroLink"
    :source-link="sourceHeroLink"
    color-title="color-black-const"
    color-background-title=""
    color-link="color-blue"
  >
    <!-- search bar -->
    <template v-slot:center>
      <SearchBar
        class="mt-10 mb-5"
        :label="labelSearchBar"
        :prepend-icon="iconSearchBar"
        :size="sizeSearchBar"
        :on-search="appStore.searchByKeyword"
        :hint="appStore.hintSearchBar"
        color-label="color-black"
        color-background="color-white"
      />
    </template>

    <!-- before hero link -->
    <template v-slot:before-link>
      <p class="text-color-black-const">Déjà un compte ?</p>
    </template>
  </HeroBanner>

  <!-- main title xs-->
  <h1 class="main-title-xs text-h4" v-if="$vuetify.display.mobile">
    {{ titleHero }}
  </h1>

  <!-- section news -->
  <section class="news">
    <h2 class="section_title text-color-black text-h5 text-lg-h4">
      {{ titleNews }}
    </h2>

    <!-- viewer block-->
    <ViewerBlock :products="productNews" :action="goTo" />

    <!-- see all most news button -->
    <VBtn
      :to="sources.news"
      variant="plain"
      class="text-color-orange text-h6 mb-10 ml-15"
      width="320"
      >voir touts les nouveautés
      <template v-slot:append><VIcon>mdi-chevron-right</VIcon></template>
    </VBtn>

    <!-- slide show -->
    <v-carousel
      class="carousel rounded"
      hide-delimiter-background
      hide-delimiters
      :show-arrows="false"
      :touch="false"
      height="500"
      cycle
      interval="3000"
    >
      <v-carousel-item
        class="carousel_item"
        v-for="slideshow in appStore.slideshows"
        :key="slideshow"
        :src="slideshow"
        cover
      >
        <!-- loader image -->
        <template v-slot:placeholder>
          <div class="d-flex align-center justify-center fill-height">
            <v-progress-circular
              color="grey-lighten-4"
              indeterminate
            ></v-progress-circular>
          </div>
        </template>
      </v-carousel-item>
    </v-carousel>
  </section>

  <!-- section most populars -->
  <section class="most-populars">
    <h2 class="section_title text-color-black text-h5 text-lg-h4">
      {{ titlePopulars }}
    </h2>

    <!-- viewer block-->
    <ViewerBlock :products="productPopulars" :action="goTo" />

    <!-- see all most populars button -->
    <VBtn
      :to="sources.populars"
      variant="plain"
      class="text-color-orange text-h6 mb-10 ml-15"
      width="320"
      >voir touts les plus populaires
      <template v-slot:append><VIcon>mdi-chevron-right</VIcon></template>
    </VBtn>

    <!-- slide show -->
    <v-carousel
      class="carousel rounded"
      hide-delimiter-background
      hide-delimiters
      :show-arrows="false"
      :touch="false"
      height="500"
      cycle
      interval="2000"
    >
      <v-carousel-item
        class="carousel_item"
        v-for="slideshow in appStore.slideshows"
        :key="slideshow"
        :src="slideshow"
        cover
      >
        <!-- loader image -->
        <template v-slot:placeholder>
          <div class="d-flex align-center justify-center fill-height">
            <v-progress-circular
              color="grey-lighten-4"
              indeterminate
            ></v-progress-circular>
          </div>
        </template>
      </v-carousel-item>
    </v-carousel>
  </section>

  <!-- section starters -->
  <section class="starters">
    <!-- section title -->
    <h2 class="section_title text-color-black text-h5 text-lg-h4">
      {{ titleStarters }}
    </h2>

    <!-- viewer block-->
    <ViewerBlock :products="productStarters" :action="goTo" />

    <!-- see all most starters button -->
    <VBtn
      :to="sources.starters"
      variant="plain"
      class="text-color-orange text-h6 mb-10 ml-15"
      width="320"
      >voir toutes les entrées
      <template v-slot:append><VIcon>mdi-chevron-right</VIcon></template>
    </VBtn>

    <!-- slide show -->
    <v-carousel
      class="carousel rounded"
      hide-delimiter-background
      hide-delimiters
      :show-arrows="false"
      :touch="false"
      height="500"
      cycle
      interval="4000"
    >
      <v-carousel-item
        class="carousel_item"
        v-for="slideshow in appStore.slideshows"
        :key="slideshow"
        :src="slideshow"
        cover
      >
        <!-- loader image -->
        <template v-slot:placeholder>
          <div class="d-flex align-center justify-center fill-height">
            <v-progress-circular
              color="grey-lighten-4"
              indeterminate
            ></v-progress-circular>
          </div>
        </template>
      </v-carousel-item>
    </v-carousel>
  </section>

  <!-- section main courses -->
  <section class="main-courses">
    <!-- section title -->
    <h2 class="section_title text-color-black text-h5 text-lg-h4">
      {{ titleMainCourses }}
    </h2>

    <!-- viewer block-->
    <ViewerBlock :products="productMainCourses" :action="goTo" />

    <!-- see all most main courses button -->
    <VBtn
      :to="sources.mainCourses"
      variant="plain"
      class="text-color-orange text-h6 mb-10 ml-15"
      width="320"
      >voir touts les plats
      <template v-slot:append><VIcon>mdi-chevron-right</VIcon></template>
    </VBtn>

    <!-- slide show -->
    <v-carousel
      class="carousel rounded"
      hide-delimiter-background
      hide-delimiters
      :show-arrows="false"
      :touch="false"
      height="500"
      cycle
      interval="5000"
    >
      <v-carousel-item
        class="carousel_item"
        v-for="slideshow in appStore.slideshows"
        :key="slideshow"
        :src="slideshow"
        cover
      >
        <!-- loader image -->
        <template v-slot:placeholder>
          <div class="d-flex align-center justify-center fill-height">
            <v-progress-circular
              color="grey-lighten-4"
              indeterminate
            ></v-progress-circular>
          </div>
        </template>
      </v-carousel-item>
    </v-carousel>
  </section>

  <!-- section deserts -->
  <section class="deserts">
    <!-- section title -->
    <h2 class="section_title text-color-black text-h5 text-lg-h4">
      {{ titleDeserts }}
    </h2>

    <!-- viewer block-->
    <ViewerBlock :products="productDeserts" :action="goTo" />

    <!-- see all deserts button -->
    <VBtn
      :to="sources.deserts"
      variant="plain"
      class="text-color-orange text-h6 mb-10 ml-15"
      width="320"
      >voir touts les desserts
      <template v-slot:append><VIcon>mdi-chevron-right</VIcon></template>
    </VBtn>

    <!-- slide show -->
    <v-carousel
      class="carousel rounded"
      hide-delimiter-background
      hide-delimiters
      :show-arrows="false"
      :touch="false"
      height="500"
      cycle
      interval="3000"
    >
      <v-carousel-item
        class="carousel_item"
        v-for="slideshow in appStore.slideshows"
        :key="slideshow"
        :src="slideshow"
        cover
      >
        <!-- loader image -->
        <template v-slot:placeholder>
          <div class="d-flex align-center justify-center fill-height">
            <v-progress-circular
              color="grey-lighten-4"
              indeterminate
            ></v-progress-circular>
          </div>
        </template>
      </v-carousel-item>
    </v-carousel>

    <v-snackbar v-model="appStore.snackbar" :timeout="appStore.timeout">
      {{ appStore.hintSearchBar }}

      <template v-slot:actions>
        <v-btn color="blue" variant="text" @click="appStore.snackbar = false">
          Close
        </v-btn>
      </template>
    </v-snackbar>
  </section>
</template>

<script lang="ts" setup>
import HeroBanner from "@/components/HeroBanner.vue";
import SearchBar from "@/components/SearchBar.vue";
import ViewerBlock from "@/components/ViewerBlock.vue";
import router from "@/router";
import { useAppStore } from "@/store/app";
import * as sources from "@/utils/sources";
import type { Product } from "@/utils/types";
import { onBeforeMount, ref } from "vue";

const appStore = useAppStore();

//#region variables
const titleHero = "Découvrez nos plats et recettes";
const titleNews = "Les Nouveautés";
const titlePopulars = "Les plus populaires";
const titleStarters = "Les entrées";
const titleMainCourses = "Les plats";
const titleDeserts = "Les desserts";
const textHeroLink = "Connectez-vous";
const labelSearchBar = "rechercher par mot-clé";
const fontHero = "merienda, serif, sans-serif";
const fontSizeHero = 48;
const sourceHeroLink = sources.access;
const sizeSearchBar = 320;
const iconSearchBar = "mdi-magnify";
//#endregion

//#region refs
const productNews = ref<Array<Product>>([]);
const productPopulars = ref<Array<Product>>([]);
const productStarters = ref<Array<Product>>([]);
const productMainCourses = ref<Array<Product>>([]);
const productDeserts = ref<Array<Product>>([]);
//#endregion

//#region methods
function updateFilteredProducts(): void {
  appStore.productFilter = "news";
  productNews.value = appStore.filteredProducts;
  appStore.productFilter = "populars";
  productPopulars.value = appStore.filteredProducts;
  appStore.productFilter = "starters";
  productStarters.value = appStore.filteredProducts;
  appStore.productFilter = "main courses";
  productMainCourses.value = appStore.filteredProducts;
  appStore.productFilter = "deserts";
  productDeserts.value = appStore.filteredProducts;
}
//#endregion

//#region handlers
function goTo(product: Product | undefined): void {
  router.push(`${sources.description}/${product?.id}`);
}
//#endregion

//#region hooks
onBeforeMount(() => updateFilteredProducts());
//#endregion
</script>

<style lang="scss" scoped>
.main-title-xs {
  font-family: v-bind("fontHero") !important;
}
.carousel {
  width: v-bind("`${$vuetify.display.mobile? 90 : 70}%`");
  margin: auto;
  transition: width 1s linear;
}
</style>
