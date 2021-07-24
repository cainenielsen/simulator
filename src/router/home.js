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
    layout: "landing",
  },
  children: [
    {
      path: "load-game",
      name: "Load Game",
      meta: {
        layout: "landing",
      },
      component: () =>
        import(/* webpackChunkName: "about" */ "@/views/home/LoadGame.vue"),
    },
    {
      path: "new-game",
      name: "New Game",
      meta: {
        layout: "landing",
      },
      component: () =>
        import(/* webpackChunkName: "about" */ "@/views/home/NewGame.vue"),
    },
    {
      path: "settings",
      name: "Settings",
      meta: {
        layout: "landing",
      },
      component: () =>
        import(/* webpackChunkName: "about" */ "@/views/home/Settings.vue"),
    },
  ],
};
