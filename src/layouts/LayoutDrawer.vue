<template>
  <VNavigationDrawer
    :model-value="props.drawer"
    :location="$vuetify.display.xs ? 'right' : 'left'"
    temporary
    @update:modelValue="emit('clickOutside')"
    :color="colors.drawer"
  >
    <DrawerList :items="drawerListItem" />
  </VNavigationDrawer>
</template>

<script lang="ts" setup>
import DrawerList from "@/components/DrawerList.vue";
import { colors } from "@/utils/colors";
import { drawerListItem } from "@/utils/drawerlist";

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
