<template>
  <HeroBanner
    :image-background="HeroImg"
    :text-title="titleHero"
    :font-title="fontHero"
    :size-title="fontSizeHero"
    :color-title="colors.textHero"
    :color-background-title="colors.backgroundTitleHero"
    :text-link="textHeroLink"
    :color-link="colors.textLinkHero"
    :source-link="sourceHeroLink"
    :hide-title-on-xs="$vuetify.display.mobile"
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

  <!-- title xs-->
  <div class="title-xs text-center mt-10" v-if="$vuetify.display.mobile">
    {{ titleHero }}
  </div>

  <article>
    <h1 class="title text-center text-h3 font-weight-bold mt-10">
      {{ titleArticle }}
    </h1>
    <ViewerBlock :products="products" />

    <v-carousel
      cycle
      hide-delimiter-background
      hide-delimiters
      :show-arrows="false"
      height="500"
      class="px-sm-15"
    >
      <v-carousel-item
        v-for="slideshow in slideshows"
        :key="slideshow"
        :src="slideshow"
        :cover="true"
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
import vuetify from "@/plugins/vuetify";

console.log(vuetify.display.mobile.value);

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

.title-xs {
  font-family: v-bind("fontHero");
  font-size: v-bind("`${fontSizeHero - 8}px`");
}
.title {
  font-family: $font-family-logo !important;
  font-size: 38px;
}
</style>
