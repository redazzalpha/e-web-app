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
          "color-white-const": "#f5f5f5",
          "color-white-light-const": "#ffffff",
          "color-white": "#f5f5f5",
          "color-black": "#404040",
          "color-black-dark-const": "#000000",
          "color-black-const": "#404040",
          "color-black-light-const": "#3a3b3c",
          "color-red-const": "#cf0e0e",
          "color-red": "#cf0e0e",
          "color-red-secondary": "#cf0e0e",
          "color-orange-const": "#ffb300",
          "color-orange": "#ffb300",
          "color-blue": "#4287f5",
          "color-success-const": "#1dab0e",
          "color-error-const": "#cf0e0e",
        },
      },
      dark: {
        colors: {
          primary: "#1867C0",
          secondary: "#5CBBF6",
          "color-white-light-const": "#ffffff",
          "color-white-const": "#f5f5f5",
          "color-white": "#3a3b3c",
          "color-black-dark-const": "#000000",
          "color-black-const": "#404040",
          "color-black": "#f5f5f5",
          "color-black-light-const": "#3a3b3c",
          "color-red-const": "#cf0e0e",
          "color-red": "#4287f5",
          "color-red-secondary": "#ffffff",
          "color-orange-const": "#ffb300",
          "color-orange": "#4287f5",
          "color-blue": "#4287f5",
          "color-success-const": "#1dab0e",
          "color-error-const": "#cf0e0e",
          background: "#252526",
        },
      },
    },
    defaultTheme: "light",
  },
});
