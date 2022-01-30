import Resource from "@/defs/resource.js";

const mod_Resources = {
  state: () => ({
    resources: [
      new Resource({
        name: "RosterIt",
        cost: 200,
        purchased: false,
        type: "apps",
      }),
      new Resource({
        name: "SuperMeeting",
        cost: 200,
        purchased: false,
        type: "apps",
      }),
      new Resource({
        tag: "job-lister",
        name: "JobLister",
        cost: 200,
        purchased: false,
        type: "apps",
      }),
      new Resource({
        name: "StorageMist",
        cost: 200,
        purchased: false,
        type: "apps",
      }),
      new Resource({
        name: "Email",
        cost: 200,
        purchased: false,
        type: "apps",
      }),
      new Resource({
        name: "MegaChat",
        cost: 200,
        purchased: false,
        type: "apps",
      }),
      new Resource({
        name: "DesignHub",
        cost: 200,
        purchased: false,
        type: "apps",
      }),
      new Resource({
        name: "CodeBox",
        cost: 200,
        purchased: false,
        type: "apps",
      }),
      new Resource({
        name: "HelpDex",
        cost: 200,
        purchased: false,
        type: "apps",
      }),
      new Resource({
        name: "MiniHost",
        cost: 200,
        purchased: false,
        type: "apps",
      }),
      new Resource({
        name: "Printer",
        cost: 200,
        purchased: false,
        type: "appliances",
      }),
      new Resource({
        name: "3D Printer",
        cost: 200,
        purchased: false,
        type: "appliances",
      }),
      new Resource({
        name: "Film Camera",
        cost: 200,
        purchased: false,
        type: "appliances",
      }),
      new Resource({
        name: "Small Van",
        cost: 200,
        purchased: false,
        type: "vehicles",
      }),
      new Resource({
        name: "Utility Truck",
        cost: 200,
        purchased: false,
        type: "vehicles",
      }),
      new Resource({
        name: "Semi Truck",
        cost: 200,
        purchased: false,
        type: "vehicles",
      }),
    ],
  }),
  getters: {
    get_resourceById: (state) => (id) => {
      return state.resources.find((element) => element.id == id);
    },
    get_resourceByTag: (state) => (tag) => {
      return state.resources.find((element) => element.tag == tag);
    },
    list_resources(state) {
      return state.resources;
    },
    list_resourcesByType: (state) => (type) => {
      return state.resources.filter((element) => element.type === type);
    },
    get_activeResources(state) {
      return state.resources.filter((element) => element.purchased === true);
    },
    get_totalResourceCost(state) {
      let resourceCost = 0;
      const resources = state.resources.filter(
        (element) => element.purchased === true
      );
      resources.forEach((resource) => {
        resourceCost = resourceCost + resource.cost;
      });
      return resourceCost;
    },
  },
  mutations: {
    purchaseItem(state, item) {
      let index = state.resources.findIndex((element) => element.id === item);
      state.resources[index].purchased = true;
    },
    cancelItem(state, item) {
      let index = state.resources.findIndex((element) => element.id === item);
      state.resources[index].purchased = false;
    },
  },
  actions: {
    purchaseItem({ commit }, item) {
      commit("purchaseItem", item);
    },
    cancelItem({ commit }, item) {
      commit("cancelItem", item);
    },
  },
  modules: {},
};

export default mod_Resources;
