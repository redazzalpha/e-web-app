<template>
  <VNavigationDrawer
    :model-value="props.drawer"
    location="bottom"
    temporary
    @update:modelValue="emit('clickOutside')"
  >
    <DrawerList :items="drawerMenuItems" />
  </VNavigationDrawer>
</template>

<script lang="ts" setup>
import DrawerList from "@/components/DrawerList.vue";
//#region props
interface Props {
  drawer: boolean;
}
const props = defineProps<Props>();
//#endregion

//#region arrays
const drawerMenuItems = [
  {
    title: "salut",
    value: "zjig",
  },
  {
    title: "Bar",
    value: "bar",
  },
  {
    title: "Fizz",
    value: "fizz",
  },
  {
    title: "Buzz",
    value: "buzz",
  },
];
//#endregion

//#region emits
interface Emits {
  (event: "clickOutside"): void;
}
const emit = defineEmits<Emits>();
//#endregion
</script>
