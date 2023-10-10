<template>
  <HeroBanner
    :img="HeroImg"
    title-text="Découvrez nos plats et recettes"
    title-font="merienda, serif, sans-serif"
    :title-size="32"
    :title-color="colors.textHeroTitle"
    :title-bg-color="colors.bgHeroTitle"
    link-text="Connectez-vous"
    :link-text-color="colors.textHeroLink"
    link-src="/"
  >
    <template v-slot:center>
      <SearchBar
        class="mt-10 mb-5"
        label-text="search flavour"
        :label-text-color="colors.textSearchBarLabel"
        :bg-color="colors.bgSearchBar"
        icon="mdi-magnify"
        :size="320"
      />
    </template>
    <template v-slot:before-link> <p>Déjà un compte ?</p> </template>
  </HeroBanner>
  <article>
    <h1 class="title text-center text-h3 font-weight-bold mt-10">
      Les nouveautés
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
</script>

<style lang="scss" scoped>
@import "@/styles/variables";

.title {
  font-family: $font-family-logo !important;
  font-size: 38px;
}
</style>
