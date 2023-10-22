<template>
  <LayoutHeader @on-nav-icon-click="drawer = !drawer" />
  <LayoutBody />
  <LayoutFooter />
  <LayoutDrawer v-model:drawer="drawer" />
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
</script>
