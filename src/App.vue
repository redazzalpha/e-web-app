<template>
  <VApp>
    <RouterView />
  </VApp>
</template>

<script lang="ts" setup></script>

<style lang="scss">
@import "@/styles/fonts";

* {
  box-sizing: border-box !important;
}
body {
  overflow-x: hidden;
}
p {
  font-family: SF Pro Display, SF Pro Icons, AOS Icons, Helvetica Neue,
    Helvetica, Arial, sans-serif;
}
</style>
