<template>
  <h2 class="text-h5 text-lg-h4">Mon panier</h2>
  <CartCard
    v-for="product in appStore.cart"
    :key="product.id"
    :product="product"
  />
</template>

<script lang="ts" setup>
import CartCard from "@/components/CartCard.vue";

import { useAppStore } from "../store/app";

const appStore = useAppStore();
</script>
