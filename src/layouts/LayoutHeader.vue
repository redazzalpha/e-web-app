<template>
  <HeaderBar
    :text-logo="textHeaderLogo"
    :color-logo="colors.textAppBar"
    :font-logo="fontHeaderLogo"
    :size-logo="sizeHeaderLogo"
    :color-background="colors.appBar"
    :link-source="linkHeaderSrc"
  />
</template>

<script lang="ts" setup>
import HeaderBar from "@/components/HeaderBar.vue";
import { colors } from "@/utils/colors";
import * as sources from "@/utils/sources";

//#region variables
const textHeaderLogo = "EatZone (a.k.a EZ)";
const fontHeaderLogo = "merienda, serif, sans-serif";
const sizeHeaderLogo = 32;
const linkHeaderSrc: string = sources.home;
//#endregion
</script>
