import { idGenerator } from "../scripts/tools.js";

const generator = new idGenerator();

const mod_Work = {
  state: () => ({
    positionTypes: [
      {
        id: generator.generate(),
        name: "Founder",
        skills: {
          test: "",
        },
        selectable: false,
        researched: false,
        researchCost: 0,
        researchable: false,
        tasks: ["research", "manage-employees", "recruit-candidates"],
        selectedTask: "research",
      },
      {
        id: generator.generate(),
        name: "Recruiter",
        skills: {
          test: "",
        },
        selectable: true,
        researched: false,
        researchCost: 3000,
        researchable: true,
        tasks: ["recruit-candidates"],
        selectedTask: "",
      },
      {
        id: generator.generate(),
        name: "Manager",
        skills: {
          test: "",
        },
        selectable: true,
        researched: false,
        researchCost: 3500,
        researchable: true,
        tasks: [""],
        selectedTask: "",
      },
      {
        id: generator.generate(),
        name: "Analyst",
        skills: {
          test: "",
        },
        selectable: true,
        researched: false,
        researchCost: 2500,
        researchable: true,
        tasks: ["research"],
        selectedTask: "",
      },
      {
        id: generator.generate(),
        name: "Product Manager",
        skills: {
          test: "",
        },
        selectable: true,
        researched: false,
        researchCost: 2500,
        researchable: true,
        tasks: ["research"],
        selectedTask: "",
      },
      {
        id: generator.generate(),
        name: "Support",
        skills: {
          test: "",
        },
        selectable: true,
        researched: false,
        researchCost: 1500,
        researchable: true,
        tasks: [""],
        selectedTask: "",
      },
      {
        id: generator.generate(),
        name: "Engineer",
        skills: {
          test: "",
        },
        selectable: true,
        researched: false,
        researchCost: 4000,
        researchable: true,
        tasks: [""],
        selectedTask: "",
      },
      {
        id: generator.generate(),
        name: "Researcher",
        skills: {
          test: "",
        },
        selectable: true,
        researched: false,
        researchCost: 2500,
        researchable: true,
        tasks: [""],
        selectedTask: "",
      },
      {
        id: generator.generate(),
        name: "Marketeer",
        skills: {
          test: "",
        },
        selectable: true,
        researched: false,
        researchCost: 2000,
        researchable: true,
        tasks: [""],
        selectedTask: "",
      },
      {
        id: generator.generate(),
        name: "Salesmen",
        skills: {
          test: "",
        },
        selectable: true,
        researched: false,
        researchCost: 1500,
        researchable: true,
        tasks: [""],
        selectedTask: "",
      },
      {
        id: generator.generate(),
        name: "Admin",
        skills: {
          test: "",
        },
        selectable: true,
        researched: false,
        researchCost: 5000,
        researchable: true,
        tasks: [""],
        selectedTask: "",
      },
    ],
    positionLevels: [
      {
        id: generator.generate(),
        name: "Beginner",
      },
      {
        id: generator.generate(),
        name: "Novice",
      },
      {
        id: generator.generate(),
        name: "Adept",
      },
      {
        id: generator.generate(),
        name: "Advanced",
      },
      {
        id: generator.generate(),
        name: "Senior",
      },
      {
        id: generator.generate(),
        name: "Expert",
      },
      {
        id: generator.generate(),
        name: "Master",
      },
      {
        id: generator.generate(),
        name: "Legend",
      },
    ],
    tasks: [
      {
        id: generator.generate(),
        tag: "write-code",
        name: "Write Code",
      },
      {
        id: generator.generate(),
        tag: "manage-job-listing",
        name: "Manage Job Listings",
      },
      {
        id: generator.generate(),
        tag: "recruit-candidates",
        name: "Recruit Candidates",
      },
      {
        id: generator.generate(),
        tag: "manage-servers",
        name: "Manage Servers",
      },
      {
        id: generator.generate(),
        tag: "build-components",
        name: "Build Components",
      },
      {
        id: generator.generate(),
        tag: "manage-employees",
        name: "Manage Employees",
      },
      {
        id: generator.generate(),
        tag: "send-marketing-emails",
        name: "Send Marketing Emails",
      },
      {
        id: generator.generate(),
        tag: "support-clients",
        name: "Support Clients",
      },
      {
        id: generator.generate(),
        tag: "make-sales-calls",
        name: "Make Sales Calls",
      },
      {
        id: generator.generate(),
        tag: "drive-vehicles",
        name: "Drive Vehicles",
      },
      {
        id: generator.generate(),
        tag: "research",
        name: "Research",
      },
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
    setSelectedTask({ state, commit }, data) {
      console.log(data);

      let position = state.positions.find(
        (element) => element.id == data.positionId
      );
      position.selectedTask = data.taskId;

      commit("updatePosition", position);
    },
  },
};

export default mod_Work;
