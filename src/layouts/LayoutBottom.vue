<template>
  <FooterBar
    :color-background="colors.footer"
    :color-button="colors.buttonLink"
  />
</template>

<script lang="ts" setup>
import FooterBar from "@/components/FooterBar.vue";
import { colors } from "@/utils/colors";
</script>
