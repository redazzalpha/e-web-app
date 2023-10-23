<template>
  <h2 class="text-h5 text-lg-h4">Mon panier</h2>
  <template v-if="appStore.cart.length > 0">
    <VContainer grid-list-xs class="cart-container">
      <VRow class="justify-center" no-gutters>
        <VCol
          v-for="productGroup in appStore.cart"
          :key="productGroup.id"
          class="d-flex align-center v-col-12 v-col-md-6"
        >
          <CardCart
            @vue:mounted="computeSummary(productGroup)"
            class="flex-grow-1 mx-md-3"
            :product-group="productGroup"
            @on-remove="onRemoveItem(productGroup)"
          />
        </VCol>
      </VRow>
      <VRow>
        <CardSummary
          :summary="summary"
          :total-summary="formatNumber(totalSummary)"
        />
      </VRow>
    </VContainer>
  </template>
  <template v-else>
    <p class="text-center text-h6">
      Vous n'avez aucun article dans votre panier!
    </p>
  </template>
</template>

<script lang="ts" setup>
import CardCart from "@/components/CardCart.vue";
import CardSummary from "@/components/CardSummary.vue";
import { useAppStore } from "@/store/app";
import { formatNumber } from "@/utils/functions";
import type { ProductGroup } from "@/utils/types";
import { ref } from "vue";

const appStore = useAppStore();

//#region variables
const summary = ref<string>("");
let totalSummary = 0;
//#endregion

//#region methods
function computeSummary(productGroup: ProductGroup) {
  const quantityStr =
    productGroup.quantity > 1 ? `&times; ${productGroup.quantity}` : ``;

  summary.value += `<span class="d-flex">
    <span class="flex-grow-1">
      - ${productGroup.label} ${quantityStr}
    </span>
    <span>
      <strong>${productGroup.totalPrice}&euro;</strong>
      </span>
  </span>`;

  totalSummary += Number(productGroup.totalPrice);
}
//#endregion

//#region event handlers
function onRemoveItem(productGroup: ProductGroup) {
  appStore.removeFromCart(productGroup);
  summary.value = "";
  totalSummary = 0;
  appStore.cart.forEach((item: ProductGroup) => computeSummary(item));
}
//#endregion
</script>

<style lang="scss" scoped>
.cart-container {
  max-width: 1200px;
}
</style>
