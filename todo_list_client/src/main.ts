import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import { createPinia } from "pinia";
import "./assets/tailwind.css";
import axios from "axios";
import { plugin as formkitPlugin, defaultConfig } from "@formkit/vue";

axios.defaults.withCredentials = true;
axios.defaults.baseURL = "http://localhost:8000";

axios
  .get("/sanctum/csrf-cookie")
  .then((response) => {
    console.log(response);
  })
  .then(() => {
    createApp(App)
      .use(createPinia())
      .use(router)
      .use(formkitPlugin, defaultConfig)
      .mount("#app");
  });
