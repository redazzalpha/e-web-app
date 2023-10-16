<template>
  <h2 class="text-h5 text-lg-h4">
    {{ appStore.translatedProductTitle }}
  </h2>
  <VContainer grid-list-xs>
    <VRow>
      <VCol
        v-for="product in appStore.filteredProducts"
        :key="product.id"
        class="d-flex justify-center"
      >
        <VHover>
          <template v-slot:default="{ isHovering, props }">
            <RouterLink :to="`${sources.description}/${product.id}`">
              <ProductCard
                class="product-card"
                v-bind="props"
                :id="product.id"
                :image-source="product.img"
                :description="product.description"
                :price="`${product.price}&euro;`"
                :score="product.score"
                :is-new="product.isNew"
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
              />
            </RouterLink>
          </template>
        </VHover>
      </VCol>
    </VRow>
  </VContainer>
</template>

<script lang="ts" setup>
import { watch, onMounted } from "vue";
import ProductCard from "@/components/ProductCard.vue";
import router from "@/router";
import * as sources from "@/utils/sources";
import { useAppStore } from "@/store/app";
import { Filter } from "../utils/types";

const appStore = useAppStore();

//#region variables
const labelButtonOrder = "Ajouter au panier";
const labelButtonTag = "Nouveau";
//#endregion

// #region hooks
onMounted(() => {
  appStore.productFilter = router.currentRoute.value.params.category as Filter;
});
//#endregion

//#region watchers
watch(
  () => router.currentRoute.value.params,
  (to) => {
    appStore.productFilter = to.category as Filter;
  }
);
//#endregion
</script>

<style lang="scss" scoped>
.product-card {
  transition: box-shadow 0.5s linear;
}
</style>
