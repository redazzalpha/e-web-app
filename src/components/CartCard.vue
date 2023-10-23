<template>
  <div class="cart-card bg-color-white elevation-10 my-5 mx-auto">
    <VBtn
      class="cart-card_delete-btn"
      icon="mdi-close"
      size="x-small"
      variant="plain"
      title="supprimer"
      @click="removeItem(productGroup)"
    ></VBtn>
    <div class="cart-card_content d-flex flex-row flex-sm-row">
      <VImg
        class="cart-card_content_img flex-grow-0 mr-3"
        :src="props.productGroup.img"
        cover
      ></VImg>

      <div class="cart-card_content_text d-flex flex-column justify-center">
        <span
          class="cart-card_title text-h6 d-flex flex-column flex-md-row text-body-1"
        >
          <span class="ellipsis">
            {{ props.productGroup.label }}
            <span v-if="props.productGroup.quantity > 1">
              &times; {{ props.productGroup.quantity }}
            </span>
          </span>
        </span>
        <span>
          Prix:
          <strong> {{ productGroup.price }}&euro; </strong>
        </span>

        <span>
          <strong> Total </strong>
          :
          <strong class="text-color-error">
            {{ productGroup.totalPrice }}&euro;
          </strong>
        </span>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import vuetify from "@/plugins/vuetify";
import { ProductGroup } from "@/utils/types";
import { computed } from "vue";

//#region props
interface Props {
  productGroup: ProductGroup;
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
  (event: "onRemove", productGroup: ProductGroup): void;
}
const emit = defineEmits<Emits>();
//#endregion

//#region event handlers
function removeItem(productGroup: ProductGroup): void {
  emit("onRemove", productGroup);
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
  border-radius: 10px;
  max-width: 600px;
  max-height: 150px;
  &_delete-btn {
    position: absolute;
    top: 0;
    right: 0;
    /* MARK: ISSUE ON HOW TO BIND CUSTOM COLOR IN THE CSS  */
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
