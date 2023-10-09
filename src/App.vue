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
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}
body {
  overflow-x: hidden;
}
p {
  color: v-bind("colors.textBase");
}
</style>
