/**
 * plugins/index.ts
 *
 * Automatically included in `./src/main.ts`
 */

// Plugins
import vuetify from "./vuetify";
import pinia from "../store";
import router from "../router";
import piniaPluginPersistedstate from "pinia-plugin-persistedstate";

// Types
import type { App } from "vue";

const piniaApp = pinia;
piniaApp.use(piniaPluginPersistedstate);

export function registerPlugins(app: App) {
  app.use(vuetify).use(router).use(piniaApp);
}
