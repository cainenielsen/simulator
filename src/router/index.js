import { createRouter, createWebHistory } from "vue-router";
import home from "@/router/home.js";
import people from "@/router/people.js";
import work from "@/router/work.js";
import finances from "@/router/finances.js";
import facilities from "@/router/facilities.js";
import resources from "@/router/resources.js";
import product from "@/router/product.js";

const routes = [home, people, work, finances, facilities, resources, product];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
