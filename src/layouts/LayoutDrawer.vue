<template>
  <!-- TODO: CHECK USE OF MODEL-VALUE HERE CAUSE MAYBE NOT PROPER -->
  <VNavigationDrawer
    :model-value="props.drawer"
    :location="$vuetify.display.xs ? 'right' : 'left'"
    temporary
    @update:modelValue="emit('clickOutside')"
    :color="appStore.colors.drawer"
    width="300"
  >
    <DrawerList :items="drawerListItem" />
  </VNavigationDrawer>
</template>

<script lang="ts" setup>
import DrawerList from "@/components/DrawerList.vue";
import { useAppStore } from "@/store/app";
import { drawerListItem } from "@/utils/drawerlist";

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
