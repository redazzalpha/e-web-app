<template>
  <figure class="product-card elevation-15">
    <!-- curtain is used for avoid image
        drag and drop that cause bad behaviour
    -->
    <div class="product-card_img-curtain"></div>
    <VImg
      class="product-card_img"
      :src="props.imageSource"
      cover
      draggable="false"
    />
    <figcaption class="product-card_caption">
      <div class="d-flex">
        <span class="flex-grow-1">
          {{ props.textCaption }}
        </span>
        <strong>{{ props.price }}</strong>
      </div>
      <div class="product-card_caption_stars">
        <template v-for="count in 6" :key="count">
          <VIcon v-if="props.score >= count">mdi-star</VIcon>
          <VIcon v-else>mdi-star-outline</VIcon>
        </template>
      </div>
      <p class="product-card_caption_desc text-no-wrap mt-5">
        {{ props.description }}
      </p>
    </figcaption>
    <!-- tag button -->
    <VBtn
      class="product-card_tag-btn"
      v-if="props.labelButtonTag && props.isNew"
      elevation="10"
      rounded="xs"
      variant="text"
    >
      {{ props.labelButtonTag }}
    </VBtn>
    <!-- order button -->
    <VBtn
      class="product-card_order-btn"
      v-if="props.labelButtonOrder"
      size="large"
      elevation="0"
      rounded="xl"
    >
      {{ props.labelButtonOrder }}
    </VBtn>
  </figure>
</template>

<script lang="ts" setup>
//#region props
interface Props {
  imageSource: string;
  description?: string;
  labelButtonTag?: string;
  labelButtonOrder?: string;
  textCaption?: string;
  price?: string;
  score?: number;
  colorLabelButtonOrder?: string;
  colorLabelButtonTag?: string;
  colorBackgroundButtonOrder?: string;
  colorBackgroundButtonTag?: string;
  colorTextCaption?: string;
  colorBackgroundCaption?: string;
  colorScore?: string;
  isNew?: boolean;
}
const props = withDefaults(defineProps<Props>(), {
  labelButtonTag: "",
  labelButtonOrder: "",
  textCaption: "",
  description: "",
  price: "",
  score: 0,
  colorLabelButtonTag: "black",
  colorLabelButtonOrder: "black",
  colorTextCaption: "black",
  colorBackgroundButtonTag: "transparent",
  colorBackgroundButtonOrder: "transparent",
  colorBackgroundCaption: "transparent",
  colorScore: "transparent",
  isNew: false,
});
//#endregion
</script>

<style lang="scss" scoped>
.product-card {
  display: flex;
  flex-direction: column;
  margin: 0 15px;
  border-radius: 15px;
  min-width: 300px;
  height: 400px;
  position: relative;
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
    font-weight: bold;
    font-family: Georgia, "Times New Roman", Times, serif;
    font-size: 20px;
  }
  &_order-btn {
    color: v-bind("props.colorLabelButtonOrder");
    background-color: v-bind("props.colorBackgroundButtonOrder");
    margin: 15px;
  }
  &_caption {
    display: flex;
    flex-direction: column;
    color: v-bind("props.colorTextCaption");
    background-color: v-bind("props.colorBackgroundCaption");
    padding: 15px;
    &_stars {
      color: v-bind("props.colorScore");
    }
    &_desc {
      -o-text-overflow: ellipsis;
      -ms-text-overflow: ellipsis;
      text-overflow: ellipsis;
      max-height: 35px;
      overflow: hidden;
    }
  }
}
</style>
