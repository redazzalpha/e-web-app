<template>
  <LayoutHeader @on-nav-icon-click="toogleDrawer" />
  <LayoutBody />
  <LayoutFooter />
  <LayoutDrawer :drawer="drawer" @click-outside="toogleDrawer" />
</template>

<script lang="ts" setup>
import LayoutHeader from "@/layouts/LayoutHeader.vue";
import LayoutBody from "@/layouts/LayoutBody.vue";
import LayoutFooter from "@/layouts/LayoutFooter.vue";
import LayoutDrawer from "@/layouts/LayoutDrawer.vue";
import { ref } from "vue";

//#region refs
let drawer = ref<boolean>(false);
//#endregion

//#region event handlers
function toogleDrawer(): void {
  drawer.value = !drawer.value;
}
//#endregion
</script>
