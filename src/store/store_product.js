import Material from "@/defs/material.js";
import Component from "@/defs/component.js";
import Script from "@/defs/script.js";

const mod_Product = {
  state: () => ({
    researchPoints: 250,
    research: [
      new Material({
        name: "Metals 1",
        cost: 500,
        type: "material",
      }),
      new Material({
        name: "Plastics 1",
        cost: 500,
        type: "material",
      }),
      new Material({
        name: "Earth 1",
        cost: 500,
        type: "material",
      }),
      new Material({
        name: "Paper 1",
        cost: 500,
        type: "material",
      }),
      new Component({
        name: "Lenses",
        cost: 500,
        type: "component",
      }),
      new Component({
        name: "Batteries",
        cost: 500,
        type: "component",
      }),
      new Component({
        name: "Wheels",
        cost: 500,
        type: "component",
      }),
      new Component({
        name: "Displays",
        cost: 500,
        type: "component",
      }),
      new Script({
        name: "Server Management",
        cost: 500,
        type: "software",
      }),
      new Script({
        name: "Web Server",
        cost: 500,
        type: "software",
      }),
      new Script({
        name: "Database",
        cost: 500,
        type: "software",
      }),
      new Script({
        name: "Web Application",
        cost: 500,
        type: "software",
      }),
      new Script({
        name: "Mobile Application",
        cost: 500,
        type: "software",
      }),
      new Script({
        name: "Networking",
        cost: 500,
        type: "software",
      }),
      new Script({
        name: "DNS",
        cost: 500,
        type: "software",
      }),
      new Script({
        name: "Storage Area Networks",
        cost: 500,
        type: "software",
      }),
      new Script({
        name: "Networking Cache",
        cost: 500,
        type: "software",
      }),
      new Script({
        name: "Containerization",
        cost: 500,
        type: "software",
      }),
      new Script({
        name: "Serverless",
        cost: 500,
        type: "software",
      }),
      new Script({
        name: "Programming",
        cost: 500,
        type: "software",
      }),
      new Script({
        name: "Satelite Networks",
        cost: 500,
        type: "software",
      }),
      new Script({
        name: "Media Encoding",
        cost: 500,
        type: "software",
      }),
      new Script({
        name: "Cybersecurity",
        cost: 500,
        type: "software",
      }),
      new Script({
        name: "Encrpytion",
        cost: 500,
        type: "software",
      }),
      new Script({
        name: "System Shell",
        cost: 500,
        type: "software",
      }),
      new Script({
        name: "Distributed Networks",
        cost: 500,
        type: "software",
      }),
      new Script({
        name: "Progressive Web Apps",
        cost: 500,
        type: "software",
      }),
      new Script({
        name: "Search Engine Optimization",
        cost: 500,
        type: "software",
      }),
      new Script({
        name: "Web Application Firewall",
        cost: 500,
        type: "software",
      }),
      new Script({
        name: "i18n",
        cost: 500,
        type: "software",
      }),
      new Script({
        name: "Server Side Code",
        cost: 500,
        type: "software",
      }),
      new Script({
        name: "Software Frameworks",
        cost: 500,
        type: "software",
      }),
      new Script({
        name: "Pub Sub",
        cost: 500,
        type: "software",
      }),
    ],
  }),
  getters: {
    get_materialResearch(state) {
      return state.research.filter((element) => element.type === "material");
    },
    get_componentResearch(state) {
      return state.research.filter((element) => element.type === "component");
    },
    get_softwareResearch(state) {
      return state.research.filter((element) => element.type === "software");
    },
    get_research(state) {
      return state.researchPoints;
    },
    get_researchItem: (state) => (id) => {
      return state.research.find((element) => element.id === id);
    },
  },
  mutations: {
    chargeResearch(state, cost) {
      state.researchPoints = state.researchPoints - cost;
    },
    addResearchPoint(state) {
      state.researchPoints++;
    },
    setResearchPurchased(state, id) {
      let index = state.research.findIndex((element) => element.id == id);
      state.research[index].researched = !state.research[index].researched;
    },
  },
  actions: {
    researchItem({ state, commit, getters }, data) {
      const researchItem = getters.get_researchItem(data.id);
      if (state.researchPoints >= researchItem.cost) {
        commit("chargeResearch", researchItem.cost);
        commit("setResearchPurchased", researchItem.id);
      } else {
        return "Error";
      }
    },
  },
};

export default mod_Product;
