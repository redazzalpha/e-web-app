<template>
  <div class="cart-card elevation-10 my-5 mx-auto">
    <VBtn
      class="cart-card_delete-btn"
      icon="mdi-close"
      size="x-small"
      variant="plain"
      title="supprimer"
      @click="removeItem(product)"
    ></VBtn>
    <div class="cart-card_content d-flex flex-row flex-sm-row">
      <VImg
        class="cart-card_content_img flex-grow-0 mr-3"
        :src="props.product.img"
        cover
      ></VImg>

      <div class="cart-card_content_text d-flex flex-column justify-center">
        <span
          class="cart-card_title text-h6 d-flex flex-column flex-md-row text-body-1"
        >
          <span class="ellipsis">
            {{ props.product.label }}
          </span>
          <!-- <span class="mr-10 ml-md-5">
            Category:
            {{ product.category }} <br />
          </span> -->
        </span>

        <span class="d-flex flex-column">
          <span class="flex-grow-1">
            Prix:
            {{ product.price }}&euro;
          </span>
          <span class="">
            Note:
            <template v-for="count in 6" :key="count">
              <VIcon
                class="text-body-1"
                :icon="product.score >= count ? 'mdi-star' : 'mdi-star-outline'"
                variant="plain"
                :color="baseColor.orange"
              />
            </template>
          </span>
        </span>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { Product } from "@/utils/types";
import { baseColor } from "@/utils/colors";
import { useAppStore } from "@/store/app";
import { computed } from "vue";
import vuetify from "@/plugins/vuetify";

const appStore = useAppStore();

//#region props
interface Props {
  product: Product;
}
const props = defineProps<Props>();
//#endregion

//#region computed
const ellipsisWidth = computed<string>(() => {
  const width: number = vuetify.display.width.value;
  if (width > 600) return "250px";
  return `${vuetify.display.width.value - 250}px`;
});
//#endregion

//#region emits
interface Emits {
  (event: "onRemove", product: Product): void;
}
const emit = defineEmits<Emits>();
//#endregion

//#region event handlers
function removeItem(product: Product): void {
  emit("onRemove", product);
}
//#endregion
</script>

<style lang="scss" scoped>
//#region mixins
@mixin ellipsis() {
  -o-text-overflow: ellipsis;
  -ms-text-overflow: ellipsis;
  text-overflow: ellipsis;
  overflow: hidden;
  width: v-bind("ellipsisWidth");
}
//#endregion

.cart-card {
  position: relative;
  background-color: v-bind("baseColor.whiteDark");
  border-radius: 10px;
  max-width: 600px;
  max-height: 150px;
  &_delete-btn {
    position: absolute;
    top: 0;
    right: 0;
    color: red;
  }
  &_content {
    &_img {
      border-radius: 10px 0 0 10px;
      width: 150px !important;
      height: 100px !important;
    }
    &_text {
      width: 100%;
    }
  }
}
.ellipsis {
  @include ellipsis();
}
</style>
