<template>
  <h2 class="text-h5 text-lg-h4">
    {{ appStore.translatedProductTitle }}
  </h2>
  <SearchBar
    class="mt-10 mb-5 mx-auto"
    :label="labelSearchBar"
    color-label="color-black"
    color-background="color-white"
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
              <CardProduct
                class="product-card"
                v-bind="props"
                :product="product"
                :label-button-tag="labelButtonTag"
                :label-button-action="labelButtonAction"
                color-label-button-tag="color-white"
                color-label-button-action="color-black"
                color-background-button-tag="color-red-secondary"
                color-background-button-action="color-orange"
                color-background-caption="color-white"
                color-text-caption="color-black"
                color-score="color-orange"
                :elevation="isHovering ? 15 : 0"
                :on-action-click="appStore.openDialog"
                icon-button-action="mdi-cart-plus"
              />
            </RouterLink>
          </template>
        </VHover>
      </VCol>
    </VRow>
  </VContainer>

  <DialogSlider
    v-model:dialog="appStore.modelDialog"
    v-model:slider="appStore.modelSlider"
    :product="appStore.currentItem"
    :max="20"
    :min="1"
    @on-validate="appStore.addToCartHandler"
  />

  <VSnackbar v-model="appStore.snackbar" :timeout="appStore.timeout">
    {{ appStore.hintSearchBar }}

    <template v-slot:actions>
      <v-btn color="blue" variant="text" @click="appStore.snackbar = false">
        Close
      </v-btn>
    </template>
  </VSnackbar>
</template>

<script lang="ts" setup>
import CardProduct from "@/components/CardProduct.vue";
import DialogSlider from "@/components/DialogSlider.vue";
import SearchBar from "@/components/SearchBar.vue";
import router from "@/router";
import { useAppStore } from "@/store/app";
import * as sources from "@/utils/sources";
import type { Filter } from "@/utils/types";
import { onMounted, watch } from "vue";

const appStore = useAppStore();

//#region variables
const labelButtonAction = "Ajouter au panier";
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
