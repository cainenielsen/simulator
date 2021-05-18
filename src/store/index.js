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
    research: [
      {
        name: "Salesmen",
        id: 107,
        cost: 1500,
        researched: false,
        type: "position",
      },
      {
        name: "Support",
        id: 103,
        cost: 1500,
        researched: false,
        type: "position",
      },
      {
        name: "Marketeer",
        id: 106,
        cost: 2000,
        researched: false,
        type: "position",
      },
      {
        name: "Researcher",
        id: 105,
        cost: 2500,
        researched: false,
        type: "position",
      },
      {
        name: "Analyst",
        id: 102,
        cost: 2500,
        researched: false,
        type: "position",
      },
      {
        name: "Recruiter",
        id: 100,
        cost: 3000,
        researched: false,
        type: "position",
      },
      {
        name: "Manager",
        id: 101,
        cost: 3500,
        researched: false,
        type: "position",
      },
      {
        name: "Engineer",
        id: 104,
        cost: 4000,
        researched: false,
        type: "position",
      },
      {
        name: "Admin",
        id: 108,
        cost: 5000,
        researched: false,
        type: "position",
      },
      {
        name: "Metals 1",
        id: 109,
        cost: 500,
        researched: false,
        type: "material",
      },
      {
        name: "Plastics 1",
        id: 110,
        cost: 500,
        researched: false,
        type: "material",
      },
      {
        name: "Earth 1",
        id: 111,
        cost: 500,
        researched: false,
        type: "material",
      },
      {
        name: "Paper 1",
        id: 112,
        cost: 500,
        researched: false,
        type: "material",
      },
      {
        name: "Lenses",
        id: 112,
        cost: 500,
        researched: false,
        type: "component",
      },
      {
        name: "Batteries",
        id: 112,
        cost: 500,
        researched: false,
        type: "component",
      },
      {
        name: "Wheels",
        id: 112,
        cost: 500,
        researched: false,
        type: "component",
      },
      {
        name: "Displays",
        id: 112,
        cost: 500,
        researched: false,
        type: "component",
      },
      {
        name: "Server Management",
        id: 113,
        cost: 500,
        researched: false,
        type: "software",
      },
      {
        name: "Web Server",
        id: 113,
        cost: 500,
        researched: false,
        type: "software",
      },
      {
        name: "Database",
        id: 113,
        cost: 500,
        researched: false,
        type: "software",
      },
      {
        name: "Web Application",
        id: 113,
        cost: 500,
        researched: false,
        type: "software",
      },
      {
        name: "Mobile Application",
        id: 113,
        cost: 500,
        researched: false,
        type: "software",
      },
      {
        name: "Networking",
        id: 113,
        cost: 500,
        researched: false,
        type: "software",
      },
      {
        name: "DNS",
        id: 113,
        cost: 500,
        researched: false,
        type: "software",
      },
      {
        name: "Storage Area Networks",
        id: 113,
        cost: 500,
        researched: false,
        type: "software",
      },
      {
        name: "Networking Cache",
        id: 113,
        cost: 500,
        researched: false,
        type: "software",
      },
      {
        name: "Containerization",
        id: 113,
        cost: 500,
        researched: false,
        type: "software",
      },
      {
        name: "Serverless",
        id: 113,
        cost: 500,
        researched: false,
        type: "software",
      },
      {
        name: "Programming",
        id: 113,
        cost: 500,
        researched: false,
        type: "software",
      },
      {
        name: "Satelite Networks",
        id: 113,
        cost: 500,
        researched: false,
        type: "software",
      },
      {
        name: "Media Encoding",
        id: 113,
        cost: 500,
        researched: false,
        type: "software",
      },
      {
        name: "Cybersecurity",
        id: 113,
        cost: 500,
        researched: false,
        type: "software",
      },
      {
        name: "Encrpytion",
        id: 113,
        cost: 500,
        researched: false,
        type: "software",
      },
      {
        name: "System Shell",
        id: 113,
        cost: 500,
        researched: false,
        type: "software",
      },
      {
        name: "Distributed Networks",
        id: 113,
        cost: 500,
        researched: false,
        type: "software",
      },
      {
        name: "Progressive Web Apps",
        id: 113,
        cost: 500,
        researched: false,
        type: "software",
      },
      {
        name: "Search Engine Optimization",
        id: 113,
        cost: 500,
        researched: false,
        type: "software",
      },
      {
        name: "Web Application Firewall",
        id: 113,
        cost: 500,
        researched: false,
        type: "software",
      },
      {
        name: "i18n",
        id: 113,
        cost: 500,
        researched: false,
        type: "software",
      },
      {
        name: "Server Side Code",
        id: 113,
        cost: 500,
        researched: false,
        type: "software",
      },
      {
        name: "Software Frameworks",
        id: 113,
        cost: 500,
        researched: false,
        type: "software",
      },
      {
        name: "Pub Sub",
        id: 113,
        cost: 500,
        researched: false,
        type: "software",
      },
    ],
  },
  getters: {
    get_positionResearch(state) {
      return state.research.filter((element) => element.type === "position");
    },
    get_materialResearch(state) {
      return state.research.filter((element) => element.type === "material");
    },
    get_componentResearch(state) {
      return state.research.filter((element) => element.type === "component");
    },
    get_softwareResearch(state) {
      return state.research.filter((element) => element.type === "software");
    },
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
