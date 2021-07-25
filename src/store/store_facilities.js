import { selectRandom, randomNumberBetween } from "@/scripts/tools.js";

import Facility from "@/defs/facility.js";
import Resource from "@/defs/resource.js";

const mod_Facilities = {
  state: () => ({
    rent: 3000,
    facilities: [
      new Facility({
        name: "Basement",
        cost: 1500,
        rent: 200,
        capacity: 5,
        storage: 500,
        status: "owned",
        type: "office",
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
    get_facilitiesState(state) {
      return state;
    },
    get_availableFacilities(state) {
      return state.facilities.filter(
        (element) => element.status === "available"
      );
    },
    get_ownedFacilities(state) {
      return state.facilities.filter((element) => element.status === "owned");
    },
    get_capacity: (state) => (id) => {
      return state.facilities.find((element) => element.id === id).capacity;
    },
    get_facilityByName: (state) => (name) => {
      return state.facilities.find((element) => element.name === name);
    },
    get_facilityById: (state) => (id) => {
      return state.facilities.find((element) => element.id === id);
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
    get_totalFacilitiesCost(state) {
      let facilityCost = 0;
      const facilities = state.facilities.filter(
        (element) => element.status === "owned"
      );
      facilities.forEach((facility) => {
        facilityCost = facilityCost + facility.rent;
      });
      return facilityCost;
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
    claimFacility(state, item) {
      let index = state.facilities.findIndex((element) => element.id === item);
      state.facilities[index].status = "owned";
    },
    cancelItem(state, item) {
      let index = state.resources.findIndex((element) => element.id === item);
      state.resources[index].purchased = false;
    },
    addFacility(state, facility) {
      state.facilities.push(facility);
    },
    deleteFacility(state, facilityId) {
      let index = state.facilities.findIndex(
        (element) => element.id == facilityId
      );
      if (index > -1) {
        state.facilities.splice(index, 1);
      }
    },
  },
  actions: {
    createFacility({ getters, commit }) {
      const facility = new Facility({
        name: selectRandom(getters.get_facilityNames),
        cost: randomNumberBetween(5000, 50000),
        rent: randomNumberBetween(100, 2000),
        capacity: randomNumberBetween(10, 500),
        storage: randomNumberBetween(500, 5000),
        status: "available",
        type: selectRandom(["office", "storage", "storefront"]),
      });
      commit("addFacility", facility);
    },
    removeFacility({ getters, commit, dispatch }, facility) {
      if (getters.get_ownedFacilities.length > 1) {
        dispatch("depositFunds", facility.getSellPrice());
        commit("deleteFacility", facility.id);
        return "Location Deleted";
      } else {
        return "Cannot delete, only facility remaining, upgrade to full remote work to delete.";
      }
    },
    purchaseFacility({ commit, getters, dispatch }, facility) {
      if (getters.get_capital >= facility.cost) {
        dispatch("withdrawFunds", facility.cost);
        commit("claimFacility", facility.id);
        return "Facility Purchased";
      } else {
        return "Not enough cpaital.";
      }
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

export default mod_Facilities;
