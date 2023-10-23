<template>
  <VFooter
    class="footer-bar d-flex flex-column text-white text-center text-h6 mt-16 pa-0 pa-sm-5"
  >
    <section class="footer-bar_map">
      <h2 class="footer-bar_map_title mb-5 text-left text-h5 text-lg-h4">
        Nous rejoindre:
      </h2>
      <VContainer>
        <VRow class="justify-center align-center">
          <VCol class="v-col-12 v-col-lg-6">
            <a
              class="footer-bar_map_link text-white font-italic"
              :href="sources.mapImg"
              target="_self"
              title="Cliquez pour agrandir"
            >
              <figure class="mx-auto" style="max-width: 500px">
                <figcaption>Plan d'accès</figcaption>
                <VImg :src="sources.mapSmallImg" class="rounded-xl" />
              </figure>
            </a>
          </VCol>
          <VCol>
            <p class="mt-8">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non
              risus. Suspendisse lectus tortor, dignissim sit amet, adipiscing
              nec, ultricies sed, dolor. Cras elementum ultrices diam. Maecenas
              ligula massa, varius a, semper congue, euismod non, mi. Proin.
            </p>
          </VCol>
        </VRow>
      </VContainer>
    </section>

    <section class="footer-bar_follow-us">
      <h2 class="text-h5 text-lg-h4">Nous suivre:</h2>

      <VContainer grid-list-xs>
        <VRow>
          <VCol v-for="icon in props.links" :key="icon" class="v-col-3">
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

    <section class="footer-bar_text text-h6 px-3 mb-10">
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

    <!-- copyright -->
    <p class="footer-bar_copyright text-body">
      &copy; All rights reserved - <strong>Redazzalpha</strong>
      {{ new Date().getFullYear() }}.
    </p>
  </VFooter>
</template>

<script lang="ts" setup>
import * as sources from "@/utils/sources";

//#region props
interface Props {
  colorButton?: string;
  colorBackground?: string;
  links?: Array<string>;
}
const props = withDefaults(defineProps<Props>(), {
  colorButton: "black",
  colorBackground: "white",
  links: undefined,
});
//#endregion
</script>

<style lang="scss" scoped>
.footer-bar {
  background-color: v-bind("props.colorBackground");
  &_map {
    &_link {
      display: block;
      max-width: 820px;
    }
  }
  &_text {
    max-width: 1000px;
  }
}
</style>
