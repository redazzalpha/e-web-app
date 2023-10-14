<template>
  <HeroBanner
    tag="article"
    :image-background="Hrefs.heroImg"
    :text-title="titleHero"
    :font-title="fontHero"
    :size-title="fontSizeHero"
    :color-title="colors.textHero"
    :color-background-title="colors.backgroundTitleHero"
    :hide-title-on-xs="$vuetify.display.mobile"
    position-title="absolute"
    :top-title="140"
    :left-title="63"
    :text-link="textHeroLink"
    :color-link="colors.textLinkHero"
    :source-link="sourceHeroLink"
  >
    <!-- search bar -->
    <template v-slot:center>
      <SearchBar
        class="mt-10 mb-5"
        :label="labelSearchBar"
        :color-label="colors.labelSearchBar"
        :color-background="colors.searchBar"
        :prepend-icon="iconSearchBar"
        :size="sizeSearchBar"
      />
    </template>

    <!-- before hero link -->
    <template v-slot:before-link> <p>Déjà un compte ?</p> </template>
  </HeroBanner>

  <!-- main title xs-->
  <h1 class="main-title-xs text-h4" v-if="$vuetify.display.mobile">
    {{ titleHero }}
  </h1>

  <!-- section most populars -->
  <section class="most-populars">
    <h2 class="section_title text-h5 text-lg-h4">
      {{ titlePopulars }}
    </h2>

    <!-- viewer block-->
    <ViewerBlock :products="products" />

    <!-- see all most populars button -->
    <VBtn
      :to="Hrefs.populars"
      variant="plain"
      class="text-orange text-h6 mb-10 ml-15"
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
    >
      <v-carousel-item
        class="carousel_item"
        v-for="slideshow in slideshows"
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
    <h2 class="section_title text-h5 text-lg-h4">
      {{ titleStarters }}
    </h2>

    <!-- viewer block-->
    <ViewerBlock :products="products" />

    <!-- see all most starters button -->
    <VBtn
      :to="Hrefs.starters"
      variant="plain"
      class="text-orange text-h6 mb-10 ml-15"
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
    >
      <v-carousel-item
        class="carousel_item"
        v-for="slideshow in slideshows"
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
    <h2 class="section_title text-h5 text-lg-h4">
      {{ titleMainCourses }}
    </h2>

    <!-- viewer block-->
    <ViewerBlock :products="products" />

    <!-- see all most main courses button -->
    <VBtn
      :to="Hrefs.mainCourses"
      variant="plain"
      class="text-orange text-h6 mb-10 ml-15"
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
    >
      <v-carousel-item
        class="carousel_item"
        v-for="slideshow in slideshows"
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
    <h2 class="section_title text-h5 text-lg-h4">
      {{ titleDeserts }}
    </h2>

    <!-- viewer block-->
    <ViewerBlock :products="products" />

    <!-- see all deserts button -->
    <VBtn
      :to="Hrefs.deserts"
      variant="plain"
      class="text-orange text-h6 mb-10 ml-15"
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
    >
      <v-carousel-item
        class="carousel_item"
        v-for="slideshow in slideshows"
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
</template>

<script lang="ts" setup>
import HeroBanner from "@/components/HeroBanner.vue";
import SearchBar from "@/components/SearchBar.vue";
import ViewerBlock from "@/components/ViewerBlock.vue";
import products from "../utils/products";
import { colors } from "@/utils/colors";
import { slideshows } from "@/utils/slideshows";
import * as Hrefs from "@/utils/sources";

//#region variables
const titleHero = "Découvrez nos plats et recettes";
const titlePopulars = "Les plus populaires";
const titleStarters = "Les entrées";
const titleMainCourses = "Les plats";
const titleDeserts = "Les desserts";
const textHeroLink = "Connectez-vous";
const labelSearchBar = "rechercher un plat";
const fontHero = "merienda, serif, sans-serif";
const fontSizeHero = 48;
const sourceHeroLink = "/";
const sizeSearchBar = 320;
const iconSearchBar = "mdi-magnify";
//#endregion
</script>

<style lang="scss" scoped>
.main-title-xs {
  font-family: v-bind("fontHero") !important;
  /* font-size: v-bind("`${fontSizeHero - 10}px`"); */
}
.carousel {
  width: v-bind("`${$vuetify.display.mobile? 100 : 70}%`");
  margin: auto;
  transition: width 1s linear;
}
</style>
