<template>
  <VApp>
    <RouterView />
  </VApp>
</template>

<script lang="ts" setup></script>

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
    font-family: $font-family-logo !important;
    font-weight: bold;
    text-align: center;
    margin: 40px;
  }

  p {
    font-family: SF Pro Display, SF Pro Icons, AOS Icons, Helvetica Neue,
      Helvetica, Arial, sans-serif !important;
  }
}
</style>
