<template>
  <div class="viewer-block" ref="viewer">
    <ProductCard
      v-for="product in props.products"
      :key="product.label"
      :image-source="product.img"
      :description="product.description"
      :price="`${product.price}&euro;`"
      :score="product.score"
      :is-new="product.isNew"
      :label-button-tag="labelButtonTag"
      :label-button-order="labelButtonOrder"
      :text-caption="product.label"
      :color-label-button-tag="colors.labelButtonTag"
      :color-label-button-order="colors.labelButtonOrder"
      :color-background-button-tag="colors.buttonTag"
      :color-background-button-order="colors.buttonOrder"
      :color-background-caption="colors.caption"
      :color-text-caption="colors.textBase"
      :color-score="colors.score"
    />
  </div>
</template>

<script lang="ts" setup>
import { ref, onMounted } from "vue";
import ProductCard from "@/components/ProductCard.vue";
import { colors } from "@/utils/colors";
import { Product } from "@/utils/types";

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
async function onMouseEnter(): Promise<void> {
  if (viewer.value) {
    viewer.value.onmousedown = onMouseDown;
    viewer.value.onmouseup = onMouseUp;
  }
}
function onMouseLeave(): void {
  mouseLeave();
}
async function onMouseDown(event: MouseEvent): Promise<void> {
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
