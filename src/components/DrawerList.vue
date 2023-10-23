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
              color="color-red"
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
    </template>
    <VListItem
      class="my-5"
      title="Thème"
      prepend-icon="mdi-theme-light-dark"
      to=""
      rounded="xl"
    >
      <template v-slot:append>
        <VSwitch
          class="mx-5"
          v-model="appStore.switcher"
          color="color-orange"
          true-icon="mdi-weather-night"
          false-icon="mdi-weather-sunny"
          style="height: 56px"
          :label="appStore.switcher ? 'Dark' : 'Light'"
          icon="mdi-home"
        >
        </VSwitch>
      </template>
    </VListItem>
  </VList>
</template>

<script lang="ts" setup>
import { useAppStore } from "@/store/app";
import type { DrawerListItem } from "@/utils/types";
import { ref, watchEffect } from "vue";
import { useTheme } from "vuetify/lib/framework.mjs";

const appStore = useAppStore();
const theme = useTheme();

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
  activeColor: "color-orange",
  valueBadge: 0,
});
//#endregion

watchEffect(async () => {
  if (appStore.switcher) theme.global.name.value = "dark";
  else theme.global.name.value = "light";
});
</script>

<style lang="scss" scoped>
.active-item {
  /* MARK: ISSUE ON HOW TO BIND CUSTOM COLOR IN THE CSS  */
  color: v-bind("props.activeColor");
}
</style>
