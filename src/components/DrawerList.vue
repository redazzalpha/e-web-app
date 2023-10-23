<template>
  <VList>
    <template v-for="item in props.items" :key="item.label">
      <template v-if="!item.children.length">
        <VListItem
          class="my-5"
          :title="item.label"
          :prepend-icon="item.icon"
          :to="item.href"
          rounded="xl"
          active-class="active-item"
        >
          <template v-slot:append v-if="item.label == 'Mon panier'">
            <VBadge
              v-show="props.valueBadge"
              :dot="isDot"
              :content="props.valueBadge"
              color="red"
              :max="20"
              inline
            />
          </template>
        </VListItem>
      </template>
      <template v-else>
        <VListGroup :value="item.label">
          <template v-slot:activator="{ props }">
            <VListItem
              v-bind="props"
              class="my-5"
              :title="item.label"
              :prepend-icon="item.icon"
              rounded="xl"
              active-class="active-item"
            />
          </template>
          <template v-for="(child, index) in item.children" :key="index">
            <VListItem
              :title="child.label"
              :prepend-icon="child.icon"
              :to="child.href"
              rounded="xl"
              active-class="active-item"
            />
          </template>
        </VListGroup>
      </template>
      <!-- <VDivider /> -->
    </template>
  </VList>
</template>

<script lang="ts" setup>
import type { DrawerListItem } from "@/utils/types";
import { ref } from "vue";

//#region variables
const isDot = ref<boolean>(false);
//#endregion

//#region props
interface Props {
  items: Array<DrawerListItem>;
  activeColor?: string;
  valueBadge?: number;
}
const props = withDefaults(defineProps<Props>(), {
  activeColor: "#ffb300",
  valueBadge: 0,
});
//#endregion
</script>

<style lang="scss" scoped>
.active-item {
  color: v-bind("props.activeColor");
}
</style>
