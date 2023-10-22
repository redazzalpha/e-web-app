<template>
  <LayoutHeader @on-nav-icon-click="appStore.drawer = !appStore.drawer" />
  <LayoutBody />
  <LayoutFooter />
  <LayoutDrawer />
</template>

<script lang="ts" setup>
import LayoutBody from "@/layouts/LayoutBody.vue";
import LayoutDrawer from "@/layouts/LayoutDrawer.vue";
import LayoutFooter from "@/layouts/LayoutFooter.vue";
import LayoutHeader from "@/layouts/LayoutHeader.vue";
import { useAppStore } from "@/store/app";

const appStore = useAppStore();
</script>
