<template>
  <figure class="product-card" :class="`elevation-${props.elevation}`">
    <!-- curtain is used for avoid image
        drag and drop that cause bad behaviour
    -->
    <div class="product-card_img-curtain"></div>
    <VImg class="product-card_img" :src="props.product.img" cover>
      <!-- loader image -->
      <template v-slot:placeholder>
        <div class="d-flex align-center justify-center fill-height">
          <v-progress-circular
            color="grey-lighten-4"
            indeterminate
          ></v-progress-circular>
        </div>
      </template>
    </VImg>

    <figcaption class="product-card_caption">
      <div class="d-flex">
        <p class="product-card_caption_label flex-grow-1 text-no-wrap">
          {{ props.product.label }}
        </p>
        <strong>{{ props.product.price }}€</strong>
      </div>
      <div class="product-card_caption_score">
        <VHover>
          <template v-for="count in 6" :key="count">
            <VBtn
              :icon="
                props.product.score >= count ? 'mdi-star' : 'mdi-star-outline'
              "
              variant="plain"
              size="x-small"
            />
          </template>
        </VHover>
      </div>
      <p class="product-card_caption_desc text-no-wrap">
        {{ props.product.description }}
      </p>
    </figcaption>

    <!-- tag button -->
    <VCard
      class="product-card_tag-btn py-1 px-5"
      v-if="props.labelButtonTag && props.product.isNew"
      elevation="10"
      rounded="xs"
      variant="text"
    >
      {{ props.labelButtonTag }}
    </VCard>

    <!-- action button -->
    <VBtn
      class="product-card_action-btn"
      v-if="props.labelButtonAction"
      size="large"
      elevation="0"
      rounded="xl"
      @click.prevent.stop="props.onActionClick(product)"
    >
      {{ props.labelButtonAction }}
      <VIcon v-if="props.iconButtonAction" class="mx-2">{{
        props.iconButtonAction
      }}</VIcon>
    </VBtn>
  </figure>
</template>

<script lang="ts" setup>
import { Product } from "../utils/types";

//#region props
interface Props {
  product: Product;
  labelButtonTag?: string;
  labelButtonAction?: string;
  colorCard?: string;
  colorLabelButtonAction?: string;
  colorLabelButtonTag?: string;
  colorBackgroundButtonAction?: string;
  colorBackgroundButtonTag?: string;
  colorTextCaption?: string;
  colorBackgroundCaption?: string;
  colorScore?: string;
  width?: number;
  height?: number;
  elevation?: number;
  iconButtonAction?: string;
  onActionClick: (product?: Product) => void;
}
const props = withDefaults(defineProps<Props>(), {
  labelButtonTag: "",
  labelButtonAction: "",
  colorCard: "white",
  colorLabelButtonTag: "black",
  colorLabelButtonAction: "black",
  colorTextCaption: "black",
  colorBackgroundButtonTag: "transparent",
  colorBackgroundButtonAction: "transparent",
  colorBackgroundCaption: "white",
  colorScore: "transparent",
  width: 300,
  height: 400,
  elevation: 0,
  iconButtonAction: "",
});
//#endregion
</script>

<style lang="scss" scoped>
//#region mixins
@mixin ellipsis() {
  -o-text-overflow: ellipsis;
  -ms-text-overflow: ellipsis;
  text-overflow: ellipsis;
  overflow: hidden;
}
//#endregion

.product-card {
  display: flex;
  flex-direction: column;
  margin: 0 15px;
  border-radius: 15px;
  width: v-bind("`${props.width}px`");
  height: v-bind("`${props.height}px`");
  position: relative;
  background-color: v-bind("props.colorCard");
  &_img,
  &_img-curtain {
    border-radius: 15px 15px 0 0;
    width: 100%;
    height: 200px;
  }
  &_img-curtain {
    position: absolute;
    z-index: 1;
    height: 205px;
  }
  &_tag-btn {
    position: absolute;
    top: -10px;
    right: -15px;
    color: v-bind("props.colorLabelButtonTag");
    background-color: v-bind("props.colorBackgroundButtonTag");
    z-index: 2;
    font-weight: 900;
    font-family: "Kaushan Script", cursive;
    font-size: 20px;
  }
  &_action-btn {
    color: v-bind("props.colorLabelButtonAction");
    background-color: v-bind("props.colorBackgroundButtonAction");
    margin: 15px;
  }
  &_caption {
    display: flex;
    flex-direction: column;
    color: v-bind("props.colorTextCaption");
    background-color: v-bind("props.colorBackgroundCaption");
    padding: 15px;
    &_label {
      @include ellipsis();
    }
    &_score {
      color: v-bind("props.colorScore");
    }
    &_desc {
      @include ellipsis();
    }
  }
}
</style>
