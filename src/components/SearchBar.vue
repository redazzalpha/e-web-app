<template>
  <VTextField
    class="search-bar"
    variant="solo"
    v-model="input"
    :label="props.labelText"
    :color="props.labelTextColor"
    rounded
    hide-details
    clearable
  >
    <!-- search button -->
    <template v-slot:append-inner>
      <VBtn
        class="search-bar_btn"
        tag="button"
        variant="plain"
        :icon="props.icon"
      />
    </template>
  </VTextField>
</template>

<script lang="ts" setup>
import { ref } from "vue";

// variables
const input = ref<string>("");

// props
interface Props {
  labelText: string;
  labelTextColor: string;
  bgColor: string;
  icon: string;
  size: number;
}
const props = defineProps<Props>();
</script>

<style lang="scss" scoped>
.search-bar {
  flex-grow: 0;
  width: v-bind("`${props.size}px`");

  &:deep(.v-field) {
    background-color: v-bind("props.bgColor");
  }
}
</style>
