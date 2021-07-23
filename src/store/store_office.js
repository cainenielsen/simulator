import Facility from "@/defs/facility.js";
import Resource from "@/defs/resource.js";

const mod_Office = {
  state: () => ({
    rent: 3000,
    offices: [
      new Facility({
        name: "Basement",
        cost: 1500,
        capacity: 5,
        status: "owned",
      }),
      new Facility({
        name: "Small Office",
        cost: 5000,
        capacity: 10,
        status: "available",
      }),
      new Facility({
        name: "Cottonwood Suites",
        cost: 10000,
        capacity: 25,
        status: "available",
      }),
    ],
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
    get_officeState(state) {
      return state;
    },
    get_availableOffices(state) {
      return state.offices.filter((element) => element.status === "available");
    },
    get_ownedOffices(state) {
      return state.offices.filter((element) => element.status === "owned");
    },
    get_capacity: (state) => (id) => {
      return state.offices.find((element) => element.id === id).capacity;
    },
    get_officeByName: (state) => (name) => {
      return state.offices.find((element) => element.name === name);
    },
    get_officeById: (state) => (id) => {
      return state.offices.find((element) => element.id === id);
    },
    // State is required here for whatever reason
    get_remainingCapacity: (state, getters) => (id) => {
      return getters.get_capacity(id) - getters.get_positionsInLocation(id);
    },
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
    get_totalOfficeCost(state) {
      let officeCost = 0;
      const offices = state.offices.filter(
        (element) => element.status === "owned"
      );
      offices.forEach((office) => {
        officeCost = officeCost + office.cost;
      });
      return officeCost;
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
      let index = state.resources.findIndex((element) => element.id == item);
      state.resources[index].purchased = true;
    },
    cancelItem(state, item) {
      let index = state.resources.findIndex((element) => element.id == item);
      state.resources[index].purchased = false;
    },
  },
  actions: {
    createOffice() {
      console.log("");
    },
    deleteOffice() {
      console.log("");
    },
    acceptOffice() {
      console.log("");
    },
    purchaseItem({ commit }, item) {
      commit("purchaseItem", item);
    },
    cancelItem({ commit }, item) {
      commit("cancelItem", item);
    },
  },
  modules: {},
};

export default mod_Office;
