<template>
  <h2 class="text-h5 text-lg-h4">Product page</h2>

  <VContainer grid-list-xs>
    <VRow class="">
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
import router from "@/router";
import ProductCard from "@/components/ProductCard.vue";
import { colors } from "@/utils/colors";

//#region variables
const labelButtonOrder = "Ajouter au panier";
const labelButtonTag = "Nouveau";
//#endregion

const filteredProducts = computed<Array<Product>>((): Array<Product> => {
  return products.filter((item: Product): boolean => {
    if (router.currentRoute.value.params.category == "news") return item.isNew;
    else if (router.currentRoute.value.params.category == "populars")
      return item.popular;
    else return item.category == router.currentRoute.value.params.category;
  });
});
</script>

<style lang="scss" scoped></style>
