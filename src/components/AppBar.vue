<template>
  <!-- app bar -->
  <VAppBar
    class="app-bar"
    scroll-behavior="fade-image inverted"
    :scroll-threshold="threshold"
    :image="AppBarImg"
    elevation="0"
  >
    <!-- title -->
    <v-app-bar-title class="app-bar_logo">
      <RouterLink class="text-decoration-none" :to="props.linkSrc">
        {{ props.logoText }}
      </RouterLink>
    </v-app-bar-title>

    <!-- drawer icon -->
    <VAppBarNavIcon class="app-bar_drawer-icon" @click="drawer = !drawer" />
  </VAppBar>

  <!-- navigation drawer -->
  <VNavigationDrawer v-model="drawer" location="bottom" temporary>
    <DrawerMenu :items="drawerMenuItems" />
  </VNavigationDrawer>
</template>

<script lang="ts" setup>
import { ref, onMounted } from "vue";
import { RouterLink } from "vue-router";
import DrawerMenu from "@/components/DrawerMenu.vue";
import { colors, white, black } from "@/utils/colors";
import AppBarImg from "@/assets/app-bar.png";

// variables
const drawer = ref<boolean>(false);
const threshold = 80;

// props
interface Props {
  logoText: string;
  logoTextColor?: string;
  logoFont?: string;
  logoSize?: number;
  bgColor?: string;
  linkSrc?: string;
}
const props = withDefaults(defineProps<Props>(), {
  logoTextColor: "black",
  logoFont: "serif, sans-serif",
  logoSize: 24,
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

// handlers
async function onScroll(): Promise<void> {
  if (window.scrollY >= threshold) {
    colors.textAppBar = white;
  } else colors.textAppBar = black;
}

// hooks
onMounted(() => {
  window.onscroll = onScroll;
});
</script>

<style lang="scss" scoped>
@mixin app-bar-transion {
  color: v-bind("props.logoTextColor");
  transition: color 2s linear;
}
.app-bar {
  background-color: v-bind("props.bgColor") !important;
  &_logo {
    font-family: v-bind("props.logoFont");
    font-size: v-bind("`${props.logoSize}px`");
    font-style: "italic";
    & a {
      @include app-bar-transion;
    }
  }
  &_drawer-icon {
    @include app-bar-transion;
  }
}
</style>
