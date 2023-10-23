<template>
  <VCard
    class="cart-summary text-color-black text-center mx-auto"
    elevation="10"
    :style="`background-color: rgba(var(--v-theme-color-orange-const), ${backgroundOpacity})`"
    :width="$vuetify.display.mobile ? '100%' : '50%'"
  >
    <VCardTitle tag="p">Résumé de ma commande</VCardTitle>

    <VCardText tag="p" class="text-left">
      <span class="d-flex flex-column" v-html="props.summary"></span>
      <VDivider />
      <span class="d-flex">
        <span class="flex-grow-1"> <strong>Total</strong>: </span>
        <span>
          <strong class="text-color-error-const"
            >{{ props.totalSummary }}€</strong
          >
        </span>
      </span>
    </VCardText>
    <VCardActions>
      <VSpacer />
      <VBtn @click="appStore.clearCart" color="color-error-const"
        >Vider mon panier</VBtn
      >
      <VBtn color="color-success-const">Commander</VBtn>
    </VCardActions>
  </VCard>
</template>

<script lang="ts" setup>
import vuetify from "@/plugins/vuetify";
import { useAppStore } from "@/store/app";
import { computed } from "vue";

const appStore = useAppStore();

//#region props
interface Props {
  summary: string;
  totalSummary: string;
}
const props = defineProps<Props>();
//#endregion

//#region computed
const backgroundOpacity = computed<number>(() => {
  return vuetify.theme.global.name.value == "dark" ? 0.2 : 0.35;
});
//#endregion
</script>

<style lang="scss" scoped>
.cart-container {
  max-width: 1200px;
}
.cart-summary {
  border: solid red 1px;
  border-radius: 10px;
}
</style>
