<template>
  <!-- app bar -->
  <v-app-bar class="app-bar">
    <!-- title -->
    <v-app-bar-title class="app-bar_logo">
      <RouterLink class="text-decoration-none" :to="props.linkSrc">
        {{ props.logoText }}
      </RouterLink>
    </v-app-bar-title>

    <!-- drawer icon -->
    <VAppBarNavIcon class="app-bar_drawer-icon" @click="drawer = !drawer" />
  </v-app-bar>

  <!-- navigation drawer -->
  <VNavigationDrawer v-model="drawer" location="bottom" temporary>
    <DrawerMenu :items="drawerMenuItems" />
  </VNavigationDrawer>
</template>

<script lang="ts" setup>
import { ref } from "vue";
import { RouterLink } from "vue-router";
import DrawerMenu from "@/components/DrawerMenu.vue";

// variables
const drawer = ref<boolean>(false);

// props
interface Props {
  logoText: string;
  logoFont?: string;
  logoSize?: number;
  logoColor?: string;
  bgColor?: string;
  linkSrc?: string;
}
const props = withDefaults(defineProps<Props>(), {
  logoFont: "serif, sans-serif",
  logoSize: 24,
  logoColor: "black",
  bgColor: "white",
  linkSrc: "",
});

// arrays
const drawerMenuItems = [
  {
    title: "salut",
    value: "zjig",
  },
  {
    title: "Bar",
    value: "bar",
  },
  {
    title: "Fizz",
    value: "fizz",
  },
  {
    title: "Buzz",
    value: "buzz",
  },
];
</script>

<style lang="scss" scoped>
.app-bar {
  background-color: v-bind("props.bgColor") !important;
  &_logo {
    font-family: v-bind("props.logoFont");
    font-size: v-bind("`${props.logoSize}px`");
    font-style: "italic";
    & a {
      color: v-bind("props.logoColor");
    }
  }
  &_drawer-icon {
    color: v-bind("props.logoColor");
  }
}
</style>
