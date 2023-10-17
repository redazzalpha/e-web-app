<template>
  <VApp>
    <RouterView />
    <ScrollTopButton
      color="red"
      background="radial-gradient(black, #0c87e8 85% )"
      style="z-index: 2"
    />
  </VApp>
</template>

<script lang="ts" setup>
import ScrollTopButton from "@/components/ScrollTopButton.vue";
</script>

<style lang="scss">
@import "@/styles/fonts";
@import "@/styles/variables";
* {
  box-sizing: border-box !important;
}
body {
  overflow-x: hidden;
  h1,
  h2.text-h5 {
    /* font-family: $font-family-logo !important; */
    font-family: SF Pro Display, SF Pro Icons, AOS Icons, Helvetica Neue,
      Helvetica, Arial, sans-serif !important;

    font-weight: bold;
    text-align: center;
    margin: 100px 40px 40px 40px !important;
  }
  a {
    text-decoration: none;
  }

  p {
    font-family: SF Pro Display, SF Pro Icons, AOS Icons, Helvetica Neue,
      Helvetica, Arial, sans-serif !important;
  }
}
</style>
