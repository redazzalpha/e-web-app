<template>
  <LayoutTop @on-nav-icon-click="toogleDrawer" />
  <LayoutCenter />
  <LayoutBottom />
  <LayoutDrawer :drawer="drawer" @click-outside="toogleDrawer" />
  <ScrollTopButton
    color="red"
    background="radial-gradient(black, #0c87e8 85% )"
  />
</template>

<script lang="ts" setup>
import LayoutTop from "@/layouts/LayoutTop.vue";
import LayoutCenter from "@/layouts/LayoutCenter.vue";
import LayoutBottom from "@/layouts/LayoutBottom.vue";
import LayoutDrawer from "@/layouts/LayoutDrawer.vue";
import ScrollTopButton from "@/components/ScrollTopButton.vue";
import { ref } from "vue";

//#region refs
let drawer = ref<boolean>(false);
//#endregion

//#region event handlers
function toogleDrawer() {
  drawer.value = !drawer.value;
}
//#endregion
</script>

<style lang="scss">
@import "@/styles/fonts";
@import "@/styles/variables";
</style>
