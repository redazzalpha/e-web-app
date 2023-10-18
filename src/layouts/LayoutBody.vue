<template>
  <v-main class="pt-0">
    <article>
      <RouterView />
    </article>
  </v-main>
  <DialogSlider
    v-model="appStore.valueSlider"
    :model-value-dialog="appStore.dialogSlider"
    title="Selectionnez la quantité:"
    text="Bigger mac"
    :max="20"
  />
</template>
<script lang="ts" setup>
import DialogSlider from "@/components/DialogSlider.vue";
import { useAppStore } from "@/store/app";

const appStore = useAppStore();
</script>
