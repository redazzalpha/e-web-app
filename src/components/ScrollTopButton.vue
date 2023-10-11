<template>
  <v-btn
    class="scroll-top-btn text-white d-flex justify-center"
    :style="[btnPositionOut, btnFontSize]"
    :size="btnSize"
    icon="mdi-chevron-up"
    color="red"
    v-scroll="onScroll"
    @click="onClick"
  >
  </v-btn>
</template>

<script lang="ts" setup>
import vuetify from "@/plugins/vuetify";
import { onMounted, computed } from "vue";

//#region variables
let button: HTMLElement | null;
//#endregion

//#region computed
const btnPositionIn = computed(() => {
  const position = { top: "", left: "" };
  switch (vuetify.display.name.value) {
    case "xs":
      position.top = "calc(100vh - 70px)";
      position.left = "calc(100vw - 60px)";
      break;
    case "sm":
      position.top = "calc(100vh - 70px)";
      position.left = "calc(100vw - 60px)";
      break;
    case "md":
      position.top = "calc(100vh - 100px)";
      position.left = "calc(100vw - 125px)";
      break;
    case "lg":
      position.top = "calc(100vh - 100px)";
      position.left = "calc(100vw - 125px)";
      break;
    case "xl":
      position.top = "calc(100vh - 100px)";
      position.left = "calc(100vw - 125px)";
      break;
    default:
      position.top = "calc(100vh - 100px)";
      position.left = "calc(100vw - 125px)";
      break;
  }
  return position;
});
const btnPositionOut = computed(() => {
  const position = { top: "", left: "" };
  switch (vuetify.display.name.value) {
    case "xs":
      position.top = "calc(100vh + 100px)";
      position.left = "calc(100vw + 125px)";
      break;
    case "sm":
      position.top = "calc(100vh + 100px)";
      position.left = "calc(100vw + 125px)";
      break;
    case "md":
      position.top = "calc(100vh + 100px)";
      position.left = "calc(100vw + 125px)";
      break;
    case "lg":
      position.top = "calc(100vh + 100px)";
      position.left = "calc(100vw + 125px)";
      break;
    case "xl":
      position.top = "calc(100vh + 100px)";
      position.left = "calc(100vw + 125px)";
      break;
    default:
      position.top = "calc(100vh + 100px)";
      position.left = "calc(100vw + 125px)";
      break;
  }
  return position;
});
const btnSize = computed(() => {
  switch (vuetify.display.name.value) {
    case "xs":
      return "default";
    case "sm":
      return "default";
    case "md":
      return "x-large";
    case "lg":
      return "x-large";
    case "xl":
      return "x-large";
    default:
      return "default";
  }
});
const btnFontSize = computed(() => {
  const font = { fontSize: "" };
  switch (vuetify.display.name.value) {
    case "xs":
      font.fontSize = "30px";
      break;
    case "sm":
      font.fontSize = "40px";
      break;
    case "md":
      font.fontSize = "40px";
      break;
    case "lg":
      font.fontSize = "40px";
      break;
    case "xl":
      font.fontSize = "40px";
      break;
    default:
      font.fontSize = "40px";
  }
  return font;
});
//#endregion

//#region event handlers
function onScroll() {
  if (button) {
    if (window.scrollY >= 400) {
      button.style.top = btnPositionIn.value.top;
      button.style.left = btnPositionIn.value.left;
    } else {
      button.style.top = btnPositionOut.value.top;
      button.style.left = btnPositionOut.value.left;
    }
  }
}
function onClick() {
  window.scrollTo({
    behavior: "smooth",
    top: 0,
  });
}
//#endregion

//#region hooks
onMounted(() => {
  button = document.querySelector(".scroll-top-btn");
});
//#endregion
</script>

<style lang="scss" scoped>
.scroll-top-btn {
  background: linear-gradient(black 40%, blue);
  position: fixed;
  transition: top 0.3s linear, left 0.3s linear;
}
</style>
