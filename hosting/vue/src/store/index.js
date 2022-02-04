import { createStore } from "vuex";

import mod_World from "@/store/store_world";
import mod_People from "@/store/store_people";
import mod_Finances from "@/store/store_finances";
import mod_Facilities from "@/store/store_facilities";
import mod_Resources from "@/store/store_resources";
import mod_Products from "@/store/store_products";
import mod_Work from "@/store/store_work";
import mod_Notifications from "@/store/store_notifications";
import mod_Research from "@/store/store_research";

import { toCurrency } from "@/scripts/tools.js";

export default createStore({
  state: {
    random_genders: ["male", "female"],
    random_maleFirstNames: [
      "nick",
      "lucas",
      "bryan",
      "jim",
      "jimmy",
      "john",
      "simon",
      "trevor",
      "jt",
      "troy",
      "cameron",
      "brick",
    ],
    random_femaleFirstNames: [
      "bekah",
      "shelly",
      "rebekah",
      "lindsey",
      "veronica",
      "billy jean",
      "erica",
      "sally",
      "amanda",
      "peggy",
      "macey",
      "lizzy",
      "camisha",
    ],
    random_lastNames: [
      "nielsen",
      "smith",
      "cosway",
      "built",
      "carmicheal",
      "jones",
      "bocklets",
      "kilter",
      "rogers",
      "stark",
      "leaflet",
      "bittleberry",
      "digrossi",
      "ambross",
      "davis",
      "clark",
    ],
    random_businessNames: [
      "Zemplar",
      "Top Business",
      "Zoodle",
      "SlapFace",
      "FinanceX",
      "DropLock",
      "Drip, inc",
      "Soldier Code",
      "BuySell Homes",
      "Agilense",
      "NuclearBot",
      "MegaCorp",
    ],
    random_facilityNames: [
      "Berkshire Suites",
      "Code Platform",
      "Business Venture",
      "Small Office",
      "Medium Suite",
      "The TrillePlex",
      "Shared Desks",
      "Large Complex",
      "Remote Platform",
      "Block Realestate",
      "ShareSpace",
      "Remote Warehouse",
    ],
  },
  getters: {
    random_maleFirstName(state) {
      return state.actions.selectRandom(state.random_maleFirstNames);
    },
    random_femaleFirstName(state) {
      return state.actions.selectRandom(state.random_femaleFirstNames);
    },
    random_lastName(state) {
      return state.actions.selectRandom(state.random_lastNames);
    },
    random_businessName(state) {
      return state.actions.selectRandom(state.random_businessNames);
    },
    get_facilityNames(state) {
      return state.random_facilityNames;
    },
    random_facilityName(state) {
      return state.actions.selectRandom(state.random_facilityNames);
    },
    getCurrencyFormat: () => (num) => {
      return toCurrency(num);
    },
  },
  mutations: {},
  modules: {
    world: mod_World,
    people: mod_People,
    finances: mod_Finances,
    facilities: mod_Facilities,
    resources: mod_Resources,
    products: mod_Products,
    work: mod_Work,
    notifications: mod_Notifications,
    research: mod_Research
  },
});
