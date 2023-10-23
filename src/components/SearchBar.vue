<template>
  <VTextField
    class="search-bar"
    variant="solo"
    :label="props.label"
    :color="props.colorLabel"
    rounded
    clearable
    v-model="input"
    @keydown.enter="onSearch(input)"
  >
    <!-- search button -->
    <template v-slot:append-inner>
      <VBtn
        v-if="props.prependIcon"
        class="search-bar_btn"
        tag="button"
        variant="plain"
        :icon="props.prependIcon"
        @click="props.onSearch(input)"
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
  label?: string;
  colorLabel?: string;
  colorBackground?: string;
  prependIcon?: string;
  size?: number;
  onSearch: (input: string) => void;
}
const props = withDefaults(defineProps<Props>(), {
  label: "Search here",
  colorLabel: "color-black",
  colorBackground: "color-orange",
  prependIcon: "",
  size: 300,
});
//#endregion
</script>

<style lang="scss" scoped>
.search-bar {
  flex-grow: 0;
  width: v-bind("`${props.size}px`");

  /* MARK: ISSUE ON HOW TO BIND CUSTOM COLOR IN THE CSS  */
  &:deep(.v-field) {
    background-color: v-bind("props.colorBackground");
  }
  /* MARK: ISSUE ON HOW TO BIND CUSTOM COLOR IN THE CSS  */
  &:deep(.v-label) {
    color: v-bind("props.colorLabel");
  }
}
</style>
