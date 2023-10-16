<template>
  <h2 class="text-h5 text-lg-h4">Mon panier</h2>
  <template v-if="appStore.cart.length > 0">
    <VContainer grid-list-xs class="cart-container">
      <VRow>
        <VCol
          v-for="product in appStore.cart"
          :key="product.id"
          class="d-flex align-center v-col-12 v-col-md-6"
        >
          <CartCard class="flex-grow-1" :product="product" />
        </VCol>
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

import { useAppStore } from "../store/app";

const appStore = useAppStore();
</script>

<style lang="scss" scoped>
.cart-container {
  max-width: 1200px;
}
</style>
