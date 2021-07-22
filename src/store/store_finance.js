import { idGenerator } from "../scripts/tools.js";

const generator = new idGenerator();

const mod_Finance = {
  state: () => ({
    capital: 50000,
    trend: false,
    bills: [
      {
        id: generator.generate(),
        name: "Rent",
        cost: 3000,
      },
    ],
  }),
  getters: {
    get_totalCosts(state, getters) {
      var totalCosts = 0;
      totalCosts = totalCosts + getters.get_totalOfficeCost;
      totalCosts = totalCosts + getters.get_totalResourceCost;
      totalCosts = totalCosts + getters.get_totalPayRollCost;
      return totalCosts;
    },
    get_capital(state) {
      return state.capital;
    },
    get_trend(state) {
      return state.trend;
    },
  },
  mutations: {
    withdrawFunds(state, cost) {
      state.capital = state.capital - cost;
    },
  },
  actions: {
    collectCosts({ commit, getters }) {
      commit("withdrawFunds", getters.get_totalCosts);
    },
    addBill() {
      console.log("");
    },
    removeBill() {
      console.log("");
    },
    updateBill() {
      console.log("");
    },
    updateCaptial() {
      console.log("");
    },
    processBills() {
      console.log("");
    },
  },
  modules: {},
};

export default mod_Finance;
