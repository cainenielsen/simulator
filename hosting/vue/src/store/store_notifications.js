import Notification from "../defs/notification";

const mod_Notifications = {
  state: () => ({
    notifications: [
      new Notification({
        name: "Hub Update",
        link: "",
        color: "--wisteria",
        icon: "fas fa-vials",
      }),
      // {
      //   title: "Work Update",
      //   link: "",
      //   color: "--orange",
      //   icon: "far fa-id-badge",
      // },
      // {
      //   title: "Resources Update",
      //   link: "",
      //   color: "--pomegranate",
      //   icon: "fas fa-grip-horizontal",
      // },
      // {
      //   title: "Products Update",
      //   link: "",
      //   color: "--peter-river",
      //   icon: "fas fa-compass",
      // },
      // {
      //   title: "Dashboard Update",
      //   link: "",
      //   color: "--emerald",
      //   icon: "fas fa-columns",
      // },
      // {
      //   title: "Capacity Update",
      //   link: "",
      //   color: "--midnight-blue",
      //   icon: "far fa-map",
      // },
    ],
  }),
  getters: {
    getNotifications(state) {
      return state.notifications;
    },
  },
  mutations: {
    addNotification(state, notification) {
      state.notifications.push(notification);
    },
    removeNotification(state, id) {
      state.notifications = state.notifications.filter(
        (notification) => notification.id !== id
      );
    },
  },
  actions: {
    createNotification({ commit }, data, timeout = 10000) {
      const notification = new Notification(data);
      commit("addNotification", notification);
      setTimeout(() => {
        commit("removeNotification", notification.id);
      }, timeout);
    },
  },
  modules: {},
};

export default mod_Notifications;
