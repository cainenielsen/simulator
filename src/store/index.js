import { createStore } from "vuex";

import mod_World from "./store_world";
import mod_People from "./store_people";
import mod_Finance from "./store_finance";
import mod_Office from "./store_office";
import mod_Product from "./store_product";

export default createStore({
  state: {
    positionTypes: [
      {
        name: "Recruiter",
        skills: {
          test: "",
        },
      },
      {
        name: "Manager",
        skills: {
          test: "",
        },
      },
      {
        name: "Analyst",
        skills: {
          test: "",
        },
      },
      {
        name: "Support",
        skills: {
          test: "",
        },
      },
      {
        name: "Engineer",
        skills: {
          test: "",
        },
      },
      {
        name: "Researcher",
        skills: {
          test: "",
        },
      },
      {
        name: "Marketeer",
        skills: {
          test: "",
        },
      },
      {
        name: "Salesmen",
        skills: {
          test: "",
        },
      },
      {
        name: "Admin",
        skills: {
          test: "",
        },
      },
    ],
    positionLevels: [
      {
        name: "Beginner",
      },
      {
        name: "Novice",
      },
      {
        name: "Adept",
      },
      {
        name: "Advanced",
      },
      {
        name: "Senior",
      },
      {
        name: "Expert",
      },
      {
        name: "Master",
      },
      {
        name: "Legend",
      },
    ],
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
    random_officeNames: [
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
    positionTypes(state) {
      return state.positionTypes;
    },
    positionLevels(state) {
      return state.positionLevels;
    },
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
    random_officeName(state) {
      return state.actions.selectRandom(state.random_officeNames);
    },
  },
  mutations: {},
  modules: {
    world: mod_World,
    people: mod_People,
    finaces: mod_Finance,
    office: mod_Office,
    product: mod_Product,
  },
});
