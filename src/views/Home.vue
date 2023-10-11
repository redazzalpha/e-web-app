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

  <article>
    <h1 class="title text-center text-h3 font-weight-bold mt-10">
      {{ titleArticle }}
    </h1>
    <ViewerBlock :products="products" />
  </article>
</template>

<script lang="ts" setup>
import HeroBanner from "@/components/HeroBanner.vue";
import SearchBar from "@/components/SearchBar.vue";
import ViewerBlock from "@/components/ViewerBlock.vue";
import HeroImg from "@/assets/food.png";
import { colors } from "@/utils/colors";
import products from "../utils/products";

//#region variables
const titleHero = "Découvrez nos plats et recettes";
const titleArticle = "Les plus populaires";
const fontHero = "merienda, serif, sans-serif";
const textHeroLink = "Connectez-vous";
const sourceHeroLink = "/";
const fontSizeHero = 32;
const labelSearchBar = "rechercher un plat";
const sizeSearchBar = 320;
const iconSearchBar = "mdi-magnify";
//#endregion
</script>

<style lang="scss" scoped>
@import "@/styles/variables";

.title {
  font-family: $font-family-logo !important;
  font-size: 38px;
}
</style>
