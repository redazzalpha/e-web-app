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
      <RouterLink class="text-decoration-none" :to="props.linkSource">
        {{ props.textLogo }}
      </RouterLink>
    </v-app-bar-title>

    <!-- drawer icon -->
    <VAppBarNavIcon
      class="app-bar_drawer-icon"
      @click="emit('onNavIconClick')"
    />
  </VAppBar>
</template>

<script lang="ts" setup>
import { onMounted } from "vue";
import { RouterLink } from "vue-router";
import { colors, white, black } from "@/utils/colors";
import AppBarImg from "@/assets/app-bar.png";

//#region variables
const threshold = 80;
//#endregion

//#region props
interface Props {
  textLogo: string;
  colorLogo?: string;
  colorBackground?: string;
  fontLogo?: string;
  sizeLogo?: number;
  linkSource?: string;
}
const props = withDefaults(defineProps<Props>(), {
  colorLogo: "black",
  colorBackground: "white",
  fontLogo: "serif, sans-serif",
  sizeLogo: 24,
  linkSource: "",
});
//#endregion

//#region emits
interface Emits {
  (event: "onNavIconClick"): void;
}
const emit = defineEmits<Emits>();
//#endregion

//#region event handlers
async function onScroll(): Promise<void> {
  if (window.scrollY >= threshold) {
    colors.textAppBar = white;
  } else colors.textAppBar = black;
}
//#endregion

//#region hooks
onMounted(() => {
  window.onscroll = onScroll;
});
//#endregion
</script>

<style lang="scss" scoped>
//#region mixins
@mixin app-bar-transion {
  color: v-bind("props.colorLogo");
  transition: color 2s linear;
}
//#endregion

.app-bar {
  background-color: v-bind("props.colorBackground") !important;
  &_logo {
    font-family: v-bind("props.fontLogo");
    font-size: v-bind("`${props.sizeLogo}px`");
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
