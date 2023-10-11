<template>
  <VSheet
    class="hero-banner d-flex flex-column justify-center align-center"
    tag="article"
  >
    <!-- title -->
    <div class="hero-banner_title text-center">
      {{ textTitle }}
    </div>

    <!-- center -->
    <div class="hero-banner_center">
      <slot name="center"></slot>
    </div>

    <div class="d-flex justify-center w-100">
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
//#region props
interface Props {
  imageBackground: string;
  textTitle?: string;
  textLink?: string;
  colorTitle?: string;
  colorBackgroundTitle?: string;
  colorLink?: string;
  fontTitle?: string;
  sizeTilte?: number;
  sourceLink?: string;
}
const props = withDefaults(defineProps<Props>(), {
  textTitle: "",
  textLink: "",
  colorTitle: "white",
  colorBackgroundTitle: "black",
  colorLink: "",
  fontTitle: "serif, sans-serif",
  sizeTilte: 32,
  sourceLink: "",
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
  background: v-bind(bgHero);
  background-size: cover;
  height: 500px;
  &_title {
    border-radius: 15px;
    padding: 15px;
    margin: 15px;
    max-width: 400px;
    font-family: v-bind("props.fontTitle");
    font-size: v-bind("`${props.sizeTilte}px`");
    color: v-bind("props.colorTitle");
    background-color: v-bind("props.colorBackgroundTitle");
  }
  &_link {
    color: v-bind("props.colorLink");
  }
}
</style>
