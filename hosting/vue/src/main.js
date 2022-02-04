import { createApp } from "vue";
import App from "@/App.vue";
import "@/registerServiceWorker";
import router from "@/router";
import store from "@/store";

import "./scripts/proto";

import "./scripts/firebase/firebase";
import "./scripts/firebase/firebase-analytics";
import "./scripts/firebase/firebase-app-check";
import "./scripts/firebase/firebase-auth";
import "./scripts/firebase/firebase-config";
import "./scripts/firebase/firebase-firestore";
import "./scripts/firebase/firebase-functions";
import "./scripts/firebase/firebase-messaging";
import "./scripts/firebase/firebase-performance";
import "./scripts/firebase/firebase-storage";

require("@/styles/index.css");
require("@/styles/flat_design_colors.css");

createApp(App).use(store).use(router).mount("#app");

window.addEventListener("keydown", function (ev) {
  if (ev.code === "Space" && ev.target == document.body) {
    ev.preventDefault();
  }
});
