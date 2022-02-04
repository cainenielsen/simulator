import Product from "@/defs/product.js";

const mod_Products = {
  state: () => ({
    products: [
      new Product({
        name: "test",
        cost: 20,
      }),
    ],
  }),
  getters: {
    get_allProducts(state) {
      return state.products;
    },
  },
  mutations: {

  },
  actions: {
    produceResource({ commit }, resourceId) {
      commit("addResourceCount", resourceId);
    },
  },
};

export default mod_Products;
