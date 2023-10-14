<template>
  <VSheet
    class="hero-banner d-flex flex-column justify-center align-center"
    :height="props.height"
  >
    <VImg class="hero-banner_background" :src="imageBackground" cover>
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
    <div class="hero-banner_title text-center" v-if="!hideTitleOnXs">
      {{ textTitle }}
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
      <RouterLink class="hero-banner_link mx-2" :to="props.sourceLink">{{
        props.textLink
      }}</RouterLink>
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
  colorTitle: "white",
  colorBackgroundTitle: "black",
  colorLink: "",
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

//#region special variables
/**
 * this variable is used to rely binding between props.imageBackground and backgroud css
 * property. the css background property's not working like it should with the props binding.
 */
const bgHero = `url("${props.imageBackground}") no-repeat center`;
//#endregion
</script>

<style lang="scss" scoped>
.hero-banner {
  position: relative;
  &_background {
    position: absolute;
    top: 0;
    left: 0;
    background: v-bind(bgHero);
    background-size: cover;
    width: 100%;
    height: 100%;
  }
  &_title {
    position: v-bind("props.positionTitle");
    top: v-bind("`${props.topTitle}px`");
    left: v-bind("`${props.leftTitle}px`");
    font-family: v-bind("props.fontTitle");
    font-size: v-bind("`${props.sizeTitle}px`");
    color: v-bind("props.colorTitle");
    background-color: v-bind("props.colorBackgroundTitle");
    border-radius: 15px;
    max-width: 600px;
    z-index: 1;
  }
  &_link {
    color: v-bind("props.colorLink");
  }
}
</style>
