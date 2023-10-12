<template>
  <VFooter class="footer-bar text-center d-flex flex-column">
    <div>
      <VBtn
        v-for="icon in icons"
        :key="icon"
        :icon="icon"
        class="mx-4"
        variant="plain"
        size="x-large"
        :color="props.colorButton"
      ></VBtn>
    </div>

    <p class="pt-0">
      Phasellus feugiat arcu sapien, et iaculis ipsum elementum sit amet. Mauris
      cursus commodo interdum. Praesent ut risus eget metus luctus accumsan id
      ultrices nunc. Sed at orci sed massa consectetur dignissim a sit amet dui.
      Duis commodo vitae velit et faucibus. Morbi vehicula lacinia malesuada.
      Nulla placerat augue vel ipsum ultrices, cursus iaculis dui sollicitudin.
      Vestibulum eu ipsum vel diam elementum tempor vel ut orci. Orci varius
      natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.
    </p>

    <v-divider></v-divider>

    <p>
      &copy; All rights reserved - <strong>Redazzalpha</strong>
      {{ new Date().getFullYear() }}.
    </p>
  </VFooter>
</template>

<script lang="ts" setup>
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
  font-size: 24px;
  background-color: v-bind("props.colorBackground");
}
</style>
