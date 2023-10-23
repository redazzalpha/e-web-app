<template>
  <TheDescriptionCard :action="appStore.addToCartHandler" />
</template>

<script lang="ts" setup>
import TheDescriptionCard from "@/components/TheDescriptionCard.vue";
import { useAppStore } from "@/store/app";

const appStore = useAppStore();
</script>
