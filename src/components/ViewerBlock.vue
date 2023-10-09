<template>
  <div class="viewer-block" ref="viewer">
    <ProductCard
      v-for="product in props.products"
      :key="product.label"
      :description="product.description"
      :img-src="product.img"
      :price="`${product.price}&euro;`"
      :score="product.score"
      btn-text="Découvrir"
      :btn-text-color="colors.textBase"
      :btn-bg-color="colors.bgGroup"
      :caption-text="product.label"
      :caption-text-color="colors.textBase"
      :caption-bg-color="colors.bgCaptionCard"
      :stars-color="colors.itemGroup"
    />
  </div>
</template>

<script lang="ts" setup>
import { ref, onMounted } from "vue";
import ProductCard from "@/components/ProductCard.vue";
import { colors } from "@/utils/colors";
import { Product } from "../utils/types";

// variables
const viewer = ref<HTMLElement | undefined>(undefined);
let scrollDiff = 0;
let startPos = 0;

// props
interface Props {
  products: Array<Product>;
}
const props = defineProps<Props>();

// handlers
function activeMouseHandler() {
  if (viewer.value) {
    viewer.value.onmouseenter = onMouseEnter;
    viewer.value.onmouseleave = onMouseLeave;
  }
}
function mouseHandlersReset() {
  if (viewer.value) {
    viewer.value.onmousedown = null;
    viewer.value.onmouseup = null;
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
  mouseHandlersReset();
}
function onMouseDown(event: MouseEvent) {
  if (viewer.value) {
    viewer.value.onmousemove = onMouseMove;
    startPos = event.screenX;
    viewer.value.style.cursor = "grabbing";
    viewer.value.style.transform = "scale(1.1)";
  }
}
function onMouseUp() {
  if (viewer.value) {
    viewer.value.onmousemove = null;
    viewer.value.style.cursor = "grab";
    viewer.value.style.transform = "scale(1)";
  }
}
function onMouseMove(event: MouseEvent) {
  if (viewer.value) {
    scrollDiff = (startPos - event.screenX) / 30;
    viewer.value?.scrollTo({
      behavior: "instant",
      left: viewer.value?.scrollLeft + scrollDiff,
    });
  }
}

// hooks
onMounted(activeMouseHandler);
</script>

<style lang="scss" scoped>
.viewer-block {
  display: flex;
  overflow-x: scroll;
  padding: 50px;
  width: 1500px;
  width: 100%;
  margin: auto;
  user-select: none;
  scrollbar-width: none;
  -ms-overflow-style: none;
  transition: transform 0.15s linear;
  &:hover {
    cursor: grab;
  }
  &::-webkit-scrollbar {
    display: none;
  }
}
</style>
