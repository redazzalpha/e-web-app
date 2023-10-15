<template>
  <div
    class="description_container d-flex flex-column elevation-10 mx-5 mx-md-10 pb-md-10"
  >
    <VBtn
      class="description_back-button text-h4 pa-0"
      variant="plain"
      @click="$router.back"
    >
      <VIcon>mdi-arrow-left-thick</VIcon>
    </VBtn>
    <h2 class="description_title text-h5 text-lg-h4 ma-10">
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
      <p
        class="description_content_text d-flex flex-column d-block ma-5 flex-shrink-1 my-md-auto"
      >
        <span>
          <strong> Description: </strong>
          {{ product.description }} <br />
          <strong> Prix: </strong>
          {{ product.price }}&euro; <br />
          <strong> Note: </strong>
          {{ product.score }}/6<br />
          <strong> Category: </strong>
          {{ product.category }} <br />
          <strong> Produit populaire: </strong>
          {{ product.isPopular ? "oui" : "non" }} <br />
          <strong> Nouveau produit: </strong>
          {{ product.isNew ? "oui" : "non" }} <br />
        </span>
        <VBtn
          class="description_content_text_btn align-self-center ma-10"
          size="large"
          rounded="xl"
          width="320"
          variant="elevated"
          :color="baseColor.orange"
        >
          Ajouter au panier
        </VBtn>
      </p>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { computed } from "vue";
import { useAppStore } from "@/store/app";
import { Product } from "../utils/types";
import router from "@/router";
import { baseColor } from "@/utils/colors";
import vuetify from "@/plugins/vuetify";

//#region variables
const product: Product =
  useAppStore().products[Number(router.currentRoute.value.params.id) - 1];
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
</script>

<style lang="scss" scoped>
.description_container {
  position: relative;
  justify-content: center;
  align-content: center;
  border-radius: 10px;
  background-color: v-bind("baseColor.whiteDark");
  margin-top: 100px;
  .description_back-button {
    position: absolute;
    top: 0;
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
