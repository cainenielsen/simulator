import { createApp } from "vue";
import App from "./App.vue";
import "./registerServiceWorker";
import router from "./router";
import store from "./store";

require("./styles/index.css");
require("./styles/flat_design_colors.css");

createApp(App).use(store).use(router).mount("#app");

window.addEventListener("keydown", function (ev) {
  if (ev.code === "Space" && ev.target == document.body) {
    ev.preventDefault();
  }
});
