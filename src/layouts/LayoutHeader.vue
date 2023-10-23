<template>
  <HeaderBar
    :text-logo="textHeaderLogo"
    :font-logo="fontHeaderLogo"
    :size-logo="sizeHeaderLogo"
    color-logo="color-black"
    color-background="color-transparent"
    :link-source="linkHeaderSrc"
  />
</template>

<script lang="ts" setup>
import HeaderBar from "@/components/HeaderBar.vue";
import * as sources from "@/utils/sources";

//#region variables
const textHeaderLogo = "EatZone (EZ)";
const fontHeaderLogo = "merienda, serif, sans-serif";
const sizeHeaderLogo = 32;
const linkHeaderSrc: string = sources.home;
//#endregion
</script>
