<template>
  <!-- app bar -->
  <VAppBar
    class="app-bar"
    scroll-behavior="fade-image inverted"
    :scroll-threshold="threshold"
    :image="AppBarImg"
    elevation="0"
  >
    <!-- logo -->
    <v-app-bar-title class="app-bar_logo order-0 order-sm-1">
      <RouterLink :to="props.linkSource">
        <!-- <RouterLink :to="props.linkSource"> -->
        {{ props.textLogo }}
      </RouterLink>
      <VBtn
        class="app-bar_logo_cart text-body-1 ml-2 rounded-sm"
        :to="sources.cart"
        size="small"
        :ripple="false"
        variant="plain"
      >
        <VIcon class="text-h5">mdi-cart</VIcon>
        <VBadge
          v-show="appStore.cart.length"
          :dot="isDot"
          :content="appStore.cart.length"
          color="red"
          :max="20"
          :offset-y="-15"
          :offset-x="-10"
        />
      </VBtn>
    </v-app-bar-title>

    <!-- drawer icon -->
    <VAppBarNavIcon
      class="app-bar_drawer-icon"
      @click="emit('onNavIconClick')"
      :ripple="false"
    />
  </VAppBar>
</template>

<script lang="ts" setup>
import { onMounted, ref } from "vue";
import { RouterLink } from "vue-router";
import AppBarImg from "@/assets/app-bar.png";
import { baseColor } from "@/utils/colors";
import * as sources from "@/utils/sources";
import { useAppStore } from "@/store/app";

const appStore = useAppStore();

//#region variables
const threshold = 80;
const isDot = ref<boolean>(false);
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
  if (window.scrollY >= threshold) appStore.colors.textAppBar = baseColor.white;
  else appStore.colors.textAppBar = baseColor.black;
}
//#endregion

//#region hooks
onMounted((): void => {
  window.onscroll = onScroll;
});
//#endregion
</script>

<style lang="scss" scoped>
//#region mixins
@mixin app-bar-transion {
  color: v-bind("props.colorLogo");
  transition: color 1.5s linear;
}
//#endregion

.app-bar {
  background-color: v-bind("props.colorBackground") !important;
  &_logo {
    font-family: v-bind("props.fontLogo");
    font-size: v-bind("`${props.sizeLogo}px`");
    &:deep(.v-toolbar-title__placeholder) {
      overflow: visible;
    }
    & a {
      @include app-bar-transion;
    }
    &_cart {
      color: v-bind("props.colorLogo");
      @include app-bar-transion;
    }
  }
  &_drawer-icon {
    @include app-bar-transion;
  }
}
</style>
