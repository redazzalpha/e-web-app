<template>
  <VNavigationDrawer
    :model-value="props.drawer"
    :location="$vuetify.display.xs ? 'right' : 'left'"
    temporary
    @update:modelValue="emit('clickOutside')"
    :color="appStore.colors.drawer"
  >
    <DrawerList :items="drawerListItem" />
  </VNavigationDrawer>
</template>

<script lang="ts" setup>
import DrawerList from "@/components/DrawerList.vue";
import { drawerListItem } from "@/utils/drawerlist";
import { useAppStore } from "@/store/app";

const appStore = useAppStore();

//#region props
interface Props {
  drawer: boolean;
}
const props = defineProps<Props>();
//#endregion

//#region emits
interface Emits {
  (event: "clickOutside"): void;
}
const emit = defineEmits<Emits>();
//#endregion
</script>
