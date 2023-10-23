<template>
  <h2 class="text-color-black text-h5 text-lg-h4">
    mot-clé : {{ $route.params.keyword }} <br />
    <span v-html="subtitle"></span>
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
        v-for="product in appStore.productsFound"
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
                :text-caption="product.label"
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
                :on-action-click="openDialog"
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
    :id="idProduct"
    :title="titleSlider"
    :text="textSlider"
    :price="priceProduct"
    :max="20"
    :min="1"
    @on-validate="appStore.addToCartHandler"
  />
</template>

<script lang="ts" setup>
import CardProduct from "@/components/CardProduct.vue";
import DialogSlider from "@/components/DialogSlider.vue";
import SearchBar from "@/components/SearchBar.vue";
import { useAppStore } from "@/store/app";
import * as sources from "@/utils/sources";
import type { Product } from "@/utils/types";
import { computed, ref } from "vue";

const appStore = useAppStore();

//#region variables
const labelButtonAction = "Ajouter au panier";
const labelButtonTag = "Nouveau";
const labelSearchBar = "rechercher par mot-clé";
const sizeSearchBar = 320;
const iconSearchBar = "mdi-magnify";
let priceProduct = 0;
let idProduct = 0;
//#endregion

//#region refs
const titleSlider = ref<string>("");
const textSlider = ref<string>("");
//#endregion

//#region computed
const subtitle = computed<string>((): string => {
  const size = appStore.productsFound.length;
  return size > 1
    ? `${size > 99 ? "99&#5161;" : size} articles trouvés`
    : `1 article trouvé`;
});
//#endregion

//#region event handlers
function openDialog(product: Product | undefined) {
  if (product) {
    titleSlider.value = "Selectionnez une quantité";
    textSlider.value = product.label;
    priceProduct = product.price;
    idProduct = product.id;
    appStore.modelDialog = true;
  }
}
//#endregion
</script>

<style lang="scss" scoped>
.product-card {
  transition: box-shadow 0.5s linear;
}
</style>
