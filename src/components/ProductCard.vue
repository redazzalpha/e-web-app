<template>
  <figure class="product-card elevation-15">
    <VImg
      class="product-card_img"
      :src="props.imgSrc"
      cover
      draggable="false"
    />
    <figcaption class="product-card_caption">
      <div class="d-flex">
        <span class="flex-grow-1">
          {{ props.captionText }}
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
    <VBtn class="product-card_btn" size="large" elevation="0" rounded="xl">
      {{ props.btnText }}
    </VBtn>
  </figure>
</template>

<script lang="ts" setup>
// props
interface Props {
  imgSrc: string;
  description?: string;
  price?: string;
  score?: number;
  btnText?: string;
  btnTextColor?: string;
  btnBgColor?: string;
  captionText?: string;
  captionTextColor?: string;
  captionBgColor?: string;
  starsColor?: string;
}
const props = withDefaults(defineProps<Props>(), {
  description: "",
  price: "",
  score: 0,
  btnText: "",
  btnTextColor: "black",
  btnBgColor: "white",
  captionText: "",
  captionTextColor: "black",
  captionBgColor: "white",
  starsColor: "yellow",
});
</script>

<style lang="scss" scoped>
.product-card {
  display: flex;
  flex-direction: column;
  margin: 0 15px;
  border-radius: 15px;
  width: 300px;
  height: 400px;
  &_img {
    border-radius: 15px 15px 0 0;
    object-fit: none !important;
    width: 100%;
    height: 200px;
  }
  &_btn {
    color: v-bind("props.btnTextColor");
    background-color: v-bind("props.btnBgColor");
    margin: 15px;
  }
  &_caption {
    display: flex;
    flex-direction: column;
    color: v-bind("props.captionTextColor");
    background-color: v-bind("props.captionBgColor");
    padding: 15px;
    &_stars {
      color: v-bind("props.starsColor");
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
