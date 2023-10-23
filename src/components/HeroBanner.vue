<template>
  <VSheet
    class="hero-banner d-flex flex-column justify-center align-center"
    :height="props.height"
  >
    <VImg class="hero-banner_background" :src="props.imageBackground" cover>
      <!-- loader image -->
      <template v-slot:placeholder>
        <div class="d-flex align-center justify-center fill-height">
          <v-progress-circular
            color="grey-lighten-4"
            indeterminate
          ></v-progress-circular>
        </div>
      </template>
    </VImg>

    <!-- title -->
    <div
      class="hero-banner_title text-center"
      :class="`text-${props.colorTitle} bg-${props.colorBackgroundTitle}`"
      v-if="!hideTitleOnXs"
    >
      {{ props.textTitle }}
    </div>

    <!-- center -->
    <div class="hero-banner_center">
      <slot name="center"></slot>
    </div>

    <!-- link container -->
    <div class="d-flex justify-center w-100" style="z-index: 1">
      <!-- before link -->
      <slot name="before-link"></slot>
      <!-- link -->
      <RouterLink
        class="hero-banner_link mx-2"
        :class="`text-${props.colorLink}`"
        :to="props.sourceLink"
        >{{ props.textLink }}</RouterLink
      >
      <!-- after link-->
      <slot name="after-link"></slot>
    </div>
  </VSheet>
</template>

<script lang="ts" setup>
//#region props
interface Props {
  imageBackground: string;
  textTitle?: string;
  textLink?: string;
  colorTitle?: string;
  colorBackgroundTitle?: string;
  colorLink?: string;
  fontTitle?: string;
  sizeTitle?: number;
  sourceLink?: string;
  hideTitleOnXs?: boolean;
  positionTitle?: string;
  topTitle?: number;
  leftTitle?: number;
  height?: number;
}
const props = withDefaults(defineProps<Props>(), {
  textTitle: "",
  textLink: "",
  colorTitle: "color-white",
  colorBackgroundTitle: "color-black",
  colorLink: "color-blue",
  fontTitle: "serif, sans-serif",
  sizeTitle: 32,
  sourceLink: "",
  hideTitleOnXs: false,
  positionTitle: "none",
  topTitle: 0,
  leftTitle: 0,
  height: 500,
});
//#endregion
</script>

<style lang="scss" scoped>
.hero-banner {
  position: relative;
  &_background {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }
  &_title {
    position: v-bind("props.positionTitle");
    top: v-bind("`${props.topTitle}px`");
    left: v-bind("`${props.leftTitle}px`");
    font-family: v-bind("props.fontTitle");
    font-size: v-bind("`${props.sizeTitle}px`");
    border-radius: 15px;
    max-width: 600px;
    z-index: 1;
  }
}
</style>
