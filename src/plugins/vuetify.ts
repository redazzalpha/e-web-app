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
          "color-black": "#404040",
          "color-red": "#ff0119",
          "color-orange": "#ffb300",
        },
      },
      dark: {
        colors: {
          "color-white": "#f5f5f5",
          "color-black": "#404040",
          "color-red": "#ff0119",
          "color-orange": "#ffb300",
        },
      },
    },
    defaultTheme: "light",
  },
});
