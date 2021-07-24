const mod_Finance = {
  state: () => ({
    capital: 50000,
    trend: false,
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

export default mod_Finance;
