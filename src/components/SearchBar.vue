<template>
  <VTextField
    class="search-bar"
    variant="solo"
    v-model="input"
    :label="props.label"
    :color="props.colorLabel"
    rounded
    hide-details
    clearable
  >
    <!-- search button -->
    <template v-slot:append-inner>
      <VBtn
        v-if="props.prependIcon"
        class="search-bar_btn"
        tag="button"
        variant="plain"
        :icon="props.prependIcon"
      />
    </template>
  </VTextField>
</template>

<script lang="ts" setup>
import { ref } from "vue";

//#region variables
const input = ref<string>("");
//#endregion

//#region props
interface Props {
  label: string;
  colorLabel: string;
  colorBackground: string;
  prependIcon: string;
  size: number;
}
const props = withDefaults(defineProps<Props>(), {
  label: "Search here",
  colorLabel: "black",
  colorBackground: "orange",
  prependIcon: "",
  size: 300,
});
//#endregion
</script>

<style lang="scss" scoped>
.search-bar {
  flex-grow: 0;
  width: v-bind("`${props.size}px`");

  &:deep(.v-field) {
    background-color: v-bind("props.colorBackground");
  }
  &:deep(.v-label) {
    color: v-bind("props.colorLabel");
  }
}
</style>
