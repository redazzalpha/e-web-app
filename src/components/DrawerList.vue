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
        >
        </VSwitch>
      </template>
    </VListItem>

    <VListItem class="my-5" title="Navigation" to="" rounded="xl">
      <template v-slot:prepend>
        <span
          class="mr-10"
          :style="`color: rgba(var(--v-theme-color-white-const), ${backgroundOpacity})`"
          v-html="rawSvgHand"
        ></span>
      </template>

      <template v-slot:append>
        <VSwitch
          class="mx-5"
          v-model="appStore.navigationSide"
          color="color-orange"
          style="height: 56px"
          :label="appStore.navigationSide ? 'Right' : 'Left'"
        >
        </VSwitch>
      </template>
    </VListItem>
  </VList>
</template>

<script lang="ts" setup>
import vuetify from "@/plugins/vuetify";
import { useAppStore } from "@/store/app";
import type { DrawerListItem } from "@/utils/types";
import { computed, ref, watchEffect } from "vue";
import { useTheme } from "vuetify/lib/framework.mjs";

const appStore = useAppStore();
const theme = useTheme();

const rawSvgHand =
  '<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20"><path fill="currentColor" d="M17.924 17.315c-.057.174-.193.367-.416.432c-.161.047-5.488 1.59-5.652 1.633c-.469.125-.795.033-1.009-.156c-.326-.287-4.093-2.85-8.845-3.092c-.508-.025-.259-1.951 1.193-1.951c.995 0 3.904.723 4.255.371c.271-.272.394-1.879-.737-4.683L4.438 4.232a1.045 1.045 0 0 1 1.937-.781L8.361 8.37c.193.48.431.662.69.562c.231-.088.279-.242.139-.709L7.144 2.195A1.043 1.043 0 0 1 7.796.871a1.042 1.042 0 0 1 1.325.652l1.946 5.732c.172.504.354.768.642.646c.173-.073.161-.338.115-.569l-1.366-5.471a1.045 1.045 0 1 1 2.027-.506l1.26 5.042c.184.741.353 1.008.646.935c.299-.073.285-.319.244-.522l-.872-4.328a.95.95 0 0 1 1.86-.375l.948 4.711l.001.001v.001l.568 2.825c.124.533.266 1.035.45 1.527c1.085 2.889.519 5.564.334 6.143z"/></svg>';

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

//#region computed
const backgroundOpacity = computed<number>(() => {
  return vuetify.theme.global.name.value == "dark" ? 0.65 : 0.55;
});
//#endregion

//#region watchers
watchEffect(async () => {
  if (appStore.switcher) theme.global.name.value = "dark";
  else theme.global.name.value = "light";
});
//#endregion
</script>

<style lang="scss" scoped>
.active-item {
  color: rgb(var(--v-theme-color-orange));
}
</style>
