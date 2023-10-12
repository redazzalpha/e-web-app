<template>
  <VSheet
    class="hero-banner d-flex flex-column justify-center align-center"
    tag="article"
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
      <!-- this part of code has been muted cause is not in use for now -->
      <!-- image sources -->
      <!-- <template v-slot:sources>
        <source :srcset="HeroImgSmall" media="(max-width:425px)" />
      </template> -->
    </VImg>

    <!-- title -->
    <div class="hero-banner_title text-center" v-if="!hideTitleOnXs">
      {{ textTitle }}
    </div>

    <!-- center -->
    <div class="hero-banner_center">
      <slot name="center"></slot>
    </div>

    <div class="d-flex justify-center w-100" style="z-index: 1">
      <slot name="before-link"></slot>
      <!-- link -->
      <RouterLink
        class="hero-banner_link text-decoration-none mx-2"
        :to="props.sourceLink"
        >{{ props.textLink }}</RouterLink
      >
      <slot name="after-link"></slot>
    </div>
  </VSheet>
</template>

<script lang="ts" setup>
// import HeroImgSmall from "@/assets/food.png";
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
  position?: string;
  top?: number;
  left?: number;
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
  position: "none",
  top: 0,
  left: 0,
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
    height: 500px;
  }
  &_title {
    position: v-bind("props.position");
    top: v-bind("`${props.top}px`");
    left: v-bind("`${props.left}px`");
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
