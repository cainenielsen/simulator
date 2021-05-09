const mod_World = {
  state: () => ({
    createdDateTime: new Date("January 1, 2000 08:00:00"),
    totalPlayTime: null,
    currentTime: new Date("January 1, 2000 08:00:00"),
    running: false,
    mode: "default", // free play, default, challenge, master mode
  }),
  getters: {
    get_worldState(state) {
      return state;
    },
  },
  mutations: {
    toggleRunning(state) {
      state.running = !state.running;
    },
    setRunning(state, manual) {
      state.running = manual;
    },
    setDate(state, minutes) {
      state.currentTime = new Date(
        state.currentTime.getTime() + minutes * 60000
      );
    },
  },
  actions: {
    toggleRunning({ commit }, manual) {
      if (manual) {
        switch (manual) {
          case "play":
            commit("setRunning", true);
            break;
          case "pause":
            commit("setRunning", false);
            break;
        }
      } else {
        commit("toggleRunning");
      }
    },
    setDate({ commit }, minutes) {
      commit("setDate", minutes);
    },
  },
  modules: {},
};

export default mod_World;
