<template>
  <VFooter
    class="footer-bar text-center d-flex flex-column mt-10 pa-0 pa-sm-5 text-white"
  >
    <section class="footer-bar_map">
      <h2 class="footer-bar_map_title mb-5 text-left text-h5 text-lg-h4">
        Nous rejoindre:
      </h2>
      <a
        class="footer-bar_map_link"
        :href="MapImg"
        target="_self"
        title="Cliquez pour agrandir"
      >
        <VImg :src="MapImg" class="rounded-xl" />
      </a>
    </section>

    <section class="footer-bar_follow-us">
      <h2 class="text-h5 text-lg-h4">Nous suivre:</h2>

      <VContainer grid-list-xs>
        <VRow>
          <VCol v-for="icon in icons" :key="icon" class="v-col-3">
            <VBtn
              :icon="icon"
              class="text-h5 text-md-h4"
              variant="text"
              size="x-large"
              :color="props.colorButton"
            ></VBtn>
          </VCol>
        </VRow>
      </VContainer>
    </section>

    <section class="footer-bar_text text-h6">
      <p class="my-5">
        Phasellus feugiat arcu sapien, et iaculis ipsum elementum sit amet.
        Mauris cursus commodo interdum. Praesent ut risus eget metus luctus
        accumsan id ultrices nunc. Sed at orci sed massa consectetur dignissim a
        sit amet dui. Duis commodo vitae velit et faucibus. Morbi vehicula
        lacinia malesuada. Nulla placerat augue vel ipsum ultrices, cursus
        iaculis dui sollicitudin. Vestibulum eu ipsum vel diam elementum tempor
        vel ut orci. Orci varius natoque penatibus et magnis dis parturient
        montes, nascetur ridiculus mus.
      </p>
    </section>

    <v-divider></v-divider>

    <!-- copyright -->
    <p class="footer-bar_copyright text-body">
      &copy; All rights reserved - <strong>Redazzalpha</strong>
      {{ new Date().getFullYear() }}.
    </p>
  </VFooter>
</template>

<script lang="ts" setup>
import MapImg from "@/assets/map.png";

//#region props
interface Props {
  colorButton?: string;
  colorBackground?: string;
}
const props = withDefaults(defineProps<Props>(), {
  colorButton: "black",
  colorBackground: "white",
});
//#endregion

//#region arrays
const icons = ["mdi-facebook", "mdi-twitter", "mdi-linkedin", "mdi-instagram"];
//#endregion
</script>

<style lang="scss" scoped>
.footer-bar {
  background-color: v-bind("props.colorBackground");
  &_map {
    width: 100%;
    &_link {
      display: block;
      max-width: 820px;
    }
  }
}
</style>
