<template>
  <div class="viewer-block" ref="viewer">
    <ProductCard
      v-for="product in props.products"
      :key="product.id"
      :id="product.id"
      :image-source="product.img"
      :description="product.description"
      :price="`${product.price}&euro;`"
      :score="product.score"
      :is-new="product.isNew"
      :label-button-tag="labelButtonTag"
      :label-button-order="labelButtonOrder"
      :text-caption="product.label"
      :color-label-button-tag="appStore.colors.labelButtonTag"
      :color-label-button-order="appStore.colors.labelButtonOrder"
      :color-background-button-tag="appStore.colors.buttonTag"
      :color-background-button-order="appStore.colors.buttonOrder"
      :color-background-caption="appStore.colors.caption"
      :color-text-caption="appStore.colors.textBase"
      :color-score="appStore.colors.score"
      :elevation="15"
    />
  </div>
</template>

<script lang="ts" setup>
import { ref, onMounted } from "vue";
import ProductCard from "@/components/ProductCard.vue";
import type { Product } from "@/utils/types";
import { useAppStore } from "@/store/app";

const appStore = useAppStore();

// #region varibles
const labelButtonOrder = "Ajouter au panier";
const labelButtonTag = "Nouveau";
let scrollDiff = 0;
let startPos = 0;
//#endregion

//#region refs
const viewer = ref<HTMLElement | undefined>(undefined);
//#endregion

//#region props
interface Props {
  products: Array<Product>;
}
const props = defineProps<Props>();
//#endregion

//#region event handler
function activeMouseHandler(): void {
  if (viewer.value) {
    viewer.value.onmouseenter = onMouseEnter;
    viewer.value.onmouseleave = onMouseLeave;
  }
}
function mouseLeave(): void {
  if (viewer.value) {
    viewer.value.onmousemove = null;
    viewer.value.style.cursor = "grab";
    viewer.value.style.transform = "scale(1)";
  }
}
function onMouseEnter(): void {
  if (viewer.value) {
    viewer.value.onmousedown = onMouseDown;
    viewer.value.onmouseup = onMouseUp;
  }
}
function onMouseLeave(): void {
  mouseLeave();
}
function onMouseDown(event: MouseEvent): void {
  if (viewer.value) {
    viewer.value.onmousemove = onMouseMove;
    startPos = event.screenX;
    viewer.value.style.cursor = "grabbing";
    viewer.value.style.transform = "scale(1.1)";
  }
}
async function onMouseUp(): Promise<void> {
  if (viewer.value) {
    viewer.value.onmousemove = null;
    viewer.value.style.cursor = "grab";
    viewer.value.style.transform = "scale(1)";
  }
}
async function onMouseMove(event: MouseEvent): Promise<void> {
  if (viewer.value && event.screenX > 0) {
    scrollDiff = (startPos - event.screenX) / 30;
    viewer.value?.scrollTo({
      behavior: "instant",
      left: viewer.value?.scrollLeft + scrollDiff,
    });
  } else mouseLeave();
}
//#endregion

//#region hooks
onMounted(activeMouseHandler);
//#endregion
</script>

<style lang="scss" scoped>
.viewer-block {
  display: flex;
  overflow-x: scroll;
  width: 100%;
  padding: 50px;
  margin: auto;
  user-select: none;
  scrollbar-width: none;
  -ms-overflow-style: none;
  transition: transform 0.1s linear;
  &:hover {
    cursor: grab;
  }
  &::-webkit-scrollbar {
    display: none;
  }
}
</style>
