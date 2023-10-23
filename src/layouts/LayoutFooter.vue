<template>
  <FooterBar
    color-background="color-black-const"
    color-button="color-orange"
    :links="icons"
  />
</template>

<script lang="ts" setup>
import FooterBar from "@/components/FooterBar.vue";

//#region arrays
const icons = ["mdi-facebook", "mdi-twitter", "mdi-linkedin", "mdi-instagram"];
//#endregion
</script>
