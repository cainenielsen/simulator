import Role from "@/defs/role.js";
import Rank from "@/defs/rank.js";
import Task from "@/defs/task.js";

const mod_Work = {
  state: () => ({
    positionTypes: [
      new Role({
        name: "Founder",
        selectable: false,
        researchCost: 0,
        researchable: false,
        tasks: ["research", "manage-employees", "recruit-candidates"],
      }),
      new Role({
        name: "Recruiter",
        researchCost: 300,
        tasks: ["recruit-candidates"],
      }),
      new Role({
        name: "Manager",
        researchCost: 350,
        tasks: [""],
      }),
      new Role({
        name: "Analyst",
        researchCost: 250,
        tasks: ["research"],
      }),
      new Role({
        name: "Product Manager",
        researchCost: 250,
        tasks: ["research"],
      }),
      new Role({
        name: "Support",
        researchCost: 150,
        tasks: [""],
      }),
      new Role({
        name: "Engineer",
        researchCost: 400,
        tasks: [""],
      }),
      new Role({
        name: "Researcher",
        researchCost: 250,
        tasks: [""],
      }),
      new Role({
        name: "Marketeer",
        researchCost: 200,
        tasks: [""],
      }),
      new Role({
        name: "Salesmen",
        researchCost: 150,
        tasks: [""],
      }),
      new Role({
        name: "Admin",
        researchCost: 500,
        tasks: [""],
      }),
    ],
    positionLevels: [
      new Rank({
        name: "Beginner",
      }),
      new Rank({
        name: "Novice",
      }),
      new Rank({
        name: "Adept",
      }),
      new Rank({
        name: "Senior",
      }),
      new Rank({
        name: "Expert",
      }),
      new Rank({
        name: "Master",
      }),
      new Rank({
        name: "Legend",
      }),
    ],
    tasks: [
      new Task({
        tag: "write-code",
        name: "Write Code",
      }),
      new Task({
        tag: "manage-job-listing",
        name: "Manage Job Listings",
      }),
      new Task({
        tag: "recruit-candidates",
        name: "Recruit Candidates",
      }),
      new Task({
        tag: "manage-servers",
        name: "Manage Servers",
      }),
      new Task({
        tag: "build-components",
        name: "Build Components",
      }),
      new Task({
        tag: "manage-employees",
        name: "Manage Employees",
      }),
      new Task({
        tag: "send-marketing-emails",
        name: "Send Marketing Emails",
      }),
      new Task({
        tag: "support-clients",
        name: "Support Clients",
      }),
      new Task({
        tag: "make-sales-calls",
        name: "Make Sales Calls",
      }),
      new Task({
        tag: "drive-vehicles",
        name: "Drive Vehicles",
      }),
      new Task({
        tag: "research",
        name: "Research",
      }),
    ],
  }),
  getters: {
    get_allTasks(state) {
      return state.tasks;
    },
    get_taskById: (state) => (id) => {
      return state.tasks.find((element) => element.id === id);
    },
    get_taskByTag: (state) => (tag) => {
      return state.tasks.find((element) => element.tag === tag);
    },
    positionTypes(state) {
      return state.positionTypes;
    },
    get_researchablePosition(state) {
      return state.positionTypes.filter(
        (element) => element.researchable === true
      );
    },
    get_researchedPosition(state) {
      return state.positionTypes.filter(
        (element) => element.researchable === false
      );
    },
    get_selectablePositionTypes(state) {
      return state.positionTypes.filter(
        (element) => element.selectable === true && element.researched === true
      );
    },
    positionLevels(state) {
      return state.positionLevels;
    },
    get_typeByName: (state) => (name) => {
      return state.positionTypes.find((element) => element.name === name);
    },
    get_levelByName: (state) => (name) => {
      return state.positionLevels.find((element) => element.name === name);
    },
    get_typeById: (state) => (id) => {
      return state.positionTypes.find((element) => element.id === id);
    },
    get_levelById: (state) => (id) => {
      return state.positionLevels.find((element) => element.id === id);
    },
  },
  mutations: {
    researchPosition(state, id) {
      let index = state.positionTypes.findIndex((element) => element.id == id);
      state.positionTypes[index].researched = !state.positionTypes[index]
        .researched;
    },
  },
  actions: {
    unlockPosition({ rootState, commit, getters }, data) {
      const positionToResearch = getters.get_typeById(data);
      if (rootState.product.researchPoints >= positionToResearch.researchCost) {
        commit("chargeResearch", positionToResearch.researchCost);
        commit("researchPosition", positionToResearch.id);
      } else {
        return "Error";
      }
    },
    task_research({ commit }) {
      commit("addResearchPoint");
    }
  },
};

export default mod_Work;
