<template>
  <VSheet
    class="hero-banner d-flex flex-column justify-center align-center"
    tag="article"
  >
    <!-- title -->
    <div class="hero-banner_title text-center">
      {{ props.titleText }}
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
        :to="props.linkSrc"
        >{{ props.linkText }}</RouterLink
      >
      <slot name="after-link"></slot>
    </div>
  </VSheet>
</template>

<script lang="ts" setup>
// props
interface Props {
  img: string;
  titleText?: string;
  titleFont?: string;
  titleSize?: number;
  titleColor?: string;
  titleBgColor?: string;
  linkText?: string;
  linkTextColor?: string;
  linkSrc?: string;
}
const props = withDefaults(defineProps<Props>(), {
  titleText: "",
  titleFont: "serif, sans-serif",
  titleSize: 32,
  titleBgColor: "white",
  titleBg: "black",
  linkText: "",
  linkTextColor: "",
  linkSrc: "",
});

/**
 * this variable is used to rely binding between props.img and backgroud css
 * property. the css background property's not working like it should with the props binding.
 */
const bgHero = `url("${props.img}") no-repeat center`;
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
    font-family: v-bind("props.titleFont");
    font-size: v-bind("`${props.titleSize}px`");
    color: v-bind("props.titleColor");
    background-color: v-bind("props.titleBgColor");
  }
  &_link {
    color: v-bind("props.linkTextColor");
  }
}
</style>
