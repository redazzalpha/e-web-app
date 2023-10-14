<template>
  <h2 class="text-h5 text-lg-h4 my-16">{{ translatedTitle }}</h2>

  <VContainer grid-list-xs>
    <VRow>
      <VCol
        v-for="product in filteredProducts"
        :key="product.label"
        class="d-flex justify-center"
      >
        <ProductCard
          :image-source="product.img"
          :description="product.description"
          :price="`${product.price}&euro;`"
          :score="product.score"
          :is-new="product.isNew"
          :label-button-tag="labelButtonTag"
          :label-button-order="labelButtonOrder"
          :text-caption="product.label"
          :color-label-button-tag="colors.labelButtonTag"
          :color-label-button-order="colors.labelButtonOrder"
          :color-background-button-tag="colors.buttonTag"
          :color-background-button-order="colors.buttonOrder"
          :color-background-caption="colors.caption"
          :color-text-caption="colors.textBase"
          :color-score="colors.score"
        />
      </VCol>
    </VRow>
  </VContainer>
</template>

<script lang="ts" setup>
import { computed } from "vue";
import { Product } from "@/utils/types";
import products from "@/utils/products";
import ProductCard from "@/components/ProductCard.vue";
import { colors } from "@/utils/colors";
import router from "@/router";

//#region variables
const labelButtonOrder = "Ajouter au panier";
const labelButtonTag = "Nouveau";
//#endregion

//#region computed
const filteredProducts = computed<Array<Product>>((): Array<Product> => {
  return products.filter((item: Product): boolean => {
    if (router.currentRoute.value.params.category == "news") return item.isNew;
    else if (router.currentRoute.value.params.category == "populars")
      return item.isPopular;
    else return item.category == router.currentRoute.value.params.category;
  });
});
//#endregion

//#region computed
const translatedTitle = computed<string>(() => {
  switch (router.currentRoute.value.params.category) {
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
});
//#endregion

//#endregion
</script>

<style lang="scss" scoped></style>
