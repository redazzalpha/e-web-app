<template>
  <TheDrawer
    :drawer="props.drawer"
    @update:drawer="emit('update:drawer', $event)"
  />
</template>

<script lang="ts" setup>
import TheDrawer from "@/components/TheDrawer.vue";

// #region props
interface Props {
  drawer: boolean;
}
const props = defineProps<Props>();
// #endregion

// #region emits
interface Emits {
  (event: "update:drawer", value: boolean): void;
}
const emit = defineEmits<Emits>();
// #endregion
</script>
