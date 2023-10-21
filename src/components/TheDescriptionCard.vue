<template>
  <div
    class="description_container d-flex flex-column elevation-10 mx-5 mx-md-auto"
  >
    <VBtn
      class="description_back-button text-h4 pa-0"
      variant="plain"
      :ripple="false"
      @click="$router.back"
    >
      <VIcon>mdi-arrow-left-thick</VIcon>
    </VBtn>
    <h2 class="description_title text-h5 text-lg-h4">
      {{ product.label }}
    </h2>
    <div
      class="description_content d-flex flex-column flex-md-row justify-center"
    >
      <VImg
        class="description_content_img ma-5 flex-grow-0"
        :src="product.img"
        :width="imgWidth"
        cover
      ></VImg>
      <div
        class="description_content_text d-flex flex-column d-block ma-5 flex-shrink-1 my-md-auto"
      >
        <p>
          <strong> Description: </strong>
          {{ product.description }} <br />
          <strong> Prix: </strong>
          {{ formatNumber(product.price) }}&euro; <br />
          <strong> Note: </strong>
          <span>
            <template v-for="count in 6" :key="count">
              <VIcon
                :icon="product.score >= count ? 'mdi-star' : 'mdi-star-outline'"
                variant="plain"
                :color="baseColor.orange"
              />
            </template>
          </span>
          <br />
          <strong> Category: </strong>
          {{ product.category }} <br />
          <strong> Nouveau produit: </strong>
          <span :class="product.isNew ? 'text-success' : 'text-error'">
            {{ product.isNew ? "oui" : "non" }}
          </span>
          <br />
          <strong> Produit populaire: </strong>
          <span :class="product.isPopular ? 'text-success' : 'text-error'">
            {{ product.isPopular ? "oui" : "non" }} <br />
          </span>
        </p>
        <VBtn
          class="description_content_text_btn align-self-center ma-10"
          size="large"
          rounded="xl"
          width="320"
          variant="elevated"
          :color="baseColor.orange"
          @click.prevent="openDialog"
        >
          Ajouter au panier
          <VIcon class="mx-2">mdi-cart-plus</VIcon>
        </VBtn>
      </div>
    </div>
  </div>

  <DialogSlider
    v-model:dialog="appStore.modelDialog"
    v-model:slider="appStore.modelSlider"
    :id="idProduct"
    :title="titleSlider"
    :text="textSlider"
    :price="priceProduct"
    :max="20"
    :min="1"
    @on-validate="addToCart"
  />
</template>

<script lang="ts" setup>
import vuetify from "@/plugins/vuetify";
import router from "@/router";
import { useAppStore } from "@/store/app";
import { baseColor } from "@/utils/colors";
import type { Product, ProductGroup } from "@/utils/types";
import { computed, ref } from "vue";
import DialogSlider from "./DialogSlider.vue";

const appStore = useAppStore();

//#region variables
const product: Product =
  appStore.products[Number(router.currentRoute.value.params.id) - 1];
let priceProduct = 0;
let idProduct = 0;
//#endregion

//#region refs
const titleSlider = ref<string>("");
const textSlider = ref<string>("");
//#endregion

//#region computed
const imgWidth = computed(() => {
  if (vuetify.display.sm.value) return "300";
  return vuetify.display.md.value ||
    vuetify.display.lg.value ||
    vuetify.display.xl.value
    ? "500"
    : "";
});
//#endregion

//#region methods
function formatNumber(value: number): string {
  let valueStr = value.toFixed(2);
  const index = valueStr.indexOf(".");
  if (index > -1) {
    const numOfDigits = valueStr.length - index;
    if (numOfDigits == 1) valueStr += "0";
  }
  return valueStr;
}
function closeSlider(): void {
  appStore.modelSlider = 1;
  appStore.modelDialog = false;
}
//#endregion

//#region event handlers
function openDialog() {
  if (product) {
    titleSlider.value = "Selectionnez une quantité";
    textSlider.value = product.label;
    priceProduct = product.price;
    idProduct = product.id;
    appStore.modelDialog = true;
  }
}
function addToCart(id: number, quantity: number, totalPrice: string): void {
  const productGroup: ProductGroup = {
    ...appStore.products[id - 1],
    id: Date.now(),
    quantity,
    totalPrice,
  };

  appStore.addToCart(productGroup);
  closeSlider();
}
//#endregion
</script>

<style lang="scss" scoped>
.description_container {
  position: relative;
  justify-content: center;
  align-content: center;
  border-radius: 10px;
  background-color: v-bind("baseColor.whiteDark");
  margin-top: 100px;
  max-width: 1000px;
  .description_title {
    margin-top: 40px !important;
  }
  .description_back-button {
    position: absolute;
    top: 5px;
    left: 0;
  }
  .description_content {
    &_img {
      border-radius: 10px;
      margin: auto;
      max-height: 300px;
    }
    &_text {
      max-width: 900px;
    }
  }
}
</style>
