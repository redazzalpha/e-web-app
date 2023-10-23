/**
 * plugins/vuetify.ts
 *
 * Framework documentation: https://vuetifyjs.com`
 */

// Styles
import "@mdi/font/css/materialdesignicons.css";
import "vuetify/styles";

// Composables
import { createVuetify } from "vuetify";

// https://vuetifyjs.com/en/introduction/why-vuetify/#feature-guides
export default createVuetify({
  theme: {
    themes: {
      light: {
        colors: {
          primary: "#1867C0",
          secondary: "#5CBBF6",
          "color-white": "#f5f5f5",
          "color-white-dark": "#f5f5f5",
          "color-black": "#404040",
          "color-black-light": "#404040",
          "color-red": "#ff0119",
          "color-orange": "#ffb300",
          "color-blue": "#4287f5",
          "color-success": "#1dab0e",
          "color-error": "#ab0e0e",
          "color-tranparent": "transparent",
        },
      },
      dark: {
        colors: {
          primary: "#1867C0",
          secondary: "#5CBBF6",
          "color-white": "#f5f5f5",
          "color-white-dark": "#f5f5f5",
          "color-black": "#404040",
          "color-black-light": "#4040400f",
          "color-red": "#ff0119",
          "color-orange": "#ffb300",
          "color-blue": "#4287f5",
          "color-success": "#1dab0e",
          "color-error": "#ab0e0e",
          "color-tranparent": "transparent",
        },
      },
    },
    defaultTheme: "light",
  },
});
