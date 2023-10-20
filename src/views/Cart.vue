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
          <CartCard
            @vue:mounted="writeSummary(productGroup)"
            class="flex-grow-1 mx-md-3"
            :product-group="productGroup"
            @on-remove="onRemoveItem(productGroup)"
          />
        </VCol>
      </VRow>
      <VRow>
        <VCard
          class="cart-summary w-100 text-center"
          elevation="10"
          style="background-color: rgba(255, 166, 0, 0.392)"
        >
          <VCardTitle tag="p">Résumé de ma commande</VCardTitle>

          <VCardText tag="p" class="text-left">
            <span class="d-flex flex-column" v-html="summary"></span>
            <VDivider />
            <span class="d-flex">
              <span class="flex-grow-1"> <strong>Total</strong>: </span>
              <span>
                <strong class="text-error">{{ totalPriceStr }}€</strong>
              </span>
            </span>
          </VCardText>
          <VCardActions>
            <VSpacer />
            <VBtn @click="appStore.clearCart" color="error"
              >Vider mon panier</VBtn
            >
            <VBtn color="success">Commander</VBtn>
          </VCardActions>
        </VCard>
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
import CartCard from "@/components/CartCard.vue";
import { useAppStore } from "@/store/app";
import type { ProductGroup } from "@/utils/types";
import { ref } from "vue";
import { VCardTitle } from "vuetify/lib/components/index.mjs";

const appStore = useAppStore();

//#region variables
const summary = ref<string>("");
const totalPrice = ref<number>(0);
const totalPriceStr = ref<string>("");
//#endregion

//#region methods
function writeSummary({ label, quantity, totalPrice: price }: ProductGroup) {
  const quantityStr = quantity > 1 ? `&times; ${quantity}` : ``;
  summary.value += `<span class="d-flex">
    <span class="flex-grow-1">
      - ${label} ${quantityStr}
    </span>
    <span>
      <strong>${price}&euro;</strong>
      </span>
  </span>`;
  totalPrice.value += price;
  totalPriceStr.value = totalPrice.value.toFixed(2);
  const index = totalPriceStr.value.indexOf(".");
  const numOfDigits = totalPriceStr.value.length - index;
  if (numOfDigits == 1) totalPriceStr.value += "0";
}
//#endregion

//#region event handlers
function onRemoveItem(productGroup: ProductGroup) {
  appStore.removeFromCart(productGroup);
  summary.value = "";
  totalPrice.value = 0;
  appStore.cart.forEach((item: ProductGroup) => {
    writeSummary(item);
  });
}
//#endregion
</script>

<style lang="scss" scoped>
.cart-container {
  max-width: 1200px;
}
.cart-summary {
  border: solid red 1px;
  border-radius: 10px;
}
</style>
