<template>
  <FooterBar
    :color-background="appStore.colors.footer"
    :color-button="appStore.colors.buttonLink"
  />
</template>

<script lang="ts" setup>
import FooterBar from "@/components/FooterBar.vue";
import { useAppStore } from "@/store/app";

const appStore = useAppStore();
</script>
