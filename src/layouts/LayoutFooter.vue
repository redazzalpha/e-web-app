<template>
  <FooterBar
    :color-background="appStore.colors.footer"
    :color-button="appStore.colors.buttonLink"
    :links="icons"
  />
</template>

<script lang="ts" setup>
import FooterBar from "@/components/FooterBar.vue";
import { useAppStore } from "@/store/app";

const appStore = useAppStore();

//#region arrays
const icons = ["mdi-facebook", "mdi-twitter", "mdi-linkedin", "mdi-instagram"];
//#endregion
</script>
