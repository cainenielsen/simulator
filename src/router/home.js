import Home from "@/views/home/index.vue";

export default {
  path: "/",
  name: "Home",
  component: Home,
  meta: {
    subNavItems: [
      { name: "Continue", to: "/people/staff" },
      { name: "Load Game", to: "/load-game" },
      { name: "New Game", to: "/new-game" },
      { name: "Settings", to: "/settings" },
    ],
  },
  children: [
    {
      path: "load-game",
      name: "Load Game",
      component: () =>
        import(/* webpackChunkName: "about" */ "@/views/home/LoadGame.vue"),
    },
    {
      path: "new-game",
      name: "New Game",
      component: () =>
        import(/* webpackChunkName: "about" */ "@/views/home/NewGame.vue"),
    },
    {
      path: "settings",
      name: "Settings",
      component: () =>
        import(/* webpackChunkName: "about" */ "@/views/home/Settings.vue"),
    },
  ],
};
