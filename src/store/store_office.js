const mod_Office = {
  state: () => ({
    rent: 3000,
    offices: [
      {
        id: 100, 
        name: "Basement",
        cost: 1500,
        capacity: 5,
        status: "owned"
      },
      {
        id: 102, 
        name: "Small Office",
        cost: 5000,
        capacity: 10,
        status: "available"
      },
      {
        id: 103, 
        name: "Cottonwood Suites",
        cost: 10000,
        capacity: 25,
        status: "available"
      },
    ],
    resources: [
      {
        name: "SuperMeeting",
        cost: 200,
        purchased: false,
        id: 100,
        type: "apps",
      },
      {
        name: "JobLister",
        cost: 200,
        purchased: false,
        id: 101,
        type: "apps",
      },
      {
        name: "StorageMist",
        cost: 200,
        purchased: false,
        id: 102,
        type: "apps",
      },
      {
        name: "Email",
        cost: 200,
        purchased: false,
        id: 103,
        type: "apps",
      },
      {
        name: "MegaChat",
        cost: 200,
        purchased: false,
        id: 104,
        type: "apps",
      },
      {
        name: "DesignHub",
        cost: 200,
        purchased: false,
        id: 105,
        type: "apps",
      },
      {
        name: "CodeBox",
        cost: 200,
        purchased: false,
        id: 106,
        type: "apps",
      },
      {
        name: "HelpDex",
        cost: 200,
        purchased: false,
        id: 107,
        type: "apps",
      },
      {
        name: "MiniHost",
        cost: 200,
        purchased: false,
        id: 108,
        type: "apps",
      },
      {
        name: "Printer",
        cost: 200,
        purchased: false,
        id: 109,
        type: "appliances",
      },
      {
        name: "3D Printer",
        cost: 200,
        purchased: false,
        id: 110,
        type: "appliances",
      },
      {
        name: "Film Camera",
        cost: 200,
        purchased: false,
        id: 111,
        type: "appliances",
      },
      {
        name: "Small Van",
        cost: 200,
        purchased: false,
        id: 112,
        type: "vehicles",
      },
      {
        name: "Utility Truck",
        cost: 200,
        purchased: false,
        id: 113,
        type: "vehicles",
      },
      {
        name: "Semi Truck",
        cost: 200,
        purchased: false,
        id: 114,
        type: "vehicles",
      },
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
    get_resources: (state) => (id) => {
      return state.resources.find((element) => element.id == id);
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
