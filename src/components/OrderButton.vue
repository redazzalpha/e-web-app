<template>
  <VBtn
    class="order-btn"
    v-if="props.labelButtonOrder"
    size="large"
    elevation="0"
    rounded="xl"
  >
    {{ props.labelButtonOrder }}
    <VIcon class="mx-2">{{ props.iconOrderButton }}</VIcon>
  </VBtn>
</template>

<script lang="ts" setup>
//#region props
interface Props {
  labelButtonOrder?: string;
  colorLabelButtonOrder?: string;
  colorBackgroundButtonOrder?: string;
  iconOrderButton?: string;
  onClick: () => void;
}
const props = withDefaults(defineProps<Props>(), {
  labelButtonOrder: "Ajouter au panier",
  colorLabelButtonOrder: "black",
  colorBackgroundButtonOrder: "transparent",
  iconOrderButton: "mdi-cart-plus",
});
//#endregion
</script>
