<template>
  <VNavigationDrawer
    :model-value="props.drawer"
    :location="$vuetify.display.xs ? 'right' : 'left'"
    temporary
    @update:modelValue="emit('clickOutside')"
    :color="colors.drawer"
  >
    <DrawerList :items="drawerMenuItems" />
  </VNavigationDrawer>
</template>

<script lang="ts" setup>
import DrawerList from "@/components/DrawerList.vue";
import { colors } from "@/utils/colors";
//#region props
interface Props {
  drawer: boolean;
}
const props = defineProps<Props>();
//#endregion

//#region arrays
const drawerMenuItems = [
  {
    title: "Accueil",
    value: "zjig",
  },
  {
    title: "Les plus populaires",
    value: "bar",
  },
  {
    title: "Les entrées",
    value: "fizz",
  },
  {
    title: "Les plats",
    value: "buzz",
  },
  {
    title: "Les desserts",
    value: "zoom",
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
