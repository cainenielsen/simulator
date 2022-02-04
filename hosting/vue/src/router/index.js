import { createRouter, createWebHistory } from "vue-router";
import home from "@/router/home.js";
import people from "@/router/people.js";
import work from "@/router/work.js";
import finances from "@/router/finances.js";
import facilities from "@/router/facilities.js";
import resources from "@/router/resources.js";
import products from "@/router/products.js";
import research from "@/router/research.js";

const routes = [
  home,
  people,
  work,
  finances,
  facilities,
  resources,
  products,
  research,
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
