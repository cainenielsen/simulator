import Loan from "../defs/loan";

const mod_Finances = {
  state: () => ({
    capital: 50000,
    trend: false,
    loans: [
      new Loan({
        name: "Dad's Offer",
        amount: 500,
        cost: 100,
        interest: 0,
      }),
      new Loan({
        name: "Small Loan",
        amount: 1000,
        cost: 100,
        interest: 0.15,
      }),
      new Loan({
        name: "Medium Loan",
        amount: 2500,
        cost: 100,
        interest: 0.20,
      }),
      new Loan({
        name: "Large Loan",
        amount: 5000,
        cost: 100,
        interest: 0.25,
      }),
    ]
  }),
  getters: {
    get_totalCosts(state, getters) {
      var totalCosts = 0;
      totalCosts = totalCosts + getters.get_totalFacilitiesCost;
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
    get_loans(state) {
      return state.loans;
    }
  },
  mutations: {
    updateBalance(state, cost) {
      state.capital = state.capital + cost;
    },
  },
  actions: {
    depositFunds({ commit }, cost) {
      commit("updateBalance", cost);
    },
    withdrawFunds({ commit }, cost) {
      commit("updateBalance", -cost);
    },
    collectCosts({ dispatch, getters }) {
      dispatch("withdrawFunds", getters.get_totalCosts);
    },
  },
  modules: {},
};

export default mod_Finances;
