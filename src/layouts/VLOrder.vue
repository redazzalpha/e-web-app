<template>
  <!-- TODO: TRY TO USE COMPONENT V-MODEL BETWEEN => layoutHeader. - layoutDrawer.vue - headerBar.vue  -->
  <LayoutHeader @on-nav-icon-click="toogleDrawer" />
  <LayoutBody />
  <LayoutFooter />
  <LayoutDrawer :drawer="drawer" @click-outside="toogleDrawer" />
</template>

<script lang="ts" setup>
import LayoutBody from "@/layouts/LayoutBody.vue";
import LayoutDrawer from "@/layouts/LayoutDrawer.vue";
import LayoutFooter from "@/layouts/LayoutFooter.vue";
import LayoutHeader from "@/layouts/LayoutHeader.vue";
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
