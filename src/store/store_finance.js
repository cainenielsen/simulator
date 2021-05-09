const mod_Finance = {
  state: () => ({
    capital: 50000,
    trend: false,
    bills: [
      {
        name: "Rent",
        cost: 3000,
      },
    ],
  }),
  getters: {
    get_bills(state) {
      return state.bills;
    },
    get_capital(state) {
      return state.capital;
    },
    get_trend(state) {
      return state.trend;
    },
  },
  mutations: {},
  actions: {
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
