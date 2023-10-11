<template>
  <VApp>
    <RouterView />
  </VApp>
</template>

<script lang="ts" setup>
import { colors } from "@/utils/colors";
</script>

<style lang="scss">
@import "@/styles/fonts";

* {
  box-sizing: border-box !important;
}
body {
  overflow-x: hidden;
}
</style>
