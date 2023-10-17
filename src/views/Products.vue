<template>
  <h2 class="text-h5 text-lg-h4">
    {{ appStore.translatedProductTitle }}
  </h2>
  <SearchBar
    class="mt-10 mb-5 mx-auto"
    :label="labelSearchBar"
    :color-label="appStore.colors.labelSearchBar"
    :color-background="appStore.colors.searchBar"
    :prepend-icon="iconSearchBar"
    :size="sizeSearchBar"
    :on-search="appStore.searchByKeyword"
    :hint="appStore.hintSearchBar"
  />

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
                :product="product"
                :label-button-tag="labelButtonTag"
                :label-button-order="labelButtonOrder"
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

  <v-snackbar v-model="appStore.snackbar" :timeout="appStore.timeout">
    {{ appStore.hintSearchBar }}

    <template v-slot:actions>
      <v-btn color="blue" variant="text" @click="appStore.snackbar = false">
        Close
      </v-btn>
    </template>
  </v-snackbar>
</template>

<script lang="ts" setup>
import { watch, onMounted } from "vue";
import ProductCard from "@/components/ProductCard.vue";
import router from "@/router";
import * as sources from "@/utils/sources";
import { useAppStore } from "@/store/app";
import { Filter } from "../utils/types";
import SearchBar from "@/components/SearchBar.vue";

const appStore = useAppStore();

//#region variables
const labelButtonOrder = "Ajouter au panier";
const labelButtonTag = "Nouveau";
const labelSearchBar = "rechercher par mot-clé";
const sizeSearchBar = 320;
const iconSearchBar = "mdi-magnify";
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
