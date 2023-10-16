<template>
  <h2 class="text-h5 text-lg-h4">
    mot-clé : {{ $route.params.pattern }} <br />
    <span v-html="subtitle"></span>
  </h2>
  <VContainer grid-list-xs>
    <VRow>
      <VCol
        v-for="product in appStore.productsFound"
        :key="product.id"
        class="d-flex justify-center"
      >
        <VHover>
          <template v-slot:default="{ isHovering, props }">
            <RouterLink :to="`${sources.description}/${product.id}`">
              <ProductCard
                class="product-card"
                v-bind="props"
                :product="product"
                :label-button-tag="labelButtonTag"
                :label-button-order="labelButtonOrder"
                :text-caption="product.label"
                :color-label-button-tag="appStore.colors.labelButtonTag"
                :color-label-button-order="appStore.colors.labelButtonOrder"
                :color-background-button-tag="appStore.colors.buttonTag"
                :color-background-button-order="appStore.colors.buttonOrder"
                :color-background-caption="appStore.colors.caption"
                :color-text-caption="appStore.colors.textBase"
                :color-score="appStore.colors.score"
                :elevation="isHovering ? 15 : 0"
                :on-order-click="appStore.addToCart"
              />
            </RouterLink>
          </template>
        </VHover>
      </VCol>
    </VRow>
  </VContainer>
</template>

<script lang="ts" setup>
import * as sources from "@/utils/sources";
import ProductCard from "@/components/ProductCard.vue";
import { useAppStore } from "@/store/app";
import { computed } from "vue";

const appStore = useAppStore();

//#region variables
const labelButtonOrder = "Ajouter au panier";
const labelButtonTag = "Nouveau";
//#endregion

//#region computed
const subtitle = computed<string>((): string => {
  const size = appStore.productsFound.length;
  return size > 1
    ? `${size > 99 ? "99&#5161;" : size} articles trouvés`
    : `1 article trouvé`;
});
//#endregion
</script>

<style lang="scss" scoped>
.product-card {
  transition: box-shadow 0.5s linear;
}
</style>
