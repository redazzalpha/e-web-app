<template>
  <Appbar
    logo-text="EatZone (a.k.a. EZ)"
    logo-font="merienda, serif, sans-serif"
    :logo-size="32"
    :logo-color="colors.textAppBar"
    :bg-color="colors.bgAppBar"
    link-src="/"
  />
</template>

<script lang="ts" setup>
import Appbar from "@/components/AppBar.vue";
import { colors } from "@/utils/colors";
</script>
