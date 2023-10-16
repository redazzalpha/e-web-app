<template>
  <HeaderBar
    :text-logo="textHeaderLogo"
    :color-logo="appStore.colors.textAppBar"
    :font-logo="fontHeaderLogo"
    :size-logo="sizeHeaderLogo"
    :color-background="appStore.colors.appBar"
    :link-source="linkHeaderSrc"
  />
</template>

<script lang="ts" setup>
import HeaderBar from "@/components/HeaderBar.vue";
import * as sources from "@/utils/sources";
import { useAppStore } from "@/store/app";

const appStore = useAppStore();

//#region variables
const textHeaderLogo = "EatZone (EZ)";
const fontHeaderLogo = "merienda, serif, sans-serif";
const sizeHeaderLogo = 32;
const linkHeaderSrc: string = sources.home;
//#endregion
</script>
