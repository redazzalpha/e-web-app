<template>
  <VSheet
    class="hero-banner"
    tag="article"
    :class="classObject"
    :style="styleObject"
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
import { reactive } from "vue";

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

// objects
const classObject = reactive({
  "d-flex": true,
  "flex-column": true,
  "justify-center": true,
  "align-center": true,
});
const styleObject = reactive({
  height: "500px",
  background: `url("${props.img}") no-repeat center`,
  backgroundSize: "cover",
  width: "100%",
});
</script>

<style lang="scss" scoped>
.hero-banner {
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
