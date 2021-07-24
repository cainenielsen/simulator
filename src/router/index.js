import { createRouter, createWebHistory } from "vue-router";
import home from "./home.js";
import people from "./people.js";
import work from "./work.js";
import finances from "./finances.js";
import facilities from "./facilities.js";
import resources from "./resources.js";
import product from "./product.js";

const routes = [home, people, work, finances, facilities, resources, product];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
