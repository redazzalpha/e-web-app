<template>
  <VNavigationDrawer
    v-model="appStore.drawer"
    :location="$vuetify.display.xs ? 'right' : 'left'"
    temporary
    :color="appStore.colors.drawer"
    width="300"
  >
    <DrawerList :items="drawerListItem" />
  </VNavigationDrawer>
</template>

<script lang="ts" setup>
import DrawerList from "@/components/DrawerList.vue";
import { useAppStore } from "@/store/app";
import { drawerListItem } from "@/utils/drawerlist";

const appStore = useAppStore();
</script>
