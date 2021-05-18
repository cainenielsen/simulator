const mod_Product = {
  state: () => ({
    researchPoints: 100,
  }),
  getters: {
    get_productState(state) {
      return state;
    },
    get_research(state) {
      return state.researchPoints;
    },
  },
  mutations: {},
  actions: {},
  modules: {},
};

export default mod_Product;
