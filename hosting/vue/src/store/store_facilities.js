import { selectRandom, randomNumberBetween } from "@/scripts/tools.js";

import Facility from "@/defs/facility.js";

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
        traffic: 0.1
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
  },
  mutations: {
    claimFacility(state, item) {
      let index = state.facilities.findIndex((element) => element.id === item);
      state.facilities[index].status = "owned";
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
        traffic: randomNumberBetween(0.1, 1),
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
  },
  modules: {},
};

export default mod_Facilities;
