import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import { createPinia } from "pinia";
import "./assets/tailwind.css";
import { plugin as formkitPlugin, defaultConfig } from "@formkit/vue";
import { fetchCsrfToken } from "./api/sanctum";

const init = async () => {
  await fetchCsrfToken();
  createApp(App)
    .use(createPinia())
    .use(router)
    .use(formkitPlugin, defaultConfig)
    .mount("#app");
};

init();
