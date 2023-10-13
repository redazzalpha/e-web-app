<template>
  <VList>
    <template v-for="item in props.items" :key="item.label">
      <VListItem
        class="my-5"
        :title="item.label"
        :prepend-icon="item.icon"
        :to="item.href"
        rounded="xl"
        active-class="active"
      />
      <!-- <VDivider /> -->
    </template>
  </VList>
</template>

<script lang="ts" setup>
import { DrawerListItem } from "@/utils/types";

//#region props
interface Props {
  items: Array<DrawerListItem>;
  activeColor?: string;
}
const props = withDefaults(defineProps<Props>(), {
  activeColor: "#ffb300",
});
//#endregion
</script>

<style lang="scss" scoped>
.active {
  color: v-bind("props.activeColor");
}
</style>
