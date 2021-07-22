import { idGenerator } from "../scripts/tools.js";

const generator = new idGenerator();

const mod_Product = {
  state: () => ({
    researchPoints: 5000,
    research: [
      {
        name: "Salesmen",
        id: generator.generate(),
        cost: 1500,
        researched: false,
        type: "position",
      },
      {
        name: "Support",
        id: generator.generate(),
        cost: 1500,
        researched: false,
        type: "position",
      },
      {
        name: "Marketeer",
        id: generator.generate(),
        cost: 2000,
        researched: false,
        type: "position",
      },
      {
        name: "Researcher",
        id: generator.generate(),
        cost: 2500,
        researched: false,
        type: "position",
      },
      {
        name: "Analyst",
        id: generator.generate(),
        cost: 2500,
        researched: false,
        type: "position",
      },
      {
        name: "Recruiter",
        id: generator.generate(),
        cost: 3000,
        researched: false,
        type: "position",
      },
      {
        name: "Manager",
        id: generator.generate(),
        cost: 3500,
        researched: false,
        type: "position",
      },
      {
        name: "Engineer",
        id: generator.generate(),
        cost: 4000,
        researched: false,
        type: "position",
      },
      {
        name: "Admin",
        id: generator.generate(),
        cost: 5000,
        researched: false,
        type: "position",
      },
      {
        name: "Metals 1",
        id: generator.generate(),
        cost: 500,
        researched: false,
        type: "material",
      },
      {
        name: "Plastics 1",
        id: generator.generate(),
        cost: 500,
        researched: false,
        type: "material",
      },
      {
        name: "Earth 1",
        id: generator.generate(),
        cost: 500,
        researched: false,
        type: "material",
      },
      {
        name: "Paper 1",
        id: generator.generate(),
        cost: 500,
        researched: false,
        type: "material",
      },
      {
        name: "Lenses",
        id: generator.generate(),
        cost: 500,
        researched: false,
        type: "component",
      },
      {
        name: "Batteries",
        id: generator.generate(),
        cost: 500,
        researched: false,
        type: "component",
      },
      {
        name: "Wheels",
        id: generator.generate(),
        cost: 500,
        researched: false,
        type: "component",
      },
      {
        name: "Displays",
        id: generator.generate(),
        cost: 500,
        researched: false,
        type: "component",
      },
      {
        name: "Server Management",
        id: generator.generate(),
        cost: 500,
        researched: false,
        type: "software",
      },
      {
        name: "Web Server",
        id: generator.generate(),
        cost: 500,
        researched: false,
        type: "software",
      },
      {
        name: "Database",
        id: generator.generate(),
        cost: 500,
        researched: false,
        type: "software",
      },
      {
        name: "Web Application",
        id: generator.generate(),
        cost: 500,
        researched: false,
        type: "software",
      },
      {
        name: "Mobile Application",
        id: generator.generate(),
        cost: 500,
        researched: false,
        type: "software",
      },
      {
        name: "Networking",
        id: generator.generate(),
        cost: 500,
        researched: false,
        type: "software",
      },
      {
        name: "DNS",
        id: generator.generate(),
        cost: 500,
        researched: false,
        type: "software",
      },
      {
        name: "Storage Area Networks",
        id: generator.generate(),
        cost: 500,
        researched: false,
        type: "software",
      },
      {
        name: "Networking Cache",
        id: generator.generate(),
        cost: 500,
        researched: false,
        type: "software",
      },
      {
        name: "Containerization",
        id: generator.generate(),
        cost: 500,
        researched: false,
        type: "software",
      },
      {
        name: "Serverless",
        id: generator.generate(),
        cost: 500,
        researched: false,
        type: "software",
      },
      {
        name: "Programming",
        id: generator.generate(),
        cost: 500,
        researched: false,
        type: "software",
      },
      {
        name: "Satelite Networks",
        id: generator.generate(),
        cost: 500,
        researched: false,
        type: "software",
      },
      {
        name: "Media Encoding",
        id: generator.generate(),
        cost: 500,
        researched: false,
        type: "software",
      },
      {
        name: "Cybersecurity",
        id: generator.generate(),
        cost: 500,
        researched: false,
        type: "software",
      },
      {
        name: "Encrpytion",
        id: generator.generate(),
        cost: 500,
        researched: false,
        type: "software",
      },
      {
        name: "System Shell",
        id: generator.generate(),
        cost: 500,
        researched: false,
        type: "software",
      },
      {
        name: "Distributed Networks",
        id: generator.generate(),
        cost: 500,
        researched: false,
        type: "software",
      },
      {
        name: "Progressive Web Apps",
        id: generator.generate(),
        cost: 500,
        researched: false,
        type: "software",
      },
      {
        name: "Search Engine Optimization",
        id: generator.generate(),
        cost: 500,
        researched: false,
        type: "software",
      },
      {
        name: "Web Application Firewall",
        id: generator.generate(),
        cost: 500,
        researched: false,
        type: "software",
      },
      {
        name: "i18n",
        id: generator.generate(),
        cost: 500,
        researched: false,
        type: "software",
      },
      {
        name: "Server Side Code",
        id: generator.generate(),
        cost: 500,
        researched: false,
        type: "software",
      },
      {
        name: "Software Frameworks",
        id: generator.generate(),
        cost: 500,
        researched: false,
        type: "software",
      },
      {
        name: "Pub Sub",
        id: generator.generate(),
        cost: 500,
        researched: false,
        type: "software",
      },
    ],
  }),
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
  modules: {},
};

export default mod_Product;
