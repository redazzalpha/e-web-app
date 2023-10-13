<template>
  <HeroBanner
    :image-background="HeroImg"
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
    height="500"
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
  <div
    class="main-title-xs text-h4 text-center mt-10"
    v-if="$vuetify.display.mobile"
  >
    {{ titleHero }}
  </div>

  <article>
    <!-- article title -->
    <h1
      class="article_title text-center text-h5 text-lg-h4 font-weight-bold mt-10"
    >
      {{ titleArticle }}
    </h1>

    <!-- viewer block-->
    <ViewerBlock :products="products" />

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
  </article>
</template>

<script lang="ts" setup>
import HeroBanner from "@/components/HeroBanner.vue";
import SearchBar from "@/components/SearchBar.vue";
import ViewerBlock from "@/components/ViewerBlock.vue";
import HeroImg from "@/assets/food.png";
import products from "../utils/products";
import { colors } from "@/utils/colors";
import { slideshows } from "@/utils/slideshows";

//#region variables
const titleHero = "Découvrez nos plats et recettes";
const titleArticle = "Les plus populaires";
const fontHero = "merienda, serif, sans-serif";
const textHeroLink = "Connectez-vous";
const sourceHeroLink = "/";
const fontSizeHero = 48;
const labelSearchBar = "rechercher un plat";
const sizeSearchBar = 320;
const iconSearchBar = "mdi-magnify";
//#endregion
</script>

<style lang="scss" scoped>
@import "@/styles/variables";

.main-title-xs {
  font-family: v-bind("fontHero") !important;
  /* font-size: v-bind("`${fontSizeHero - 10}px`"); */
}
.article_title {
  font-family: $font-family-logo !important;
}
.carousel {
  width: v-bind("`${$vuetify.display.mobile? 100 : 70}%`");
  margin: auto;
  transition: width 1s linear;
}
</style>
